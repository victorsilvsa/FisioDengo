const fs = require('fs');
const vm = require('vm');

const sandbox = {};
['world1_celular.js', 'world2_sangue.js', 'world3_cardio.js', 'world4_respiratorio.js', 'world5_integrado.js'].forEach(f => {
  const code = fs.readFileSync('js/data/' + f, 'utf8');
  // replace const with var so it exports to sandbox
  const transpiled = code.replace(/const WORLD_(\d)_DATA/g, 'var WORLD_$1_DATA');
  vm.runInNewContext(transpiled, sandbox);
});

const worlds = [sandbox.WORLD_1_DATA, sandbox.WORLD_2_DATA, sandbox.WORLD_3_DATA, sandbox.WORLD_4_DATA, sandbox.WORLD_5_DATA];
let totalQuestions = 0;
let longestIsCorrect = 0;
let diffQuestions = [];

worlds.forEach((w, wi) => {
  w.phases.forEach((p, pi) => {
    p.questions.forEach((q, qi) => {
      totalQuestions++;
      const lengths = q.options.map(o => o.length);
      const maxLen = Math.max(...lengths);
      const correctLen = lengths[q.correctIndex];
      const isLongest = correctLen === maxLen;
      if (isLongest) longestIsCorrect++;
      
      const sortedLengths = [...lengths].sort((a,b) => b - a);
      const margin = sortedLengths[0] - sortedLengths[1];
      if (isLongest && margin > 15) {
        diffQuestions.push({
          id: q.id,
          world: wi + 1,
          phase: p.title,
          qTitle: q.title,
          correctIndex: q.correctIndex,
          correctLen,
          otherLengths: lengths.filter((_, idx) => idx !== q.correctIndex),
          correctText: q.options[q.correctIndex],
          margin
        });
      }
    });
  });
});

worlds.forEach((w, wi) => {
  let total = 0, longest = 0, diff = 0;
  w.phases.forEach(p => {
    p.questions.forEach(q => {
      total++;
      const lengths = q.options.map(o => o.length);
      const maxLen = Math.max(...lengths);
      const isLongest = lengths[q.correctIndex] === maxLen;
      if (isLongest) longest++;
      const sorted = [...lengths].sort((a,b) => b-a);
      if (isLongest && (sorted[0] - sorted[1] > 15)) diff++;
    });
  });
  console.log(`Módulo ${wi+1} (${w.title}): Total ${total} | Correta é mais longa: ${longest} (${Math.round(longest/total*100)}%) | Margem > 15: ${diff}`);
});

console.log('Total de questões:', totalQuestions);
console.log('Questões onde a correta é a mais longa:', longestIsCorrect, '(', Math.round(longestIsCorrect/totalQuestions*100) + '%)');
console.log('Questões com margem desproporcional (>15 chars):', diffQuestions.length);
console.log('\nTodas as questões com grande discrepância de tamanho:');
diffQuestions.forEach(d => {
  console.log(`[${d.id} - M${d.world}]: ${d.qTitle.substring(0, 60)}...`);
  console.log(`   Correta (len ${d.correctLen}): "${d.correctText.substring(0, 60)}..."`);
  console.log(`   Incorretas comprimentos: [${d.otherLengths.join(', ')}] (Margem: +${d.margin})`);
});
