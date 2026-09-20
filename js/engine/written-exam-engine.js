// Written Exam Engine - Modo Prova Escrita Discursiva (23 Questões)
// Gerencia a resolução discursiva sem spoilers, salvamento automático e geração de prompt para IA.

const WrittenExamEngine = {
  STORAGE_KEY: 'fisiodengo_written_exam_draft_v1',
  LEGACY_STORAGE_KEY: 'fisioquest_written_exam_draft_v1',
  currentIndex: 0,
  answers: {},
  isFinished: false,
  elapsedSeconds: 0,
  timerInterval: null,
  hasCopied: false,

  init() {
    this.loadDraft();
  },

  loadDraft() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY) || localStorage.getItem(this.LEGACY_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.answers = parsed.answers || {};
        this.currentIndex = typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0;
        this.elapsedSeconds = typeof parsed.elapsedSeconds === 'number' ? parsed.elapsedSeconds : 0;
      }
    } catch (e) {
      console.warn('Erro ao carregar rascunho da prova escrita:', e);
    }
  },

  saveDraft() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
        answers: this.answers,
        currentIndex: this.currentIndex,
        elapsedSeconds: this.elapsedSeconds,
        updatedAt: new Date().toISOString()
      }));
    } catch (e) {
      console.warn('Erro ao salvar rascunho da prova escrita:', e);
    }
  },

  clearDraft() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (e) {}
    this.answers = {};
    this.currentIndex = 0;
    this.elapsedSeconds = 0;
    this.isFinished = false;
    this.hasCopied = false;
  },

  formatTime(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  },

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
      const timerEl = document.getElementById('written-live-timer');
      if (timerEl) {
        timerEl.textContent = this.formatTime(this.elapsedSeconds);
      }
      // Periodic draft save every 15 seconds
      if (this.elapsedSeconds % 15 === 0) {
        this.saveDraft();
      }
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  getQuestions() {
    return (typeof WRITTEN_EXAM_DATA !== 'undefined' && WRITTEN_EXAM_DATA.questions) ? WRITTEN_EXAM_DATA.questions : [];
  },

  getAnsweredCount() {
    const questions = this.getQuestions();
    let count = 0;
    questions.forEach(q => {
      const text = this.answers[q.number];
      if (text && text.trim().length > 0) count++;
    });
    return count;
  },

  getCategoryIcon(category) {
    if (!category) return Icons.get('book', 14);
    if (category.toLowerCase().includes('celular') || category.toLowerCase().includes('homeostase')) {
      return Icons.get('cell', 14);
    }
    if (category.toLowerCase().includes('sangue') || category.toLowerCase().includes('cardiovascular')) {
      return Icons.get('heartPulse', 14);
    }
    if (category.toLowerCase().includes('respiratório')) {
      return Icons.get('lungs', 14);
    }
    return Icons.get('book', 14);
  },

  render() {
    this.init();
    if (this.isFinished) {
      this.renderCompletionScreen();
    } else {
      this.startTimer();
      this.renderQuestionScreen();
    }
  },

  renderQuestionScreen() {
    const container = document.getElementById('written-exam-container');
    if (!container) return;

    const questions = this.getQuestions();
    const total = questions.length || 23;
    const q = questions[this.currentIndex] || questions[0];
    const answeredCount = this.getAnsweredCount();
    const progressPct = Math.round((answeredCount / total) * 100);
    const currentAnswer = this.answers[q.number] || '';
    const charCount = currentAnswer.length;
    const wordCount = currentAnswer.trim() ? currentAnswer.trim().split(/\s+/).length : 0;

    container.innerHTML = `
      <div class="written-exam-wrap" style="width: 100%; max-width: 1040px; margin: 0 auto; padding-bottom: 80px;">
        <!-- Top Sticky Header -->
        <div class="card" style="margin-bottom: 24px; padding: 18px 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="badge badge-primary" style="font-size: 0.82rem; padding: 6px 12px; display: inline-flex; align-items: center; gap: 6px;">
                ${this.getCategoryIcon(q.category)} ${q.category}
              </span>
              <span style="font-size: 0.95rem; font-weight: 800; color: var(--slate-800);">
                Questão ${this.currentIndex + 1} de ${total}
              </span>
            </div>

            <div style="display: flex; align-items: center; gap: 16px;">
              <!-- Live Timer -->
              <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; color: var(--slate-700); font-size: 0.9rem;">
                ${Icons.get('clock', 16, 'primary-color')}
                <span>Tempo:</span>
                <span id="written-live-timer" style="font-family: var(--font-mono); font-size: 1.05rem; color: var(--primary-700);">
                  ${this.formatTime(this.elapsedSeconds)}
                </span>
              </div>

              <!-- Answered Badge -->
              <div class="badge ${answeredCount === total ? 'badge-success' : 'badge-slate'}" style="font-size: 0.85rem; padding: 6px 12px;">
                ${answeredCount} de ${total} respondidas (${progressPct}%)
              </div>

              <!-- Early Finish / Restart Actions -->
              <button id="btn-written-finish-top" class="btn btn-success btn-sm">
                ${Icons.get('check', 16)} Finalizar Prova
              </button>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="progress-bar-bg" style="height: 8px;">
            <div class="progress-bar-fill" style="width: ${progressPct}%; background-color: ${answeredCount === total ? 'var(--emerald-500)' : 'var(--primary-600)'};"></div>
          </div>
        </div>

        <!-- Question Navigator Grid (1 to 23) -->
        <div class="card" style="margin-bottom: 24px; padding: 16px 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: var(--slate-500);">
              Navegação Direta da Prova (Clique para ir para a questão):
            </span>
            <span style="font-size: 0.78rem; color: var(--slate-500);">
              ${Icons.get('check', 12)} = Respondida
            </span>
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${questions.map((item, i) => {
              const isAnswered = !!(this.answers[item.number] && this.answers[item.number].trim().length > 0);
              const isCurrent = (i === this.currentIndex);
              let bg = 'var(--bg-surface)';
              let color = 'var(--slate-700)';
              let border = 'var(--border-color)';

              if (isCurrent) {
                border = 'var(--primary-600)';
                bg = 'var(--primary-100)';
                color = 'var(--primary-800)';
              } else if (isAnswered) {
                border = 'var(--emerald-400)';
                bg = 'var(--emerald-50)';
                color = 'var(--emerald-700)';
              }

              return `
                <button class="written-nav-pill" data-idx="${i}" style="width: 38px; height: 38px; border-radius: var(--radius-md); border: 2px solid ${border}; background-color: ${bg}; color: ${color}; font-weight: 800; font-size: 0.9rem; cursor: pointer; transition: all var(--transition-fast); display: inline-flex; align-items: center; justify-content: center; position: relative;">
                  ${item.number}
                  ${isAnswered && !isCurrent ? `
                    <span style="position: absolute; top: 2px; right: 2px; width: 6px; height: 6px; border-radius: var(--radius-full); background-color: var(--emerald-600);"></span>
                  ` : ''}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Question Prompt & Essay Textarea -->
        <div class="card" style="margin-bottom: 24px; padding: 32px;">
          <!-- Category & Topic header -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <div style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--primary-700); display: flex; align-items: center; gap: 8px;">
              ${this.getCategoryIcon(q.category)} ${q.category}
            </div>
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--slate-500);">
              Questão Discursiva #${q.number} • Vale 10 Pontos
            </div>
          </div>

          <!-- Question Prompt -->
          <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--slate-900); line-height: 1.45; margin-bottom: 24px;">
            ${q.prompt}
          </h2>

          <!-- Writing Guidelines Card -->
          <div style="background-color: var(--slate-50); border: 1px dashed var(--slate-300); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 20px; font-size: 0.85rem; color: var(--slate-600); display: flex; align-items: center; gap: 10px;">
            <span style="color: var(--primary-600);">${Icons.get('edit', 18)}</span>
            <span>
              <strong>Orientação:</strong> Escreva sua resposta com clareza conceitual. Explique os mecanismos e termos fisiológicos relevantes. Não há limite de tamanho.
            </span>
          </div>

          <!-- Answer Textarea -->
          <div style="position: relative; margin-bottom: 12px;">
            <textarea
              id="written-answer-input"
              class="written-textarea"
              placeholder="Digite aqui sua resposta fisiológica completa para esta questão..."
              style="width: 100%; min-height: 220px; padding: 18px 20px; font-family: inherit; font-size: 1rem; line-height: 1.65; color: var(--slate-900); background-color: var(--bg-surface); border: 2px solid var(--slate-300); border-radius: var(--radius-lg); resize: vertical; outline: none; transition: border-color var(--transition-fast), box-shadow var(--transition-fast);"
            >${currentAnswer}</textarea>
          </div>

          <!-- Metadata & Autosave Indicator -->
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; color: var(--slate-500);">
            <div id="written-save-status" style="display: flex; align-items: center; gap: 6px; color: var(--emerald-600); font-weight: 600;">
              ${Icons.get('check', 14)} Salvo no dispositivo
            </div>
            <div id="written-char-stats" style="font-weight: 600;">
              ${wordCount} palavras • ${charCount} caracteres
            </div>
          </div>
        </div>

        <!-- Bottom Controls: Prev / Next / Finish -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div>
            <button id="btn-written-prev" class="btn btn-outline btn-lg" ${this.currentIndex === 0 ? 'disabled' : ''}>
              ${Icons.get('arrowLeft', 18)} Anterior
            </button>
          </div>

          <div style="display: flex; gap: 12px;">
            ${this.currentIndex < total - 1 ? `
              <button id="btn-written-next" class="btn btn-primary btn-lg">
                Próxima Questão ${Icons.get('arrowRight', 18)}
              </button>
            ` : `
              <button id="btn-written-finish-bottom" class="btn btn-success btn-lg" style="box-shadow: 0 4px 14px rgba(5, 150, 105, 0.3);">
                ${Icons.get('check', 18)} Finalizar e Concluir Prova
              </button>
            `}
          </div>
        </div>
      </div>
    `;

    this.attachQuestionListeners();
  },

  attachQuestionListeners() {
    const questions = this.getQuestions();
    const q = questions[this.currentIndex];
    const textarea = document.getElementById('written-answer-input');

    if (textarea) {
      // Focus on textarea if not mobile
      if (window.innerWidth > 768) {
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      }

      // Input listener with live char count and auto-save
      textarea.addEventListener('input', (e) => {
        const val = e.target.value;
        this.answers[q.number] = val;

        // Update char and word count
        const charCount = val.length;
        const wordCount = val.trim() ? val.trim().split(/\s+/).length : 0;
        const statsEl = document.getElementById('written-char-stats');
        if (statsEl) {
          statsEl.textContent = `${wordCount} palavras • ${charCount} caracteres`;
        }

        // Auto-save feedback
        const saveStatusEl = document.getElementById('written-save-status');
        if (saveStatusEl) {
          saveStatusEl.innerHTML = `${Icons.get('check', 14)} Salvando...`;
        }

        this.saveDraft();

        setTimeout(() => {
          if (saveStatusEl) {
            saveStatusEl.innerHTML = `${Icons.get('check', 14)} Salvo no dispositivo`;
          }
        }, 500);
      });
    }

    // Navigator pills
    document.querySelectorAll('.written-nav-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetIdx = parseInt(e.currentTarget.dataset.idx, 10);
        this.currentIndex = targetIdx;
        this.renderQuestionScreen();
      });
    });

    // Navigation buttons
    const prevBtn = document.getElementById('btn-written-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderQuestionScreen();
        }
      });
    }

    const nextBtn = document.getElementById('btn-written-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex < questions.length - 1) {
          this.currentIndex++;
          this.renderQuestionScreen();
        }
      });
    }

    // Finish buttons
    const finishHandler = () => this.confirmFinishExam();
    const finishTop = document.getElementById('btn-written-finish-top');
    if (finishTop) finishTop.addEventListener('click', finishHandler);

    const finishBottom = document.getElementById('btn-written-finish-bottom');
    if (finishBottom) finishBottom.addEventListener('click', finishHandler);
  },

  confirmFinishExam() {
    const questions = this.getQuestions();
    const total = questions.length;
    const answeredCount = this.getAnsweredCount();
    const blankCount = total - answeredCount;

    if (blankCount > 0) {
      const modal = document.createElement('div');
      modal.className = 'modal-backdrop active';
      modal.id = 'written-confirm-modal';
      modal.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-icon-header" style="background-color: var(--amber-50); color: var(--amber-600); border: 2px solid var(--amber-200);">
            ${Icons.get('lightbulb', 32)}
          </div>
          <h2 class="modal-title">Questões em branco!</h2>
          <p class="modal-subtitle">
            Você respondeu <strong>${answeredCount} de ${total}</strong> questões. Ainda há <strong>${blankCount} questão(ões) em branco</strong>.
          </p>
          <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 24px;">
            Você pode voltar e completar as respostas pendentes ou finalizar agora para gerar o relatório de correção da IA.
          </p>

          <div style="display: flex; gap: 12px; flex-direction: column;">
            <button id="btn-modal-review-blanks" class="btn btn-primary btn-lg btn-block">
              ${Icons.get('edit', 18)} Continuar Respondendo
            </button>
            <button id="btn-modal-confirm-finish" class="btn btn-outline btn-block" style="color: var(--slate-600);">
              Finalizar Mesmo Assim ${Icons.get('arrowRight', 16)}
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      document.getElementById('btn-modal-review-blanks').addEventListener('click', () => {
        modal.remove();
        // Jump to first unanswered question
        const firstUnanswered = questions.findIndex(q => !this.answers[q.number] || !this.answers[q.number].trim());
        if (firstUnanswered !== -1) {
          this.currentIndex = firstUnanswered;
          this.renderQuestionScreen();
        }
      });

      document.getElementById('btn-modal-confirm-finish').addEventListener('click', () => {
        modal.remove();
        this.finishExam();
      });
    } else {
      this.finishExam();
    }
  },

  finishExam() {
    this.stopTimer();
    this.isFinished = true;
    this.saveDraft();

    // Reward XP in State for completing written exam
    if (typeof State !== 'undefined') {
      State.addXP(150);
    }

    this.renderCompletionScreen();
  },

  renderCompletionScreen() {
    const container = document.getElementById('written-exam-container');
    if (!container) return;

    const questions = this.getQuestions();
    const answeredCount = this.getAnsweredCount();
    const total = questions.length;

    // Calculate total words written
    let totalWords = 0;
    Object.values(this.answers).forEach(ans => {
      if (ans && ans.trim()) {
        totalWords += ans.trim().split(/\s+/).length;
      }
    });

    container.innerHTML = `
      <div class="written-completion-wrap" style="width: 100%; max-width: 900px; margin: 0 auto; padding-bottom: 80px;">
        <!-- Success Hero Card -->
        <div class="card" style="text-align: center; padding: 44px 32px; margin-bottom: 28px; border-top: 6px solid var(--emerald-500);">
          <div class="modal-icon-header success" style="margin: 0 auto 20px;">
            ${Icons.get('trophy', 36)}
          </div>
          <span class="badge badge-success" style="margin-bottom: 12px; font-size: 0.85rem;">
            +150 XP de Dedicação Fisiológica
          </span>
          <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--slate-900); margin-bottom: 10px;">
            Prova concluída!
          </h1>
          <p style="color: var(--slate-600); font-size: 1.05rem; line-height: 1.6; max-width: 650px; margin: 0 auto 24px;">
            Suas respostas foram registradas. Agora você pode copiá-las junto com o prompt de correção e enviar para uma IA para receber uma correção detalhada.
          </p>

          <!-- Exam Metrics Summary -->
          <div class="modal-stats-grid" style="margin-bottom: 32px;">
            <div class="modal-stat-box">
              <div class="modal-stat-value" style="color: var(--primary-700);">${answeredCount} / ${total}</div>
              <div class="modal-stat-label">Questões Respondidas</div>
            </div>
            <div class="modal-stat-box">
              <div class="modal-stat-value" style="color: var(--emerald-600);">${totalWords}</div>
              <div class="modal-stat-label">Palavras Escritas</div>
            </div>
            <div class="modal-stat-box">
              <div class="modal-stat-value">${this.formatTime(this.elapsedSeconds)}</div>
              <div class="modal-stat-label">Tempo Total</div>
            </div>
          </div>

          <!-- Highlight Copy Action Box -->
          <div style="background: linear-gradient(135deg, var(--primary-50), rgba(255,255,255,0.9)); border: 2px solid var(--primary-200); border-radius: var(--radius-xl); padding: 32px 28px; margin-bottom: 24px; text-align: center;">
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--primary-900); margin-bottom: 6px;">
              ${Icons.get('lightbulb', 18)} Correção Especializada com Inteligência Artificial
            </div>
            <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 20px; max-width: 580px; margin-left: auto; margin-right: auto;">
              Clique no botão abaixo para copiar automaticamente todas as suas respostas, as 23 perguntas, os critérios científicos e o gabarito oficial para a área de transferência.
            </p>

            <!-- Main Button: COPIAR PROVA PARA IA -->
            <button id="btn-copy-written-exam" class="btn btn-primary btn-lg" style="min-width: 280px; padding: 18px 36px; font-size: 1.2rem; box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35); margin-bottom: 12px;">
              ${Icons.get('copy', 22)} COPIAR PROVA PARA IA
            </button>

            <!-- Dynamic Post-Copy Message -->
            <div id="written-copy-banner" style="display: none; font-size: 0.92rem; color: var(--emerald-700); font-weight: 700; margin-top: 10px; background-color: var(--emerald-50); border: 1px solid var(--emerald-200); padding: 10px 16px; border-radius: var(--radius-md);">
              ${Icons.get('check', 16)} Cole o conteúdo em uma IA para receber a correção detalhada.
            </div>
          </div>

          <!-- Secondary Actions -->
          <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
            <button id="btn-copy-again" class="btn btn-outline" style="display: none;">
              ${Icons.get('copy', 16)} Copiar novamente
            </button>
            <button id="btn-restart-written" class="btn btn-outline">
              ${Icons.get('refresh', 16)} Refazer Prova Escrita
            </button>
            <button id="btn-written-back-home" class="btn btn-secondary">
              ${Icons.get('map', 16)} Voltar ao Início
            </button>
          </div>
        </div>

        <!-- Answers Accordion Preview -->
        <div class="card" style="margin-bottom: 28px;">
          <div style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" id="toggle-answers-preview">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--slate-900);">
              Revisar Respostas Registradas (${answeredCount} de ${total})
            </h3>
            <span id="preview-toggle-icon" style="color: var(--slate-500); transition: transform var(--transition-fast);">
              ${Icons.get('arrowDown', 18)}
            </span>
          </div>

          <div id="answers-preview-body" style="display: none; margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 20px;">
            <div style="display: flex; flex-direction: column; gap: 20px;">
              ${questions.map(q => {
                const ans = this.answers[q.number];
                const hasAnswer = !!(ans && ans.trim().length > 0);
                return `
                  <div style="background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                      <span style="font-size: 0.8rem; font-weight: 800; color: var(--primary-700);">
                        QUESTÃO ${q.number} • ${q.category}
                      </span>
                      <span class="badge ${hasAnswer ? 'badge-success' : 'badge-slate'}" style="font-size: 0.75rem;">
                        ${hasAnswer ? 'Respondida' : 'Em branco'}
                      </span>
                    </div>
                    <p style="font-weight: 700; color: var(--slate-900); margin-bottom: 10px; font-size: 0.95rem;">
                      ${q.prompt}
                    </p>
                    <div style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 14px 16px; font-size: 0.9rem; color: ${hasAnswer ? 'var(--slate-800)' : 'var(--slate-400)'}; line-height: 1.6; white-space: pre-wrap;">${hasAnswer ? ans : '<em>[Nenhuma resposta registrada pelo aluno]</em>'}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachCompletionListeners();
  },

  attachCompletionListeners() {
    const copyBtn = document.getElementById('btn-copy-written-exam');
    const copyAgainBtn = document.getElementById('btn-copy-again');
    const copyBanner = document.getElementById('written-copy-banner');

    const doCopy = () => {
      const promptText = this.buildAiGradingPrompt();
      this.copyToClipboard(promptText, () => {
        this.hasCopied = true;
        if (copyBtn) {
          copyBtn.innerHTML = `${Icons.get('check', 22)} Prova copiada!`;
          copyBtn.classList.remove('btn-primary');
          copyBtn.classList.add('btn-success');
        }
        if (copyBanner) {
          copyBanner.style.display = 'block';
        }
        if (copyAgainBtn) {
          copyAgainBtn.style.display = 'inline-flex';
        }
      });
    };

    if (copyBtn) copyBtn.addEventListener('click', doCopy);
    if (copyAgainBtn) copyAgainBtn.addEventListener('click', doCopy);

    // Accordion toggle
    const toggleHeader = document.getElementById('toggle-answers-preview');
    const previewBody = document.getElementById('answers-preview-body');
    const toggleIcon = document.getElementById('preview-toggle-icon');

    if (toggleHeader && previewBody) {
      toggleHeader.addEventListener('click', () => {
        const isOpen = previewBody.style.display === 'block';
        previewBody.style.display = isOpen ? 'none' : 'block';
        if (toggleIcon) {
          toggleIcon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      });
    }

    // Restart exam
    const restartBtn = document.getElementById('btn-restart-written');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        if (confirm('Deseja realmente iniciar uma nova prova escrita? Suas respostas atuais serão limpas.')) {
          this.clearDraft();
          this.render();
        }
      });
    }

    // Back to home
    const backBtn = document.getElementById('btn-written-back-home');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.AppRouter.navigate('map');
      });
    }
  },

  /**
   * Generates the comprehensive prompt formatted for LLMs to grade the student's exam.
   */
  buildAiGradingPrompt() {
    const questions = this.getQuestions();

    let prompt = `Você é um professor de Fisiologia Humana responsável por corrigir uma prova discursiva.

Corrija as respostas do aluno utilizando exclusivamente critérios científicos de fisiologia humana.

IMPORTANTE:

* Não seja excessivamente rígido com diferenças de palavras.
* Considere correta uma resposta que utilize palavras diferentes, mas apresente o conceito fisiológico correto.
* Considere parcialmente correta uma resposta que contenha apenas parte dos conceitos necessários.
* Considere incorreta uma resposta que apresente conceito fisiologicamente errado.
* Não penalize erros pequenos de gramática ou ortografia quando eles não alterarem o significado científico.
* Não invente informações que não estejam presentes na resposta do aluno.
* Explique de maneira didática por que uma resposta está correta, parcialmente correta ou incorreta.

REGRAS DE CORREÇÃO E PONTUAÇÃO:
* Cada questão vale 10 pontos (Total da prova: 230 pontos).
* A nota final deve ser convertida para uma escala de 0 a 10:
  Nota final = pontos obtidos ÷ 23
* Respostas parcialmente corretas devem receber pontuação proporcional aos conceitos essenciais demonstrados (ex: 3/10, 5/10, 7/10).

Para cada questão, informe rigorosamente neste padrão:

QUESTÃO X
Status: CORRETA / PARCIALMENTE CORRETA / INCORRETA
Nota: X/10

Enunciado:
[pergunta]

Resposta do aluno:
[resposta]

Gabarito esperado:
[gabarito]

Análise:
[explicação didática do que foi contemplado e eventuais falhas conceituais]

Como melhorar:
[orientação objetiva de aprofundamento]

Depois de corrigir todas as 23 questões, apresente:

RESULTADO FINAL

Acertos completos: X/23
Acertos parciais: X/23
Erros: X/23
Pontuação total: X/230 pontos
Nota final: X/10

Também apresente uma análise geral indicando:

* Principais conceitos dominados.
* Principais conceitos que precisam ser revisados.
* Quais questões merecem maior atenção.
* Recomendações de estudo baseadas nos erros encontrados.

Não altere as respostas do aluno antes de avaliá-las.

================================================================================
DADOS DA PROVA DO ALUNO PARA CORREÇÃO
================================================================================
`;

    questions.forEach(q => {
      const studentAnswer = (this.answers[q.number] && this.answers[q.number].trim().length > 0)
        ? this.answers[q.number].trim()
        : '[Nenhuma resposta fornecida pelo aluno / Em branco]';

      prompt += `
--------------------------------------------------------------------------------
QUESTÃO ${q.number} - ${q.category}
--------------------------------------------------------------------------------
Enunciado:
${q.prompt}

Resposta do aluno:
${studentAnswer}

Gabarito esperado:
${q.technicalKey}
`;
    });

    prompt += `
================================================================================
FIM DA PROVA. POR FAVOR, PROCEDA COM A CORREÇÃO DETALHADA E O RESULTADO FINAL.
================================================================================`;

    return prompt;
  },

  /**
   * Copies text to the clipboard with fallback for older browsers.
   */
  copyToClipboard(text, onSuccess) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        if (onSuccess) onSuccess();
      }).catch(() => {
        this.fallbackCopyToClipboard(text, onSuccess);
      });
    } else {
      this.fallbackCopyToClipboard(text, onSuccess);
    }
  },

  fallbackCopyToClipboard(text, onSuccess) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Falha ao copiar:', err);
      alert('Não foi possível copiar automaticamente. Por favor, selecione e copie o texto manualmente.');
    }
    document.body.removeChild(textArea);
  }
};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.WrittenExamEngine = WrittenExamEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WrittenExamEngine };
}
