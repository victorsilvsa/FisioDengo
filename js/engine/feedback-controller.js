// Feedback Controller - Instant Pedagogical Feedback & Lives Management
const FeedbackController = {
  activeSheet: null,

  init() {
    // Create feedback sheet element in DOM if not exists
    let sheet = document.getElementById('global-feedback-sheet');
    if (!sheet) {
      sheet = document.createElement('div');
      sheet.id = 'global-feedback-sheet';
      sheet.className = 'feedback-sheet';
      document.body.appendChild(sheet);
    }
    this.activeSheet = sheet;
  },

  show(isCorrect, userAnswer, question, onNextQuestion, onRetryQuestion, presentation, options = {}) {
    if (!this.activeSheet) this.init();

    // Fallback to QuestionRenderer's active presentation if not passed directly
    if (!presentation && typeof QuestionRenderer !== 'undefined' && QuestionRenderer.currentPresentation) {
      presentation = QuestionRenderer.currentPresentation;
    }

    const isReview = !!(options && options.isReview);
    const xpEarned = isCorrect ? (isReview ? 20 : (question.xp || 15)) : 0;
    if (isCorrect) {
      State.addXP(xpEarned);
    } else if (!isReview) {
      State.loseLife();
    }

    // Determine why chosen answer is wrong if multiple choice
    let rawWhyWrong = '';
    let whyWrongText = '';
    if (!isCorrect) {
      if (presentation && typeof presentation.getWhyWrong === 'function') {
        rawWhyWrong = presentation.getWhyWrong(userAnswer) || '';
      }
      if (!rawWhyWrong && question.whyWrong) {
        if (typeof userAnswer === 'number' && question.whyWrong[userAnswer]) {
          rawWhyWrong = question.whyWrong[userAnswer];
        }
      }
      if (rawWhyWrong) {
        whyWrongText = `<strong>Por que a sua escolha está incorreta:</strong> ${rawWhyWrong}`;
      }
    }

    // Record in state with rich mistake tracking
    State.recordAnswer(question, isCorrect, {
      userAnswer,
      whyWrong: rawWhyWrong,
      isReview
    });

    // Check if lives reached zero (only in campaign mode, never in review)
    if (!isReview && State.data.lives <= 0) {
      this.activeSheet.classList.remove('active');
      this.showGameOverModal(question, () => {
        State.restoreLives();
        if (typeof onRetryQuestion === 'function') {
          onRetryQuestion();
        } else {
          onNextQuestion();
        }
      });
      return;
    }

    // Determine correct answer text
    let correctAnswerText = '';
    if (!isCorrect) {
      if (presentation && presentation.correctLetter && typeof presentation.getCorrectAnswerText === 'function') {
        correctAnswerText = `<strong>Resposta correta:</strong> Alternativa ${presentation.correctLetter} — ${presentation.getCorrectAnswerText()}`;
      } else if (question.type === 'single' || question.type === 'cause_effect') {
        const letters = ['A', 'B', 'C', 'D'];
        correctAnswerText = `<strong>Resposta correta:</strong> Alternativa ${letters[question.correctIndex]} — ${question.options[question.correctIndex]}`;
      } else if (question.type === 'tf') {
        correctAnswerText = `<strong>Gabarito:</strong> ${question.correctIndex === 0 ? 'Verdadeiro' : 'Falso'}`;
      } else if (question.type === 'order') {
        correctAnswerText = `<strong>Sequência correta:</strong> ${(question.steps || []).join(' → ')}`;
      }
    }

    // Check mistake frequency for "REVISÃO NECESSÁRIA" trigger
    const topicMistake = Array.isArray(State.data.mistakes) ? State.data.mistakes.find(m => m.topic === question.topic && !m.resolved) : null;
    const showMiniReviewCallout = (!isCorrect && topicMistake && topicMistake.failCount >= 2);

    this.activeSheet.className = `feedback-sheet ${isCorrect ? 'correct' : 'incorrect'} active`;

    this.activeSheet.innerHTML = `
      <div class="feedback-content">
        <div class="feedback-details">
          <div class="feedback-title-row">
            <div class="feedback-icon">
              ${isCorrect ? Icons.get('check', 20) : Icons.get('cross', 20)}
            </div>
            <h3 class="feedback-title">
              ${isCorrect ? 'Correto! <span style="color: #e11d48; font-weight: 800; font-size: 1.05rem; margin-left: 6px;">Eu te amo princesa</span>' : 'Quase!'}
            </h3>
            ${isCorrect ? `
              <span class="badge badge-success" style="font-size: 0.85rem;">
                ${Icons.get('bolt', 14)} +${xpEarned} XP
              </span>
              ${isReview ? `
                <span class="badge" style="background-color: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; font-weight: 800; font-size: 0.82rem;">
                  ${Icons.get('sparkles', 14)} Erro Superado!
                </span>
              ` : ''}
              <span class="badge badge-princess" style="font-size: 0.95rem; font-weight: 800; background: linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%); color: #be123c; border: 1.5px solid #fda4af; display: inline-flex; align-items: center; gap: 6px; padding: 4px 14px; border-radius: var(--radius-full); box-shadow: 0 2px 6px rgba(225, 29, 72, 0.15);">
                ${Icons.get('heartFilled', 16)} Eu te amo princesa
              </span>
            ` : (isReview ? `
              <span class="badge" style="color: var(--amber-700); background-color: var(--amber-100); font-weight: 700; font-size: 0.82rem;">
                ${Icons.get('refresh', 14)} Treino de Revisão (Vidas preservadas)
              </span>
            ` : `
              <span class="badge badge-slate" style="color: var(--crimson-700); background-color: var(--crimson-100);">
                ${Icons.get('heart', 14)} -1 Vida
              </span>
            `)}
          </div>

          ${correctAnswerText ? `
            <div style="font-size: 0.95rem; color: var(--slate-900); margin-bottom: 8px;">
              ${correctAnswerText}
            </div>
          ` : ''}

          <p class="feedback-explanation">
            <strong>Conceito fisiológico:</strong> ${question.explanation}
          </p>

          ${whyWrongText ? `
            <div class="feedback-why-wrong">
              ${whyWrongText}
            </div>
          ` : ''}

          ${(!isCorrect && question.tip) ? `
            <div class="feedback-tip">
              ${Icons.get('lightbulb', 18)}
              <span><strong>Dica para a Prova:</strong> ${question.tip}</span>
            </div>
          ` : ''}

          ${showMiniReviewCallout ? `
            <div class="mini-review-alert">
              <div style="display: flex; align-items: center; gap: 8px;">
                ${Icons.get('refresh', 18)}
                <span class="mini-review-text">
                  Você errou este assunto (${question.topic}) mais de uma vez. Recomendamos revisar a mini-aula!
                </span>
              </div>
            </div>
          ` : ''}
        </div>

        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap; justify-content: flex-end;">
          ${(!isCorrect && typeof onRetryQuestion === 'function') ? `
            <button id="btn-feedback-retry" class="btn btn-primary btn-lg" style="min-width: 170px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);">
              ${Icons.get('refresh', 18)} Tentar Novamente (Novo Embaralhamento)
            </button>
          ` : ''}
          <button id="btn-feedback-continue" class="btn ${isCorrect ? 'btn-success' : 'btn-outline'} btn-lg" style="min-width: 150px;">
            ${isCorrect ? 'Continuar ' + Icons.get('arrowRight', 18) : 'Avançar Lição ' + Icons.get('arrowRight', 18)}
          </button>
        </div>
      </div>
    `;

    if (!isCorrect && typeof onRetryQuestion === 'function') {
      const retryBtn = document.getElementById('btn-feedback-retry');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          this.hide();
          onRetryQuestion();
        });
      }
    }

    document.getElementById('btn-feedback-continue').addEventListener('click', () => {
      this.hide();
      onNextQuestion();
    });
  },

  hide() {
    if (this.activeSheet) {
      this.activeSheet.classList.remove('active');
    }
  },

  showGameOverModal(question, onRetry) {
    let modal = document.getElementById('game-over-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'game-over-modal';
      modal.className = 'modal-backdrop active';
      document.body.appendChild(modal);
    } else {
      modal.classList.add('active');
    }

    const weakest = State.getWeakestTopics(3);

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-icon-header danger">
          ${Icons.get('heart', 32)}
        </div>
        <h2 class="modal-title">Você ficou sem vidas!</h2>
        <p class="modal-subtitle">
          Não se preocupe: o aprendizado em Fisiologia depende de compreender onde estão as dúvidas.
          Identificamos os tópicos em que você mais precisa reforçar os conceitos:
        </p>

        <div style="background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px; margin-bottom: 24px; text-align: left;">
          <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--slate-500); font-weight: 800; margin-bottom: 10px;">
            Tópicos com menor domínio:
          </h4>
          ${weakest.map(w => `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.9rem; font-weight: 600; color: var(--slate-800);">${w.topic}</span>
              <span class="badge ${w.domain < 50 ? 'badge-slate' : 'badge-primary'}">${w.domain}% domínio</span>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; gap: 12px; flex-direction: column;">
          <button id="btn-retry-lives" class="btn btn-primary btn-lg btn-block">
            ${Icons.get('refresh', 18)} Recarregar Vidas e Tentar Novamente
          </button>
          <button id="btn-return-map" class="btn btn-outline btn-block">
            ${Icons.get('map', 18)} Voltar ao Mapa de Fases
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-retry-lives').addEventListener('click', () => {
      modal.classList.remove('active');
      onRetry();
    });

    document.getElementById('btn-return-map').addEventListener('click', () => {
      modal.classList.remove('active');
      State.restoreLives();
      window.AppRouter.navigate('map');
    });
  }
};

if (typeof window !== 'undefined') {
  window.FeedbackController = FeedbackController;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FeedbackController };
}
