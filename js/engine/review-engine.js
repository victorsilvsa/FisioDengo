// Smart Review Engine - Targeted Spaced Practice
const ReviewEngine = {
  currentQuestions: [],
  currentIndex: 0,

  renderHub() {
    const container = document.getElementById('review-view-container');
    if (!container) return;

    const mistakes = State.data.mistakes;
    const weakest = State.getWeakestTopics(4);
    const avgDomain = State.getAverageDomain();

    container.innerHTML = `
      <div style="width: 100%; max-width: 100%;">
        <!-- Hub Banner -->
        <div class="card" style="background: linear-gradient(135deg, #1e293b, #0f172a); color: #ffffff; border-radius: var(--radius-xl); padding: 32px; margin-bottom: 28px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="badge" style="background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4);">
              ${Icons.get('refresh', 14)} Treino Inteligente Anti-Esquecimento
            </span>
          </div>
          <h1 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 8px;">Área de Revisão Fisiológica</h1>
          <p style="color: var(--slate-300); font-size: 0.95rem; line-height: 1.6; max-width: 800px;">
            Nosso algoritmo analisa continuamente seus erros recentes e os tópicos de menor domínio percentual para gerar sessões de reforço direcionadas.
          </p>
        </div>

        <!-- Diagnostics Card -->
        <div class="card" style="margin-bottom: 28px;">
          <h2 style="font-size: 1.15rem; font-weight: 700; color: var(--slate-900); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
            ${Icons.get('chart', 20)} Diagnóstico de Dificuldades Atuais
          </h2>

          ${weakest.length > 0 ? `
            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
              ${weakest.map(item => `
                <div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 600; margin-bottom: 6px;">
                    <span style="color: var(--slate-800);">${item.topic}</span>
                    <span style="color: ${item.domain < 50 ? 'var(--crimson-600)' : 'var(--amber-600)'};">${item.domain}% de domínio</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill ${item.domain < 50 ? 'crimson' : 'amber'}" style="width: ${item.domain}%; background-color: ${item.domain < 50 ? 'var(--crimson-500)' : 'var(--amber-500)'};"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <p style="color: var(--slate-500); font-size: 0.95rem; margin-bottom: 20px;">
              Você ainda não respondeu questões suficientes para mapear pontos fracos. Continue jogando os mundos!
            </p>
          `}

          <div style="background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--slate-500);">Erros Catalogados no Banco</div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--crimson-600);">${mistakes.length} questões</div>
            </div>
            <div>
              <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--slate-500);">Domínio Médio Geral</div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary-700);">${avgDomain}%</div>
            </div>
          </div>
        </div>

        <!-- Launch Review Button -->
        <div style="text-align: center;">
          <button id="btn-start-review-session" class="btn btn-primary btn-lg btn-block" style="padding: 18px 24px; font-size: 1.1rem;">
            ${Icons.get('refresh', 20)} Revisar Questões Direcionadas (+20 XP por acerto)
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-start-review-session').addEventListener('click', () => {
      this.startSession();
    });
  },

  getAllQuestions() {
    const worlds = [WORLD_1_DATA, WORLD_2_DATA, WORLD_3_DATA, WORLD_4_DATA, WORLD_5_DATA];
    let all = [];
    worlds.forEach(w => {
      w.phases.forEach(p => {
        all = all.concat(p.questions);
      });
    });
    return all;
  },

  startSession() {
    const all = this.getAllQuestions();
    const mistakes = State.data.mistakes;

    let selected = [];

    // 1. Add mistaken questions first
    mistakes.forEach(m => {
      const q = all.find(item => item.id === m.id);
      if (q && !selected.find(s => s.id === q.id)) {
        selected.push(q);
      }
    });

    // 2. Add from weakest topics
    const weakest = State.getWeakestTopics(3).map(w => w.topic);
    all.forEach(q => {
      if (selected.length < 10 && weakest.includes(q.topic) && !selected.find(s => s.id === q.id)) {
        selected.push(q);
      }
    });

    // 3. If still less than 6-10 questions, fill with random questions from available pool
    if (selected.length < 6) {
      const shuffledAll = [...all].sort(() => Math.random() - 0.5);
      shuffledAll.forEach(q => {
        if (selected.length < 8 && !selected.find(s => s.id === q.id)) {
          selected.push(q);
        }
      });
    }

    this.currentQuestions = selected.sort(() => Math.random() - 0.5);
    this.currentIndex = 0;

    // Switch view to review quiz runner
    window.AppRouter.navigate('review-quiz');
    this.nextQuestion();
  },

  nextQuestion() {
    if (this.currentIndex >= this.currentQuestions.length) {
      this.finishSession();
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    const renderCurrent = () => {
      QuestionRenderer.render(
        q,
        this.currentIndex,
        this.currentQuestions.length,
        (isCorrect, userAnswer, question, presentation) => {
          FeedbackController.show(
            isCorrect,
            userAnswer,
            q,
            () => {
              this.currentIndex++;
              this.nextQuestion();
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

  finishSession() {
    const container = document.getElementById('quiz-view-container');
    container.innerHTML = `
      <div class="card" style="max-width: 600px; margin: 40px auto; text-align: center; padding: 40px 32px;">
        <div class="modal-icon-header success">
          ${Icons.get('check', 36)}
        </div>
        <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--slate-900); margin-bottom: 8px;">
          Sessão de Revisão Concluída!
        </h2>
        <p style="color: var(--slate-600); font-size: 0.95rem; margin-bottom: 24px;">
          Excelente trabalho! A repetição espaçada e a análise de erros são as ferramentas mais poderosas para consolidar o conhecimento em Fisiologia.
        </p>

        <button id="btn-back-to-hub" class="btn btn-primary btn-lg btn-block">
          ${Icons.get('arrowLeft', 18)} Voltar ao Menu Principal
        </button>
      </div>
    `;

    document.getElementById('btn-back-to-hub').addEventListener('click', () => {
      window.AppRouter.navigate('map');
    });
  }
};
