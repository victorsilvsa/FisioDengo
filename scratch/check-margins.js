const fs = require('fs');
const vm = require('vm');
const sandbox = {};
['world1_celular.js', 'world2_sangue.js', 'world3_cardio.js', 'world4_respiratorio.js', 'world5_integrado.js'].forEach(f => {
  const code = fs.readFileSync('js/data/' + f, 'utf8');
  const transpiled = code.replace(/const WORLD_(\d)_DATA/g, 'var WORLD_$1_DATA');
  vm.runInNewContext(transpiled, sandbox);
});
const worlds = [sandbox.WORLD_1_DATA, sandbox.WORLD_2_DATA, sandbox.WORLD_3_DATA, sandbox.WORLD_4_DATA, sandbox.WORLD_5_DATA];
let maxMargin = 0;
let margins = [];
worlds.forEach(w => {
  w.phases.forEach(p => {
    p.questions.forEach(q => {
      const lengths = q.options.map(o => o.length);
      const maxLen = Math.max(...lengths);
      const isLongest = lengths[q.correctIndex] === maxLen;
      const sorted = [...lengths].sort((a,b) => b-a);
      const margin = sorted[0] - sorted[1];
      margins.push({ id: q.id, isLongest, margin });
      if (isLongest && margin > maxMargin) maxMargin = margin;
    });
  });
});
console.log('Margem máxima absoluta quando a correta é mais longa:', maxMargin);
const above10 = margins.filter(m => m.isLongest && m.margin > 10);
console.log('Questões onde correta é mais longa por mais de 10 chars:', above10.length);
