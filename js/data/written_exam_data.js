// Banco de Dados Oficial da Prova Escrita Discursiva (23 Questões)
// Contém os enunciados e os gabaritos técnicos oficiais para correção pedagógica por IA.
// NOTA DE SEGURANÇA: Os gabaritos técnicos NÃO são expostos na interface visual da prova.

const WRITTEN_EXAM_DATA = {
  title: 'Prova Escrita de Fisiologia Humana',
  subtitle: '23 Questões Discursivas Acadêmicas',
  instructions: 'Escreva com suas próprias palavras a explicação fisiológica detalhada para cada questão. Ao finalizar, copie sua prova para receber a correção analítica por Inteligência Artificial.',
  totalQuestions: 23,
  pointsPerQuestion: 10,
  maxPoints: 230,

  categories: [
    'Homeostase e fisiologia celular',
    'Sangue e sistema cardiovascular',
    'Sistema respiratório'
  ],

  questions: [
    // --- Categoria 1: Homeostase e fisiologia celular (Questões 1 a 5) ---
    {
      id: 'w_q1',
      number: 1,
      category: 'Homeostase e fisiologia celular',
      prompt: 'O que é homeostase?',
      technicalKey: 'Homeostase é a manutenção de condições internas relativamente estáveis dentro de limites compatíveis com o funcionamento adequado das células e do organismo, por meio de mecanismos regulatórios.'
    },
    {
      id: 'w_q2',
      number: 2,
      category: 'Homeostase e fisiologia celular',
      prompt: 'Explique como o feedback negativo contribui para a manutenção da homeostase e dê um exemplo fisiológico.',
      technicalKey: 'Feedback negativo produz uma resposta que se opõe à alteração inicial, reduzindo o desvio e aproximando a variável de seu ponto de ajuste. Exemplo: regulação da temperatura corporal por sudorese quando a temperatura aumenta.'
    },
    {
      id: 'w_q3',
      number: 3,
      category: 'Homeostase e fisiologia celular',
      prompt: 'Quais são os componentes de uma alça de controle homeostático e qual é a função de cada um?',
      technicalKey: 'Os principais componentes são: Receptor/sensor: detecta a alteração. Centro integrador: recebe e processa a informação, comparando-a ao ponto de ajuste. Efetor: executa a resposta que modifica a variável regulada.'
    },
    {
      id: 'w_q4',
      number: 4,
      category: 'Homeostase e fisiologia celular',
      prompt: 'Diferencie transporte passivo e transporte ativo através da membrana plasmática, considerando a direção do gradiente e o gasto de energia.',
      technicalKey: 'Transporte passivo ocorre a favor do gradiente de concentração ou eletroquímico e não utiliza diretamente ATP. Transporte ativo ocorre contra o gradiente e requer energia, diretamente ou indiretamente.'
    },
    {
      id: 'w_q5',
      number: 5,
      category: 'Homeostase e fisiologia celular',
      prompt: 'Explique o que é tonicidade e descreva o que acontece com uma hemácia em soluções hipotônica, isotônica e hipertônica.',
      technicalKey: 'Tonicidade descreve o efeito de uma solução sobre o volume celular em função da concentração efetiva de solutos. Em solução hipotônica, a hemácia ganha água e pode sofrer hemólise. Em isotônica, mantém aproximadamente seu volume. Em hipertônica, perde água e sofre crenação.'
    },

    // --- Categoria 2: Sangue e sistema cardiovascular (Questões 6 a 14) ---
    {
      id: 'w_q6',
      number: 6,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'Quais são os componentes do sangue e quais são as principais funções do plasma, das hemácias, dos leucócitos e das plaquetas?',
      technicalKey: 'O sangue é formado por plasma e elementos figurados. Plasma transporta substâncias e participa da regulação do meio interno. Hemácias transportam principalmente O₂ e participam do transporte de CO₂. Leucócitos atuam na defesa. Plaquetas participam da hemostasia.'
    },
    {
      id: 'w_q7',
      number: 7,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'O que é hematócrito e o que ele representa?',
      technicalKey: 'Hematócrito é a porcentagem do volume sanguíneo ocupada pelas hemácias.'
    },
    {
      id: 'w_q8',
      number: 8,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'Qual é a função da hemoglobina no transporte de oxigênio e por que o ferro é importante para essa função?',
      technicalKey: 'A hemoglobina se liga reversivelmente ao oxigênio e permite seu transporte no sangue. O ferro presente no grupo heme é essencial para a ligação do O₂.'
    },
    {
      id: 'w_q9',
      number: 9,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'Descreva, de forma resumida, as principais etapas da hemostasia.',
      technicalKey: 'Hemostasia envolve, de forma resumida, vasoconstrição, formação do tampão plaquetário e coagulação, culminando na formação de fibrina e estabilização do coágulo.'
    },
    {
      id: 'w_q10',
      number: 10,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'O que são frequência cardíaca, volume sistólico e débito cardíaco? Como essas variáveis se relacionam?',
      technicalKey: 'Frequência cardíaca é o número de batimentos por minuto. Volume sistólico é o volume de sangue ejetado pelo ventrículo a cada batimento. Débito cardíaco é o volume bombeado pelo coração por minuto e corresponde à frequência cardíaca multiplicada pelo volume sistólico.'
    },
    {
      id: 'w_q11',
      number: 11,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'Como o impulso elétrico se propaga pelo sistema de condução do coração e qual é a importância do atraso no nó atrioventricular?',
      technicalKey: 'O impulso percorre principalmente nó sinoatrial, átrios, nó atrioventricular, feixe atrioventricular, ramos e fibras de Purkinje. O atraso no nó AV permite que os átrios terminem sua contração antes da contração ventricular.'
    },
    {
      id: 'w_q12',
      number: 12,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'Explique as fases do ciclo cardíaco, relacionando sístole, diástole e funcionamento das valvas cardíacas.',
      technicalKey: 'A sístole corresponde principalmente à contração ventricular e ejeção de sangue. A diástole corresponde ao relaxamento e enchimento cardíaco. As valvas abrem e fecham conforme as diferenças de pressão entre câmaras cardíacas e grandes vasos.'
    },
    {
      id: 'w_q13',
      number: 13,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'Explique como a diferença de pressão, o raio do vaso e a resistência vascular influenciam o fluxo sanguíneo.',
      technicalKey: 'O fluxo depende da diferença de pressão e da resistência vascular. Maior diferença de pressão favorece maior fluxo. O raio do vaso influencia fortemente a resistência: pequenas alterações no raio podem produzir grandes alterações na resistência e no fluxo.'
    },
    {
      id: 'w_q14',
      number: 14,
      category: 'Sangue e sistema cardiovascular',
      prompt: 'Explique como o barorreflexo atua quando ocorre uma queda da pressão arterial.',
      technicalKey: 'Quando a pressão arterial cai, os barorreceptores detectam menor estiramento e reduzem sua frequência de disparo. Isso favorece aumento da atividade simpática e redução da parassimpática, elevando frequência cardíaca, contratilidade e vasoconstrição, ajudando a restaurar a pressão arterial.'
    },

    // --- Categoria 3: Sistema respiratório (Questões 15 a 23) ---
    {
      id: 'w_q15',
      number: 15,
      category: 'Sistema respiratório',
      prompt: 'Explique como ocorrem a inspiração e a expiração em repouso, citando os principais músculos envolvidos.',
      technicalKey: 'Na inspiração em repouso, o diafragma contrai e desce, aumentando o volume torácico e favorecendo a entrada de ar. Na expiração tranquila, o diafragma relaxa e o recuo elástico pulmonar promove a saída de ar.'
    },
    {
      id: 'w_q16',
      number: 16,
      category: 'Sistema respiratório',
      prompt: 'Como as alterações do volume da caixa torácica modificam a pressão alveolar e promovem a entrada ou a saída de ar? Relacione sua resposta à lei de Boyle.',
      technicalKey: 'Quando o volume torácico aumenta, a pressão alveolar diminui e o ar entra. Quando o volume diminui, a pressão alveolar aumenta e o ar sai. Isso está relacionado à relação inversa entre pressão e volume descrita pela lei de Boyle.'
    },
    {
      id: 'w_q17',
      number: 17,
      category: 'Sistema respiratório',
      prompt: 'O que é pressão intrapleural e como ela varia durante a inspiração e a expiração?',
      technicalKey: 'Pressão intrapleural é a pressão no espaço entre as pleuras. Em condições normais permanece inferior à pressão atmosférica e torna-se ainda mais negativa durante a inspiração; durante a expiração retorna em direção ao valor de repouso.'
    },
    {
      id: 'w_q18',
      number: 18,
      category: 'Sistema respiratório',
      prompt: 'O que são complacência e elasticidade pulmonar?',
      technicalKey: 'Complacência é a facilidade com que o pulmão se distende diante de uma mudança de pressão. Elasticidade é a tendência do pulmão de retornar à sua condição original após ser distendido.'
    },
    {
      id: 'w_q19',
      number: 19,
      category: 'Sistema respiratório',
      prompt: 'Qual é a função do surfactante pulmonar?',
      technicalKey: 'O surfactante reduz a tensão superficial do líquido alveolar, diminuindo a tendência de colapso dos alvéolos e facilitando sua expansão.'
    },
    {
      id: 'w_q20',
      number: 20,
      category: 'Sistema respiratório',
      prompt: 'Diferencie ventilação pulmonar e troca gasosa.',
      technicalKey: 'Ventilação pulmonar é o movimento de ar para dentro e para fora dos pulmões. Troca gasosa é a difusão de O₂ e CO₂ entre os alvéolos e o sangue e entre o sangue e os tecidos.'
    },
    {
      id: 'w_q21',
      number: 21,
      category: 'Sistema respiratório',
      prompt: 'Explique como as diferenças de pressão parcial promovem as trocas de O₂ e CO₂ nos pulmões e nos tecidos.',
      technicalKey: 'Os gases se difundem de regiões com maior pressão parcial para regiões com menor pressão parcial. Nos pulmões, O₂ passa dos alvéolos para o sangue e CO₂ passa do sangue para os alvéolos. Nos tecidos, O₂ passa do sangue para os tecidos e CO₂ passa dos tecidos para o sangue.'
    },
    {
      id: 'w_q22',
      number: 22,
      category: 'Sistema respiratório',
      prompt: 'Como o oxigênio e o dióxido de carbono são transportados pelo sangue?',
      technicalKey: 'O₂ é transportado principalmente ligado à hemoglobina, com pequena quantidade dissolvida no plasma. CO₂ é transportado principalmente na forma de bicarbonato, além de estar ligado a proteínas, especialmente hemoglobina, e dissolvido no plasma.'
    },
    {
      id: 'w_q23',
      number: 23,
      category: 'Sistema respiratório',
      prompt: 'O que é a relação ventilação-perfusão e por que seu equilíbrio é importante para as trocas gasosas?',
      technicalKey: 'A relação ventilação-perfusão compara a ventilação dos alvéolos com o fluxo sanguíneo pulmonar. O equilíbrio adequado entre ventilação e perfusão é essencial para que as trocas de O₂ e CO₂ sejam eficientes.'
    }
  ]
};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.WRITTEN_EXAM_DATA = WRITTEN_EXAM_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WRITTEN_EXAM_DATA };
}
