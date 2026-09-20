const fs = require('fs');
const vm = require('vm');

const sandbox = { window: {} };
sandbox.window = sandbox;

['world1_celular.js', 'world2_sangue.js', 'world3_cardio.js', 'world4_respiratorio.js', 'world5_integrado.js'].forEach(f => {
  const code = fs.readFileSync('js/data/' + f, 'utf8');
  vm.runInNewContext(code, sandbox);
});

const worlds = [sandbox.WORLD_1_DATA, sandbox.WORLD_2_DATA, sandbox.WORLD_3_DATA, sandbox.WORLD_4_DATA, sandbox.WORLD_5_DATA];
const list = [];
worlds.forEach(w => {
  w.phases.forEach(p => {
    list.push({
      worldId: w.id,
      worldTitle: w.title,
      phaseId: p.id,
      level: p.level,
      phaseTitle: p.title,
      topic: p.topic,
      lessonTitle: p.lesson.title,
      concept: p.lesson.concept,
      mechanism: p.lesson.mechanism,
      examPoint: p.lesson.examPoint,
      researchTopic: p.lesson.researchTopic || p.topic
    });
  });
});

fs.writeFileSync('scratch/all-30-phases.json', JSON.stringify(list, null, 2), 'utf8');
console.log('Saved 30 phases info to scratch/all-30-phases.json. Total:', list.length);
list.forEach(p => {
  console.log(`L${p.level} [${p.phaseId}] - Topic: "${p.topic}" | Title: "${p.phaseTitle}"`);
});
