// Multi-format Interactive Question Engine
const QuestionRenderer = {
  currentQuestion: null,
  currentPresentation: null,
  userAnswer: null,
  matchingState: { selectedLeft: null, matchedPairs: {} },
  orderState: [],

  render(question, index, total, onAnswerSubmit) {
    this.currentQuestion = question;
    this.userAnswer = null;
    this.matchingState = { selectedLeft: null, matchedPairs: {} };
    this.orderState = question.steps ? [...question.steps].sort(() => Math.random() - 0.5) : [];

    // Smart Dynamic Shuffle with guaranteed re-shuffling on retries
    let presentation = null;
    if (typeof QuestionShuffler !== 'undefined') {
      presentation = QuestionShuffler.shuffle(question);
    }
    this.currentPresentation = presentation;

    const container = document.getElementById('quiz-view-container');
    if (!container) return;

    const progressPct = Math.round(((index + 1) / total) * 100);

    let html = `
      <div class="quiz-container">
        <!-- Top progress & XP header -->
        <div class="quiz-header">
          <div class="quiz-progress-wrap">
            <div class="quiz-meta">
              <span>Questão ${index + 1} de ${total}</span>
              <span class="quiz-xp-badge">
                ${Icons.get('bolt', 14)} +${question.xp || 15} XP
              </span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${progressPct}%;"></div>
            </div>
          </div>
        </div>

        <!-- Question Card Header -->
        <div class="card question-card">
          <div class="question-type-tag">
            ${this.getTypeIcon(question.type)} ${this.getTypeLabel(question.type)} • ${question.topic}
          </div>

          ${question.scenario ? `
            <div class="question-scenario">
              <div class="question-scenario-title">
                ${Icons.get('stethoscope', 16)} Cenário Fisiológico / Clínico:
              </div>
              <p>${question.scenario}</p>
            </div>
          ` : ''}

          <h2 class="question-title">${question.title}</h2>

          ${question.examPrompt && (question.type === 'matching' || question.type === 'order') ? `
            <div class="card" style="background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px 16px; margin-top: 14px; font-size: 0.9rem; color: var(--slate-800); line-height: 1.6;">
              ${question.examPrompt}
            </div>
          ` : ''}
        </div>

        <!-- Interactive Question Body -->
        <div id="question-interactive-body">
    `;

    // Render by type
    if (question.type === 'single' || question.type === 'cause_effect') {
      html += this.renderMultipleChoice(presentation ? presentation.displayOptions : question.options);
    } else if (question.type === 'tf') {
      html += this.renderTrueFalse(question.options);
    } else if (question.type === 'matching') {
      html += this.renderMatching(question.pairs);
    } else if (question.type === 'order') {
      html += this.renderOrdering(this.orderState);
    }

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Attach listeners
    this.attachListeners(question, onAnswerSubmit);
  },

  getTypeIcon(type) {
    switch (type) {
      case 'matching': return Icons.get('refresh', 14);
      case 'order': return Icons.get('arrowDown', 14);
      case 'cause_effect': return Icons.get('scale', 14);
      case 'tf': return Icons.get('check', 14);
      default: return Icons.get('book', 14);
    }
  },

  getTypeLabel(type) {
    switch (type) {
      case 'matching': return 'Relacione os Conceitos';
      case 'order': return 'Ordene as Etapas';
      case 'cause_effect': return 'Causa e Efeito Fisiológico';
      case 'tf': return 'Verdadeiro ou Falso';
      default: return 'Múltipla Escolha';
    }
  },

  renderMultipleChoice(options) {
    const letters = ['A', 'B', 'C', 'D'];
    return `
      <div class="options-list">
        ${options.map((opt, i) => {
          const letter = (opt && typeof opt === 'object' && opt.letter) ? opt.letter : letters[i];
          const text = (opt && typeof opt === 'object' && opt.text) ? opt.text : opt;
          const optId = (opt && typeof opt === 'object' && opt.id) ? opt.id : `opt_${i}`;
          return `
            <button class="option-btn" data-index="${i}" data-opt-id="${optId}">
              <span class="option-letter">${letter}</span>
              <span class="option-text">${text}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  },

  renderTrueFalse(options = ['Verdadeiro', 'Falso']) {
    return `
      <div class="tf-grid">
        <button class="tf-btn" data-index="0">
          <div style="color: var(--emerald-600);">${Icons.get('check', 32)}</div>
          <span>Verdadeiro</span>
        </button>
        <button class="tf-btn" data-index="1">
          <div style="color: var(--crimson-600);">${Icons.get('cross', 32)}</div>
          <span>Falso</span>
        </button>
      </div>
    `;
  },

  renderMatching(pairs) {
    // Shuffle right items
    const leftItems = pairs.map(p => p.item);
    const rightItems = pairs.map(p => p.match).sort(() => Math.random() - 0.5);

    return `
      <div class="matching-container">
        <div class="matching-column" id="match-col-left">
          ${leftItems.map((item, i) => `
            <div class="match-item left" data-item="${item}" data-index="${i}">
              ${item}
            </div>
          `).join('')}
        </div>
        <div class="matching-column" id="match-col-right">
          ${rightItems.map((match, i) => `
            <div class="match-item right" data-match="${match}" data-index="${i}">
              ${match}
            </div>
          `).join('')}
        </div>
      </div>
      <p style="text-align: center; color: var(--slate-500); font-size: 0.85rem; margin-top: 14px;">
        Clique em um item da coluna da esquerda e em seguida em sua função correspondente na coluna da direita.
      </p>
    `;
  },

  renderOrdering(steps) {
    return `
      <div class="order-list" id="order-items-container">
        ${steps.map((step, i) => `
          <div class="order-item" data-index="${i}">
            <div class="order-rank">${i + 1}</div>
            <div class="order-text">${step}</div>
            <div class="order-controls">
              <button class="order-arrow-btn btn-up" data-index="${i}" ${i === 0 ? 'disabled' : ''}>
                ${Icons.get('arrowUp', 16)}
              </button>
              <button class="order-arrow-btn btn-down" data-index="${i}" ${i === steps.length - 1 ? 'disabled' : ''}>
                ${Icons.get('arrowDown', 16)}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top: 24px; text-align: center;">
        <button id="btn-submit-order" class="btn btn-primary btn-block btn-lg">
          Confirmar Sequência Fisiológica ${Icons.get('check', 18)}
        </button>
      </div>
    `;
  },

  attachListeners(question, onAnswerSubmit) {
    // Multiple Choice & Cause Effect
    if (question.type === 'single' || question.type === 'cause_effect') {
      const buttons = document.querySelectorAll('.option-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedIdx = parseInt(btn.dataset.index, 10);
          const optId = btn.dataset.optId;
          btn.classList.add('selected');
          buttons.forEach(b => b.disabled = true);
          let isCorrect = false;
          if (this.currentPresentation) {
            isCorrect = this.currentPresentation.isCorrect(optId || selectedIdx);
          } else {
            isCorrect = (selectedIdx === question.correctIndex);
          }
          onAnswerSubmit(isCorrect, optId || selectedIdx, question, this.currentPresentation);
        });
      });
    }

    // True or False
    if (question.type === 'tf') {
      const buttons = document.querySelectorAll('.tf-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedIdx = parseInt(btn.dataset.index, 10);
          btn.classList.add('selected');
          buttons.forEach(b => b.disabled = true);
          const isCorrect = (selectedIdx === question.correctIndex);
          onAnswerSubmit(isCorrect, selectedIdx, question, this.currentPresentation);
        });
      });
    }

    // Matching
    if (question.type === 'matching') {
      const leftElements = document.querySelectorAll('.match-item.left');
      const rightElements = document.querySelectorAll('.match-item.right');

      leftElements.forEach(el => {
        el.addEventListener('click', () => {
          if (el.classList.contains('matched')) return;
          leftElements.forEach(l => l.classList.remove('selected'));
          el.classList.add('selected');
          this.matchingState.selectedLeft = el.dataset.item;
        });
      });

      rightElements.forEach(el => {
        el.addEventListener('click', () => {
          if (el.classList.contains('matched') || !this.matchingState.selectedLeft) return;

          const matchText = el.dataset.match;
          const leftText = this.matchingState.selectedLeft;

          // Check if this pair is correct
          const correctPair = question.pairs.find(p => p.item === leftText && p.match === matchText);
          if (correctPair) {
            // Correct match
            const leftEl = Array.from(leftElements).find(l => l.dataset.item === leftText);
            leftEl.classList.remove('selected');
            leftEl.classList.add('matched');
            el.classList.add('matched');

            this.matchingState.matchedPairs[leftText] = matchText;
            this.matchingState.selectedLeft = null;

            // Check if all matched
            if (Object.keys(this.matchingState.matchedPairs).length === question.pairs.length) {
              onAnswerSubmit(true, this.matchingState.matchedPairs, question, this.currentPresentation);
            }
          } else {
            // Wrong match - highlight error briefly
            el.style.borderColor = 'var(--crimson-500)';
            setTimeout(() => {
              el.style.borderColor = '';
              const leftEl = Array.from(leftElements).find(l => l.dataset.item === leftText);
              if (leftEl) leftEl.classList.remove('selected');
              this.matchingState.selectedLeft = null;
            }, 600);
          }
        });
      });
    }

    // Ordering
    if (question.type === 'order') {
      const updateList = () => {
        const container = document.getElementById('order-items-container');
        container.innerHTML = this.orderState.map((step, i) => `
          <div class="order-item" data-index="${i}">
            <div class="order-rank">${i + 1}</div>
            <div class="order-text">${step}</div>
            <div class="order-controls">
              <button class="order-arrow-btn btn-up" data-index="${i}" ${i === 0 ? 'disabled' : ''}>
                ${Icons.get('arrowUp', 16)}
              </button>
              <button class="order-arrow-btn btn-down" data-index="${i}" ${i === this.orderState.length - 1 ? 'disabled' : ''}>
                ${Icons.get('arrowDown', 16)}
              </button>
            </div>
          </div>
        `).join('');

        // Reattach order buttons
        container.querySelectorAll('.btn-up').forEach(b => {
          b.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.dataset.index, 10);
            if (idx > 0) {
              const temp = this.orderState[idx];
              this.orderState[idx] = this.orderState[idx - 1];
              this.orderState[idx - 1] = temp;
              updateList();
            }
          });
        });

        container.querySelectorAll('.btn-down').forEach(b => {
          b.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.dataset.index, 10);
            if (idx < this.orderState.length - 1) {
              const temp = this.orderState[idx];
              this.orderState[idx] = this.orderState[idx + 1];
              this.orderState[idx + 1] = temp;
              updateList();
            }
          });
        });
      };

      updateList();

      document.getElementById('btn-submit-order').addEventListener('click', () => {
        // Compare with question.steps
        let isCorrect = true;
        for (let i = 0; i < question.steps.length; i++) {
          if (this.orderState[i] !== question.steps[i]) {
            isCorrect = false;
            break;
          }
        }
        onAnswerSubmit(isCorrect, [...this.orderState], question, this.currentPresentation);
      });
    }
  }
};

if (typeof window !== 'undefined') {
  window.QuestionRenderer = QuestionRenderer;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuestionRenderer };
}
