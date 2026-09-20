const fs = require('fs');

const w1 = require('./topics-w1.js');
const w2 = require('./topics-w2.js');
const w3 = require('./topics-w3.js');
const w4 = require('./topics-w4.js');
const w5 = require('./topics-w5.js');

const allTopics = [...w1, ...w2, ...w3, ...w4, ...w5];
console.log('Total de temas coletados:', allTopics.length);

const primarySources = {
  guyton: {
    id: 'guyton',
    title: 'Guyton & Hall — Tratado de Fisiologia Médica',
    edition: '15ª edição (2024/2025)',
    authors: 'John E. Hall, PhD; Michael E. Hall, MD, MSc',
    publisher: 'Elsevier',
    isbn: 'ISBN 978-0-443-11101-3',
    tag: 'FONTE PRINCIPAL',
    tagClass: 'badge-primary',
    description: 'A obra mais respeitada e adotada no ensino médico mundial, com ênfase primordial em alças homeostáticas integradas, hemodinâmica e controle orgânico.',
    citation: 'HALL, John E.; HALL, Michael E. Guyton and Hall Textbook of Medical Physiology. 15. ed. Philadelphia: Elsevier, 2024.'
  },
  berne: {
    id: 'berne',
    title: 'Berne & Levy — Fisiologia Médica',
    edition: '7ª edição',
    authors: 'Bruce M. Koeppen, MD, PhD; Bruce A. Stanton, PhD',
    publisher: 'Elsevier',
    isbn: 'ISBN 978-85-352-8789-9',
    tag: 'BIOFÍSICA QUANTITATIVA',
    tagClass: 'badge-primary',
    description: 'Referência internacional para biofísica de membranas celulares, eletrofisiologia dos canais iônicos, cinética enzimática e transporte tubular renal.',
    citation: 'KOEPPEN, Bruce M.; STANTON, Bruce A. Berne & Levy Fisiologia. 7. ed. Rio de Janeiro: Elsevier, 2018.'
  },
  costanzo: {
    id: 'costanzo',
    title: 'Costanzo — Fisiologia',
    edition: '7ª edição',
    authors: 'Linda S. Costanzo, PhD',
    publisher: 'Elsevier',
    isbn: 'ISBN 978-0-323-79333-9',
    tag: 'ALTO RENDIMENTO CLÍNICO',
    tagClass: 'badge-success',
    description: 'Clássico absoluto do aprendizado médico de alto rendimento, célebre por seus fluxogramas causa-efeito, equações passo-a-passo e tabelas diagnósticas.',
    citation: 'COSTANZO, Linda S. Fisiologia. 7. ed. Rio de Janeiro: Elsevier, 2022.'
  },
  boron: {
    id: 'boron',
    title: 'Boron & Boulpaep — Medical Physiology',
    edition: '3ª edição',
    authors: 'Walter F. Boron, MD, PhD; Emile L. Boulpaep, MD',
    publisher: 'Elsevier',
    isbn: 'ISBN 978-1-4557-4377-3',
    tag: 'TRATADO CELULAR & MOLECULAR',
    tagClass: 'badge-purple',
    description: 'O mais abrangente e aprofundado tratado de fisiologia médica contemporânea, detalhando a biologia molecular de transportadores, receptores e bombas.',
    citation: 'BORON, Walter F.; BOULPAEP, Emile L. Medical Physiology: A Cellular and Molecular Approach. 3. ed. Philadelphia: Elsevier, 2017.'
  },
  silverthorn: {
    id: 'silverthorn',
    title: 'Silverthorn — Fisiologia Humana: Uma Abordagem Integrada',
    edition: '8ª edição',
    authors: 'Dee Unglaub Silverthorn, PhD',
    publisher: 'Artmed / Pearson',
    isbn: 'ISBN 978-85-8271-404-1',
    tag: 'ABORDAGEM INTEGRADA',
    tagClass: 'badge-amber',
    description: 'Excelente metodologia pedagógica fundamentada em mapas conceituais de alças reflexas, comunicação parácrina e integração multissistêmica.',
    citation: 'SILVERTHORN, Dee Unglaub. Fisiologia Humana: Uma Abordagem Integrada. 8. ed. Porto Alegre: Artmed, 2020.'
  },
  west: {
    id: 'west',
    title: 'West — Fisiologia Respiratória: Princípios Básicos',
    edition: '10ª edição',
    authors: 'John B. West, MD, PhD; Andrew M. Luks, MD',
    publisher: 'Wolters Kluwer / Artmed',
    isbn: 'ISBN 978-85-8271-477-5',
    tag: 'BÍBLIA RESPIRATÓRIA',
    tagClass: 'badge-primary',
    description: 'O texto supremo e padrão-ouro internacional sobre mecânica ventilatória, relação ventilação-perfusão (V/Q), difusão alvéolo-capilar e aclimatação.',
    citation: 'WEST, John B.; LUKS, Andrew M. Fisiologia Respiratória: Princípios Básicos. 10. ed. Porto Alegre: Artmed, 2017.'
  },
  ganong: {
    id: 'ganong',
    title: 'Ganong — Fisiologia Médica',
    edition: '26ª edição',
    authors: 'Kim E. Barrett, Susan M. Barman, Heddwen L. Brooks, Jason X.-J. Yuan',
    publisher: 'McGraw-Hill / Artmed',
    isbn: 'ISBN 978-85-8055-635-3',
    tag: 'NEURO & ENDÓCRINO',
    tagClass: 'badge-primary',
    description: 'Especializado em neurofisiologia, circuitos sinápticos centrais, regulação autonômica do sistema cardiovascular e endocrinologia médica.',
    citation: 'BARRETT, Kim E. et al. Ganong Fisiologia Médica. 26. ed. Porto Alegre: AMGH / McGraw-Hill, 2021.'
  },
  openstax: {
    id: 'openstax',
    title: 'OpenStax — Anatomy and Physiology 2e',
    edition: '2ª edição (Acesso Aberto Revisado por Pares)',
    authors: 'J. Gordon Betts, Kelly A. Young, James A. Wise, Eddie Johnson et al.',
    publisher: 'OpenStax, Rice University',
    isbn: 'ISBN-13: 978-1-951693-43-5',
    tag: 'FONTE ABERTA REVISADA',
    tagClass: 'badge-success',
    description: 'Livro-texto universitário gratuito de excelência global mantido pela Universidade Rice, com ilustrações anatômicas e celulares revisadas por especialistas.',
    citation: 'BETTS, J. Gordon et al. Anatomy and Physiology 2e. Houston: OpenStax, Rice University, 2022.'
  },
  merck: {
    id: 'merck',
    title: 'Merck Manual of Diagnosis and Therapy (Manual MSD)',
    edition: 'Edição Profissional',
    authors: 'MSD Medical Editorial Board',
    publisher: 'Merck Sharp & Dohme Corp.',
    tag: 'CORRELAÇÃO CLÍNICA',
    tagClass: 'badge-amber',
    description: 'Compêndio de medicina clínica internacional focado na fisiopatologia dos órgãos, análise de exames complementares e manifestações de disfunção.',
    citation: 'MERCK MANUAL. Professional Version: Medical Physiology, Organ Function and Clinical Pathophysiology. Kenilworth: Merck Sharp & Dohme Corp., 2024.'
  }
};

const output = `// Central Academic References and In-Depth Research Topics Database
// 100% integrado ao FisioDengo: 30 Temas Curriculares, 9 Obras de Referência e 120 Subtópicos de Pesquisa

const REFERENCES_DATA = {
  primarySources: ${JSON.stringify(primarySources, null, 2)},

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
      if (String(t.level) === clean || clean === \`nível \${t.level}\` || clean === \`nivel \${t.level}\`) return t;
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
    return \`
      <div class="research-chips-grid">
        \${researchTopics.map(rt => {
          const isActive = (rt.title === activeSubtopicTitle);
          const safeTitle = rt.title.replace(/"/g, '&quot;');
          return \`
            <button type="button" class="research-chip \${isActive ? 'active-chip' : ''}" data-subtopic-title="\${safeTitle}" data-deepdive-title="\${safeTitle}" title="Estudar mecanismo: \${safeTitle}" style="\${isActive ? 'background-color: var(--primary-600); color: #ffffff; border-color: var(--primary-600); font-weight: 700;' : ''}">
              <span class="research-chip-icon">\${bookIcon}</span>
              <span class="research-chip-title">\${rt.title}</span>
              <span class="research-chip-badge">\${isActive ? 'Em Leitura' : 'Aprofundar'}</span>
            </button>
          \`;
        }).join('')}
      </div>
    \`;
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

    contentEl.innerHTML = \`
      <!-- Header do Modal -->
      <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; border-bottom: 1.5px solid var(--border-color); padding-bottom: 16px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap;">
            <span class="badge badge-primary">
              \${Icons.get('book', 14)} Nível \${topic.level} • \${topic.category}
            </span>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--slate-500);">
              Fase: \${topic.phaseTitle || topic.topicName}
            </span>
          </div>
          <h2 style="font-size: 1.45rem; font-weight: 900; color: var(--slate-900); line-height: 1.3;">
            \${topic.topicName}
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
            \${Icons.get('search', 13)} Subtópicos Curriculares Deste Tema (Clique para Mudar):
          </span>
          <span style="font-size: 0.75rem; color: var(--primary-600); font-weight: 700;">
            4 tópicos aprofundados
          </span>
        </div>
        <div class="research-chips-grid" style="gap: 8px;">
          \${topic.researchTopics.map(rt => {
            const isCur = (subtopic && rt.title === subtopic.title);
            const safeT = rt.title.replace(/"/g, '&quot;');
            return \`
              <button type="button" class="research-chip \${isCur ? 'active-chip' : ''}" onclick="REFERENCES_DATA.openDeepDiveModal('\${topic.topicName.replace(/'/g, "\\\\'")}', '\${safeT.replace(/'/g, "\\\\'")}', '\${currentBookObj.id}')" style="\${isCur ? 'background-color: var(--primary-600); color: #ffffff; border-color: var(--primary-600); box-shadow: 0 2px 8px rgba(37,99,235,0.3);' : ''}">
                <span class="research-chip-icon">\${Icons.get('book', 12)}</span>
                <span class="research-chip-title" style="font-weight: \${isCur ? '800' : '600'};">\${rt.title}</span>
                \${isCur ? '<span class="research-chip-badge" style="background: rgba(255,255,255,0.25); color: #fff;">Selecionado</span>' : ''}
              </button>
            \`;
          }).join('')}
        </div>
      </div>

      <!-- Card do Subtópico Selecionado (Mecanismo & Fórmula Dedicados) -->
      \${subtopic ? \`
        <div class="card" style="margin-bottom: 22px; padding: 18px 20px; background: #ffffff; border: 1.5px solid var(--primary-200); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge badge-success" style="font-size: 0.72rem;">
              \${Icons.get('check', 12)} Subtópico Selecionado
            </span>
            <span style="font-size: 0.76rem; color: var(--slate-500); font-family: monospace;">
              Ref: \${subtopic.keyReference || 'Literatura Primária'}
            </span>
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--primary-800); margin-bottom: 10px;">
            \${subtopic.title}
          </h3>
          <p style="font-size: 0.94rem; color: var(--slate-800); line-height: 1.7; margin-bottom: 12px;">
            \${subtopic.concept || subtopic.description || 'Mecanismo celular e biofísico de alta precisão.'}
          </p>
          \${subtopic.formulaOrLaw ? \`
            <div style="background: var(--slate-900); color: #38bdf8; padding: 10px 14px; border-radius: var(--radius-md); font-family: monospace; font-size: 0.88rem; margin-bottom: 10px;">
              <strong>Equação / Lei Fisiológica:</strong> \${subtopic.formulaOrLaw}
            </div>
          \` : ''}
          <div style="font-size: 0.8rem; color: var(--slate-500);">
            <strong>Termos de Pesquisa PubMed:</strong> <code>\${subtopic.query || subtopic.title}</code>
          </div>
        </div>
      \` : ''}

      <!-- Navegador de Livros-Texto Acadêmicos (Abas Interativas) -->
      <div style="margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: var(--slate-800); display: flex; align-items: center; gap: 6px;">
            \${Icons.get('book', 16)} Fontes Acadêmicas Oficiais (Escolha a Obra para Ler):
          </span>
          <span style="font-size: 0.75rem; color: var(--slate-500);">
            \${availableBooks.length} obras cadastradas para este tema
          </span>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap; border-bottom: 2px solid var(--border-color); padding-bottom: 4px;">
          \${availableBooks.map(book => {
            const isAct = (book.id === currentBookObj.id);
            const subTitleEsc = (subtopic ? subtopic.title.replace(/'/g, "\\\\'") : '');
            return \`
              <button type="button" class="btn btn-sm" onclick="REFERENCES_DATA.openDeepDiveModal('\${topic.topicName.replace(/'/g, "\\\\'")}', '\${subTitleEsc}', '\${book.id}')" style="font-size: 0.82rem; font-weight: 800; border-radius: var(--radius-md) var(--radius-md) 0 0; border: 1px solid \${isAct ? 'var(--primary-600)' : 'var(--border-color)'}; border-bottom: \${isAct ? '3px solid var(--primary-600)' : 'none'}; background: \${isAct ? 'var(--bg-surface)' : 'var(--slate-50)'}; color: \${isAct ? 'var(--primary-700)' : 'var(--slate-600)'}; padding: 8px 14px;">
                \${book.name}
              </button>
            \`;
          }).join('')}
        </div>
      </div>

      <!-- Texto Detalhado da Obra Selecionada -->
      <div class="card" style="padding: 22px 24px; background-color: var(--slate-50); border-left: 5px solid \${currentBookObj.color}; border-radius: 0 var(--radius-lg) var(--radius-lg) 0; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge" style="background: \${currentBookObj.color}; color: #ffffff; font-size: 0.72rem; margin-bottom: 4px;">
              \${currentBookObj.name} • \${currentBookObj.badge}
            </span>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--slate-900);">
              \${currentBookObj.data.chapter || currentBookObj.data.section || 'Capítulo da Obra'}
            </div>
            \${currentBookObj.data.pages ? \`
              <div style="font-size: 0.8rem; color: var(--slate-500); font-family: monospace;">
                Páginas de Estudo: \${currentBookObj.data.pages}
              </div>
            \` : ''}
          </div>
        </div>

        <p style="font-size: 0.95rem; color: var(--slate-800); line-height: 1.8; margin-bottom: 16px; text-align: justify;">
          \${currentBookObj.data.summary}
        </p>

        \${currentBookObj.data.keyPoint ? \`
          <div style="font-size: 0.88rem; font-weight: 700; color: var(--slate-900); background-color: #ffffff; border: 1px solid var(--border-color); border-left: 4px solid \${currentBookObj.color}; padding: 12px 16px; border-radius: var(--radius-sm);">
            <strong>Ponto-Chave de Avaliação:</strong> \${currentBookObj.data.keyPoint}
          </div>
        \` : ''}
      </div>

      <!-- Rodapé de Ações -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 16px; flex-wrap: wrap; gap: 10px;">
        <div style="font-size: 0.8rem; color: var(--slate-500);">
          Totalmente integrado ao FisioDengo • Sem anúncios e sem redirecionamentos externos.
        </div>
        <button type="button" onclick="REFERENCES_DATA.closeDeepDiveModal()" class="btn btn-primary" style="padding: 10px 24px;">
          \${Icons.get('check', 16)} Concluir Estudo Deste Tema
        </button>
      </div>
    \`;

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

    contentEl.innerHTML = \`
      <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; border-bottom: 1.5px solid var(--border-color); padding-bottom: 16px;">
        <div>
          <span class="badge \${src.tagClass || 'badge-primary'}" style="margin-bottom: 6px;">\${src.tag}</span>
          <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--slate-900);">
            \${src.title}
          </h2>
          <div style="font-size: 0.88rem; color: var(--slate-500);">
            \${src.authors} • \${src.edition} • \${src.publisher}
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
          \${src.citation}
        </div>
        \${src.isbn ? \`<div style="font-size: 0.78rem; color: var(--slate-500); margin-top: 6px;">\${src.isbn}</div>\` : ''}
      </div>

      <div class="card" style="padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--slate-900); margin-bottom: 8px;">
          Importância Pedagógica no FisioDengo
        </h3>
        <p style="font-size: 0.94rem; color: var(--slate-700); line-height: 1.7;">
          \${src.description} Todas as questões, dicas mecanísticas, alças de feedback e parâmetros biofísicos do FisioDengo foram estruturados e revisados com base rigorosa nesta publicação de prestígio acadêmico.
        </p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--border-color); padding-top: 16px;">
        <button type="button" onclick="REFERENCES_DATA.closeDeepDiveModal()" class="btn btn-primary" style="padding: 10px 24px;">
          \${Icons.get('check', 16)} Entendido — Voltar ao Jogo
        </button>
      </div>
    \`;
    modalEl.classList.add('active');
  }
};

// Registra todos os 30 temas detalhados
const ALL_TOPICS_DATABASE = ${JSON.stringify(allTopics, null, 2)};
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
`;

fs.writeFileSync('js/data/references.js', output, 'utf8');
console.log('✓ js/data/references.js montado com sucesso com os 30 temas e 9 fontes acadêmicas!');
