const fs = require('fs');

// Primary sources catalog
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
    description: 'A obra mais respeitada e adotada no ensino médico mundial, com ênfase na regulação integrada e alças de feedback.',
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
    description: 'Referência consagrada para biofísica de membranas, eletrofisiologia dos canais iônicos e dinâmica de transporte molecular.',
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
    description: 'Texto de altíssima clareza pedagógica, diagramas lógicos passo-a-passo e tabelas de diagnóstico diferencial fisiológico.',
    citation: 'COSTANZO, Linda S. Fisiologia. 7. ed. Rio de Janeiro: Elsevier, 2022.'
  },
  boron: {
    id: 'boron',
    title: 'Boron & Boulpaep — Medical Physiology',
    edition: '3ª edição',
    authors: 'Walter F. Boron, MD, PhD; Emile L. Boulpaep, MD',
    publisher: 'Elsevier',
    isbn: 'ISBN 978-1-4557-4377-3',
    tag: 'TRATADO CELULAR E MOLECULAR',
    tagClass: 'badge-purple',
    description: 'O mais detalhado tratado de fisiologia celular, bioenergética, biologia molecular de transportadores e receptores acoplados.',
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
    description: 'Destaque absoluto no ensino de mapas conceituais de alças reflexas e comunicação celular de curto e longo alcance.',
    citation: 'SILVERTHORN, Dee Unglaub. Fisiologia Humana: Uma Abordagem Integrada. 8. ed. Porto Alegre: Artmed, 2020.'
  },
  west: {
    id: 'west',
    title: 'West — Fisiologia Respiratória: Princípios Básicos',
    edition: '10ª edição',
    authors: 'John B. West, MD, PhD; Andrew M. Luks, MD',
    publisher: 'Wolters Kluwer',
    isbn: 'ISBN 978-85-8271-477-5',
    tag: 'BÍBLIA RESPIRATÓRIA',
    tagClass: 'badge-primary',
    description: 'A referência internacional incontestável para mecânica ventilatória, relação ventilação-perfusão (V/Q) e trocas gasosas.',
    citation: 'WEST, John B.; LUKS, Andrew M. Fisiologia Respiratória: Princípios Básicos. 10. ed. Porto Alegre: Artmed / Wolters Kluwer, 2017.'
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
    description: 'Forte ênfase em neurofisiologia, controle autonômico central, endocrinologia e sinalização por segundos mensageiros.',
    citation: 'BARRETT, Kim E. et al. Ganong Fisiologia Médica. 26. ed. Porto Alegre: AMGH / McGraw-Hill, 2021.'
  },
  openstax: {
    id: 'openstax',
    title: 'OpenStax — Anatomy and Physiology 2e',
    edition: '2ª edição (Acesso Aberto)',
    authors: 'J. Gordon Betts, Kelly A. Young, James A. Wise, Eddie Johnson et al.',
    publisher: 'OpenStax, Rice University',
    isbn: 'ISBN-13: 978-1-951693-43-5',
    tag: 'FONTE ABERTA REVISADA',
    tagClass: 'badge-success',
    description: 'Livro-texto universitário gratuito de alto padrão internacional, revisado por comitê de pares acadêmicos.',
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
    description: 'Referência clínica global para fisiopatologia dos órgãos, exames laboratoriais, gasometrias e condutas médicas.',
    citation: 'MERCK MANUAL. Professional Version: Medical Physiology and Organ Systems. Kenilworth: Merck Sharp & Dohme Corp., 2024.'
  }
};

console.log('Script de preparação de referências criado.');
