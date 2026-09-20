const fs = require('fs');
const vm = require('vm');
const targetIds = ['w1_q11', 'w2_q12', 'w2_q16', 'w2_q20'];
['world1_celular.js', 'world2_sangue.js'].forEach((f, idx) => {
  const code = fs.readFileSync('js/data/' + f, 'utf8');
  const sandbox = {};
  const transpiled = code.replace(/const WORLD_(\d)_DATA/g, 'var WORLD_$1_DATA');
  vm.runInNewContext(transpiled, sandbox);
  const w = sandbox['WORLD_' + (idx + 1) + '_DATA'];
  w.phases.forEach(p => {
    p.questions.forEach(q => {
      if (targetIds.includes(q.id)) {
        console.log(`\n=== [${q.id}] (${f}) ===`);
        console.log(`Pergunta: ${q.title}`);
        q.options.forEach((opt, oIdx) => {
          const mark = oIdx === q.correctIndex ? ' [CORRETA]' : '';
          console.log(`  Opt ${oIdx} (${opt.length} chars)${mark}: "${opt}"`);
        });
      }
    });
  });
});
