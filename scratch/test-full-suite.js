// Comprehensive Automated Test Suite for FisioDengo (30 Levels, 120 Questions, Shuffler & Dashboard)
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('🧪 Iniciando Bateria de Testes Automatizados do FisioDengo...\n');

// 1. Setup browser environment sandbox
const sandbox = {
  window: {},
  document: {
    getElementById: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } })
  },
  localStorage: {
    _data: {},
    getItem(key) { return this._data[key] || null; },
    setItem(key, val) { this._data[key] = String(val); },
    removeItem(key) { delete this._data[key]; },
    clear() { this._data = {}; }
  },
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval
};
sandbox.window = sandbox;
vm.createContext(sandbox);

// 2. Load scripts in exact order from index.html
const scripts = [
  'js/ui/icons.js',
  'js/engine/state.js',
  'js/engine/question-shuffler.js',
  'js/data/references.js',
  'js/data/world1_celular.js',
  'js/data/world2_sangue.js',
  'js/data/world3_cardio.js',
  'js/data/world4_respiratorio.js',
  'js/data/world5_integrado.js',
  'js/data/written_exam_data.js',
  'js/engine/review-engine.js',
  'js/engine/exam-engine.js',
  'js/engine/written-exam-engine.js',
  'js/ui/navigation.js'
];

const basePath = path.resolve(__dirname, '..');

for (const scriptRel of scripts) {
  const fullPath = path.join(basePath, scriptRel);
  const code = fs.readFileSync(fullPath, 'utf8');
  try {
    vm.runInContext(code, sandbox, { filename: scriptRel });
    console.log(`  ✓ Script carregado com sucesso: ${scriptRel}`);
  } catch (err) {
    console.error(`  ❌ Erro ao compilar ${scriptRel}:`, err);
    process.exit(1);
  }
}

console.log('\n--- VERIFICAÇÃO DOS MUNDOS E NÍVEIS ---');
const worlds = [
  sandbox.WORLD_1_DATA,
  sandbox.WORLD_2_DATA,
  sandbox.WORLD_3_DATA,
  sandbox.WORLD_4_DATA,
  sandbox.WORLD_5_DATA
];

if (worlds.length !== 5) {
  console.error(`❌ Esperava 5 mundos, encontrou ${worlds.length}`);
  process.exit(1);
}
console.log(`  ✓ Total de mundos: ${worlds.length}`);

let totalPhases = 0;
let totalQuestions = 0;
const allPhasesList = [];
const allQuestionsList = [];

worlds.forEach((w, wIdx) => {
  if (!w.phases || w.phases.length !== 6) {
    console.error(`❌ Mundo ${w.id} deve ter exatamente 6 fases, encontrou ${w.phases ? w.phases.length : 0}`);
    process.exit(1);
  }
  console.log(`  ✓ Mundo ${wIdx + 1} (${w.title}): 6 fases`);
  w.phases.forEach((p, pIdx) => {
    totalPhases++;
    allPhasesList.push(p);

    if (!p.questions || p.questions.length !== 4) {
      console.error(`❌ Fase ${p.id} deve ter exatamente 4 questões, encontrou ${p.questions ? p.questions.length : 0}`);
      process.exit(1);
    }
    p.questions.forEach(q => {
      totalQuestions++;
      allQuestionsList.push(q);
    });
  });
});

console.log(`  ✓ Total de Fases (Níveis): ${totalPhases} (Meta: 30)`);
console.log(`  ✓ Total de Questões: ${totalQuestions} (Meta: 120)`);

if (totalPhases !== 30) {
  console.error(`❌ Falha: Total de fases deve ser 30, mas foi ${totalPhases}`);
  process.exit(1);
}
if (totalQuestions !== 120) {
  console.error(`❌ Falha: Total de questões deve ser 120, mas foi ${totalQuestions}`);
  process.exit(1);
}

console.log('\n--- VERIFICAÇÃO DE ENCADINHAMENTO SEQUENCIAL (30 NÍVEIS) ---');
for (let i = 0; i < allPhasesList.length; i++) {
  const current = allPhasesList[i];
  const expectedNext = (i < allPhasesList.length - 1) ? allPhasesList[i + 1].id : null;
  if (current.nextPhaseId !== expectedNext) {
    console.error(`❌ Encadeamento incorreto na fase ${current.id}: nextPhaseId = ${current.nextPhaseId}, esperado = ${expectedNext}`);
    process.exit(1);
  }
}
console.log('  ✓ Encadeamento sequencial perfeito de w1_p1 até w5_p6 (final null)!');

console.log('\n--- VERIFICAÇÃO DE INTEGRIDADE DAS 120 QUESTÕES ---');
let placeholderFound = false;
let missingWhyWrong = false;
let invalidOptionsCount = false;

allQuestionsList.forEach(q => {
  if (!q.options || q.options.length !== 4) {
    console.error(`❌ Questão ${q.id} não possui 4 opções!`, q);
    invalidOptionsCount = true;
  }
  if (q.correctIndex < 0 || q.correctIndex > 3) {
    console.error(`❌ Questão ${q.id} correctIndex inválido: ${q.correctIndex}`);
    invalidOptionsCount = true;
  }
  if (!q.whyWrong || q.whyWrong.length !== 4) {
    console.error(`❌ Questão ${q.id} não possui whyWrong com 4 justificativas!`, q);
    missingWhyWrong = true;
  }
  if (q.options) {
    q.options.forEach((opt, idx) => {
      if (/^Opção\s+[1-4]$/i.test(opt.trim())) {
        console.error(`❌ Questão ${q.id} contém texto placeholder: "${opt}"`);
        placeholderFound = true;
      }
    });
  }
});

if (placeholderFound || missingWhyWrong || invalidOptionsCount) {
  console.error('❌ Falha na integridade das questões!');
  process.exit(1);
}
console.log('  ✓ 100% das 120 questões possuem 4 alternativas completas, correctIndex válido e whyWrong completo!');
console.log('  ✓ Zero opções placeholder encontradas!');

console.log('\n--- TESTE DO QUESTION SHUFFLER (EMBARALHADOR DINÂMICO) ---');
const shuffler = sandbox.QuestionShuffler;
let shufflePassed = 0;

allQuestionsList.forEach(orig => {
  const originalCorrectText = orig.options[orig.correctIndex];
  const originalCorrectWhyWrong = orig.whyWrong ? orig.whyWrong[orig.correctIndex] : null;

  const shuffled = shuffler.shuffle(orig);

  // Check that correctIndex matches the original text
  if (shuffled.options[shuffled.correctIndex] !== originalCorrectText) {
    console.error(`❌ Shuffler quebrou resposta correta em ${orig.id}`);
    process.exit(1);
  }

  // Check that whyWrong followed the permutation
  if (originalCorrectWhyWrong && shuffled.whyWrong[shuffled.correctIndex] !== originalCorrectWhyWrong) {
    console.error(`❌ Shuffler quebrou associação whyWrong em ${orig.id}`);
    process.exit(1);
  }

  // Check that original was not mutated
  if (orig.options[orig.correctIndex] !== originalCorrectText) {
    console.error(`❌ Mutação indevida no objeto original ${orig.id}`);
    process.exit(1);
  }

  shufflePassed++;
});
console.log(`  ✓ Todos os 120 testes do QuestionShuffler passaram com integridade semântica 100%!`);

console.log('\n--- TESTE DE ESTADO E PATENTES ---');
const State = sandbox.State;
const initialDomains = Object.keys(State.data.topicDomain || {});
console.log(`  ✓ Tópicos no State: ${initialDomains.length} tópicos mapeados`);

const rank1 = State.getPlayerRank();
console.log(`  ✓ Rank Inicial: ${rank1.name} (Nível ${rank1.level})`);

State.data.xp = 3500;
const rank4 = State.getPlayerRank();
console.log(`  ✓ Rank com 3500 XP: ${rank4.name} (Nível ${rank4.level})`);

State.data.xp = 9500;
const rank7 = State.getPlayerRank();
console.log(`  ✓ Rank Máximo: ${rank7.name} (Nível ${rank7.level})`);

console.log('\n--- TESTE DE REFERÊNCIAS E FONTES ---');
const refs = sandbox.REFERENCES_DATA;
const sourcesKeys = Object.keys(refs.primarySources);
console.log(`  ✓ Obras acadêmicas primárias cadastradas: ${sourcesKeys.join(', ')}`);
if (!refs.primarySources.guyton || !refs.primarySources.berne || !refs.primarySources.silverthorn) {
  console.error('❌ Falta fonte acadêmica principal!');
  process.exit(1);
}

const refTopics = Object.keys(refs.topics);
console.log(`  ✓ Total de temas com aprofundamento bibliográfico: ${refTopics.length}`);

console.log('\n--- TESTE DA PROVA ESCRITA (23 QUESTÕES) ---');
const writtenExamData = sandbox.WRITTEN_EXAM_DATA;
const questionsCount = (writtenExamData && writtenExamData.questions) ? writtenExamData.questions.length : 0;
console.log(`  ✓ Questões discursivas da Prova Escrita: ${questionsCount} (Meta: 23)`);
if (questionsCount !== 23) {
  console.error(`❌ Prova Escrita deve ter 23 questões, encontrou ${questionsCount}`);
  process.exit(1);
}

console.log('\n🎉 TODOS OS TESTES PASSARAM COM 100% DE SUCESSO! 🎉\n');
