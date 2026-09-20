// Central Academic References and In-Depth Research Topics Database
// 100% integrado ao FisioDengo: 30 Temas Curriculares, 9 Obras de Referência e 120 Subtópicos de Pesquisa

const REFERENCES_DATA = {
  primarySources: {
  "guyton": {
    "id": "guyton",
    "title": "Guyton & Hall — Tratado de Fisiologia Médica",
    "edition": "15ª edição (2024/2025)",
    "authors": "John E. Hall, PhD; Michael E. Hall, MD, MSc",
    "publisher": "Elsevier",
    "isbn": "ISBN 978-0-443-11101-3",
    "tag": "FONTE PRINCIPAL",
    "tagClass": "badge-primary",
    "description": "A obra mais respeitada e adotada no ensino médico mundial, com ênfase primordial em alças homeostáticas integradas, hemodinâmica e controle orgânico.",
    "citation": "HALL, John E.; HALL, Michael E. Guyton and Hall Textbook of Medical Physiology. 15. ed. Philadelphia: Elsevier, 2024."
  },
  "berne": {
    "id": "berne",
    "title": "Berne & Levy — Fisiologia Médica",
    "edition": "7ª edição",
    "authors": "Bruce M. Koeppen, MD, PhD; Bruce A. Stanton, PhD",
    "publisher": "Elsevier",
    "isbn": "ISBN 978-85-352-8789-9",
    "tag": "BIOFÍSICA QUANTITATIVA",
    "tagClass": "badge-primary",
    "description": "Referência internacional para biofísica de membranas celulares, eletrofisiologia dos canais iônicos, cinética enzimática e transporte tubular renal.",
    "citation": "KOEPPEN, Bruce M.; STANTON, Bruce A. Berne & Levy Fisiologia. 7. ed. Rio de Janeiro: Elsevier, 2018."
  },
  "costanzo": {
    "id": "costanzo",
    "title": "Costanzo — Fisiologia",
    "edition": "7ª edição",
    "authors": "Linda S. Costanzo, PhD",
    "publisher": "Elsevier",
    "isbn": "ISBN 978-0-323-79333-9",
    "tag": "ALTO RENDIMENTO CLÍNICO",
    "tagClass": "badge-success",
    "description": "Clássico absoluto do aprendizado médico de alto rendimento, célebre por seus fluxogramas causa-efeito, equações passo-a-passo e tabelas diagnósticas.",
    "citation": "COSTANZO, Linda S. Fisiologia. 7. ed. Rio de Janeiro: Elsevier, 2022."
  },
  "boron": {
    "id": "boron",
    "title": "Boron & Boulpaep — Medical Physiology",
    "edition": "3ª edição",
    "authors": "Walter F. Boron, MD, PhD; Emile L. Boulpaep, MD",
    "publisher": "Elsevier",
    "isbn": "ISBN 978-1-4557-4377-3",
    "tag": "TRATADO CELULAR & MOLECULAR",
    "tagClass": "badge-purple",
    "description": "O mais abrangente e aprofundado tratado de fisiologia médica contemporânea, detalhando a biologia molecular de transportadores, receptores e bombas.",
    "citation": "BORON, Walter F.; BOULPAEP, Emile L. Medical Physiology: A Cellular and Molecular Approach. 3. ed. Philadelphia: Elsevier, 2017."
  },
  "silverthorn": {
    "id": "silverthorn",
    "title": "Silverthorn — Fisiologia Humana: Uma Abordagem Integrada",
    "edition": "8ª edição",
    "authors": "Dee Unglaub Silverthorn, PhD",
    "publisher": "Artmed / Pearson",
    "isbn": "ISBN 978-85-8271-404-1",
    "tag": "ABORDAGEM INTEGRADA",
    "tagClass": "badge-amber",
    "description": "Excelente metodologia pedagógica fundamentada em mapas conceituais de alças reflexas, comunicação parácrina e integração multissistêmica.",
    "citation": "SILVERTHORN, Dee Unglaub. Fisiologia Humana: Uma Abordagem Integrada. 8. ed. Porto Alegre: Artmed, 2020."
  },
  "west": {
    "id": "west",
    "title": "West — Fisiologia Respiratória: Princípios Básicos",
    "edition": "10ª edição",
    "authors": "John B. West, MD, PhD; Andrew M. Luks, MD",
    "publisher": "Wolters Kluwer / Artmed",
    "isbn": "ISBN 978-85-8271-477-5",
    "tag": "BÍBLIA RESPIRATÓRIA",
    "tagClass": "badge-primary",
    "description": "O texto supremo e padrão-ouro internacional sobre mecânica ventilatória, relação ventilação-perfusão (V/Q), difusão alvéolo-capilar e aclimatação.",
    "citation": "WEST, John B.; LUKS, Andrew M. Fisiologia Respiratória: Princípios Básicos. 10. ed. Porto Alegre: Artmed, 2017."
  },
  "ganong": {
    "id": "ganong",
    "title": "Ganong — Fisiologia Médica",
    "edition": "26ª edição",
    "authors": "Kim E. Barrett, Susan M. Barman, Heddwen L. Brooks, Jason X.-J. Yuan",
    "publisher": "McGraw-Hill / Artmed",
    "isbn": "ISBN 978-85-8055-635-3",
    "tag": "NEURO & ENDÓCRINO",
    "tagClass": "badge-primary",
    "description": "Especializado em neurofisiologia, circuitos sinápticos centrais, regulação autonômica do sistema cardiovascular e endocrinologia médica.",
    "citation": "BARRETT, Kim E. et al. Ganong Fisiologia Médica. 26. ed. Porto Alegre: AMGH / McGraw-Hill, 2021."
  },
  "openstax": {
    "id": "openstax",
    "title": "OpenStax — Anatomy and Physiology 2e",
    "edition": "2ª edição (Acesso Aberto Revisado por Pares)",
    "authors": "J. Gordon Betts, Kelly A. Young, James A. Wise, Eddie Johnson et al.",
    "publisher": "OpenStax, Rice University",
    "isbn": "ISBN-13: 978-1-951693-43-5",
    "tag": "FONTE ABERTA REVISADA",
    "tagClass": "badge-success",
    "description": "Livro-texto universitário gratuito de excelência global mantido pela Universidade Rice, com ilustrações anatômicas e celulares revisadas por especialistas.",
    "citation": "BETTS, J. Gordon et al. Anatomy and Physiology 2e. Houston: OpenStax, Rice University, 2022."
  },
  "merck": {
    "id": "merck",
    "title": "Merck Manual of Diagnosis and Therapy (Manual MSD)",
    "edition": "Edição Profissional",
    "authors": "MSD Medical Editorial Board",
    "publisher": "Merck Sharp & Dohme Corp.",
    "tag": "CORRELAÇÃO CLÍNICA",
    "tagClass": "badge-amber",
    "description": "Compêndio de medicina clínica internacional focado na fisiopatologia dos órgãos, análise de exames complementares e manifestações de disfunção.",
    "citation": "MERCK MANUAL. Professional Version: Medical Physiology, Organ Function and Clinical Pathophysiology. Kenilworth: Merck Sharp & Dohme Corp., 2024."
  }
},

  // Base com todos os 30 temas mapeados 1-a-1 com as 30 fases do jogo
  topics: {},

  // Registra um tema garantindo múltiplos índices (tópico exato, ID de fase, aliases)
  registerTopic(topicData) {
    const key = topicData.topicName;
    this.topics[key] = topicData;
    if (topicData.phaseId) {
      this.topics[topicData.phaseId] = topicData;
    }
    if (topicData.aliases) {
      topicData.aliases.forEach(a => {
        this.topics[a] = topicData;
      });
    }
  },

  // Busca resiliente do tema
  getTopic(identifier) {
    if (!identifier) return this.topics['Homeostase e Feedback'] || Object.values(this.topics)[0];
    
    // 1. Chave exata
    if (this.topics[identifier]) return this.topics[identifier];

    const clean = String(identifier).trim().toLowerCase();

    // 2. Procura em todos os valores por topicName, phaseId, level ou título
    const uniqueTopics = Object.values(this.topics);
    for (const t of uniqueTopics) {
      if (!t.topicName) continue;
      if (t.topicName.toLowerCase() === clean) return t;
      if (t.phaseId && t.phaseId.toLowerCase() === clean) return t;
      if (String(t.level) === clean || clean === `nível ${t.level}` || clean === `nivel ${t.level}`) return t;
      if (t.phaseTitle && t.phaseTitle.toLowerCase() === clean) return t;
    }

    // 3. Procura por subtópicos de pesquisa
    for (const t of uniqueTopics) {
      if (!t.researchTopics) continue;
      const foundSub = t.researchTopics.find(rt => rt.title.toLowerCase() === clean || rt.title.toLowerCase().includes(clean) || clean.includes(rt.title.toLowerCase()));
      if (foundSub) return t;
    }

    // 4. Procura parcial no topicName ou aliases
    for (const t of uniqueTopics) {
      if (!t.topicName) continue;
      if (clean.includes(t.topicName.toLowerCase()) || t.topicName.toLowerCase().includes(clean)) return t;
      if (t.aliases) {
        for (const a of t.aliases) {
          if (clean.includes(a.toLowerCase()) || a.toLowerCase().includes(clean)) return t;
        }
      }
    }

    // Fallback defensivo: primeiro tema válido
    return this.topics['Homeostase e Feedback'] || Object.values(this.topics)[0];
  },

  // Retorna referência completa do tema (compatibilidade com renderers)
  getTopicReference(identifier) {
    return this.getTopic(identifier);
  },

  // Retorna fonte primária por ID
  getPrimarySource(sourceId) {
    return this.primarySources[sourceId] || null;
  },

  // Retorna a lista dos 30 temas únicos ordenados por nível (1 a 30)
  getAllTopicsList() {
    const map = new Map();
    Object.values(this.topics).forEach(t => {
      if (t.level && !map.has(t.level)) {
        map.set(t.level, t);
      }
    });
    return Array.from(map.values()).sort((a, b) => a.level - b.level);
  },

  // Renderiza os chips interativos de subtópicos
  renderResearchChips(researchTopics, activeSubtopicTitle = '') {
    if (!researchTopics || !researchTopics.length) return '';
    const bookIcon = (typeof Icons !== 'undefined') ? Icons.get('book', 12) : '';
    return `
      <div class="research-chips-grid">
        ${researchTopics.map(rt => {
          const isActive = (rt.title === activeSubtopicTitle);
          const safeTitle = rt.title.replace(/"/g, '&quot;');
          return `
            <button type="button" class="research-chip ${isActive ? 'active-chip' : ''}" data-subtopic-title="${safeTitle}" data-deepdive-title="${safeTitle}" title="Estudar mecanismo: ${safeTitle}" style="${isActive ? 'background-color: var(--primary-600); color: #ffffff; border-color: var(--primary-600); font-weight: 700;' : ''}">
              <span class="research-chip-icon">${bookIcon}</span>
              <span class="research-chip-title">${rt.title}</span>
              <span class="research-chip-badge">${isActive ? 'Em Leitura' : 'Aprofundar'}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  },

  // Abre o Modal com reatividade total e seleção dinâmica de livros e subtópicos
  openDeepDiveModal(identifier, selectedSubtopicTitle = null, selectedBookTab = 'guyton') {
    if (!identifier) return;

    const topic = this.getTopic(identifier);
    if (!topic) return;

    // Determina o subtópico ativo
    let subtopic = null;
    if (selectedSubtopicTitle && topic.researchTopics) {
      subtopic = topic.researchTopics.find(rt => rt.title.toLowerCase() === selectedSubtopicTitle.toLowerCase());
    }
    if (!subtopic && topic.researchTopics) {
      subtopic = topic.researchTopics.find(rt => rt.title.toLowerCase() === String(identifier).toLowerCase()) || topic.researchTopics[0];
    }

    const modalEl = document.getElementById('modal-research-deepdive');
    const contentEl = document.getElementById('research-modal-content');
    if (!modalEl || !contentEl) return;

    // Guarda estado no modal para trocas dinâmicas de aba
    modalEl.dataset.currentTopic = topic.topicName;
    modalEl.dataset.currentSubtopic = subtopic ? subtopic.title : '';
    modalEl.dataset.currentBook = selectedBookTab;

    // Livros disponíveis para este tema
    const availableBooks = [
      { id: 'guyton', name: 'Guyton & Hall', badge: '15ª Ed. Elsevier', color: 'var(--primary-600)', data: topic.guyton },
      { id: 'berne', name: 'Berne & Levy', badge: '7ª Ed. Elsevier', color: 'var(--primary-800)', data: topic.berne },
      { id: 'costanzo', name: 'Costanzo', badge: '7ª Ed. Fisiologia', color: 'var(--emerald-600)', data: topic.costanzo },
      { id: 'specialist', name: topic.specialistTitle || 'Tratado Avançado', badge: topic.specialistBadge || 'Especialidade', color: 'var(--purple-600)', data: topic.specialistSource },
      { id: 'openstax', name: 'OpenStax A&P', badge: '2ª Ed. Rice Univ.', color: 'var(--blue-600)', data: topic.openstax },
      { id: 'merck', name: 'Manual MSD', badge: 'Profissional', color: 'var(--amber-600)', data: topic.merck }
    ].filter(b => b.data && b.data.summary);

    // Garante que o livro ativo existe
    let currentBookObj = availableBooks.find(b => b.id === selectedBookTab) || availableBooks[0];

    contentEl.innerHTML = `
      <!-- Header do Modal -->
      <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; border-bottom: 1.5px solid var(--border-color); padding-bottom: 16px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap;">
            <span class="badge badge-primary">
              ${Icons.get('book', 14)} Nível ${topic.level} • ${topic.category}
            </span>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--slate-500);">
              Fase: ${topic.phaseTitle || topic.topicName}
            </span>
          </div>
          <h2 style="font-size: 1.45rem; font-weight: 900; color: var(--slate-900); line-height: 1.3;">
            ${topic.topicName}
          </h2>
        </div>
        <button type="button" onclick="REFERENCES_DATA.closeDeepDiveModal()" class="action-btn" style="width: 38px; height: 38px; border-radius: var(--radius-full); font-size: 1.2rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;" title="Fechar">
          ✕
        </button>
      </div>

      <!-- Seletor de Subtópicos com Destaque Dinâmico -->
      <div style="margin-bottom: 22px; background: var(--slate-50); padding: 14px; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: var(--slate-700);">
            ${Icons.get('search', 13)} Subtópicos Curriculares Deste Tema (Clique para Mudar):
          </span>
          <span style="font-size: 0.75rem; color: var(--primary-600); font-weight: 700;">
            4 tópicos aprofundados
          </span>
        </div>
        <div class="research-chips-grid" style="gap: 8px;">
          ${topic.researchTopics.map(rt => {
            const isCur = (subtopic && rt.title === subtopic.title);
            const safeT = rt.title.replace(/"/g, '&quot;');
            return `
              <button type="button" class="research-chip ${isCur ? 'active-chip' : ''}" onclick="REFERENCES_DATA.openDeepDiveModal('${topic.topicName.replace(/'/g, "\\'")}', '${safeT.replace(/'/g, "\\'")}', '${currentBookObj.id}')" style="${isCur ? 'background-color: var(--primary-600); color: #ffffff; border-color: var(--primary-600); box-shadow: 0 2px 8px rgba(37,99,235,0.3);' : ''}">
                <span class="research-chip-icon">${Icons.get('book', 12)}</span>
                <span class="research-chip-title" style="font-weight: ${isCur ? '800' : '600'};">${rt.title}</span>
                ${isCur ? '<span class="research-chip-badge" style="background: rgba(255,255,255,0.25); color: #fff;">Selecionado</span>' : ''}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Card do Subtópico Selecionado (Mecanismo & Fórmula Dedicados) -->
      ${subtopic ? `
        <div class="card" style="margin-bottom: 22px; padding: 18px 20px; background: #ffffff; border: 1.5px solid var(--primary-200); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge badge-success" style="font-size: 0.72rem;">
              ${Icons.get('check', 12)} Subtópico Selecionado
            </span>
            <span style="font-size: 0.76rem; color: var(--slate-500); font-family: monospace;">
              Ref: ${subtopic.keyReference || 'Literatura Primária'}
            </span>
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--primary-800); margin-bottom: 10px;">
            ${subtopic.title}
          </h3>
          <p style="font-size: 0.94rem; color: var(--slate-800); line-height: 1.7; margin-bottom: 12px;">
            ${subtopic.concept || subtopic.description || 'Mecanismo celular e biofísico de alta precisão.'}
          </p>
          ${subtopic.formulaOrLaw ? `
            <div style="background: var(--slate-900); color: #38bdf8; padding: 10px 14px; border-radius: var(--radius-md); font-family: monospace; font-size: 0.88rem; margin-bottom: 10px;">
              <strong>Equação / Lei Fisiológica:</strong> ${subtopic.formulaOrLaw}
            </div>
          ` : ''}
          <div style="font-size: 0.8rem; color: var(--slate-500);">
            <strong>Termos de Pesquisa PubMed:</strong> <code>${subtopic.query || subtopic.title}</code>
          </div>
        </div>
      ` : ''}

      <!-- Navegador de Livros-Texto Acadêmicos (Abas Interativas) -->
      <div style="margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: var(--slate-800); display: flex; align-items: center; gap: 6px;">
            ${Icons.get('book', 16)} Fontes Acadêmicas Oficiais (Escolha a Obra para Ler):
          </span>
          <span style="font-size: 0.75rem; color: var(--slate-500);">
            ${availableBooks.length} obras cadastradas para este tema
          </span>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap; border-bottom: 2px solid var(--border-color); padding-bottom: 4px;">
          ${availableBooks.map(book => {
            const isAct = (book.id === currentBookObj.id);
            const subTitleEsc = (subtopic ? subtopic.title.replace(/'/g, "\\'") : '');
            return `
              <button type="button" class="btn btn-sm" onclick="REFERENCES_DATA.openDeepDiveModal('${topic.topicName.replace(/'/g, "\\'")}', '${subTitleEsc}', '${book.id}')" style="font-size: 0.82rem; font-weight: 800; border-radius: var(--radius-md) var(--radius-md) 0 0; border: 1px solid ${isAct ? 'var(--primary-600)' : 'var(--border-color)'}; border-bottom: ${isAct ? '3px solid var(--primary-600)' : 'none'}; background: ${isAct ? 'var(--bg-surface)' : 'var(--slate-50)'}; color: ${isAct ? 'var(--primary-700)' : 'var(--slate-600)'}; padding: 8px 14px;">
                ${book.name}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Texto Detalhado da Obra Selecionada -->
      <div class="card" style="padding: 22px 24px; background-color: var(--slate-50); border-left: 5px solid ${currentBookObj.color}; border-radius: 0 var(--radius-lg) var(--radius-lg) 0; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge" style="background: ${currentBookObj.color}; color: #ffffff; font-size: 0.72rem; margin-bottom: 4px;">
              ${currentBookObj.name} • ${currentBookObj.badge}
            </span>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--slate-900);">
              ${currentBookObj.data.chapter || currentBookObj.data.section || 'Capítulo da Obra'}
            </div>
            ${currentBookObj.data.pages ? `
              <div style="font-size: 0.8rem; color: var(--slate-500); font-family: monospace;">
                Páginas de Estudo: ${currentBookObj.data.pages}
              </div>
            ` : ''}
          </div>
        </div>

        <p style="font-size: 0.95rem; color: var(--slate-800); line-height: 1.8; margin-bottom: 16px; text-align: justify;">
          ${currentBookObj.data.summary}
        </p>

        ${currentBookObj.data.keyPoint ? `
          <div style="font-size: 0.88rem; font-weight: 700; color: var(--slate-900); background-color: #ffffff; border: 1px solid var(--border-color); border-left: 4px solid ${currentBookObj.color}; padding: 12px 16px; border-radius: var(--radius-sm);">
            <strong>Ponto-Chave de Avaliação:</strong> ${currentBookObj.data.keyPoint}
          </div>
        ` : ''}
      </div>

      <!-- Rodapé de Ações -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 16px; flex-wrap: wrap; gap: 10px;">
        <div style="font-size: 0.8rem; color: var(--slate-500);">
          Totalmente integrado ao FisioDengo • Sem anúncios e sem redirecionamentos externos.
        </div>
        <button type="button" onclick="REFERENCES_DATA.closeDeepDiveModal()" class="btn btn-primary" style="padding: 10px 24px;">
          ${Icons.get('check', 16)} Concluir Estudo Deste Tema
        </button>
      </div>
    `;

    modalEl.classList.add('active');
  },

  // Fecha o Modal
  closeDeepDiveModal() {
    const modalEl = document.getElementById('modal-research-deepdive');
    if (modalEl) {
      modalEl.classList.remove('active');
    }
  },

  // Abre a Ficha Técnica de uma Obra Primária
  openSourceModal(sourceId) {
    const src = this.primarySources[sourceId];
    if (!src) return;

    const modalEl = document.getElementById('modal-research-deepdive');
    const contentEl = document.getElementById('research-modal-content');
    if (!modalEl || !contentEl) return;

    contentEl.innerHTML = `
      <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; border-bottom: 1.5px solid var(--border-color); padding-bottom: 16px;">
        <div>
          <span class="badge ${src.tagClass || 'badge-primary'}" style="margin-bottom: 6px;">${src.tag}</span>
          <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--slate-900);">
            ${src.title}
          </h2>
          <div style="font-size: 0.88rem; color: var(--slate-500);">
            ${src.authors} • ${src.edition} • ${src.publisher}
          </div>
        </div>
        <button type="button" onclick="REFERENCES_DATA.closeDeepDiveModal()" class="action-btn" style="width: 38px; height: 38px; border-radius: var(--radius-full); font-size: 1.2rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;" title="Fechar">
          ✕
        </button>
      </div>

      <div class="card" style="padding: 20px; background-color: var(--slate-50); border: 1px solid var(--border-color); border-radius: var(--radius-lg); margin-bottom: 20px;">
        <h3 style="font-size: 0.88rem; font-weight: 800; text-transform: uppercase; color: var(--slate-700); margin-bottom: 8px;">
          Citação Bibliográfica Acadêmica (ABNT / Vancouver)
        </h3>
        <div style="font-family: monospace; font-size: 0.88rem; color: var(--slate-800); background: #ffffff; padding: 12px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-color); line-height: 1.5;">
          ${src.citation}
        </div>
        ${src.isbn ? `<div style="font-size: 0.78rem; color: var(--slate-500); margin-top: 6px;">${src.isbn}</div>` : ''}
      </div>

      <div class="card" style="padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--slate-900); margin-bottom: 8px;">
          Importância Pedagógica no FisioDengo
        </h3>
        <p style="font-size: 0.94rem; color: var(--slate-700); line-height: 1.7;">
          ${src.description} Todas as questões, dicas mecanísticas, alças de feedback e parâmetros biofísicos do FisioDengo foram estruturados e revisados com base rigorosa nesta publicação de prestígio acadêmico.
        </p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--border-color); padding-top: 16px;">
        <button type="button" onclick="REFERENCES_DATA.closeDeepDiveModal()" class="btn btn-primary" style="padding: 10px 24px;">
          ${Icons.get('check', 16)} Entendido — Voltar ao Jogo
        </button>
      </div>
    `;
    modalEl.classList.add('active');
  }
};

// Registra todos os 30 temas detalhados
const ALL_TOPICS_DATABASE = [
  {
    "topicName": "Homeostase e Feedback",
    "phaseId": "w1_p1",
    "level": 1,
    "worldId": "w1",
    "category": "Fisiologia Celular & Meio Interno",
    "phaseTitle": "Homeostase & Alça de Controle",
    "aliases": [
      "Homeostase",
      "Feedback Negativo",
      "Alça de Controle"
    ],
    "specialistTitle": "Boron & Boulpaep",
    "specialistBadge": "Fisiologia Molecular",
    "guyton": {
      "chapter": "Unidade I: Introdução à Fisiologia — Capítulo 1: Organização Funcional do Corpo Humano e Controle do \"Meio Interno\"",
      "pages": "pp. 3-14",
      "summary": "Claude Bernard introduziu o conceito seminal de milieu intérieur (meio interno), o líquido extracelular (LEC) que banha e nutre todas as células do corpo. Walter Cannon cunhou o termo homeostase para descrever a manutenção ativa de condições quase constantes nesse meio interno. Guyton & Hall detalha que a imensa maioria dos sistemas fisiológicos opera sob alças de retroalimentação negativa (feedback negativo): uma perturbação inicial é detectada por receptores (sensores), que enviam sinais aferentes a um centro de integração; este compara o valor monitorado com um ponto de ajuste pré-fixado (set-point) e dispara uma resposta eferente via efetores que inverte o sentido da alteração, retornando a variável à faixa de normalidade.",
      "keyPoint": "O feedback negativo inverte o desvio e sustenta a homeostase. O feedback positivo amplifica o desvio e é reservado a eventos de conclusão rápida (parto, coagulação e potencial de ação)."
    },
    "berne": {
      "chapter": "Capítulo 1: Princípios Celulares e Controle Homeostático",
      "pages": "pp. 2-18",
      "summary": "Berne & Levy aborda o controle homeostático sob o ponto de vista termodinâmico e biofísico: o organismo humano é um sistema aberto que troca matéria e energia com o meio ambiente, mantendo-se em estado estacionário dinâmico (steady state), e não em equilíbrio químico simples. A manutenção do estado estacionário consome constantemente energia livre (ATP). A obra formaliza o \"ganho\" da alça de controle (Gain = Correção / Erro residual), demonstrando matematicamente que quanto maior o ganho de um sistema regulador, mais eficaz é a sua capacidade de tamponar oscilações externas.",
      "keyPoint": "Homeostase é um estado estacionário dinâmico mantido com gasto contínuo de energia metabólica, e não um mero equilíbrio termodinâmico passivo."
    },
    "costanzo": {
      "chapter": "Capítulo 1: Fisiologia Celular — Alças de Retroalimentação",
      "pages": "pp. 1-6",
      "summary": "Costanzo disseca didaticamente os componentes universais da alça: Estímulo -> Receptor -> Via Aferente -> Centro de Controle -> Via Eferente -> Efetor -> Resposta. Exemplifica com clareza o reflexo barorreceptor para regulação da pressão arterial média e a alça endócrina glicose-insulina: quando a glicemia sobe, células beta pancreáticas atuam concomitantemente como sensor e centro integrador, secretando insulina para que fígado e músculos captem glicose, finalizando a alça.",
      "keyPoint": "A resposta do efetor desativa o estímulo que originalmente deflagrou a alça no feedback negativo."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 1: Fundamentos da Fisiologia Médica e Regulação Dinâmica",
      "pages": "pp. 3-12",
      "summary": "Boron & Boulpaep aprofunda o conceito de regulação antecipatória (feedforward control), no qual o sistema nervoso detecta um distúrbio iminente antes mesmo que o meio interno sofra alteração (ex: secreção cefálica de saliva e ácido gástrico ao ver ou cheirar alimento, e hiperventilação antecipatória pré-exercício físico), prevenindo o desvio homeostático antes de sua ocorrência.",
      "keyPoint": "O mecanismo de feedforward previne a alteração homeostática antes que ela ocorra, enquanto o feedback reage à alteração consumada."
    },
    "openstax": {
      "section": "Chapter 1: An Introduction to the Human Body — Section 1.5: Homeostasis",
      "summary": "OpenStax detalha os três componentes fundamentais da alça e apresenta diagramas comparativos entre feedback negativo (regulação térmica corporal) e feedback positivo (liberação de ocitocina pelas contrações uterinas no reflexo de Ferguson).",
      "keyPoint": "Sensor -> Integrador -> Efetor formam a arquitetura universal de controle biológico."
    },
    "merck": {
      "section": "Biologia dos Sistemas — Homeostase e Distúrbios Hidroeletrolíticos",
      "summary": "O Manual MSD enfatiza a homeostase clínica como a margem de sobrevivência dos pacientes críticos na UTI. Destaca que falhas no feedback negativo sobre o pH arterial ou osmolaridade sérica precipitam choque, convulsões e óbito rápido.",
      "keyPoint": "Toda doença clínica grave reflete o colapso de uma ou mais alças de controle homeostático."
    },
    "researchTopics": [
      {
        "title": "Alça de Controle Homeostático e Sensores",
        "concept": "Estrutura funcional composta por sensores específicos que detectam variações físicas ou químicas no LEC, vias aferentes neuronais ou hormonais, centros integradores que processam a magnitude do erro e vias eferentes que acionam efetores teciduais.",
        "formulaOrLaw": "Ganho da Alça = Correção Efetuada / Erro Residual",
        "keyReference": "Guyton & Hall, Cap. 1",
        "query": "homeostatic control loop sensor integrator effector gain"
      },
      {
        "title": "Feedback Negativo e Ponto de Ajuste (Set-Point)",
        "concept": "Mecanismo predominante na fisiologia no qual o sinal de saída da alça atua de forma oposta ao estímulo desencadeante, amortecendo flutuações e conservando a variável dentro de limites estreitos de compatibilidade com a vida.",
        "formulaOrLaw": "Resposta = - k * (Variável Real - SetPoint)",
        "keyReference": "Costanzo, Fisiologia, Cap. 1",
        "query": "negative feedback mechanisms physiological homeostasis set point"
      },
      {
        "title": "Feedback Positivo no Parto (Reflexo de Ferguson)",
        "concept": "Ciclo auto-amplificador no qual o estiramento da cérvice uterina pelo feto estimula a secreção de ocitocina pela neuro-hipófise, a qual intensifica as contrações miometriais, estirando ainda mais a cérvice até a expulsão completa do concepto.",
        "formulaOrLaw": "Amplificação Autocatalítica: dX/dt = + k * X",
        "keyReference": "Guyton & Hall, Cap. 83",
        "query": "oxytocin positive feedback ferguson reflex parturition"
      },
      {
        "title": "Controle Antecipatório (Feedforward) e Meio Interno",
        "concept": "Controle preditivo no qual o organismo inicia respostas fisiológicas adaptativas previamente ao surgimento da perturbação no LEC, utilizando pistas sensoriais ambientais ou comandos motores centrais.",
        "formulaOrLaw": "Regulação Preditiva Sem Erro Prévio",
        "keyReference": "Boron & Boulpaep, Cap. 1",
        "query": "feedforward control physiological homeostasis anticipation"
      }
    ]
  },
  {
    "topicName": "Membrana e Transporte Passivo",
    "phaseId": "w1_p2",
    "level": 2,
    "worldId": "w1",
    "category": "Fisiologia Celular & Meio Interno",
    "phaseTitle": "Membrana & Transporte Passivo",
    "aliases": [
      "Membrana Plasmática",
      "Difusão Simples",
      "Difusão Facilitada"
    ],
    "specialistTitle": "Boron & Boulpaep",
    "specialistBadge": "Biofísica Celular",
    "guyton": {
      "chapter": "Unidade I — Capítulo 4: Transporte de Substâncias Através das Membranas Celulares",
      "pages": "pp. 47-60",
      "summary": "A membrana celular consiste em uma bicamada lipídica hidrofóbica com proteínas integrais e periféricas inseridas. O transporte passivo ocorre sem consumo direto ou indireto de energia metabólica, impulsionado pela energia cinética térmica molecular inerente e pelo gradiente eletroquímico. A difusão simples independe de carreadores proteicos e sua taxa é diretamente proporcional à solubilidade lipídica do soluto e à área de membrana (gases O2, CO2, N2 e pequenas moléculas lipofílicas como anestésicos e esteroides). A difusão facilitada depende de proteínas carreadoras transmembrana (como os transportadores de glicose GLUT), exibindo características de saturação cinética (velocidade máxima Vmax), especificidade química e competição estérica entre análogos.",
      "keyPoint": "A difusão simples não satura; a difusão facilitada satura em Vmax porque o número de transportadores de membrana é finito."
    },
    "berne": {
      "chapter": "Capítulo 2: Transporte de Membrana e Biofísica da Permeabilidade",
      "pages": "pp. 20-38",
      "summary": "Berne & Levy quantifica os fluxos de difusão simples através da 1ª Lei de Fick: J = - P * A * (C1 - C2), onde P é o coeficiente de permeabilidade da membrana e A a área de superfície. O coeficiente de permeabilidade incorpora o coeficiente de partição óleo/água de Meyer-Overton, o coeficiente de difusão na membrana e a espessura da bicamada. Para a difusão facilitada, aplica-se a cinética de Michaelis-Menten: J = (Jmax * [S]) / (Km + [S]), demonstrando que a afinidade do carreador é expressa inversamente pelo Km.",
      "keyPoint": "Equação de Michaelis-Menten rege a difusão facilitada: em altas concentrações de soluto, o fluxo atinge o platô Jmax."
    },
    "costanzo": {
      "chapter": "Capítulo 1: Difusão Simples versus Facilitada",
      "pages": "pp. 6-12",
      "summary": "Costanzo compara didaticamente as características dos carreadores de difusão facilitada: 1) Estereoespecificidade (ex: GLUT transporta D-glicose, mas é incapaz de transportar L-glicose); 2) Saturação (a taxa máxima ocorre quando todos os sítios de ligação estão ocupados); 3) Competição (a presença de D-galactose reduz a taxa de transporte de D-glicose por ocupar competitivamente os sítios).",
      "keyPoint": "D-glicose entra nos eritrócitos por difusão facilitada via GLUT1, um transporte estéreo-específico e saturável."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 5: Mecanismos Moleculares de Transporte e Poros Celulares",
      "pages": "pp. 102-124",
      "summary": "Boron descreve as conformações moleculares alternantes do modelo rocker-switch em proteínas carreadoras: o sítio de ligação de alta afinidade expõe-se alternadamente ao fluido extracelular e ao citosol, sofrendo mudança conformacional termicamente ativada que permite o trânsito do soluto sem abertura contínua de um poro aquoso.",
      "keyPoint": "Transportadores carreadores operam por ciclos conformacionais alternantes, ao contrário dos canais que formam poros aquosos contínuos."
    },
    "openstax": {
      "section": "Chapter 3: The Cellular Level of Organization — Section 3.1: The Cell Membrane",
      "summary": "OpenStax ilustra o modelo do mosaico fluido de Singer e Nicolson, a presença de colesterol modulando a fluidez da membrana e a classificação de proteínas transmembrana multipasso em canais aquosos, carreadores e bombas.",
      "keyPoint": "Gases e lipídios cruzam a bicamada livremente; solutos polares e íons exigem carreadores ou canais proteicos."
    },
    "merck": {
      "section": "Farmacologia Básica — Absorção de Fármacos e Permeabilidade de Membrana",
      "summary": "O Manual MSD correlaciona a lipossolubilidade dos medicamentos com sua capacidade de atravessar a barreira hematoencefálica por difusão simples passiva, destacando que substâncias ionizadas ou hidrofílicas exigem sistemas transportadores específicos.",
      "keyPoint": "Fármacos lipofílicos atravessam barreiras celulares com muito mais facilidade do que compostos hidrofílicos polares."
    },
    "researchTopics": [
      {
        "title": "Difusão Facilitada e Cinética Vmax (GLUT)",
        "concept": "Transporte passivo carreado que não hidrolisa ATP, no qual a taxa de influxo de glicose atinge platô quando a concentração do substrato satura todos os sítios ativos do carreador na membrana.",
        "formulaOrLaw": "J = (Vmax * [S]) / (Km + [S])",
        "keyReference": "Guyton & Hall, Cap. 4",
        "query": "facilitated diffusion glucose transporter saturation kinetics vmax"
      },
      {
        "title": "Lei de Fick da Difusão de Membrana",
        "concept": "Princípio biofísico que estabelece que o fluxo difusional líquido de um soluto apolar através da bicamada lipídica é proporcional à área, ao gradiente de concentração e inversamente proporcional à espessura da membrana.",
        "formulaOrLaw": "J = - D * A * (dC / dx)",
        "keyReference": "Berne & Levy, Cap. 2",
        "query": "fick law membrane permeability diffusion flux coefficient"
      },
      {
        "title": "Canais Iônicos de Vazamento (Leak Channels)",
        "concept": "Poros proteicos transmembrana constitutivamente abertos no repouso, altamente seletivos para o potássio (K2P), que permitem o fluxo passivo de íons a favor do gradiente eletroquímico.",
        "formulaOrLaw": "I = g * (Vm - Eion)",
        "keyReference": "Boron & Boulpaep, Cap. 6",
        "query": "leak potassium channels resting membrane conductance"
      },
      {
        "title": "Seletividade e Filtro de Desidratação de Íons",
        "concept": "Arranjo coordenado de átomos de oxigênio de carbonila no filtro de seletividade do canal de K+ que mimetiza a esfera de hidratação do íon, permitindo passagem rápida e seletiva apenas para o potássio desidratado.",
        "formulaOrLaw": "Filtro de Seletividade de MacKinnon",
        "keyReference": "Boron & Boulpaep, Cap. 6",
        "query": "ion channel selectivity filter hydration shell potassium channel"
      }
    ]
  },
  {
    "topicName": "Tonicidade e Osmose",
    "phaseId": "w1_p3",
    "level": 3,
    "worldId": "w1",
    "category": "Fisiologia Celular & Meio Interno",
    "phaseTitle": "Osmose, Tonicidade & Hemácias",
    "aliases": [
      "Osmose",
      "Tonicidade",
      "Osmolaridade"
    ],
    "specialistTitle": "Boron & Boulpaep",
    "specialistBadge": "Biofísica Osmótica",
    "guyton": {
      "chapter": "Unidade V: Os Líquidos Corporais e os Rins — Capítulo 25: Compartimentos Líquidos Corporais, Osmose e Tonicidade",
      "pages": "pp. 305-322",
      "summary": "Guyton & Hall esclarece com máxima clareza a distinção médica fundamental entre osmolaridade e tonicidade. A osmolaridade quantifica o número total de partículas de soluto osmoticamente ativas por litro de solução (mOsm/L), independentemente de serem permeáveis ou impermeáveis à membrana. A tonicidade, por sua vez, é uma propriedade biológica relativa que descreve a capacidade de uma solução de alterar o volume celular em estado estacionário, e depende EXCLUSIVAMENTE da concentração de solutos NÃO-PENETRANTES (impermeáveis, como Na+ e glicose fora da célula, e K+ e proteínas no interior). Soluções com solutos penetrantes (como a ureia) são isosmolares, mas se comportam como funcionalmente hipotônicas, causando tumefação celular.",
      "keyPoint": "Tonicidade é determinada estritamente por solutos não-penetrantes. Solução de ureia 300 mOsm/L é isosmolar, mas hipotônica e causará hemólise."
    },
    "berne": {
      "chapter": "Capítulo 2: Forças Osmóticas e Equilíbrio Hídrico de Van t Hoff",
      "pages": "pp. 32-44",
      "summary": "Berne & Levy detalha a Lei de Van t Hoff para a pressão osmótica teórica: π = i * C * R * T, onde i é o fator de dissociação de van t Hoff (ex: i=1,8 para NaCl). Introduz o Coeficiente de Reflexão de Staverman (σ): se σ = 1, a membrana é totalmente impermeável ao soluto (soluto não-penetrante; reflete 100% das moléculas gerando pressão osmótica efetiva máxima π_efetiva = σ * π); se σ = 0, a membrana é totalmente permeável ao soluto (como a ureia), de modo que a pressão osmótica efetiva é zero.",
      "keyPoint": "Pressão Osmótica Efetiva = σ * π. Se o coeficiente de reflexão σ for zero, o soluto não gera força osmótica para reter água."
    },
    "costanzo": {
      "chapter": "Capítulo 1: Balanço Hídrico, Osmolaridade e Comportamento Eritrocitário",
      "pages": "pp. 12-18",
      "summary": "Costanzo expõe os três cenários clássicos do teste de fragilidade osmótica eritrocitária: 1) Solução Isotônica (NaCl 0,9% ~300 mOsm/L): sem fluxo líquido de água, hemácia preserva seu formato bicôncavo; 2) Solução Hipotônica (água pura ou NaCl 0,45%): a água entra por osmose a favor de seu gradiente químico, a célula incha e sofre hemólise; 3) Solução Hipertônica (NaCl 3%): a água sai da célula para o meio de maior tonicidade, provocando retração e crenação celular.",
      "keyPoint": "Água destilada intravenosa causa hemólise aguda maciça com liberação de hemoglobina livre, oclusão tubular renal e morte."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 5: Biofísica das Aquaporinas e Transporte Transcelular de Água",
      "pages": "pp. 115-122",
      "summary": "Boron detalha a biologia molecular das aquaporinas (AQP1 nos eritrócitos e túbulo proximal renal; AQP2 regulada por ADH no ducto coletor), proteínas tetrâmeras que contêm canais de água com resíduos de asparagina que impedem a passagem de prótons (H+), preservando o gradiente eletroquímico.",
      "keyPoint": "Aquaporinas realizam transporte facilitado de água em massa com velocidade de até 3 bilhões de moléculas por segundo por canal."
    },
    "openstax": {
      "section": "Chapter 3: The Cellular Level of Organization — Section 3.1: Tonicity",
      "summary": "OpenStax apresenta micrografias de varredura demonstrando hemácias normais bicôncavas, crenadas em meio hipertônico e rompidas por hemólise em meio hipotônico.",
      "keyPoint": "Meio hipotônico = edema celular e lise; Meio hipertônico = desidratação celular e retração."
    },
    "merck": {
      "section": "Distúrbios Hidroeletrolíticos — Hiponatremia, Hipernatremia e Reposição com Cristaloides",
      "summary": "O Manual MSD discute os riscos da correção rápida da hiponatremia e hipernatremia. Destaca a Síndrome de Desmielinização Osmótica (mielinólise pontina central) se a hiponatremia for corrigida com NaCl hipertônico de modo precipitado.",
      "keyPoint": "A tonicidade do plasma é governada pelo sódio; oscilações osmóticas bruscas lesam irreversivelmente neurônios encefálicos."
    },
    "researchTopics": [
      {
        "title": "Osmolaridade vs. Tonicidade Celular",
        "concept": "Diferenciação crítica entre a concentração osmolar absoluta (todos os solutos) e a tonicidade efetiva exercida apenas por solutos não-penetrantes que forçam o deslocamento transmembrana de água.",
        "formulaOrLaw": "Tonicidade Efetiva = Σ (σ_i * C_i)",
        "keyReference": "Guyton & Hall, Cap. 25",
        "query": "osmolarity vs tonicity nonpenetrating solutes cell volume"
      },
      {
        "title": "Lei de Van t Hoff e Coeficiente de Reflexão (σ)",
        "concept": "Formulação matemática da pressão osmótica coligativa e o fator de correção de Staverman (σ), que varia de 0 (soluto permeável) a 1 (soluto estritamente impermeável).",
        "formulaOrLaw": "π_efetiva = σ * i * C * R * T",
        "keyReference": "Berne & Levy, Cap. 2",
        "query": "van t hoff osmotic pressure reflection coefficient staverman"
      },
      {
        "title": "Fragilidade Osmótica e Hemólise Eritrocitária",
        "concept": "Comportamento da membrana eritrocitária sob estresse osmótico decrescente, no qual o influxo maciço de água supera o limite elástico do citoesqueleto de espectrina, lisando a célula.",
        "formulaOrLaw": "Ponto Crítico de Hemólise (~150 mOsm/L)",
        "keyReference": "Costanzo, Cap. 1",
        "query": "erythrocyte osmotic fragility hypotonic hemolysis spectrin"
      },
      {
        "title": "Aquaporinas e Condutância Hídrica de Membrana",
        "concept": "Estrutura e seletividade dos canais proteicos de aquaporina que aceleram a velocidade de osmose em ordens de magnitude em comparação com a difusão simples pela bicamada lipídica.",
        "formulaOrLaw": "Fluxo Osmótico de Água: Jv = Lp * A * Δπ_efetiva",
        "keyReference": "Boron & Boulpaep, Cap. 5",
        "query": "aquaporin water permeability osmotic water flux membrane"
      }
    ]
  },
  {
    "topicName": "Transporte Ativo e Bomba Na+/K+",
    "phaseId": "w1_p4",
    "level": 4,
    "worldId": "w1",
    "category": "Fisiologia Celular & Meio Interno",
    "phaseTitle": "Transporte Ativo & Bomba Na+/K+",
    "aliases": [
      "Transporte Ativo",
      "Bomba de Sódio e Potássio",
      "Na+/K+ ATPase",
      "Transporte Ativo Secundário"
    ],
    "specialistTitle": "Boron & Boulpaep",
    "specialistBadge": "Bioenergética Celular",
    "guyton": {
      "chapter": "Unidade I — Capítulo 4: Transporte Ativo Primário e Secundário através das Membranas",
      "pages": "pp. 52-62",
      "summary": "Guyton & Hall classifica o transporte ativo em Primário e Secundário. O transporte ativo primário acopla diretamente a hidrólise enzimática do ATP à translocação de solutos contra gradientes eletroquímicos íngremes. O exemplo arquetípico é a Na+/K+-ATPase presente na membrana de praticamente todas as células de mamíferos: para cada molécula de ATP hidrolisada, bombeia ativamente 3 íons Na+ para o meio extracelular e 2 íons K+ para o meio intracelular. Como há saída líquida de 1 carga positiva por ciclo, a bomba é eletrogênica, contribuindo diretamente com -4 a -5 mV para o potencial de membrana em repouso e, primordialmente, criando os gradientes iônicos que energizam o potencial de ação e todo o transporte ativo secundário (cotransporte Na+/glicose via SGLT e contratransporte Na+/Ca2+ via NCX).",
      "keyPoint": "A Na+/K+-ATPase bombeia 3 Na+ para fora e 2 K+ para dentro por ATP hidrolisado, sustentando o meio intracelular rico em K+ e pobre em Na+."
    },
    "berne": {
      "chapter": "Capítulo 2: Bombas do Tipo P e Transporte Secundário Energizado",
      "pages": "pp. 40-52",
      "summary": "Berne & Levy detalha o ciclo enzimático de Post-Albers da Na+/K+-ATPase (uma ATPase do tipo P com intermediário fosforilado em aspartato): o estado conformacional E1 tem alta afinidade por Na+ intracelular; a fosforilação pelo ATP converte-a no estado E2 com alta afinidade por K+ extracelular. A ouabaína e a digoxina ligam-se especificamente à face extracelular do estado E2, inibindo a bomba e acumulando Na+ no citosol.",
      "keyPoint": "Digitálicos inibem a Na+/K+-ATPase, elevando o Na+ intracelular, o que reduz o efluxo de Ca2+ via NCX e aumenta a contratilidade miocárdica."
    },
    "costanzo": {
      "chapter": "Capítulo 1: Transporte Ativo Primário e Secundário",
      "pages": "pp. 14-22",
      "summary": "Costanzo diferencia claramente: Primário (gasto direto de ATP: Na+/K+-ATPase, Ca2+-ATPase do retículo sarcoplasmático SERCA, H+/K+-ATPase das células parietais gástricas); Secundário (não hidrolisa ATP diretamente; aproveita a energia potencial eletroquímica do Na+ estabelecida previamente pela Na+/K+-ATPase). Divide o secundário em Simporte/Cotransporte (Na+ e soluto na mesma direção: SGLT1 e SGLT2 para glicose; NKCC2 na alça de Henle) e Antiporte/Contratransporte (direções opostas: trocador Na+/H+ NHE1 e trocador Na+/Ca2+ NCX).",
      "keyPoint": "Se a Na+/K+-ATPase for bloqueada, os transportadores secundários (SGLT e NCX) cessam por perda do gradiente de sódio."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 5: Transportadores Ativos da Família SLC e P-ATPases",
      "pages": "pp. 125-144",
      "summary": "Boron descreve as famílias de carreadores SLC (Solute Carrier Family), mapeando a estequiometria do cotransporte Na+/Glicose (SGLT1 transporta 2 Na+ para 1 glicose, gerando acúmulo de glicose de até 30.000 vezes contra gradiente no epitélio intestinal; SGLT2 transporta 1 Na+ para 1 glicose no túbulo proximal renal).",
      "keyPoint": "Inibidores de SGLT2 (gliflozinas) bloqueiam a reabsorção tubular renal de glicose e são fármacos de primeira linha no diabetes e insuficiência cardíaca."
    },
    "openstax": {
      "section": "Chapter 3: The Cellular Level of Organization — Section 3.1: Active Transport",
      "summary": "OpenStax ilustra o ciclo funcional de fosforilação e desfosforilação da bomba de sódio-potássio e o funcionamento dos simportes e antiportes secundários nas microvilosidades do intestino delgado.",
      "keyPoint": "A bomba Na+/K+ consome cerca de 30% a 70% de todo o ATP de repouso do cérebro e dos rins."
    },
    "merck": {
      "section": "Farmacologia Cardiovascular — Inotrópicos Digitálicos e Homeostase do Cálcio",
      "summary": "O Manual MSD aborda o mecanismo farmacológico dos glicosídeos cardíacos (digoxina) na insuficiência cardíaca: inibição moderada da bomba Na+/K+ eleva o sódio citosólico, desacelera o trocador NCX (3 Na+ para 1 Ca2+), retém cálcio no miócito e aumenta a força contrátil sistólica (efeito inotrópico positivo).",
      "keyPoint": "Intoxicação digitálica bloqueia excessivamente a Na+/K+ ATPase, gerando arritmias ventriculares graves por sobrecarga de cálcio."
    },
    "researchTopics": [
      {
        "title": "Mecanismo Eletrogênico da Na+/K+ ATPase",
        "concept": "Estequiometria assimétrica de translocação iônica (3 Na+ exportados para cada 2 K+ importados) gerando corrente hiperpolarizante líquida e mantendo o gradiente osmótico contra tumefação celular.",
        "formulaOrLaw": "3 Na+_in + 2 K+_out + ATP -> 3 Na+_out + 2 K+_in + ADP + Pi",
        "keyReference": "Guyton & Hall, Cap. 4",
        "query": "sodium potassium pump electrogenic stoichiometry 3 na 2 k atp hydrolysis"
      },
      {
        "title": "Inibição por Digitálicos (Digoxina e Ouabaína)",
        "concept": "Acoplamento da inibição da Na+/K+-ATPase à redução na taxa de efluxo de cálcio via trocador Na+/Ca2+ (NCX), elevando a concentração diastólica de cálcio no retículo sarcoplasmático.",
        "formulaOrLaw": "Inibição da Bomba -> ↑ [Na+]i -> ↓ Atividade do NCX -> ↑ [Ca2+]i",
        "keyReference": "Costanzo, Cap. 1",
        "query": "ouabain digoxin na k atpase inhibition inotropic effect calcium exchanger"
      },
      {
        "title": "Transporte Ativo Secundário: Cotransporte SGLT",
        "concept": "Utilização da energia potencial eletroquímica do gradiente de sódio criado pela bomba para impulsionar a captação de D-glicose contra seu gradiente de concentração no epitélio intestinal e renal.",
        "formulaOrLaw": "ΔG_transporte = R*T*ln([Glicose]i/[Glicose]e) + n*Δμ_Na",
        "keyReference": "Berne & Levy, Cap. 2",
        "query": "secondary active transport sodium glucose cotransporter sglt stoichiometry"
      },
      {
        "title": "Trocador Na+/H+ (NHE1) e Regulação do pH Intracelular",
        "concept": "Antiporte secundário vital que expulsa prótons (H+) em troca da entrada passiva de Na+, impedindo a acidificação citosólica prejudicial ao metabolismo celular.",
        "formulaOrLaw": "Antiporte Eletricamente Neutro: 1 Na+ entra : 1 H+ sai",
        "keyReference": "Boron & Boulpaep, Cap. 28",
        "query": "sodium hydrogen antiporter nhe1 intracellular ph regulation"
      }
    ]
  },
  {
    "topicName": "Potenciais Bioelétricos e Canais Iônicos",
    "phaseId": "w1_p5",
    "level": 5,
    "worldId": "w1",
    "category": "Fisiologia Celular & Meio Interno",
    "phaseTitle": "Potenciais Bioelétricos & Canais Iônicos",
    "aliases": [
      "Potencial de Repouso",
      "Equação de Nernst",
      "Equação de Goldman",
      "Bioeletrogênese"
    ],
    "specialistTitle": "Berne & Levy",
    "specialistBadge": "Eletrofisiologia Avançada",
    "guyton": {
      "chapter": "Unidade II: Fisiologia de Membranas, Nervos e Músculos — Capítulo 5: Potenciais de Membrana e Potenciais de Ação",
      "pages": "pp. 63-75",
      "summary": "Guyton & Hall explica que existe uma diferença de potencial elétrico através da membrana plasmática de todas as células no repouso (potencial de membrana de repouso, Vm), sendo o interior negativo em relação ao exterior (aproximadamente -70 mV em neurônios e -90 mV em miócitos cardíacos e fibras musculoesqueléticas). Essa voltagem decorre de dois fatores principais: 1) Gradientes químicos assimétricos gerados pela Na+/K+ ATPase ([K+]i ≈ 140 mEq/L vs [K+]e ≈ 4 mEq/L; [Na+]i ≈ 14 mEq/L vs [Na+]e ≈ 142 mEq/L); 2) Permeabilidade relativa da membrana no repouso, na qual canais de vazamento de K+ (canais K2P) estão amplamente abertos, conferindo à membrana uma condutância ao potássio cerca de 50 a 100 vezes maior do que ao sódio. Como consequência, o Vm de repouso fica muito próximo do potencial de equilíbrio eletroquímico do potássio calculado por Nernst (-94 mV).",
      "keyPoint": "O potencial de repouso é negativo e próximo de -90 mV porque a membrana no repouso é amplamente permeável ao K+ e quase impermeável ao Na+."
    },
    "berne": {
      "chapter": "Capítulo 3: Gênese do Potencial de Membrana em Repouso e Biofísica Iônica",
      "pages": "pp. 54-70",
      "summary": "Berne & Levy expõe as duas equações fundamentais da eletrofisiologia: 1) Equação de Nernst para um único íon no equilíbrio: E_ion = (R*T / z*F) * ln([Ion]e / [Ion]i) ≈ (61,5 mV / z) * log10([Ion]e / [Ion]i) a 37°C. O potencial de equilíbrio é a voltagem de membrana exata que gera uma força elétrica contrária igual e oposta à força do gradiente químico de concentração. 2) Equação de Goldman-Hodgkin-Katz (GHK), que calcula o Vm quando múltiplos íons permeáveis estão presentes, ponderando o potencial de equilíbrio de cada íon pela sua permeabilidade relativa (P_K, P_Na, P_Cl): Vm = 61,5 * log10[(P_K*[K+]e + P_Na*[Na+]e + P_Cl*[Cl-]i) / (P_K*[K+]i + P_Na*[Na+]i + P_Cl*[Cl-]e)].",
      "keyPoint": "A Equação de Goldman-Hodgkin-Katz demonstra que o Vm é determinado pelo íon com a maior permeabilidade de membrana (no repouso, o K+)."
    },
    "costanzo": {
      "chapter": "Capítulo 1: Eletrofisiologia Celular — Potencial de Difusão e Equilíbrio",
      "pages": "pp. 22-30",
      "summary": "Costanzo reforça a importância clínica de alterações na concentração de íons no LEC. Na HIPERCALEMIA (elevação do K+ extracelular de 4 para 8 mEq/L), a razão [K+]e / [K+]i aumenta, tornando o potencial de Nernst do K+ menos negativo (despolariza o repouso para ~ -60 mV). Inicialmente isso aproxima a célula do limiar, mas a despolarização sustentada inativa cronicamente as comportas de inativação (h) dos canais de Na+ rápidos, impedindo a deflagração de potenciais de ação e causando paralisia flácida e arritmias ventriculares fatais.",
      "keyPoint": "Hipercalemia grave despolariza o repouso, inativa os canais de sódio voltagem-dependentes e paralisa a condução elétrica miocárdica."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 6: Eletrofisiologia das Membranas e Canais K2P",
      "pages": "pp. 145-168",
      "summary": "Boron disseca a estrutura molecular dos canais de potássio com dois domínios de poro (K2P: canais TASK, TREK e TRAAK), que são responsáveis pela condutância basal de repouso (\"corrente de fundo de potássio\"), regulados por pH, oxigenação tecidual e anestésicos voláteis.",
      "keyPoint": "Anestésicos gerais inalatórios abrem canais de vazamento TREK, hiperpolarizando os neurônios corticais e suprimindo a consciência."
    },
    "openstax": {
      "section": "Chapter 12: The Nervous System and Nervous Tissue — Section 12.4: The Action Potential",
      "summary": "OpenStax ilustra o arranjo dipolo da membrana celular com acúmulo de cargas negativas alinhadas na face interna e cargas positivas na face externa, operando como um capacitor elétrico biológico microscópico.",
      "keyPoint": "A membrana atua como capacitor: a separação microscópica de cargas na espessura de 7 nm da bicamada gera campos elétricos colossais."
    },
    "merck": {
      "section": "Distúrbios Hidroeletrolíticos — Hiperpotassemia e Hipopotassemia",
      "summary": "O Manual MSD fornece o protocolo de urgência para hipercalemia grave com alterações no ECG (ondas T pontiagudas e simétricas, alargamento do QRS): administração imediata de Gluconato de Cálcio intravenoso para antagonismo de membrana e estabilização elétrica miocárdica.",
      "keyPoint": "O cálcio IV não reduz o potássio sérico, mas normaliza o potencial limiar cardíaco, evitando fibrilação ventricular imediata."
    },
    "researchTopics": [
      {
        "title": "Equação de Nernst e Potencial de Equilíbrio do K+",
        "concept": "Equação biofísica fundamental que define o potencial elétrico transmembrana no qual a taxa de efluxo difusional de um íon pelo gradiente químico iguala exatamente a taxa de influxo pela atração eletrostática.",
        "formulaOrLaw": "E_K = (61,5 mV / z) * log10([K+]ext / [K+]int)",
        "keyReference": "Berne & Levy, Cap. 3",
        "query": "nernst equation equilibrium potential potassium electrochemistry"
      },
      {
        "title": "Equação de Goldman-Hodgkin-Katz (GHK)",
        "concept": "Equação de campo elétrico constante que quantifica o potencial de membrana real considerando as concentrações e as permeabilidades relativas dos íons sódio, potássio e cloreto.",
        "formulaOrLaw": "Vm = 61,5 * log10[(P_K*[K]e + P_Na*[Na]e + P_Cl*[Cl]i) / (P_K*[K]i + P_Na*[Na]i + P_Cl*[Cl]e)]",
        "keyReference": "Guyton & Hall, Cap. 5",
        "query": "goldman hodgkin katz equation resting membrane potential relative permeability"
      },
      {
        "title": "Canais de Vazamento de Potássio K2P e Condutância Basal",
        "concept": "Proteínas de membrana da família tandem pore K+ que permanecem constitutivamente ativadas em repouso, gerando a corrente iônica eferente de K+ que fixa o Vm próximo de -70 a -90 mV.",
        "formulaOrLaw": "I_K,leak = g_leak * (Vm - E_K)",
        "keyReference": "Boron & Boulpaep, Cap. 6",
        "query": "two-pore domain potassium channels k2p resting conductance"
      },
      {
        "title": "Efeito da Hipercalemia e Hipocalemia no Vm",
        "concept": "Alteração dos limiares de excitabilidade celular decorrente do desvio do potencial de Nernst do potássio plasmático, induzindo inativação de canais de sódio rápidos ou hiperexcitabilidade inicial transitória.",
        "formulaOrLaw": "Hipercalemia: [K+]e ↑ -> E_K despolariza -> Inativação dos canais Nav",
        "keyReference": "Costanzo, Cap. 1",
        "query": "hyperkalemia hypokalemia membrane potential cardiac arrhythmias nernst"
      }
    ]
  },
  {
    "topicName": "Potencial de Ação e Período Refratário",
    "phaseId": "w1_p6",
    "level": 6,
    "worldId": "w1",
    "category": "Fisiologia Celular & Meio Interno",
    "phaseTitle": "Potencial de Ação & Período Refratário",
    "aliases": [
      "Potencial de Ação",
      "Despolarização",
      "Repolarização",
      "Período Refratário",
      "Canal de Sódio Nav"
    ],
    "specialistTitle": "Berne & Levy",
    "specialistBadge": "Biofísica de Hodgkin-Huxley",
    "guyton": {
      "chapter": "Unidade II — Capítulo 5: Gênese do Potencial de Ação Nervoso e Condução Saltatória",
      "pages": "pp. 66-82",
      "summary": "Guyton & Hall descreve o potencial de ação como uma despolarização regenerativa transitória e estereotipada de \"tudo-ou-nada\". Quando um estímulo atinge o Potencial Limiar (aproximadamente -55 mV), canais de sódio voltagem-dependentes (Nav) abrem suas comportas de ativação (m), permitindo um influxo maciço e acelerado de Na+ que despolariza o interior até +30 mV (overshoot). Esse fenômeno configura um feedback positivo (Ciclo de Hodgkin). No pico do potencial, as comportas de inativação (h) dos canais Nav se fecham automaticamente (tempo-dependentes), e canais de potássio voltagem-dependentes (Kv) abrem suas comportas lentas, promovendo efluxo rápido de K+ que repolariza a membrana de volta ao repouso, muitas vezes gerando uma breve pós-hiperpolarização (undershoot).",
      "keyPoint": "Ciclo de Hodgkin: Despolarização abre canais Nav -> Influxo de Na+ despolariza mais a membrana -> Abre mais canais Nav (feedback positivo)."
    },
    "berne": {
      "chapter": "Capítulo 4: Canais de Sódio Voltagem-Dependentes e Modelo de Hodgkin-Huxley",
      "pages": "pp. 72-92",
      "summary": "Berne & Levy detalha as três conformações biofísicas do canal Nav: 1) Repouso (comporta de ativação fechada, inativação aberta; o canal pode ser ativado); 2) Ativado/Aberto (ambas as comportas abertas; corrente de sódio flui); 3) Inativado (comporta de inativação fechada pelo mecanismo ball-and-chain; o canal está bloqueado e NÃO responde a nenhum estímulo, não importando a intensidade). Este estado inativado constitui a base biofísica do Período Refratário Absoluto. À medida que a membrana se repolariza, as comportas de inativação se reabrem e os canais voltam à conformação de repouso, entrando no Período Refratário Relativo, no qual um potencial de ação pode ser deflagrado, mas exige estímulo supralimiar.",
      "keyPoint": "No período refratário absoluto, os canais de sódio Nav estão na conformação INATIVADA; nenhum estímulo consegue abrir o canal."
    },
    "costanzo": {
      "chapter": "Capítulo 1: Características do Potencial de Ação e Condução Nervosa",
      "pages": "pp. 30-40",
      "summary": "Costanzo resume os papéis do Período Refratário: 1) Limita a frequência máxima de disparos de potenciais de ação; 2) Impede a retropropagação do impulso nervoso, assegurando condução estritamente unidirecional ortodrômica desde o cone de implantação axônico até as terminações sinápticas. Explica a Condução Saltatória: a bainha de mielina (células de Schwann no SNP; oligodendrócitos no SNC) atua como isolante elétrico que reduz a capacitância de membrana e aumenta a resistência transversal, forçando o potencial a saltar de nódulo em nódulo de Ranvier.",
      "keyPoint": "A condução saltatória nos Nódulos de Ranvier acelera a velocidade de propagação de 1 m/s para até 120 m/s em fibras mielinizadas A-alfa."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 7: Eletrofisiologia Quantitativa e Condução Saltatória",
      "pages": "pp. 170-196",
      "summary": "Boron formaliza a constante de espaço (lambda = sqrt(rm / ri)) e a constante de tempo (tau = rm * cm). A mielina aumenta a resistência da membrana (rm) e reduz drasticamente a capacitância (cm), elevando a constante de espaço e permitindo que o circuito local de corrente despolarize o próximo nódulo de Ranvier com perda atenuada.",
      "keyPoint": "Doenças desmielinizantes como a Esclerose Múltipla aumentam a capacitância e dispersam a corrente, causando bloqueio da condução nervosa."
    },
    "openstax": {
      "section": "Chapter 12: The Nervous System — Section 12.4: Propagation of the Action Potential",
      "summary": "OpenStax ilustra o gráfico clássico em milissegundos mostrando o repouso (-70 mV), o limiar (-55 mV), o pico despolarizante (+30 mV), a repolarização e o undershoot (-80 mV).",
      "keyPoint": "Bloqueadores dos canais de sódio Nav, como a lidocaína e a tetrodotoxina (TTX), impedem a despolarização e abolem o potencial de ação."
    },
    "merck": {
      "section": "Anestesiologia e Farmacologia — Anestésicos Locais e Bloqueio de Canais Nav",
      "summary": "O Manual MSD detalha o mecanismo de ação da lidocaína e bupivacaína: penetram na forma neutra pela membrana lipídica, ionizam-se no citosol e bloqueiam o poro interno do canal de sódio Nav, impedindo a dor por abolição do potencial de ação nas fibras nociceptivas C e A-delta.",
      "keyPoint": "Anestésicos locais bloqueiam os canais de sódio dependentes de voltagem na face intracelular do poro."
    },
    "researchTopics": [
      {
        "title": "Ciclo de Hodgkin e Despolarização Regenerativa",
        "concept": "Alça de feedback positivo eletrofisiológico na qual a abertura inicial de canais de sódio voltagem-dependentes acelera a despolarização de membrana, abrindo cooperativamente todos os canais Nav vizinhos.",
        "formulaOrLaw": "Feedback Positivo: Despolarização -> ↑ g_Na -> ↑ Influxo Na+ -> Mais Despolarização",
        "keyReference": "Guyton & Hall, Cap. 5",
        "query": "hodgkin cycle regenerative depolarization voltage-gated sodium channel"
      },
      {
        "title": "Bases Moleculares do Período Refratário Absoluto e Relativo",
        "concept": "Transição das comportas do canal Nav entre os estados aberto, inativado e repouso, impondo janela temporal na qual a geração de novo disparo é fisiologicamente impossível.",
        "formulaOrLaw": "Refratariedade Absoluta: 100% dos canais Nav no estado inativado (h fechado)",
        "keyReference": "Berne & Levy, Cap. 4",
        "query": "absolute refractory period relative refractory period sodium channel inactivation gates"
      },
      {
        "title": "Condução Saltatória nos Nódulos de Ranvier",
        "concept": "Mecanismo no qual a mielina atua como isolante elétrico de alta resistência e baixa capacitância, confinando a geração regenerativa do potencial de ação estritamente aos nós amielínicos de Ranvier.",
        "formulaOrLaw": "Velocidade de Condução ∝ Diâmetro da Fibra Mielinizada (v ≈ 6 * diâmetro em μm)",
        "keyReference": "Costanzo, Cap. 1",
        "query": "saltatory conduction myelin sheath nodes of ranvier action potential velocity"
      },
      {
        "title": "Bloqueio Farmacológico por Anestésicos Locais (Lidocaína)",
        "concept": "Ligação estéreo-específica de anestésicos amino-amidas e amino-ésteres no interior do vestíbulo aquoso do canal de Na+, bloqueando a condutância iônica e a percepção dolorosa periférica.",
        "formulaOrLaw": "Bloqueio Uso-Dependente de Canais Nav",
        "keyReference": "Boron & Boulpaep, Cap. 7",
        "query": "local anesthetics lidocaine tetrodotoxin voltage-gated sodium channel block"
      }
    ]
  },
  {
    "topicName": "Composição do Sangue e Pressão Oncótica",
    "phaseId": "w2_p1",
    "level": 7,
    "worldId": "w2",
    "category": "Hematologia & Hemostasia",
    "phaseTitle": "Frações do Sangue & Pressão Oncótica",
    "aliases": [
      "Composição do Sangue",
      "Plasma e Pressão Oncótica",
      "Albumina e Forças de Starling"
    ],
    "specialistTitle": "Costanzo & Boron",
    "specialistBadge": "Hemodinâmica Capilar",
    "guyton": {
      "chapter": "Unidade VI: Células Sanguíneas, Imunidade e Coagulação Sanguínea — Capítulo 16 e 33: Microcirculação, Sistema Linfático e Proteínas Plasmáticas",
      "pages": "pp. 187-200, 439-445",
      "summary": "Guyton & Hall detalha que o sangue total representa aproximadamente 7% a 8% do peso corporal (~5 litros em um adulto de 70 kg), sendo constituído por 55% de plasma líquido e 45% de elementos figurados (hematócrito). O plasma é uma solução aquosa (91-92% água, 7% proteínas e 1-2% íons, nutrientes e metabólitos). Dentre as proteínas plasmáticas totais (6,5 a 8,0 g/dL), a ALBUMINA é a mais abundante (~4,5 g/dL, sintetizada exclusivamente no fígado com meia-vida de 20 dias). Em virtude de sua alta concentração e massa molecular relativamente baixa (~66 kDa), a albumina é responsável por aproximadamente 75% a 80% de toda a Pressão Coloidosmótica (Pressão Oncótica, π_capilar ≈ 28 mmHg). Essa força osmótica atua continuamente puxando líquido do espaço intersticial de volta para o interior do lúmen capilar, equilibrando a pressão hidrostática capilar (Pc).",
      "keyPoint": "A albumina sérica é a principal guardiã do volume intravascular; hipoalbuminemia grave (< 2,5 g/dL) reduz a pressão oncótica e precipita edema generalizado (anasarca)."
    },
    "berne": {
      "chapter": "Capítulo 17: Microcirculação, Troca Capilar de Fluidos e Equilíbrio de Starling",
      "pages": "pp. 312-328",
      "summary": "Berne & Levy quantifica a filtração transcapilar através da Equação de Starling: Jv = Lp * A * [(Pc - Pi) - σ * (πc - πi)]. Em condições normais, no extremo arteriolar há filtração líquida discreta (+10 mmHg), e no extremo venular há reabsorção quase total (-9 mmHg). O excesso diário de ultrafiltrado intersticial não reabsorvido pelos capilares venosos (cerca de 2 a 4 litros por dia) é drenado ativamente pelo sistema linfático de volta para a circulação venosa sistêmica através do ducto torácico.",
      "keyPoint": "Obstrução dos vasos linfáticos ou queda de πc desequilibra a equação de Starling e produz edema tecidual intersticial progressivo."
    },
    "costanzo": {
      "chapter": "Capítulo 4: Fisiologia Cardiovascular — Forças de Starling nos Capilares",
      "pages": "pp. 158-166",
      "summary": "Costanzo lista sistematicamente as quatro causas clínicas fundamentais de EDEMA com base na equação de Starling: 1) Aumento da pressão hidrostática capilar (Pc ↑: insuficiência cardíaca congestiva, trombose venosa profunda); 2) Redução da pressão coloidosmótica capilar (πc ↓: cirrose hepática com falência da síntese de albumina, síndrome nefrótica com proteinúria maciça e desnutrição kwashiorkor); 3) Aumento da permeabilidade capilar (Lp ↑: sepse, histamina em anafilaxia, queimaduras graves); 4) Obstrução linfática (filariose elefantiásica ou ressecção cirúrgica de linfonodos axilares).",
      "keyPoint": "Cirrose e síndrome nefrótica causam anasarca porque a hipoalbuminemia derruba a pressão oncótica capilar πc."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 20: Fisiologia da Microcirculação e Linfáticos",
      "pages": "pp. 452-475",
      "summary": "Boron analisa a glicocálice endotelial, uma malha protetora de proteoglicanos e glicosaminoglicanos com carga negativa que reveste o lúmen capilar. Demonstra que a verdadeira pressão oncótica efetiva ocorre através da camada da glicocálice (modelo de Starling revisado), sendo a destruição da glicocálice na sepse o gatilho inicial do extravasamento capilar difuso.",
      "keyPoint": "A perda da integridade da glicocálice endotelial em estados inflamatórios graves amplifica o extravasamento plasmático intersticial."
    },
    "openstax": {
      "section": "Chapter 18: An Introduction to the Cardiovascular System — Section 18.1: An Overview of Blood",
      "summary": "OpenStax ilustra o sangue centrifugado com suas três frações separadas em tubo de ensaio: camada superior de plasma acelular límpido (55%), camada leucocitária intermediária fina (\"buffy coat\", <1%) e coluna inferior de eritrócitos compactados (45%).",
      "keyPoint": "O buffy coat contém leucócitos e plaquetas; a fração celular predominante é a massa de eritrócitos."
    },
    "merck": {
      "section": "Hepatologia e Nefrologia — Hipoalbuminemia, Síndrome Nefrótica e Cirrose",
      "summary": "O Manual MSD discute o tratamento do edema por hipoalbuminemia: administração criteriosa de albumina humana associada a diuréticos de alça (furosemida) para restabelecer a volemia central efetiva e mobilizar líquido intersticial sem sobrecarregar o ventrículo.",
      "keyPoint": "A dosagem sérica de albumina normal situa-se entre 3,5 e 5,0 g/dL; valores inferiores a 2,0 g/dL exigem intervenção clínica imediata."
    },
    "researchTopics": [
      {
        "title": "Albumina e Pressão Coloidosmótica (Oncótica)",
        "concept": "Papel biofísico da fração proteica mais abundante do plasma na geração de força osmótica intravascular capaz de reter o solvente e impedir a fuga hídrica para os tecidos intersticiais.",
        "formulaOrLaw": "π_capilar ≈ 28 mmHg (75-80% sustentada pela albumina)",
        "keyReference": "Guyton & Hall, Cap. 16",
        "query": "serum albumin colloid osmotic oncotic pressure starling forces"
      },
      {
        "title": "Equação de Starling da Microcirculação Capilar",
        "concept": "Balanço dinâmico entre o gradiente de pressões hidrostáticas transcapilares e o gradiente de pressões oncóticas ponderadas pelo coeficiente de reflexão endotelial das proteínas.",
        "formulaOrLaw": "Jv = Lp * A * [(Pc - Pi) - σ * (πc - πi)]",
        "keyReference": "Berne & Levy, Cap. 17",
        "query": "starling equation microcirculation transcapillary fluid exchange edema"
      },
      {
        "title": "Mecanismos Fisiopatológicos do Edema (Starling)",
        "concept": "Classificação etiológica do acúmulo patológico de líquido no interstício por hipertensão venocapilar, hipoalbuminemia, aumento da permeabilidade vascular ou linfedema.",
        "formulaOrLaw": "Edema = Filtração Capilar > Capacidade Máxima de Drenagem Linfática",
        "keyReference": "Costanzo, Cap. 4",
        "query": "pathophysiology of edema starling forces hypoalbuminemia congestive heart failure"
      },
      {
        "title": "Função do Sistema Linfático e Retorno Macromolecular",
        "concept": "Transporte unidirecional de fluido intersticial, proteínas plasmáticas extravasadas e quilomícrons lipídicos através de capilares linfáticos fenestrados até a circulação venosa central.",
        "formulaOrLaw": "Fluxo Linfático Diário: 2 a 4 Litros / dia",
        "keyReference": "Guyton & Hall, Cap. 16",
        "query": "lymphatic system fluid absorption interstitial protein clearance thoracic duct"
      }
    ]
  },
  {
    "topicName": "Eritrócitos, Hematócrito e Metabolismo do Ferro",
    "phaseId": "w2_p2",
    "level": 8,
    "worldId": "w2",
    "category": "Hematologia & Hemostasia",
    "phaseTitle": "Eritrócitos, Hematócrito & Ferro",
    "aliases": [
      "Eritrócitos e Ferro",
      "Hematopoiese",
      "Eritropoietina",
      "Hematócrito"
    ],
    "specialistTitle": "Silverthorn & Ganong",
    "specialistBadge": "Eritropoiese & Cinética Férrica",
    "guyton": {
      "chapter": "Unidade VI — Capítulo 33: Hemácias, Anemia e Policitemia",
      "pages": "pp. 439-450",
      "summary": "Os eritrócitos (hemácias) são células altamente especializadas em forma de disco bicôncavo anucleadas em mamíferos (diâmetro de 7,8 μm, espessura de 2,5 μm na borda e 1 μm no centro), conformação geométrica que maximiza a razão superfície/volume, acelerando a difusão gasosa e permitindo extraordinária deformabilidade mecânica ao cruzar capilares de 5 μm. A contagem normal oscila entre 4,5 e 5,5 milhões/μL em homens e 4,0 a 5,0 milhões/μL em mulheres; a concentração de hemoglobina é de 14 a 16 g/dL (homens) e 12 a 14 g/dL (mulheres); o hematócrito é a porcentagem do volume sanguíneo ocupada pelas hemácias (~42% a 47%). A meia-vida do eritrócito é de 120 dias, ao fim dos quais hemácias senescentes tornam-se rígidas e são fagocitadas por macrófagos nos cordões esplênicos do baço.",
      "keyPoint": "A eritropoiese é estimulada pela Eritropoietina (EPO) secretada pelos rins em resposta à hipóxia tecidual renal mediada por HIF-1α."
    },
    "berne": {
      "chapter": "Capítulo 16: Elementos Figurados do Sangue, Eritropoiese e Cinética do Ferro",
      "pages": "pp. 288-305",
      "summary": "Berne & Levy detalha a regulação da eritropoiese pelo fator de transcrição induzido por hipóxia (HIF-1α). Em normóxia, HIF-1α é hidroxilado pela prolil-hidroxilase e degradado no proteassomo; sob hipóxia tecidual, a hidroxilação cessa, HIF-1α estabiliza-se e ativa no núcleo celular renal a transcrição do gene da Eritropoietina (EPO). A EPO atua nos receptores de progenitores eritroides na medula óssea (CFU-E), inibindo sua apoptose e estimulando a diferenciação em pró-eritroblastos, reticulócitos e eritrócitos maduros.",
      "keyPoint": "A hipóxia renal estabiliza o HIF-1α, que dispara a transcrição do gene da EPO; pacientes em doença renal crônica perdem essa capacidade e desenvolvem anemia normocítica refratária."
    },
    "costanzo": {
      "chapter": "Capítulo 5: Fisiologia Respiratória e Transporte de Oxigênio — Cinética do Ferro",
      "pages": "pp. 195-200",
      "summary": "Costanzo traça o ciclo do ferro corporal total (~4 gramas): 65% na hemoglobina, 4% na mioglobina, 1% em enzimas mitocondriais e 30% armazenado no fígado e macrófagos na forma de FERRITINA e hemossiderina. O ferro dietético (Fe2+ ferroso) é absorvido no duodeno via transportador DMT1 e exportado para a circulação pela FERROPORTINA. No sangue, o ferro é oxidado a Fe3+ e transportado ligado à TRANSFERRINA. A HEPCIDINA, hormônio peptídico hepático, é a reguladora mestre do ferro: quando os estoques estão cheios ou na inflamação crônica, a hepcidina liga-se à ferroportina, induzindo sua internalização e degradação, bloqueando a liberação de ferro e causando a Anemia de Doença Crônica.",
      "keyPoint": "A hepcidina bloqueia a ferroportina: na inflamação crônica, a hepcidina elevada aprisiona o ferro dentro dos macrófagos, gerando anemia."
    },
    "specialistSource": {
      "chapter": "Ganong — Fisiologia Médica — Capítulo 31: Células Sanguíneas e Hematopoiese",
      "pages": "pp. 590-608",
      "summary": "Ganong detalha o metabolismo anaeróbico dos eritrócitos maduros: como carecem de mitocôndrias e núcleo celular, geram 100% de seu ATP através da glicólise anaeróbica (via de Embden-Meyerhof) e utilizam o ciclo das pentoses-fosfato (via G6PD) para sintetizar NADPH e manter a glutationa reduzida, protegendo a membrana e o ferro heme contra estresse oxidativo.",
      "keyPoint": "Deficiência de G6PD priva a hemácia de NADPH e glutationa reduzida, gerando hemólise oxidativa induzida por certos fármacos ou feijão-fava (favismo)."
    },
    "openstax": {
      "section": "Chapter 18: Blood — Section 18.3: Erythrocytes",
      "summary": "OpenStax descreve as etapas de diferenciação na medula óssea: hemocitoblasto -> pró-eritroblasto -> eritroblasto basofílico -> eritroblasto policromatófilo -> eritroblasto ortocromático (expulsão do núcleo celular) -> reticulócito (com restos de retículo e RNA ribossômico) -> eritrócito maduro.",
      "keyPoint": "A contagem de reticulócitos no sangue periférico (normal: 0,5% a 2,0%) avalia diretamente a capacidade proliferativa da medula óssea."
    },
    "merck": {
      "section": "Hematologia Clínica — Anemias Carenciais e Diagnóstico Diferencial pelo VCM e RDW",
      "summary": "O Manual MSD classifica as anemias com base nos índices hematimétricos automatizados de Wintrobe: Volume Corpuscular Médio (VCM 80-100 fL: microcítica, normocítica, macrocítica) e Concentração de Hemoglobina Corpuscular Média (CHCM 32-36 g/dL: hipocrômica, normocrômica). Destaca a anemia ferropriva clássica como microcítica e hipocrômica com ferritina sérica depletada.",
      "keyPoint": "Anemia ferropriva clássica = VCM baixo (microcitose), CHCM baixo (hipocromia), ferritina deprimida e RDW elevado."
    },
    "researchTopics": [
      {
        "title": "Ciclo de Vida do Eritrócito e Fagocitose Esplênica",
        "concept": "Cinética de 120 dias da hemácia humana, perda progressiva da flexibilidade de membrana, reconhecimento de fosfatidilserina na superfície externa e destruição nos sinusóides do baço.",
        "formulaOrLaw": "Taxa de Renovação: ~2 a 3 milhões de novas hemácias por segundo",
        "keyReference": "Guyton & Hall, Cap. 33",
        "query": "erythrocyte life span splenic clearance red pulp macrophage phagocytosis"
      },
      {
        "title": "Eritropoietina (EPO) e Eixo Renal HIF-1α",
        "concept": "Regulação transcricional da síntese renal de eritropoietina mediada pelo sensor molecular de hipóxia HIF-1α em fibroblastos peritubulares corticais dos rins.",
        "formulaOrLaw": "Hipóxia Renal -> Inibição da Prolil-Hidroxilase -> Estabilização de HIF-1α -> Síntese de EPO",
        "keyReference": "Berne & Levy, Cap. 16",
        "query": "erythropoietin hypoxia inducible factor hif1a renal oxygen sensing"
      },
      {
        "title": "Regulação do Ferro pela Hepcidina e Ferroportina",
        "concept": "Eixo hormonal hepcidina-ferroportina como regulador mestre do estoque corporal de ferro, controlando a absorção duodenal e a reciclagem macrofágica do ferro da hemoglobina.",
        "formulaOrLaw": "Hepcidina Elevada -> Degradação da Ferroportina -> Aprisionamento Celular de Fe",
        "keyReference": "Costanzo, Cap. 5",
        "query": "hepcidin ferroportin iron homeostasis anemia of chronic disease dmt1"
      },
      {
        "title": "Metabolismo Anaeróbico Eritrocitário e Via da G6PD",
        "concept": "Produção exclusiva de ATP pela via glicolítica de Embden-Meyerhof e geração de poder redutor NADPH pela glicose-6-fosfato desidrogenase para neutralizar peróxidos.",
        "formulaOrLaw": "Glicólise Anaeróbia (Lactato + 2 ATP) + Via das Pentoses (NADPH / GSH)",
        "keyReference": "Ganong, Cap. 31",
        "query": "glucose 6 phosphate dehydrogenase erythrocyte metabolism pentose phosphate pathway hemolysis"
      }
    ]
  },
  {
    "topicName": "Hemoglobina e Transporte de O2",
    "phaseId": "w2_p3",
    "level": 9,
    "worldId": "w2",
    "category": "Hematologia & Hemostasia",
    "phaseTitle": "Hemoglobina, O2 & Efeito Bohr",
    "aliases": [
      "Hemoglobina e O2",
      "Curva de Dissociação da Hemoglobina",
      "Efeito Bohr",
      "2,3-DPG",
      "Transporte de Oxigênio"
    ],
    "specialistTitle": "West & Costanzo",
    "specialistBadge": "Gases Sanguíneos & Alosterismo",
    "guyton": {
      "chapter": "Unidade VII: Respiração — Capítulo 41: Transporte de Oxigênio e Dióxido de Carbono no Sangue e nos Líquidos Teciduais",
      "pages": "pp. 527-540",
      "summary": "A hemoglobina adulta (HbA) é uma proteína globular tetramérica composta por quatro cadeias polipeptídicas (duas alfa e duas beta), cada uma contendo um grupo prostético HEME com um átomo central de ferro no estado ferroso reduzido (Fe2+). Cada grama de hemoglobina pura liga-se estequiometricamente a 1,34 mL de O2. A ligação do oxigênio exibe cooperatividade positiva (alosterismo): a ligação da primeira molécula de O2 ao estado T (\"tenso\", baixa afinidade) induz rotação dos dímeros alfa-beta, convertendo o tetrâmero no estado R (\"relaxado\", alta afinidade), gerando a clássica Curva de Dissociação Oxi-hemoglobina em formato sigmoide (curva em \"S\"). A P50 normal (PO2 na qual 50% da hemoglobina está saturada) é de aproximadamente 26,6 mmHg.",
      "keyPoint": "A cooperatividade positiva gera a curva sigmoide: facilita saturação máxima nos pulmões (PO2=100 mmHg, Sat=98%) e liberação abundante de O2 nos tecidos (PO2=40 mmHg, Sat=75%)."
    },
    "berne": {
      "chapter": "Capítulo 23: Transporte Sanguíneo de Oxigênio e Alosterismo da Hemoglobina",
      "pages": "pp. 410-424",
      "summary": "Berne & Levy detalha a transição alostérica T-para-R do modelo MWC (Monod-Wyman-Changeux) e a modulação pelo 2,3-Bisfosfoglicerato (2,3-DPG), sintetizado pelo shunt de Rapoport-Luebering na hemácia. O 2,3-DPG liga-se com alta afinidade na cavidade central formada pelas cadeias beta do estado T desoxigenado, estabilizando a conformação de baixa afinidade e favorecendo a entrega tecidual de oxigênio.",
      "keyPoint": "A hemoglobina fetal (HbF, cadeias alfa2-gama2) não possui os resíduos de histidina positivos para ligar 2,3-DPG, retendo maior afinidade por O2 que a HbA materna e permitindo a captação placentária de O2."
    },
    "costanzo": {
      "chapter": "Capítulo 5: Curva de Oxi-Hemoglobina e Moduladores Alostéricos (Desvios da Curva)",
      "pages": "pp. 200-208",
      "summary": "Costanzo sintetiza com maestria as causas e significados dos desvios da curva de oxi-hemoglobina: 1) DESVIO PARA A DIREITA (P50 aumenta, afinidade diminui, maior facilidade para entregar O2 aos tecidos ativos): acidose (pH baixo), hipercapnia (PCO2 elevado) — o clássico EFEITO BOHR tecidual —, aumento da temperatura corporal e aumento de 2,3-DPG (exercício físico, altitude e anemia crônica); 2) DESVIO PARA A ESQUERDA (P50 diminui, afinidade aumenta, segura mais o O2): alcalose (pH alto), hipocapnia (PCO2 baixo), hipotermia, queda de 2,3-DPG e ligação por Monóxido de Carbono (CO).",
      "keyPoint": "Músculo em exercício produz calor, H+ e CO2: isso desvia a curva de oxi-hemoglobina para a DIREITA (Efeito Bohr), descarregando mais O2 onde mais se precisa."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 6: Transporte de Gases pelo Sangue",
      "pages": "pp. 77-94",
      "summary": "John B. West explica o Conteúdo Arterial de Oxigênio (CaO2): CaO2 = (1,34 * [Hb] * SatO2) + (0,003 * PaO2). Demonstra que a fração dissolvida no plasma é ínfima (~0,3 mL O2/dL de sangue para PaO2=100 mmHg), sendo a hemoglobina responsável por 98,5% de todo o O2 transportado. Aborda a intoxicação por monóxido de carbono (CO): liga-se ao heme com afinidade 240 vezes superior à do O2, formando carboxiemoglobina (COHb), e além de bloquear sítios de ligação, trava o tetrâmero remanescente no estado R (desvia para a esquerda), impedindo a liberação de O2 nos tecidos.",
      "keyPoint": "Na intoxicação por CO, a PaO2 arterial é normal, mas o CaO2 despenca e os tecidos sofrem anóxia grave porque o O2 restante não se desliga da hemoglobina."
    },
    "openstax": {
      "section": "Chapter 22: The Respiratory System — Section 22.5: Transport of Gases",
      "summary": "OpenStax compara a mioglobina muscular (curva hiperbólica não cooperativa, reservatório de emergência) com a hemoglobina circulante (curva sigmoide cooperativa com liberação ajustável).",
      "keyPoint": "A mioglobina só libera oxigênio sob PO2 extremamente baixa (< 10 mmHg), funcionando como reserva intracelular em anaerobiose estrita."
    },
    "merck": {
      "section": "Toxicologia Médica — Intoxicação por Monóxido de Carbono e Meta-hemoglobinemia",
      "summary": "O Manual MSD aborda o diagnóstico da carboxiemoglobinemia (pele com coloração vermelho-cereja atípica, oxímetro de pulso comum falsamente normal marcando 100%) e seu tratamento com oxigenoterapia a 100% sob máscara com reservatório ou câmara hiperbárica (reduz a meia-vida da COHb de 320 para 80 ou 20 minutos).",
      "keyPoint": "O oxímetro de pulso convencional não distingue oxi-hemoglobina de carboxiemoglobina; gasometria com co-oximetria é obrigatória."
    },
    "researchTopics": [
      {
        "title": "Cooperatividade Alostérica e Curva Sigmoide de Oxi-Hb",
        "concept": "Transição conformacional quaternária do estado tenso (T) desoxigenado para o estado relaxado (R) oxigenado conforme moléculas consecutivas de O2 se ligam ao complexo heme-ferro.",
        "formulaOrLaw": "Equação de Hill: Y = (PO2)^n / ((P50)^n + (PO2)^n), onde n ≈ 2,8",
        "keyReference": "Guyton & Hall, Cap. 41",
        "query": "hemoglobin oxygen affinity allosteric cooperativity hill equation t to r transition"
      },
      {
        "title": "Efeito Bohr Tecidual e Pulmonar",
        "concept": "Fenômeno biofísico no qual íons de hidrogênio (H+) e CO2 ligam-se a sítios alostéricos na desoxi-hemoglobina, estabilizando pontes salinas do estado T e facilitando a ejeção de oxigênio nos tecidos em hipóxia e acidose.",
        "formulaOrLaw": "HbO2 + H+ + CO2 <-> Hb-H-CO2 + O2 (Desvio para a Direita nos Tecidos)",
        "keyReference": "Costanzo, Cap. 5",
        "query": "bohr effect oxygen hemoglobin dissociation curve proton binding carbon dioxide"
      },
      {
        "title": "Papel do 2,3-Bisfosfoglicerato (2,3-DPG) e Altitude",
        "concept": "Produção eritrocitária de 2,3-DPG em resposta à hipóxia crônica ou alcalose respiratória de grande altitude, diminuindo a afinidade da Hb pelo O2 e promovendo descarga tecidual eficiente.",
        "formulaOrLaw": "Via de Rapoport-Luebering da Glicólise Eritrocitária",
        "keyReference": "Berne & Levy, Cap. 23",
        "query": "2 3 biphosphoglycerate 2 3 dpg altitude acclimatization hemoglobin affinity"
      },
      {
        "title": "Toxicodinâmica da Carboxiemoglobina (COHb)",
        "concept": "Cinética de ligação competitiva do monóxido de carbono ao Fe2+ com afinidade 240 vezes superior à do oxigênio e bloqueio alostérico da liberação de O2 tecidual (efeito Haldane invertido).",
        "formulaOrLaw": "Desvio Severo para a Esquerda da Curva Remanescente + Queda do CaO2",
        "keyReference": "West, Fisiologia Respiratória, Cap. 6",
        "query": "carbon monoxide poisoning carboxyhemoglobin co-oximetry oxygen content"
      }
    ]
  },
  {
    "topicName": "Hemostasia Primária e Plaquetas",
    "phaseId": "w2_p4",
    "level": 10,
    "worldId": "w2",
    "category": "Hematologia & Hemostasia",
    "phaseTitle": "Hemostasia Primária & Plaquetas",
    "aliases": [
      "Hemostasia Primária",
      "Plaquetas e Tampão",
      "Fator de von Willebrand",
      "Adesão Plaquetária"
    ],
    "specialistTitle": "Silverthorn & Boron",
    "specialistBadge": "Bioquímica Plaquetária",
    "guyton": {
      "chapter": "Unidade VI — Capítulo 37: Hemostasia e Coagulação Sanguínea — Tampão Plaquetário",
      "pages": "pp. 481-488",
      "summary": "A hemostasia é a sequência de mecanismos fisiológicos que interrompem o sangramento após uma lesão vascular, compreendendo três etapas: 1) Espasmo Vascular (vasoconstrição reflexa imediata por contração miogênica e liberação local de endotelina e serotonina); 2) Hemostasia Primária (formação do tampão hemostático plaquetário temporário); 3) Hemostasia Secundária (ativação da cascata de coagulação gerando rede de fibrina para consolidar o tampão). As plaquetas (trombócitos) são fragmentos citoplasmáticos anucleados originados dos megacariócitos medulares (150.000 a 450.000/μL, vida média de 7 a 10 dias). Quando o endotélio vascular se rompe, o colágeno subendotelial e o Fator de von Willebrand (vWF) são expostos. As plaquetas aderem através do complexo receptor GpIb-IX-V ao vWF e ativam-se, sofrendo desgranulação e emitindo pseudópodes.",
      "keyPoint": "Hemostasia primária consiste em 4 eventos sequenciais: Adesão (GpIb-vWF) -> Mudança conformacional -> Desgranulação (ADP, TXA2) -> Agregação (GpIIb/IIIa-Fibrinogênio)."
    },
    "berne": {
      "chapter": "Capítulo 16: Plaquetas e Mecanismos Bioquímicos da Hemostasia Primária",
      "pages": "pp. 302-316",
      "summary": "Berne & Levy detalha os mediadores químicos secretados pelos grânulos plaquetários: Grânulos Densos (delta): contêm ADP, serotonina, cálcio ionizado (Ca2+) e pirofosfato; Grânulos Alfa: contêm fibrinogênio, fator de von Willebrand, fator V, fator plaquetário 4 (PF4) e PDGF. O ADP liberado liga-se aos receptores purinérgicos P2Y1 e P2Y12, ativando a via de sinalização intracelular da fosfolipase C e inibindo a adenilil-ciclase. Simultaneamente, a fosfolipase A2 ativa cliva o ácido araquidônico da membrana, que é convertido pela Enzima Ciclooxigenase-1 (COX-1) em Tromboxano A2 (TXA2), potente agonista pró-agregante e vasoconritor.",
      "keyPoint": "O Ácido Acetilsalicílico (Aspirina) acetila e inibe irreversivelmente a COX-1 plaquetária, bloqueando a síntese de TXA2 pela vida útil da plaqueta."
    },
    "costanzo": {
      "chapter": "Capítulo 4: Fisiologia do Sangue e Formação do Trombo Plaquetário",
      "pages": "pp. 166-172",
      "summary": "Costanzo detalha a etapa final da AGREGAÇÃO: a estimulação por ADP e TXA2 promove mudança conformacional no receptor de superfície de integrina GpIIb/IIIa (complexo alfaIIb-beta3), convertendo-o em seu estado de alta afinidade por Fibrinogênio. O fibrinogênio, uma molécula bivalente simétrica, atua como uma ponte molecular cruzada entre receptores GpIIb/IIIa de plaquetas adjacentes, agregando centenas de plaquetas em um tampão hemostático coeso. Explica a ação protetora do endotélio intacto: sintetiza constitutivamente Prostaciclina (PGI2) e Óxido Nítrico (NO), potentes vasodilatadores e inibidores da agregação, restringindo o tampão estritamente ao local da lesão vascular.",
      "keyPoint": "O receptor GpIIb/IIIa une plaquetas vizinhas através de pontes de fibrinogênio. O endotélio saudável secreta PGI2 e NO para impedir trombose."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 19: Hemostasia, Fisiologia do Endotélio e Trombose",
      "pages": "pp. 430-448",
      "summary": "Boron detalha a biologia molecular do Fator de von Willebrand (vWF): sintetizado por células endoteliais (armazenado nos corpos de Weibel-Palade) e megacariócitos como multímeros ultra-grandes de alto peso molecular que são clivados fisiologicamente pela metaloproteinase plasmática ADAMTS13. A deficiência de ADAMTS13 resulta em multímeros hiper-reativos que induzem microtrombose difusa (Púrpura Trombocitopênica Trombótica - PTT).",
      "keyPoint": "A ADAMTS13 cliva multímeros gigantes de vWF; sua ausência provoca PTT com anemia hemolítica microangiopática e plaquetopenia grave."
    },
    "openstax": {
      "section": "Chapter 18: Blood — Section 18.5: Hemostasis",
      "summary": "OpenStax ilustra o espasmo miogênico local, a adesão plaquetária via vWF ao colágeno rompido, a liberação de grânulos densos e a formação da rede inicial de tampão branco.",
      "keyPoint": "A hemostasia primária estanca sangramentos de pequenos capilares em 1 a 3 minutos; grandes vasos requerem a rede de fibrina da hemostasia secundária."
    },
    "merck": {
      "section": "Hematologia Clínica — Doença de von Willebrand, Trombocitopenias e Antiplaquetários",
      "summary": "O Manual MSD discute a Doença de von Willebrand (distúrbio hemorrágico hereditário mais comum, gerando defeito na adesão plaquetária com tempo de sangramento alargado) e os antiplaquetários modernos: Clopidogrel e Ticagrelor (bloqueadores do receptor P2Y12 de ADP) e Abciximabe/Tirofibana (bloqueadores de GpIIb/IIIa).",
      "keyPoint": "Clopidogrel bloqueia o receptor P2Y12 de ADP; Aspirina bloqueia a COX-1 de TXA2: associação fundamental na síndrome coronariana aguda."
    },
    "researchTopics": [
      {
        "title": "Receptor GpIb-IX e Fator de von Willebrand",
        "concept": "Ancoragem inicial da plaqueta em alta tensão de cisalhamento através da interação estéreo-específica entre o complexo glicoproteico GpIb da membrana plaquetária e o domínio A1 do vWF aderido ao colágeno.",
        "formulaOrLaw": "Adesão Plaquetária Inicial: GpIb-IX-V + vWF Subendotelial",
        "keyReference": "Guyton & Hall, Cap. 37",
        "query": "glycoprotein ib ix v complex von willebrand factor shear stress adhesion"
      },
      {
        "title": "Via do Tromboxano A2 e Farmacologia da Aspirina",
        "concept": "Ativação da ciclooxigenase-1 plaquetária gerando TXA2 a partir do ácido araquidônico e inibição irreversível por acetilação covalentemente estável de serina-529 pelo AAS.",
        "formulaOrLaw": "Ácido Araquidônico -> COX-1 -> PGH2 -> TXA2-Sintetase -> TXA2 (Bloqueado por Aspirina)",
        "keyReference": "Costanzo, Cap. 4",
        "query": "thromboxane a2 cox1 inhibition aspirin platelet activation"
      },
      {
        "title": "Receptor GpIIb/IIIa e Pontes de Fibrinogênio",
        "concept": "Ativação conformacional \"inside-out\" da integrina alfaIIb-beta3 ligando o domínio RGD do fibrinogênio plasmático bivalente para consolidar a agregação plaqueta-plaqueta.",
        "formulaOrLaw": "Agregação Plaquetária: Plaquet-GpIIb/IIIa <-> Fibrinogênio <-> GpIIb/IIIa-Plaqueta",
        "keyReference": "Berne & Levy, Cap. 16",
        "query": "glycoprotein iib iiia integrin inside out signaling fibrinogen platelet aggregation"
      },
      {
        "title": "Clivagem por ADAMTS13 e Fisiopatologia da PTT",
        "concept": "Papel da metaloproteinase endotelial ADAMTS13 no desdobramento e clivagem proteolítica de multímeros gigantes de vWF, prevenindo microtrombose espontânea na microcirculação.",
        "formulaOrLaw": "ADAMTS13 cliva sítio Tyr1605-Met1606 do vWF",
        "keyReference": "Boron & Boulpaep, Cap. 19",
        "query": "adamts13 von willebrand factor multimer thrombotic thrombocytopenic purpura"
      }
    ]
  },
  {
    "topicName": "Cascata de Coagulação e Fibrinólise",
    "phaseId": "w2_p5",
    "level": 11,
    "worldId": "w2",
    "category": "Hematologia & Hemostasia",
    "phaseTitle": "Coagulação Enzimática & Fibrina",
    "aliases": [
      "Cascata de Coagulação",
      "Fibrinólise",
      "Trombina",
      "Fator Tecidual",
      "D-Dímero"
    ],
    "specialistTitle": "Silverthorn & Boron",
    "specialistBadge": "Enzimologia da Coagulação",
    "guyton": {
      "chapter": "Unidade VI — Capítulo 37: Mecanismo da Coagulação Sanguínea e Fibrinólise",
      "pages": "pp. 484-496",
      "summary": "A Hemostasia Secundária consiste na ativação sequencial de zimogênios plasmáticos (pró-enzimas) em serino-proteases ativas em uma cascata proteolítica altamente amplificada sobre a superfície fosfolipídica negativa de plaquetas ativadas, culminando na conversão do Fibrinogênio solúvel em uma malha insolúvel de Fibrina (trombo vermelho). A cascata é dividida classicamente em: 1) Via Extrínseca: iniciada pelo FATOR TECIDUAL (Tromboplastina tecidual / Fator III) exposto no endotélio lesado, que se liga ao Fator VII ativando-o (Complexo FT-VIIa, dependente de Ca2+); 2) Via Intrínseca: iniciada pelo contato do Fator XII com superfícies colágenas carregadas negativamente, ativando sequencialmente XIIa -> XIa -> IXa; o IXa junto com seu cofator VIIIa forma o complexo tenase intrínseco; 3) Via Comum: ativada tanto pelo complexo FT-VIIa quanto pelo complexo tenase IXa-VIIIa, convertendo o Fator X em Xa. O Xa forma com o cofator Va o Complexo Protrombinase, que cliva a Protrombina (Fator II) em TROMBINA (Fator IIa).",
      "keyPoint": "A Trombina (Fator IIa) é o maestro enzimático: cliva o fibrinogênio em monômeros de fibrina, ativa o Fator XIII (estabilizador da malha) e ativa cofatores V, VIII e XI por feedback positivo."
    },
    "berne": {
      "chapter": "Capítulo 16: Mecanismos Enzimáticos da Coagulação, Anticoagulação Endógena e Fibrinólise",
      "pages": "pp. 314-326",
      "summary": "Berne & Levy detalha o papel fundamental da Vitamina K: cofator obrigatório para a enzima gama-glutamil carboxilase hepática, que adiciona um grupo carboxila a resíduos de ácido glutâmico nos Fatores II, VII, IX e X (além das proteínas anticoagulantes C e S). Essa carboxilação permite a quelação de íons cálcio (Ca2+), permitindo a ancoragem dos complexos enzimáticos aos fosfolipídios de membrana (fosfatidilserina). A Varfarina inibe a enzima epóxido redutase da vitamina K (VKORC1), sintetizando fatores não funcionais. Aborda os freios anticoagulantes endógenos: Antitrombina III (potencializada pela heparina) e o sistema Trombomodulina-Proteína C-Proteína S.",
      "keyPoint": "Fatores dependentes de Vitamina K: II, VII, IX, X e Proteínas C e S. Varfarina bloqueia a VKORC1, inibindo a gama-carboxilação."
    },
    "costanzo": {
      "chapter": "Capítulo 4: Fisiologia da Coagulação e Testes Laboratoriais (TP e TTPA)",
      "pages": "pp. 172-178",
      "summary": "Costanzo correlaciona os testes laboratoriais clássicos de coagulação: 1) Tempo de Protrombina (TP / INR): avalia a VIA EXTRÍNSECA e a via comum (Fatores VII, X, V, II e fibrinogênio); monitora o uso de anticoagulantes orais antagonistas da vitamina K (Varfarina); 2) Tempo de Tromboplastina Parcial Ativada (TTPA): avalia a VIA INTRÍNSECA e a via comum (Fatores XII, XI, IX, VIII, X, V, II e fibrinogênio); monitora o uso de Heparina Não Fracionada (HNF).",
      "keyPoint": "Varfarina altera primariamente o TP/INR (afeta primeiro o Fator VII de menor meia-vida); Heparina não fracionada altera o TTPA."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 19: Fisiologia da Fibrinólise e D-Dímero",
      "pages": "pp. 442-450",
      "summary": "Boron disseca o sistema fibrinolítico responsável por dissolver trombos organizados e restaurar a perviedade vascular: o Ativador do Plasminogênio Tecidual (t-PA) secretado pelo endotélio converte o plasminogênio aprisionado no trombo em PLASMINA. A plasmina degrada a malha de fibrina insolúvel cruzada covalentemente pelo Fator XIIIa, gerando Produtos de Degradação da Fibrina, sendo o D-DÍMERO o marcador molecular mais sensível e específico da degradação de fibrina estabilizada.",
      "keyPoint": "D-Dímero elevado indica degradação ativa de fibrina ligada covalentemente (altíssimo valor preditivo negativo para afastar Trombose Venosa Profunda e TEP)."
    },
    "openstax": {
      "section": "Chapter 18: Blood — Section 18.5: Coagulation and Fibrinolysis",
      "summary": "OpenStax ilustra o modelo em cascata destacando a convergência no Fator Xa, a conversão da protrombina em trombina, a polimerização da fibrina e a retração mecânica do coágulo sanguíneo mediada por filamentos de actomiosina plaquetária.",
      "keyPoint": "O Fator XIIIa forma ligações cruzadas covalentes entre as cadeias de fibrina, convertendo um gel frouxo em malha estruturalmente impenetrável."
    },
    "merck": {
      "section": "Hematologia Clínica — Trombofilias, Trombólise e Anticoagulantes de Ação Direta (DOACs)",
      "summary": "O Manual MSD detalha os novos anticoagulantes orais de ação direta (DOACs): Inibidores diretos do Fator Xa (Rivaroxabana, Apixabana) e Inibidor direto da Trombina (Dabigatrana), que atuam sem necessidade de monitoramento laboratorial de rotina por TP ou TTPA. Explica a indicação de trombolíticos (Alteplase/rt-PA) no AVC isquêmico agudo e infarto com supra de ST dentro da janela terapêutica.",
      "keyPoint": "DOACs inibem diretamente o Xa (oxabanas) ou a trombina IIa (dabigatrana) com perfil de segurança superior à varfarina."
    },
    "researchTopics": [
      {
        "title": "Via Extrínseca do Fator Tecidual e Amplificação por Trombina",
        "concept": "Mecanismo celular no qual o Fator Tecidual subendotelial exposto deflagra a geração inicial de uma centelha de trombina, a qual amplifica exponencialmente o sistema retroativando os fatores V, VIII e XI.",
        "formulaOrLaw": "Iniciação: FT + VIIa + Ca2+ -> Ativação do Fator X",
        "keyReference": "Guyton & Hall, Cap. 37",
        "query": "tissue factor pathway factor viia thrombin amplification cell based coagulation"
      },
      {
        "title": "Gama-Carboxilação Dependente de Vitamina K",
        "concept": "Modificação pós-traducional enzimática de resíduos de ácido glutâmico em Gla, criando sítios de quelação bi-coordenada para o cálcio iônico que ancora os fatores II, VII, IX e X aos fosfolipídios.",
        "formulaOrLaw": "Glutamato + CO2 + O2 + VitK Reduzida -> Gama-Carboxiglutamato (Gla) + Epóxido de VitK",
        "keyReference": "Berne & Levy, Cap. 16",
        "query": "vitamin k cycle gamma glutamyl carboxylase vkorc1 warfarin coagulation"
      },
      {
        "title": "Monitoramento Laboratorial: TP/INR vs. TTPA",
        "concept": "Validação bioanalítica da integridade das vias hemostáticas: TP/INR afere a via extrínseca/comum (sensível ao Fator VII) e TTPA afere a via intrínseca/comum (fatores de contato e heparina).",
        "formulaOrLaw": "INR = (TP_paciente / TP_controle)^ISI",
        "keyReference": "Costanzo, Cap. 4",
        "query": "prothrombin time inr activated partial thromboplastin time aptt heparin warfarin"
      },
      {
        "title": "Fibrinólise, Ação da Plasmina e Cinética do D-Dímero",
        "concept": "Ativação do plasminogênio por t-PA na superfície do coágulo, clivagem proteolítica dos polímeros de fibrina cruzada pelo Fator XIIIa e liberação de fragmentos circulantes de D-dímero.",
        "formulaOrLaw": "Plasminogênio + t-PA -> Plasmina -> Clivagem de Fibrina -> D-Dímeros",
        "keyReference": "Boron & Boulpaep, Cap. 19",
        "query": "fibrinolysis tissue plasminogen activator plasmin d dimer deep vein thrombosis"
      }
    ]
  },
  {
    "topicName": "Grupos Sanguíneos e Imunidade",
    "phaseId": "w2_p6",
    "level": 12,
    "worldId": "w2",
    "category": "Hematologia & Hemostasia",
    "phaseTitle": "Grupos Sanguíneos ABO/Rh & Imunidade",
    "aliases": [
      "Grupos Sanguíneos",
      "Sistema ABO",
      "Fator Rh",
      "Eritroblastose Fetal",
      "Imunologia Transfusional"
    ],
    "specialistTitle": "Silverthorn & Ganong",
    "specialistBadge": "Imuno-Hematologia",
    "guyton": {
      "chapter": "Unidade VI — Capítulo 36: Grupos Sanguíneos, Transfusão e Transplante de Órgãos",
      "pages": "pp. 471-480",
      "summary": "Guyton & Hall explica que os sistemas de grupos sanguíneos ABO e Rh são determinados por aglutinogênios (antígenos) glicolipídicos e proteicos geneticamente herdados expressos na superfície exterior da membrana eritrocitária. O Sistema ABO é governado pela adição de carboidratos terminais à Substância H fundamental: o alelo A codifica uma N-acetilgalactosaminiltransferase; o alelo B codifica uma galactosiltransferase; o alelo O não adiciona nenhum açúcar terminal, deixando a substância H intacta. No plasma sanguíneo encontram-se anticorpos naturais (aglutininas) da classe IgM contra os antígenos ausentes nas hemácias do próprio indivíduo (indivíduo do grupo A tem aglutinina anti-B; grupo B tem anti-A; grupo AB não tem aglutininas; grupo O tem aglutininas anti-A e anti-B).",
      "keyPoint": "O sangue tipo O negativo é o Doador Universal de hemácias (não possui antígenos A, B ou D); o sangue tipo AB positivo é o Receptor Universal."
    },
    "berne": {
      "chapter": "Capítulo 16: Imuno-Hematologia e Sistema Rh (Antígeno D)",
      "pages": "pp. 306-312",
      "summary": "Berne & Levy detalha o Sistema Rh, codificado pelos genes RHD e RHCE. O Antígeno D é a proteína de superfície mais imunogênica conhecida. Indivíduos Rh-positivos possuem o antígeno D; indivíduos Rh-negativos não o possuem. Ao contrário do sistema ABO, indivíduos Rh-negativos NÃO nascem com anticorpos anti-Rh (anti-D) no plasma: a síntese de anti-D requer exposição prévia a hemácias Rh-positivas (transfusão inadvertida ou gestação de feto Rh-positivo). Como os anticorpos anti-D são da classe IgG (monômeros pequenos de 150 kDa), eles atravessam ativamente a barreira placentária materna via receptores FcRn sinciciotrofoblásticos, podendo desencadear a Doença Hemolítica Perinatal (Eritroblastose Fetal).",
      "keyPoint": "Anticorpos anti-A e anti-B são predominantemente IgM (pentâmeros gigantes que não cruzam a placenta); anticorpos anti-D são IgG (atravessam a placenta)."
    },
    "costanzo": {
      "chapter": "Capítulo 4: Princípios Transfusionais e Testes Pré-Transfusionais",
      "pages": "pp. 178-182",
      "summary": "Costanzo descreve a Reação Transfusional Hemolítica Aguda (RTHA) por incompatibilidade ABO: se hemácias do grupo A forem infundidas em paciente do grupo O, as aglutininas plasmáticas anti-A IgM do receptor atacam e fixam a cascata do Complemento (via C5b-9, Complexo de Ataque à Membrana MAC), gerando hemólise intravascular imediata com hemoglobinemia, falência renal aguda por precipitação tubular e choque anafilactoide distributivo.",
      "keyPoint": "A prova cruzada maior (hemácias do doador incubadas com soro do receptor) é mandatória para impedir reação hemolítica fatal por IgM."
    },
    "specialistSource": {
      "chapter": "Ganong — Fisiologia Médica — Capítulo 32: Imunidade Transfusional e Profilaxia da Isoimunização Rh",
      "pages": "pp. 610-624",
      "summary": "Ganong detalha a profilaxia da Eritroblastose Fetal: mães Rh-negativas não sensibilizadas que geram fetos Rh-positivos devem receber Imunoglobulina anti-D humana (RhoGAM) na 28ª semana de gestação e até 72 horas pós-parto. Os anticorpos anti-D exógenos ligam-se e opsonizam as poucas hemácias fetais Rh+ que caíram na circulação materna durante o parto, promovendo sua destruição por macrófagos antes que o sistema imune materno monte resposta celular e memória imune B duradoura.",
      "keyPoint": "A profilaxia com imunoglobulina anti-D neutraliza as hemácias fetais na circulação materna, impedindo a isoimunização em gestações subsequentes."
    },
    "openstax": {
      "section": "Chapter 18: Blood — Section 18.6: Blood Typing",
      "summary": "OpenStax fornece a matriz transfusional completa e demonstra o teste de tipagem em lâmina por aglutinação direta com soros anti-A, anti-B e anti-D.",
      "keyPoint": "Aglutinação visível em teste de lâmina com soro anti-A confirma a presença do antígeno A na superfície da hemácia."
    },
    "merck": {
      "section": "Medicina Transfusional — Reações Transfusionais Imunológicas e Não Imunológicas",
      "summary": "O Manual MSD estabelece a conduta imediata diante de suspeita de reação transfusional (febre, dor lombar intensa, hipotensão, urina escura): interrupção imediata da infusão, manutenção de acesso venoso com salina fisiológica, suporte hemodinâmico, coleta de amostras para teste de Coombs direto e notificação ao banco de sangue.",
      "keyPoint": "Interromper imediatamente a transfusão é o primeiro e mais crítico passo ao menor sinal de incompatibilidade sanguínea."
    },
    "researchTopics": [
      {
        "title": "Biossíntese dos Antígenos ABO e Glicosiltransferases",
        "concept": "Diferenciação enzimática na adição de açúcares específicos à Substância H por glicosiltransferases codificadas pelos alelos A, B e O no cromossomo 9 humano.",
        "formulaOrLaw": "Alelo A (N-acetilgalactosamina) vs. Alelo B (Galactose) vs. Alelo O (Substância H intacta)",
        "keyReference": "Guyton & Hall, Cap. 36",
        "query": "abo blood group antigens glycosyltransferase h substance genetics"
      },
      {
        "title": "Mecanismo da Reação Transfusional Hemolítica por IgM",
        "concept": "Ligação das aglutininas bivalentes naturais de classe IgM aos eritrócitos incompatíveis, deflagrando a ativação da via clássica do Complemento até o complexo lítico C5b-9.",
        "formulaOrLaw": "IgM Anti-A/B + Antígeno -> Fixação de C1q -> C5b-9 (MAC) -> Hemólise Intravascular Aguda",
        "keyReference": "Costanzo, Cap. 4",
        "query": "acute hemolytic transfusion reaction abo incompatibility complement mac c5b 9"
      },
      {
        "title": "Antígeno Rh(D) e Fisiopatologia da Eritroblastose Fetal",
        "concept": "Sensibilização imune de gestantes Rh-negativas pelo sangue fetal Rh-positivo com produção de anticorpos IgG que atravessam a placenta na gestação seguinte, destruindo as hemácias fetais.",
        "formulaOrLaw": "Anticorpos IgG Anti-D cruzam a barreira sinciciotrofoblástica via receptores FcRn",
        "keyReference": "Berne & Levy, Cap. 16",
        "query": "rh incompatibility hemolytic disease of the newborn erythroblastosis fetalis anti d igg"
      },
      {
        "title": "Profilaxia Imunológica com Imunoglobulina Anti-D",
        "concept": "Administração passiva de anticorpos anti-Rh(D) à gestante na 28ª semana e pós-parto para clareamento de hemácias fetais antes da ativação de linfócitos B maternos.",
        "formulaOrLaw": "Imunoglobulina Anti-D (300 μg) neutraliza até 15 mL de hemácias fetais Rh+",
        "keyReference": "Ganong, Cap. 32",
        "query": "anti-d immunoglobulin rhogam prophylaxis rhesus immunization fetomaternal hemorrhage"
      }
    ]
  },
  {
    "topicName": "Hemodinâmica e Resistência",
    "phaseId": "w3_p1",
    "level": 13,
    "worldId": "w3",
    "category": "Sistema Cardiovascular",
    "phaseTitle": "Hemodinâmica & Resistência Vascular",
    "aliases": [
      "Hemodinâmica e Poiseuille",
      "Resistência Vascular",
      "Lei de Poiseuille",
      "Fluxo Laminar"
    ],
    "specialistTitle": "Berne & Levy",
    "specialistBadge": "Biofísica Hemodinâmica",
    "guyton": {
      "chapter": "Unidade IV: A Circulação — Capítulo 14: Visão Geral da Circulação; Biofísica da Pressão, do Fluxo e da Resistência",
      "pages": "pp. 161-176",
      "summary": "Guyton & Hall estabelece as leis físicas fundamentais que regem a circulação sanguínea. O fluxo sanguíneo (Q) através de um leito vascular é diretamente proporcional à diferença de pressão hidráulica (gradiente de pressão, ΔP = P1 - P2) e inversamente proporcional à Resistência Vascular (R): Q = ΔP / R (análogo biológico da Lei de Ohm). O fluxo laminar é caracterizado por camadas concêntricas cilíndricas com velocidade parabólica máxima no centro do vaso e atrito mínimo na parede endotelial. Quando a velocidade é excessivamente alta, há estenose valvar ou a viscosidade do sangue diminui (como na anemia profunda), o fluxo torna-se turbulento, gerando turbilhões e vibrações acústicas audíveis (sopros cardíacos e ruídos de Korotkoff na aferição da pressão).",
      "keyPoint": "O fluxo é gerado pela diferença de pressão (ΔP) dividida pela resistência (R). Fluxo turbulento gera sopros cardíacos audíveis pelo estetoscópio."
    },
    "berne": {
      "chapter": "Capítulo 17: Hemodinâmica e a Lei de Poiseuille",
      "pages": "pp. 290-310",
      "summary": "Berne & Levy detalha a dedução da Lei de Hagen-Poiseuille para o fluxo laminar em tubos rígidos: R = (8 * η * L) / (π * r^4), onde η é a viscosidade do sangue, L o comprimento do vaso e r o raio interno do vaso. Consequentemente, o fluxo é expresso por Q = (ΔP * π * r^4) / (8 * η * L). Como a resistência vascular é inversamente proporcional à QUARTA POTÊNCIA DO RAIO (r^4), pequenas alterações vasomotoras no diâmetro do vaso provocam alterações astronômicas na resistência e no fluxo. Se uma arteríola sofre vasoconstrição e seu raio diminui pela metade (1/2), sua resistência vascular individual aumenta 16 vezes (2^4 = 16) e o fluxo cai para 1/16 do valor original.",
      "keyPoint": "A dependência da resistência em relação à quarta potência do raio (1/r^4) confere às arteríolas musculares o papel de torneiras reguladoras do fluxo orgânico."
    },
    "costanzo": {
      "chapter": "Capítulo 3: Fisiologia Cardiovascular — Relação entre Pressão, Fluxo e Resistência",
      "pages": "pp. 115-125",
      "summary": "Costanzo compara a organização dos vasos sanguíneos: 1) Circuitos em Série (ex: artéria renal -> arteríola aferente -> capilares glomerulares -> arteríola eferente -> capilares peritubulares): a resistência total é a soma algébrica direta das resistências individuais (R_total = R1 + R2 + ...), de modo que a constrição de qualquer segmento eleva a resistência de todo o circuito; 2) Circuitos em Paralelo (a circulação sistêmica dos principais órgãos: cerebral, coronariana, renal, gastrointestinal, muscular e cutânea): a resistência total é dada por 1/R_total = 1/R1 + 1/R2 + ..., o que assegura que a resistência periférica total (RPT) seja sempre MENOR do que a resistência de qualquer leito individual, permitindo a regulação independente do fluxo a cada órgão sem desestabilizar os outros.",
      "keyPoint": "Os órgãos estão dispostos em paralelo: o fechamento das arteríolas de um órgão desvia o fluxo para os outros sem colapsar a circulação."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 17: Biofísica do Sistema Vascular e Número de Reynolds",
      "pages": "pp. 410-432",
      "summary": "Boron formaliza o Número de Reynolds (Re): Re = (v * D * ρ) / η, onde v é a velocidade do sangue, D o diâmetro vascular, ρ a densidade do sangue e η a viscosidade plasmática. Quando Re ultrapassa 2.000, o fluxo transita de laminar para turbulento. Demonstra que a anemia acentuada reduz a viscosidade (η cai pelo hematócrito baixo), elevando o número de Reynolds e precipitando sopros sistólicos de ejeção inocentes em pacientes jovens com coração funcionalmente sadio.",
      "keyPoint": "Anemia reduz a viscosidade sanguínea, elevando o Número de Reynolds acima de 2.000 e deflagrando fluxo turbulento audível (sopro funcional)."
    },
    "openstax": {
      "section": "Chapter 20: The Cardiovascular System: Blood Vessels — Section 20.2: Blood Flow, Blood Pressure, and Resistance",
      "summary": "OpenStax classifica a árvore vascular funcionalmente: artérias condutoras elásticas (aorta, reservatório de pressão Windkessel), arteríolas de distribuição (vasos de resistência), capilares (vasos de troca com fluxo lento) e vênulas/veias (vasos de capacitância contendo 64% da volemia corporal total).",
      "keyPoint": "As arteríolas concentram o maior gradiente de queda pressórica do sistema, sendo o sítio anatômico primário da Resistência Periférica Total (RPT)."
    },
    "merck": {
      "section": "Cardiologia — Fisiopatologia da Hipertensão Arterial e Aterosclerose",
      "summary": "O Manual MSD correlaciona a Lei de Poiseuille com a gênese da hipertensão arterial essencial: o remodelamento hipertrófico da parede arteriolar com espessamento da túnica média reduz o raio luminal basal, elevando dramaticamente a RPT e sobrecarregando o ventrículo esquerdo.",
      "keyPoint": "O tratamento farmacológico com vasodilatadores (bloqueadores dos canais de cálcio e IECAs) atua relaxando o tônus arteriolar para restaurar o raio."
    },
    "researchTopics": [
      {
        "title": "Lei de Poiseuille e Resistência à 4ª Potência do Raio",
        "concept": "Formulação matemática hidrodinâmica que comprova que o diâmetro luminal das arteríolas musculares é a variável mais poderosa e sensível de regulação da resistência e da perfusão tecidual.",
        "formulaOrLaw": "Resistência Vascular: R = (8 * η * L) / (π * r^4)",
        "keyReference": "Guyton & Hall, Cap. 14",
        "query": "poiseuille law vascular resistance vessel radius fourth power hemodynamics"
      },
      {
        "title": "Circuitos em Série vs. Paralelo na Circulação Sistêmica",
        "concept": "Arquitetura hidrostática comparativa: leitos viscerais em paralelo reduzem a resistência periférica total e permitem controle autorregulatório independente de cada órgão.",
        "formulaOrLaw": "1 / RPT = 1 / R_cerebral + 1 / R_coronária + 1 / R_renal + 1 / R_esplâncnica",
        "keyReference": "Costanzo, Cap. 3",
        "query": "parallel series vascular resistance systemic circulation organ blood flow"
      },
      {
        "title": "Fluxo Laminar vs. Turbulento e Número de Reynolds",
        "concept": "Transição biofísica entre o fluxo silencioso em camadas de cisalhamento e o regime turbulento ruidoso dependente da velocidade, diâmetro vascular e viscosidade sanguínea.",
        "formulaOrLaw": "Re = (v * D * ρ) / η (Re > 2.000 prediz turbulência e sopro acústico)",
        "keyReference": "Berne & Levy, Cap. 17",
        "query": "reynolds number laminar turbulent blood flow vascular bruits anemia"
      },
      {
        "title": "Efeito Windkessel da Aorta e Complacência Arterial",
        "concept": "Capacidade elástica das grandes artérias elásticas de se distenderem na sístole absorvendo energia cinética ventricular e recolherem-se elasticamente na diástole, mantendo fluxo sanguíneo capilar contínuo.",
        "formulaOrLaw": "Complacência Arterial: C = ΔV / ΔP (Diminui com o envelhecimento e aterosclerose)",
        "keyReference": "Boron & Boulpaep, Cap. 17",
        "query": "windkessel effect aortic compliance pulse pressure aging atherosclerosis"
      }
    ]
  },
  {
    "topicName": "Eletrofisiologia Cardíaca",
    "phaseId": "w3_p2",
    "level": 14,
    "worldId": "w3",
    "category": "Sistema Cardiovascular",
    "phaseTitle": "Condução Elétrica & Nó AV",
    "aliases": [
      "Condução Cardíaca",
      "Nó Sinoatrial",
      "Nó Atrioventricular",
      "Potencial Marcapasso",
      "Fibras de Purkinje"
    ],
    "specialistTitle": "Berne & Levy",
    "specialistBadge": "Eletrofisiologia Miocárdica",
    "guyton": {
      "chapter": "Unidade III: O Coração — Capítulo 10: Ritmo e Condução Excitatória do Coração",
      "pages": "pp. 117-128",
      "summary": "O sistema excito-condutor cardíaco é responsável pela geração rítmica espontânea e condução sequencial rápida do impulso elétrico para todas as câmaras cardíacas: 1) NÓ SINOATRIAL (Nó SA, marcapasso fisiológico natural localizado no sulco terminal do átrio direito, disparando 60 a 100 bpm em virtude de sua fase 4 de despolarização espontânea mais rápida); 2) Vias internodais atriais e Feixe de Bachmann; 3) NÓ ATRIOVENTRICULAR (Nó AV, no triângulo de Koch no assoalho atrial direito); 4) Feixe de His; 5) Ramos direito e esquerdo do feixe; 6) Rede subendocárdica de Fibras de Purkinje. O Nó AV impõe um RETARDO FISIOLÓGICO CRÍTICO de cerca de 0,09 a 0,12 segundos na condução do estímulo, decorrente de células de menor diâmetro com poucas junções comunicantes (gap junctions). Esse retardo é essencial porque assegura que os átrios completem totalmente sua contração mecânica (\"chute atrial\") e esvaziem seu sangue nos ventrículos ANTES que os ventrículos comecem sua sístole.",
      "keyPoint": "O retardo fisiológico no nó AV (~0,10 s) sincroniza o ciclo: garante o enchimento ventricular completo pelos átrios antes da sístole ventricular."
    },
    "berne": {
      "chapter": "Capítulo 14: Eletrofisiologia Cardíaca, Canais Funny (If) e Potenciais de Resposta Lenta",
      "pages": "pp. 235-256",
      "summary": "Berne & Levy estabelece a distinção eletrofisiológica entre: 1) Células de Resposta Rápida (miócitos atriais, ventriculares e Purkinje: fase 0 rápida mediada por canais de sódio Nav com platô na fase 2 mediado por canais de Ca2+ tipo L); 2) Células de Resposta Lenta / Células Marcapasso (Nó SA e Nó AV: não possuem canais de sódio rápidos funcionais; sua fase 0 lenta é mediada exclusivamente pela entrada de Ca2+ por canais tipo L). A despolarização diastólica lenta de repouso (fase 4 do nó SA) é impulsionada pela CORRENTE FUNNY (If), uma corrente mista de Na+/K+ carreada por canais HCN (Hyperpolarization-activated Cyclic Nucleotide-gated) que se abrem espontaneamente durante a hiperpolarização no final da fase 3.",
      "keyPoint": "A corrente funny (If, canais HCN) é ativada por hiperpolarização na fase 4 do nó SA, sendo a responsável biofísica pelo automatismo cardíaco."
    },
    "costanzo": {
      "chapter": "Capítulo 3: Eletrofisiologia Cardíaca — Modulação Autonômica Cronotrópica",
      "pages": "pp. 125-138",
      "summary": "Costanzo detalha a regulação cronotrópica autonômica do nó SA: 1) Estímulo Simpático (Noradrenalina e Adrenalina nos receptores beta-1 acoplados à proteína Gs): eleva o AMPc intracelular, que se liga diretamente aos canais HCN, acelerando a taxa de inclinação da fase 4 (mais Na+ entra via If) e aumentando a probabilidade de abertura de canais de Ca2+ tipo T e L; isso atinge o potencial limiar mais rapidamente, provocando TAQUICARDIA (efeito cronotrópico positivo); 2) Estímulo Parassimpático / Vagal (Acetilcolina nos receptores muscarínicos M2 acoplados à proteína Gi): reduz o AMPc e abre canais de K+ dependentes de acetilcolina (corrente I_K,ACh via subunidades beta-gama), hiperpolarizando o repouso e deprimindo a inclinação da fase 4, gerando BRADICARDIA (efeito cronotrópico negativo).",
      "keyPoint": "O tônus vagal parassimpático desacelera a inclinação da fase 4 no nó SA, mantendo a frequência cardíaca basal de repouso em ~70 bpm."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 21: Eletrofisiologia Cardíaca e Canais HCN",
      "pages": "pp. 480-504",
      "summary": "Boron aborda a farmacologia da Ivabradina: bloqueador seletivo e específico da corrente If dos canais HCN no nó sinoatrial. A ivabradina reduz de forma dose-dependente a frequência cardíaca em repouso e esforço sem interferir na contratilidade ventricular (inotrópico nulo) ou na pressão arterial, demonstrando a exclusividade da corrente If no automatismo.",
      "keyPoint": "Ivabradina bloqueia seletivamente a corrente If no nó SA, desacelerando o coração sem afetar o inotropismo ventricular."
    },
    "openstax": {
      "section": "Chapter 19: The Cardiovascular System: The Heart — Section 19.2: Cardiac Muscle and Electrical Activity",
      "summary": "OpenStax compara a velocidade de condução do impulso ao longo do sistema: rápida nos feixes atriais (1 m/s), extremamente lenta no nó AV (0,05 m/s) e ultrarrápida nas fibras de Purkinje (4 m/s), permitindo despolarização quase síncrona de ambos os ventrículos do ápice para a base.",
      "keyPoint": "Fibras de Purkinje conduzem a 4 m/s (80 vezes mais rápido que o nó AV) para ejetar o sangue eficazmente na sístole."
    },
    "merck": {
      "section": "Arritmias Cardíacas — Bloqueios Atrioventriculares (BAV de 1º, 2º e 3º Grau)",
      "summary": "O Manual MSD correlaciona disfunções do nó AV: BAV de 1º grau (prolongamento fixo do retardo AV com intervalo PR > 0,20 s); BAV de 2º grau Mobitz I / Wenckebach (prolongamento progressivo do PR até uma onda P não ser conduzida); BAV de 2º grau Mobitz II (falha abrupta infranodal com alto risco de progressão); BAV de 3º grau ou Bloqueio Cardíaco Total (dissociação atrioventricular completa com necessidade de implante de marca-passo definitivo de emergência).",
      "keyPoint": "No BAV total, átrios e ventrículos batem independentemente; o ritmo de escape ventricular intrínseco sustenta apenas 30 a 40 bpm."
    },
    "researchTopics": [
      {
        "title": "Corrente Funny (If) e Canais HCN no Automatismo Cardíaco",
        "concept": "Corrente mista de influxo catiônico ativada por hiperpolarização diastólica terminal, regulada por nucleotídeos cíclicos e responsável pelo potencial marcapasso espontâneo do nó sinoatrial.",
        "formulaOrLaw": "Canais HCN4: Ativação por Hiperpolarização + Modulação por AMPc",
        "keyReference": "Berne & Levy, Cap. 14",
        "query": "funny current if hcn channels pacemaker potential sinoatrial node"
      },
      {
        "title": "Bases Fisiológicas do Retardo no Nó Atrioventricular",
        "concept": "Mecanismo ultraestrutural de retardo elétrico (~0,10 s) por miócitos de pequeno calibre e baixa densidade de conexinas 43, permitindo o esvaziamento atrial pré-sistólico.",
        "formulaOrLaw": "Velocidade de Condução no Nó AV: ~0,05 m/s (vs. 4 m/s em Purkinje)",
        "keyReference": "Guyton & Hall, Cap. 10",
        "query": "atrioventricular node delay physiological significance atrial kick gap junctions"
      },
      {
        "title": "Modulação Cronotrópica Autonômica Simpática e Vagal",
        "concept": "Controle da frequência de disparo sinusal por receptores beta-1 adrenérgicos (Gs -> ↑ AMPc -> ↑ If) e muscarínicos M2 colinérgicos (Gi -> ↓ AMPc e ativação de canais GIRK/I_K,ACh).",
        "formulaOrLaw": "Simpático: Inclinação da Fase 4 ↑; Parassimpático: Hiperpolarização + Fase 4 ↓",
        "keyReference": "Costanzo, Cap. 3",
        "query": "autonomic regulation heart rate beta adrenergic muscarinic acetylcholine girk"
      },
      {
        "title": "Velocidade do Sistema Purkinje e Despolarização Síncrona",
        "concept": "Expressão massiva de conexinas 40 e canais de sódio rápidos Nav1.5 no feixe de His e fibras de Purkinje, assegurando ativação mecânica síncrona e coordenada do ápice para a base.",
        "formulaOrLaw": "Ativação Ventricular Apicobasal: Condução a 4 metros por segundo",
        "keyReference": "Boron & Boulpaep, Cap. 21",
        "query": "purkinje fibers conduction velocity syncytium apical to basal activation"
      }
    ]
  },
  {
    "topicName": "Eletrocardiograma (ECG)",
    "phaseId": "w3_p3",
    "level": 15,
    "worldId": "w3",
    "category": "Sistema Cardiovascular",
    "phaseTitle": "Eletrocardiograma (ECG): Ondas e Intervalos",
    "aliases": [
      "Eletrocardiograma",
      "ECG",
      "Onda P",
      "Complexo QRS",
      "Onda T",
      "Intervalo PR",
      "Segmento ST"
    ],
    "specialistTitle": "Costanzo & Berne",
    "specialistBadge": "Eletrocardiografia Médica",
    "guyton": {
      "chapter": "Unidade III — Capítulos 11 e 12: O Eletrocardiograma Normal e Interpretação Eletrocardiográfica",
      "pages": "pp. 129-148",
      "summary": "O Eletrocardiograma (ECG) de superfície de 12 derivações registra os vetores de correntes elétricas extracelulares geradas pela despolarização e repolarização sucessivas do sincício miocárdico, conduzidas através dos fluidos corporais até eletrodos na pele. Componentes essenciais do traçado: 1) ONDA P: despolarização de ambos os átrios (inicia no átrio direito e segue para o esquerdo; duração normal < 0,11 s); 2) INTERVALO PR: medido do início da onda P até o início do complexo QRS (representa o tempo de condução desde o nó SA através do nó AV até as fibras de Purkinje; duração normal: 0,12 a 0,20 segundos ou 3 a 5 quadradinhos na velocidade de 25 mm/s); 3) COMPLEXO QRS: despolarização rápida de ambos os ventrículos (duração normal: 0,08 a 0,10 s; > 0,12 s indica bloqueio de ramo); a repolarização atrial ocorre simultaneamente, mas fica encoberta pelo QRS; 4) SEGMENTO ST: linha isoelétrica entre o fim da onda S e o início da onda T, correspondendo à fase 2 de platô sustentado do potencial de ação ventricular (quando todo o ventrículo está homogeneamente despolarizado); 5) ONDA T: repolarização ventricular rápida (fase 3); 6) INTERVALO QT: do início do QRS ao fim da onda T (representa a sístole elétrica ventricular total; corrigido pela fórmula de Bazett, normal < 0,44 s).",
      "keyPoint": "O intervalo PR mede a condução atrioventricular (0,12 a 0,20 s); o segmento ST reflete a fase 2 de platô ventricular; o QRS reflete a despolarização ventricular (< 0,10 s)."
    },
    "berne": {
      "chapter": "Capítulo 15: O Eletrocardiograma e a Teoria do Dipolo Vetorial de Einthoven",
      "pages": "pp. 258-278",
      "summary": "Berne & Levy detalha o Triângulo de Einthoven e as derivações do plano frontal (bipolares I, II, III e unipolares aumentadas aVR, aVL, aVF) e horizontal (precordiais V1 a V6). Um vetor elétrico que se propaga em direção ao polo positivo de uma derivação gera uma deflexão POSITIVA para cima; se propaga afastando-se do polo positivo, gera deflexão NEGATIVA para baixo; se propaga perpendicularmente, gera deflexão ISODIFÁSICA bifásica. A onda T é normalmente positiva nas mesmas derivações em que o QRS é positivo porque a repolarização ventricular progride do epicárdio para o endocárdio (sentido inverso ao da despolarização), gerando um vetor com o polo positivo apontado para o eletrodo.",
      "keyPoint": "A onda T é concordante com o QRS porque o epicárdio repolariza antes do endocárdio, invertendo a direção do dipolo da repolarização."
    },
    "costanzo": {
      "chapter": "Capítulo 3: O Eletrocardiograma e Correlações Eletrofisiológicas",
      "pages": "pp. 138-146",
      "summary": "Costanzo estabelece o pareamento exato entre as fases do potencial de ação celular miocárdico e o ECG de superfície: 1) Fase 0 (despolarização rápida por Na+) -> Complexo QRS; 2) Fase 2 (platô com influxo de Ca2+ balanceado pelo efluxo de K+) -> Segmento ST isoelétrico; 3) Fase 3 (repolarização rápida por efluxo de K+) -> Onda T; 4) Fase 4 (potencial de repouso isoelétrico) -> Linha de base TP. Destaca as alterações eletrolíticas: HIPERCALEMIA gera ondas T apiculadas e simétricas (\"em tenda\") e perda de ondas P; HIPOCALEMIA gera ondas T achatadas, infradesnivelamento de ST e o aparecimento de Onda U proeminente.",
      "keyPoint": "Segmento ST isoelétrico = fase 2 de platô ventricular. Isquemia miocárdica desequilibra esse platô e causa desnível de ST."
    },
    "specialistSource": {
      "chapter": "Ganong — Fisiologia Médica — Capítulo 28: Eletrocardiografia e Isquemia Miocárdica",
      "pages": "pp. 530-548",
      "summary": "Ganong analisa a corrente de lesão na isquemia transmural: miócitos isquêmicos sem ATP não conseguem manter o potencial de repouso normal, permanecendo parcialmente despolarizados e gerando um vetor de corrente contínua entre a área isquêmica e o tecido normal circundante, o que se traduz no traçado do ECG como SUPRADESNIVELAMENTO DO SEGMENTO ST (IAM com supra de ST - IAMCSST), marcador mandatório de reperfusão coronariana de emergência.",
      "keyPoint": "Supradesnivelamento do segmento ST reflete corrente de lesão transmural aguda por oclusão coronariana total."
    },
    "openstax": {
      "section": "Chapter 19: The Heart — Section 19.2: Electrocardiogram",
      "summary": "OpenStax ilustra o papel milimetrado padronizado de ECG: cada quadradinho pequeno mede 1 mm x 1 mm (0,04 segundos no eixo horizontal e 0,1 mV no eixo vertical na velocidade padrão de 25 mm/s e calibração de 10 mm/mV).",
      "keyPoint": "Na velocidade padrão de 25 mm/s: 1 quadradinho pequeno = 0,04 s; 1 quadrado grande (5 pequenos) = 0,20 s."
    },
    "merck": {
      "section": "Cardiologia — Síndromes Coronarianas Agudas e Arritmias Ventriculares no ECG",
      "summary": "O Manual MSD discute o diagnóstico diferencial no ECG de dor torácica aguda: diferenciação entre IAMCSST (angioplastia primária em < 90 minutos), IAM sem supra de ST (infradesnível de ST ou inversão de onda T) e pericardite aguda (supradesnível de ST difuso com concavidade para cima e infradesnível de PR).",
      "keyPoint": "Infradesnível do segmento PR associado a supra de ST côncavo generalizado é patognomônico de pericardite aguda."
    },
    "researchTopics": [
      {
        "title": "Intervalo PR e Tempo de Trânsito Atrioventricular",
        "concept": "Medição da latência de condução desde a primeira despolarização atrial até o início da ativação dos miócitos ventriculares basais, variando normalmente de 0,12 a 0,20 segundos.",
        "formulaOrLaw": "PR Normal: 120 a 200 ms (3 a 5 quadradinhos de 1 mm a 25 mm/s)",
        "keyReference": "Guyton & Hall, Cap. 11",
        "query": "pr interval atrioventricular conduction electrocardiogram normal limits"
      },
      {
        "title": "Segmento ST Isoelétrico e Fase 2 de Platô Miocárdico",
        "concept": "Correspondência biofísica exata entre o equilíbrio iônico de influxo de cálcio por canais tipo L e efluxo de potássio na fase 2 e a ausência de gradientes de voltagem no eletrocardiograma.",
        "formulaOrLaw": "Segmento ST Isoelétrico = Gradiente de Voltagem Transventricular Nulo (Fase 2)",
        "keyReference": "Costanzo, Cap. 3",
        "query": "st segment isoelectric plateau phase 2 ventricular action potential"
      },
      {
        "title": "Teoria do Dipolo de Einthoven e Gênese da Onda T",
        "concept": "Propagação vetorial do dipolo elétrico no plano frontal e horizontal: por que a repolarização epicárdica precoce preserva a mesma polaridade positiva da onda T e do QRS.",
        "formulaOrLaw": "Einthoven: Derivação II = Derivação I + Derivação III",
        "keyReference": "Berne & Levy, Cap. 15",
        "query": "einthoven triangle vector dipole theory t wave concordance ventricular repolarization"
      },
      {
        "title": "Corrente de Lesão Isquêmica e Supradesnível de ST",
        "concept": "Despolarização diastólica persistente de miócitos isquêmicos depletados de ATP, gerando gradiente de voltagem contínuo de repouso expresso no ECG como desvio de ST.",
        "formulaOrLaw": "Corrente de Lesão Miocárdica Transmural -> Supradesnivelamento de ST no ECG",
        "keyReference": "Ganong, Cap. 28",
        "query": "current of injury st elevation myocardial infarction ischemia transmembrane potential"
      }
    ]
  },
  {
    "topicName": "Ciclo Cardíaco e Valvas",
    "phaseId": "w3_p4",
    "level": 16,
    "worldId": "w3",
    "category": "Sistema Cardiovascular",
    "phaseTitle": "Ciclo Cardíaco & Dinâmica Valvar",
    "aliases": [
      "Ciclo Cardíaco",
      "Fases do Ciclo Cardíaco",
      "Bulhas Cardíacas",
      "Diagrama de Wiggers",
      "Contração Isovolumétrica"
    ],
    "specialistTitle": "Costanzo & Boron",
    "specialistBadge": "Mecânica Ventricular",
    "guyton": {
      "chapter": "Unidade III — Capítulo 9: O Músculo Cardíaco; O Coração como Bomba e a Função das Valvas Cardíacas",
      "pages": "pp. 103-116",
      "summary": "O Ciclo Cardíaco é a sequência integrada de eventos elétricos, mecânicos, pressóricos, volumétricos e sonoros que ocorrem a cada batimento cardíaco, composto por duas fases primárias: SÍSTOLE (contração e ejeção ventricular) e DIÁSTOLE (relaxamento e enchimento ventricular). É dividido classicamente em 7 fases descritas no célebre DIAGRAMA DE WIGGERS: 1) Sístole Atrial (\"chute atrial\", contribui com 15-20% do volume ventricular de repouso); 2) Contração Ventricular Isovolumétrica: inicia com o FECHAMENTO DAS VALVAS ATRIOVENTRICULARES (Mitral e Tricúspide), que produz a PRIMEIRA BULHA CARDÍACA (B1 - \"tum\"). Como as valvas semilunares aórtica e pulmonar ainda estão fechadas, os ventrículos contraem-se como câmaras fechadas: a pressão intraventricular dispara verticalmente (de 10 para 80 mmHg no VE) sem nenhuma mudança no volume de sangue contido; 3) Ejeção Rápida (quando a pressão ventricular esquerda supera a pressão diastólica da aorta de 80 mmHg, a valva aórtica se abre abruptamente e o sangue é ejetado); 4) Ejeção Reduzida; 5) Relaxamento Ventricular Isovolumétrico: inicia quando a pressão aórtica supera a pressão ventricular e o sangue reflui ligeiramente, gerando o FECHAMENTO DAS VALVAS SEMILUNARES (Aórtica e Pulmonar), que produz a SEGUNDA BULHA CARDÍACA (B2 - \"tá\"). Todas as quatro valvas cardíacas voltam a estar simultaneamente fechadas e a pressão ventricular despenca; 6) Enchimento Ventricular Rápido (abertura da mitral e influxo passivo maciço); 7) Enchimento Reduzido (diástase).",
      "keyPoint": "B1 (\"tum\") é produzida pelo fechamento das valvas mitral e tricúspide no início da contração isovolumétrica; B2 (\"tá\") pelo fechamento das semilunares no início do relaxamento isovolumétrico."
    },
    "berne": {
      "chapter": "Capítulo 18: Mecânica Cardíaca e a Curva Pressão-Volume Ventricular",
      "pages": "pp. 330-348",
      "summary": "Berne & Levy detalha a Alça Pressão-Volume Ventricular Esquerda (curva PV): 1) VDF (Volume Diastólico Final, ~120 mL): volume de sangue no ventrículo logo antes do início da sístole; 2) VSF (Volume Sistólico Final, ~50 mL): volume de sangue remanescente que sobra no ventrículo ao final da ejeção sistólica; 3) VOLUME SISTÓLICO (VS = VDF - VSF ≈ 70 mL): o volume efetivamente ejetado na aorta a cada batimento; 4) FRAÇÃO DE EJEÇÃO (FE = VS / VDF = 70 / 120 ≈ 58-60%, normal entre 55% e 70%). O ventrículo sadio NUNCA se esvazia totalmente.",
      "keyPoint": "Fração de Ejeção normal = 55% a 70%. Fração de Ejeção < 40% define Insuficiência Cardíaca com Fração de Ejeção Reduzida (ICFER)."
    },
    "costanzo": {
      "chapter": "Capítulo 3: Eventos do Ciclo Cardíaco e as Quatro Bulhas",
      "pages": "pp. 146-154",
      "summary": "Costanzo detalha a fisiologia das bulhas acústicas: B1 (fechamento mitral/tricúspide, melhor audível no ápice cardíaco); B2 (fechamento aórtico/pulmonar, melhor audível na base; exibe desdobramento fisiológico na inspiração porque a maior pressão intratorácica negativa eleva o retorno venoso direito, atrasando o fechamento da valva pulmonar P2); B3 (Terceira Bulha, proto-diastólica: vibração rápida das paredes ventriculares durante o enchimento rápido passivo; pode ser normal em crianças e atletas, mas em adultos indica sobrecarga de volume ventricular na insuficiência cardíaca); B4 (Quarta Bulha, pré-sistólica: vibração provocada pela contração atrial contra um ventrículo hipertrófico e rígido de baixa complacência; sempre patológica).",
      "keyPoint": "O desdobramento fisiológico de B2 na inspiração decorre do retardo no fechamento da valva pulmonar provocado pelo aumento do retorno venoso às câmaras direitas."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 22: Acoplamento Excitação-Contração Miocárdico",
      "pages": "pp. 510-532",
      "summary": "Boron explica o mecanismo de Liberação de Cálcio Induzida por Cálcio (CICR): o potencial de ação ventricular despolariza os túbulos T, abrindo canais de cálcio voltagem-dependentes Cav1.2 tipo L (receptores DHPR); o influxo de uma pequena quantidade de cálcio \"gatilho\" ativa os canais receptores de rianodina (RyR2) na membrana do retículo sarcoplasmático (RS), liberando uma enxurrada massiva de Ca2+ estocado no sarcoplasma para ativar a troponina C e disparar o golpe de força da actina-miosina. Na diástole, o relaxamento ativo requer o bombeamento do cálcio de volta ao RS pela bomba SERCA2a (regulada pelo fosfolamban) e para fora da célula pelo trocador NCX.",
      "keyPoint": "O relaxamento ventricular na diástole é um processo ativo dependente de ATP (requer que a bomba SERCA2a recapte o cálcio para o retículo)."
    },
    "openstax": {
      "section": "Chapter 19: The Heart — Section 19.3: Cardiac Cycle",
      "summary": "OpenStax correlaciona o traçado elétrico do ECG com o ciclo mecânico: a onda P precede a sístole atrial; o QRS precede imediatamente a contração isovolumétrica e B1; a onda T precede o relaxamento isovolumétrico e B2.",
      "keyPoint": "O evento elétrico sempre antecede o evento mecânico correspondente em alguns milissegundos."
    },
    "merck": {
      "section": "Valvopatias Cardíacas — Estenose Aórtica, Insuficiência Mitral e Sopros",
      "summary": "O Manual MSD classifica os sopros cardíacos no ciclo: Estenose Aórtica (sopro sistólico ejetivo em diamante, crescendo-decrescendo); Insuficiência Mitral (sopro holossistólico em platô que irradia para a axila); Estenose Mitral (ruflar diastólico com estalido de abertura pós-B2); Insuficiência Aórtica (sopro diastólico aspirativo decrescente com pressão de pulso divergente).",
      "keyPoint": "Sopro sistólico entre B1 e B2 reflete estenose aórtica ou insuficiência mitral; sopro diastólico entre B2 e B1 indica estenose mitral ou insuficiência aórtica."
    },
    "researchTopics": [
      {
        "title": "Fases Isovolumétricas da Sístole e Diástole",
        "concept": "Etapas de transição funcional nas quais as 4 valvas cardíacas estão simultaneamente ocluídas: a pressão intraventricular varia drasticamente sem alteração no volume de sangue cavitário.",
        "formulaOrLaw": "Contração Isovolumétrica: Mitral Fechada + Aórtica Fechada -> dP/dt Máximo",
        "keyReference": "Guyton & Hall, Cap. 9",
        "query": "isovolumetric contraction relaxation cardiac cycle wiggers diagram intraventricular pressure"
      },
      {
        "title": "Curva Pressão-Volume (Loop PV) e Fração de Ejeção",
        "concept": "Representação geométrica do trabalho sistólico ventricular mapeando os pontos de abertura e fechamento valvar, volumes diastólico e sistólico final e complacência miocárdica.",
        "formulaOrLaw": "Fração de Ejeção: FE = (VDF - VSF) / VDF * 100% (Normal: 55 a 70%)",
        "keyReference": "Berne & Levy, Cap. 18",
        "query": "pressure volume loop end diastolic volume stroke volume ejection fraction"
      },
      {
        "title": "Mecanismo de Gênese das Bulhas B1, B2, B3 e B4",
        "concept": "Vibrações mecânicas teciduais decorrentes da desaceleração abrupta do fluxo sanguíneo contra valvas ocluídas (B1 e B2) e turbilhonamento durante o enchimento ventricular (B3 e B4).",
        "formulaOrLaw": "B1 (Fechamento AV) -> Sístole -> B2 (Fechamento Semilunar) -> Diástole",
        "keyReference": "Costanzo, Cap. 3",
        "query": "heart sounds s1 s2 s3 s4 physiological splitting aortic pulmonary valve"
      },
      {
        "title": "Acoplamento Excitação-Contração e Receptor RyR2 (CICR)",
        "concept": "Mecanismo molecular no qual o influxo de cálcio via canais tipo L despolarizados deflagra a abertura amplificada de receptores de rianodina e liberação de cálcio do retículo sarcoplasmático.",
        "formulaOrLaw": "Liberação de Cálcio Induzida por Cálcio: Ca2+_influxo -> RyR2 -> Liberação Ca2+_RS",
        "keyReference": "Boron & Boulpaep, Cap. 22",
        "query": "excitation contraction coupling calcium induced calcium release ryanodine receptor serca"
      }
    ]
  },
  {
    "topicName": "Débito Cardíaco e Frank-Starling",
    "phaseId": "w3_p5",
    "level": 17,
    "worldId": "w3",
    "category": "Sistema Cardiovascular",
    "phaseTitle": "Débito Cardíaco & Frank-Starling",
    "aliases": [
      "Débito Cardíaco",
      "Lei de Frank-Starling",
      "Pré-Carga",
      "Pós-Carga",
      "Contratilidade"
    ],
    "specialistTitle": "Berne & Levy",
    "specialistBadge": "Mecânica Cardiovascular",
    "guyton": {
      "chapter": "Unidade IV — Capítulos 20 e 21: Débito Cardíaco, Retorno Venoso e sua Regulação",
      "pages": "pp. 241-260",
      "summary": "O Débito Cardíaco (DC) é o volume total de sangue bombeado por cada ventrículo na circulação por minuto, sendo o produto da Frequência Cardíaca (FC) pelo Volume Sistólico (VS): DC = FC * VS. Em um adulto jovem sadio em repouso: DC = 72 bpm * 70 mL ≈ 5,0 L/min (Índice Cardíaco ≈ 3,0 L/min/m²). Em exercício físico vigoroso, o DC pode subir para 20 a 25 L/min em indivíduos normais e até 35 L/min em atletas de elite. O Volume Sistólico é governado por três determinantes independentes e interconectados: 1) PRÉ-CARGA (o estiramento das fibras miocárdicas ao final da diástole imposto pelo Volume Diastólico Final); 2) PÓS-CARGA (a tensão parietal ou carga contra a qual o miócito ventricular deve contrair-se para ejetar o sangue, determinada principalmente pela pressão arterial aórtica e resistência vascular periférica); 3) CONTRATILIDADE ou Inotropismo (a força intrínseca de contração do miocárdio para um determinado comprimento inicial de fibra, governada pela disponibilidade de Ca2+ citosólico estimulada pelo sistema simpático).",
      "keyPoint": "Débito Cardíaco = FC x VS (~5 L/min no repouso). O volume sistólico depende do trio: Pré-Carga, Pós-Carga e Contratilidade."
    },
    "berne": {
      "chapter": "Capítulo 18: Mecanismo de Frank-Starling e Curva de Função Ventricular",
      "pages": "pp. 336-352",
      "summary": "Berne & Levy enuncia com precisão a Lei de Frank-Starling do coração: dentro de limites fisiológicos normais, quanto maior o estiramento inicial das fibras ventriculares pelo volume de sangue no final da diástole (VDF), maior é a força mecânica de contração sistólica subsequente e maior o volume de sangue ejetado. As bases celulares e moleculares do Frank-Starling incluem: 1) Otimização da sobreposição entre os filamentos grossos de miosina e filamentos finos de actina no sarcômero (comprimento ideal do sarcômero de 2,2 μm); 2) Aumento da sensibilidade da Troponina C ao Cálcio ionizado decorrente do estiramento longitudinal (mecanossensibilidade molecular que diminui o espaçamento lateral interfilamentar).",
      "keyPoint": "A Lei de Frank-Starling garante que o débito do ventrículo esquerdo iguale exatamente o débito do ventrículo direito a cada minuto, impedindo congestão pulmonar ou sistêmica."
    },
    "costanzo": {
      "chapter": "Capítulo 3: Fisiologia Cardiovascular — Fatores que Afetam o Volume Sistólico",
      "pages": "pp. 154-162",
      "summary": "Costanzo sintetiza o efeito das variáveis na Curva de Frank-Starling (relação VDF vs. Volume Sistólico / Pressão): 1) Aumento da Contratilidade (Inotropismo positivo por estimulação simpática beta-1 ou digitálicos): translada a curva de função ventricular para CIMA e para a ESQUERDA (ejeta mais sangue para o mesmo VDF, elevando a fração de ejeção); 2) Depressão da Contratilidade (Insuficiência Cardíaca, hipóxia ou betabloqueadores): translada a curva para BAIXO e para a DIREITA (ejeta menos sangue e opera sob pressões diastólicas congestivas elevadas); 3) Aumento da Pós-Carga (estenose aórtica ou crise hipertensiva aguda): reduz o volume sistólico e aumenta o volume sistólico final residual.",
      "keyPoint": "Inotropismo positivo translada a curva de Starling para cima e esquerda; insuficiência cardíaca deprime a curva para baixo e direita."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 23: Regulação Integrada do Débito Cardíaco e Princípio de Fick",
      "pages": "pp. 535-555",
      "summary": "Boron detalha o Princípio de Fick para medição padrão-ouro do Débito Cardíaco in vivo: DC = VO2 / (CaO2 - CvO2), onde VO2 é o consumo corporal de oxigênio (mL/min), CaO2 o conteúdo de O2 do sangue arterial e CvO2 o conteúdo de O2 do sangue venoso misto na artéria pulmonar coletado por cateter de Swan-Ganz. Demonstra o diagrama de Guyton de acoplamento vascular: o ponto de equilíbrio operacional da circulação é a interseção exata entre a curva de função cardíaca de Starling e a curva de retorno venoso vascular.",
      "keyPoint": "Pelo Princípio de Fick: Débito Cardíaco = Consumo de O2 / Diferença Arteriovenosa de O2 (DC = VO2 / [CaO2 - CvO2])."
    },
    "openstax": {
      "section": "Chapter 19: The Heart — Section 19.4: Cardiac Physiology",
      "summary": "OpenStax ilustra o mecanismo de Starling no coração sadio e no coração dilatado de um paciente com miocardiopatia, onde o estiramento excessivo desengata a actina da miosina, derrubando a força contrátil.",
      "keyPoint": "O estiramento excessivo patológico das fibras miocárdicas além do comprimento ideal de 2,2 μm reduz o número de pontes cruzadas e causa falência de bomba."
    },
    "merck": {
      "section": "Cardiologia — Insuficiência Cardíaca Descompensada e Tratamento Farmacológico",
      "summary": "O Manual MSD correlaciona a pré-carga e a pós-carga no manejo da Insuficiência Cardíaca Congestiva (ICC): diuréticos de alça (furosemida) e nitratos reduzem a pré-carga excessiva, aliviando o edema pulmonar e a ortopneia; vasodilatadores arteriolares (hidralazina, inibidores da ECA) reduzem a pós-carga aórtica, aumentando o volume sistólico ejetado sem elevar o consumo miocárdico de oxigênio.",
      "keyPoint": "Reduzir a pós-carga com vasodilatadores permite ao ventrículo com insuficiência ejetar maior volume sistólico com menor esforço mecânico."
    },
    "researchTopics": [
      {
        "title": "Lei de Frank-Starling e Comprimento Sarcocelular",
        "concept": "Adaptação intrínseca heterométrica na qual o aumento da pré-carga diastólica alinha otimamente os filamentos de actina e miosina a 2,2 μm e aumenta a afinidade da troponina C ao cálcio.",
        "formulaOrLaw": "Força Contrátil ∝ Estiramento Diastólico das Fibras Ventriculares",
        "keyReference": "Guyton & Hall, Cap. 9",
        "query": "frank starling law mechanism length tension sarcomere cardiac muscle"
      },
      {
        "title": "Determinantes do Volume Sistólico: Pré-Carga, Pós-Carga e Inotropismo",
        "concept": "Interação hemodinâmica tripartite que governa o volume ejetado pelo ventrículo em cada ciclo e sua modulação por volume intravascular, tônus simpático e resistência aórtica.",
        "formulaOrLaw": "VS = VDF - VSF (Influenciado por Pré-Carga ↑, Pós-Carga ↓ e Inotropismo ↑)",
        "keyReference": "Costanzo, Cap. 3",
        "query": "stroke volume preload afterload inotropy ventricular performance"
      },
      {
        "title": "Equação de Fick para Medição do Débito Cardíaco",
        "concept": "Aplicação da conservação de massa do oxigênio molecular na circulação sistêmica para quantificação do débito cardíaco por cateterismo arterial e venoso misto.",
        "formulaOrLaw": "DC = Consumo Total de O2 (VO2) / (CaO2 - CvO2)",
        "keyReference": "Boron & Boulpaep, Cap. 23",
        "query": "fick principle cardiac output oxygen consumption arteriovenous oxygen difference"
      },
      {
        "title": "Curva de Guyton de Acoplamento Cardíaco-Vascular",
        "concept": "Equilíbrio mecânico entre a curva de função de bomba ventricular e a curva de complacência de retorno venoso sistêmico na determinação da pressão venosa central e débito.",
        "formulaOrLaw": "Ponto Operacional da Circulação: Retorno Venoso = Débito Cardíaco",
        "keyReference": "Guyton & Hall, Cap. 20",
        "query": "guyton venous return curve cardiac function vascular function equilibrium"
      }
    ]
  },
  {
    "topicName": "Barorreflexo e Regulação da PA",
    "phaseId": "w3_p6",
    "level": 18,
    "worldId": "w3",
    "category": "Sistema Cardiovascular",
    "phaseTitle": "Barorreflexo & Regulação da Pressão Arterial",
    "aliases": [
      "Barorreflexo",
      "Controle Rápido da Pressão Arterial",
      "Seio Carotídeo",
      "Receptores de Estiramento",
      "Hipotensão Postural"
    ],
    "specialistTitle": "Ganong & Costanzo",
    "specialistBadge": "Controle Neural Autonômico",
    "guyton": {
      "chapter": "Unidade IV — Capítulo 18: Regulação Nervosa da Circulação e Controle Rápido da Pressão Arterial",
      "pages": "pp. 215-228",
      "summary": "A Pressão Arterial Média (PAM ≈ Pressão Diastólica + 1/3 da Pressão de Pulso) é o produto do Débito Cardíaco pela Resistência Periférica Total: PAM = DC * RPT. O organismo dispõe de sistemas de controle temporalmente escalonados: regulação em segundos (sistema neural por reflexos barorreceptores e quimiorreceptores), regulação em minutos a horas (sistema renina-angiotensina-aldosterona e vasopressina/ADH) e regulação em dias a longo prazo (balanço renal de sódio e água pelo mecanismo de natriurese e diurese por pressão). A ALÇA DO BARORREFLEXO ARTERIAL é o mecanismo mestre de controle rápido: mecanorreceptores de estiramento nas paredes do Seio Carotídeo (inervados pelo Nervo Glossofaríngeo, NC IX - nervo de Hering) e do Arco Aórtico (inervados pelo Nervo Vago, NC X) monitoram a pressão pulsátil e a PAM segundo a segundo. Quando a PAM se eleva, a distensão da parede vascular abre mecanocanais, aumentando a frequência de disparos aferentes em direção ao Núcleo do Trato Solitário (NTS) no bulbo cerebral.",
      "keyPoint": "O barorreflexo é o amortecedor de curto prazo da pressão arterial: elevações de PA aumentam os disparos aferentes ao bulbo, que estimula o tônus vagal e inibe o simpático."
    },
    "berne": {
      "chapter": "Capítulo 19: Controle Neural da Circulação Sistêmica e o Núcleo do Trato Solitário",
      "pages": "pp. 355-374",
      "summary": "Berne & Levy detalha a circuitaria sináptica bulbar: os sinais aferentes do NC IX e X ativam neurônios glutamatérgicos no Núcleo do Trato Solitário (NTS). O NTS envia projeções excitatórias para: 1) O Núcleo Ambíguo e Núcleo Motor Dorsal do Vago (ativação parassimpática parassimpática eferente para o nó SA, liberando acetilcolina e reduzindo a frequência cardíaca); 2) A Área Ventrolateral Caudal (CVLM), que por sua vez envia projeções inibitórias GABAérgicas para a Área Ventrolateral Rostral (RVLM). Como a RVLM é a fonte dos neurônios pré-ganglionares simpáticos vasoconstritores, sua inibição deprime o tônus simpático periférico, promovendo vasodilatação arteriolar sistêmica e venodilatação.",
      "keyPoint": "A ativação do NTS pelo barorreflexo excita neurônios inibitórios da CVLM, silenciando o centro simpático vasomotor RVLM e reduzindo a RPT."
    },
    "costanzo": {
      "chapter": "Capítulo 3: Fisiologia da Regulação Arterial e Resposta ao Ortostatismo",
      "pages": "pp. 162-170",
      "summary": "Costanzo explica a clássica Resposta ao Ortostatismo (mudança abrupta da posição deitada para a em pé): 1) A gravidade desloca passivamente 500 a 800 mL de sangue para as veias dos membros inferiores; 2) O retorno venoso ao átrio direito cai abruptamente, reduzindo a pressão venosa central, o VDF e o débito cardíaco; 3) A PAM cai transientemente; 4) Menor estiramento dos barorreceptores reduz seus disparos aferentes para o NTS; 5) O bulbo desinibe o sistema simpático e reduz o tônus parassimpático; 6) RESPOSTA EFERENTE REFLEXA IMEDIATA: taquicardia reflexa (aumento da FC), aumento da contratilidade miocárdica (aumento do VS), vasoconstrição arteriolar esplâncnica e muscular (aumento da RPT) e venoconstrição (aumento do retorno venoso), restaurando a pressão arterial e prevenindo a isquemia cerebral transitória e a síncope.",
      "keyPoint": "Ao ficar em pé: a queda do retorno venoso reduz os disparos do barorreceptor, desinibindo o simpático para gerar taquicardia e vasoconstrição reflexas em 2 segundos."
    },
    "specialistSource": {
      "chapter": "Ganong — Fisiologia Médica — Capítulo 33: Regulação Cardiovascular Central e Resetting Barorreceptor",
      "pages": "pp. 630-650",
      "summary": "Ganong explica o fenômeno do \"Resetting\" (Reajuste) dos Barorreceptores: os barorreceptores adaptam-se rapidamente e reajustam seu ponto de disparo em 24 a 48 horas de pressão cronicamente alterada. Em um paciente que se torna cronicamente hipertenso (PAM de 140 mmHg), os barorreceptores passam a reconhecer os 140 mmHg como sua \"nova linha de base normal\", disparando suas respostas como se essa pressão alta fosse a correta. Por essa razão, os barorreceptores NÃO curam nem revertem a hipertensão crônica mantida, sendo um sistema estritamente regulador de curto prazo.",
      "keyPoint": "Os barorreceptores sofrem \"resetting\" em 1 a 2 dias de hipertensão contínua, sendo incapazes de controlar a pressão arterial a longo prazo."
    },
    "openstax": {
      "section": "Chapter 20: Blood Vessels — Section 20.4: Homeostatic Regulation of the Vascular System",
      "summary": "OpenStax ilustra o trajeto das vias aferentes dos barorreceptores carotídeos (nervo de Hering, ramo do glossofaríngeo) e aórticos (nervo vago) convergindo para a medula oblonga (bulbo).",
      "keyPoint": "O seio carotídeo é sensível tanto a elevações quanto a quedas na PA; o arco aórtico responde primariamente a elevações pressóricas."
    },
    "merck": {
      "section": "Cardiologia — Hipotensão Ortostática, Síncope Vasovagal e Disautonomias",
      "summary": "O Manual MSD aborda o diagnóstico da Hipotensão Postural (queda na PAS ≥ 20 mmHg ou na PAD ≥ 10 mmHg dentro de 3 minutos após ficar em pé): falha do arco reflexo barorreceptor (neuropatia autonômica diabética, idosos acamados, hipovolemia ou uso de vasodilatadores e alfabloqueadores). Detalha a Síncope Vasovagal: hiperativação reflexa parassimpática paradoxal provocando bradicardia intensa e vasodilatação com perda transitória da consciência.",
      "keyPoint": "Na síncope vasovagal, um estímulo emocional ou ortostático prolongado dispara descarga vagal paradoxal com bradicardia e hipotensão abruptas."
    },
    "researchTopics": [
      {
        "title": "Mecanotransdução no Seio Carotídeo e Nervo de Hering",
        "concept": "Ativação de canais iônicos mecano-sensíveis Piezo1 e Piezo2 nas terminações nervosas livres da adventícia do seio carotídeo em resposta à deformação elástica circunferencial da parede arterial.",
        "formulaOrLaw": "Frequência de Disparos Aferentes (Hz) ∝ PAM e dP/dt (Taxa de Variação Pressórica)",
        "keyReference": "Guyton & Hall, Cap. 18",
        "query": "carotid sinus baroreceptors mechanotransduction piezo channels hering nerve"
      },
      {
        "title": "Circuitaria Bulbar NTS-CVLM-RVLM",
        "concept": "Integração neuroquímica no tronco encefálico no qual a excitação glutamatérgica do NTS aciona interneurônios inibitórios GABAérgicos na CVLM que suprimem a atividade simpática basal da RVLM.",
        "formulaOrLaw": "NTS (+ Glu) -> CVLM (+ GABA) -> Inibição da RVLM -> ↓ Eferência Simpática",
        "keyReference": "Berne & Levy, Cap. 19",
        "query": "nucleus tractus solitarius cvlm rvlm baroreflex central pathways gaba"
      },
      {
        "title": "Fisiologia do Ortostatismo e Prevenção de Síncope",
        "concept": "Compensação hemodinâmica imediata à redução de retorno venoso gravitacional via desinibição simpática, elevando frequência cardíaca, volume sistólico e tônus arteriolar.",
        "formulaOrLaw": "Ortostatismo -> ↓ Retorno Venoso -> ↓ Disparo Barorreceptor -> ↑ Tônus Simpático Imediato",
        "keyReference": "Costanzo, Cap. 3",
        "query": "orthostatic stress compensation venous pooling baroreflex response syncope"
      },
      {
        "title": "Resetting Barorreceptor e Limitações no Longo Prazo",
        "concept": "Adaptação temporal dos mecanorreceptores e vias sinápticas centrais após 24-48 horas de hipertensão contínua, deslocando o ponto de ajuste operacional para patamares elevados.",
        "formulaOrLaw": "Resetting Agudo e Crônico: Deslocamento do Set-Point Pressórico para Cima",
        "keyReference": "Ganong, Cap. 33",
        "query": "baroreceptor resetting chronic hypertension long term blood pressure control"
      }
    ]
  },
  {
    "topicName": "Mecânica Ventilatória e Pressões",
    "phaseId": "w4_p1",
    "level": 19,
    "worldId": "w4",
    "category": "Sistema Respiratório",
    "phaseTitle": "Mecânica Ventilatória & Lei de Boyle",
    "aliases": [
      "Mecânica Ventilatória",
      "Lei de Boyle",
      "Músculos da Respiração",
      "Pressão Alveolar"
    ],
    "specialistTitle": "John B. West",
    "specialistBadge": "Fisiologia Respiratória de West",
    "guyton": {
      "chapter": "Unidade VII: Respiração — Capítulo 38: Ventilação Pulmonar",
      "pages": "pp. 497-508",
      "summary": "A ventilação pulmonar é o processo mecânico cíclico de renovação gasosa nos alvéolos impulsionado por gradientes de pressão gerados pela contração dos músculos esqueléticos respiratórios. É regida pela LEI DE BOYLE-MARIOTTE: para uma quantidade fixa de gás mantida a temperatura constante, a pressão de um gás é inversamente proporcional ao volume de seu compartimento (P1 * V1 = P2 * V2). A INSPIRAÇÃO é um processo ATIVO: o diafragma contrai-se e descende seu platô tendíneo (responsável por 75% da expansão torácica basal), enquanto os músculos intercostais externos contraem-se elevando as costelas (\"movimento em alça de balde\" no sentido transversal e \"braço de bomba\" no sentido anteroposterior). A expansão da caixa torácica traciona a pleura parietal, tornando a pressão intrapleural mais negativa (de -5 para -8 cmH2O), expandindo os pulmões: o volume alveolar aumenta e a pressão alveolar cai de 0 para -1 cmH2O em relação à atmosfera, gerando gradiente que aspira o ar para dentro. A EXPIRAÇÃO em repouso é um processo PASSIVO: decorre do recolhimento elástico espontâneo dos pulmões e relaxamento diafragmático.",
      "keyPoint": "A inspiração basal é ativa (diafragma e intercostais externos); a expiração basal é passiva, decorrente unicamente do recolhimento elástico pulmonar."
    },
    "berne": {
      "chapter": "Capítulo 21: Mecânica Respiratória e Gradientes de Pressão Transpulmonar",
      "pages": "pp. 378-395",
      "summary": "Berne & Levy detalha as pressões do ciclo ventilatório: 1) Pressão Atmosférica (Patm = 0 cmH2O como referência ao nível do mar); 2) Pressão Alveolar (Palv: varia de -1 cmH2O na inspiração a +1 cmH2O na expiração; torna-se zero no final da inspiração e final da expiração quando o fluxo cessa momentaneamente); 3) PRESSÃO TRANSPULMONAR (Ptp = Palv - Pip): a diferença entre a pressão alveolar e a pressão intrapleural. Como Pip é sempre negativa em relação a Palv, Ptp é sempre positiva (+5 a +8 cmH2O), representando a pressão de distensão transmural transmural que mantém os pulmões abertos contra seu recolhimento elástico natural.",
      "keyPoint": "Pressão Transpulmonar = Palv - Pip. É a força que mantém o parênquima pulmonar insuflado contra a tendência retrátil elástica."
    },
    "costanzo": {
      "chapter": "Capítulo 5: Fisiologia Respiratória — Músculos e Dinâmica das Pressões",
      "pages": "pp. 183-192",
      "summary": "Costanzo detalha os músculos da RESPIRAÇÃO FORÇADA: 1) Músculos Acessórios da Inspiração Forçada (exercício vigoroso, crise de asma): escalenos (elevam a 1ª e 2ª costelas), esternocleidomastóideo (eleva o esterno) e peitorais menores; 2) Músculos da Expiração Ativa Forçada (tosse, fonação, manobra de Valsalva e esforço): MÚSCULOS ABDOMINAIS (reto abdominal, oblíquos interno e externo, transverso do abdome — empurram as vísceras contra o diafragma para cima) e Músculos Intercostais Internos (tracionam as costelas para baixo e para dentro).",
      "keyPoint": "Na respiração forçada ou exercício: a expiração torna-se ativa dependente da contração dos músculos abdominais e intercostais internos."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 7: Mecânica da Respiração",
      "pages": "pp. 95-126",
      "summary": "John B. West analisa a Resistência das Vias Aéreas (Raw): Raw = ΔP / V_ponto. O maior sítio de resistência friccional ao fluxo aéreo no sistema respiratório normal situa-se nos brônquios de médio calibre (4ª a 8ª geração de ramificação brônquica), e NÃO nos bronquíolos terminais. Nos bronquíolos muito finos, a resistência individual é alta, mas como estão dispostos em centenas de milhares de ramificações em PARALELO, a área de secção transversal total combinada é gigantesca (~10.000 cm²), tornando a resistência global das vias aéreas distais extremamente baixa (\"zona silenciosa\" do pulmão).",
      "keyPoint": "A maior resistência ao fluxo de ar localiza-se nos brônquios de médio calibre (4ª a 8ª geração); bronquíolos terminais em paralelo têm área enorme e resistência quase nula."
    },
    "openstax": {
      "section": "Chapter 22: The Respiratory System — Section 22.3: The Process of Breathing",
      "summary": "OpenStax ilustra o mecanismo de Boyle com um êmbolo de seringa e detalha o trajeto das fibras do Nervo Frênico (raízes espinhais cervicais C3, C4, C5) inervando o diafragma (\"C3, C4, C5 keep the diaphragm alive\").",
      "keyPoint": "Lesão medular traumática acima de C3 paralisa o nervo frênico e abole a ventilação espontânea, exigindo suporte ventilatório mecânico imediato."
    },
    "merck": {
      "section": "Pneumologia — Insuficiência Respiratória Aguda e Fadiga Muscular Diafragmática",
      "summary": "O Manual MSD aborda os sinais clínicos de fadiga e falência iminente dos músculos respiratórios em pacientes com exacerbação de DPOC ou asma grave: uso proeminente da musculatura acessória cervical (tiragem de fúrcula e batimento de asa de nariz), respiração paradoxal tóraco-abdominal (o abdome retrai na inspiração quando o diafragma entra em exaustão) e taquipneia superficial ineficaz evoluindo para acidose respiratória hipercápnica.",
      "keyPoint": "Respiração paradoxal tóraco-abdominal indica fadiga diafragmática terminal e risco iminente de parada respiratória."
    },
    "researchTopics": [
      {
        "title": "Lei de Boyle e Ciclo de Pressões na Ventilação",
        "concept": "Aplicação da lei dos gases ideais na caixa torácica: expansão volumétrica torácica gera queda da pressão alveolar abaixo da atmosférica, forçando o fluxo de ar para o interior.",
        "formulaOrLaw": "Lei de Boyle: P1 * V1 = P2 * V2 (T constante) -> Palv = -1 cmH2O na inspiração",
        "keyReference": "Guyton & Hall, Cap. 38",
        "query": "boyle law alveolar pressure intrapleural pressure ventilation mechanics"
      },
      {
        "title": "Pressão Transpulmonar e Recolhimento Elástico",
        "concept": "Gradiente de pressão transmural entre o interior dos alvéolos e a cavidade pleural que sustenta a expansão alveolar contra a tendência centrípeta de colabamento elástico.",
        "formulaOrLaw": "Ptp = Palv - Pip (Sempre positiva em condições fisiológicas)",
        "keyReference": "Berne & Levy, Cap. 21",
        "query": "transpulmonary pressure elastic recoil intrapleural pressure lung compliance"
      },
      {
        "title": "Músculos Respiratórios na Ventilação Basal vs. Forçada",
        "concept": "Diferenciação eletromiográfica da ativação do diafragma na inspiração em repouso versus o recrutamento de músculos abdominais e intercostais internos na expiração forçada ativa.",
        "formulaOrLaw": "Expiração Ativa: Músculos Reto Abdominal, Oblíquos e Transverso",
        "keyReference": "Costanzo, Cap. 5",
        "query": "respiratory muscles diaphragm abdominal muscles forced expiration electromyography"
      },
      {
        "title": "Resistência ao Fluxo e Zona Silenciosa dos Bronquíolos",
        "concept": "Paradoxo de bifurcação brônquica: por que brônquios segmentares concentram a resistência ao fluxo aéreo enquanto os bronquíolos distais em paralelo exibem resistência ínfima.",
        "formulaOrLaw": "Área Seccional Transversal dos Bronquíolos Distais > 10.000 cm²",
        "keyReference": "West, Fisiologia Respiratória, Cap. 7",
        "query": "airway resistance medium sized bronchi silent zone peripheral airways"
      }
    ]
  },
  {
    "topicName": "Complacência e Surfactante",
    "phaseId": "w4_p2",
    "level": 20,
    "worldId": "w4",
    "category": "Sistema Respiratório",
    "phaseTitle": "Pressão Intrapleural & Surfactante",
    "aliases": [
      "Complacência Pulmonar",
      "Surfactante",
      "Lei de Laplace",
      "Pneumotórax",
      "Pneumócitos Tipo II"
    ],
    "specialistTitle": "John B. West",
    "specialistBadge": "Biofísica Alveolar de West",
    "guyton": {
      "chapter": "Unidade VII — Capítulo 38: Complacência Pulmonar, Tensão Superficial e Surfactante",
      "pages": "pp. 500-508",
      "summary": "A COMPLACÊNCIA PULMONAR (distensibilidade) é a variação de volume pulmonar obtida para cada unidade de variação na pressão transpulmonar: C = ΔV / ΔP (em um adulto normal, a complacência pulmonar combinada é de aproximadamente 200 mL/cmH2O). A elastância é o inverso da complacência (tendência de recolhimento). Duas forças geram o recolhimento elástico dos pulmões: 1) Fibras elásticas e colágenas do interstício (1/3 da força retrátil); 2) TENSÃO SUPERFICIAL na interface ar-líquido alveolar (2/3 de toda a força retrátil elástica!). As moléculas de água na superfície interna alveolar exercem forte atração coesiva mútua (pontes de hidrogênio), tentando contrair o alvéolo e expulsar o ar. O SURFACTANTE PULMONAR, sintetizado e secretado pelos PNEUMÓCITOS TIPO II a partir da 24ª-28ª semana de gestação (amadurecendo após a 34ª semana), é uma mistura complexa de fosfolipídios (especialmente a Dipalmitoilfosfatidilcolina - DPPC) e apoproteínas específicas (SP-A, B, C, D) que se intercalam entre as moléculas de água, reduzindo drasticamente a tensão superficial.",
      "keyPoint": "O surfactante reduz a tensão superficial alveolar, impedindo o colapso dos pequenos alvéolos (atelectasia), aumentando a complacência e diminuindo o trabalho respiratório."
    },
    "berne": {
      "chapter": "Capítulo 21: Biofísica da Tensão Superficial e a Lei de Laplace Alveolar",
      "pages": "pp. 382-398",
      "summary": "Berne & Levy formaliza o comportamento alveolar através da LEI DE LAPLACE para esferas: P = (2 * T) / r, onde P é a pressão de colapso intra-alveolar que tende a esvaziar a esfera, T é a tensão superficial na parede e r é o raio do alvéolo. Sem surfactante, a tensão superficial T seria constante em todos os alvéolos; consequentemente, os alvéolos MENORES (com raio r pequeno) desenvolveriam pressões de colapso muito mais elevadas do que os alvéolos maiores, fazendo com que o ar fluísse dos pequenos para os grandes, colapsando completamente os menores (atelectasia em massa). O surfactante resolve esse dilema biofísico: quando o alvéolo se contrai e seu raio diminui, as moléculas de DPPC ficam mais densamente compactadas na superfície, reduzindo a tensão superficial T ainda mais do que a redução de r, igualando as pressões entre alvéolos de diferentes tamanhos e estabilizando a arquitetura pulmonar.",
      "keyPoint": "Pela Lei de Laplace (P = 2T / r), alvéolos menores colapsariam nos maiores; o surfactante reduz T proporcionalmente ao raio r, estabilizando os pequenos alvéolos."
    },
    "costanzo": {
      "chapter": "Capítulo 5: Complacência Pulmonar e Síndrome do Desconforto Respiratório",
      "pages": "pp. 188-196",
      "summary": "Costanzo compara os distúrbios da complacência: 1) Complacência REDUZIDA (pulmão \"duro\", difícil de expandir): Fibrose Pulmonar Idiopática (deposição de colágeno intersticial), edema alveolar e Síndrome do Desconforto Respiratório do Neonato (SDRN); 2) Complacência ELEVADA (pulmão \"mole\", perdeu o recolhimento elástico): Enfisema Pulmonar (destruição das fibras elásticas pela elastase neutrofílica no tabagismo; fácil de inflar, mas colapsa as vias aéreas na expiração). Detalha a SDRN em prematuros: pulmões imaturos sem DPPC colabam na primeira expiração, gerando shunt, hipoxemia profunda e formação de membranas hialinas.",
      "keyPoint": "Fibrose pulmonar = complacência diminuída (pulmão rígido); Enfisema pulmonar = complacência aumentada (perda do recolhimento elástico)."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 7: Tensão Superficial e Estabilidade Alveolar",
      "pages": "pp. 102-118",
      "summary": "John B. West explica o papel protetor do surfactante contra o EDEMA PULMONAR: a tensão superficial elevada atuaria como um vácuo hidrodinâmico aspirando fluido dos capilares para dentro da luz alveolar. Ao manter a tensão superficial alveolar baixa, o surfactante impede a trasudação de líquido capilar. Aborda a física do PNEUMOTÓRAX: a cavidade pleural tem pressão negativa (-5 cmH2O) porque o pulmão puxa para dentro (recolhimento) e a caixa torácica puxa para fora (mola elástica). Se a pleura for perfurada por trauma, o ar entra na cavidade pleural até Pip igualar Patm (0 cmH2O), rompendo a adesão: o pulmão colapsa completamente para seu volume mínimo e a parede torácica expande-se para fora.",
      "keyPoint": "No pneumotórax, o ar entra na cavidade pleural, a pressão intrapleural sobe de -5 para 0 cmH2O e o pulmão colapsa por sua própria retração elástica."
    },
    "openstax": {
      "section": "Chapter 22: The Respiratory System — Section 22.3: Respiratory Mechanics and Surface Tension",
      "summary": "OpenStax detalha a histologia ultraestrutural dos pneumócitos tipo II com seus corpos lamelares de armazenamento de surfactante e a prevenção pré-natal da prematuridade com corticoides (betametasona) para acelerar a maturação pulmonar fetal.",
      "keyPoint": "Administração de corticoide antenatal à gestante acelera a síntese de surfactante e reduz a mortalidade por SDRN neonatal em prematuros."
    },
    "merck": {
      "section": "Neonatologia e Terapia Intensiva — Síndrome do Desconforto Respiratório do Recém-Nascido e SDRA no Adulto",
      "summary": "O Manual MSD detalha a reposição de surfactante exógeno purificado endotraqueal (Curosurf/Survanta) em recém-nascidos prematuros, promovendo reabertura alveolar imediata e redução da necessidade de ventilação invasiva prolongada. Compara com a SDRA no adulto (dano alveolar difuso por sepse).",
      "keyPoint": "Surfactante exógeno administrado diretamente na traqueia salva prematuros revertendo o colapso alveolar em minutos."
    },
    "researchTopics": [
      {
        "title": "Lei de Laplace e Estabilidade Mecânica dos Alvéolos",
        "concept": "Demonstração biofísica de que a compactação da dipalmitoilfosfatidilcolina durante a desinsuflação alveolar reduz a tensão superficial e previne o colapso dos alvéolos pequenos.",
        "formulaOrLaw": "Lei de Laplace: Pressão de Colapso P = (2 * Tensão Superficial) / Raio Alveolar",
        "keyReference": "Berne & Levy, Cap. 21",
        "query": "laplace law alveoli surface tension surfactant dppc stability"
      },
      {
        "title": "Bioquímica da DPPC e Corpos Lamelares dos Pneumócitos II",
        "concept": "Síntese fosfolipídica intracelular, acondicionamento em vesículas lamelares e exocitose do surfactante com proteínas hidrofóbicas SP-B e SP-C para formação da monocamada.",
        "formulaOrLaw": "Dipalmitoilfosfatidilcolina (DPPC) + Apoproteínas SP-A, SP-B, SP-C, SP-D",
        "keyReference": "Guyton & Hall, Cap. 38",
        "query": "dipalmitoylphosphatidylcholine lamellar bodies type ii pneumocytes surfactant proteins"
      },
      {
        "title": "Curva Pressão-Volume Pulmonar e Histerese",
        "concept": "Comportamento viscoelástico do parênquima pulmonar demonstrando que a curva de insuflação exige pressões transpulmonares maiores do que a curva de desinsuflação.",
        "formulaOrLaw": "Complacência: C = ΔV / ΔP (Histerese decorrente do recrutamento e tensão superficial)",
        "keyReference": "Costanzo, Cap. 5",
        "query": "pressure volume curve lung compliance hysteresis surfactant recruitment"
      },
      {
        "title": "Fisiopatologia do Pneumotórax Aberto e Hipertensivo",
        "concept": "Rompimento da pressão intrapleural negativa por comunicação traumática, causando perda do acoplamento mecânico com colapso atelectásico do pulmão afetado.",
        "formulaOrLaw": "Pneumotórax: Pip sobe de -5 para 0 cmH2O -> Ptp cai a zero -> Colapso Pulmonar",
        "keyReference": "West, Fisiologia Respiratória, Cap. 7",
        "query": "pneumothorax intrapleural pressure tension pneumothorax lung collapse"
      }
    ]
  },
  {
    "topicName": "Espirometria e Volumes",
    "phaseId": "w4_p3",
    "level": 21,
    "worldId": "w4",
    "category": "Sistema Respiratório",
    "phaseTitle": "Volumes e Capacidades Pulmonares & Espirometria",
    "aliases": [
      "Espirometria e Volumes Pulmonares",
      "Volume Corrente",
      "Capacidade Vital",
      "Índice de Tiffeneau",
      "Volume Residual"
    ],
    "specialistTitle": "John B. West",
    "specialistBadge": "Espirometria Diagnóstica",
    "guyton": {
      "chapter": "Unidade VII — Capítulo 38: Volumes e Capacidades Pulmonares e Espirometria",
      "pages": "pp. 503-512",
      "summary": "A avaliação funcional da ventilação pulmonar baseia-se na quantificação de quatro volumes elementares independentes e quatro capacidades combinadas: 1) VOLUME CORRENTE (VC ≈ 500 mL): volume de ar inspirado ou expirado a cada ciclo respiratório basal de repouso; 2) VOLUME DE RESERVA INSPIRATÓRIO (VRI ≈ 3.000 mL): volume máximo de ar que pode ser inspirado além do volume corrente normal; 3) VOLUME DE RESERVA EXPIRATÓRIO (VRE ≈ 1.100 mL): volume máximo de ar que pode ser expirado forçadamente ao final de uma expiração normal; 4) VOLUME RESIDUAL (VR ≈ 1.200 mL): volume de ar que permanece nos pulmões mesmo após uma expiração forçada máxima; NUNCA pode ser medido por espirometria simples. As quatro capacidades são: 1) Capacidade Inspiratória (CI = VC + VRI ≈ 3.500 mL); 2) CAPACIDADE RESIDUAL FUNCIONAL (CRF = VRE + VR ≈ 2.300 mL): volume de ar nos pulmões ao final de uma expiração basal normal (quando o recolhimento do pulmão equilibra a expansão da caixa torácica); 3) CAPACIDADE VITAL (CV = VRI + VC + VRE ≈ 4.600 mL); 4) CAPACIDADE PULMONAR TOTAL (CPT = CV + VR ≈ 5.800 mL).",
      "keyPoint": "O Volume Residual (VR) e a Capacidade Residual Funcional (CRF) NÃO podem ser medidos por espirometria comum (exigem pletismografia ou diluição de hélio)."
    },
    "berne": {
      "chapter": "Capítulo 21: Provas de Função Pulmonar e Métodos de Diluição Gasosa",
      "pages": "pp. 380-394",
      "summary": "Berne & Levy detalha a medição do Volume Residual pelo Método de Diluição de Hélio: utiliza-se um gás inerte insolúvel no sangue em circuito fechado (C1 * V1 = C2 * (V1 + CRF)), permitindo o cálculo exato da CRF e, subtraindo o VRE, obtém-se o Volume Residual. Discute a Ventilação Minuto (V_minuto = VC * FR ≈ 500 mL * 12 = 6.000 mL/min) versus a VENTILAÇÃO ALVEOLAR EFETIVA (Va = (VC - Vd) * FR): dos 500 mL do volume corrente, cerca de 150 mL ficam aprisionados nas vias aéreas de condução sem realizar trocas gasosas (Espaço Morto Anatômico, Vd ≈ 150 mL ou 2 mL/kg). Apenas os 350 mL restantes penetram os alvéolos funcionais (Va = 350 mL * 12 = 4.200 mL/min).",
      "keyPoint": "Ventilação Alveolar = (Volume Corrente - Espaço Morto) x Frequência Respiratória. Respiração rápida e superficial apenas ventila o espaço morto sem oxigenar o sangue."
    },
    "costanzo": {
      "chapter": "Capítulo 5: Espirometria Clínica — Padrão Obstrutivo versus Restritivo",
      "pages": "pp. 184-188",
      "summary": "Costanzo disseca a interpretação clínica da Espirometria Forçada: 1) Capacidade Vital Forçada (CVF): volume total de ar expelido com esforço expiratório máximo após inspiração profunda; 2) Volume Expiratório Forçado no 1º segundo (VEF1): volume de ar ejetado no primeiro segundo da manobra; 3) ÍNDICE DE TIFFENEAU (VEF1 / CVF, normal entre 75% e 80% ou 0,75-0,80): PADRÃO OBSTRUTIVO (Asma, DPOC/Enfisema, Bronquite Crônica): resistência aumentada nas vias aéreas reduz o fluxo expiratório desproporcionalmente; o VEF1 cai drasticamente e o ÍNDICE DE TIFFENEAU FICA MENOR QUE 70% (< 0,70); PADRÃO RESTRITIVO (Fibrose Pulmonar, Esclerodermia, Cifoescoliose grave): diminuição simétrica de todos os volumes pulmonares; tanto a CVF quanto o VEF1 caem na mesma proporção, de modo que o ÍNDICE DE TIFFENEAU PERMANECE NORMAL OU ATÉ ELEVADO (≥ 80%).",
      "keyPoint": "Índice de Tiffeneau (VEF1/CVF) < 70% define Distúrbio Obstrutivo (Asma/DPOC). Tiffeneau normal/alto com CVF reduzida define Distúrbio Restritivo (Fibrose)."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 2: Ventilação e Espaço Morto",
      "pages": "pp. 13-28",
      "summary": "John B. West explica a Equação de Bohr para medição do Espaço Morto Fisiológico: Vd/Vt = (PaCO2 - PeCO2) / PaCO2, onde PeCO2 é a fração de CO2 coletada no ar expirado misto. Demonstra que se os alvéolos forem ventilados mas não perfundidos (como em embolia pulmonar), eles somam-se ao espaço morto anatômico, compondo o Espaço Morto Fisiológico aumentado.",
      "keyPoint": "Pela Equação de Bohr, se a PCO2 do ar expirado misto cair muito em relação ao sangue arterial, o espaço morto fisiológico está ampliado (embolia pulmonar)."
    },
    "openstax": {
      "section": "Chapter 22: The Respiratory System — Section 22.3: Respiratory Volumes and Capacities",
      "summary": "OpenStax fornece o espirograma clássico com suas faixas de volumes e capacidades coloridas e demonstra a manobra espirométrica realizada por um paciente em bocal com pinça nasal.",
      "keyPoint": "A capacidade vital é a soma do volume de reserva inspiratório, volume corrente e volume de reserva expiratório (CV = VRI + VC + VRE)."
    },
    "merck": {
      "section": "Pneumologia — Espirometria e Teste de Broncodilatação",
      "summary": "O Manual MSD estabelece a confirmação diagnóstica de ASMA através da Prova Broncodilatadora com beta-2 agonista inalatório (salbutamol 400 μg): melhora no VEF1 ≥ 12% E ganho absoluto ≥ 200 mL após 15 minutos comprova obstrução reversível ao fluxo aéreo, diferenciando da DPOC (obstrução fixa pouco reversível).",
      "keyPoint": "Ganho de VEF1 ≥ 12% e 200 mL após salbutamol inalatório confirma hiper-reatividade e reversibilidade brônquica na asma."
    },
    "researchTopics": [
      {
        "title": "Volumes Pulmonares e Limitações da Espirometria",
        "concept": "Discriminação dos 4 volumes estáticos e fundamentação de por que o Volume Residual não pode ser medido por espirometria clássica devido ao ar retido nas vias colapsadas.",
        "formulaOrLaw": "Capacidade Pulmonar Total (CPT) = Capacidade Vital (CV) + Volume Residual (VR)",
        "keyReference": "Guyton & Hall, Cap. 38",
        "query": "spirometry pulmonary volumes residual volume functional residual capacity"
      },
      {
        "title": "Diagnóstico Diferencial: Distúrbio Obstrutivo vs. Restritivo",
        "concept": "Análise espirométrica da relação VEF1/CVF (Índice de Tiffeneau) para separação clínica inequívoca entre doenças de vias aéreas e doenças de parênquima ou caixa torácica.",
        "formulaOrLaw": "Obstrução: VEF1/CVF < 0,70; Restrição: VEF1/CVF ≥ 0,70 com CVF < 80% do previsto",
        "keyReference": "Costanzo, Cap. 5",
        "query": "obstructive restrictive lung disease fev1 fvc ratio tiffeneau index spirometry"
      },
      {
        "title": "Ventilação Alveolar e Equação do Espaço Morto de Bohr",
        "concept": "Quantificação da ventilação fisiologicamente útil versus a ventilação ineficaz do espaço morto anatômico e alveolar utilizando a excreção fracionária de dióxido de carbono.",
        "formulaOrLaw": "Equação de Bohr: Vd / Vt = (PaCO2 - PeCO2) / PaCO2",
        "keyReference": "West, Fisiologia Respiratória, Cap. 2",
        "query": "alveolar ventilation anatomic dead space bohr equation dead space fraction"
      },
      {
        "title": "Pletismografia Corporal e Diluição de Hélio",
        "concept": "Metodologias avançadas de função pulmonar baseadas na lei de Boyle em cabine selada ou na conservação de massa de hélio para quantificação precisa do VR e da CRF.",
        "formulaOrLaw": "Pletismografia: P1 * V1 = P2 * (V1 - ΔV); Diluição: C1 * V1 = C2 * (V1 + CRF)",
        "keyReference": "Berne & Levy, Cap. 21",
        "query": "body plethysmography helium dilution functional residual capacity lung volume"
      }
    ]
  },
  {
    "topicName": "Trocas Gasosas e Difusão",
    "phaseId": "w4_p4",
    "level": 22,
    "worldId": "w4",
    "category": "Sistema Respiratório",
    "phaseTitle": "Trocas Gasosas & Difusão Alvéolo-Capilar",
    "aliases": [
      "Trocas Gasosas",
      "Lei de Fick da Difusão",
      "Barreira Alvéolo-Capilar",
      "Gradiente Alvéolo-Arterial",
      "Capacidade de Difusão DLCO"
    ],
    "specialistTitle": "John B. West",
    "specialistBadge": "Difusão Alvéolo-Capilar de West",
    "guyton": {
      "chapter": "Unidade VII — Capítulo 39: Princípios Físicos das Trocas Gasosas; Difusão de Oxigênio e Dióxido de Carbono através da Membrana Respiratória",
      "pages": "pp. 513-526",
      "summary": "A hematose é a difusão passiva de oxigênio dos alvéolos para o sangue capilar pulmonar e de dióxido de carbono do sangue para os alvéolos, governada pelos gradientes de pressões parciais dos gases de acordo com a Lei de Dalton e a Lei de Henry. Ao nível do mar (Pressão Barométrica = 760 mmHg), as pressões parciais fisiológicas em repouso são: 1) No Alvéolo: PAO2 ≈ 104 mmHg; PACO2 ≈ 40 mmHg; 2) No Sangue Venoso Misto que chega pela artéria pulmonar: PvO2 ≈ 40 mmHg; PvCO2 ≈ 45 mmHg; 3) No Sangue Capilar Pulmonar Efetivo: equilibra-se rapidamente, saindo com PaO2 ≈ 100 mmHg e PaCO2 ≈ 40 mmHg. A membrana respiratória (barreira alvéolo-capilar) é extraordinariamente delgada (espessura média de apenas 0,5 μm) com uma área de superfície colossal de 70 a 100 metros quadrados (equivalente a uma quadra de tênis), composta por surfactante, pneumócito tipo I, lâmina basal fundida e endotélio capilar.",
      "keyPoint": "Gradientes de difusão em repouso: Oxigênio = 104 - 40 = 64 mmHg (para dentro do capilar); CO2 = 45 - 40 = 5 mmHg (para dentro do alvéolo)."
    },
    "berne": {
      "chapter": "Capítulo 22: Difusão Gasosa Através da Membrana Respiratória e Lei de Fick",
      "pages": "pp. 396-408",
      "summary": "Berne & Levy detalha a 1ª Lei de Fick da Difusão para gases: V_gás = [A * D * (P1 - P2)] / T, onde A é a área de superfície da barreira alvéolo-capilar, T a espessura da barreira, (P1 - P2) a diferença de pressão parcial transmembrana e D o coeficiente de difusão do gás. Pela Lei de Graham e Lei de Henry, D é proporcional à solubilidade do gás dividida pela raiz quadrada de sua massa molecular: D ∝ Solubilidade / sqrt(PM). Como o Dióxido de Carbono (CO2) é cerca de 24 vezes mais solúvel em água e tecidos do que o Oxigênio (O2), o CO2 DIFUNDE APROXIMADAMENTE 20 VEZES MAIS RÁPIDO através da membrana respiratória do que o O2 para um mesmo gradiente pressórico!",
      "keyPoint": "O CO2 difunde 20 vezes mais rápido que o O2 porque sua solubilidade tecidual é imensamente superior; doenças de barreira causam hipoxemia muito antes de reter CO2."
    },
    "costanzo": {
      "chapter": "Capítulo 5: Troca Gasosa — Transporte Limitado por Perfusão versus Difusão",
      "pages": "pp. 192-196",
      "summary": "Costanzo explica o tempo de equilíbrio capilar: uma hemácia leva cerca de 0,75 segundos para transitar ao longo do capilar pulmonar em repouso. O equilíbrio difusional do oxigênio é tão rápido que a PO2 capilar atinge 104 mmHg no primeiro terço do trajeto capilar (~0,25 segundos), restando 0,50 segundos de margem de reserva temporal de segurança. Em indivíduos normais, a captação de O2 e CO2 é LIMITADA POR PERFUSÃO (o único modo de aumentar o O2 captado é bombear mais sangue através dos pulmões). Já o Monóxido de Carbono (CO) liga-se avidamente à hemoglobina sem gerar pressão parcial dissolvida, sendo o modelo clássico de gás LIMITADO POR DIFUSÃO.",
      "keyPoint": "Em repouso, o O2 equilibra-se em 0,25 s (1/3 do capilar); em pulmão fibrótico durante o exercício, o trânsito cai para 0,25 s e o O2 torna-se limitado por difusão (hipoxemia)."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 3: Difusão e Medição da DLCO",
      "pages": "pp. 29-44",
      "summary": "John B. West detalha a Capacidade de Difusão Pulmonar pelo Monóxido de Carbono (DLCO): DLCO = V_CO / PA_CO. A DLCO quantifica a integridade da barreira alvéolo-capilar. Está patologicamente REDUZIDA na Fibrose Pulmonar Idiopática (espessamento fibrótico de T), no Enfisema Pulmonar (destruição de septos com perda catastrófica de área A) e na Anemia (pouca hemoglobina nos capilares); está ELEVADA na hemorragia alveolar (sangue livre alveolar capta CO) e durante o exercício físico intenso (recrutamento e distensão dos capilares de ápice pulmonar aumentam a área A efetiva).",
      "keyPoint": "DLCO reduzida confirma defeito de difusão por espessamento da membrana (fibrose) ou perda de área capilar alveolar (enfisema pulmonar)."
    },
    "openstax": {
      "section": "Chapter 22: The Respiratory System — Section 22.4: Gas Exchange",
      "summary": "OpenStax ilustra a ultraestrutura da membrana respiratória sob microscopia eletrônica e mapeia as pressões parciais desde os alvéolos até os capilares sistêmicos musculares.",
      "keyPoint": "A barreira alvéolo-capilar mede apenas 0,5 micrômetros de espessura para minimizar a distância de difusão de Fick."
    },
    "merck": {
      "section": "Pneumologia — Doenças Pulmonares Intersticiais e Fibrose Pulmonar Idiopática",
      "summary": "O Manual MSD correlaciona a fisiopatologia da Fibrose Pulmonar: a proliferação desordenada de miofibroblastos e colágeno espessa a barreira alvéolo-capilar (T aumenta). Em repouso o paciente pode estar eupneico, mas ao menor esforço físico, o aumento do débito cardíaco encurta o tempo de trânsito eritrocitário, impedindo o equilíbrio difusional e deflagrando dessaturação profunda de O2.",
      "keyPoint": "Na fibrose pulmonar, a dessaturação profunda aos esforços é o achado clássico do bloqueio alvéolo-capilar difusional."
    },
    "researchTopics": [
      {
        "title": "Lei de Fick da Difusão Gasosa Alvéolo-Capilar",
        "concept": "Relação física direta entre o fluxo de transferência gasosa e a área da membrana alveolar, solubilidade tecidual e gradiente de pressão parcial, e inversa à espessura tecidual.",
        "formulaOrLaw": "V_gás = [Área * Solubilidade * (PA - Pc)] / [Espessura * sqrt(PM)]",
        "keyReference": "Guyton & Hall, Cap. 39",
        "query": "fick law alveolar capillary gas exchange diffusion membrane"
      },
      {
        "title": "Solubilidade do CO2 vs. O2 e Velocidade de Difusão",
        "concept": "Demonstração biofísica de por que o dióxido de carbono difunde 20 vezes mais rápido que o oxigênio através de membranas biológicas aquosas apesar do menor gradiente pressórico.",
        "formulaOrLaw": "Solubilidade CO2 ≈ 24x Solubilidade O2 -> Taxa Difusional CO2 ≈ 20x Taxa O2",
        "keyReference": "Berne & Levy, Cap. 22",
        "query": "carbon dioxide oxygen diffusion rate solubility graham law alveolar membrane"
      },
      {
        "title": "Limitação por Perfusão vs. Difusão (Equilíbrio em 0,25 s)",
        "concept": "Cinética de trânsito dos eritrócitos nos capilares pulmonares (0,75 s em repouso vs. 0,25 s no esforço) e comparação entre a captação de N2O, O2 e CO.",
        "formulaOrLaw": "Tempo de Equilíbrio Normal do O2 = 0,25 s (1/3 do Trânsito Capilar)",
        "keyReference": "Costanzo, Cap. 5",
        "query": "perfusion limited diffusion limited gas exchange transit time capillary blood"
      },
      {
        "title": "Capacidade de Difusão do Monóxido de Carbono (DLCO)",
        "concept": "Método clínico padrão-ouro com inalação de dose traço de CO para quantificação da resistência de membrana e volume de sangue capilar pulmonar.",
        "formulaOrLaw": "1 / DLCO = 1 / D_membrana + 1 / (θ * V_capilar)",
        "keyReference": "West, Fisiologia Respiratória, Cap. 3",
        "query": "diffusing capacity carbon monoxide dlco pulmonary fibrosis emphysema robertson"
      }
    ]
  },
  {
    "topicName": "Transporte de Gases Sanguíneos",
    "phaseId": "w4_p5",
    "level": 23,
    "worldId": "w4",
    "category": "Sistema Respiratório",
    "phaseTitle": "Transporte de Gases Sanguíneos & Efeito Haldane",
    "aliases": [
      "Transporte de Gases",
      "Efeito Haldane",
      "Bicarbonato Plasmático",
      "Anidrase Carbônica",
      "Desvio de Cloreto"
    ],
    "specialistTitle": "West & Boron",
    "specialistBadge": "Bioquímica Respiratória",
    "guyton": {
      "chapter": "Unidade VII — Capítulo 41: Transporte de Oxigênio e Dióxido de Carbono no Sangue",
      "pages": "pp. 533-542",
      "summary": "Enquanto o O2 é transportado 98,5% ligado à hemoglobina e apenas 1,5% dissolvido no plasma, o transporte do DIÓXIDO DE CARBONO (CO2) pelo sangue dos tecidos periféricos até os pulmões ocorre através de TRÊS MODALIDADES DISTINTAS: 1) ÍON BICARBONATO DISSOLVIDO (HCO3-): representa aproximadamente 70% de todo o CO2 transportado; 2) COMPOSTOS CARBAMINO (Carbaminoemoglobina): cerca de 23% do CO2 liga-se diretamente aos grupos amino terminais das globinas da hemoglobina desoxigenada; 3) GÁS DISSOLVIDO no plasma: cerca de 7% do CO2 viaja livre em solução aquosa física.",
      "keyPoint": "O CO2 viaja 70% na forma de bicarbonato (HCO3-), 23% ligado à hemoglobina como carbamino e 7% dissolvido no plasma."
    },
    "berne": {
      "chapter": "Capítulo 23: Química do Transporte de CO2, Anidrase Carbônica e Desvio de Cloreto",
      "pages": "pp. 418-430",
      "summary": "Berne & Levy detalha a cascata bioquímica dentro da hemácia nos capilares teciduais: o CO2 difunde dos tecidos para a hemácia, onde a enzima ANIDRASE CARBÔNICA (AC-I e AC-II) catalisa a hidratação reversível ultra-rápida do CO2 em ácido carbônico: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-. Os íons H+ livres são imediatamente tamponados pelos resíduos de histidina da desoxi-hemoglobina (amortecendo a queda de pH). À medida que o bicarbonato se acumula dentro do eritrócito, ele é ejetado para o plasma sanguíneo em troca da entrada passiva de íons cloreto (Cl-) através do TROCADOR ÂNIONICO 1 (AE1 / Proteína Banda 3 da membrana). Esse fenômeno é denominado DESVIO DE CLORETO (Chloride Shift / Fenômeno de Hamburger). Nos pulmões, o processo inverte-se 100%: o cloreto sai da hemácia e o bicarbonato reentra para ser convertido em CO2 e exalado.",
      "keyPoint": "O Desvio de Cloreto (trocador AE1) expulsa HCO3- para o plasma e internaliza Cl- na hemácia nos capilares teciduais, mantendo a neutralidade elétrica."
    },
    "costanzo": {
      "chapter": "Capítulo 5: Fisiologia Respiratória — O Efeito Haldane",
      "pages": "pp. 206-210",
      "summary": "Costanzo conceitua com clareza cristalina o EFEITO HALDANE: descreve a influência direta da oxigenação da hemoglobina sobre sua afinidade pelo dióxido de carbono e prótons (H+). Nos capilares teciduais desoxigenados, a liberação de O2 converte a hemoglobina no estado tenso (desoxi-Hb), o que dobra sua capacidade de captar CO2 (formando mais carbamino) e sequestrar íons H+. Inversamente, nos capilares pulmonares, a oxigenação da hemoglobina promove a expulsão do CO2 de seus sítios amino e a liberação de prótons H+, que recombinam-se com o bicarbonato plasmático gerando CO2 gasoso livre para ser exalado pelos alvéolos.",
      "keyPoint": "Efeito Haldane: a ligação de O2 à hemoglobina nos pulmões reduz sua afinidade por CO2 e H+, forçando a liberação e eliminação do CO2 na respiração."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 6: A Curva de Dissociação de Dióxido de Carbono",
      "pages": "pp. 88-94",
      "summary": "John B. West compara as curvas de dissociação de O2 e CO2: enquanto a curva de oxi-hemoglobina é sigmoide e satura precocemente em platô sob PO2 de 100 mmHg, a Curva de Dissociação do Dióxido de Carbono é muito mais linear e não exibe saturação na faixa fisiológica (PCO2 de 40 a 50 mmHg), operando com inclinação mais íngreme. O Efeito Haldane translada toda a curva de CO2 para baixo e para a direita quando o sangue se oxigena, maximizando a troca respiratória.",
      "keyPoint": "A curva de CO2 é muito mais íngreme e linear que a de O2: pequenas alterações ventilatórias provocam mudanças imediatas na PCO2 arterial."
    },
    "openstax": {
      "section": "Chapter 22: The Respiratory System — Section 22.5: Transport of Carbon Dioxide",
      "summary": "OpenStax ilustra o ciclo enzimático no interior do eritrócito: difusão do CO2 tecidual, ação da anidrase carbônica, saída do bicarbonato via trocador banda 3 e entrada eletricamente neutra de cloreto.",
      "keyPoint": "A anidrase carbônica eritrocitária acelera a reação em mais de 10.000 vezes em comparação com a hidratação espontânea no plasma acelular."
    },
    "merck": {
      "section": "Farmacologia Respiratória e Renal — Inibidores da Anidrase Carbônica (Acetazolamida)",
      "summary": "O Manual MSD aborda o mecanismo da Acetazolamida (Diamox): inibidor farmacológico da anidrase carbônica nos rins e hemácias. Ao inibir a AC nos túbulos renais, promove bicarbonatúria e acidose metabólica hiperclorêmica leve; essa acidose estimula os quimiorreceptores centrais e periféricos a disparar hiperventilação compensatória, sendo utilizada no tratamento e profilaxia do Mal Agudo das Montanhas.",
      "keyPoint": "Acetazolamida inibe a anidrase carbônica, induz acidose metabólica e estimula o drive ventilatório em grandes altitudes."
    },
    "researchTopics": [
      {
        "title": "As Três Formas de Transporte de CO2 no Sangue",
        "concept": "Balanço estequiométrico das frações de dióxido de carbono na circulação sistêmica: bicarbonato ionizado (70%), carbamino-compostos (23%) e gás dissolvido livre (7%).",
        "formulaOrLaw": "Conteúdo Total de CO2 = [HCO3-]plasmático + [Carbamino-Hb] + [CO2 dissolvido: 0,03 * PCO2]",
        "keyReference": "Guyton & Hall, Cap. 41",
        "query": "carbon dioxide transport blood bicarbonate carbaminohemoglobin dissolved co2"
      },
      {
        "title": "Desvio de Cloreto (Efeito Hamburger) e Trocador AE1",
        "concept": "Mecanismo molecular de antiporte aniônico na membrana do eritrócito que permuta íons bicarbonato intracelulares por íons cloreto plasmáticos preservando a eletroneutralidade.",
        "formulaOrLaw": "Trocador AE1 (Banda 3): Efluxo de 1 HCO3- : Influxo de 1 Cl-",
        "keyReference": "Berne & Levy, Cap. 23",
        "query": "chloride shift hamburger phenomenon ae1 band 3 bicarbonate transport erythrocyte"
      },
      {
        "title": "Efeito Haldane nos Pulmões e Tecidos",
        "concept": "Modulação alostérica da afinidade da hemoglobina por CO2 e prótons pelo oxigênio molecular, otimizando a captação de CO2 nos tecidos e sua exalação nos alvéolos.",
        "formulaOrLaw": "Oxigenação da Hb nos Pulmões -> Liberação Imediata de CO2 e Prótons H+",
        "keyReference": "Costanzo, Cap. 5",
        "query": "haldane effect hemoglobin oxygenation carbon dioxide affinity carbamino"
      },
      {
        "title": "Anidrase Carbônica e Farmacologia da Acetazolamida",
        "concept": "Cinética catalítica da conversão de CO2 em bicarbonato e sua inibição farmacológica por sulfonamidas para indução de acidose metabólica estimulante do centro respiratório.",
        "formulaOrLaw": "CO2 + H2O <--(Anidrase Carbônica)--> H2CO3 <--> H+ + HCO3-",
        "keyReference": "West, Fisiologia Respiratória, Cap. 6",
        "query": "carbonic anhydrase kinetics acetazolamide mountain sickness ventilation drive"
      }
    ]
  },
  {
    "topicName": "Relação V/Q e Controle Neural",
    "phaseId": "w4_p6",
    "level": 24,
    "worldId": "w4",
    "category": "Sistema Respiratório",
    "phaseTitle": "Relação V/Q & Controle Neural da Respiração",
    "aliases": [
      "Relação V/Q e Regulação",
      "Relação Ventilação Perfusão",
      "Quimiorreceptores",
      "Controle da Respiração",
      "Vasoconstrição Hipóxica Pulmonar"
    ],
    "specialistTitle": "John B. West",
    "specialistBadge": "Relação V/Q de West",
    "guyton": {
      "chapter": "Unidade VII — Capítulos 40 e 42: Relação Ventilação-Perfusão e Regulação da Respiração",
      "pages": "pp. 520-532, 543-556",
      "summary": "A hematose ideal exige que a Ventilação Alveolar (V ≈ 4,2 L/min) esteja perfeitamente acoplada à Perfusão Sanguínea Capilar Pulmonar (Q ≈ 5,0 L/min), definindo a RELAÇÃO V/Q GLOBAL MÉDIA de aproximadamente 0,8 a 0,85. O parênquima pulmonar sadio em posição ortostática exibe heterogeneidade gravitacional descrita nas TRÊS ZONAS DE WEST: no Ápice Pulmonar (Zona 1/2), a ventilação supera a perfusão (V/Q alto ≈ 3,3, com PO2 elevada de 130 mmHg e PCO2 baixa de 28 mmHg); na Base Pulmonar (Zona 3), o peso da coluna de sangue favorece imensamente a perfusão em relação à ventilação (V/Q baixo ≈ 0,63, com PO2 de 89 mmHg e PCO2 de 42 mmHg). Os dois extremos patológicos da relação V/Q são: 1) ESPAÇO MORTO ALVEOLAR (V/Q tendendo ao infinito): alvéolo é amplamente ventilado, mas recebe perfusão sanguínea nula (como na oclusão por Embolia Pulmonar Maciça); 2) SHUNT INTRAPULMONAR (V/Q tendendo a zero): alvéolo é perfundido por sangue venoso, mas recebe ventilação nula (alvéolo preenchido por pus na pneumonia, atelectasia ou edema alveolar grave).",
      "keyPoint": "Shunt (V/Q = 0): sangue venoso cruza o pulmão sem receber oxigênio (hipoxemia refratária à O2 terapia); Espaço Morto (V/Q = infinito): ventilação sem sangue (embolia)."
    },
    "berne": {
      "chapter": "Capítulo 24: Controle Neural e Químico do Ritmo Ventilatório Central",
      "pages": "pp. 432-452",
      "summary": "Berne & Levy detalha o controle respiratório neural e químico no tronco encefálico: 1) Grupo Respiratório Dorsal (DRG, no NTS do bulbo): neurônios que estabelecem o ritmo intrínseco inspiratório básico basal (\"rampa inspiratória\"); 2) Grupo Respiratório Ventral (VRG, complexo pré-Bötzinger e núcleo retroambíguo): neurônios que comandam a expiração e inspiração forçadas ativas; 3) Centro Pneumotáxico (Ponte rostral): desliga a rampa inspiratória limitando a duração da inspiração e acelerando a frequência. Detalha os QUIMIORRECEPTORES CENTRAIS (superfície ventrolateral do bulbo): respondem primariamente à concentração de íons H+ no líquido cefalorraquidiano (LCR). Como os íons H+ não cruzam a barreira hematoencefálica (BHE), é o CO2 arterial lipossolúvel que difunde livremente pela BHE para o LCR, hidratando-se em H+ e HCO3- pela anidrase carbônica local para excitar diretamente os quimiorreceptores.",
      "keyPoint": "O principal drive respiratório em repouso ao nível do mar é a PCO2 arterial através dos íons H+ gerados no líquor encefálico nos quimiorreceptores centrais."
    },
    "costanzo": {
      "chapter": "Capítulo 5: Fisiologia Respiratória — Resposta Quimiossensível e Reflexo de Hering-Breuer",
      "pages": "pp. 210-218",
      "summary": "Costanzo analisa os QUIMIORRECEPTORES PERIFÉRICOS nos Corpos Carotídeos (via nervo glossofaríngeo) e Corpos Aórticos (via nervo vago): ao contrário dos centrais, os periféricos respondem diretamente à HIPÓXIA (queda da PO2 arterial abaixo de 60 mmHg), além de acidose e hipercapnia. Quando a PaO2 cai abaixo de 60 mmHg, os canais de K+ sensíveis ao oxigênio nas células glômicas se fecham, despolarizando a célula e abrindo canais de Ca2+ que liberam dopamina e ATP, disparando hiperventilação de urgência. Detalha o REFLEXO DE HERING-BREUER: mecanorreceptores de estiramento de adaptação lenta no músculo liso bronquial disparam potenciais via nervo vago quando os pulmões atingem insuflação excessiva (> 1,5 L), interrompendo a rampa inspiratória para proteger os alvéolos contra hiperdistensão mecânica.",
      "keyPoint": "Quimiorreceptores centrais respondem a H+/CO2 no líquor; quimiorreceptores carotídeos periféricos são os únicos que respondem à hipóxia (PaO2 < 60 mmHg)."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 5: Relação Ventilação-Perfusão e Vasoconstrição Hipóxica",
      "pages": "pp. 59-76",
      "summary": "John B. West explica o mecanismo exclusivo da VASOCONSTRIÇÃO PULMONAR HIPÓXICA (VPH): ao contrário de todas as artérias sistêmicas periféricas (que se dilatam na hipóxia para levar mais oxigênio aos tecidos), as arteríolas pré-capilares pulmonares SOFREM VASOCONSTRIÇÃO quando a PO2 alveolar regional cai abaixo de 70 mmHg. Essa resposta autoreguladora é brilhante: desvia o fluxo sanguíneo para longe de alvéolos hipoventilados em direção a alvéolos bem oxigenados, otimizando o acoplamento V/Q global. Contudo, em altitudes extremas ou na hipóxia alveolar generalizada do DPOC, a vasoconstrição pulmonar ocorre em todos os vasos do pulmão, gerando Hipertensão Arterial Pulmonar crônica e sobrecarga do ventrículo direito (Cor Pulmonale).",
      "keyPoint": "A vasoconstrição pulmonar hipóxica desvia o fluxo de áreas hipoventiladas para áreas oxigenadas; se for difusa, causa hipertensão pulmonar e cor pulmonale."
    },
    "openstax": {
      "section": "Chapter 22: The Respiratory System — Section 22.6: Modifications in Respiratory Functions",
      "summary": "OpenStax ilustra o feedback respiratório completo com os receptores carotídeos, bulbo, nervo frênico e diafragma atuando em alça negativa fechada para manter a PaCO2 rigorosamente em 40 mmHg.",
      "keyPoint": "A ventilação minuto ajusta-se proporcionalmente à produção metabólica de CO2 para conservar o pH arterial entre 7,35 e 7,45."
    },
    "merck": {
      "section": "Pneumologia — Embolia Pulmonar, Shunt Intrapulmonar e Oxigenoterapia na DPOC Crônica",
      "summary": "O Manual MSD discute a oxigenoterapia em pacientes com DPOC crônica retentores de CO2: como seu centro respiratório central sofreu dessensibilização crônica por tamponamento do líquor por bicarbonato, seu drive ventilatório tornou-se dependente do estímulo hipóxico periférico dos corpos carotídeos. A administração intempestiva de altas concentrações de oxigênio (FiO2 100%) remove esse drive hipóxico residual, podendo precipitar apneia, narcose por CO2 e parada respiratória.",
      "keyPoint": "Em retentores crônicos de CO2, a oxigenoterapia deve ser dosada com alvos de SatO2 entre 88% e 92% para não suprimir o estímulo respiratório hipóxico."
    },
    "researchTopics": [
      {
        "title": "Zonas de West da Relação V/Q e Gravidade",
        "concept": "Distribuição regional das pressões alveolar (PA), arterial pulmonar (Pa) e venosa pulmonar (Pv) determinando perfusão preferencial na base e ventilação proporcional no ápice.",
        "formulaOrLaw": "Zona 1 (PA > Pa > Pv); Zona 2 (Pa > PA > Pv); Zona 3 (Pa > Pv > PA)",
        "keyReference": "West, Fisiologia Respiratória, Cap. 5",
        "query": "west zones of the lung ventilation perfusion ratio gravity pulmonary blood flow"
      },
      {
        "title": "Vasoconstrição Pulmonar Hipóxica (VPH)",
        "concept": "Mecanismo homeostático intrínseco das arteríolas pulmonares que redireciona ativamente a perfusão para alvéolos normóxicos através de canais de K+ dependentes de O2.",
        "formulaOrLaw": "Queda na PAO2 alveolar (< 70 mmHg) -> Constrição Arteriolar Pré-Capilar Regional",
        "keyReference": "Guyton & Hall, Cap. 40",
        "query": "hypoxic pulmonary vasoconstriction mechanism potassium channels regional blood flow"
      },
      {
        "title": "Quimiorreceptores Centrais e Barreira Hematoencefálica",
        "concept": "Difusão molecular de CO2 gasoso arterial através da barreira hematoencefálica para geração de H+ no líquor e estimulação do centro respiratório bulbar.",
        "formulaOrLaw": "PaCO2 arterial -> Difusão BHE -> AC no LCR -> ↑ [H+]LCR -> Disparo Quimiossensível Central",
        "keyReference": "Berne & Levy, Cap. 24",
        "query": "central chemoreceptors carbon dioxide blood brain barrier cerebrospinal fluid hydrogen ions"
      },
      {
        "title": "Reflexo de Insuflação de Hering-Breuer",
        "concept": "Mecanismo reflexo inibitório vagal disparado por mecanorreceptores broncopulmonares para limitar o volume corrente máximo e prevenir barotrauma alveolar.",
        "formulaOrLaw": "Insuflação Pulmonar Excessiva -> Condução via Nervo Vago -> Inibição da Rampa no DRG",
        "keyReference": "Costanzo, Cap. 5",
        "query": "hering breuer inflation reflex stretch receptors vagus nerve respiratory center"
      }
    ]
  },
  {
    "topicName": "Filtração Glomerular e TFG",
    "phaseId": "w5_p1",
    "level": 25,
    "worldId": "w5",
    "category": "Fisiologia Renal & Ácido-Base",
    "phaseTitle": "Filtração Glomerular (TFG) & Forças de Starling",
    "aliases": [
      "Filtração Glomerular",
      "TFG",
      "Forças de Starling Renais",
      "Feedback Tubuloglomerular",
      "Autorregulação Renal"
    ],
    "specialistTitle": "Berne & Levy",
    "specialistBadge": "Fisiologia Renal Quantitativa",
    "guyton": {
      "chapter": "Unidade V: Os Líquidos Corporais e os Rins — Capítulo 26: Filtração Glomerular, Fluxo Sanguíneo Renal e seu Controle",
      "pages": "pp. 323-340",
      "summary": "A formação da urina inicia-se com a ultrafiltração em massa de plasma dos capilares glomerulares para a cápsula de Bowman, gerando a TAXA DE FILTRAÇÃO GLOMERULAR (TFG ≈ 125 mL/min ou 180 Litros por dia em um adulto normal). A barreira de filtração glomerular é composta por três camadas em série: 1) Endotélio capilar fenestrado (poros de 70 a 90 nm que retêm células sanguíneas); 2) Membrana basal glomerular rica em proteoglicanos de heparana-sulfato carregados negativamente (barreira eletrostática que repele macromoléculas aniônicas); 3) Fendas de filtração entre os pedicelos dos podócitos recobertos por diafragmas de fenda formados por nefrina e podocalicina negativa. Essa barreira é altamente permeável à água e pequenos solutos cristaloides (eletrólitos, glicose, aminoácidos, ureia), mas virtualmente impermeável a proteínas plasmáticas (a albumina sérica de 66 kDa e carga negativa é quase 100% retida).",
      "keyPoint": "A barreira glomerular filtra 180 L/dia de plasma livre de células e proteínas; a TFG é de ~125 mL/min em adultos sadios."
    },
    "berne": {
      "chapter": "Capítulo 32: Elementos da Função Renal e Filtração Glomerular",
      "pages": "pp. 580-602",
      "summary": "Berne & Levy quantifica a Pressão Líquida de Filtração (PLF) glomerular através das Forças de Starling: PLF = P_GC - P_BC - π_GC, onde: 1) Pressão Hidrostática no Capilar Glomerular (P_GC ≈ 60 mmHg, favorável à filtração): mantida alta pela constrição da arteríola eferente de saída; 2) Pressão Hidrostática na Cápsula de Bowman (P_BC ≈ 18 mmHg, opõe-se à filtração): decorrente da resistência do fluxo tubular adiante; 3) Pressão Coloidosmótica no Capilar Glomerular (π_GC ≈ 32 mmHg média, opõe-se à filtração): exercida pelas proteínas plasmáticas que se concentram conforme o fluido ultrafiltrado desprovido de proteína sai do vaso. Consequentemente: PLF = 60 - 18 - 32 = +10 mmHg. A TFG é calculada por: TFG = Kf * PLF, onde Kf é o coeficiente de ultrafiltração glomerular (área de superfície capilar multiplicada pela condutividade hidráulica).",
      "keyPoint": "Forças de Starling glomerulares: PLF = P_GC (60) - P_BC (18) - π_GC (32) = +10 mmHg a favor da filtração."
    },
    "costanzo": {
      "chapter": "Capítulo 6: Fisiologia Renal — Autorregulação e Feedback Tubuloglomerular",
      "pages": "pp. 235-248",
      "summary": "Costanzo detalha a AUTORREGULAÇÃO RENAL: o Fluxo Sanguíneo Renal (FSR) e a TFG permanecem praticamente constantes em uma ampla faixa de pressão arterial média (entre 80 e 180 mmHg) através de dois mecanismos intrínsecos independentes de inervação externa: 1) Resposta Miogênica (estiramento mecânico da arteríola aferente abre canais de cálcio mecano-sensíveis, induzindo vasoconstrição reflexa da aferente para proteger o glomérulo); 2) FEEDBACK TUBULOGLOMERULAR mediado pela Mácula Densa no aparelho justaglomerular. Se a TFG se eleva, o fluxo de fluido tubular acelera e maior quantidade de NaCl chega à mácula densa; as células da mácula densa captam NaCl pelo cotransportador NKCC2, sofrem tumefação e liberam ADENOSINA no interstício; a adenosina liga-se aos receptores A1 na arteríola aferente adjacente, promovendo vasoconstrição aferente seletiva, reduzindo a P_GC e trazendo a TFG de volta ao ponto de ajuste.",
      "keyPoint": "O Feedback Tubuloglomerular: excesso de NaCl na mácula densa induz liberação de adenosina, que contrai a arteríola aferente, normalizando a TFG."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 34: Filtração Glomerular e Hemodinâmica Renal",
      "pages": "pp. 750-774",
      "summary": "Boron aborda a hemodinâmica diferencial das arteríolas renal aferente e eferente: 1) Prostaglandinas vasodilatadoras renais (PGE2 e PGI2): sintetizadas localmente para manter a arteríola AFERENTE DILATADA (preservando o FSR e a TFG); 2) Angiotensina II: constringe preferencialmente a arteríola EFERENTE em baixas concentrações (aumentando a P_GC para sustentar a TFG mesmo em hipotensão leve). Alerta médico sobre a \"Associação Perigosa\": AINEs (anti-inflamatórios que bloqueiam prostaglandinas, constringindo a aferente) combinados com IECAs/BRAs (que bloqueiam angiotensina II, dilatando a eferente) colapsam a P_GC glomerular, precipitando Injúria Renal Aguda hemodinâmica severa.",
      "keyPoint": "AINE constringe a aferente e IECA dilata a eferente: o uso concomitante derruba a pressão capilar glomerular e induz insuficiência renal aguda."
    },
    "openstax": {
      "section": "Chapter 25: The Urinary System — Section 25.4: Glomerular Filtration",
      "summary": "OpenStax ilustra o aparelho justaglomerular com suas três linhagens celulares: células da mácula densa (sensores quimiossensíveis de NaCl), células justaglomerulares mioepiteliais na parede da arteríola aferente (produtoras de renina) e células mesangiais extraglomerulares.",
      "keyPoint": "A queda no aporte de NaCl à mácula densa estimula a liberação de Renina pelas células justaglomerulares para ativar o SRAA."
    },
    "merck": {
      "section": "Nefrologia — Avaliação da Função Renal, Clearance de Creatinina e Estadiamento da DRC",
      "summary": "O Manual MSD estabelece a medição da TFG pelo clearance de substâncias: a Inulina é a substância padrão-ouro exógena ideal (livremente filtrada, não reabsorvida, não secretada e não metabolizada nos rins: TFG = [U_inulina * V_urina] / P_inulina). Na prática clínica diária, utiliza-se a Creatinina endógena (clearance ≈ TFG, com leve superestimação de 10% por secreção tubular proximal) e as equações CKD-EPI baseadas na creatinina sérica.",
      "keyPoint": "O clearance de inulina é o padrão-ouro teórico de TFG; a creatinina sérica é o marcador clínico universal na rotina médica."
    },
    "researchTopics": [
      {
        "title": "Barreira de Filtração e Carga Eletrostática Glomerular",
        "concept": "Arquitetura de tripla camada e papel dos proteoglicanos de heparana-sulfato negativos e nefrina na prevenção de proteinúria e perda de albumina sérica.",
        "formulaOrLaw": "Permeabilidade Eletrostática: Ânions Retidos > Neutros Filtrados > Cátions Livres",
        "keyReference": "Guyton & Hall, Cap. 26",
        "query": "glomerular filtration barrier podocyte slit diaphragm heparan sulfate albuminuria"
      },
      {
        "title": "Forças de Starling Glomerulares e Pressão Líquida (PLF)",
        "concept": "Interação hidrostática e coloidosmótica que resulta em pressão líquida de filtração de aproximadamente +10 mmHg em toda a extensão do capilar glomerular.",
        "formulaOrLaw": "TFG = Kf * PLF = Kf * [(P_GC - P_BC) - (π_GC - π_BC)]",
        "keyReference": "Berne & Levy, Cap. 32",
        "query": "glomerular filtration starling forces ultrafiltration coefficient hydraulic conductance"
      },
      {
        "title": "Feedback Tubuloglomerular e Mecanismo da Adenosina",
        "concept": "Acoplamento retrógrado entre o transporte de eletrólitos no ramo espesso ascendente via NKCC2 da mácula densa e a resistência vascular da arteríola aferente.",
        "formulaOrLaw": "NKCC2 na Mácula Densa -> Liberação de Adenosina -> Receptor A1 -> Constrição Aferente",
        "keyReference": "Costanzo, Cap. 6",
        "query": "tubuloglomerular feedback macula densa adenosine nkcc2 afferent arteriole resistance"
      },
      {
        "title": "Clearance Renal: Inulina vs. Creatinina e Equação de Depuração",
        "concept": "Fundamento bioanalítico do clearance plasmático de solutos como o volume virtual de plasma totalmente depurado de uma substância pelos rins por unidade de tempo.",
        "formulaOrLaw": "Clearance C = (U * V) / P (mL/min)",
        "keyReference": "Boron & Boulpaep, Cap. 34",
        "query": "renal clearance inulin creatinine glomerular filtration rate ckd-epi formula"
      }
    ]
  },
  {
    "topicName": "Transporte Tubular Renal",
    "phaseId": "w5_p2",
    "level": 26,
    "worldId": "w5",
    "category": "Fisiologia Renal & Ácido-Base",
    "phaseTitle": "Reabsorção e Secreção Tubular ao Longo do Néfron",
    "aliases": [
      "Segmentos Tubulares do Néfron",
      "Túbulo Proximal",
      "Alça de Henle",
      "Túbulo Distal",
      "Ducto Coletor"
    ],
    "specialistTitle": "Berne & Levy",
    "specialistBadge": "Transporte Epitelial Renal",
    "guyton": {
      "chapter": "Unidade V — Capítulo 27: Reabsorção e Secreção Tubular Renal",
      "pages": "pp. 341-360",
      "summary": "Dos 180 litros diários ultrafiltrados nos glomérulos, mais de 99% da água e dos solutos são reabsorvidos ao longo dos túbulos renais, sendo excretados em média apenas 1,5 litro de urina por dia. Cada segmento do néfron possui maquinaria especializada: 1) TÚBULO CONTORCIDO PROXIMAL (TCP): o \"cavalo de batalha\" do néfron, reabsorve cerca de 65% a 70% de todo o Na+, Cl-, K+ e água filtrados, e 100% de toda a glicose e aminoácidos filtrados (via simporte dependente de sódio SGLT e amino-transportadores). O fluido que sai do TCP é rigorosamente ISOSMOLAR (~300 mOsm/L) porque a reabsorção de água por aquaporina 1 acompanha estequiometricamente a de solutos; 2) ALÇA DE HENLE: Ramo Delgado Descendente: altamente permeável à água (expressa AQP1), mas impermeável a solutos (o fluido concentra-se até 1.200 mOsm/L na ponta medular); Ramo Espesso Ascendente (TAL): impermeável à água, mas reabsorve ativamente cerca de 25% do Na+, K+ e 2 Cl- através do cotransportador apical NKCC2 (alvo dos diuréticos de alça como a furosemida); 3) TÚBULO CONTORCIDO DISTAL INICIAL (TCD): impermeável à água, reabsorve 5% de NaCl via cotransportador sensível a tiazídicos NCC; 4) TÚBULO DISTAL TARDIO E DUCTO COLETOR: regulação hormonal fina pelas Células Principais (reabsorção de Na+ via canal ENaC e secreção de K+ via ROMK, estimuladas pela ALDOSTERONA) e Células Intercaladas Tipo A (secreção ativa de H+ via H+-ATPase para acidificação urinária).",
      "keyPoint": "O TCP reabsorve 65% do ultrafiltrado e 100% da glicose de modo isosmolar; o ramo espesso da alça reabsorve 25% de Na+ via NKCC2 (alvo da furosemida)."
    },
    "berne": {
      "chapter": "Capítulo 33: Transporte Tubular de Solutos e Balanço de Sódio e Água",
      "pages": "pp. 604-632",
      "summary": "Berne & Levy detalha o potencial transepitelial do Ramo Espesso Ascendente da Alça de Henle (TAL): o cotransportador NKCC2 internaliza 1 Na+, 1 K+ e 2 Cl-. O K+ citosólico é reciclado de volta para o lúmen tubular através do canal de potássio apical ROMK. Essa retro-injeção contínua de cargas positivas de K+ gera um POTENCIAL TRANSEPITELIAL POSITIVO NA LUZ TUBULAR (+8 a +10 mV) que atua repelindo e impulsionando a reabsorção paracelular de cátions divalentes vitais: Cálcio (Ca2+) e Magnésio (Mg2+) através das claudinas 16 e 19.",
      "keyPoint": "A reciclagem de K+ pelo canal ROMK no ramo ascendente gera lúmen positivo (+10 mV) que empurra Ca2+ e Mg2+ pela via paracelular; a furosemida bloqueia esse mecanismo, induzindo calciúria."
    },
    "costanzo": {
      "chapter": "Capítulo 6: Fisiologia Renal — Mecanismos de Transporte Tubular e Diuréticos",
      "pages": "pp. 248-268",
      "summary": "Costanzo traça o mapa farmacológico definitivo dos DIURÉTICOS e seus sítios de ação tubulares: 1) Inibidores da Anidrase Carbônica (Acetazolamida): atuam no Túbulo Proximal bloqueando a reabsorção de bicarbonato e sódio; 2) Diuréticos de Alça (Furosemida, Bumetanida): atuam no Ramo Espesso Ascendente inibindo o cotransportador NKCC2; são os mais potentes da farmacologia médica (\"diuréticos de alta eficácia\"); 3) Tiazídicos (Hidroclorotiazida, Clortalidona): atuam no Túbulo Contorcido Distal inibindo o cotransportador Na+/Cl- (NCC); aumentam a reabsorção de cálcio; 4) Diuréticos Poupadores de Potássio: atuam no Ducto Coletor bloqueando o canal de sódio ENaC (Amilorida, Triantereno) ou antagonizando os receptores de mineralocorticoide da aldosterona (Espironolactona, Eplerenona), inibindo a perda urinária de potássio.",
      "keyPoint": "Furosemida inibe NKCC2 na alça; Tiazídicos inibem NCC no túbulo distal; Espironolactona antagoniza a aldosterona no ducto coletor."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 35: Transporte Tubular de Glicose e Limiar de Transporte (Tm)",
      "pages": "pp. 775-798",
      "summary": "Boron formaliza o Transporte Máximo Tubular de Glicose (Tm_glicose ≈ 375 mg/min): em normoglicemia (glicemia de 70 a 100 mg/dL), a carga filtrada de glicose é de ~100 mg/min, sendo 100% reabsorvida no túbulo proximal via SGLT2 (90% no segmento S1) e SGLT1 (10% no segmento S3). Quando a glicemia ultrapassa o LIMIAR RENAL DE GLICOSE (~180 a 200 mg/dL), a carga filtrada satura o Tm; o excesso não reabsorvido transborda para a urina definitiva (GLICOSÚRIA), atuando como soluto osmoticamente ativo que retém água na luz tubular, deflagrando DIURESE OSMÓTICA com poliúria clássica e polidipsia no diabetes descompensado.",
      "keyPoint": "Limiar renal de glicose é ~180 mg/dL: acima desse valor, os transportadores SGLT saturam e a glicose extravasa na urina, gerando diurese osmótica."
    },
    "openstax": {
      "section": "Chapter 25: The Urinary System — Section 25.5: Tubular Reabsorption and Secretion",
      "summary": "OpenStax ilustra o corte transversal das células epiteliais de cada segmento tubular: o túbulo proximal com abundância de mitocôndrias e borda em escova densa de microvilosidades para maximizar a área de absorção versus o epitélio cúbico liso do ducto coletor.",
      "keyPoint": "A borda em escova do túbulo proximal amplia a área de superfície de absorção em mais de 20 vezes."
    },
    "merck": {
      "section": "Nefrologia e Farmacologia — Síndrome de Bartter, Gitelman e Terapia Diurética",
      "summary": "O Manual MSD correlaciona canalopatias congênitas que mimetizam diuréticos: a Síndrome de Bartter (mutação inativadora no NKCC2 ou ROMK na alça de Henle, simulando o uso contínuo de furosemida com hipocalemia, alcalose metabólica e hipercalciúria) e a Síndrome de Gitelman (mutação inativadora no NCC do túbulo distal, simulando uso crônico de tiazídicos com hipocalemia e hipocalciúria).",
      "keyPoint": "Síndrome de Bartter mimetiza uso crônico de furosemida; Síndrome de Gitelman mimetiza uso de tiazídicos."
    },
    "researchTopics": [
      {
        "title": "Cotransportador NKCC2 e Mecanismo da Furosemida",
        "concept": "Mecanismo molecular do carreador eletroneutro 1Na+:1K+:2Cl- no ramo espesso ascendente e sua inibição estéreo-específica pela furosemida na alça de Henle.",
        "formulaOrLaw": "Bloqueio de NKCC2 -> Abolição do Gradiente Hiperosmótico Medular -> Diurese Maciça",
        "keyReference": "Berne & Levy, Cap. 33",
        "query": "nkcc2 cotransporter furosemide loop diuretics thick ascending limb romk"
      },
      {
        "title": "Transporte Máximo de Glicose (Tm) e Diurese Osmótica",
        "concept": "Cinética de saturação dos carreadores SGLT2/SGLT1 no túbulo proximal quando a glicemia plasmática excede o limiar de 180-200 mg/dL gerando perda urinária de água.",
        "formulaOrLaw": "Excreção de Glicose = Carga Filtrada (TFG * Glicemia) - Reabsorção Máxima (Tm)",
        "keyReference": "Costanzo, Cap. 6",
        "query": "glucose transport maximum renal threshold sglt2 osmotic diuresis diabetes"
      },
      {
        "title": "Células Principais vs. Intercaladas do Ducto Coletor",
        "concept": "Divisão funcional no epitélio do ducto coletor entre a regulação de volume/sódio/potássio por canais ENaC e a regulação ácido-base por bombas ativas de H+ e trocadores de bicarbonato.",
        "formulaOrLaw": "Célula Principal: ENaC (Na+ in) / ROMK (K+ out) | Célula Intercalada A: H+-ATPase / H+/K+-ATPase",
        "keyReference": "Guyton & Hall, Cap. 27",
        "query": "principal cells intercalated cells collecting duct enac romk aldosterone h atpase"
      },
      {
        "title": "Farmacologia dos Diuréticos Poupadores de Potássio",
        "concept": "Inibição direta de canais de sódio apicais ENaC por amilorida ou antagonismo competitivo do receptor citosólico de mineralocorticoide por espironolactona.",
        "formulaOrLaw": "Bloqueio de ENaC -> Redução do Potencial Transepitelial Negativo -> Menor Secreção de K+ e H+",
        "keyReference": "Boron & Boulpaep, Cap. 35",
        "query": "potassium sparing diuretics spironolactone eplerenone amiloride enac collecting duct"
      }
    ]
  },
  {
    "topicName": "Contracorrente e ADH",
    "phaseId": "w5_p3",
    "level": 27,
    "worldId": "w5",
    "category": "Fisiologia Renal & Ácido-Base",
    "phaseTitle": "Mecanismo de Contracorrente, ADH & Osmorregulação",
    "aliases": [
      "Multiplicador de Contracorrente",
      "ADH e Vasopressina",
      "Osmorregulação",
      "Aquaporina 2",
      "Ureia Medular"
    ],
    "specialistTitle": "Berne & Levy",
    "specialistBadge": "Osmorregulação Renal",
    "guyton": {
      "chapter": "Unidade V — Capítulo 28: Concentração e Diluição da Urina; Regulação da Osmolaridade do Líquido Extracelular",
      "pages": "pp. 361-378",
      "summary": "Os rins humanos têm a extraordinária capacidade de concentrar a urina até 1.200 a 1.400 mOsm/L (para conservar água na desidratação) ou diluí-la até 50 mOsm/L (para eliminar excesso hídrico), mantendo a osmolaridade do plasma rigorosamente em ~290 mOsm/L. Essa façanha biofísica é realizada pelo MECANISMO MULTIPLICADOR DE CONTRACORRENTE na medula renal: 1) A Alça de Henle dos néfrons justamedulares longos opera como um multiplicador de contracorrente, bombeando NaCl para fora através do ramo ascendente impermeável à água; 2) O fluxo sanguíneo lento em contracorrente nos capilares retos (Vasa Recta) atua como um TROCADOR DE CONTRACORRENTE, que remove o excesso de água absorvida sem dispersar o gradiente osmótico medular; 3) A Reciclagem de Ureia (via transportadores UT-A1 e UT-A3 ativados por ADH) contribui com quase 50% de todo o gradiente hiperosmótico no interstício da medula interna profunda.",
      "keyPoint": "O multiplicador de contracorrente na alça de Henle e vasa recta constrói um gradiente medular de até 1.200 mOsm/L; o ADH permite à urina equilibrar-se com esse meio concentrado."
    },
    "berne": {
      "chapter": "Capítulo 34: Concentração da Urina, Eixo Hipotalâmico-Neuro-Hipofisário e ADH",
      "pages": "pp. 635-654",
      "summary": "Berne & Levy detalha a osmorregulação central: os OSMORRECEPTORES HIPOTALÂMICOS (nos núcleos supraóptico e paraventricular, e nos órgãos circunventriculares OVLT) são mecanorreceptores celulares de extrema precisão, capazes de detectar variações de apenas 1% na osmolaridade plasmática efetiva. Quando a osmolaridade plasmática sobe acima do limiar de 285 mOsm/L (ex: perda hídrica pelo suor), a saída osmótica de água retrai os osmorreceptores; isso dispara potenciais de ação que estimulam o CENTRO DA SEDE no córtex e a secreção de HORMÔNIO ANTIDIURÉTICO (ADH / Arginina-Vasopressina) pela neuro-hipófise para a circulação sistêmica.",
      "keyPoint": "Variação de apenas 1% na osmolaridade do plasma já deflagra secreção imediata de ADH e sensação de sede para proteger o volume celular cerebral."
    },
    "costanzo": {
      "chapter": "Capítulo 6: Fisiologia Renal — Ação Celular do ADH e Aquaporinas",
      "pages": "pp. 268-278",
      "summary": "Costanzo disseca a cascata celular do ADH nas Células Principais do ducto coletor: o ADH liga-se aos receptores basolaterais V2 acoplados à proteína Gs -> ativa a adenilil-ciclase -> eleva o AMPc intracelular -> ativa a Proteína Quinase A (PKA) -> a PKA fosforila e estimula o tráfego exocítico de vesículas contendo CANAIS DE AQUAPORINA 2 (AQP2), promovendo sua inserção rápida na MEMBRANA APICAL luminal. A água da luz tubular passa então livremente por osmose para o interior da célula via AQP2 apical e sai para o interstício via AQP3 e AQP4 basolaterais constitutivas, concentrando a urina ao máximo (antidiurese). Na ausência de ADH, os canais AQP2 são reinternalizados por endocitose, a membrana apical torna-se impermeável à água e a urina sai diluída (diurese copiosa de até 20 litros por dia).",
      "keyPoint": "O ADH via receptor V2 e AMPc insere canais Aquaporina 2 na membrana apical do ducto coletor, permitindo reabsorção em massa de água."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 38: Fisiopatologia da Osmorregulação e Diabetes Insipidus",
      "pages": "pp. 830-852",
      "summary": "Boron compara as duas formas clínicas de DIABETES INSIPIDUS (DI): 1) Diabetes Insipidus Central / Neurogênico (falha na síntese ou secreção de ADH pelo hipotálamo/hipófise por trauma craniano ou tumor); o paciente urina 15 a 20 L/dia de urina hipotônica (< 100 mOsm/L); RESPONDE imediatamente à administração de Desmopressina exógena (DDAVP); 2) Diabetes Insipidus Nefrogênico (resistência renal ao ADH por mutação no receptor V2 ou no gene da AQP2, ou por toxicidade crônica pelo LÍTIO utilizado no transtorno bipolar); NÃO responde ao DDAVP, pois os receptores renais são insensíveis.",
      "keyPoint": "DI Central responde à desmopressina exógena; DI Nefrogênico (ex: por intoxicação por lítio) não responde porque o túbulo renal é insensível ao ADH."
    },
    "openstax": {
      "section": "Chapter 25: The Urinary System — Section 25.6: Tubular Secretion and Urine Concentration",
      "summary": "OpenStax ilustra a arquitetura anatômica dos néfrons corticais (alças curtas que não penetram a medula profunda) versus néfrons justamedulares (alças longas que atingem a ponta da papila renal e são os únicos construtores do gradiente medular concentrador).",
      "keyPoint": "Apenas os néfrons justamedulares (15% dos néfrons) com alças de Henle longas constroem o gradiente hiperosmótico de contracorrente."
    },
    "merck": {
      "section": "Endocrinologia e Nefrologia — Síndrome da Secreção Inapropriada de ADH (SIADH)",
      "summary": "O Manual MSD detalha a SIADH (secreção desregulada e excessiva de ADH por carcinomas pulmonares de pequenas células, infecções do SNC ou drogas): retenção contínua de água livre gera HIPONATREMIA HIPO-OSMOLAR EUVOLÊMICA com urina inapropriadamente concentrada (> 100 mOsm/L). O tratamento inclui restrição hídrica rigorosa e antagonistas dos receptores V2 do ADH (Vaptanos: Tolvaptano).",
      "keyPoint": "Na SIADH há retenção patológica de água livre com hiponatremia grave e urina concentrada; o tratamento baseia-se em restrição hídrica e vaptanos."
    },
    "researchTopics": [
      {
        "title": "Multiplicador de Contracorrente e Gradiente Hiperosmótico",
        "concept": "Mecanismo no qual a separação entre transporte ativo de solutos sem água no ramo ascendente e absorção passiva de água no ramo descendente amplifica o gradiente corticomedular.",
        "formulaOrLaw": "Gradiente Corticomedular: de 300 mOsm/L no córtex até 1.200 mOsm/L na papila",
        "keyReference": "Guyton & Hall, Cap. 28",
        "query": "countercurrent multiplier loop of henle vasa recta hyperosmotic medullary gradient"
      },
      {
        "title": "Cascata Molecular do Receptor V2 e Aquaporina 2 (AQP2)",
        "concept": "Sinalização transmembrana por proteína Gs e AMPc comandando a translocação de vesículas contendo homotetrâmeros de aquaporina 2 para a membrana luminal do ducto coletor.",
        "formulaOrLaw": "ADH -> Receptor V2 -> Gs -> Adenilil Ciclase -> ↑ AMPc -> PKA -> Exocitose de AQP2",
        "keyReference": "Costanzo, Cap. 6",
        "query": "vasopressin v2 receptor aquaporin 2 trafficking collecting duct pka phosphorylation"
      },
      {
        "title": "Diagnóstico Diferencial: Diabetes Insipidus Central vs. Nefrogênico",
        "concept": "Protocolo clínico de privação hídrica associado ao teste com desmopressina sintética para discriminação entre deficiência secretória hipofisária e resistência do epitélio tubular.",
        "formulaOrLaw": "Teste do DDAVP: DI Central (Urina concentra > 50%) vs. DI Nefrogênico (Sem resposta)",
        "keyReference": "Boron & Boulpaep, Cap. 38",
        "query": "diabetes insipidus water deprivation test desmopressin ddavp central nephrogenic"
      },
      {
        "title": "Fisiopatologia da SIADH e Tratamento com Vaptanos",
        "concept": "Hiperprodução ectópica de vasopressina promovendo expansão subclínica do LEC, natriurese secundária por ANP e hiponatremia dilucional perigosa.",
        "formulaOrLaw": "SIADH: Hiponatremia Hipotônica + Urina Concentrada (> 100 mOsm/L) + Euvolemia Clínica",
        "keyReference": "Berne & Levy, Cap. 34",
        "query": "syndrome of inappropriate adh secretion siadh hyponatremia vaptans tolvaptan"
      }
    ]
  },
  {
    "topicName": "Equilíbrio Ácido-Base",
    "phaseId": "w5_p4",
    "level": 28,
    "worldId": "w5",
    "category": "Fisiologia Renal & Ácido-Base",
    "phaseTitle": "Equilíbrio Ácido-Base & Compensação",
    "aliases": [
      "Equilíbrio Ácido Base",
      "Equação de Henderson-Hasselbalch",
      "Acidose e Alcalose",
      "Ânion Gap",
      "Compensação Pulmonar e Renal"
    ],
    "specialistTitle": "Costanzo & Boron",
    "specialistBadge": "Gasometria & Ácido-Base",
    "guyton": {
      "chapter": "Unidade V — Capítulo 31: Regulação do Equilíbrio Ácido-Básico",
      "pages": "pp. 409-428",
      "summary": "A concentração fisiológica de íons de hidrogênio livres no sangue arterial é extremamente diminuta (~40 nEq/L), correspondendo a um pH arterial rigidamente controlado entre 7,35 e 7,45 (limites compatíveis com a vida: 6,8 a 8,0). O organismo dispõe de TRÊS LINHAS DE DEFESA escalonadas no tempo: 1) TAMPÕES QUÍMICOS DOS LÍQUIDOS CORPORAIS (atuam em fração de segundos): o Sistema Tampão Bicarbonato (H+ + HCO3- <-> H2CO3 <-> CO2 + H2O), o tampão fosfato intracelular/renal e as proteínas plasmáticas/intracelulares (hemoglobina e albumina); 2) COMPENSAÇÃO RESPIRATÓRIA (atua em minutos a poucas horas): o centro respiratório bulbar ajusta a frequência e profundidade ventilatória para eliminar ou reter CO2 volátil; 3) COMPENSAÇÃO RENAL (a mais poderosa, porém lenta, atuando em 24 a 72 horas): os rins reabsorvem 100% do bicarbonato filtrado (via trocador NHE3 proximal), regeneram novo bicarbonato no plasma e excretam a carga ácida líquida não-volátil diária (~70 a 100 mEq/dia) na forma de Acidez Titulável (tamponamento por fosfato H2PO4-) e Íons Amônio (NH4+ sintetizado a partir da glutamina no túbulo proximal).",
      "keyPoint": "O pH sanguíneo normal é 7,35 a 7,45. A defesa ácido-base opera em três etapas: 1) Tampões químicos imediatos; 2) Compensação respiratória em minutos; 3) Compensação renal em 1 a 3 dias."
    },
    "berne": {
      "chapter": "Capítulo 35: Regulação Renal e Sistêmica do Equilíbrio Ácido-Básico",
      "pages": "pp. 656-678",
      "summary": "Berne & Levy detalha a EQUAÇÃO DE HENDERSON-HASSELBALCH para o sistema tampão bicarbonato: pH = pKa + log10([HCO3-] / [CO2 dissolvido]), onde pKa = 6,1 e [CO2 dissolvido] = 0,03 * PCO2. Portanto: pH = 6,1 + log10([HCO3-] / (0,03 * PCO2)). Em condições ideais: pH = 6,1 + log10(24 / (0,03 * 40)) = 6,1 + log10(24 / 1,2) = 6,1 + log10(20) = 6,1 + 1,30 = 7,40. Demonstra que o pH é governado pela RAZÃO entre o bicarbonato metabólico (regulada pelos rins no numerador) e a PCO2 respiratória (regulada pelos pulmões no denominador). Se a razão [HCO3-] / PCO2 se mantiver igual a 20:1, o pH permanecerá rigorosamente 7,40.",
      "keyPoint": "Pela Equação de Henderson-Hasselbalch, o pH depende estritamente da razão entre [HCO3-] renal e PCO2 pulmonar (Razão normal de 20:1 resulta em pH 7,40)."
    },
    "costanzo": {
      "chapter": "Capítulo 7: Fisiologia Ácido-Básica — Diagnóstico dos 4 Distúrbios Primários e Ânion Gap",
      "pages": "pp. 285-305",
      "summary": "Costanzo estabelece a tabela diagnóstica definitiva dos quatro distúrbios primários: 1) ACIDOSE METABÓLICA: distúrbio primário = [HCO3-] baixo (< 22 mEq/L) com pH < 7,35; Compensação respiratória imediata: hiperventilação compensatória para lavar CO2 (Respiração de Kussmaul), calculada pela Fórmula de Winter: PCO2 esperada = (1,5 * [HCO3-]) + 8 ± 2; 2) ALCALOSE METABÓLICA: distúrbio primário = [HCO3-] alto (> 26 mEq/L) com pH > 7,45; Compensação: hipoventilação alveolar para reter CO2; 3) ACIDOSE RESPIRATÓRIA: distúrbio primário = PCO2 alto (> 45 mmHg) por hipoventilação (DPOC, opioides, parada) com pH < 7,35; Compensação renal: síntese e retenção de HCO3- e excreção de H+; 4) ALCALOSE RESPIRATÓRIA: distúrbio primário = PCO2 baixo (< 35 mmHg) por hiperventilação (ansiedade, crise de pânico, dor, altitude) com pH > 7,45; Compensação renal: excreção de HCO3-. Detalha o ÂNION GAP sérico: AG = [Na+] - ([Cl-] + [HCO3-]), normal entre 8 e 12 mEq/L.",
      "keyPoint": "Fórmula de Winter prediz a compensação respiratória na acidose metabólica. Ânion Gap elevado (> 12 mEq/L) indica cetoacidose, acidose lática ou uremia."
    },
    "specialistSource": {
      "chapter": "Boron & Boulpaep — Capítulo 39: Fisiopatologia Ácido-Base e Amoniogênese Renal",
      "pages": "pp. 855-885",
      "summary": "Boron disseca a Amoniogênese Renal Proximal: o metabolismo de 1 molécula de glutamina pelas células tubulares gera 2 íons amônio (NH4+) e regenera 2 novos íons bicarbonato (HCO3-) que são devolvidos ao plasma. O NH4+ é secretado ativamente na luz tubular pelo trocador apical NHE3 (substituindo o próton H+), sendo a principal via renal adaptativa para excretar grandes sobrecargas ácidas na cetoacidose diabética.",
      "keyPoint": "A glutamina metabolizada no túbulo proximal sintetiza novos íons bicarbonato para o sangue e excreta amônio na urina."
    },
    "openstax": {
      "section": "Chapter 26: Fluid, Electrolyte, and Acid-Base Balance — Section 26.4: Acid-Base Balance",
      "summary": "OpenStax fornece fluxogramas de decisão gasométrica baseados nos três parâmetros laboratoriais fundamentais: pH, PCO2 e bicarbonato sérico.",
      "keyPoint": "Se o distúrbio e a alteração da PCO2 caminham na mesma direção, o distúrbio é primariamente metabólico; se em direções opostas, é primariamente respiratório."
    },
    "merck": {
      "section": "Nefrologia e Terapia Intensiva — Distúrbios Ácido-Básicos Mistos e Manejo da Cetoacidose",
      "summary": "O Manual MSD aborda as causas clássicas de Acidose Metabólica com Ânion Gap Elevado através do mnemônico MUDPILES: Metanol, Uremia, Cetoacidose Diabética, Paraleído, Isoniazida/Infecção, Acidose Lática, Etilenoglicol e Salicilatos (Aspirina). Detalha a conduta na crise de pânico (alcalose respiratória aguda com parestesias periorais e espasmo carpopedal por hipocalcemia ionizada induzida por alcalose).",
      "keyPoint": "Na alcalose respiratória aguda por ansiedade, o aumento da ligação do cálcio à albumina gera hipocalcemia ionizada com tetania e parestesias."
    },
    "researchTopics": [
      {
        "title": "Equação de Henderson-Hasselbalch e Tampão Bicarbonato",
        "concept": "Relação quantitativa entre o pH arterial e a proporção estequiométrica molar entre o bicarbonato plasmático e o dióxido de carbono dissolvido.",
        "formulaOrLaw": "pH = 6,1 + log10([HCO3-] / [0,03 * PCO2]) -> Razão 20:1 resulta em pH 7,40",
        "keyReference": "Berne & Levy, Cap. 35",
        "query": "henderson hasselbalch equation bicarbonate buffer system ph blood gas analysis"
      },
      {
        "title": "Acidose Metabólica, Fórmula de Winter e Ânion Gap",
        "concept": "Validação da suficiência compensatória respiratória e classificação diagnóstica em acidose com hiato aniônico elevado versus acidose hiperclorêmica normal.",
        "formulaOrLaw": "Fórmula de Winter: PCO2 esperada = (1,5 * [HCO3-]) + 8 ± 2 | Ânion Gap = Na - (Cl + HCO3)",
        "keyReference": "Costanzo, Cap. 7",
        "query": "metabolic acidosis winter formula anion gap ketoacidosis lactic acidosis"
      },
      {
        "title": "Amoniogênese Renal e Excreção Líquida de Ácidos",
        "concept": "Desaminação da glutamina no túbulo contorcido proximal gerando novos íons bicarbonato para a circulação e íons amônio para excreção urinária.",
        "formulaOrLaw": "1 Glutamina -> 2 NH4+ (secretados via NHE3) + 2 HCO3- novos (reabsorvidos)",
        "keyReference": "Boron & Boulpaep, Cap. 39",
        "query": "renal ammoniagenesis glutamine metabolism net acid excretion titratable acid"
      },
      {
        "title": "Alcalose Respiratória Aguda e Tetania por Hipocalcemia",
        "concept": "Mecanismo no qual a perda excessiva de CO2 alcaliniza o plasma, liberando prótons da albumina e atraindo cálcio ionizado livre, precipitando espasmos musculares.",
        "formulaOrLaw": "Alcalose -> H+ dissocia da Albumina -> Sítios negativos ligam Ca2+ livre -> Queda do Ca2+ ionizado",
        "keyReference": "Guyton & Hall, Cap. 31",
        "query": "respiratory alkalosis hyperventilation ionized hypocalcemia tetany carpopedal spasm"
      }
    ]
  },
  {
    "topicName": "Fisiologia Integrada do Exercício",
    "phaseId": "w5_p5",
    "level": 29,
    "worldId": "w5",
    "category": "Integração Sistêmica & Fisiologia do Esforço",
    "phaseTitle": "Integração Cardio-Respiratória no Exercício Intenso",
    "aliases": [
      "Fisiologia do Exercício",
      "VO2 Máximo",
      "Limiar de Lactato",
      "Consumo de Oxigênio",
      "Equação de Fick no Esforço"
    ],
    "specialistTitle": "Ganong & West",
    "specialistBadge": "Fisiologia do Esforço",
    "guyton": {
      "chapter": "Unidade XIV — Capítulo 85: Fisiologia Esportiva; Músculos no Exercício, Respiração e Sistema Cardiovascular",
      "pages": "pp. 1065-1080",
      "summary": "Durante o exercício físico dinâmico extenuante, os sistemas cardiovascular, respiratório, metabólico e neuromuscular operam em perfeita sintonia integrativa para suprir a demanda energética colossal dos músculos esqueléticos em contração, cujo consumo metabólico de oxigênio pode aumentar em mais de 20 a 50 vezes em relação ao repouso. O Débito Cardíaco sobe de 5 L/min para até 20 a 25 L/min em indivíduos não treinados e 35 L/min em atletas maratonistas de elite, impulsionado por elevação dramática da Frequência Cardíaca (até a FC máxima ≈ 220 - idade) e aumento do Volume Sistólico (potencializado pelo mecanismo de Frank-Starling via bomba muscular venosa e inotropismo simpático). A Pressão Arterial Sistólica (PAS) eleva-se progressivamente com o esforço (de 120 para 180-200 mmHg pelo alto débito ejetado na aorta), enquanto a Pressão Arterial Diastólica (PAD) permanece inalterada ou até declina ligeiramente (decorrente da intensa vasodilatação arteriolar metabólica provocada por adenosina, lactato, K+ e óxido nítrico nos leitos musculares ativos, que derruba a Resistência Periférica Total).",
      "keyPoint": "No exercício dinâmico: o débito cardíaco sobe até 5x; a PAS se eleva enquanto a PAD fica estável ou cai devido à intensa vasodilatação muscular metabólica."
    },
    "berne": {
      "chapter": "Capítulo 20: Circulação no Músculo Esquelético e Hiperemia Funcional Ativa",
      "pages": "pp. 370-388",
      "summary": "Berne & Levy detalha a HIPEREMIA FUNCIONAL / ATIVA no tecido muscular: a estimulação simpática generalizada induz vasoconstrição mediada por receptores alfa-1 adrenérgicos em territórios inativos (circulação esplâncnica, renal e cutânea inicial, desviando o fluxo para os músculos). No entanto, nos próprios músculos esqueléticos em exercício, esse tônus vasoconstritor simpático é completamente sobrepujado e anulado pela liberação local contínua de metabólitos vasodilatadores sintetizados pelas fibras musculares ativas (adenosina da quebra de ATP, K+ de efluxo dos potenciais de ação repetidos, íons H+, osmolaridade aumentada e óxido nítrico endotelial). Esse fenômeno biofísico de sobrepujar a inervação autonômica sistêmica por controle metabólico local denomina-se SIMPATÓLISE FUNCIONAL.",
      "keyPoint": "Simpatólise Funcional: os metabólitos locais (adenosina, K+, lactato) anulam o tônus vasoconstritor simpático alfa-1 nos músculos ativos, garantindo hiperemia maciça."
    },
    "costanzo": {
      "chapter": "Capítulo 3 e 5: Fisiologia Cardiovascular e Respiratória Integradas no Exercício",
      "pages": "pp. 168-172, 214-218",
      "summary": "Costanzo analisa a EQUAÇÃO DE FICK no exercício: VO2 = DC * (CaO2 - CvO2). No esforço exaustivo, o consumo corporal de oxigênio (VO2) atinge seu teto genético e de treinamento denominado CONSUMO MÁXIMO DE OXIGÊNIO (VO2 máx). A diferença arteriovenosa de oxigênio (CaO2 - CvO2) alarga-se espetacularmente: enquanto em repouso o sangue venoso misto retorna com 75% de saturação (CvO2 ≈ 15 mL/dL), no exercício vigoroso os músculos extraem quase todo o oxigênio disponível, derrubando a saturação venosa para menos de 20-25% (CvO2 cai para 4-5 mL/dL). Aborda o LIMIAR DE LACTATO (Limiar Anaeróbio): intensidade metabólica na qual a taxa de produção de lactato pelo metabolismo glicolítico supera a capacidade de metabolização hepática e muscular oxidativa, acumulando ácido lático no sangue.",
      "keyPoint": "No esforço máximo, os músculos extraem tanto O2 que a saturação venosa cai de 75% para menos de 20%, alargando a diferença arteriovenosa ao extremo."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 9: O Sistema Respiratório sob Estresse: Exercício e Altitude",
      "pages": "pp. 143-158",
      "summary": "John B. West explica o Ponto de Quebra Ventilatório (Compensação Respiratória do Limiar de Lactato): quando o lactato se acumula no sangue, a acidose metabólica lática estimula intensamente os quimiorreceptores carotídeos periféricos, deflagrando uma hiperventilação desproporcional ao consumo de O2 (a ventilação minuto sobe de 6 L/min no repouso para mais de 120 a 150 L/min no esforço máximo!). Essa hiperventilação de urgência \"lava\" o CO2 arterial, derrubando a PaCO2 abaixo de 35 mmHg e compensando parcialmente a acidose metabólica.",
      "keyPoint": "A hiperventilação acima do limiar de lactato elimina CO2 em massa (PaCO2 cai), constituindo a compensação respiratória da acidose lática de esforço."
    },
    "openstax": {
      "section": "Chapter 20: Blood Vessels — Section 20.5: Circulatory Pathways (Exercise Adaptations)",
      "summary": "OpenStax ilustra o desvio hemodinâmico (\"shunting\"): em repouso os músculos recebem cerca de 20% do débito cardíaco (1 L/min); em exercício intenso, recebem mais de 80% a 85% de todo o débito cardíaco bombeado pelo coração (mais de 20 L/min).",
      "keyPoint": "O fluxo sanguíneo muscular pode saltar de 1 L/min no repouso para mais de 20 L/min no exercício máximo."
    },
    "merck": {
      "section": "Medicina do Esporte e Cardiologia — Teste Ergométrico e Ergoespirometria Cardiopulmonar",
      "summary": "O Manual MSD aborda o Teste de Esforço Cardiopulmonar (TECP / Ergoespirometria): quantificação direta do VO2 máx, do primeiro limiar ventilatório (LV1 / aeróbio) e segundo limiar ventilatório (LV2 / ponto de quebra respiratória do lactato), utilizado para estratificação de risco cirúrgico cardíaco e prescrição de treinamento esportivo.",
      "keyPoint": "A ergoespirometria mede diretamente as trocas gasosas respiração a respiração, definindo a capacidade funcional cardiovascular do paciente."
    },
    "researchTopics": [
      {
        "title": "Equação de Fick e Consumo Máximo de Oxigênio (VO2 máx)",
        "concept": "Balanço da taxa metabólica oxidativa corporal como o produto entre o débito cardíaco de entrega e a taxa de extração tecidual muscular periférica de O2.",
        "formulaOrLaw": "VO2 = Débito Cardíaco * (CaO2 - CvO2)",
        "keyReference": "Costanzo, Cap. 3",
        "query": "fick principle vo2 max maximal oxygen consumption exercise physiology"
      },
      {
        "title": "Simpatólise Funcional e Vasodilatação Metabólica Muscular",
        "concept": "Mecanismo celular no qual a secreção de adenosina, óxido nítrico e íons K+ bloqueia a vasoconstrição simpática alfa-1 no leito muscular esquelético ativo.",
        "formulaOrLaw": "Controle Metabólico Local > Tônus Simpático Central Sistêmico",
        "keyReference": "Berne & Levy, Cap. 20",
        "query": "functional sympatholysis exercise metabolic vasodilation skeletal muscle hyperemia"
      },
      {
        "title": "Limiar de Lactato e Ponto de Quebra Ventilatório",
        "concept": "Transição fisiológica na qual a glicólise anaeróbia ultrapassa o clareamento tecidual gerando acidose lática que estimula os quimiorreceptores periféricos à hiperventilação.",
        "formulaOrLaw": "Acidose Lática -> Estímulo dos Corpos Carotídeos -> Hiperventilação Desproporcional -> PaCO2 cai",
        "keyReference": "West, Fisiologia Respiratória, Cap. 9",
        "query": "lactate threshold ventilatory breakpoint anaerobic threshold exercise acid base"
      },
      {
        "title": "Hemodinâmica Pressórica no Exercício: PAS vs. PAD",
        "concept": "Comportamento divergente da pressão sistólica que sobe com o débito cardíaco ejetado versus pressão diastólica que se mantém ou cai devido à queda da RPT.",
        "formulaOrLaw": "PAS ↑↑ (pelo DC aumentado) + PAD ↔/↓ (pela RPT diminuída)",
        "keyReference": "Guyton & Hall, Cap. 85",
        "query": "blood pressure response dynamic exercise systolic diastolic systemic vascular resistance"
      }
    ]
  },
  {
    "topicName": "Choque e Fisiologia Extrema",
    "phaseId": "w5_p6",
    "level": 30,
    "worldId": "w5",
    "category": "Integração Sistêmica & Fisiologia do Esforço",
    "phaseTitle": "Choque Circulatório, Hemorragia & Grandes Altitudes",
    "aliases": [
      "Choque Circulatório",
      "Choque Hipovolêmico",
      "Choque Séptico",
      "Grandes Altitudes",
      "Aclimatação à Hipóxia"
    ],
    "specialistTitle": "Guyton & West",
    "specialistBadge": "Fisiologia Extrema & Choque",
    "guyton": {
      "chapter": "Unidade IV e VIII — Capítulos 24 e 44: Choque Circulatório e Fisiologia da Aviação, das Altitudes e do Espaço",
      "pages": "pp. 289-304, 557-570",
      "summary": "O CHOQUE CIRCULATÓRIO é a síndrome clínica grave de colapso hemodinâmico agudo caracterizada por inadequação generalizada do fluxo sanguíneo em nutrir os tecidos celulares com oxigênio e remover metabólitos, culminando em disfunção celular difusa e acidose lática profunda. Classificação hemodinâmica dos 4 tipos de choque: 1) CHOQUE HIPOVOLÊMICO (hemorragia aguda maciça, desidratação extrema, grandes queimaduras): perda crítica de volume intravascular com queda da pré-carga, do débito cardíaco e das pressões de enchimento; a resposta neuro-humoral compensatória é imediata e intensa: descarga simpática adrenérgica em massa (taquicardia, vasoconstrição periférica intensa com pele fria e pegajosa), ativação do SRAA (retenção de Na+ e água) e secreção de vasopressina (ADH); 2) CHOQUE CARDIOGÊNICO (infarto agudo extenso, miocardite): falência intrínseca da bomba miocárdica com DC baixo e pressões de enchimento altas (congestão pulmonar); 3) CHOQUE OBSTRUTIVO (embolia pulmonar maciça, tamponamento cardíaco, pneumotórax hipertensivo): bloqueio mecânico ao fluxo; 4) CHOQUE DISTRIBUTIVO (Sepse grave, Anafilaxia, Choque Neurogênico): vasodilatação arteriolar periférica descontrolada com colapso da Resistência Periférica Total (o choque séptico apresenta pele inicialmente quente com débito cardíaco hiperdinâmico e má distribuição da microcirculação).",
      "keyPoint": "Choque hipovolêmico = RPT alta e débito baixo (pele fria e pegajosa); Choque séptico distributivo = RPT extremamente baixa por vasodilatação mediada por citocinas (pele quente)."
    },
    "berne": {
      "chapter": "Capítulo 20: Fisiopatologia do Choque Irreversível e Lesão por Isquemia-Reperfusão",
      "pages": "pp. 372-386",
      "summary": "Berne & Levy detalha a transição entre as fases do choque: 1) Choque Compensado: as alças de feedback negativo (barorreflexo, SRAA, transudação reversa transcapilar) mantêm a perfusão dos órgãos vitais (cérebro e coronárias) em detrimento de órgãos esplâncnicos e pele; 2) Choque Progressivo e Irreversível: a isquemia celular sustentada priva os tecidos de ATP, desligando a Na+/K+ ATPase (as células sofrem tumefação e lise); o endotélio capilar sofre necrose com extravasamento maciço de plasma; as toxinas bacterianas e citocinas inflamatórias (TNF-alfa, IL-1, óxido nítrico sintase induzível iNOS) causam paralisia vasomotora terminal refratária à noradrenalina, evoluindo para Síndrome de Disfunção de Múltiplos Órgãos (SDMO) e morte.",
      "keyPoint": "No choque irreversível, a falência da Na+/K+ ATPase e a produção maciça de NO endotelial paralisam a resposta vasomotora, tornando a hipotensão refratária."
    },
    "costanzo": {
      "chapter": "Capítulo 3: Fisiologia Cardiovascular — Resposta Integrada à Hemorragia Aguda",
      "pages": "pp. 172-178",
      "summary": "Costanzo disseca os mecanismos compensatórios sequenciais disparados após a perda de 1.000 a 1.500 mL de sangue (Choque Classe III): 1) Barorreflexo arterial imediato em segundos (taquicardia, vasoconstrição esplâncnica e renal); 2) Reabsorção transcapilar de líquido intersticial (\"autotransfusão\" em minutos: a vasoconstrição arteriolar derruba a pressão hidrostática capilar Pc, de modo que a pressão oncótica πc atrai passivamente mais de 1 litro de fluido do interstício para dentro dos capilares); 3) Ativação do SRAA (angiotensina II vasoconstritora e aldosterona que retém sódio); 4) Secreção de ADH ativada por barorreceptores de baixa pressão atriais, promovendo reabsorção renal de água livre.",
      "keyPoint": "Na hemorragia, a queda da pressão hidrostática capilar faz o líquido do interstício ser puxado para os capilares, recompondo a volemia (autotransfusão)."
    },
    "specialistSource": {
      "chapter": "West — Fisiologia Respiratória — Capítulo 9: Resposta à Altitude Extrema e Hipóxia Hipobárica",
      "pages": "pp. 146-160",
      "summary": "John B. West explica as etapas integradas de ACLIMATAÇÃO A GRANDES ALTITUDES (acima de 4.000 metros, onde a fração de oxigênio do ar continua sendo 21%, mas a pressão barométrica cai de 760 para ~460 mmHg, derrubando a PO2 inspirada): 1) Resposta Imediata (minutos a horas): hipóxia alveolar estimula os corpos carotídeos a deflagrar HIPERVENTILAÇÃO AGUDA; isso expulsa CO2 e gera ALCALOSE RESPIRATÓRIA aguda (que freia temporariamente o centro respiratório bulbar); 2) Resposta Subaguda (2 a 5 dias): os rins compensam a alcalose excretando ativamente bicarbonato na urina, normalizando o pH do líquor e permitindo que a hiperventilação se torne sustentada e profunda; 3) Resposta Hematológica Crônica (2 a 3 semanas): a hipóxia renal continuada estimula a síntese maciça de ERITROPOIETINA (EPO), elevando o hematócrito de 45% para até 60-65% (POLIGLOBULIA ADAPTATIVA DE ALTITUDE), o que restaura o conteúdo arterial de oxigênio (CaO2) para níveis normais ou superiores aos do nível do mar.",
      "keyPoint": "Aclimatação à altitude: hiperventilação imediata (gera alcalose respiratória), compensação renal com perda urinária de bicarbonato em dias e poliglobulia por EPO em semanas."
    },
    "openstax": {
      "section": "Chapter 20: Blood Vessels — Section 20.6: Circulatory Shock and Adaptations",
      "summary": "OpenStax ilustra o ciclo vicioso do choque circulatório não tratado: hipotensão -> isquemia miocárdica -> queda adicional do débito -> acidose lática -> depressão vasomotora e morte celular.",
      "keyPoint": "O tratamento do choque hipovolêmico exige infusão intravenosa imediata de cristaloides aquecidos e transfusão de hemoderivados guiada por metas."
    },
    "merck": {
      "section": "Terapia Intensiva e Emergência — Manejo do Choque Séptico, Hipovolêmico e Mal das Altitudes",
      "summary": "O Manual MSD estabelece o protocolo de ressuscitação hemodinâmica na sepse: coleta de lactato sérico e hemoculturas, antibióticos de amplo espectro na 1ª hora, ressuscitação volêmica com cristaloide (30 mL/kg em 3 horas) e noradrenalina precoce como vasopressor de escolha para restaurar a PAM acima de 65 mmHg. Detalha o Mal Agudo das Montanhas e o Edema Pulmonar de Grande Altitude (HAPE), tratado com descida imediata e oxigênio.",
      "keyPoint": "Na sepse com hipotensão refratária a volume, a Noradrenalina é o vasopressor de primeira linha para restabelecer a PAM em 65 mmHg."
    },
    "researchTopics": [
      {
        "title": "Fisiopatologia dos 4 Tipos de Choque Circulatório",
        "concept": "Diferenciação hemodinâmica entre choque hipovolêmico, cardiogênico, obstrutivo e distributivo com base em débito cardíaco, resistência vascular sistêmica e saturação venosa.",
        "formulaOrLaw": "Choque Hipovolêmico (DC ↓, RPT ↑) vs. Choque Séptico Distributivo (DC ↑/normal, RPT ↓↓)",
        "keyReference": "Guyton & Hall, Cap. 24",
        "query": "circulatory shock classification hypovolemic cardiogenic septic distributive systemic vascular resistance"
      },
      {
        "title": "Autotransfusão Transcapilar e Alça SRAA na Hemorragia",
        "concept": "Mecanismo físico no qual a vasoconstrição arteriolar diminui a pressão hidrostática capilar, permitindo que a pressão oncótica absorva fluido intersticial para dentro do leito vascular.",
        "formulaOrLaw": "Vasoconstrição Arteriolar -> Pc capilar cai -> Influxo Líquido Intersticial para o Sangue",
        "keyReference": "Costanzo, Cap. 3",
        "query": "hemorrhagic shock compensatory mechanisms transcapillary refill raas baroreflex"
      },
      {
        "title": "Etapas Integradas de Aclimatação à Grande Altitude",
        "concept": "Sequência cronológica adaptativa em hipóxia hipobárica: hiperventilação carotídea imediata, compensação renal da alcalose em 48-72h e eritropoiese maciça em 3 semanas.",
        "formulaOrLaw": "Hipóxia Hipobárica -> Hiperventilação -> Bicarbonatúria Renal -> Poliglobulia via EPO",
        "keyReference": "West, Fisiologia Respiratória, Cap. 9",
        "query": "high altitude acclimatization hypoxic hyperventilation respiratory alkalosis polycythemia epo"
      },
      {
        "title": "Manejo do Choque Séptico e Vasopressores (Noradrenalina)",
        "concept": "Restabelecimento do tônus vasomotor na vasodilatação mediada por citocinas e óxido nítrico com agentes alfa-1 agonistas seletivos para restaurar a pressão de perfusão crítica.",
        "formulaOrLaw": "Noradrenalina: Agonismo Alfa-1 (Vasoconstrição Sistêmica) + Beta-1 Moderado -> PAM ≥ 65 mmHg",
        "keyReference": "Berne & Levy, Cap. 20",
        "query": "septic shock resuscitation norepinephrine vasopressors systemic vascular resistance surviving sepsis"
      }
    ]
  }
];
ALL_TOPICS_DATABASE.forEach(t => REFERENCES_DATA.registerTopic(t));

// Delegated listeners para cliques em temas e subtópicos
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    // Clique em botão de subtópico
    const subBtn = e.target.closest('[data-subtopic-title]');
    if (subBtn) {
      e.preventDefault();
      const subTitle = subBtn.dataset.subtopicTitle;
      const modal = document.getElementById('modal-research-deepdive');
      const curTopic = (modal && modal.dataset.currentTopic) ? modal.dataset.currentTopic : subTitle;
      REFERENCES_DATA.openDeepDiveModal(curTopic, subTitle);
      return;
    }

    // Clique em tema de pesquisa geral
    const btn = e.target.closest('[data-deepdive-title]');
    if (btn) {
      e.preventDefault();
      const title = btn.dataset.deepdiveTitle;
      REFERENCES_DATA.openDeepDiveModal(title);
      return;
    }

    // Fechar ao clicar no backdrop
    const modal = document.getElementById('modal-research-deepdive');
    if (modal && e.target === modal) {
      REFERENCES_DATA.closeDeepDiveModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      REFERENCES_DATA.closeDeepDiveModal();
    }
  });
}

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.REFERENCES_DATA = REFERENCES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { REFERENCES_DATA };
}
