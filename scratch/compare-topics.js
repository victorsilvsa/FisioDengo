const fs = require('fs');
const vm = require('vm');

const sandbox = {
  window: {},
  document: { addEventListener: () => {} },
  Icons: { get: () => '' }
};
sandbox.window = sandbox;

['icons.js', 'references.js', 'world1_celular.js', 'world2_sangue.js', 'world3_cardio.js', 'world4_respiratorio.js', 'world5_integrado.js'].forEach(f => {
  const dir = f === 'icons.js' ? 'js/ui/' : 'js/data/';
  const code = fs.readFileSync(dir + f, 'utf8');
  vm.runInNewContext(code, sandbox);
});

const refTopics = Object.keys(sandbox.REFERENCES_DATA.topics);
console.log('Total topics in REFERENCES_DATA:', refTopics.length);

const allPhaseTopics = [];
[sandbox.WORLD_1_DATA, sandbox.WORLD_2_DATA, sandbox.WORLD_3_DATA, sandbox.WORLD_4_DATA, sandbox.WORLD_5_DATA].forEach(w => {
  w.phases.forEach(p => {
    allPhaseTopics.push({ world: w.id, phaseId: p.id, level: p.level, topic: p.topic, title: p.title });
  });
});

console.log('Total phases in game:', allPhaseTopics.length);
console.log('\nPhases whose topic is MISSING from REFERENCES_DATA:');
allPhaseTopics.forEach(pt => {
  const found = refTopics.some(rt => rt.toLowerCase() === pt.topic.toLowerCase());
  if (!found) {
    console.log(`- Nível ${pt.level} [${pt.phaseId}]: "${pt.topic}" (Mundo: ${pt.world})`);
  }
});
