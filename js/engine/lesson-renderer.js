// Mini-Lesson Pedagogical Renderer with Exhaustive Academic Source Texts
const LessonRenderer = {
  render(phaseData, onStartQuiz) {
    const container = document.getElementById('lesson-view-container');
    if (!container) return;

    const { lesson, topic, title } = phaseData;
    const ref = REFERENCES_DATA.getTopicReference(topic);
    const pSources = REFERENCES_DATA.primarySources;

    container.innerHTML = `
      <div class="lesson-wrapper" style="width: 100%; max-width: 100%;">
        <!-- Header -->
        <div style="margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <span class="badge badge-primary" style="margin-bottom: 8px;">
              ${Icons.get('book', 14)} Mini-Aula Preparatória
            </span>
            <h1 style="font-size: 1.65rem; font-weight: 800; color: var(--slate-900); letter-spacing: -0.02em;">
              ${title}
            </h1>
            <p style="color: var(--slate-500); font-size: 0.9rem; font-weight: 600;">
              Tópico: ${topic}
            </p>
          </div>
          <button id="btn-skip-to-quiz" class="btn btn-outline btn-sm" title="Pular aula e ir direto para as questões">
            Pular Aula ${Icons.get('arrowRight', 16)}
          </button>
        </div>

        <!-- Discrete Reference Indicator -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 10px;">
          <div class="references-banner">
            ${Icons.get('book', 14)}
            <span>Baseado em referências de fisiologia médica.</span>
            <button id="btn-anchor-sources" style="color: var(--primary-700); font-weight: 700; text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0;">
              Fontes
            </button>
          </div>
          <button type="button" class="btn btn-outline btn-sm" data-deepdive-title="${topic}" style="font-size: 0.8rem; font-weight: 700; gap: 6px; background-color: var(--bg-surface); border-color: var(--primary-300); color: var(--primary-700);">
            ${Icons.get('book', 14)} Estudo Completo: "${topic}"
          </button>
        </div>

        <!-- 1. CONCEITO -->
        <div class="lesson-card concept">
          <div class="lesson-header">
            ${Icons.get('cell', 18, 'primary-color')}
            <span class="lesson-tag">1. Conceito Fundamental</span>
          </div>
          <h2 class="lesson-card-title">${lesson.title}</h2>
          <div class="lesson-body">
            <p>${lesson.concept}</p>
          </div>
        </div>

        <!-- 2. COMO FUNCIONA -->
        <div class="lesson-card mechanism">
          <div class="lesson-header">
            ${Icons.get('refresh', 18)}
            <span class="lesson-tag">2. Como Funciona (Mecanismo Fisiológico)</span>
          </div>
          <div class="lesson-body">
            <p>${lesson.mechanism}</p>
          </div>
        </div>

        <!-- 3. IMPORTANTE PARA A PROVA -->
        <div class="lesson-card exam-point">
          <div class="lesson-header">
            ${Icons.get('lightbulb', 18)}
            <span class="lesson-tag">3. Importante Para a Prova (Alto Rendimento)</span>
          </div>
          <div class="lesson-body">
            <p>${lesson.examPoint}</p>
          </div>
        </div>

        <!-- 4. EXEMPLO FISIOLÓGICO OU CLÍNICO -->
        <div class="lesson-card example">
          <div class="lesson-header">
            ${Icons.get('stethoscope', 18)}
            <span class="lesson-tag">4. Exemplo Fisiológico / Correlação Clínica</span>
          </div>
          <div class="lesson-body">
            <p>${lesson.example}</p>
          </div>
        </div>

        <!-- 5. DESAFIO RÁPIDO -->
        <div class="card" style="border: 2px dashed var(--primary-400); background-color: var(--primary-50); margin-bottom: 32px; border-radius: var(--radius-lg); padding: 22px;">
          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div style="color: var(--primary-600); min-width: 24px; padding-top: 2px;">
              ${Icons.get('brain', 24)}
            </div>
            <div>
              <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--primary-900); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px;">
                Desafio para reflexão imediata:
              </h3>
              <p style="font-size: 0.95rem; color: var(--slate-700); font-style: italic;">
                "${lesson.quickChallenge}"
              </p>
              <div style="margin-top: 10px; font-size: 0.85rem; color: var(--primary-700); font-weight: 600;">
                Pense sobre o mecanismo acima. As questões a seguir testarão se você realmente compreendeu a lógica fisiológica!
              </div>
            </div>
          </div>
        </div>

        <!-- FONTES E APROFUNDAMENTO DA AULA (TEXTOS COMPLETOS) -->
        <div id="lesson-sources-section" class="card" style="margin-bottom: 36px; background-color: var(--bg-surface); border: 2px solid var(--primary-200); border-radius: var(--radius-xl); padding: 28px; box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 38px; height: 38px; border-radius: var(--radius-md); background-color: var(--primary-50); color: var(--primary-700); display: flex; align-items: center; justify-content: center;">
                ${Icons.get('book', 22)}
              </div>
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--slate-900);">
                  Fontes e Aprofundamento da Aula
                </h3>
                <span style="font-size: 0.8rem; color: var(--slate-500); font-weight: 600;">
                  Fundamentação acadêmica detalhada para: <strong>${topic}</strong>
                </span>
              </div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" data-deepdive-title="${topic}" style="font-weight: 700; color: var(--primary-700); border-color: var(--primary-300);">
              ${Icons.get('book', 14)} Abrir Síntese do Tema
            </button>
          </div>

          <!-- Tópicos a Ser Pesquisados (Sem links de lojas - Foco em Pesquisa Acadêmica) -->
          <div class="research-topics-section">
            <div class="research-topics-header">
              <span class="research-topics-title">
                ${Icons.get('search', 15)} Tópicos a Ser Pesquisados
              </span>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--primary-700); text-transform: uppercase; background-color: var(--primary-100); padding: 2px 8px; border-radius: var(--radius-full);">
                PubMed & Literatura
              </span>
            </div>
            <p class="research-topics-subtitle">
              Clique em qualquer tópico para abrir diretamente a literatura científica e revisões acadêmicas sobre este mecanismo:
            </p>
            ${REFERENCES_DATA.renderResearchChips(ref.researchTopics)}
          </div>

          <p style="font-size: 0.9rem; color: var(--slate-600); line-height: 1.6; margin-bottom: 22px;">
            As explicações foram organizadas de forma didática para facilitar o estudo. Para conferência e aprofundamento rigoroso, leia abaixo a síntese oficial dos textos de cada fonte acadêmica:
          </p>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <!-- 1. GUYTON & HALL -->
            <div class="source-card primary-source" style="padding: 24px;">
              <div>
                <div class="source-header">
                  <div>
                    <span class="badge ${pSources.guyton.tagClass}">${pSources.guyton.tag}</span>
                    <span style="margin-left: 8px; font-size: 0.75rem; font-weight: 700; color: var(--slate-500); text-transform: uppercase;">Elsevier / 15ª Edição</span>
                  </div>
                </div>
                <h4 class="source-title" style="font-size: 1.15rem; margin-bottom: 4px;">${pSources.guyton.title}</h4>
                <div class="source-authors" style="font-size: 0.85rem; margin-bottom: 12px;">
                  <strong>Autores:</strong> ${pSources.guyton.authors} • ${pSources.guyton.edition}
                </div>

                <div class="source-section-info">
                  <strong>Capítulo e Localização no Livro:</strong>
                  ${ref.guyton.chapter} ${ref.guyton.pages ? '— ' + ref.guyton.pages : ''}
                </div>

                <!-- Complete Synthesis Text from Guyton & Hall -->
                <div style="font-size: 0.92rem; color: var(--slate-800); line-height: 1.7; margin-bottom: 14px; background-color: var(--slate-50); border-left: 3px solid var(--primary-600); padding: 14px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <strong style="display: block; color: var(--primary-800); font-size: 0.82rem; text-transform: uppercase; margin-bottom: 4px;">
                    O que Guyton & Hall ensina sobre este tema:
                  </strong>
                  ${ref.guyton.summary}
                </div>

                <div style="font-size: 0.86rem; color: var(--primary-900); background-color: var(--primary-50); padding: 10px 14px; border-radius: var(--radius-md); margin-bottom: 16px;">
                  <strong>Ponto-Chave de Prova:</strong> ${ref.guyton.keyPoint}
                </div>
              </div>

              <div class="source-footer" style="gap: 10px; flex-wrap: wrap;">
                <button type="button" class="btn-source-link primary" data-deepdive-title="${topic}">
                  ${Icons.get('book', 13)} Estudo do Tema Guyton & Hall
                </button>
                <button type="button" class="btn-source-link primary" onclick="REFERENCES_DATA.openSourceModal('guyton')" style="background-color: transparent; border-color: var(--border-color); color: var(--slate-700);">
                  ${Icons.get('info', 13)} Ficha da Obra (15ª Ed.)
                </button>
              </div>
            </div>

            <!-- 2. OPENSTAX -->
            <div class="source-card open-source" style="padding: 24px;">
              <div>
                <div class="source-header">
                  <div>
                    <span class="badge ${pSources.openstax.tagClass}">${pSources.openstax.tag}</span>
                    <span style="margin-left: 8px; font-size: 0.75rem; font-weight: 700; color: var(--slate-500); text-transform: uppercase;">OpenStax / Rice University</span>
                  </div>
                </div>
                <h4 class="source-title" style="font-size: 1.15rem; margin-bottom: 4px;">${pSources.openstax.title}</h4>
                <div class="source-authors" style="font-size: 0.85rem; margin-bottom: 12px;">
                  <strong>Instituição & Autores:</strong> ${pSources.openstax.authors} • ${pSources.openstax.edition}
                </div>

                <div class="source-section-info">
                  <strong>Seção do Livro Aberto:</strong>
                  ${ref.openstax.section}
                </div>

                <!-- Complete Synthesis Text from OpenStax -->
                <div style="font-size: 0.92rem; color: var(--slate-800); line-height: 1.7; margin-bottom: 14px; background-color: var(--slate-50); border-left: 3px solid var(--emerald-600); padding: 14px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <strong style="display: block; color: var(--emerald-800); font-size: 0.82rem; text-transform: uppercase; margin-bottom: 4px;">
                    O que o OpenStax detalha sobre este tema:
                  </strong>
                  ${ref.openstax.summary}
                </div>

                <div style="font-size: 0.86rem; color: var(--emerald-900); background-color: var(--emerald-50); padding: 10px 14px; border-radius: var(--radius-md); margin-bottom: 16px;">
                  <strong>Destaque Didático:</strong> ${ref.openstax.keyPoint}
                </div>
              </div>

              <div class="source-footer" style="gap: 10px; flex-wrap: wrap;">
                <button type="button" class="btn-source-link open" data-deepdive-title="${topic}">
                  ${Icons.get('book', 13)} Biofísica e Célula OpenStax
                </button>
                <button type="button" class="btn-source-link open" onclick="REFERENCES_DATA.openSourceModal('openstax')" style="background-color: transparent; border-color: var(--border-color); color: var(--slate-700);">
                  ${Icons.get('info', 13)} Ficha da Obra OpenStax 2e
                </button>
              </div>
            </div>

            <!-- 3. MERCK MANUAL -->
            <div class="source-card complementary-source" style="padding: 24px;">
              <div>
                <div class="source-header">
                  <div>
                    <span class="badge ${pSources.merck.tagClass}">${pSources.merck.tag}</span>
                    <span style="margin-left: 8px; font-size: 0.75rem; font-weight: 700; color: var(--slate-500); text-transform: uppercase;">Merck Sharp & Dohme Corp.</span>
                  </div>
                </div>
                <h4 class="source-title" style="font-size: 1.15rem; margin-bottom: 4px;">${pSources.merck.title}</h4>
                <div class="source-authors" style="font-size: 0.85rem; margin-bottom: 12px;">
                  <strong>Corpo Clínico Editorial:</strong> ${pSources.merck.authors} • ${pSources.merck.edition}
                </div>

                <div class="source-section-info">
                  <strong>Seção Clínica e Fisiológica:</strong>
                  ${ref.merck.section}
                </div>

                <!-- Complete Synthesis Text from Merck Manual -->
                <div style="font-size: 0.92rem; color: var(--slate-800); line-height: 1.7; margin-bottom: 14px; background-color: var(--slate-50); border-left: 3px solid var(--amber-500); padding: 14px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <strong style="display: block; color: var(--amber-800); font-size: 0.82rem; text-transform: uppercase; margin-bottom: 4px;">
                    Correlação Fisiológica e Clínica no Merck Manual:
                  </strong>
                  ${ref.merck.summary}
                </div>

                <div style="font-size: 0.86rem; color: var(--amber-950); background-color: var(--amber-50); padding: 10px 14px; border-radius: var(--radius-md); margin-bottom: 16px;">
                  <strong>Visão Clínica Prática:</strong> ${ref.merck.keyPoint}
                </div>
              </div>

              <div class="source-footer" style="gap: 10px; flex-wrap: wrap;">
                <button type="button" class="btn-source-link complementary" data-deepdive-title="${topic}">
                  ${Icons.get('book', 13)} Fisiopatologia Clínica MSD
                </button>
                <button type="button" class="btn-source-link complementary" onclick="REFERENCES_DATA.openSourceModal('merck')" style="background-color: transparent; border-color: var(--border-color); color: var(--slate-700);">
                  ${Icons.get('info', 13)} Ficha do Manual MSD
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Action CTA -->
        <div style="text-align: center; margin-bottom: 40px;">
          <button id="btn-start-quiz" class="btn btn-primary btn-lg btn-block" style="box-shadow: var(--shadow-lg);">
            Entendi — Começar Questões ${Icons.get('arrowRight', 20)}
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-start-quiz').addEventListener('click', () => {
      onStartQuiz(phaseData);
    });

    document.getElementById('btn-skip-to-quiz').addEventListener('click', () => {
      onStartQuiz(phaseData);
    });

    // Anchor button to scroll to sources
    const anchorBtn = document.getElementById('btn-anchor-sources');
    if (anchorBtn) {
      anchorBtn.addEventListener('click', () => {
        const sec = document.getElementById('lesson-sources-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};

if (typeof window !== 'undefined') {
  window.LessonRenderer = LessonRenderer;
}
