// Smart Review Engine - Targeted Spaced Practice & Interactive Error Notebook
// Gerencia a central de revisão, o caderno de erros detalhado e as sessões ativas de treino.

const ReviewEngine = {
  activeFilterStatus: 'all', // 'all' | 'pending' | 'resolved'
  activeFilterWorld: 'all',  // 'all' | 'w1' | 'w2' | 'w3' | 'w4' | 'w5'
  currentQuestions: [],
  currentIndex: 0,
  sessionModeTitle: 'Revisão de Erros',
  sessionStats: { correct: 0, total: 0, resolved: 0, xpEarned: 0 },

  render() {
    return this.renderHub();
  },

  getAllQuestions() {
    const worlds = [WORLD_1_DATA, WORLD_2_DATA, WORLD_3_DATA, WORLD_4_DATA, WORLD_5_DATA];
    const all = [];
    worlds.forEach(w => {
      w.phases.forEach(p => {
        p.questions.forEach(q => {
          all.push({
            ...q,
            worldId: w.id,
            worldTitle: w.title,
            worldIcon: w.icon,
            phaseId: p.id,
            phaseTitle: p.title
          });
        });
      });
    });
    return all;
  },

  getQuestionById(qId) {
    const all = this.getAllQuestions();
    return all.find(q => q.id === qId) || null;
  },

  renderHub() {
    const container = document.getElementById('review-view-container');
    if (!container) return;

    const allQuestions = this.getAllQuestions();
    const allMistakes = (typeof State !== 'undefined' && State.getAllMistakes) ? State.getAllMistakes() : (State.data.mistakes || []);
    const activeMistakes = (typeof State !== 'undefined' && State.getActiveMistakes) ? State.getActiveMistakes() : allMistakes.filter(m => !m.resolved);
    const resolvedMistakes = allMistakes.filter(m => m.resolved);
    const weakest = (typeof State !== 'undefined' && State.getWeakestTopics) ? State.getWeakestTopics(4) : [];
    const avgDomain = (typeof State !== 'undefined' && State.getAverageDomain) ? State.getAverageDomain() : 0;

    // Filter mistakes based on UI state
    let filteredMistakes = allMistakes;
    if (this.activeFilterStatus === 'pending') {
      filteredMistakes = filteredMistakes.filter(m => !m.resolved);
    } else if (this.activeFilterStatus === 'resolved') {
      filteredMistakes = filteredMistakes.filter(m => m.resolved);
    }

    if (this.activeFilterWorld !== 'all') {
      filteredMistakes = filteredMistakes.filter(m => {
        const fullQ = this.getQuestionById(m.id);
        const wId = (fullQ && fullQ.worldId) || (m.questionData && m.questionData.worldId) || (m.id && m.id.startsWith(this.activeFilterWorld) ? this.activeFilterWorld : null);
        return wId === this.activeFilterWorld;
      });
    }

    container.innerHTML = `
      <div style="width: 100%; max-width: 100%; padding-bottom: 60px;">
        <!-- Hero Banner -->
        <div class="card" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: var(--radius-xl); padding: 32px; margin-bottom: 28px; box-shadow: var(--shadow-lg); border: 1px solid rgba(255,255,255,0.08);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge" style="background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4); font-weight: 700;">
                ${Icons.get('refresh', 14)} Repetição Espaçada Ativa
              </span>
              <span class="badge badge-princess" style="font-size: 0.88rem; font-weight: 800; background: linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%); color: #be123c; border: 1px solid #fda4af; display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: var(--radius-full);">
                ${Icons.get('heartFilled', 12)} Eu te amo princesa
              </span>
            </div>
            <div style="font-size: 0.82rem; color: var(--slate-300); font-weight: 600;">
              Mapeamento de Falhas & Fixação Conceitual
            </div>
          </div>
          <h1 style="font-size: 1.85rem; font-weight: 900; margin-bottom: 8px; color: #ffffff;">
            Caderno & Central de Revisão de Erros
          </h1>
          <p style="color: var(--slate-300); font-size: 0.96rem; line-height: 1.6; max-width: 820px; margin: 0;">
            Errar faz parte do aprendizado médico. Cada erro registrado aqui é transformado em oportunidade de maestria:
            pratique os pontos fracos até superá-los e ganhe <strong>+20 XP por acerto</strong>!
          </p>
        </div>

        <!-- KPI Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 16px; margin-bottom: 28px;">
          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg); border-top: 4px solid var(--crimson-500);">
            <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px;">Erros a Superar</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: ${activeMistakes.length > 0 ? 'var(--crimson-600)' : 'var(--emerald-600)'};">
              ${activeMistakes.length}
            </div>
            <div style="font-size: 0.78rem; color: var(--slate-400); margin-top: 2px;">Questões pendentes</div>
          </div>

          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg); border-top: 4px solid var(--emerald-500);">
            <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px;">Erros Superados</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: var(--emerald-600);">
              ${resolvedMistakes.length}
            </div>
            <div style="font-size: 0.78rem; color: var(--slate-400); margin-top: 2px;">Dominadas na revisão</div>
          </div>

          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg); border-top: 4px solid var(--primary-500);">
            <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px;">Domínio Geral</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: var(--primary-700);">
              ${avgDomain}%
            </div>
            <div style="font-size: 0.78rem; color: var(--slate-400); margin-top: 2px;">Média dos 30 temas</div>
          </div>

          <div class="card" style="padding: 20px; text-align: center; border-radius: var(--radius-lg); border-top: 4px solid var(--amber-500);">
            <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--slate-500); margin-bottom: 4px;">Bônus de Revisão</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: var(--amber-600);">+20 XP</div>
            <div style="font-size: 0.78rem; color: var(--slate-400); margin-top: 2px;">Por questão superada</div>
          </div>
        </div>

        <!-- Practice Mode Selection Cards -->
        <div class="card" style="margin-bottom: 32px; border-radius: var(--radius-xl); padding: 28px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
            <div>
              <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--slate-900); margin: 0 0 4px 0;">
                Escolha o Modo de Treino para Hoje
              </h2>
              <p style="font-size: 0.88rem; color: var(--slate-600); margin: 0;">
                Sessões adaptativas sem perda de vidas para você estudar com foco e confiança.
              </p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <!-- Mode 1: Erros Pendentes -->
            <div style="border: 2px solid ${activeMistakes.length > 0 ? 'var(--crimson-300)' : 'var(--border-color)'}; background: ${activeMistakes.length > 0 ? 'linear-gradient(135deg, #fff1f2 0%, #ffffff 100%)' : 'var(--slate-50)'}; border-radius: var(--radius-lg); padding: 22px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span class="badge ${activeMistakes.length > 0 ? 'badge-primary' : 'badge-slate'}" style="font-weight: 800;">
                    ${Icons.get('cross', 14)} Prioridade Alta
                  </span>
                  <span style="font-weight: 800; font-size: 0.85rem; color: var(--crimson-700);">
                    ${activeMistakes.length} ${activeMistakes.length === 1 ? 'questão' : 'questões'}
                  </span>
                </div>
                <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">
                  Maratona dos Meus Erros
                </h3>
                <p style="font-size: 0.86rem; color: var(--slate-600); line-height: 1.5; margin-bottom: 18px;">
                  Pratique exclusivamente as questões que você já errou em fases ou no simulado até transformá-las em acertos consolidados.
                </p>
              </div>
              <button id="btn-start-mistakes-marathon" class="btn ${activeMistakes.length > 0 ? 'btn-primary' : 'btn-outline'} btn-block" style="${activeMistakes.length > 0 ? 'background-color: var(--crimson-600); border-color: var(--crimson-600);' : ''}">
                ${Icons.get('refresh', 18)} ${activeMistakes.length > 0 ? `Superar Meus Erros (${activeMistakes.length})` : 'Sem Erros Pendentes'}
              </button>
            </div>

            <!-- Mode 2: Tópicos Fracos -->
            <div style="border: 2px solid var(--amber-200); background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%); border-radius: var(--radius-lg); padding: 22px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span class="badge" style="background: #fef3c7; color: #92400e; border: 1px solid #fde68a; font-weight: 800;">
                    ${Icons.get('chart', 14)} Spaced Repetition
                  </span>
                  <span style="font-weight: 800; font-size: 0.85rem; color: var(--amber-700);">
                    8 Questões
                  </span>
                </div>
                <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">
                  Reforço dos Tópicos Críticos
                </h3>
                <p style="font-size: 0.86rem; color: var(--slate-600); line-height: 1.5; margin-bottom: 18px;">
                  O sistema seleciona questões dos temas com menor índice de domínio (&lt; 70%) para blindar o seu conhecimento.
                </p>
              </div>
              <button id="btn-start-weakest-topics" class="btn btn-outline btn-block" style="border-color: var(--amber-500); color: var(--amber-800);">
                ${Icons.get('bolt', 18)} Treinar Tópicos Fracos
              </button>
            </div>

            <!-- Mode 3: Simulado Misto -->
            <div style="border: 2px solid var(--primary-200); background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%); border-radius: var(--radius-lg); padding: 22px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span class="badge badge-primary" style="font-weight: 800;">
                    ${Icons.get('book', 14)} Fixação Geral
                  </span>
                  <span style="font-weight: 800; font-size: 0.85rem; color: var(--primary-700);">
                    10 Questões
                  </span>
                </div>
                <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">
                  Simulado Rápido Adaptativo
                </h3>
                <p style="font-size: 0.86rem; color: var(--slate-600); line-height: 1.5; margin-bottom: 18px;">
                  Um mix inteligente que reúne erros pendentes e questões aleatórias de todos os 5 sistemas corporais.
                </p>
              </div>
              <button id="btn-start-adaptive-session" class="btn btn-primary btn-block">
                ${Icons.get('sparkles', 18)} Iniciar Treino Rápido
              </button>
            </div>
          </div>
        </div>

        <!-- Caderno de Erros Interativo -->
        <div class="card" style="border-radius: var(--radius-xl); padding: 28px; margin-bottom: 28px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 14px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: var(--crimson-600);">${Icons.get('book', 22)}</span>
                <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--slate-900); margin: 0;">
                  Caderno de Erros Detalhado
                </h2>
              </div>
              <p style="font-size: 0.88rem; color: var(--slate-600); margin: 4px 0 0 0;">
                Histórico completo das questões que você já errou, com gabarito comentado e fundamentação científica.
              </p>
            </div>

            <!-- Status Filter Buttons -->
            <div style="display: flex; gap: 6px; background: var(--slate-100); padding: 4px; border-radius: var(--radius-md);">
              <button type="button" class="btn btn-sm ${this.activeFilterStatus === 'all' ? 'btn-primary' : 'btn-ghost'}" data-filter-status="all" style="font-size: 0.78rem; font-weight: 700; padding: 5px 12px;">
                Todos (${allMistakes.length})
              </button>
              <button type="button" class="btn btn-sm ${this.activeFilterStatus === 'pending' ? 'btn-primary' : 'btn-ghost'}" data-filter-status="pending" style="font-size: 0.78rem; font-weight: 700; padding: 5px 12px; ${this.activeFilterStatus === 'pending' ? 'background-color: var(--crimson-600); border-color: var(--crimson-600);' : ''}">
                Pendentes (${activeMistakes.length})
              </button>
              <button type="button" class="btn btn-sm ${this.activeFilterStatus === 'resolved' ? 'btn-primary' : 'btn-ghost'}" data-filter-status="resolved" style="font-size: 0.78rem; font-weight: 700; padding: 5px 12px; ${this.activeFilterStatus === 'resolved' ? 'background-color: var(--emerald-600); border-color: var(--emerald-600);' : ''}">
                Superados (${resolvedMistakes.length})
              </button>
            </div>
          </div>

          <!-- World Filter Chips -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
            <button type="button" class="btn btn-sm ${this.activeFilterWorld === 'all' ? 'btn-primary' : 'btn-outline'}" data-filter-world="all" style="font-size: 0.76rem; font-weight: 700;">
              Todos os Mundos
            </button>
            <button type="button" class="btn btn-sm ${this.activeFilterWorld === 'w1' ? 'btn-primary' : 'btn-outline'}" data-filter-world="w1" style="font-size: 0.76rem; font-weight: 700;">
              Mundo 1: Celular
            </button>
            <button type="button" class="btn btn-sm ${this.activeFilterWorld === 'w2' ? 'btn-primary' : 'btn-outline'}" data-filter-world="w2" style="font-size: 0.76rem; font-weight: 700;">
              Mundo 2: Sangue
            </button>
            <button type="button" class="btn btn-sm ${this.activeFilterWorld === 'w3' ? 'btn-primary' : 'btn-outline'}" data-filter-world="w3" style="font-size: 0.76rem; font-weight: 700;">
              Mundo 3: Cardio
            </button>
            <button type="button" class="btn btn-sm ${this.activeFilterWorld === 'w4' ? 'btn-primary' : 'btn-outline'}" data-filter-world="w4" style="font-size: 0.76rem; font-weight: 700;">
              Mundo 4: Respiratório
            </button>
            <button type="button" class="btn btn-sm ${this.activeFilterWorld === 'w5' ? 'btn-primary' : 'btn-outline'}" data-filter-world="w5" style="font-size: 0.76rem; font-weight: 700;">
              Mundo 5: Renal & Integrado
            </button>
          </div>

          <!-- Mistake Cards List -->
          ${filteredMistakes.length === 0 ? `
            <div style="text-align: center; padding: 48px 24px; background: var(--slate-50); border: 2px dashed var(--border-color); border-radius: var(--radius-lg);">
              <div style="width: 56px; height: 56px; margin: 0 auto 16px auto; border-radius: var(--radius-full); background: var(--emerald-100); color: var(--emerald-600); display: flex; align-items: center; justify-content: center;">
                ${Icons.get('check', 28)}
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">
                ${allMistakes.length === 0 ? 'Nenhum erro registrado no seu caderno!' : 'Nenhum erro correspondente a estes filtros.'}
              </h3>
              <p style="font-size: 0.92rem; color: var(--slate-600); max-width: 500px; margin: 0 auto 20px auto; line-height: 1.5;">
                ${allMistakes.length === 0 
                  ? 'Você ainda não errou questões ou está jogando com precisão máxima! Continue jogando as fases dos 5 mundos ou encare o Simulado Oficial.'
                  : 'Tente alterar os filtros de status ou de mundo acima para visualizar os outros registros.'}
              </p>
              <button type="button" class="btn btn-outline" onclick="window.AppRouter.navigate('map')" style="font-weight: 700;">
                ${Icons.get('map', 18)} Ir para a Trilha de Fases
              </button>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 18px;">
              ${filteredMistakes.map(m => {
                const fullQ = this.getQuestionById(m.id) || m.questionData || {};
                const letters = ['A', 'B', 'C', 'D'];
                const isResolved = !!m.resolved;
                const correctOpt = fullQ.options ? fullQ.options[fullQ.correctIndex] : '';

                return `
                  <div class="card" style="border-radius: var(--radius-lg); border: 1.5px solid ${isResolved ? 'var(--emerald-200)' : 'var(--crimson-200)'}; background: ${isResolved ? '#fcfdfd' : '#ffffff'}; padding: 22px; box-shadow: var(--shadow-sm);">
                    <!-- Header da Questão -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <span class="badge ${isResolved ? 'badge-success' : 'badge-slate'}" style="${!isResolved ? 'background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; font-weight: 800;' : 'font-weight: 800;'}">
                          ${isResolved ? `${Icons.get('check', 14)} Superada na Revisão` : `${Icons.get('cross', 14)} Pendente de Revisão`}
                        </span>
                        <span class="badge" style="background: var(--slate-100); color: var(--slate-700); font-weight: 700;">
                          ${m.failCount > 1 ? `Erros acumulados: ${m.failCount}x` : 'Errou 1 vez'}
                        </span>
                        <span class="badge badge-primary" style="font-weight: 700;">
                          ${fullQ.worldTitle ? fullQ.worldTitle.split('&')[0].trim() : 'Fisiologia'}
                        </span>
                      </div>
                      <span style="font-size: 0.8rem; font-weight: 700; color: var(--slate-500);">
                        Tópico: ${fullQ.topic || m.topic || 'Geral'}
                      </span>
                    </div>

                    <!-- Enunciado -->
                    <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--slate-900); line-height: 1.45; margin-bottom: 12px;">
                      ${fullQ.title || 'Questão sem título'}
                    </h3>

                    ${fullQ.examPrompt ? `
                      <div style="font-size: 0.86rem; color: var(--slate-700); background: var(--slate-50); border: 1px solid var(--border-color); padding: 12px 14px; border-radius: var(--radius-sm); margin-bottom: 12px; line-height: 1.5;">
                        ${fullQ.examPrompt}
                      </div>
                    ` : ''}

                    <!-- O que o aluno errou & Por quê -->
                    ${m.whyWrong ? `
                      <div style="font-size: 0.88rem; color: #991b1b; background: #fef2f2; border: 1px solid #fecaca; border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 12px; line-height: 1.5;">
                        <strong>Análise do erro cometido:</strong> ${m.whyWrong}
                      </div>
                    ` : ''}

                    <!-- Gabarito Correto & Explicação -->
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 12px 14px; margin-bottom: 14px;">
                      <div style="font-size: 0.92rem; font-weight: 800; color: #166534; margin-bottom: 4px;">
                        Gabarito Correto: Alternativa ${letters[fullQ.correctIndex] || ''} — ${correctOpt}
                      </div>
                      <div style="font-size: 0.86rem; color: #14532d; line-height: 1.5;">
                        <strong>Explicação:</strong> ${fullQ.explanation || ''}
                      </div>
                      ${fullQ.tip ? `
                        <div style="font-size: 0.82rem; color: #15803d; margin-top: 6px; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                          ${Icons.get('lightbulb', 14)} <span>Dica: ${fullQ.tip}</span>
                        </div>
                      ` : ''}
                    </div>

                    <!-- Card Actions -->
                    <div style="display: flex; gap: 10px; justify-content: flex-end; flex-wrap: wrap;">
                      <button type="button" class="btn btn-sm btn-outline" onclick="REFERENCES_DATA.openDeepDiveModal('${(fullQ.topic || m.topic || '').replace(/'/g, "\\'")}')" style="font-size: 0.78rem; font-weight: 700;">
                        ${Icons.get('book', 14)} Ver no Livro
                      </button>
                      <button type="button" class="btn btn-sm ${isResolved ? 'btn-outline' : 'btn-primary'}" onclick="ReviewEngine.practiceSingleQuestion('${m.id}')" style="font-size: 0.78rem; font-weight: 700; ${!isResolved ? 'background-color: var(--crimson-600); border-color: var(--crimson-600);' : ''}">
                        ${Icons.get('refresh', 14)} ${isResolved ? 'Praticar Novamente' : 'Praticar Esta Questão Agora (+20 XP)'}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      </div>
    `;

    // Attach Action Listeners
    const btnMistakes = document.getElementById('btn-start-mistakes-marathon');
    if (btnMistakes) {
      btnMistakes.addEventListener('click', () => {
        if (activeMistakes.length > 0) {
          const questionsToReview = activeMistakes.map(m => this.getQuestionById(m.id)).filter(Boolean);
          this.startSession(questionsToReview, 'Maratona dos Meus Erros');
        } else {
          this.startWeakestTopicsSession();
        }
      });
    }

    const btnWeakest = document.getElementById('btn-start-weakest-topics');
    if (btnWeakest) {
      btnWeakest.addEventListener('click', () => {
        this.startWeakestTopicsSession();
      });
    }

    const btnAdaptive = document.getElementById('btn-start-adaptive-session');
    if (btnAdaptive) {
      btnAdaptive.addEventListener('click', () => {
        this.startAdaptiveSession();
      });
    }

    // Attach status filter buttons
    container.querySelectorAll('[data-filter-status]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.activeFilterStatus = e.currentTarget.dataset.filterStatus;
        this.renderHub();
      });
    });

    // Attach world filter buttons
    container.querySelectorAll('[data-filter-world]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.activeFilterWorld = e.currentTarget.dataset.filterWorld;
        this.renderHub();
      });
    });
  },

  startWeakestTopicsSession() {
    const all = this.getAllQuestions();
    const weakest = State.getWeakestTopics(4).map(w => w.topic);
    let selected = all.filter(q => weakest.includes(q.topic));
    if (selected.length === 0) {
      selected = [...all].sort(() => Math.random() - 0.5).slice(0, 8);
    } else {
      selected = selected.sort(() => Math.random() - 0.5).slice(0, 8);
    }
    this.startSession(selected, 'Reforço dos Tópicos Críticos');
  },

  startAdaptiveSession() {
    const all = this.getAllQuestions();
    const activeMistakes = State.getActiveMistakes();
    const selected = [];

    // 1. Add active mistakes first
    activeMistakes.forEach(m => {
      const q = this.getQuestionById(m.id);
      if (q && selected.length < 5 && !selected.some(s => s.id === q.id)) {
        selected.push(q);
      }
    });

    // 2. Fill with weakest topics
    const weakest = State.getWeakestTopics(4).map(w => w.topic);
    const weakQuestions = all.filter(q => weakest.includes(q.topic) && !selected.some(s => s.id === q.id));
    weakQuestions.sort(() => Math.random() - 0.5);
    weakQuestions.forEach(q => {
      if (selected.length < 8) selected.push(q);
    });

    // 3. Fill up to 10 with random questions
    const randomPool = [...all].sort(() => Math.random() - 0.5);
    randomPool.forEach(q => {
      if (selected.length < 10 && !selected.some(s => s.id === q.id)) {
        selected.push(q);
      }
    });

    this.startSession(selected, 'Simulado Rápido Adaptativo');
  },

  practiceSingleQuestion(qId) {
    const q = this.getQuestionById(qId);
    if (q) {
      this.startSession([q], `Treino Direcionado: ${q.topic}`);
    }
  },

  startSession(questions, modeTitle) {
    if (!questions || questions.length === 0) {
      this.renderHub();
      return;
    }

    this.currentQuestions = questions;
    this.currentIndex = 0;
    this.sessionModeTitle = modeTitle || 'Revisão de Erros';
    this.sessionStats = {
      correct: 0,
      total: questions.length,
      resolved: 0,
      xpEarned: 0
    };

    this.renderSessionQuestion();
  },

  renderSessionQuestion() {
    const container = document.getElementById('review-view-container');
    if (!container) return;

    if (this.currentIndex >= this.currentQuestions.length) {
      this.finishSession();
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    const total = this.currentQuestions.length;
    const progressPct = Math.round(((this.currentIndex + 1) / total) * 100);

    container.innerHTML = `
      <div style="width: 100%; max-width: 100%; padding-bottom: 60px;">
        <!-- Review Top Live Bar -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 14px 20px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="badge badge-primary" style="font-weight: 800;">
              ${Icons.get('refresh', 14)} ${this.sessionModeTitle}
            </span>
            <span style="font-size: 0.9rem; font-weight: 700; color: var(--slate-700);">
              Questão ${this.currentIndex + 1} de ${total}
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 14px;">
            <span class="badge" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; font-weight: 800; font-size: 0.85rem;">
              ${Icons.get('bolt', 14)} +20 XP ao Acertar
            </span>
            <button id="btn-quit-review-session" class="btn btn-sm btn-ghost" style="color: var(--slate-500); font-weight: 700;">
              ${Icons.get('cross', 14)} Encerrar Treino
            </button>
          </div>
        </div>

        <!-- Mount point for QuestionRenderer -->
        <div id="review-quiz-mount"></div>
      </div>
    `;

    document.getElementById('btn-quit-review-session').addEventListener('click', () => {
      this.renderHub();
    });

    const renderCurrent = () => {
      QuestionRenderer.render(
        q,
        this.currentIndex,
        this.currentQuestions.length,
        (isCorrect, userAnswer, question, presentation) => {
          if (isCorrect) {
            this.sessionStats.correct++;
            this.sessionStats.resolved++;
            this.sessionStats.xpEarned += 20;
            State.resolveMistake(q.id);
          } else {
            State.recordAnswer(q, false, {
              userAnswer,
              source: 'review'
            });
          }

          FeedbackController.show(
            isCorrect,
            userAnswer,
            q,
            () => {
              this.currentIndex++;
              this.renderSessionQuestion();
            },
            () => {
              renderCurrent();
            },
            presentation,
            { isReview: true }
          );
        },
        'review-quiz-mount'
      );
    };

    renderCurrent();
  },

  finishSession() {
    const container = document.getElementById('review-view-container');
    if (!container) return;

    const stats = this.sessionStats;
    const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

    container.innerHTML = `
      <div class="card" style="max-width: 680px; margin: 40px auto; text-align: center; padding: 44px 36px; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); border-top: 6px solid var(--emerald-500);">
        <div style="width: 72px; height: 72px; margin: 0 auto 18px auto; border-radius: var(--radius-full); background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);">
          ${Icons.get('trophy', 36)}
        </div>

        <div style="display: inline-flex; align-items: center; gap: 6px; margin-bottom: 12px;">
          <span class="badge badge-princess" style="font-size: 0.95rem; font-weight: 800; background: linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%); color: #be123c; border: 1.5px solid #fda4af; padding: 4px 14px; border-radius: var(--radius-full);">
            ${Icons.get('heartFilled', 16)} Eu te amo princesa
          </span>
        </div>

        <h1 style="font-size: 1.85rem; font-weight: 900; color: var(--slate-900); margin: 0 0 8px 0;">
          Sessão de Revisão Concluída!
        </h1>
        <p style="color: var(--slate-600); font-size: 0.98rem; line-height: 1.6; max-width: 520px; margin: 0 auto 28px auto;">
          Excelente persistência! O estudo ativo por análise de erros é o método comprovadamente mais eficaz para fixação de longo prazo em Fisiologia Médica.
        </p>

        <!-- Summary KPI Grid -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 32px;">
          <div style="background: var(--emerald-50); border: 1px solid var(--emerald-200); border-radius: var(--radius-lg); padding: 16px;">
            <div style="font-size: 1.8rem; font-weight: 900; color: var(--emerald-700);">${stats.correct} / ${stats.total}</div>
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--emerald-900); text-transform: uppercase;">Acertos</div>
          </div>
          <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-lg); padding: 16px;">
            <div style="font-size: 1.8rem; font-weight: 900; color: var(--primary-700);">${accuracy}%</div>
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary-900); text-transform: uppercase;">Precisão</div>
          </div>
          <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-lg); padding: 16px;">
            <div style="font-size: 1.8rem; font-weight: 900; color: var(--amber-700);">+${stats.xpEarned}</div>
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--amber-900); text-transform: uppercase;">XP Ganho</div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
          <button id="btn-finish-to-caderno" class="btn btn-primary btn-lg">
            ${Icons.get('book', 18)} Voltar ao Caderno de Erros
          </button>
          <button id="btn-finish-to-map" class="btn btn-outline btn-lg">
            ${Icons.get('map', 18)} Voltar ao Mapa de Fases
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-finish-to-caderno').addEventListener('click', () => {
      this.renderHub();
    });

    document.getElementById('btn-finish-to-map').addEventListener('click', () => {
      window.AppRouter.navigate('map');
    });
  }
};

if (typeof window !== 'undefined') {
  window.ReviewEngine = ReviewEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ReviewEngine };
}
