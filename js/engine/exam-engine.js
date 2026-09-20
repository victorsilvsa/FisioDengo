// Exam Simulator Engine - Academic 20-Question Timed Exam
const ExamEngine = {
  questions: [],
  userAnswers: {},
  currentIndex: 0,
  timerInterval: null,
  elapsedSeconds: 0,
  isFinished: false,

  renderIntro() {
    const container = document.getElementById('exam-view-container');
    if (!container) return;

    container.innerHTML = `
      <div style="width: 100%; max-width: 100%;">
        <!-- Header -->
        <div class="card" style="background: linear-gradient(135deg, #1e3a8a, #172554); color: #ffffff; border-radius: var(--radius-xl); padding: 36px 32px; margin-bottom: 28px;">
          <span class="badge" style="background-color: rgba(255, 255, 255, 0.2); color: #ffffff; margin-bottom: 12px;">
            ${Icons.get('exam', 14)} Prova Completa de Fisiologia
          </span>
          <h1 style="font-size: 1.85rem; font-weight: 800; margin-bottom: 8px;">Simulado Acadêmico Oficial</h1>
          <p style="color: var(--primary-100); font-size: 0.95rem; line-height: 1.6; max-width: 800px;">
            Avalie sua prontidão real para a prova de Fisiologia Humana. Questões misturadas de todos os sistemas, cronômetro oficial, sem dicas imediatas e com relatório analítico detalhado de desempenho por disciplina no final.
          </p>
        </div>

        <!-- Rules Card -->
        <div class="card" style="margin-bottom: 28px;">
          <h2 style="font-size: 1.15rem; font-weight: 700; color: var(--slate-900); margin-bottom: 16px;">
            Estrutura e Regras do Simulado
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 20px;">
            <div style="background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px;">
              <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--slate-500);">Número de Questões</div>
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary-700);">20 Questões</div>
            </div>
            <div style="background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px;">
              <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--slate-500);">Tempo Limite Recomendado</div>
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary-700);">25 Minutos</div>
            </div>
            <div style="background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px;">
              <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--slate-500);">Feedback</div>
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary-700);">Apenas no Final</div>
            </div>
          </div>

          <ul style="padding-left: 20px; font-size: 0.92rem; color: var(--slate-700); line-height: 1.7;">
            <li>As questões cobrem Celular, Sangue, Cardiovascular, Respiratório e Casos Integrados.</li>
            <li>Você pode navegar livremente entre as questões e alterar suas respostas antes de finalizar.</li>
            <li>Ao concluir, você receberá a nota de 0 a 10 e o gráfico de aproveitamento por sistema.</li>
          </ul>
        </div>

        <!-- Start CTA -->
        <div style="text-align: center;">
          <button id="btn-start-exam-now" class="btn btn-primary btn-lg btn-block" style="padding: 18px 24px; font-size: 1.15rem;">
            ${Icons.get('exam', 20)} Iniciar Simulado Agora
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-start-exam-now').addEventListener('click', () => {
      this.startExam();
    });
  },

  startExam() {
    // Collect all questions across 5 worlds
    const all = ReviewEngine.getAllQuestions();
    // Pick 20 questions and dynamically shuffle options for each question
    this.questions = [...all]
      .sort(() => Math.random() - 0.5)
      .slice(0, 20)
      .map(q => {
        if (typeof QuestionShuffler !== 'undefined') {
          return QuestionShuffler.shuffle(q);
        }
        return q;
      });

    this.userAnswers = {};
    this.currentIndex = 0;
    this.elapsedSeconds = 0;
    this.isFinished = false;

    // Start timer
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
      const timerEl = document.getElementById('exam-live-timer');
      if (timerEl) {
        timerEl.textContent = this.formatTime(this.elapsedSeconds);
      }
    }, 1000);

    this.renderQuestionScreen();
  },

  formatTime(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  },

  renderQuestionScreen() {
    const container = document.getElementById('exam-view-container');
    if (!container) return;

    const q = this.questions[this.currentIndex];
    const total = this.questions.length;
    const answeredCount = Object.keys(this.userAnswers).length;

    container.innerHTML = `
      <div style="width: 100%; max-width: 100%; padding-bottom: 60px;">
        <!-- Top Live Bar -->
        <div style="display: flex; align-items: center; justify-content: space-between; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 12px 20px; margin-bottom: 24px;">
          <div style="display: flex; align-items: center; gap: 10px; font-weight: 700; color: var(--slate-700);">
            ${Icons.get('clock', 18, 'primary-color')}
            <span>Tempo:</span>
            <span id="exam-live-timer" style="font-family: var(--font-mono); font-size: 1.1rem; color: var(--primary-700);">
              ${this.formatTime(this.elapsedSeconds)}
            </span>
          </div>

          <div style="font-size: 0.9rem; font-weight: 700; color: var(--slate-600);">
            Respondidas: ${answeredCount} / ${total}
          </div>

          <button id="btn-finish-exam-early" class="btn btn-outline btn-sm" style="color: var(--crimson-600); border-color: var(--crimson-300);">
            Entregar Prova
          </button>
        </div>

        <!-- Question Grid Navigator -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
          ${this.questions.map((_, i) => {
            const isAnswered = this.userAnswers[i] !== undefined;
            const isCurrent = i === this.currentIndex;
            let bg = 'var(--bg-surface)';
            let color = 'var(--slate-700)';
            let border = 'var(--border-color)';

            if (isCurrent) {
              border = 'var(--primary-600)';
              bg = 'var(--primary-50)';
              color = 'var(--primary-700)';
            } else if (isAnswered) {
              bg = 'var(--emerald-50)';
              border = 'var(--emerald-400)';
              color = 'var(--emerald-700)';
            }

            return `
              <button class="exam-nav-pill" data-idx="${i}" style="width: 34px; height: 34px; border-radius: var(--radius-md); border: 2px solid ${border}; background-color: ${bg}; color: ${color}; font-weight: 700; font-size: 0.85rem; cursor: pointer;">
                ${i + 1}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Question Body Card -->
        <div class="card" style="margin-bottom: 24px;">
          <div class="question-type-tag" style="margin-bottom: 14px;">
            ${q.topic} • Questão ${this.currentIndex + 1} de ${total}
          </div>

          ${q.scenario ? `
            <div class="question-scenario">
              <div class="question-scenario-title">${Icons.get('stethoscope', 16)} Cenário Clínico:</div>
              <p>${q.scenario}</p>
            </div>
          ` : ''}

          <h2 class="question-title" style="margin-bottom: 20px;">${q.title}</h2>

          ${q.examPrompt ? `
            <div class="exam-prompt-box" style="background-color: var(--slate-50); border: 1.5px solid var(--primary-200); border-radius: var(--radius-md); padding: 18px 20px; margin-bottom: 22px; font-size: 0.94rem; color: var(--slate-800); line-height: 1.65;">
              ${q.examPrompt}
            </div>
          ` : ''}

          <!-- Options -->
          <div class="options-list">
            ${(q.displayOptions || (q.options || []).map((opt, idx) => ({ id: `opt_${idx}`, text: opt, letter: ['A','B','C','D'][idx] }))).map((opt, optIdx) => {
              const optId = (typeof opt === 'object' && opt.id) ? opt.id : `opt_${optIdx}`;
              const letter = (typeof opt === 'object' && opt.letter) ? opt.letter : ['A', 'B', 'C', 'D'][optIdx];
              const text = (typeof opt === 'object' && opt.text) ? opt.text : opt;
              const isSelected = (this.userAnswers[this.currentIndex] === optId || this.userAnswers[this.currentIndex] === optIdx);
              return `
                <button class="option-btn exam-opt-btn ${isSelected ? 'selected' : ''}" data-opt-id="${optId}" data-opt-idx="${optIdx}">
                  <span class="option-letter">${letter}</span>
                  <span class="option-text">${text}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Bottom Prev / Next Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <button id="btn-exam-prev" class="btn btn-outline" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ${Icons.get('arrowLeft', 16)} Anterior
          </button>

          ${this.currentIndex === total - 1 ? `
            <button id="btn-exam-submit" class="btn btn-success btn-lg">
              ${Icons.get('check', 18)} Finalizar e Obter Nota
            </button>
          ` : `
            <button id="btn-exam-next" class="btn btn-primary">
              Próxima ${Icons.get('arrowRight', 16)}
            </button>
          `}
        </div>
      </div>
    `;

    // Listeners for Options
    document.querySelectorAll('.exam-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const optId = e.currentTarget.dataset.optId;
        const optIdx = parseInt(e.currentTarget.dataset.optIdx, 10);
        this.userAnswers[this.currentIndex] = optId || optIdx;
        this.renderQuestionScreen();
      });
    });

    // Navigator pills
    document.querySelectorAll('.exam-nav-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentIndex = parseInt(e.currentTarget.dataset.idx, 10);
        this.renderQuestionScreen();
      });
    });

    // Navigation Prev / Next
    const prevBtn = document.getElementById('btn-exam-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderQuestionScreen();
        }
      });
    }

    const nextBtn = document.getElementById('btn-exam-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex < total - 1) {
          this.currentIndex++;
          this.renderQuestionScreen();
        }
      });
    }

    const submitBtn = document.getElementById('btn-exam-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => this.finishExam());
    }

    const earlyBtn = document.getElementById('btn-finish-exam-early');
    if (earlyBtn) {
      earlyBtn.addEventListener('click', () => {
        if (confirm('Deseja realmente entregar a prova agora e ver seu resultado?')) {
          this.finishExam();
        }
      });
    }
  },

  finishExam() {
    clearInterval(this.timerInterval);
    this.isFinished = true;

    let correctCount = 0;
    const total = this.questions.length;
    const breakdown = {};

    this.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[idx];
      let isCorrect = false;
      if (typeof q.isCorrect === 'function') {
        isCorrect = q.isCorrect(userAns);
      } else {
        isCorrect = (userAns === q.correctIndex);
      }

      if (isCorrect) correctCount++;

      // Track domain / subject
      if (!breakdown[q.topic]) {
        breakdown[q.topic] = { total: 0, correct: 0 };
      }
      breakdown[q.topic].total++;
      if (isCorrect) breakdown[q.topic].correct++;

      // Also record in state domain system
      State.updateDomain(q.topic, isCorrect);
    });

    const grade = ((correctCount / total) * 10).toFixed(1);
    const percentage = Math.round((correctCount / total) * 100);

    // Save in state history
    State.recordExamResult({
      score: correctCount,
      total,
      percentage,
      timeSeconds: this.elapsedSeconds,
      breakdown
    });

    // Add bonus XP for completing exam
    State.addXP(correctCount * 15 + 50);

    this.renderResultScreen(grade, correctCount, total, percentage, breakdown);
  },

  renderResultScreen(grade, correctCount, total, percentage, breakdown) {
    const container = document.getElementById('exam-view-container');
    if (!container) return;

    container.innerHTML = `
      <div style="width: 100%; max-width: 100%; padding-bottom: 60px;">
        <!-- Score Card -->
        <div class="card" style="text-align: center; padding: 40px 32px; margin-bottom: 28px; border-top: 6px solid ${grade >= 7 ? 'var(--emerald-500)' : 'var(--crimson-500)'};">
          <span class="badge ${grade >= 7 ? 'badge-success' : 'badge-amber'}" style="margin-bottom: 12px;">
            Boletim Oficial do Simulado
          </span>
          <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">
            Nota Final: ${grade} / 10.0
          </h1>
          <p style="color: var(--slate-600); font-size: 1rem; margin-bottom: 28px;">
            ${grade >= 7 ? 'Parabéns! Você demonstrou excelente domínio e raciocínio fisiológico!' : 'Bom esforço! Revise os pontos fracos destacados abaixo para gabaritar a prova oficial!'}
          </p>

          <!-- Summary Metric Cards -->
          <div class="modal-stats-grid">
            <div class="modal-stat-box">
              <div class="modal-stat-value" style="color: var(--emerald-600);">${correctCount}</div>
              <div class="modal-stat-label">Acertos</div>
            </div>
            <div class="modal-stat-box">
              <div class="modal-stat-value" style="color: var(--crimson-600);">${total - correctCount}</div>
              <div class="modal-stat-label">Erros</div>
            </div>
            <div class="modal-stat-box">
              <div class="modal-stat-value">${this.formatTime(this.elapsedSeconds)}</div>
              <div class="modal-stat-label">Tempo Total</div>
            </div>
          </div>
        </div>

        <!-- Breakdown by Topic -->
        <div class="card" style="margin-bottom: 28px;">
          <h2 style="font-size: 1.2rem; font-weight: 700; color: var(--slate-900); margin-bottom: 20px;">
            Aproveitamento Detalhado por Assunto
          </h2>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${Object.entries(breakdown).map(([topic, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              return `
                <div>
                  <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.92rem; margin-bottom: 6px;">
                    <span>${topic}</span>
                    <span style="color: ${pct >= 70 ? 'var(--emerald-600)' : 'var(--crimson-600)'};">
                      ${data.correct} / ${data.total} acertos (${pct}%)
                    </span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${pct}%; background-color: ${pct >= 70 ? 'var(--emerald-500)' : 'var(--crimson-500)'};"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Question by Question Review -->
        <div class="card" style="margin-bottom: 28px;">
          <h2 style="font-size: 1.2rem; font-weight: 700; color: var(--slate-900); margin-bottom: 16px;">
            Revisão Questão por Questão
          </h2>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            ${this.questions.map((q, i) => {
              const userAns = this.userAnswers[i];
              const isCorrect = typeof q.isCorrect === 'function' ? q.isCorrect(userAns) : (userAns === q.correctIndex);
              const letters = ['A', 'B', 'C', 'D'];

              let userChoiceText = 'Não respondida';
              if (userAns !== undefined && userAns !== null) {
                if (typeof q.getSelectedOption === 'function') {
                  const selectedOpt = q.getSelectedOption(userAns);
                  if (selectedOpt) {
                    userChoiceText = `${selectedOpt.letter}) ${selectedOpt.text}`;
                  }
                } else if (q.options && q.options[userAns]) {
                  userChoiceText = `${letters[userAns]}) ${q.options[userAns]}`;
                }
              }

              let correctChoiceText = '';
              if (q.correctLetter && typeof q.getCorrectAnswerText === 'function') {
                correctChoiceText = `${q.correctLetter}) ${q.getCorrectAnswerText()}`;
              } else if (q.options && q.options[q.correctIndex]) {
                correctChoiceText = `${letters[q.correctIndex] || ''}) ${q.options[q.correctIndex]}`;
              }

              const topicRef = REFERENCES_DATA.getTopicReference(q.topic);
              return `
                <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px; background-color: ${isCorrect ? 'var(--emerald-50)' : 'var(--crimson-50)'};">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: ${isCorrect ? 'var(--emerald-700)' : 'var(--crimson-700)'};">
                        Questão ${i + 1} — ${isCorrect ? 'ACERTOU' : 'ERROU'}
                      </span>
                      ${isCorrect ? `
                        <span class="badge badge-princess" style="font-size: 0.8rem; font-weight: 800; background: linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%); color: #be123c; border: 1px solid #fda4af; display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: var(--radius-full);">
                          ${Icons.get('heartFilled', 12)} Eu te amo princesa
                        </span>
                      ` : ''}
                    </div>
                    <span style="font-size: 0.8rem; color: var(--slate-500);">${q.topic}</span>
                  </div>

                  <p style="font-weight: 700; color: var(--slate-900); margin-bottom: 8px;">${q.title}</p>

                  ${q.examPrompt ? `
                    <div style="font-size: 0.86rem; color: var(--slate-700); background-color: rgba(255,255,255,0.7); border: 1px solid rgba(0,0,0,0.08); padding: 12px 14px; border-radius: var(--radius-sm); margin-bottom: 10px;">
                      ${q.examPrompt}
                    </div>
                  ` : ''}

                  <div style="font-size: 0.9rem; margin-bottom: 4px;">
                    <strong>Sua resposta:</strong> ${userChoiceText}
                  </div>

                  ${!isCorrect ? `
                    <div style="font-size: 0.9rem; color: var(--emerald-800); margin-bottom: 8px;">
                      <strong>Gabarito correto:</strong> ${correctChoiceText}
                    </div>
                  ` : ''}

                  <div style="font-size: 0.88rem; color: var(--slate-700); line-height: 1.5; margin-top: 6px; padding-top: 6px; border-top: 1px dashed rgba(0,0,0,0.1);">
                    <strong>Explicação:</strong> ${q.explanation}
                  </div>

                  <!-- Fonte para Aprofundamento e Tópicos de Pesquisa -->
                  <div style="margin-top: 10px; padding: 12px 14px; background-color: rgba(255,255,255,0.85); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.82rem; color: var(--slate-700);">
                    <div style="font-weight: 800; color: var(--primary-700); margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                      ${Icons.get('book', 14)} Fundamentação e Tópicos de Pesquisa:
                    </div>
                    <div style="margin-bottom: 3px;"><strong>Guyton & Hall (15ª ed.):</strong> ${topicRef.guyton.chapter}</div>
                    <div style="margin-bottom: 8px;"><strong>OpenStax (2e):</strong> ${topicRef.openstax.section}</div>

                    <!-- Tópicos para Pesquisa Direta no PubMed -->
                    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border-color);">
                      <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--primary-800); margin-bottom: 6px;">
                        Tópicos a Ser Pesquisados:
                      </div>
                      ${REFERENCES_DATA.renderResearchChips(topicRef.researchTopics, { limit: 2 })}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Back to Hub Actions -->
        <div style="display: flex; gap: 14px; justify-content: center;">
          <button id="btn-exam-redo" class="btn btn-primary btn-lg">
            ${Icons.get('refresh', 18)} Fazer Outro Simulado
          </button>
          <button id="btn-exam-back-map" class="btn btn-outline btn-lg">
            ${Icons.get('map', 18)} Voltar ao Mapa de Fases
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-exam-redo').addEventListener('click', () => {
      this.startExam();
    });

    document.getElementById('btn-exam-back-map').addEventListener('click', () => {
      window.AppRouter.navigate('map');
    });
  }
};

if (typeof window !== 'undefined') {
  window.ExamEngine = ExamEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ExamEngine };
}
