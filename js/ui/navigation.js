// App Router & View Controller
const AppRouter = {
  currentView: 'map',
  activeWorldIndex: 0,
  activePhase: null,
  activePhaseQuestionIdx: 0,
  phaseStats: { correct: 0, total: 0, xpStart: 0 },

  getWorldStatus(worldIdx) {
    const worlds = [WORLD_1_DATA, WORLD_2_DATA, WORLD_3_DATA, WORLD_4_DATA, WORLD_5_DATA];
    const world = worlds[worldIdx];
    if (!world) return { isUnlocked: false, isCompleted: false, completedCount: 0, totalCount: 0 };

    const totalCount = world.phases.length;
    const completedCount = world.phases.filter(p => State.isNodeCompleted(p.id)).length;
    const isCompleted = totalCount > 0 && completedCount === totalCount;

    let isUnlocked = false;
    if (worldIdx === 0) {
      isUnlocked = true;
    } else {
      const prevWorld = worlds[worldIdx - 1];
      const prevCompleted = prevWorld && prevWorld.phases.every(p => State.isNodeCompleted(p.id));
      const firstPhaseUnlocked = world.phases[0] && State.isNodeUnlocked(world.phases[0].id);
      isUnlocked = prevCompleted || firstPhaseUnlocked;
    }

    return {
      isUnlocked,
      isCompleted,
      completedCount,
      totalCount
    };
  },

  getRecommendedWorldIndex() {
    const worlds = [WORLD_1_DATA, WORLD_2_DATA, WORLD_3_DATA, WORLD_4_DATA, WORLD_5_DATA];
    for (let i = 0; i < worlds.length; i++) {
      const status = this.getWorldStatus(i);
      if (status.isUnlocked && !status.isCompleted) {
        return i;
      }
    }
    return 0;
  },

  init() {
    this.bindHeaderStats();
    this.bindNavigationButtons();
    this.renderHeader();

    // Auto-detect player's active world based on progression
    this.activeWorldIndex = this.getRecommendedWorldIndex();

    // Listen to state changes
    State.subscribe(() => {
      this.renderHeader();
    });

    // Default route
    this.navigate('map');
  },

  navigate(viewName, params = {}) {
    this.currentView = viewName;

    // Update active nav links
    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.route === viewName) {
        link.classList.add('active');
      }
    });

    // Hide all view containers
    const views = ['view-map', 'view-lesson', 'view-quiz', 'view-review', 'view-exam', 'view-written-exam', 'view-stats', 'view-references'];
    views.forEach(v => {
      const el = document.getElementById(v);
      if (el) el.style.display = 'none';
    });

    // Hide feedback sheet if visible
    FeedbackController.hide();

    // Route handling
    switch (viewName) {
      case 'map':
        const mapEl = document.getElementById('view-map');
        if (mapEl) mapEl.style.display = 'block';
        this.renderMap();
        break;

      case 'lesson':
        const lessonEl = document.getElementById('view-lesson');
        if (lessonEl) lessonEl.style.display = 'block';
        if (params.phase) {
          this.activePhase = params.phase;
          LessonRenderer.render(params.phase, (phase) => {
            this.startPhaseQuiz(phase);
          });
        }
        break;

      case 'quiz':
        const quizEl = document.getElementById('view-quiz');
        if (quizEl) quizEl.style.display = 'block';
        break;

      case 'review':
      case 'review-quiz':
        const revEl = document.getElementById('view-review');
        if (revEl) revEl.style.display = 'block';
        if (viewName === 'review') {
          ReviewEngine.renderHub();
        }
        break;

      case 'exam':
        const examEl = document.getElementById('view-exam');
        if (examEl) examEl.style.display = 'block';
        ExamEngine.renderIntro();
        break;

      case 'written-exam':
        const writtenEl = document.getElementById('view-written-exam');
        if (writtenEl) writtenEl.style.display = 'block';
        if (typeof WrittenExamEngine !== 'undefined') {
          WrittenExamEngine.render();
        }
        break;

      case 'stats':
        const statsEl = document.getElementById('view-stats');
        if (statsEl) statsEl.style.display = 'block';
        this.renderStatsView();
        break;

      case 'references':
        const refEl = document.getElementById('view-references');
        if (refEl) refEl.style.display = 'block';
        this.renderReferencesView();
        break;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderHeader() {
    const rank = State.getPlayerRank();

    // Rank pill
    const rankEl = document.getElementById('header-rank-text');
    if (rankEl) rankEl.textContent = `Nível ${rank.level} • ${rank.name}`;

    // Streak
    const streakEl = document.getElementById('header-streak-text');
    if (streakEl) streakEl.textContent = `${State.data.streak} dias`;

    // XP
    const xpEl = document.getElementById('header-xp-text');
    if (xpEl) xpEl.textContent = `${State.data.xp.toLocaleString()} XP`;

    // Hearts (Lives)
    const heartsWrap = document.getElementById('header-hearts-wrap');
    if (heartsWrap) {
      let heartsHtml = '';
      for (let i = 0; i < State.data.maxLives; i++) {
        const isLost = i >= State.data.lives;
        heartsHtml += `<span class="heart-svg ${isLost ? 'lost' : ''}">${isLost ? Icons.get('heart', 20) : Icons.get('heartFilled', 20)}</span>`;
      }
      heartsWrap.innerHTML = heartsHtml;
    }
  },

  bindHeaderStats() {
    // Theme toggle
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
      });
    }
  },

  bindNavigationButtons() {
    document.querySelectorAll('[data-route]').forEach(el => {
      el.addEventListener('click', (e) => {
        const route = e.currentTarget.dataset.route;
        this.navigate(route);
      });
    });
  },

  // Map View Rendering
  renderMap() {
    const container = document.getElementById('map-view-container');
    if (!container) return;

    const worlds = [WORLD_1_DATA, WORLD_2_DATA, WORLD_3_DATA, WORLD_4_DATA, WORLD_5_DATA];
    if (this.activeWorldIndex < 0 || this.activeWorldIndex >= worlds.length) {
      this.activeWorldIndex = this.getRecommendedWorldIndex();
    }
    const currentWorld = worlds[this.activeWorldIndex] || worlds[0];
    const currentWorldStatus = this.getWorldStatus(this.activeWorldIndex);

    // Compute course progress
    let totalPhases = 0;
    let completedPhases = 0;
    worlds.forEach(w => {
      totalPhases += w.phases.length;
      w.phases.forEach(p => {
        if (State.isNodeCompleted(p.id)) completedPhases++;
      });
    });
    const overallProgressPct = Math.round((completedPhases / totalPhases) * 100);

    container.innerHTML = `
      <div class="map-container">
        <!-- Hero Overview -->
        <div class="map-hero-card">
          <div class="map-hero-tag">
            ${Icons.get('stethoscope', 14)} Fisiologia Humana • Estudo Ativo
          </div>
          <h1 class="map-hero-title">Fisiologia Médica</h1>
          <p class="map-hero-subtitle">
            Aprenda o mecanismo primeiro, teste a compreensão depois e domine cada sistema.
          </p>

          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; margin-bottom: 6px;">
              <span>Progresso Geral do Curso</span>
              <span>${overallProgressPct}%</span>
            </div>
            <div class="progress-bar-bg" style="background-color: rgba(255, 255, 255, 0.2);">
              <div class="progress-bar-fill emerald" style="width: ${overallProgressPct}%;"></div>
            </div>
          </div>

          <div class="map-hero-stats">
            <div class="map-hero-stat-item">
              <span class="map-hero-stat-val">${State.data.xp}</span>
              <span class="map-hero-stat-lbl">XP Total</span>
            </div>
            <div class="map-hero-stat-item">
              <span class="map-hero-stat-val">${State.data.streak} dias</span>
              <span class="map-hero-stat-lbl">Ofensiva</span>
            </div>
            <div class="map-hero-stat-item">
              <span class="map-hero-stat-val">${completedPhases}/${totalPhases}</span>
              <span class="map-hero-stat-lbl">Fases Concluídas</span>
            </div>
          </div>

          <!-- Modes Quick Launch Bar -->
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.18); display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button type="button" id="btn-hero-written-exam" class="btn" style="background-color: #ffffff; color: var(--primary-800); font-size: 0.88rem; padding: 10px 18px; font-weight: 700; border-radius: var(--radius-md); box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: none; cursor: pointer;">
              ${Icons.get('edit', 16)} Prova Escrita (23 Questões Discursivas)
            </button>
            <button type="button" id="btn-hero-exam" class="btn" style="background-color: rgba(255, 255, 255, 0.15); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.3); font-size: 0.88rem; padding: 10px 18px; font-weight: 700; border-radius: var(--radius-md); cursor: pointer;">
              ${Icons.get('exam', 16)} Simulado Oficial
            </button>
          </div>
        </div>

        <!-- World Selection Tabs -->
        <div class="worlds-selector">
          ${worlds.map((w, idx) => {
            const status = this.getWorldStatus(idx);
            let badgeHtml = '';
            let statusClass = '';
            if (status.isCompleted) {
              statusClass = 'completed';
              badgeHtml = `<span class="world-tab-badge completed">${Icons.get('check', 11)} 6/6 Concluído</span>`;
            } else if (status.isUnlocked) {
              statusClass = 'unlocked';
              badgeHtml = `<span class="world-tab-badge in-progress">${status.completedCount}/6 Fases</span>`;
            } else {
              statusClass = 'locked';
              badgeHtml = `<span class="world-tab-badge locked">${Icons.get('lock', 11)} Bloqueado</span>`;
            }
            return `
              <button class="world-tab-btn ${idx === this.activeWorldIndex ? 'active' : ''} ${statusClass}" data-world-idx="${idx}" title="${w.title}">
                <div class="world-tab-top">
                  <div class="world-icon">${Icons.get(w.icon, 18)}</div>
                  ${badgeHtml}
                </div>
                <span class="world-tab-title">${w.title}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- World Title & Subtitle Banner -->
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--slate-900);">
            ${currentWorld.title}
          </h2>
          <p style="color: var(--slate-500); font-size: 0.95rem;">
            ${currentWorld.subtitle}
          </p>
        </div>

        ${!currentWorldStatus.isUnlocked ? `
          <!-- Locked World Notice Banner -->
          <div class="card locked-world-banner" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1.5px dashed #cbd5e1; border-radius: var(--radius-xl); padding: 22px 24px; text-align: center; margin: 0 auto 28px auto; max-width: 640px;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: #e2e8f0; color: #64748b; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 10px;">
              ${Icons.get('lock', 22)}
            </div>
            <h3 style="font-size: 1.12rem; font-weight: 800; color: var(--slate-800); margin-bottom: 6px;">
              Matéria Bloqueada
            </h3>
            <p style="font-size: 0.88rem; color: var(--slate-600); margin-bottom: 14px; line-height: 1.5;">
              Para desbloquear as 6 fases de <strong>${currentWorld.title}</strong>, você precisa primeiro concluir todas as fases da matéria anterior: <strong>${worlds[this.activeWorldIndex - 1]?.title || 'anterior'}</strong>.
            </p>
            <button type="button" class="btn btn-primary btn-sm" id="btn-goto-active-world" style="margin: 0 auto; display: inline-flex; align-items: center; gap: 8px;">
              ${Icons.get('sparkles', 14)} Continuar na Matéria Liberada (${worlds[this.getRecommendedWorldIndex()].title})
            </button>
          </div>
        ` : (currentWorldStatus.isCompleted ? `
          <!-- Completed World Notice -->
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 16px; background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; border-radius: var(--radius-full); font-size: 0.84rem; font-weight: 800; box-shadow: var(--shadow-sm);">
              ${Icons.get('check', 15)} Matéria Concluída! Todas as 6 fases foram dominadas com sucesso.
            </span>
          </div>
        ` : '')}

        <!-- Learning Track Zig-Zag Nodes -->
        <div class="learning-track">
          ${currentWorld.phases.map((phase, pIdx) => {
            const isCompleted = State.isNodeCompleted(phase.id);
            const isUnlocked = State.isNodeUnlocked(phase.id);
            const isCurrent = isUnlocked && !isCompleted;
            const domain = State.getDomain(phase.topic);

            let nodeClass = 'locked';
            let iconSvg = Icons.get('lock', 26);

            if (isCompleted) {
              nodeClass = 'completed';
              iconSvg = Icons.get('check', 28);
            } else if (isCurrent) {
              nodeClass = 'current';
              iconSvg = Icons.get(currentWorld.icon, 28);
            }

            let domainClass = 'low';
            if (domain >= 75) domainClass = 'high';
            else if (domain >= 45) domainClass = 'medium';

            return `
              ${pIdx > 0 ? `
                <div class="track-connector ${isCompleted ? 'completed' : ''}"></div>
              ` : ''}

              <div class="track-node-wrapper">
                <button class="node-circle ${nodeClass}" data-phase-id="${phase.id}" ${!isUnlocked ? 'disabled' : ''}>
                  <div class="node-icon-inner">${iconSvg}</div>
                </button>
                <div class="node-info-badge">
                  <div class="node-title">${phase.title}</div>
                  <div class="node-domain-pill ${domainClass}">
                    Domínio: ${domain}%
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- World Academic Sources & Research Topics Panel -->
        <div class="card" style="margin-top: 10px; background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: var(--primary-700);">${Icons.get('book', 20)}</span>
              <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--slate-900);">
                Fontes e Tópicos de Pesquisa do ${currentWorld.title}
              </h3>
            </div>
            <button class="btn btn-outline btn-sm" id="btn-map-go-references" style="background-color: var(--bg-surface); font-weight: 700; color: var(--primary-700);">
              Ver Todas as Referências ${Icons.get('arrowRight', 14)}
            </button>
          </div>
          <p style="font-size: 0.88rem; color: var(--slate-600); line-height: 1.5; margin-bottom: 14px;">
            Fundamentado em <strong>Guyton & Hall (15ª ed.)</strong>, <strong>OpenStax A&P (2e)</strong> e <strong>Merck Manual</strong>. Clique nos tópicos abaixo para abrir diretamente artigos científicos e revisões no PubMed:
          </p>
          <div style="margin-bottom: 16px;">
            ${(() => {
              const topicsInWorld = [...new Set(currentWorld.phases.map(p => p.topic))];
              const chips = [];
              topicsInWorld.forEach(t => {
                const tr = REFERENCES_DATA.getTopicReference(t);
                if (tr && tr.researchTopics) {
                  chips.push(...tr.researchTopics.slice(0, 2));
                }
              });
              return REFERENCES_DATA.renderResearchChips(chips);
            })()}
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button type="button" class="btn-source-link primary" id="btn-map-world-deepdive" data-deepdive-title="${currentWorld.phases[0]?.topic || ''}">
              ${Icons.get('book', 13)} Estudo Integrado do Módulo
            </button>
            <button type="button" class="btn-source-link primary" id="btn-map-go-references-bottom" style="background-color: transparent; border-color: var(--border-color); color: var(--slate-700);">
              ${Icons.get('library', 13)} Central Geral de Referências
            </button>
          </div>
        </div>
      </div>
    `;

    // Button to references from map
    const goRefBtn = document.getElementById('btn-map-go-references');
    if (goRefBtn) {
      goRefBtn.addEventListener('click', () => {
        this.navigate('references');
      });
    }
    const goRefBtnBottom = document.getElementById('btn-map-go-references-bottom');
    if (goRefBtnBottom) {
      goRefBtnBottom.addEventListener('click', () => {
        this.navigate('references');
      });
    }

    // Hero quick launch buttons
    const heroWrittenBtn = document.getElementById('btn-hero-written-exam');
    if (heroWrittenBtn) {
      heroWrittenBtn.addEventListener('click', () => {
        this.navigate('written-exam');
      });
    }
    const heroExamBtn = document.getElementById('btn-hero-exam');
    if (heroExamBtn) {
      heroExamBtn.addEventListener('click', () => {
        this.navigate('exam');
      });
    }

    // Locked world banner button
    const gotoActiveBtn = document.getElementById('btn-goto-active-world');
    if (gotoActiveBtn) {
      gotoActiveBtn.addEventListener('click', () => {
        this.activeWorldIndex = this.getRecommendedWorldIndex();
        this.renderMap();
      });
    }

    // Listeners for world tabs
    container.querySelectorAll('.world-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.activeWorldIndex = parseInt(e.currentTarget.dataset.worldIdx, 10);
        this.renderMap();
      });
    });

    // Listeners for Phase nodes
    container.querySelectorAll('.node-circle:not(.locked)').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const phaseId = e.currentTarget.dataset.phaseId;
        const phase = currentWorld.phases.find(p => p.id === phaseId);
        if (phase) {
          this.navigate('lesson', { phase });
        }
      });
    });
  },

  // Start Phase Quiz
  startPhaseQuiz(phase) {
    this.activePhase = phase;
    this.activePhaseQuestionIdx = 0;
    this.phaseStats = {
      correct: 0,
      total: phase.questions.length,
      xpStart: State.data.xp
    };

    this.navigate('quiz');
    this.nextPhaseQuestion();
  },

  nextPhaseQuestion() {
    if (this.activePhaseQuestionIdx >= this.activePhase.questions.length) {
      this.finishPhase();
      return;
    }

    const question = this.activePhase.questions[this.activePhaseQuestionIdx];
    const renderCurrent = () => {
      QuestionRenderer.render(
        question,
        this.activePhaseQuestionIdx,
        this.activePhase.questions.length,
        (isCorrect, userAnswer, q, presentation) => {
          if (isCorrect) this.phaseStats.correct++;

          FeedbackController.show(
            isCorrect,
            userAnswer,
            question,
            () => {
              this.activePhaseQuestionIdx++;
              this.nextPhaseQuestion();
            },
            () => {
              renderCurrent();
            },
            presentation
          );
        }
      );
    };

    renderCurrent();
  },

  finishPhase() {
    const worlds = [WORLD_1_DATA, WORLD_2_DATA, WORLD_3_DATA, WORLD_4_DATA, WORLD_5_DATA];
    const currentWorldIdx = worlds.findIndex(w => w.phases.some(p => p.id === this.activePhase.id));
    const currentWorld = worlds[currentWorldIdx >= 0 ? currentWorldIdx : this.activeWorldIndex] || worlds[0];
    const currentWorldPhases = currentWorld.phases;

    // Unlock next phase
    State.completePhase(this.activePhase.id, this.activePhase.nextPhaseId);

    const xpEarned = State.data.xp - this.phaseStats.xpStart;
    const accuracy = Math.round((this.phaseStats.correct / this.phaseStats.total) * 100);
    const domain = State.getDomain(this.activePhase.topic);

    const isLastPhaseOfWorld = currentWorldPhases[currentWorldPhases.length - 1]?.id === this.activePhase.id;
    const isFinalPhaseOfGame = this.activePhase.id === 'w5_p6';
    const nextWorld = worlds[(currentWorldIdx >= 0 ? currentWorldIdx : this.activeWorldIndex) + 1];

    let modalTitle = 'Lição Concluída!';
    let modalSubtitle = `Você concluiu a fase <strong>${this.activePhase.title}</strong> com sucesso!`;
    let bannerAlert = '';
    let actionBtnText = `Continuar para o Mapa ${Icons.get('arrowRight', 18)}`;
    let nextWorldToSwitch = currentWorldIdx >= 0 ? currentWorldIdx : this.activeWorldIndex;

    if (isFinalPhaseOfGame) {
      modalTitle = 'Fisiologia Médica Concluída!';
      modalSubtitle = 'Parabéns! Você completou com excelência acadêmica todos os 30 níveis dos 5 Mundos!';
      bannerAlert = `
        <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 1.5px solid #6ee7b7; border-radius: var(--radius-lg); padding: 14px 18px; margin: 12px 0 16px 0; text-align: center;">
          <div style="font-size: 0.95rem; font-weight: 800; color: #065f46; display: flex; align-items: center; justify-content: center; gap: 8px;">
            ${Icons.get('trophy', 20)} Você dominou todos os 5 Sistemas do Corpo Humano!
          </div>
          <div style="font-size: 0.82rem; color: #047857; margin-top: 4px;">
            Você alcançou a maestria máxima. Teste sua precisão na Prova Escrita (23 Questões Discursivas) ou acompanhe suas métricas no Dashboard de Desempenho!
          </div>
        </div>
      `;
      actionBtnText = `Ver Dashboard de Desempenho ${Icons.get('arrowRight', 18)}`;
    } else if (isLastPhaseOfWorld && nextWorld) {
      nextWorldToSwitch = (currentWorldIdx >= 0 ? currentWorldIdx : this.activeWorldIndex) + 1;
      modalTitle = 'Matéria Concluída & Novo Módulo Desbloqueado!';
      modalSubtitle = `Você concluiu com maestria todas as fases de <strong>${currentWorld.title}</strong>!`;
      bannerAlert = `
        <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 1.5px solid #93c5fd; border-radius: var(--radius-lg); padding: 14px 18px; margin: 12px 0 16px 0; text-align: center;">
          <div style="font-size: 0.95rem; font-weight: 800; color: #1e40af; display: flex; align-items: center; justify-content: center; gap: 8px;">
            ${Icons.get('sparkles', 18)} NOVA MATÉRIA LIBERADA: ${nextWorld.title}!
          </div>
          <div style="font-size: 0.82rem; color: #1d4ed8; margin-top: 4px;">
            As 6 fases e casos clínicos deste novo módulo já estão desbloqueadas na trilha!
          </div>
        </div>
      `;
      actionBtnText = `Avançar para ${nextWorld.title} ${Icons.get('arrowRight', 18)}`;
    }

    // Show completion modal
    let modal = document.getElementById('lesson-complete-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'lesson-complete-modal';
      modal.className = 'modal-backdrop active';
      document.body.appendChild(modal);
    } else {
      modal.classList.add('active');
    }

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-icon-header success">
          ${Icons.get('trophy', 36)}
        </div>
        <h2 class="modal-title">${modalTitle}</h2>
        <div style="margin: 8px 0 14px 0;">
          <span style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 6px 18px; background: linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%); color: #be123c; border: 1.5px solid #fda4af; border-radius: var(--radius-full); font-weight: 800; font-size: 0.95rem; box-shadow: 0 2px 6px rgba(225, 29, 72, 0.15);">
            ${Icons.get('heartFilled', 18)} Eu te amo princesa!
          </span>
        </div>
        <p class="modal-subtitle">
          ${modalSubtitle}
        </p>

        ${bannerAlert}

        <div class="modal-stats-grid">
          <div class="modal-stat-box">
            <div class="modal-stat-value" style="color: var(--amber-600);">+${xpEarned}</div>
            <div class="modal-stat-label">XP Ganho</div>
          </div>
          <div class="modal-stat-box">
            <div class="modal-stat-value" style="color: var(--emerald-600);">${accuracy}%</div>
            <div class="modal-stat-label">Precisão</div>
          </div>
          <div class="modal-stat-box">
            <div class="modal-stat-value" style="color: var(--primary-700);">${domain}%</div>
            <div class="modal-stat-label">Domínio</div>
          </div>
        </div>

        <div style="display: flex; gap: 12px; flex-direction: column;">
          <button id="btn-next-lesson" class="btn btn-primary btn-lg btn-block">
            ${actionBtnText}
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-next-lesson').addEventListener('click', () => {
      modal.classList.remove('active');
      if (isFinalPhaseOfGame) {
        this.navigate('stats');
      } else {
        this.activeWorldIndex = nextWorldToSwitch;
        this.navigate('map');
      }
    });
  },

  // Stats View Rendering - Dashboard Completo de Desempenho (30 Níveis)
  renderStatsView() {
    const container = document.getElementById('stats-view-container');
    if (!container) return;

    const rank = State.getPlayerRank();
    const domains = State.data.topicDomain || {};
    const avgDomain = State.getAverageDomain();
    const accuracy = State.getOverallAccuracy();
    const worlds = [WORLD_1_DATA, WORLD_2_DATA, WORLD_3_DATA, WORLD_4_DATA, WORLD_5_DATA];

    let totalPhasesCount = 0;
    let completedPhasesCount = 0;
    const allPhases = [];

    worlds.forEach(w => {
      w.phases.forEach(p => {
        totalPhasesCount++;
        const isCompleted = State.isNodeCompleted(p.id);
        const isUnlocked = State.isNodeUnlocked(p.id);
        if (isCompleted) completedPhasesCount++;
        allPhases.push({
          ...p,
          worldId: w.id,
          worldTitle: w.title,
          worldIcon: w.icon,
          isCompleted,
          isUnlocked,
          isCurrent: isUnlocked && !isCompleted
        });
      });
    });

    const completionRate = totalPhasesCount > 0 ? Math.round((completedPhasesCount / totalPhasesCount) * 100) : 0;

    // Diagnóstico cognitivo: tópicos fortes vs fracos
    const domainEntries = Object.entries(domains);
    const strongTopics = domainEntries.filter(([_, pct]) => pct >= 70);
    const weakTopics = domainEntries.filter(([_, pct]) => pct < 70);

    // Histórico de exames
    const examHistory = State.data.examHistory || [];

    container.innerHTML = `
      <div style="width: 100%; max-width: 100%; padding-bottom: 60px;">
        <!-- Header: Perfil do Estudante & Patente -->
        <div class="card" style="margin-bottom: 28px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-xl); padding: 28px; box-shadow: var(--shadow-lg);">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 20px;">
              <div style="width: 72px; height: 72px; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--primary-500), var(--primary-700)); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);">
                ${Icons.get('trophy', 36)}
              </div>
              <div>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px; flex-wrap: wrap;">
                  <span class="badge badge-primary" style="font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">
                    Patente Nível ${rank.level} de 7
                  </span>
                  <span class="badge badge-success" style="font-weight: 700;">
                    ${completedPhasesCount} de ${totalPhasesCount} Níveis Concluídos (${completionRate}%)
                  </span>
                </div>
                <h1 style="font-size: 1.85rem; font-weight: 900; margin: 0; color: #ffffff; letter-spacing: -0.02em;">
                  ${rank.name}
                </h1>
                <p style="font-size: 0.92rem; color: var(--slate-300); margin-top: 4px;">
                  ${State.data.xp.toLocaleString()} XP acumulados na jornada de Fisiologia Médica
                </p>
              </div>
            </div>

            <div style="min-width: 260px; flex: 1; max-width: 380px; background: rgba(255,255,255,0.06); padding: 16px 20px; border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.1);">
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 800; margin-bottom: 6px; color: var(--slate-200);">
                <span>Progresso para Próxima Patente</span>
                <span>${rank.progressToNext}%</span>
              </div>
              <div class="progress-bar-bg" style="background-color: rgba(255, 255, 255, 0.15); height: 10px;">
                <div class="progress-bar-fill" style="width: ${rank.progressToNext}%; background: linear-gradient(90deg, #38bdf8, #3b82f6); height: 10px;"></div>
              </div>
              <div style="font-size: 0.76rem; color: var(--slate-400); margin-top: 6px; text-align: right;">
                ${rank.next ? `Faltam ${Math.max(0, rank.next.minXp - State.data.xp).toLocaleString()} XP para ${rank.next.name}` : 'Patente Máxima Alcançada!'}
              </div>
            </div>
          </div>
        </div>

        <!-- KPI Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 16px; margin-bottom: 32px;">
          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg);">
            <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px; letter-spacing: 0.05em;">Ofensiva de Estudos</div>
            <div style="font-size: 2rem; font-weight: 900; color: var(--amber-600);">${State.data.streak} dias</div>
            <div style="font-size: 0.75rem; color: var(--slate-400); margin-top: 2px;">Constância diária</div>
          </div>
          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg);">
            <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px; letter-spacing: 0.05em;">Precisão Global</div>
            <div style="font-size: 2rem; font-weight: 900; color: var(--emerald-600);">${accuracy}%</div>
            <div style="font-size: 0.75rem; color: var(--slate-400); margin-top: 2px;">Taxa de acertos</div>
          </div>
          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg);">
            <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px; letter-spacing: 0.05em;">Domínio Médio</div>
            <div style="font-size: 2rem; font-weight: 900; color: var(--primary-700);">${avgDomain}%</div>
            <div style="font-size: 0.75rem; color: var(--slate-400); margin-top: 2px;">Em 30 temas</div>
          </div>
          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg);">
            <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px; letter-spacing: 0.05em;">Questões Respondidas</div>
            <div style="font-size: 2rem; font-weight: 900; color: var(--slate-900);">${State.data.answeredCount || 0}</div>
            <div style="font-size: 0.75rem; color: var(--slate-400); margin-top: 2px;">${State.data.correctCount || 0} acertos</div>
          </div>
          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg);">
            <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px; letter-spacing: 0.05em;">Banco de Revisão</div>
            <div style="font-size: 2rem; font-weight: 900; color: ${(State.data.reviewBank && State.data.reviewBank.length > 0) ? 'var(--crimson-600)' : 'var(--emerald-600)'};">
              ${(State.data.reviewBank || []).length}
            </div>
            <div style="font-size: 0.75rem; color: var(--slate-400); margin-top: 2px;">Itens para revisar</div>
          </div>
        </div>

        <!-- Matriz Interativa dos 30 Níveis -->
        <div class="card" style="margin-bottom: 32px; border-radius: var(--radius-xl); padding: 28px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <span style="color: var(--primary-600); font-weight: 800;">${Icons.get('sparkles', 20)}</span>
                <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--slate-900); margin: 0;">
                  Matriz Curricular de 30 Níveis
                </h2>
              </div>
              <p style="font-size: 0.88rem; color: var(--slate-500); margin: 0;">
                Acompanhe o estado de desbloqueio, precisão e domínio de cada um dos 30 níveis do curso.
              </p>
            </div>
            <div style="display: flex; gap: 12px; font-size: 0.78rem; font-weight: 700; align-items: center;">
              <span style="display: flex; align-items: center; gap: 4px; color: var(--emerald-700);">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: var(--emerald-500); display: inline-block;"></span> Concluído
              </span>
              <span style="display: flex; align-items: center; gap: 4px; color: var(--primary-700);">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: var(--primary-500); display: inline-block;"></span> Atual / Desbloqueado
              </span>
              <span style="display: flex; align-items: center; gap: 4px; color: var(--slate-400);">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: var(--slate-300); display: inline-block;"></span> Bloqueado
              </span>
            </div>
          </div>

          <!-- Grid dos 30 Níveis -->
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
            ${allPhases.map((phase, idx) => {
              const phaseNum = idx + 1;
              const topicPct = State.getDomain(phase.topic);
              let cardBg = 'var(--slate-50)';
              let borderColor = 'var(--border-color)';
              let statusBadge = `<span class="badge" style="background: var(--slate-200); color: var(--slate-600);">${Icons.get('lock', 12)} Bloqueado</span>`;

              if (phase.isCompleted) {
                cardBg = 'var(--emerald-50)';
                borderColor = 'var(--emerald-300)';
                statusBadge = `<span class="badge badge-success">${Icons.get('check', 12)} Concluído</span>`;
              } else if (phase.isUnlocked) {
                cardBg = 'var(--primary-50)';
                borderColor = 'var(--primary-400)';
                statusBadge = `<span class="badge badge-primary">${Icons.get('sparkles', 12)} Atual</span>`;
              }

              return `
                <div style="background: ${cardBg}; border: 1.5px solid ${borderColor}; border-radius: var(--radius-lg); padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 10px; transition: transform 0.15s ease;">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                      <span style="font-size: 0.72rem; font-weight: 800; color: var(--slate-500); text-transform: uppercase;">
                        Nível ${phaseNum} • ${phase.worldTitle.split('&')[0].trim()}
                      </span>
                      ${statusBadge}
                    </div>
                    <div style="font-size: 0.95rem; font-weight: 800; color: var(--slate-900); line-height: 1.35; margin-bottom: 4px;">
                      ${phase.title}
                    </div>
                    <div style="font-size: 0.78rem; color: var(--slate-600);">
                      Tópico: <strong>${phase.topic}</strong>
                    </div>
                  </div>

                  <div style="border-top: 1px solid rgba(0,0,0,0.06); padding-top: 8px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                    <div style="flex: 1;">
                      <div style="display: flex; justify-content: space-between; font-size: 0.72rem; font-weight: 700; color: var(--slate-600); margin-bottom: 2px;">
                        <span>Domínio</span>
                        <span>${topicPct}%</span>
                      </div>
                      <div class="progress-bar-bg" style="height: 6px;">
                        <div class="progress-bar-fill ${topicPct >= 70 ? 'emerald' : (topicPct >= 40 ? 'amber' : 'crimson')}" style="width: ${topicPct}%; height: 6px;"></div>
                      </div>
                    </div>

                    ${phase.isUnlocked ? `
                      <button type="button" class="btn btn-sm btn-outline" onclick="(window.AppRouter || window.App.Navigation).startPhase('${phase.id}')" style="font-size: 0.74rem; padding: 4px 10px; font-weight: 700; white-space: nowrap;">
                        ${phase.isCompleted ? 'Revisar' : 'Jogar'}
                      </button>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Desempenho por Sistema / Mundo (5 Sistemas) -->
        <div class="card" style="margin-bottom: 32px; border-radius: var(--radius-xl); padding: 28px;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--slate-900); margin-bottom: 20px;">
            Progresso por Sistema Fisiológico (5 Mundos)
          </h2>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            ${worlds.map((w, wIdx) => {
              const worldPhases = w.phases;
              const wCompleted = worldPhases.filter(p => State.isNodeCompleted(p.id)).length;
              const wTotal = worldPhases.length;
              const wPct = Math.round((wCompleted / wTotal) * 100);

              // Domínio médio dos tópicos deste mundo
              const worldTopics = worldPhases.map(p => p.topic);
              const wDomainSum = worldTopics.reduce((acc, t) => acc + State.getDomain(t), 0);
              const wDomainAvg = worldTopics.length > 0 ? Math.round(wDomainSum / worldTopics.length) : 0;

              return `
                <div style="border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 18px 20px; background: var(--slate-50);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 10px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <div style="width: 38px; height: 38px; border-radius: var(--radius-md); background: var(--primary-100); color: var(--primary-800); display: flex; align-items: center; justify-content: center;">
                        ${Icons.get(w.icon, 20)}
                      </div>
                      <div>
                        <div style="font-size: 1.05rem; font-weight: 800; color: var(--slate-900);">
                          Mundo ${wIdx + 1}: ${w.title}
                        </div>
                        <div style="font-size: 0.8rem; color: var(--slate-500);">
                          ${w.subtitle}
                        </div>
                      </div>
                    </div>
                    <div style="display: flex; gap: 16px; align-items: center;">
                      <div style="text-align: right;">
                        <div style="font-size: 0.75rem; color: var(--slate-500); font-weight: 700; text-transform: uppercase;">Níveis Concluídos</div>
                        <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary-700);">${wCompleted} / ${wTotal}</div>
                      </div>
                      <div style="text-align: right;">
                        <div style="font-size: 0.75rem; color: var(--slate-500); font-weight: 700; text-transform: uppercase;">Domínio Médio</div>
                        <div style="font-size: 1.1rem; font-weight: 800; color: ${wDomainAvg >= 70 ? 'var(--emerald-600)' : 'var(--amber-600)'};">${wDomainAvg}%</div>
                      </div>
                    </div>
                  </div>

                  <div class="progress-bar-bg" style="height: 8px;">
                    <div class="progress-bar-fill emerald" style="width: ${wPct}%; height: 8px;"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Diagnóstico Cognitivo: Pontos Fortes vs. Áreas de Reforço -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 32px;">
          <!-- Pontos Fortes -->
          <div class="card" style="border-radius: var(--radius-xl); padding: 24px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
              <span style="color: var(--emerald-600);">${Icons.get('check', 20)}</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--slate-900); margin: 0;">
                Pontos Fortes (Domínio ≥ 70%)
              </h3>
            </div>
            ${strongTopics.length === 0 ? `
              <p style="font-size: 0.88rem; color: var(--slate-500); line-height: 1.5;">
                Nenhum tópico atingiu 70% ainda. Continue resolvendo questões e completando os níveis para consolidar a memória!
              </p>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${strongTopics.map(([topic, pct]) => `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--emerald-50); border: 1px solid var(--emerald-200); border-radius: var(--radius-md);">
                    <span style="font-size: 0.88rem; font-weight: 700; color: var(--emerald-950);">${topic}</span>
                    <span style="font-size: 0.86rem; font-weight: 800; color: var(--emerald-700);">${pct}%</span>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Áreas que Precisam de Reforço -->
          <div class="card" style="border-radius: var(--radius-xl); padding: 24px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
              <span style="color: var(--amber-600);">${Icons.get('book', 20)}</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--slate-900); margin: 0;">
                Tópicos para Reforço & Estudo (< 70%)
              </h3>
            </div>
            ${weakTopics.length === 0 ? `
              <p style="font-size: 0.88rem; color: var(--emerald-600); font-weight: 700;">
                Extraordinário! Todos os tópicos avaliados estão no patamar de domínio excelente!
              </p>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 10px; max-height: 380px; overflow-y: auto; padding-right: 4px;">
                ${weakTopics.slice(0, 8).map(([topic, pct]) => `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                    <div>
                      <div style="font-size: 0.88rem; font-weight: 700; color: var(--slate-900);">${topic}</div>
                      <div style="font-size: 0.75rem; color: var(--slate-500);">Domínio atual: ${pct}%</div>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline" onclick="REFERENCES_DATA.openDeepDiveModal('${topic.replace(/'/g, "\\'")}')" style="font-size: 0.74rem; padding: 4px 10px;">
                      Estudar
                    </button>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>

        <!-- Histórico de Avaliações (Simulados e Prova Escrita) -->
        <div class="card" style="margin-bottom: 32px; border-radius: var(--radius-xl); padding: 28px;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--slate-900); margin-bottom: 16px;">
            Histórico de Avaliações Oficiais & Prova Escrita
          </h2>
          ${examHistory.length === 0 ? `
            <div style="text-align: center; padding: 28px 20px; background: var(--slate-50); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
              <p style="font-size: 0.92rem; color: var(--slate-500); margin-bottom: 12px;">
                Você ainda não realizou simulados oficiais ou provas escritas completas.
              </p>
              <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
                <button type="button" class="btn btn-primary btn-sm" onclick="(window.AppRouter || window.App.Navigation).navigate('written-exam')">
                  ${Icons.get('edit', 14)} Fazer Prova Escrita (23 Questões)
                </button>
                <button type="button" class="btn btn-outline btn-sm" onclick="(window.AppRouter || window.App.Navigation).navigate('exam')">
                  ${Icons.get('exam', 14)} Fazer Simulado Oficial
                </button>
              </div>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${examHistory.slice(-5).reverse().map(ex => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: #ffffff;">
                  <div>
                    <div style="font-weight: 800; font-size: 0.95rem; color: var(--slate-900);">
                      ${ex.type === 'written' ? 'Prova Escrita Discursiva' : 'Simulado Oficial'}
                    </div>
                    <div style="font-size: 0.78rem; color: var(--slate-500);">
                      ${new Date(ex.date).toLocaleDateString('pt-BR')} às ${new Date(ex.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 1.15rem; font-weight: 900; color: ${ex.score >= 70 ? 'var(--emerald-600)' : 'var(--amber-600)'};">
                      ${ex.score}%
                    </div>
                    <div style="font-size: 0.75rem; color: var(--slate-500);">
                      ${ex.correct}/${ex.total} questões
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Zona de Manutenção Local (Reset) -->
        <div style="text-align: right; border-top: 1px solid var(--border-color); padding-top: 20px;">
          <button id="btn-reset-data" class="btn btn-outline btn-sm" style="color: var(--crimson-600); border-color: var(--crimson-200); font-weight: 700;">
            Reiniciar Todo o Progresso do Jogo
          </button>
        </div>
      </div>
    `;

    const resetBtn = document.getElementById('btn-reset-data');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Atenção: isto apagará seu XP, vidas e progresso dos 30 níveis no navegador. Deseja reiniciar?')) {
          State.resetAllProgress();
          this.navigate('map');
        }
      });
    }
  },

  // General References View Rendering
  // References View State & Methods
  refViewState: {
    world: 'all',
    search: ''
  },

  setRefWorldFilter(worldId) {
    this.refViewState.world = worldId;
    this.renderReferencesView();
  },

  setRefTopicBook(phaseId, bookId) {
    const cardEl = document.getElementById(`ref-card-${phaseId}`);
    if (!cardEl) return;
    const topic = REFERENCES_DATA.getTopic(phaseId);
    if (!topic) return;

    const availableBooks = [
      { id: 'guyton', name: 'Guyton & Hall', badge: '15ª Ed.', color: 'var(--primary-600)', data: topic.guyton },
      { id: 'berne', name: 'Berne & Levy', badge: '7ª Ed.', color: 'var(--primary-800)', data: topic.berne },
      { id: 'costanzo', name: 'Costanzo', badge: '7ª Ed.', color: 'var(--emerald-600)', data: topic.costanzo },
      { id: 'specialist', name: topic.specialistTitle || 'Tratado Avançado', badge: topic.specialistBadge || 'Especialidade', color: 'var(--purple-600)', data: topic.specialistSource },
      { id: 'openstax', name: 'OpenStax A&P', badge: '2ª Ed.', color: 'var(--blue-600)', data: topic.openstax },
      { id: 'merck', name: 'Manual MSD', badge: 'Profissional', color: 'var(--amber-600)', data: topic.merck }
    ].filter(b => b.data && b.data.summary);

    const sel = availableBooks.find(b => b.id === bookId) || availableBooks[0];
    const displayEl = cardEl.querySelector('.ref-book-content-display');
    if (displayEl) {
      displayEl.style.borderLeftColor = sel.color;
      displayEl.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
          <div>
            <span class="badge" style="background: ${sel.color}; color: #ffffff; font-size: 0.72rem; margin-bottom: 4px;">
              ${sel.name} • ${sel.badge}
            </span>
            <div style="font-size: 0.92rem; font-weight: 800; color: var(--slate-900);">
              ${sel.data.chapter || sel.data.section || 'Capítulo da Obra'}
            </div>
            ${sel.data.pages ? `<div style="font-size: 0.78rem; color: var(--slate-500); font-family: monospace;">Páginas: ${sel.data.pages}</div>` : ''}
          </div>
        </div>
        <p style="font-size: 0.93rem; color: var(--slate-800); line-height: 1.7; margin-bottom: 12px; text-align: justify;">
          ${sel.data.summary}
        </p>
        ${sel.data.keyPoint ? `
          <div style="font-size: 0.86rem; font-weight: 700; color: var(--slate-900); background-color: #ffffff; border: 1px solid var(--border-color); border-left: 4px solid ${sel.color}; padding: 10px 14px; border-radius: var(--radius-sm);">
            <strong>Ponto-Chave de Avaliação:</strong> ${sel.data.keyPoint}
          </div>
        ` : ''}
      `;
    }

    cardEl.querySelectorAll('.ref-book-tab-btn').forEach(btn => {
      const isCurrent = (btn.dataset.bookId === bookId);
      btn.style.background = isCurrent ? 'var(--bg-surface)' : 'var(--slate-50)';
      btn.style.color = isCurrent ? 'var(--primary-700)' : 'var(--slate-600)';
      btn.style.borderBottom = isCurrent ? '3px solid var(--primary-600)' : 'none';
      btn.style.fontWeight = isCurrent ? '800' : '600';
    });
  },

  // General References View Rendering
  renderReferencesView() {
    const container = document.getElementById('references-view-container');
    if (!container) return;

    const p = REFERENCES_DATA.primarySources;
    const allTopics = REFERENCES_DATA.getAllTopicsList();

    // Filtering logic
    const curWorld = this.refViewState.world || 'all';
    const curSearch = (this.refViewState.search || '').trim().toLowerCase();

    const filteredTopics = allTopics.filter(t => {
      if (curWorld !== 'all' && t.worldId !== curWorld) return false;
      if (curSearch) {
        const matchesName = t.topicName.toLowerCase().includes(curSearch);
        const matchesCategory = (t.category || '').toLowerCase().includes(curSearch);
        const matchesTitle = (t.phaseTitle || '').toLowerCase().includes(curSearch);
        const matchesSubtopics = (t.researchTopics || []).some(rt => rt.title.toLowerCase().includes(curSearch));
        const matchesGuyton = (t.guyton && t.guyton.summary && t.guyton.summary.toLowerCase().includes(curSearch));
        return matchesName || matchesCategory || matchesTitle || matchesSubtopics || matchesGuyton;
      }
      return true;
    });

    const worldLabels = [
      { id: 'all', label: 'Todos os Sistemas (30 Temas)' },
      { id: 'w1', label: 'Mundo 1: Celular & Homeostase' },
      { id: 'w2', label: 'Mundo 2: Sangue & Hemostasia' },
      { id: 'w3', label: 'Mundo 3: Cardiovascular' },
      { id: 'w4', label: 'Mundo 4: Respiratório' },
      { id: 'w5', label: 'Mundo 5: Renal & Integrado' }
    ];

    container.innerHTML = `
      <div style="width: 100%; max-width: 100%; padding-bottom: 60px;">
        <!-- Hero Header -->
        <div class="card" style="background: linear-gradient(135deg, #0f172a, #1e3a8a); color: #ffffff; border-radius: var(--radius-xl); padding: 36px 32px; margin-bottom: 32px; box-shadow: var(--shadow-lg);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
            <span class="badge" style="background-color: rgba(255, 255, 255, 0.2); color: #ffffff;">
              ${Icons.get('book', 14)} 9 Obras de Referência Médica
            </span>
            <span class="badge" style="background-color: rgba(16, 185, 129, 0.3); color: #a7f3d0;">
              30 Níveis Curriculares
            </span>
            <span class="badge" style="background-color: rgba(244, 63, 94, 0.3); color: #fecdd3;">
              120 Subtópicos de Estudo
            </span>
          </div>
          <h1 style="font-size: 2rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 8px;">
            Fontes, Obras Acadêmicas e Aprofundamento
          </h1>
          <p style="color: var(--primary-100); font-size: 1rem; line-height: 1.6; max-width: 950px;">
            Todo o conteúdo do FisioDengo é rigorosamente fundamentado nos maiores tratados de Fisiologia Médica mundial. Clique nos temas e selecione qualquer uma das obras para alternar a leitura dos textos e mecanismos em tempo real.
          </p>
        </div>

        <!-- Academic Primary Sources Cards (9 Obras de Ouro) -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;">
          <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--slate-900); display: flex; align-items: center; gap: 8px;">
            ${Icons.get('trophy', 20)} As 9 Obras Acadêmicas de Ouro Integradas
          </h2>
          <span style="font-size: 0.8rem; color: var(--slate-500); font-weight: 700;">
            Literatura Médica de Consenso Global
          </span>
        </div>

        <div class="references-grid" style="margin-bottom: 36px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
          ${Object.values(p).map(source => `
            <div class="source-card primary-source" style="padding: 20px; display: flex; flex-direction: column; justify-content: space-between; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
              <div>
                <div class="source-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span class="badge ${source.tagClass || 'badge-primary'}" style="font-size: 0.7rem;">${source.tag}</span>
                  <span style="font-size: 0.72rem; font-weight: 700; color: var(--slate-400); text-transform: uppercase;">${source.publisher}</span>
                </div>
                <h3 class="source-title" style="font-size: 1.15rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">${source.title}</h3>
                <div class="source-authors" style="font-size: 0.82rem; margin-bottom: 8px; color: var(--slate-700);">
                  <strong>Autores/Edição:</strong> ${source.authors} • ${source.edition}
                </div>
                <p style="font-size: 0.86rem; color: var(--slate-600); line-height: 1.5; margin-bottom: 14px;">
                  ${source.description}
                </p>
              </div>
              <div class="source-footer" style="border-top: 1px solid var(--border-color); padding-top: 12px;">
                <button type="button" class="btn btn-outline btn-block btn-sm" onclick="REFERENCES_DATA.openSourceModal('${source.id}')" style="font-weight: 700;">
                  ${Icons.get('book', 14)} Ver Ficha Técnica Completa
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Painel Interativo de Filtragem e Busca de Temas -->
        <div class="card" style="padding: 24px; background: #ffffff; border: 1.5px solid var(--border-color); border-radius: var(--radius-xl); margin-bottom: 30px; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
            <div>
              <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--slate-900); display: flex; align-items: center; gap: 8px;">
                ${Icons.get('search', 20)} Explorador Interativo de Temas & Fontes
              </h2>
              <p style="font-size: 0.85rem; color: var(--slate-500); margin: 2px 0 0 0;">
                Selecione o sistema ou digite palavras-chave para filtrar os 30 temas curriculares em tempo real:
              </p>
            </div>
            <div style="font-size: 0.85rem; font-weight: 800; color: var(--primary-700); background: var(--primary-50); padding: 6px 14px; border-radius: var(--radius-full); border: 1px solid var(--primary-200);">
              Exibindo: ${filteredTopics.length} de 30 temas
            </div>
          </div>

          <!-- Filtro por Mundos / Sistemas -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
            ${worldLabels.map(wl => {
              const isActive = (curWorld === wl.id);
              return `
                <button type="button" class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}" onclick="(window.AppRouter || window.App.Navigation).setRefWorldFilter('${wl.id}')" style="font-size: 0.82rem; font-weight: ${isActive ? '800' : '600'}; padding: 6px 14px; border-radius: var(--radius-full);">
                  ${wl.label}
                </button>
              `;
            }).join('')}
          </div>

          <!-- Input de Busca em Tempo Real -->
          <div style="position: relative;">
            <input type="text" id="ref-search-input" value="${this.refViewState.search || ''}" placeholder="🔍 Digite para buscar qualquer tema (ex: Starling, Potencial de Ação, Surfactante, TFG, Hemostasia, Guyton)..." style="width: 100%; padding: 12px 18px; font-size: 0.95rem; border: 1.5px solid var(--primary-200); border-radius: var(--radius-md); background: var(--slate-50); color: var(--slate-900); font-weight: 500; outline: none;">
          </div>
        </div>

        <!-- Lista dos Temas Curriculares (Atualizados Dinamicamente) -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          ${filteredTopics.length === 0 ? `
            <div class="card" style="text-align: center; padding: 40px 20px; background: var(--slate-50); border: 1px dashed var(--border-color); border-radius: var(--radius-xl);">
              <div style="font-size: 1.1rem; font-weight: 800; color: var(--slate-700); margin-bottom: 8px;">
                Nenhum tema encontrado para a busca "${this.refViewState.search}".
              </div>
              <p style="font-size: 0.88rem; color: var(--slate-500); margin-bottom: 16px;">
                Tente buscar por termos médicos gerais como "coração", "transporte", "renal", "pressão" ou selecione outro sistema.
              </p>
              <button type="button" class="btn btn-outline btn-sm" onclick="(window.AppRouter || window.App.Navigation).refViewState.search = ''; (window.AppRouter || window.App.Navigation).renderReferencesView();">
                Limpar Busca
              </button>
            </div>
          ` : filteredTopics.map(topic => {
            const availableBooks = [
              { id: 'guyton', name: 'Guyton & Hall', badge: '15ª Ed.', color: 'var(--primary-600)', data: topic.guyton },
              { id: 'berne', name: 'Berne & Levy', badge: '7ª Ed.', color: 'var(--primary-800)', data: topic.berne },
              { id: 'costanzo', name: 'Costanzo', badge: '7ª Ed.', color: 'var(--emerald-600)', data: topic.costanzo },
              { id: 'specialist', name: topic.specialistTitle || 'Tratado Avançado', badge: topic.specialistBadge || 'Especialidade', color: 'var(--purple-600)', data: topic.specialistSource },
              { id: 'openstax', name: 'OpenStax A&P', badge: '2ª Ed.', color: 'var(--blue-600)', data: topic.openstax },
              { id: 'merck', name: 'Manual MSD', badge: 'Profissional', color: 'var(--amber-600)', data: topic.merck }
            ].filter(b => b.data && b.data.summary);

            const defaultBook = availableBooks[0];

            return `
              <div class="card" id="ref-card-${topic.phaseId}" style="padding: 26px; border-radius: var(--radius-xl); border: 1.5px solid var(--border-color); box-shadow: var(--shadow-sm); background: #ffffff;">
                <!-- Header do Card do Tema -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 10px; border-bottom: 1.5px solid var(--border-color); padding-bottom: 14px;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap;">
                      <span class="badge badge-primary" style="font-weight: 800;">
                        Nível ${topic.level} • ${topic.category}
                      </span>
                      <span style="font-size: 0.8rem; font-weight: 700; color: var(--slate-500);">
                        Fase: ${topic.phaseTitle || topic.topicName}
                      </span>
                    </div>
                    <h3 style="font-size: 1.35rem; font-weight: 900; color: var(--slate-900);">
                      ${topic.topicName}
                    </h3>
                  </div>
                  <button type="button" class="btn btn-primary btn-sm" onclick="REFERENCES_DATA.openDeepDiveModal('${topic.topicName.replace(/'/g, "\\'")}')" style="font-size: 0.82rem; font-weight: 800; gap: 6px; padding: 8px 16px;">
                    ${Icons.get('book', 14)} Estudo Completo Expandido
                  </button>
                </div>

                <!-- Subtópicos de Pesquisa (Clique para abrir) -->
                <div class="research-topics-section" style="margin-bottom: 20px;">
                  <div class="research-topics-header" style="margin-bottom: 8px;">
                    <span class="research-topics-title">
                      ${Icons.get('search', 15)} Subtópicos Curriculares a Ser Pesquisados:
                    </span>
                    <span style="font-size: 0.72rem; font-weight: 800; color: var(--primary-700); text-transform: uppercase; background-color: var(--primary-100); padding: 2px 8px; border-radius: var(--radius-full);">
                      4 Tópicos Detalhados
                    </span>
                  </div>
                  <p class="research-topics-subtitle" style="margin-bottom: 10px;">
                    Clique em qualquer subtópico para abrir imediatamente a análise molecular, fórmula e referências científicas:
                  </p>
                  ${REFERENCES_DATA.renderResearchChips(topic.researchTopics)}
                </div>

                <!-- Abas Interativas dos Livros-Texto Acadêmicos -->
                <div style="margin-bottom: 12px;">
                  <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--slate-600); margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    ${Icons.get('book', 14)} Clique nas Abas para Trocar a Obra Acadêmica em Tempo Real:
                  </div>
                  <div style="display: flex; gap: 6px; flex-wrap: wrap; border-bottom: 2px solid var(--border-color); padding-bottom: 4px;">
                    ${availableBooks.map((book, bIdx) => `
                      <button type="button" class="btn btn-sm ref-book-tab-btn" data-book-id="${book.id}" onclick="(window.AppRouter || window.App.Navigation).setRefTopicBook('${topic.phaseId}', '${book.id}')" style="font-size: 0.8rem; font-weight: ${bIdx === 0 ? '800' : '600'}; border-radius: var(--radius-md) var(--radius-md) 0 0; border: 1px solid var(--border-color); border-bottom: ${bIdx === 0 ? '3px solid var(--primary-600)' : 'none'}; background: ${bIdx === 0 ? 'var(--bg-surface)' : 'var(--slate-50)'}; color: ${bIdx === 0 ? 'var(--primary-700)' : 'var(--slate-600)'}; padding: 6px 12px;">
                        ${book.name}
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Painel de Exibição Dinâmica do Livro Selecionado -->
                <div class="ref-book-content-display" style="background-color: var(--slate-50); border-left: 4px solid ${defaultBook.color}; border-radius: 0 var(--radius-md) var(--radius-md) 0; padding: 18px 20px; transition: all 0.2s ease;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
                    <div>
                      <span class="badge" style="background: ${defaultBook.color}; color: #ffffff; font-size: 0.72rem; margin-bottom: 4px;">
                        ${defaultBook.name} • ${defaultBook.badge}
                      </span>
                      <div style="font-size: 0.92rem; font-weight: 800; color: var(--slate-900);">
                        ${defaultBook.data.chapter || defaultBook.data.section || 'Capítulo da Obra'}
                      </div>
                      ${defaultBook.data.pages ? `<div style="font-size: 0.78rem; color: var(--slate-500); font-family: monospace;">Páginas: ${defaultBook.data.pages}</div>` : ''}
                    </div>
                  </div>
                  <p style="font-size: 0.93rem; color: var(--slate-800); line-height: 1.7; margin-bottom: 12px; text-align: justify;">
                    ${defaultBook.data.summary}
                  </p>
                  ${defaultBook.data.keyPoint ? `
                    <div style="font-size: 0.86rem; font-weight: 700; color: var(--slate-900); background-color: #ffffff; border: 1px solid var(--border-color); border-left: 4px solid ${defaultBook.color}; padding: 10px 14px; border-radius: var(--radius-sm);">
                      <strong>Ponto-Chave de Avaliação:</strong> ${defaultBook.data.keyPoint}
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Bind real-time search input
    const searchInput = document.getElementById('ref-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.refViewState.search = e.target.value;
        this.renderReferencesView();
        // Restore focus and cursor to the end
        const inputAfter = document.getElementById('ref-search-input');
        if (inputAfter) {
          inputAfter.focus();
          const len = inputAfter.value.length;
          inputAfter.setSelectionRange(len, len);
        }
      });
    }
  }
};

window.AppRouter = AppRouter;
window.App = window.App || {};
window.App.Navigation = AppRouter;
window.App.Router = AppRouter;
