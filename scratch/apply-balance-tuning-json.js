const fs = require('fs');
const vm = require('vm');

const updates = {
  // World 1
  w1_q11: {
    options: [
      "A osmolaridade quantifica a pressão de vapor de uma solução líquida, enquanto a tonicidade afere estritamente a condutância eletrolítica e a viscosidade do plasma sanguíneo.",
      "A osmolaridade considera todos os solutos presentes, enquanto a tonicidade depende exclusivamente da concentração de solutos NÃO-PENETRANTES que afetam o volume celular.",
      "Não existe distinção termodinâmica real; ambos os termos são equivalentes empíricos e indicam a mesma pressão hidrostática exercida por solutos orgânicos nos capilares.",
      "A osmolaridade mede a fração de água livre que atravessa por difusão simples, ao passo que a tonicidade avalia unicamente o transporte ativo mediado por carreadores protéicos."
    ],
    correctIndex: 1
  },

  // World 2
  w2_q12: {
    options: [
      "Porque induz desestabilização osmótica maciça da membrana eritrocitária, provocando hemólise intravascular aguda e colapso circulatório imediato.",
      "Porque liga-se ao heme com afinidade ~240 vezes superior à do O₂ e trava a hemoglobina restante no estado R, impedindo a liberação nos tecidos.",
      "Porque reage espontaneamente com o tampão bicarbonato plasmático, convertendo os ânions em ácido carbônico volátil e esgotando a reserva alcalina.",
      "Porque inativa de forma irreversível os receptores celulares da eritropoietina no endotélio, paralisando a diferenciação medular das hemácias."
    ],
    correctIndex: 1
  },
  w2_q16: {
    options: [
      "Tromboxano A2 (TXA₂) e serotonina livre liberados constitutivamente pela túnica média.",
      "Prostaciclina (PGI₂) e Óxido Nítrico (NO) com ação vasodilatadora e antiplaquetária.",
      "Fator Tecidual tecidual e colágeno fibrilar subendotelial ativadores da via intrínseca.",
      "Trombina alfa polimerizada conjugada ao fator XIII tecidual estabilizador de fibrina."
    ],
    correctIndex: 1
  },
  w2_q20: {
    options: [
      "Aplasia medular aguda com supressão total da linhagem megacariocítica e queda exponencial da contagem de plaquetas circulantes.",
      "Degradação enzimática ativa de uma rede de fibrina estabilizada pela plasmina (lise de trombos intravasculares recentes).",
      "Deficiência congênita grave de síntese hepática de albumina sérica gerando extravasamento de plasma e edema intersticial generalizado.",
      "Destruição autoimune crônica de eritrócitos maduros mediada por anticorpos quentes IgG no parênquima esplênico e hepático."
    ],
    correctIndex: 1
  },

  // World 3
  w3_q10: {
    options: [
      "O tempo total decorrido entre o término da onda T e o início da onda P seguinte, mensurado entre 0,25 e 0,35 segundos.",
      "O intervalo de condução elétrica desde o nó sinoatrial até o início da despolarização ventricular, medindo 0,12 a 0,20 s.",
      "A duração da fase mecânica de ejeção rápida ventricular através da valva aórtica aberta, oscilando entre 0,12 e 0,20 s.",
      "O período refratário absoluto dos miócitos atriais durante a contração isovolumétrica, com duração basal de 0,15 a 0,22 s."
    ],
    correctIndex: 1
  },
  w3_q12: {
    options: [
      "A fase zero de despolarização rápida ventricular dependente da abertura em cascata de canais de sódio rápidos voltagem-dependentes.",
      "A fase dois de platô sustentado, na qual o influxo de Ca²⁺ se equilibra com o efluxo de K⁺ e todo o ventrículo está despolarizado.",
      "O período elétrico de repouso diastólico transmembrana correspondente à fase quatro estável sustentada pelos canais de potássio.",
      "A fase um transitória de repolarização inicial rápida mediada pela inativação dos canais de sódio e influxo acentuado de cloreto."
    ],
    correctIndex: 1
  },
  w3_q18: {
    options: [
      "Dentro de limites fisiológicos, quanto maior o estiramento das fibras pelo volume diastólico final, maior a força de contração sistólica subsequente.",
      "A força de contração ventricular declina de modo inversamente proporcional ao volume diastólico final para poupar a reserva energética celular.",
      "A frequência de disparo do nó sinoatrial independe do retorno venoso, mantendo débito cardíaco estritamente constante sob qualquer pré-carga.",
      "O ventrículo ejeta volume sistólico fixo e constante em cada batimento cardíaco, indiferente a alterações do estiramento dos sarcômeros."
    ],
    correctIndex: 0
  },
  w3_q19: {
    options: [
      "A curva de função ventricular é transladada para cima e para a esquerda, gerando aumentos exponenciais na fração de ejeção sistólica.",
      "O ventrículo opera no platô deprimido da curva com pressões diastólicas elevadas, gerando congestão pulmonar sem ganho de débito.",
      "O volume diastólico final ventricular cai a níveis indetectáveis decorrente da intensa vasodilatação arteriolar simpática periférica.",
      "As cúspides das valvas atrioventriculares colabam completamente durante a sístole para suportar a elevação acentuada da pré-carga."
    ],
    correctIndex: 1
  },
  w3_q20: {
    options: [
      "A tensão na parede ventricular durante a ejeção sistólica para vencer a pressão aórtica, amplamente elevada na estenose aórtica.",
      "O volume de sangue que distende o ventrículo no final da diástole antes da contração isométrica, elevado na desidratação grave.",
      "A velocidade máxima com que os potenciais de ação percorrem as fibras de Purkinje, aumentada significativamente no sono profundo.",
      "A pressão coloidosmótica do plasma no interior dos capilares sinusóides hepáticos, marcadamente elevada na cirrose hepática crônica."
    ],
    correctIndex: 0
  },
  w3_q21: {
    options: [
      "Cessam prontamente qualquer disparo aferente ao tronco encefálico devido à saturação mecânica dos canais iônicos sensíveis ao estiramento.",
      "Aumentam expressivamente a frequência de disparos aferentes ao NTS, estimulando o tônus vagal e deprimindo o tônus simpático.",
      "Estimulam a liberação maciça e imediata de renina pelo aparelho justaglomerular renal com o objetivo de reter água e sódio no túbulo.",
      "Desencadeiam vasoconstrição simpática imediata e intensa em todas as arteríolas do território esplâncnico e cutâneo periférico."
    ],
    correctIndex: 1
  },
  w3_q22: {
    options: [
      "Aumentando a síntese de peptídeo natriurético atrial para reduzir o volume plasmático circulante e minimizar o trabalho ventricular de bomba.",
      "A menor distensão dos barorreceptores reduz seus disparos aferentes, desinibindo o simpático para gerar taquicardia e vasoconstrição reflexas.",
      "Induzindo vasodilatação arteriolar periférica imediata mediada pela histamina e bradicinina para reduzir o retorno venoso às câmaras direitas.",
      "Interrompendo a despolarização dos fusos neuromusculares esqueléticos para diminuir bruscamente a demanda metabólica corporal de oxigênio."
    ],
    correctIndex: 1
  },
  w3_q24: {
    options: [
      "Porque seus mecanorreceptores sofrem necrose isquêmica irreversível e apoptose celular após 24 horas contínuas de hipertensão arterial.",
      "Porque em 1 a 2 dias de pressão cronicamente elevada, os barorreceptores sofrem \"resetting\" (reajuste), adotando a nova pressão alta como normal.",
      "Porque as vesículas pré-sinápticas do nervo vago esgotam totalmente seus estoques de acetilcolina após poucas horas de estímulo pressórico.",
      "Porque as vias espinhais descendentes bloqueiam os sinais vasomotores bulbares com a finalidade de proteger os néfrons contra a nefroesclerose."
    ],
    correctIndex: 1
  },

  // World 4
  w4_q16: {
    options: [
      "Porque o exercício físico suprime a ventilação alveolar e diminui o volume corrente para índices estritamente inferiores ao espaço morto anatômico.",
      "Porque o aumento do débito cardíaco encurta o tempo de trânsito capilar para ~0,25 s, impedindo o equilíbrio difusional através da membrana espessada.",
      "Porque os miócitos esqueléticos liberam radicais livres na circulação que degradam e desintegram todas as moléculas de hemoglobina funcional.",
      "Porque as vias aéreas de condução sofrem colapso dinâmico instantâneo e total por destruição completa das cartilagens brônquicas e traqueais."
    ],
    correctIndex: 1
  },
  w4_q18: {
    options: [
      "A substituição do átomo de ferro do anel tetrapirrólico da hemoglobina por íons de cloro livre para potencializar a taxa de difusão tecidual.",
      "O efluxo de íons bicarbonato (HCO₃⁻) da hemácia para o plasma, equilibrado eletricamente pela entrada de íons cloreto (Cl⁻) via trocador AE1.",
      "A secreção activa de cloreto de sódio pelas células da mucosa brônquica para neutralizar a acidez gerada pela difusão do gás carbônico capilar.",
      "A precipitação de cristais de cloreto de potássio no sarcoplasma das fibras musculares provocada pelo aumento abrupto da acidez intracelular."
    ],
    correctIndex: 1
  },
  w4_q19: {
    options: [
      "O resfriamento do sangue na circulação capilar alveolar desencadeia a quebra espontânea do tetrâmero de hemoglobina em subunidades monoméricas.",
      "A ligação do oxigênio à hemoglobina nos pulmões diminui sua afinidade pelo CO₂ e por prótons (H⁺), facilitando a liberação e eliminação de CO₂.",
      "A presença de monóxido de carbono no plasma arterial estimula a síntese e a secreção renal acelerada de tampão bicarbonato para corrigir o pH.",
      "Os pneumócitos tipo II utilizam o excesso de dióxido de carbono como substrato bioquímico direto para sintetizar fosfolipídios do surfactante."
    ],
    correctIndex: 1
  },
  w4_q22: {
    options: [
      "Alvéolos amplamente ventilados que recebem perfusão sanguínea nula ou abolida devido à oclusão vascular por êmbolo maciço.",
      "Alvéolos preenchidos por exsudato purulento que continuam sendo perfundidos por sangue venoso sem realizar trocas gasosas.",
      "Vasodilatação arteriolar generalizada com aumento maciço da permeabilidade endotelial e extravasamento de plasma para a pele.",
      "Paralisia completa do centro respiratório dorsal do tronco encefálico provocada pela hipoxemia arterial grave e refratária."
    ],
    correctIndex: 1
  },
  w4_q23: {
    options: [
      "A queda da PO₂ arterial sistêmica para valores inferiores a 90 mmHg percebida pelos mecanorreceptores das paredes das artérias carótidas.",
      "A concentração de íons H⁺ no líquido cefalorraquidiano (LCR) resultante da difusão do CO₂ através da barreira hematoencefálica.",
      "A concentração plasmática de nitrogênio gasoso insolúvel em circulação captada diretamente pelas terminações aferentes do nervo vago.",
      "A osmolaridade total do líquido intersticial encefálico monitorada pelos osmorreceptores localizados no núcleo supraóptico hipotalâmico."
    ],
    correctIndex: 1
  },
  w4_q24: {
    options: [
      "Elevar de forma reflexa a frequência respiratória minuto sempre que o pH plasmático arterial se desloca para valores excessivamente alcalinos.",
      "Interromper a inspiração e iniciar a expiração quando os pulmões atingem insuflação excessiva, prevenindo a hiperdistensão alveolar.",
      "Interromper o fluxo sanguíneo na circulação pulmonar durante o ato reflexo de deglutição de bolos alimentares sólidos pela faringe e laringe.",
      "Estimular a motilidade gastrointestinal e a secreção ácida gástrica durante as fases profundas de sono com sincronização de ondas lentas."
    ],
    correctIndex: 1
  },

  // World 5
  w5_q16: {
    options: [
      "Acidose metabólica severa com hiperventilação compensatória.",
      "Alcalose respiratória aguda com início de resposta compensatória.",
      "Acidose respiratória crônica secundária à retenção de CO₂.",
      "Alcalose metabólica primária descompensada com hipocalemia."
    ],
    correctIndex: 1
  },
  w5_q18: {
    options: [
      "O instante fisiológico em que o miocárdio esgota totalmente suas reservas intracelulares de glicogênio e sofre isquemia subendocárdica difusa.",
      "A intensidade de esforço na qual a taxa de produção de lactato muscular supera a capacidade tecidual de metabolização, acumulando-se no sangue.",
      "O ponto no qual o sistema pulmonar atinge a Capacidade Pulmonar Total máxima, bloqueando qualquer continuidade de trocas alvéolo-capilares.",
      "O limite de taquicardia no qual o tempo de enchimento ventricular é encurtado a zero, impedindo a abertura mecânica das valvas atriais."
    ],
    correctIndex: 1
  },
  w5_q19: {
    options: [
      "Porque a concentração de oxigênio carreado pelas artérias pulmonares sobe espontaneamente para o triplo das taxas basais de repouso físico.",
      "Porque os músculos esqueléticos ativos aumentam enormemente a extração tecidual de O₂, reduzindo a saturação venosa de 75% para menos de 20%.",
      "Porque a hemoglobina sofre inativação térmica pelo calor muscular no interior dos eritrócitos e libera todo o gás oxigênio livre para a linfa.",
      "Porque o fluxo sanguíneo que irriga o leito arterial coronariano é completamente interrompido durante todo o ciclo ventricular do exercício."
    ],
    correctIndex: 1
  },
  w5_q21: {
    options: [
      "Descarga parassimpática colinérgica maciça provocando bradicardia acentuada, hipotonia arterial sistêmica e supressão da secreção de aldosterona.",
      "Descarga adrenérgica intensa provocando taquicardia, vasoconstrição arteriolar esplâncnica e cutânea, venoconstrição e ativação do SRAA e ADH.",
      "Abolição completa do tônus vasomotor periférico com o objetivo de canalizar todo o fluxo residual unicamente para as extremidades dos membros.",
      "Inibição aguda da liberação hipofisária de vasopressina (ADH) promovendo diurese osmótica maciça para depurar metabólitos tóxicos do plasma."
    ],
    correctIndex: 1
  },
  w5_q22: {
    options: [
      "Aumento extremo e mantido da resistência vascular sistêmica periférica mediado pela síntese massiva e descontrolada de trombina plasmática.",
      "Vasodilatação arteriolar generalizada e perda do tônus vascular induzidas por mediadores inflamatórios (como óxido nítrico e citocinas).",
      "Obstrução mecânica total do fluxo de sangue do átrio esquerdo para o ventrículo provocada por calcificação aguda maciça dos folhetos mitrais.",
      "Paralisia diafragmática bilateral com colapso expansivo do gradeado costal impedindo qualquer ventilação alveolar durante o ciclo respiratório."
    ],
    correctIndex: 1
  },
  w5_q23: {
    options: [
      "A fração percentual de O₂ na atmosfera cai bruscamente para 5%, induzindo o centro quimiorreceptor bulbar a secretar ácidos orgânicos e produzir acidose pura.",
      "A baixa PO₂ alveolar decorrente da hipóxia hipobárica estimula os quimiorreceptores carotídeos, deflagrando hiperventilação que gera Alcalose Respiratória aguda.",
      "A baixa pressão barométrica causa dilatação venosa pulmonar passiva generalizada, promovendo aprisionamento alveolar de CO₂ e Acidose Respiratória grave.",
      "O resfriamento extremo do ar atmosférico induz broncoespasmo reflexo generalizado em todos os bronquíolos, impedindo a saída de CO₂ pela expiração pulmonar."
    ],
    correctIndex: 1
  },
  w5_q24: {
    options: [
      "Redução na transcrição gênica de hemoglobina associada à hemólise esplênica acelerada para diminuir a viscosidade sanguínea e facilitar o fluxo nos capilares pulmonares.",
      "A hipóxia tecidual renal crônica estimula a secreção contínua de eritropoietina (EPO), elevando o hematócrito e a massa total de hemoglobina (poliglobulia de altitude).",
      "Bloqueio completo da absorção duodenal de ferro pela produção hepática maciça de hepcidina induzida pela persistência crônica da alcalose sistêmica hipocápnica.",
      "Diferenciação dos eritrócitos em células que readquirem núcleos funcionais e mitocôndrias ativas para acelerar a respiração aeróbica no interior do plasma sanguíneo."
    ],
    correctIndex: 1
  }
};

const worldFiles = [
  { num: 1, file: 'world1_celular.js', title: 'World 1: Homeostase e Fisiologia Celular (6 Níveis, 24 Questões)' },
  { num: 2, file: 'world2_sangue.js', title: 'World 2: Sangue e Hemostasia (6 Níveis, 24 Questões)' },
  { num: 3, file: 'world3_cardio.js', title: 'World 3: Fluxo Sanguíneo e Sistema Cardiovascular (6 Níveis, 24 Questões)' },
  { num: 4, file: 'world4_respiratorio.js', title: 'World 4: Sistema Respiratório (6 Níveis, 24 Questões)' },
  { num: 5, file: 'world5_integrado.js', title: 'World 5: Fisiologia Renal, Ácido-Base e Integração Sistêmica (6 Níveis, 24 Questões)' }
];

worldFiles.forEach(({ num, file, title }) => {
  const code = fs.readFileSync('js/data/' + file, 'utf8');
  const sandbox = {};
  const transpiled = code.replace(new RegExp(`const WORLD_${num}_DATA`, 'g'), `var WORLD_${num}_DATA`);
  vm.runInNewContext(transpiled, sandbox);
  const data = sandbox[`WORLD_${num}_DATA`];

  let updatedCount = 0;
  data.phases.forEach(p => {
    p.questions.forEach(q => {
      if (updates[q.id]) {
        q.options = updates[q.id].options;
        q.correctIndex = updates[q.id].correctIndex;
        updatedCount++;
        console.log(`✓ [${file}] Atualizada questão ${q.id}`);
      }
    });
  });

  const output = `// ${title}
const WORLD_${num}_DATA = ${JSON.stringify(data, null, 2)};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.WORLD_${num}_DATA = WORLD_${num}_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORLD_${num}_DATA };
}
`;

  fs.writeFileSync('js/data/' + file, output, 'utf8');
  console.log(`Salvo js/data/${file} (${updatedCount} questões ajustadas)`);
});
console.log('Balanceamento de todas as questões concluído com sucesso!');
