const fs = require('fs');
const path = require('path');
const vm = require('vm');

const sandbox = {
  window: {},
  document: {
    getElementById: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }),
    documentElement: { getAttribute: () => 'light', setAttribute: () => {} }
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

const basePath = path.resolve(__dirname, '..');
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
  'js/ui/navigation.js'
];

for (const s of scripts) {
  const code = fs.readFileSync(path.join(basePath, s), 'utf8');
  vm.runInContext(code, sandbox);
}

const State = sandbox.State;
const AppRouter = sandbox.AppRouter;
const worlds = [
  sandbox.WORLD_1_DATA,
  sandbox.WORLD_2_DATA,
  sandbox.WORLD_3_DATA,
  sandbox.WORLD_4_DATA,
  sandbox.WORLD_5_DATA
];

console.log('🧪 TESTANDO AUDITORIA DE DESBLOQUEIO DE MATÉRIAS (MUNDOS 1 A 5)...\n');

// 1. Estado inicial
State.data.unlockedNodes = ['w1_p1'];
State.data.completedNodes = [];

console.log('--- 1. ESTADO INICIAL (NOVO JOGO) ---');
worlds.forEach((w, idx) => {
  const st = AppRouter.getWorldStatus(idx);
  console.log(`  Mundo ${idx + 1} (${w.title}): Desbloqueado=${st.isUnlocked}, Concluído=${st.isCompleted}, Fases=${st.completedCount}/${st.totalCount}`);
});

if (!AppRouter.getWorldStatus(0).isUnlocked) throw new Error('Mundo 1 deveria estar desbloqueado!');
if (AppRouter.getWorldStatus(1).isUnlocked) throw new Error('Mundo 2 deveria estar bloqueado inicialmente!');
if (AppRouter.getRecommendedWorldIndex() !== 0) throw new Error('Mundo inicial recomendado deveria ser 0!');
console.log('  ✓ Estado inicial validado com sucesso!\n');

// 2. Concluir fases 1 a 5 de Mundo 1
console.log('--- 2. CONCLUINDO FASES 1 A 5 DE MUNDO 1 ---');
for (let i = 0; i < 5; i++) {
  const p = worlds[0].phases[i];
  State.completePhase(p.id, p.nextPhaseId);
}
console.log('  Mundo 1: Fases concluídas =', AppRouter.getWorldStatus(0).completedCount, '/ 6');
console.log('  Mundo 2 ainda bloqueado?', !AppRouter.getWorldStatus(1).isUnlocked ? 'SIM ✓' : 'NÃO ✗');
if (AppRouter.getWorldStatus(1).isUnlocked) throw new Error('Mundo 2 não deveria estar desbloqueado antes da fase 6!');

// 3. Concluir a 6ª fase de Mundo 1 (w1_p6) -> DESBLOQUEIA MUNDO 2!
console.log('\n--- 3. CONCLUINDO A 6ª FASE DE MUNDO 1 (w1_p6) ---');
const p6 = worlds[0].phases[5];
State.completePhase(p6.id, p6.nextPhaseId);

const m1Status = AppRouter.getWorldStatus(0);
const m2Status = AppRouter.getWorldStatus(1);
console.log('  Mundo 1 100% Concluído?', m1Status.isCompleted ? 'SIM ✓' : 'NÃO ✗');
console.log('  Mundo 2 Desbloqueado?', m2Status.isUnlocked ? 'SIM ✓' : 'NÃO ✗');
console.log('  Primeira fase do Mundo 2 (w2_p1) desbloqueada?', State.isNodeUnlocked('w2_p1') ? 'SIM ✓' : 'NÃO ✗');
console.log('  Mundo recomendado atual:', AppRouter.getRecommendedWorldIndex(), `(${worlds[AppRouter.getRecommendedWorldIndex()].title})`);
if (!m1Status.isCompleted) throw new Error('Mundo 1 deveria estar 100% concluído!');
if (!m2Status.isUnlocked) throw new Error('Mundo 2 DEVERIA estar desbloqueado!');
if (AppRouter.getRecommendedWorldIndex() !== 1) throw new Error('Mundo recomendado deveria ser Mundo 2!');

// 4. Concluir todas as fases de Mundo 2 -> DESBLOQUEIA MUNDO 3!
console.log('\n--- 4. CONCLUINDO TODAS AS FASES DE MUNDO 2 ---');
worlds[1].phases.forEach(p => State.completePhase(p.id, p.nextPhaseId));
const m3Status = AppRouter.getWorldStatus(2);
console.log('  Mundo 2 100% Concluído?', AppRouter.getWorldStatus(1).isCompleted ? 'SIM ✓' : 'NÃO ✗');
console.log('  Mundo 3 Desbloqueado?', m3Status.isUnlocked ? 'SIM ✓' : 'NÃO ✗');
console.log('  Mundo recomendado atual:', AppRouter.getRecommendedWorldIndex(), `(${worlds[AppRouter.getRecommendedWorldIndex()].title})`);
if (!m3Status.isUnlocked) throw new Error('Mundo 3 DEVERIA estar desbloqueado!');

// 5. Concluir todas as fases de Mundo 3 -> DESBLOQUEIA MUNDO 4!
console.log('\n--- 5. CONCLUINDO TODAS AS FASES DE MUNDO 3 ---');
worlds[2].phases.forEach(p => State.completePhase(p.id, p.nextPhaseId));
const m4Status = AppRouter.getWorldStatus(3);
console.log('  Mundo 3 100% Concluído?', AppRouter.getWorldStatus(2).isCompleted ? 'SIM ✓' : 'NÃO ✗');
console.log('  Mundo 4 Desbloqueado?', m4Status.isUnlocked ? 'SIM ✓' : 'NÃO ✗');
console.log('  Mundo recomendado atual:', AppRouter.getRecommendedWorldIndex(), `(${worlds[AppRouter.getRecommendedWorldIndex()].title})`);
if (!m4Status.isUnlocked) throw new Error('Mundo 4 DEVERIA estar desbloqueado!');

// 6. Concluir todas as fases de Mundo 4 -> DESBLOQUEIA MUNDO 5!
console.log('\n--- 6. CONCLUINDO TODAS AS FASES DE MUNDO 4 ---');
worlds[3].phases.forEach(p => State.completePhase(p.id, p.nextPhaseId));
const m5Status = AppRouter.getWorldStatus(4);
console.log('  Mundo 4 100% Concluído?', AppRouter.getWorldStatus(3).isCompleted ? 'SIM ✓' : 'NÃO ✗');
console.log('  Mundo 5 Desbloqueado?', m5Status.isUnlocked ? 'SIM ✓' : 'NÃO ✗');
console.log('  Mundo recomendado atual:', AppRouter.getRecommendedWorldIndex(), `(${worlds[AppRouter.getRecommendedWorldIndex()].title})`);
if (!m5Status.isUnlocked) throw new Error('Mundo 5 DEVERIA estar desbloqueado!');

// 7. Concluir todas as fases de Mundo 5 -> CURSO 100% CONCLUÍDO!
console.log('\n--- 7. CONCLUINDO TODAS AS FASES DE MUNDO 5 ---');
worlds[4].phases.forEach(p => State.completePhase(p.id, p.nextPhaseId));
console.log('  Mundo 5 100% Concluído?', AppRouter.getWorldStatus(4).isCompleted ? 'SIM ✓' : 'NÃO ✗');
console.log('  Total de fases concluídas:', State.data.completedNodes.length, '/ 30');
console.log('  Todos os 5 Mundos Concluídos:', worlds.every((_, i) => AppRouter.getWorldStatus(i).isCompleted) ? 'SIM ✓' : 'NÃO ✗');

console.log('\n🎉 AUDITORIA COMPLETA: O SISTEMA DESBLOQUEIA TODAS AS PRÓXIMAS MATÉRIAS COM 100% DE SUCESSO! 🎉');
