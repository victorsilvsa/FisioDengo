const fs = require('fs');
const vm = require('vm');

const targetIds = [
  'w1_q11', 'w2_q12', 'w2_q16', 'w2_q20',
  'w3_q10', 'w3_q12', 'w3_q18', 'w3_q19', 'w3_q20', 'w3_q21', 'w3_q22', 'w3_q24',
  'w4_q16', 'w4_q18', 'w4_q19', 'w4_q22', 'w4_q23', 'w4_q24',
  'w5_q16', 'w5_q18', 'w5_q19', 'w5_q21', 'w5_q22', 'w5_q23', 'w5_q24'
];

const files = ['world1_celular.js', 'world2_sangue.js', 'world3_cardio.js', 'world4_respiratorio.js', 'world5_integrado.js'];
files.forEach((f, idx) => {
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
