const fs = require('fs');
let code = fs.readFileSync('js/data/world3_cardio.js', 'utf8');

code = code.replace(
  "'O tempo total de relaxamento isovolumétrico ventricular esquerdo, com duração normal entre 0,40 e 0,50 s.'",
  "'O intervalo de condução elétrica medido desde o fechamento da valva mitral até o término da ejeção aórtica, durando cerca de 0,35 a 0,45 s.'"
);

code = code.replace(
  "'A fase zero rápida de despolarização mediada por canais de sódio sensíveis à tetrodotoxina.'",
  "'A fase zero de despolarização rápida mediada pela abertura maciça e síncrona de canais de sódio voltagem-dependentes Nav1.5 no sarcolema ventricular.'"
);

code = code.replace(
  "'A curva ventricular é deslocada para cima e para a esquerda, aumentando a contratilidade intrínseca.'",
  "'A curva de função ventricular é deslocada para cima e para a esquerda em virtude de uma hipersensibilidade adaptativa dos miofilamentos de actina e miosina.'"
);

code = code.replace(
  "'Paralisam completamente qualquer atividade elétrica aferente em virtude de sobrecarga mecânica.'",
  "'Cessam temporariamente os disparos aferentes aos centros bulbares devido ao estiramento excessivo que deprime a condutância dos mecanorreceptores arteriais.'"
);

code = code.replace(
  "'Aumentando a secreção de fator natriurético atrial para reduzir o volume circulante tecidual.'",
  "'Aumentando a síntese e secreção de peptídeo natriurético atrial pelos miócitos para relaxar a musculatura lisa das arteríolas pré-capilares periféricas.'"
);

code = code.replace(
  "'Porque o nervo vago esgota seus neurotransmissores colinérgicos após poucas horas de hipertensão contínua.'",
  "'Porque os neurônios pré-ganglionares do nervo vago esgotam suas reservas quânticas de acetilcolina após poucas horas de estimulação contínua dos barorreceptores.'"
);

fs.writeFileSync('js/data/world3_cardio.js', code, 'utf8');
console.log('✓ World 3 rebalanced successfully!');
