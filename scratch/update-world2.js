const fs = require('fs');

const world2 = {
  id: 'w2',
  title: 'Sangue e Hemostasia',
  subtitle: 'Plasma, eritrócitos, hemoglobina, hemostasia, coagulação e grupos sanguíneos',
  icon: 'blood',
  phases: [
    // ----------------------------------------------------
    // NÍVEL 7 (w2_p1): Frações do Sangue & Pressão Oncótica
    // ----------------------------------------------------
    {
      id: 'w2_p1',
      title: 'Frações do Sangue & Pressão Oncótica',
      topic: 'Composição do Sangue e Pressão Oncótica',
      level: 7,
      order: 1,
      nextPhaseId: 'w2_p2',
      lesson: {
        title: 'Composição do Sangue e Fração Plasmática',
        concept: 'O sangue é um tecido conjuntivo líquido especializado composto por plasma (~55% do volume) e elementos figurados (~45% do volume).',
        mechanism: 'O plasma é constituído por 90-92% de água, 7% de proteínas plasmáticas (albumina, globulinas e fibrinogênio), eletrólitos, nutrientes e excretas. A albumina responde por cerca de 75-80% da pressão oncótica (coloidosmótica) do plasma (~25 a 28 mmHg), impedindo a saída excessiva de água para o interstício.',
        examPoint: 'Hipoalbuminemia e Edema: Em doenças hepáticas graves (cirrose) ou renais (síndrome nefrótica), a queda da albumina reduz a pressão oncótica capilar, desbalanceando as forças de Starling e provocando acúmulo patológico de líquido no interstício (edema generalizado e ascite).',
        example: 'Queimaduras extensas provocam perda maciça de plasma através da derme lesada, levando a choque hipovolêmico com hemoconcentração relativa.',
        quickChallenge: 'Por que a pressão osmótica gerada pelas proteínas plasmáticas (pressão oncótica) é tão crucial se a osmolaridade do plasma é dominada pelo cloreto de sódio?'
      },
      questions: [
        {
          id: 'w2_q1',
          topic: 'Composição do Sangue e Pressão Oncótica',
          difficulty: 'easy',
          xp: 15,
          title: 'Qual é a principal proteína plasmática responsável por manter a pressão coloidosmótica (oncótica) intravascular?',
          options: [
            'Hemoglobina globular confinada nos eritrócitos para tamponamento.',
            'Albumina sérica monomérica sintetizada continuamente pelo fígado.',
            'Miosina de cadeia pesada ancorada nos sarcômeros ventriculares.',
            'Glicoproteína hepcidina reguladora da ferroportina basolateral.'
          ],
          correctIndex: 1,
          explanation: 'A albumina sérica representa mais de 60% da massa proteica plasmática e, devido à sua abundância e peso molecular (~66 kDa), gera a maior fração da pressão oncótica que retém líquido dentro dos vasos sanguíneos.',
          whyWrong: [
            'A hemoglobina está confinada no interior dos eritrócitos e não atua na pressão oncótica do plasma livre.',
            'Alternativa correta.',
            'A miosina é uma proteína intracelular estrutural do citoesqueleto muscular contrátil.',
            'A hepcidina é um hormônio peptídico regulador do ferro, sem impacto coloidosmótico significativo.'
          ],
          tip: 'Albumina = principal mantenedora da pressão oncótica intravascular (evita edema intersticial).'
        },
        {
          id: 'w2_q2',
          type: 'matching',
          topic: 'Composição do Sangue e Pressão Oncótica',
          difficulty: 'medium',
          xp: 20,
          title: 'Relacione cada constituinte do sangue à sua função fisiológica predominante:',
          examPrompt: `
            <p style="font-weight: 700; margin-bottom: 8px;">Considere os seguintes constituintes do sangue humano e suas funções:</p>
            <ul style="padding-left: 20px; line-height: 1.6; margin-bottom: 12px;">
              <li><strong>I. Plasma Sanguíneo:</strong> Fração líquida contendo água, eletrólitos e proteínas.</li>
              <li><strong>II. Hemácias (Eritrócitos):</strong> Células anucleadas bicôncavas ricas em hemoglobina.</li>
              <li><strong>III. Leucócitos (Glóbulos brancos):</strong> Células nucleadas de defesa imune.</li>
              <li><strong>IV. Plaquetas (Trombócitos):</strong> Fragmentos anucleados derivados de megacariócitos.</li>
            </ul>
            <p style="font-weight: 700;">A correspondência funcional correta é:</p>
          `,
          options: [
            'I: Transporte hidrodinâmico e pressão oncótica | II: Transporte de O2 e CO2 | III: Fagocitose e defesa imune | IV: Hemostasia primária e tamponamento vascular',
            'I: Fagocitose ativa e imunidade | II: Hemostasia primária vascular | III: Transporte de O2 e CO2 | IV: Manutenção da pressão coloidosmótica oncótica',
            'I: Transporte de O2 e CO2 | II: Manutenção da pressão oncótica | III: Hemostasia primária tecidual | IV: Fagocitose e secreção de citocinas inflamatórias',
            'I: Hemostasia primária e agregação | II: Fagocitose de patógenos | III: Pressão oncótica vascular | IV: Transporte de gases e tamponamento eritrocitário'
          ],
          correctIndex: 0,
          pairs: [
            { item: 'Plasma Sanguíneo', match: 'Manutenção da pressão oncótica e transporte de metabólitos' },
            { item: 'Hemácias', match: 'Transporte de oxigênio ligado à hemoglobina' },
            { item: 'Leucócitos', match: 'Defesa imunitária e vigilância patogênica' },
            { item: 'Plaquetas', match: 'Hemostasia primária e formação do tampão plaquetário' }
          ],
          explanation: 'O plasma assegura volume e oncose; as hemácias efetuam o transporte gasoso; os leucócitos conferem imunidade; e as plaquetas formam o tampão hemostático primário.',
          whyWrong: [
            'Alternativa correta: associa com exatidão a função primária de cada componente sanguíneo.',
            'O plasma não realiza fagocitose celular ativa; a fagocitose é função dos leucócitos.',
            'Hemácias transportam oxigênio e gás carbônico, e não geram a pressão oncótica do plasma.',
            'Plaquetas formam o tampão hemostático, e não realizam fagocitose.'
          ],
          tip: 'Plasma = meio líquido; Hemácia = O2; Leucócito = defesa; Plaqueta = hemostasia primária.'
        },
        {
          id: 'w2_q3',
          type: 'single',
          topic: 'Composição do Sangue e Pressão Oncótica',
          difficulty: 'hard',
          xp: 20,
          title: 'Em um paciente portador de cirrose hepática com hipoalbuminemia severa, qual mecanismo hemodinâmico explica a ascite e o edema periférico?',
          options: [
            'Aumento desmedido da pressão oncótica capilar que extrai ativamente água livre do espaço intersticial peritoneal.',
            'Queda da pressão oncótica plasmática, permitindo que a pressão hidrostática capilar desloque líquido para o interstício.',
            'Oclusão aguda e irreversível dos canais de sódio renais com perda urinária maciça de eritrócitos maduros anucleados.',
            'Espasmo arterial esplâncnico tônico que impede a perfusão capilar e eleva a pressão coloidosmótica dos tecidos linfáticos.'
          ],
          correctIndex: 1,
          explanation: 'Pelas Forças de Starling capilares, a pressão oncótica plasmática gerada pela albumina contrapõe-se à pressão hidrostática. Com hipoalbuminemia, a força de retenção capilar cai, e o líquido extravasa para o terceiro espaço e interstício.',
          whyWrong: [
            'A pressão oncótica está severamente reduzida pela falência sintética hepática, e não aumentada.',
            'Alternativa correta.',
            'A perda urinária de hemácias (hematúria) é sinal de lesão glomerular ou urológica, não a causa da ascite cirrótica.',
            'A cirrose cursa com vasodilatação esplâncnica e hipertensão portal hidrostática, e não com espasmo oclusivo arterial.'
          ],
          tip: 'Forças de Starling: Pressão Hidrostática expulsa água; Pressão Oncótica (albumina) retém água no vaso.'
        },
        {
          id: 'w2_q4',
          type: 'single',
          topic: 'Composição do Sangue e Pressão Oncótica',
          difficulty: 'hard',
          xp: 20,
          title: 'Qual é a distinção bioquímica fundamental entre plasma sanguíneo e soro sanguíneo em amostras laboratoriais humanas?',
          options: [
            'O plasma é isento de íons sódio e potássio, enquanto o soro é concentrado em macromoléculas lipídicas insaturadas.',
            'O plasma retém fibrinogênio e fatores solúveis; o soro é o sobrenadante após a coagulação, isento desses fatores consumidos.',
            'O soro corresponde ao sangue total contendo células vivas íntegras e o plasma é apenas a solução de hemoglobina livre.',
            'Ambos são estritamente idênticos em composição proteica, diferindo apenas pelo tipo de corante químico adicionado no tubo.'
          ],
          correctIndex: 1,
          explanation: 'Plasma = sangue total centrifugado com anticoagulante (fibrinogênio preservado). Soro = líquido restante após o sangue coagular in vitro (o fibrinogênio foi convertido em fibrina insolúvel e removido no coágulo).',
          whyWrong: [
            'Ambos contêm eletrólitos monovalentes em concentrações idênticas; a diferença reside nas proteínas de coagulação.',
            'Alternativa correta.',
            'O soro é acelular, pois os elementos figurados ficam aprisionados na malha de fibrina do coágulo formado.',
            'Não são idênticos: a presença de fibrinogênio no plasma e sua ausência no soro é a distinção analítica crucial.'
          ],
          tip: 'Equação de bancada: Soro = Plasma menos Fibrinogênio e fatores de coagulação consumidos.'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 8 (w2_p2): Eritropoiese & Metabolismo do Ferro
    // ----------------------------------------------------
    {
      id: 'w2_p2',
      title: 'Eritrócitos, Hematócrito & Ferro',
      topic: 'Eritrócitos, Hematócrito e Metabolismo do Ferro',
      level: 8,
      order: 2,
      nextPhaseId: 'w2_p3',
      lesson: {
        title: 'Eritrócitos, Hematócrito e Controle da Eritropoiese',
        concept: 'Os eritrócitos são discos bicôncavos anucleados com vida média de 120 dias, especializados no empacotamento da hemoglobina e transporte de gases.',
        mechanism: 'Controle por Eritropoietina (EPO): A diminuição da oferta de O2 aos tecidos renais (hipóxia renal) estimula células intersticiais peritubulares a secretar o hormônio eritropoietina (EPO), que atua na medula óssea acelerando a proliferação e maturação dos precursores eritroides.',
        examPoint: 'Metabolismo do Ferro: O ferro é absorvido no duodeno na forma ferrosa (Fe2+), transportado no plasma ligado à transferrina (Fe3+) e armazenado nas células (fígado e macrófagos) sob a forma de ferritina e hemossiderina.',
        example: 'Em grandes altitudes ou em pneumopatias hipoxêmicas crônicas, a hipóxia estimula secreção persistente de EPO, resultando em poliglobulia / eritrocitose compensatória (hematócrito > 55%).',
        quickChallenge: 'Por que pacientes com doença renal crônica avançada desenvolvem anemia normocítica e normocrômica progressiva?'
      },
      questions: [
        {
          id: 'w2_q5',
          type: 'single',
          topic: 'Eritrócitos, Hematócrito e Metabolismo do Ferro',
          difficulty: 'easy',
          xp: 15,
          title: 'O que representa o hematócrito e qual o seu significado fisiológico primário na hemodinâmica?',
          options: [
            'A fração percentual do volume de sangue total representada pelos eritrócitos após centrifugação em tubo graduado.',
            'A contagem numérica absoluta de leucócitos polimorfonucleares e fragmentos plaquetários por milímetro cúbico de plasma.',
            'A concentração média de hemoglobina corpuscular expressa em gramas por decilitro de solução fisiológica isotônica.',
            'O tempo em segundos despendido pela protrombina para converter o fibrinogênio solúvel em rede de fibrina insolúvel.'
          ],
          correctIndex: 0,
          explanation: 'O hematócrito quantifica a fração percentual do volume sanguíneo total ocupada pelos eritrócitos centrifugados. Em adultos saudáveis situa-se em torno de 40% a 48%.',
          whyWrong: [
            'Alternativa correta.',
            'Leucócitos e plaquetas formam a camada leucocitária intermediária ("buffy coat"), correspondendo a menos de 1% do volume total.',
            'Essa é a definição do CHCM (concentração de hemoglobina corpuscular média), não do hematócrito.',
            'Essa grandeza refere-se aos testes laboratoriais de coagulação (Tempo de Protrombina - TP).'
          ],
          tip: 'Hematócrito = Porcentagem de eritrócitos no volume total de sangue centrifugado.'
        },
        {
          id: 'w2_q6',
          type: 'single',
          topic: 'Eritrócitos, Hematócrito e Metabolismo do Ferro',
          difficulty: 'medium',
          xp: 15,
          title: 'Qual é o estímulo biológico primário que deflagra a transcrição e secreção de eritropoietina (EPO) pelas células intersticiais renais?',
          options: [
            'Hiperglicemia plasmática persistente após ingestão maciça de carboidratos refinados.',
            'Redução na pressão parcial ou entrega de oxigênio tecidual (hipóxia) no córtex renal.',
            'Sobrecarga hidrossalina intravascular com elevação brusca da pressão de pulso aórtica.',
            'Aumento fisiológico da temperatura corporal central induzido por atividade desportiva.'
          ],
          correctIndex: 1,
          explanation: 'Células intersticiais do córtex renal funcionam como sensores de oxigênio. Quando a oferta tecidual de O2 diminui (por anemia, hipóxia de altitude ou isquemia), ativa-se o fator HIF-1alpha, aumentando a transcrição de EPO.',
          whyWrong: [
            'A glicemia modula primariamente a secreção de insulina e glucagon pelas ilhotas pancreáticas.',
            'Alternativa correta.',
            'Sobrecarga de sódio e volume estimula o peptídeo natriurético atrial (ANP), sem modular a secreção de EPO.',
            'Variações de temperatura estimulam centros termorreguladores hipotalâmicos, não a eritropoiese.'
          ],
          tip: 'Gatilho da Eritropoietina (EPO): Hipóxia renal (baixa entrega de O2 aos rins).'
        },
        {
          id: 'w2_q7',
          type: 'single',
          topic: 'Eritrócitos, Hematócrito e Metabolismo do Ferro',
          difficulty: 'hard',
          xp: 20,
          title: 'Qual proteína plasmática transporta ativamente íons de ferro férrico (Fe³⁺) no sangue até os precursores eritroides na medula óssea?',
          options: [
            'Ferritina tecidual de armazenamento citosólico.',
            'Transferrina sérica com sítios para íons férricos.',
            'Albumina sérica carreadora de bilirrubina livre.',
            'Hepcidina peptídica sintetizada pelos hepatócitos.'
          ],
          correctIndex: 1,
          explanation: 'A transferrina é a glicoproteína carreadora plasmática específica que transporta o ferro férrico circulante. A ferritina é a proteína de reserva tecidual intracelular, e a hepcidina é o hormônio regulador negativo da absorção.',
          whyWrong: [
            'A ferritina atua no armazenamento intracelular de ferro, não em seu transporte no plasma.',
            'Alternativa correta.',
            'A albumina transporta ácidos graxos, bilirrubina e fármacos, mas não é o carreador específico do ferro férrico.',
            'A hepcidina é o hormônio regulador negativo que internaliza a ferroportina, inibindo a liberação de ferro.'
          ],
          tip: 'Mnemônico: Transferrina TRANSporta o ferro no sangue; Ferritina armazena FEchado na célula.'
        },
        {
          id: 'w2_q8',
          type: 'single',
          topic: 'Eritrócitos, Hematócrito e Metabolismo do Ferro',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual é a consequência biofísica e hemodinâmica de uma elevação excessiva do hematócrito para 65-70% (como na policitemia vera)?',
          options: [
            'Queda da pressão arterial por redução da viscosidade e aumento da filtração glomerular.',
            'Aumento exponencial da viscosidade sanguínea, elevando a resistência vascular periférica e a pós-carga cardíaca.',
            'Aceleração expressiva da velocidade de hemossedimentação por dispersão das cargas da membrana eritrocitária.',
            'Inibição completa da síntese de ácido clorídrico gástrico por isquemia reflexa das células parietais estomacais.'
          ],
          correctIndex: 1,
          explanation: 'A viscosidade do sangue cresce exponencialmente com o hematócrito acima de 50%. Com hematócrito em 65%, o sangue torna-se muito viscoso, aumentando o atrito vascular, a resistência periférica e o risco de trombose e hipertensão.',
          whyWrong: [
            'A pressão arterial tende a subir, e não cair, pela elevada viscosidade e aumento da resistência vascular periférica.',
            'Alternativa correta.',
            'A elevada densidade celular retarda o empilhamento das hemácias, reduzindo significativamente a VHS.',
            'A policitemia não suprime a secreção gástrica ácida basal mediada por histamina e gastrina.'
          ],
          tip: 'Hematócrito alto = sangue viscoso = maior resistência vascular e risco trombótico elevado.'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 9 (w2_p3): Hemoglobina & Transporte de O2
    // ----------------------------------------------------
    {
      id: 'w2_p3',
      title: 'Hemoglobina, O2 & Efeito Bohr',
      topic: 'Hemoglobina e Transporte de O2',
      level: 9,
      order: 3,
      nextPhaseId: 'w2_p4',
      lesson: {
        title: 'Hemoglobina e Dinâmica do Transporte de Oxigênio',
        concept: 'A hemoglobina é uma proteína tetramérica (HbA = 2 cadeias alfa + 2 cadeias beta) contendo 4 grupos heme. Cada átomo de ferro ferroso (Fe2+) liga-se reversivelmente a uma molécula de O2, permitindo o transporte de até 4 moléculas de O2 por hemoglobina.',
        mechanism: 'Cooperatividade e Curva Sigmoide: A ligação da primeira molécula de O2 induz mudança conformacional do estado T ("tenso", baixa afinidade) para o estado R ("relaxado", alta afinidade), facilitando a ligação das moléculas subsequentes (cooperatividade positiva).',
        examPoint: 'Desvio da Curva de Dissociação (Efeito Bohr): Fatores que desviam a curva para a DIREITA (diminuem afinidade e facilitam a liberação de O2 nos tecidos ativos): 1) Aumento da PCO2; 2) Aumento de H+ (queda do pH / acidose); 3) Aumento da temperatura; 4) Aumento do 2,3-Bisfosfoglicerato (2,3-BPG). Desvios para a ESQUERDA aumentam a afinidade e retêm O2.',
        example: 'No músculo esquelético durante exercício vigoroso: O tecido produz calor, CO2 e ácido láctico. O efeito Bohr desvia a curva para a direita, forçando a hemoglobina a descarregar mais oxigênio exatamente nas fibras musculares em sofrimento hipóxico.',
        quickChallenge: 'Por que a intoxicação por monóxido de carbono (CO) é letal mesmo que a PO2 dissolvida no plasma permaneça normal?'
      },
      questions: [
        {
          id: 'w2_q9',
          type: 'single',
          topic: 'Hemoglobina e Transporte de O2',
          difficulty: 'medium',
          xp: 15,
          title: 'Qual é o papel biofísico exercido pelo átomo de ferro ferroso (Fe²⁺) no grupo heme da molécula de hemoglobina?',
          options: [
            'Conferir rigidez mecânica contra a desnaturação pelo ácido gástrico.',
            'Ligar-se de forma estequiométrica e reversível a uma molécula de O₂.',
            'Quebrar oxidativamente o oxigênio em ânions superóxido citoplasmáticos.',
            'Bombear ativamente prótons para o lúmen dos capilares alveolares.'
          ],
          correctIndex: 1,
          explanation: 'O ferro no estado de oxidação ferroso (Fe2+) coordena-se reversivelmente com a molécula de oxigênio. Se for oxidado ao estado férrico (Fe3+), forma-se meta-hemoglobina, incapaz de transportar O2.',
          whyWrong: [
            'A hemoglobina está confinada aos eritrócitos e não atua em ambientes de acidez gástrica.',
            'Alternativa correta.',
            'A hemoglobina preserva a integridade da molécula de O2 sem fragmentá-la em radicais livres.',
            'O grupo heme não atua como carreador primário de prótons na barreira hematogasosa.'
          ],
          tip: 'Ferro ferroso (Fe2+) transporta O2. Se oxidar para Fe3+ (férrico), vira meta-hemoglobina e não solta O2 adequadamente.'
        },
        {
          id: 'w2_q10',
          type: 'single',
          topic: 'Hemoglobina e Transporte de O2',
          difficulty: 'medium',
          xp: 20,
          title: 'O que caracteriza o Efeito Bohr na fisiologia do descarregamento tecidual de oxigênio?',
          options: [
            'A redução do pH tecidual e a elevação da PCO₂ diminuem a afinidade da hemoglobina pelo O₂, facilitando sua liberação nas células ativas.',
            'O resfriamento corporal profundo nos leitos periféricos acelera a dissociação do oxigênio para manter o metabolismo cerebral basal.',
            'A conversão de hemoglobina fetal em hemoglobina adulta durante o esforço anaeróbico para aumentar a captação tecidual de oxigênio.',
            'A inativação tônica da anidrase carbônica eritrocitária quando o sangue venoso alcança tecidos ricos em metabólitos ácidos livres.'
          ],
          correctIndex: 0,
          explanation: 'O Efeito Bohr descreve a diminuição da afinidade da hemoglobina pelo O2 induzida por acidose tecidual e acúmulo de CO2, garantindo que tecidos com alta taxa metabólica recebam mais oxigênio.',
          whyWrong: [
            'Alternativa correta.',
            'O resfriamento desvia a curva de dissociação para a ESQUERDA, aumentando a afinidade e retendo o oxigênio ligado.',
            'A troca de isoformas de hemoglobina é um processo genético do desenvolvimento pós-natal, não um evento agudo de esforço.',
            'A anidrase carbônica permanece ativa em todo o ciclo respiratório, sendo fundamental para o tamponamento por bicarbonato.'
          ],
          tip: 'Efeito Bohr: Tecido ativo produz calor, CO2 e ácido -> curva desloca para a DIREITA -> entrega MAIS oxigênio.'
        },
        {
          id: 'w2_q11',
          type: 'single',
          topic: 'Hemoglobina e Transporte de O2',
          difficulty: 'hard',
          xp: 20,
          title: 'Qual das seguintes condições fisiológicas ou bioquímicas desvia a curva de saturação da hemoglobina para a ESQUERDA?',
          options: [
            'Aumento severo da temperatura tecidual durante quadro de pirexia alta.',
            'Alcalose plasmática (queda de H⁺), hipotermia e redução do 2,3-BPG.',
            'Aumento da síntese de 2,3-bisfosfoglicerato na hipoxemia de altitude.',
            'Elevação acentuada da pressão parcial de dióxido de carbono (hipercapnia).'
          ],
          correctIndex: 1,
          explanation: 'A alcalose (queda de H+), a redução da PCO2, a hipotermia e a queda do 2,3-BPG estabilizam o estado R da hemoglobina, desviando a curva para a esquerda (maior afinidade por O2 e menor descarregamento tecidual).',
          whyWrong: [
            'Hipertermia desvia a curva para a direita por diminuir a afinidade do oxigênio pelo heme.',
            'Alternativa correta.',
            'O 2,3-BPG liga-se à conformação desoxigenada e desvia a curva para a direita, facilitando a liberação de O2.',
            'A hipercapnia induz o Efeito Bohr clássico, desviando a curva para a direita.'
          ],
          tip: 'Desvio para a Esquerda = "Agarra o O2" (pH alto, CO2 baixo, temperatura fria, Hb fetal).'
        },
        {
          id: 'w2_q12',
          type: 'single',
          topic: 'Hemoglobina e Transporte de O2',
          difficulty: 'hard',
          xp: 25,
          title: 'Por que o monóxido de carbono (CO) é um agente asfixiante celular letal mesmo em concentrações ambientais mínimas?',
          options: [
            'Porque o CO induz lise osmótica descontrolada de todas as hemácias circulantes em fração de segundos.',
            'Porque liga-se ao heme com afinidade ~240 vezes superior à do O₂ e trava a hemoglobina restante no estado R, impedindo a liberação nos tecidos.',
            'Porque converte instantaneamente o tampão bicarbonato em ácido sulfúrico concentrado na microcirculação capilar.',
            'Porque inibe irreversivelmente a síntese renal de eritropoietina impedindo a hematopoiese na medula óssea.'
          ],
          correctIndex: 1,
          explanation: 'O CO tem afinidade ~240x superior à do O2 pelo grupo heme. Além de ocupar os sítios de O2 (formando HbCO), ele altera a conformação do tetrâmero, desviando a curva restante fortemente para a esquerda, impedindo a dissociação do O2 para as células (hipóxia tecidual profunda).',
          whyWrong: [
            'O CO não destrói as hemácias por hemólise; ele ocupa competitivamente os sítios de ligação do oxigênio.',
            'Alternativa correta.',
            'O monóxido de carbono não reage formando ácido sulfúrico no sangue.',
            'A toxicidade letal aguda ocorre em minutos por hipóxia tecidual cerebral e miocárdica, não por supressão medular tardia.'
          ],
          tip: 'Monóxido de Carbono (CO): afinidade 240x maior pelo heme + desvio da curva para a esquerda = asfixia celular severa.'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 10 (w2_p4): Hemostasia Primária & Plaquetas
    // ----------------------------------------------------
    {
      id: 'w2_p4',
      title: 'Hemostasia Primária & Plaquetas',
      topic: 'Hemostasia Primária e Plaquetas',
      level: 10,
      order: 4,
      nextPhaseId: 'w2_p5',
      lesson: {
        title: 'Hemostasia Primária e Formação do Tampão Plaquetário',
        concept: 'Hemostasia é o conjunto coordenado de mecanismos biológicos que mantém o sangue fluido nos vasos normais e previne a perda sanguínea (hemorragia) após lesão vascular.',
        mechanism: 'Etapas da Hemostasia Primária: 1) Espasmo Vascular (vasoconstrição reflexa miogênica e liberação local de endotelina e tromboxano A2); 2) Adesão Plaquetária: O colágeno subendotelial exposto liga-se ao fator de von Willebrand (vWF), que se ancora ao receptor de membrana plaquetária GpIb; 3) Ativação e Secreção: As plaquetas mudam de forma (emitem pseudópodes) e degranulam ADP, serotonina e sintetizam Tromboxano A2 (TXA2); 4) Agregação Plaquetária: O ADP e o TXA2 ativam os receptores GpIIb/IIIa, que se ligam ao fibrinogênio plasmático, conectando plaquetas vizinhas e formando o tampão plaquetário primário.',
        examPoint: 'Ação do Ácido Acetilsalicílico (AAS): Inibe irreversivelmente a enzima Ciclo-oxigenase-1 (COX-1) nas plaquetas, bloqueando a síntese de Tromboxano A2 (TXA2). Como as plaquetas são anucleadas, não conseguem sintetizar nova enzima, resultando em efeito antiagregante durante toda a vida útil da plaqueta (~7 a 10 dias).',
        example: 'Doença de von Willebrand: O distúrbio hemorrágico hereditário mais comum decorre da deficiência de vWF, comprometendo a adesão plaquetária ao colágeno e aumentando o tempo de sangramento.',
        quickChallenge: 'Por que o endotélio vascular íntegro e saudável impede ativamente a adesão e agregação plaquetária?'
      },
      questions: [
        {
          id: 'w2_q13',
          type: 'single',
          topic: 'Hemostasia Primária e Plaquetas',
          difficulty: 'easy',
          xp: 15,
          title: 'Qual é o evento vascular imediato desencadeado logo após a lesão mecânica da parede de um vaso sanguíneo?',
          options: [
            'Polimerização imediata de monômeros de fibrina insolúvel.',
            'Vasoconstrição reflexa local miogênica (espasmo vascular).',
            'Destruição esplênica de plaquetas senescentes circulantes.',
            'Secreção endotelial de prostaciclina vasodilatadora pura.'
          ],
          correctIndex: 1,
          explanation: 'O espasmo vascular imediato decorre de reflexo miogênico local, estímulo de nociceptores e liberação de autacoides vasoconstritores (endotelina, tromboxano A2), diminuindo a perda de sangue instantaneamente.',
          whyWrong: [
            'A rede de fibrina consolida a hemostasia secundária e requer ativação da cascata enzimática.',
            'Alternativa correta.',
            'O baço não destrói plaquetas em resposta à lesão hemorrágica aguda.',
            'A prostaciclina é antiagregante e vasodilatadora; a lesão expõe mediadores vasoconstritores.'
          ],
          tip: 'Sequência cronológica: 1) Espasmo vascular -> 2) Tampão plaquetário -> 3) Coagulação de fibrina.'
        },
        {
          id: 'w2_q14',
          type: 'single',
          topic: 'Hemostasia Primária e Plaquetas',
          difficulty: 'medium',
          xp: 15,
          title: 'Qual molécula atua como ponte biológica na adesão de plaquetas ao colágeno subendotelial através do receptor GpIb?',
          options: [
            'Fator de von Willebrand (vWF).',
            'Antitrombina III circulante.',
            'Plasminogênio tecidual livre.',
            'Albumina sérica monomérica.'
          ],
          correctIndex: 0,
          explanation: 'O fator de von Willebrand (vWF) secretado pelas células endoteliais e plaquetas liga-se ao colágeno exposto e ao receptor GpIb das plaquetas, permitindo sua fixação sob as forças de cisalhamento do fluxo sanguíneo.',
          whyWrong: [
            'Alternativa correta.',
            'Antitrombina III inativa fatores ativados da coagulação (IIa e Xa), sem mediar adesão plaquetária.',
            'Plasminogênio é o zimogênio que dissolve fibrina formada.',
            'A albumina sérica não ancora plaquetas ao colágeno da matriz vascular.'
          ],
          tip: 'Adesão plaquetária = Colágeno exposto + Fator de von Willebrand (vWF) + Glicoproteína Ib (GpIb).'
        },
        {
          id: 'w2_q15',
          type: 'single',
          topic: 'Hemostasia Primária e Plaquetas',
          difficulty: 'hard',
          xp: 20,
          title: 'Como o ácido acetilsalicílico (AAS) em baixas doses exerce sua potente ação antiplaquetária protetora contra o infarto agudo?',
          options: [
            'Estimulando a produção excessiva de heparina endógena nos mastócitos perivasculares da túnica adventícia.',
            'Inibindo irreversivelmente a COX-1 plaquetária e suprimindo a síntese de tromboxano A2 durante toda a vida útil da plaqueta.',
            'Bloqueando os receptores hepáticos de vitamina K para diminuir a carboxilação dos fatores de coagulação solúveis.',
            'Clivando enzimaticamente os filamentos de fibrina insolúvel já consolidados na luz coronariana estenosada.'
          ],
          correctIndex: 1,
          explanation: 'A aspirina acetila irreversivelmente a COX-1 plaquetária, bloqueando a conversão de ácido araquidônico em TXA2. Como as plaquetas são anucleadas, o efeito dura toda a sua sobrevida (7 a 10 dias).',
          whyWrong: [
            'O AAS não modula a secreção de heparina pelos mastócitos.',
            'Alternativa correta.',
            'Antagonismo da vitamina K é o mecanismo dos anticoagulantes orais cumarínicos (varfarina), não do AAS.',
            'O AAS não é trombolítico; ele previne a formação de novos trombos plaquetários, mas não degrada fibrina preexistente.'
          ],
          tip: 'Aspirina = inibe COX-1 plaquetária -> zera Tromboxano A2 (TXA2) -> bloqueia agregação plaquetária.'
        },
        {
          id: 'w2_q16',
          type: 'single',
          topic: 'Hemostasia Primária e Plaquetas',
          difficulty: 'hard',
          xp: 25,
          title: 'Quais mediadores bioquímicos sintetizados pelo endotélio vascular íntegro impedem a trombose espontânea em condições normais?',
          options: [
            'Tromboxano A2 e fibrinogênio ativado na superfície luminal.',
            'Prostaciclina (PGI₂) e Óxido Nítrico (NO) com ação vasodilatadora e antiplaquetária.',
            'Fator tecidual exposto e colágeno fibrilar subendotelial.',
            'Trombina alfa estabilizada pelo fator XIII ativado solúvel.'
          ],
          correctIndex: 1,
          explanation: 'O endotélio saudável é ativamente antitrombótico: secreta continuamente prostaciclina (PGI2) e óxido nítrico (NO), que relaxam o músculo liso vascular e inibem fortemente a ativação e agregação plaquetária.',
          whyWrong: [
            'Tromboxano A2 é um mediador pró-trombótico potente liberado por plaquetas durante a ativação.',
            'Alternativa correta.',
            'Fator tecidual e colágeno são mantidos ocultos sob o endotélio íntegro e deflagram hemostasia quando expostos.',
            'A trombina é a principal enzima pró-coagulante e não deve ser gerada na superfície de vasos saudáveis.'
          ],
          tip: 'Endotélio são = PGI2 + NO -> vasodilatação e inibição plaquetária contínua.'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 11 (w2_p5): Coagulação & Fibrina
    // ----------------------------------------------------
    {
      id: 'w2_p5',
      title: 'Coagulação Enzimática & Fibrina',
      topic: 'Cascata de Coagulação e Fibrinólise',
      level: 11,
      order: 5,
      nextPhaseId: 'w2_p6',
      lesson: {
        title: 'Cascata da Coagulação e Sistema Fibrinolítico',
        concept: 'A hemostasia secundária consolida o tampão plaquetário instável mediante uma cascata de zimogênios plasmáticos (fatores de coagulação) ativados sequencialmente até a polimerização da fibrina.',
        mechanism: 'Vias de Coagulação: 1) Via Extrínseca: Disparada pelo Fator Tecidual (tromboplastina tecidual) exposto na lesão, que ativa o Fator VII (complexo FT-VIIa); 2) Via Intrínseca: Iniciada pelo contato com superfícies carregadas negativamente, ativando os fatores XII, XI, IX e VIII; 3) Via Comum: Ambas as vias convergem na ativação do Fator X em Xa (complexo protrombinase, com Fator Va, Ca2+ e fosfolipídios). O Fator Xa converte Protrombina (Fator II) em Trombina ativa (Fator IIa). A trombina então cliva o Fibrinogênio solúvel (Fator I) em monômeros de Fibrina (Fator Ia), que são estabilizados covalentemente pelo Fator XIIIa.',
        examPoint: 'Fibrinólise e D-dímero: A plasmina (gerada a partir do plasminogênio pelo ativador de plasminogênio tecidual - tPA) degrada a malha de fibrina insolúvel para restabelecer a permeabilidade vascular. A dosagem de D-dímeros mensura fragmentos de degradação da fibrina ligada, sendo teste de triagem fundamental para embolia pulmonar e trombose venosa profunda.',
        example: 'Varfarina (anticoagulante oral): Inibe a enzima epóxido redutase da vitamina K, bloqueando a carboxilação dos fatores dependentes de vitamina K (II, VII, IX, X e proteínas C e S).',
        quickChallenge: 'Por que o cálcio iônico (Ca2+ / Fator IV) é estritamente indispensável em quase todas as reações enzimáticas da cascata de coagulação?'
      },
      questions: [
        {
          id: 'w2_q17',
          type: 'order',
          topic: 'Cascata de Coagulação e Fibrinólise',
          difficulty: 'hard',
          xp: 25,
          title: 'Ordene cronologicamente as etapas fundamentais da hemostasia humana após lesão vascular:',
          examPrompt: `
            <p style="font-weight: 700; margin-bottom: 8px;">Considere as etapas sequenciais fundamentais da hemostasia humana:</p>
            <ol style="padding-left: 20px; line-height: 1.6; margin-bottom: 12px;">
              <li>Lesão vascular e exposição do colágeno e fator tecidual subendotelial.</li>
              <li>Espasmo vascular imediato com vasoconstrição reflexa local.</li>
              <li>Adesão, ativação e agregação plaquetária formando o tampão plaquetário primário.</li>
              <li>Cascata de coagulação enzimática culminando na formação de trombina ativa.</li>
              <li>Conversão de fibrinogênio solúvel em rede insolúvel de fibrina que consolida o coágulo definitivo.</li>
            </ol>
            <p style="font-weight: 700;">A sequência cronológica correta é:</p>
          `,
          options: [
            '1 → 2 → 3 → 4 → 5',
            '2 → 1 → 4 → 3 → 5',
            '1 → 3 → 2 → 5 → 4',
            '3 → 1 → 2 → 4 → 5'
          ],
          correctIndex: 0,
          steps: [
            'Lesão vascular e exposição do colágeno e fator tecidual subendotelial',
            'Espasmo vascular imediato com vasoconstrição reflexa local',
            'Adesão, ativação e agregação plaquetária formando o tampão plaquetário primário',
            'Cascata de coagulação enzimática culminando na formação de trombina ativa',
            'Conversão de fibrinogênio solúvel em rede insolúvel de fibrina que consolida o coágulo definitivo'
          ],
          explanation: 'A resposta hemostática obedece à ordem: lesão -> espasmo vascular inicial -> tampão plaquetário primário -> cascata de coagulação -> formação de rede insolúvel de fibrina.',
          whyWrong: [
            'Alternativa correta com a cronologia biológica exata das fases hemostáticas.',
            'O espasmo vascular decorre da lesão vascular inicial, não a antecede.',
            'A agregação plaquetária ocorre antes da conversão de fibrinogênio em fibrina pela trombina.',
            'A cascata enzimática e a formação da fibrina consolidam o tampão primário após sua formação.'
          ],
          tip: 'Etapas: Lesão -> Vasoconstrição -> Tampão de Plaquetas -> Trombina -> Fibrina definitiva.'
        },
        {
          id: 'w2_q18',
          type: 'single',
          topic: 'Cascata de Coagulação e Fibrinólise',
          difficulty: 'medium',
          xp: 15,
          title: 'Qual enzima fulcral cliva enzimaticamente o fibrinogênio solúvel em filamentos de fibrina para formar a malha do coágulo?',
          options: [
            'Plasmina sérica ativa.',
            'Trombina (Fator IIa).',
            'Amilase pancreática.',
            'Fator VII não ativado.'
          ],
          correctIndex: 1,
          explanation: 'A trombina (Fator IIa) é a enzima fulcral da hemostasia secundária: cliva os fibrinopeptídeos A e B do fibrinogênio, gerando monômeros de fibrina que polimerizam e estabilizam o coágulo.',
          whyWrong: [
            'A plasmina atua na fibrinólise, degradando a fibrina já polimerizada.',
            'Alternativa correta.',
            'A amilase hidrolisa polissacarídeos no trato digestivo, sem papel hemostático.',
            'O fator VII atua no início da via extrínseca, não na clivagem direta do fibrinogênio.'
          ],
          tip: 'Trombina = cliva Fibrinogênio em Fibrina (constrói o coágulo). Plasmina = dissolve a fibrina (destrói o coágulo).'
        },
        {
          id: 'w2_q19',
          type: 'single',
          topic: 'Cascata de Coagulação e Fibrinólise',
          difficulty: 'hard',
          xp: 20,
          title: 'Quais fatores proteicos da coagulação dependem biologicamente da Vitamina K para sofrer gama-carboxilação e fixar cálcio?',
          options: [
            'Fator VIII anti-hemofílico e fator de von Willebrand sintetizado no endotélio.',
            'Fatores II (Protrombina), VII, IX e X, além das proteínas reguladoras C e S.',
            'Imunoglobulinas circulantes das classes IgG, IgM e IgA secretadas por plasmócitos.',
            'Fatores I (Fibrinogênio solúvel) e XII (Hageman ativado por contato de superfície).'
          ],
          correctIndex: 1,
          explanation: 'A vitamina K é cofator para a gama-glutamil carboxilase hepática, que adiciona grupos carboxila aos resíduos de glutamato dos fatores II, VII, IX e X (e proteínas C e S), permitindo que eles liguem íons Ca2+ às superfícies fosfolipídicas.',
          whyWrong: [
            'Fator VIII e vWF são glicoproteínas endoteliais que não passam por gama-carboxilação dependente de vitamina K.',
            'Alternativa correta.',
            'Anticorpos são glicoproteínas imunes adaptativas sem resíduos de ácido gama-carboxiglutâmico.',
            'O fibrinogênio e o fator XII são sintetizados e ativados independentemente da vitamina K.'
          ],
          tip: 'Mnemônico dos fatores dependentes de Vitamina K: "1972" -> 10 (X), 9 (IX), 7 (VII) e 2 (II).'
        },
        {
          id: 'w2_q20',
          type: 'single',
          topic: 'Cascata de Coagulação e Fibrinólise',
          difficulty: 'hard',
          xp: 25,
          title: 'Em um paciente com suspeita de tromboembolismo pulmonar (TEP), a dosagem plasmática elevada de D-DÍMERO reflete qual processo fisiológico?',
          options: [
            'Aplasia medular aguda com cessação completa da produção de megacariócitos.',
            'Degradação enzimática ativa de uma rede de fibrina estabilizada pela plasmina (lise de trombos intravasculares recentes).',
            'Diminuição congênita na síntese de albumina provocando hiperviscosidade capilar nos vasos linfáticos.',
            'Destruição autoimune de leucócitos polimorfonucleares nos centros germinativos esplênicos.'
          ],
          correctIndex: 1,
          explanation: 'O D-dímero é um produto específico da degradação da fibrina que foi previamente estabilizada por ligações cruzadas do Fator XIIIa e subsequentemente clivada pela plasmina. Ele confirma que houve formação e lise ativa de fibrina no leito vascular.',
          whyWrong: [
            'O D-dímero reflete lise de fibrina, e não ausência de produção de plaquetas na medula.',
            'Alternativa correta.',
            'O D-dímero é específico da degradação da malha de fibrina, sem correlação com albumina ou linfa.',
            'Não avalia autoimunidade leucocitária ou fagocitose esplênica.'
          ],
          tip: 'D-dímero elevado = houve formação de coágulo de fibrina cruzada que está sendo dissolvido pela plasmina.'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 12 (w2_p6): Grupos Sanguíneos & Imunidade
    // ----------------------------------------------------
    {
      id: 'w2_p6',
      title: 'Grupos Sanguíneos ABO/Rh & Imunidade',
      topic: 'Grupos Sanguíneos e Imunidade',
      level: 12,
      order: 6,
      nextPhaseId: 'w3_p1',
      lesson: {
        title: 'Imunologia Sanguínea, Sistema ABO e Fator Rh',
        concept: 'A superfície dos eritrócitos expressa carboidratos e proteínas antigênicas geneticamente determinados. Os principais sistemas de relevância clínica e transfusional são o sistema ABO e o sistema Rhesus (Rh).',
        mechanism: 'Sistema ABO: Indivíduos com sangue tipo A possuem aglutinógeno A na hemácia e anticorpos anti-B naturais no plasma; tipo B possui aglutinógeno B e anti-A; tipo AB possui ambos os aglutinogênios e NENHUM anticorpo anti-A ou anti-B (receptor universal de hemácias); tipo O não possui aglutinogênios A ou B na hemácia e possui AMBOS os anticorpos anti-A e anti-B no plasma (doador universal de hemácias concentradas).',
        examPoint: 'Incompatibilidade Rh e Doença Hemolítica do Recém-Nascido (Eritroblastose Fetal): Ocorre quando uma mãe Rh negativa (sem antígeno D) gera um feto Rh positivo. No primeiro parto, a exposição ao sangue fetal estimula a sensibilização e produção de anticorpos maternos anti-D da classe IgG. Em uma gestação subsequente de feto Rh positivo, os anticorpos IgG atravessam a barreira transplacentária e causam hemólise maciça fetal.',
        example: 'Profilaxia pós-parto: Administração de imunoglobulina anti-D (RhoGAM) na mãe Rh negativa nas primeiras 72 horas após o parto destrói as hemácias fetais Rh+ antes que ocorra a resposta imune materna primária.',
        quickChallenge: 'Por que os anticorpos anti-A e anti-B geralmente não atravessam a placenta na mesma magnitude que os anticorpos anti-Rh(D)?'
      },
      questions: [
        {
          id: 'w2_q21',
          type: 'single',
          topic: 'Grupos Sanguíneos e Imunidade',
          difficulty: 'medium',
          xp: 15,
          title: 'Um indivíduo do grupo AB Rh positivo (AB+) é considerado o receptor universal de concentrado de hemácias por qual mecanismo imunológico?',
          options: [
            'Porque suas hemácias são totalmente isentas de proteínas integrais, glicolipídios ou cargas elétricas transmembranares.',
            'Porque seu plasma é isento de aglutininas anti-A e anti-B, e seu sistema imune tolera o antígeno Rh(D) como próprio.',
            'Porque sintetiza anticorpos IgG neutralizadores que dissolvem imediatamente qualquer plasma infundido de outros doadores.',
            'Porque o endotélio capilar pulmonar desses receptores fagocita ativamente os eritrócitos alogênicos incompatíveis.'
          ],
          correctIndex: 1,
          explanation: 'Indivíduos AB+ possuem os antígenos A, B e Rh(D) em suas hemácias. Portanto, seu sistema imune não produz anticorpos anti-A, anti-B ou anti-D, permitindo que receba concentrado de hemácias de qualquer tipo sem reação hemolítica imune aguda.',
          whyWrong: [
            'Hemácias AB+ possuem múltiplos antígenos glicídicos (A e B) e proteicos (Rh-D), e não ausência de moléculas de superfície.',
            'Alternativa correta.',
            'A tolerância baseia-se na ausência de anticorpos reativos contra hemácias doadas, e não na produção de anticorpos neutralizadores.',
            'A fagocitose de células transfundidas ocorreria em casos de rejeição transfusional aguda, incompatível com a universalidade.'
          ],
          tip: 'Indivíduo AB+ não possui anticorpos anti-A, anti-B nem anti-D no plasma -> pode receber qualquer hemácia (Receptor Universal).'
        },
        {
          id: 'w2_q22',
          type: 'single',
          topic: 'Grupos Sanguíneos e Imunidade',
          difficulty: 'medium',
          xp: 20,
          title: 'Por que o concentrado de hemácias do tipo O Rh negativo (O-) atua como doador universal em transfusões de extrema urgência?',
          options: [
            'Porque essas hemácias não expressam os antígenos A, B nem o fator Rh(D), não servindo de alvo para anticorpos plasmáticos do receptor.',
            'Porque o sangue tipo O- apresenta uma densidade eritrocitária muito menor que retarda a velocidade da cascata hemostática.',
            'Porque a meia-vida dos eritrócitos O- na circulação excede 300 dias em virtude de uma membrana mais rica em colesterol.',
            'Porque esse grupo sanguíneo é desprovido de hemoglobina intracelular, impedindo reações imunes mediadas pelo átomo de ferro.'
          ],
          correctIndex: 0,
          explanation: 'As hemácias tipo O Rh negativo são desprovidas dos antígenos de carboidrato A e B e do antígeno proteico D (Rh). Portanto, mesmo que o receptor possua anticorpos anti-A, anti-B ou anti-D, não haverá alvo para lise imune imediata.',
          whyWrong: [
            'Alternativa correta.',
            'A densidade e a coagulação do sangue O- são idênticas às de qualquer outro grupo sanguíneo saudável.',
            'A vida média das hemácias humanas é de aproximadamente 120 dias, independente do fenótipo ABO/Rh.',
            'Eritrócitos O- possuem concentrações normais de hemoglobina e ferro intracelular.'
          ],
          tip: 'Doador universal de hemácias = tipo O- (não oferece antígenos A, B ou D para os anticorpos do receptor atacarem).'
        },
        {
          id: 'w2_q23',
          type: 'single',
          topic: 'Grupos Sanguíneos e Imunidade',
          difficulty: 'hard',
          xp: 20,
          title: 'Qual mecanismo imunológico explica a fisiopatologia da Doença Hemolítica do Recém-Nascido (Eritroblastose Fetal)?',
          options: [
            'Colonização bacteriana crônica transplacentária que induz estresse oxidativo na membrana dos eritrócitos do feto a termo.',
            'Anticorpos maternos anti-D da classe IgG (em mãe Rh⁻ previamente sensibilizada) atravessam a placenta e lisam hemácias fetais Rh⁺.',
            'Incompatibilidade do sistema ABO mediada por anticorpos pentaméricos da classe IgM que atravessam livremente o sinciciotrofoblasto.',
            'Acúmulo de bilirrubina indireta no líquido amniótico que dissolve as cadeias alfa e beta da globina eritrocitária fetal.'
          ],
          correctIndex: 1,
          explanation: 'Anticorpos anti-Rh(D) pertencem à classe IgG. Ao contrário da IgM (que é pentamérica e não atravessa a placenta), a IgG é transportada através do sinciciotrofoblasto placentário, atacando e hemolisando os eritrócitos do feto Rh+.',
          whyWrong: [
            'A eritroblastose fetal é uma doença aloimune mediada por anticorpos maternos, não uma infecção bacteriana.',
            'Alternativa correta.',
            'Anticorpos da classe IgM são pentâmeros volumosos que NÃO atravessam a barreira placentária.',
            'A hiperbilirrubinemia é consequência da hemólise fetal massiva, não a causa da destruição inicial das hemácias.'
          ],
          tip: 'Eritroblastose Fetal: Mãe Rh- sensibilizada com anticorpos IgG anti-D que cruzam a placenta e atacam feto Rh+.'
        },
        {
          id: 'w2_q24',
          type: 'single',
          topic: 'Grupos Sanguíneos e Imunidade',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual leucócito circulante é o primeiro a ser recrutado em grande contingente para fagocitose rápida no foco de infecção bacteriana aguda?',
          options: [
            'Linfócito B maduro produtor de anticorpos da classe IgM sérica.',
            'Neutrófilo polimorfonuclear ativado com grânulos ricos em enzimas.',
            'Eosinófilo tecidual degranulador de proteína básica principal citotóxica.',
            'Basófilo circulante ativado secretor de histamina e heparina basal.'
          ],
          correctIndex: 1,
          explanation: 'Os neutrófilos correspondem a 50-70% dos leucócitos circulantes e constituem a primeira linha de defesa celular fagocítica aguda. Respondem prontamente a quimiocinas (IL-8, C5a), realizando diapedese, fagocitose e liberação de espécies reativas de oxigênio (burst oxidativo).',
          whyWrong: [
            'Linfócitos B participam da resposta imune adaptativa humoral mais tardia.',
            'Alternativa correta.',
            'Eosinófilos atuam predominantemente contra parasitas helmintos e em reações alérgicas.',
            'Basófilos medeiam reações de hipersensibilidade imediata liberando histamina.'
          ],
          tip: 'Primeira linha de defesa rápida contra bactérias: Neutrófilos polimorfonucleares.'
        }
      ]
    }
  ]
};

const output = `// World 2: Sangue e Hemostasia (6 Níveis / Fases)
// Total de 24 questões completas com gabarito, feedback pedagógico e suporte a embaralhamento

const WORLD_2_DATA = ${JSON.stringify(world2, null, 2)};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.WORLD_2_DATA = WORLD_2_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORLD_2_DATA };
}
`;

fs.writeFileSync('js/data/world2_sangue.js', output, 'utf8');
console.log('✓ world2_sangue.js gerado com sucesso!');
