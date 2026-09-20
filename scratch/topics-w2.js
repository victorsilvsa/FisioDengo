// Mundo 2: Sangue e Hemostasia (Níveis 7 a 12)
module.exports = [
  {
    topicName: 'Composição do Sangue e Pressão Oncótica',
    phaseId: 'w2_p1',
    level: 7,
    worldId: 'w2',
    category: 'Hematologia & Hemostasia',
    phaseTitle: 'Frações do Sangue & Pressão Oncótica',
    aliases: ['Composição do Sangue', 'Plasma e Pressão Oncótica', 'Albumina e Forças de Starling'],
    specialistTitle: 'Costanzo & Boron',
    specialistBadge: 'Hemodinâmica Capilar',
    guyton: {
      chapter: 'Unidade VI: Células Sanguíneas, Imunidade e Coagulação Sanguínea — Capítulo 16 e 33: Microcirculação, Sistema Linfático e Proteínas Plasmáticas',
      pages: 'pp. 187-200, 439-445',
      summary: 'Guyton & Hall detalha que o sangue total representa aproximadamente 7% a 8% do peso corporal (~5 litros em um adulto de 70 kg), sendo constituído por 55% de plasma líquido e 45% de elementos figurados (hematócrito). O plasma é uma solução aquosa (91-92% água, 7% proteínas e 1-2% íons, nutrientes e metabólitos). Dentre as proteínas plasmáticas totais (6,5 a 8,0 g/dL), a ALBUMINA é a mais abundante (~4,5 g/dL, sintetizada exclusivamente no fígado com meia-vida de 20 dias). Em virtude de sua alta concentração e massa molecular relativamente baixa (~66 kDa), a albumina é responsável por aproximadamente 75% a 80% de toda a Pressão Coloidosmótica (Pressão Oncótica, π_capilar ≈ 28 mmHg). Essa força osmótica atua continuamente puxando líquido do espaço intersticial de volta para o interior do lúmen capilar, equilibrando a pressão hidrostática capilar (Pc).',
      keyPoint: 'A albumina sérica é a principal guardiã do volume intravascular; hipoalbuminemia grave (< 2,5 g/dL) reduz a pressão oncótica e precipita edema generalizado (anasarca).'
    },
    berne: {
      chapter: 'Capítulo 17: Microcirculação, Troca Capilar de Fluidos e Equilíbrio de Starling',
      pages: 'pp. 312-328',
      summary: 'Berne & Levy quantifica a filtração transcapilar através da Equação de Starling: Jv = Lp * A * [(Pc - Pi) - σ * (πc - πi)]. Em condições normais, no extremo arteriolar há filtração líquida discreta (+10 mmHg), e no extremo venular há reabsorção quase total (-9 mmHg). O excesso diário de ultrafiltrado intersticial não reabsorvido pelos capilares venosos (cerca de 2 a 4 litros por dia) é drenado ativamente pelo sistema linfático de volta para a circulação venosa sistêmica através do ducto torácico.',
      keyPoint: 'Obstrução dos vasos linfáticos ou queda de πc desequilibra a equação de Starling e produz edema tecidual intersticial progressivo.'
    },
    costanzo: {
      chapter: 'Capítulo 4: Fisiologia Cardiovascular — Forças de Starling nos Capilares',
      pages: 'pp. 158-166',
      summary: 'Costanzo lista sistematicamente as quatro causas clínicas fundamentais de EDEMA com base na equação de Starling: 1) Aumento da pressão hidrostática capilar (Pc ↑: insuficiência cardíaca congestiva, trombose venosa profunda); 2) Redução da pressão coloidosmótica capilar (πc ↓: cirrose hepática com falência da síntese de albumina, síndrome nefrótica com proteinúria maciça e desnutrição kwashiorkor); 3) Aumento da permeabilidade capilar (Lp ↑: sepse, histamina em anafilaxia, queimaduras graves); 4) Obstrução linfática (filariose elefantiásica ou ressecção cirúrgica de linfonodos axilares).',
      keyPoint: 'Cirrose e síndrome nefrótica causam anasarca porque a hipoalbuminemia derruba a pressão oncótica capilar πc.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 20: Fisiologia da Microcirculação e Linfáticos',
      pages: 'pp. 452-475',
      summary: 'Boron analisa a glicocálice endotelial, uma malha protetora de proteoglicanos e glicosaminoglicanos com carga negativa que reveste o lúmen capilar. Demonstra que a verdadeira pressão oncótica efetiva ocorre através da camada da glicocálice (modelo de Starling revisado), sendo a destruição da glicocálice na sepse o gatilho inicial do extravasamento capilar difuso.',
      keyPoint: 'A perda da integridade da glicocálice endotelial em estados inflamatórios graves amplifica o extravasamento plasmático intersticial.'
    },
    openstax: {
      section: 'Chapter 18: An Introduction to the Cardiovascular System — Section 18.1: An Overview of Blood',
      summary: 'OpenStax ilustra o sangue centrifugado com suas três frações separadas em tubo de ensaio: camada superior de plasma acelular límpido (55%), camada leucocitária intermediária fina ("buffy coat", <1%) e coluna inferior de eritrócitos compactados (45%).',
      keyPoint: 'O buffy coat contém leucócitos e plaquetas; a fração celular predominante é a massa de eritrócitos.'
    },
    merck: {
      section: 'Hepatologia e Nefrologia — Hipoalbuminemia, Síndrome Nefrótica e Cirrose',
      summary: 'O Manual MSD discute o tratamento do edema por hipoalbuminemia: administração criteriosa de albumina humana associada a diuréticos de alça (furosemida) para restabelecer a volemia central efetiva e mobilizar líquido intersticial sem sobrecarregar o ventrículo.',
      keyPoint: 'A dosagem sérica de albumina normal situa-se entre 3,5 e 5,0 g/dL; valores inferiores a 2,0 g/dL exigem intervenção clínica imediata.'
    },
    researchTopics: [
      {
        title: 'Albumina e Pressão Coloidosmótica (Oncótica)',
        concept: 'Papel biofísico da fração proteica mais abundante do plasma na geração de força osmótica intravascular capaz de reter o solvente e impedir a fuga hídrica para os tecidos intersticiais.',
        formulaOrLaw: 'π_capilar ≈ 28 mmHg (75-80% sustentada pela albumina)',
        keyReference: 'Guyton & Hall, Cap. 16',
        query: 'serum albumin colloid osmotic oncotic pressure starling forces'
      },
      {
        title: 'Equação de Starling da Microcirculação Capilar',
        concept: 'Balanço dinâmico entre o gradiente de pressões hidrostáticas transcapilares e o gradiente de pressões oncóticas ponderadas pelo coeficiente de reflexão endotelial das proteínas.',
        formulaOrLaw: 'Jv = Lp * A * [(Pc - Pi) - σ * (πc - πi)]',
        keyReference: 'Berne & Levy, Cap. 17',
        query: 'starling equation microcirculation transcapillary fluid exchange edema'
      },
      {
        title: 'Mecanismos Fisiopatológicos do Edema (Starling)',
        concept: 'Classificação etiológica do acúmulo patológico de líquido no interstício por hipertensão venocapilar, hipoalbuminemia, aumento da permeabilidade vascular ou linfedema.',
        formulaOrLaw: 'Edema = Filtração Capilar > Capacidade Máxima de Drenagem Linfática',
        keyReference: 'Costanzo, Cap. 4',
        query: 'pathophysiology of edema starling forces hypoalbuminemia congestive heart failure'
      },
      {
        title: 'Função do Sistema Linfático e Retorno Macromolecular',
        concept: 'Transporte unidirecional de fluido intersticial, proteínas plasmáticas extravasadas e quilomícrons lipídicos através de capilares linfáticos fenestrados até a circulação venosa central.',
        formulaOrLaw: 'Fluxo Linfático Diário: 2 a 4 Litros / dia',
        keyReference: 'Guyton & Hall, Cap. 16',
        query: 'lymphatic system fluid absorption interstitial protein clearance thoracic duct'
      }
    ]
  },

  {
    topicName: 'Eritrócitos, Hematócrito e Metabolismo do Ferro',
    phaseId: 'w2_p2',
    level: 8,
    worldId: 'w2',
    category: 'Hematologia & Hemostasia',
    phaseTitle: 'Eritrócitos, Hematócrito & Ferro',
    aliases: ['Eritrócitos e Ferro', 'Hematopoiese', 'Eritropoietina', 'Hematócrito'],
    specialistTitle: 'Silverthorn & Ganong',
    specialistBadge: 'Eritropoiese & Cinética Férrica',
    guyton: {
      chapter: 'Unidade VI — Capítulo 33: Hemácias, Anemia e Policitemia',
      pages: 'pp. 439-450',
      summary: 'Os eritrócitos (hemácias) são células altamente especializadas em forma de disco bicôncavo anucleadas em mamíferos (diâmetro de 7,8 μm, espessura de 2,5 μm na borda e 1 μm no centro), conformação geométrica que maximiza a razão superfície/volume, acelerando a difusão gasosa e permitindo extraordinária deformabilidade mecânica ao cruzar capilares de 5 μm. A contagem normal oscila entre 4,5 e 5,5 milhões/μL em homens e 4,0 a 5,0 milhões/μL em mulheres; a concentração de hemoglobina é de 14 a 16 g/dL (homens) e 12 a 14 g/dL (mulheres); o hematócrito é a porcentagem do volume sanguíneo ocupada pelas hemácias (~42% a 47%). A meia-vida do eritrócito é de 120 dias, ao fim dos quais hemácias senescentes tornam-se rígidas e são fagocitadas por macrófagos nos cordões esplênicos do baço.',
      keyPoint: 'A eritropoiese é estimulada pela Eritropoietina (EPO) secretada pelos rins em resposta à hipóxia tecidual renal mediada por HIF-1α.'
    },
    berne: {
      chapter: 'Capítulo 16: Elementos Figurados do Sangue, Eritropoiese e Cinética do Ferro',
      pages: 'pp. 288-305',
      summary: 'Berne & Levy detalha a regulação da eritropoiese pelo fator de transcrição induzido por hipóxia (HIF-1α). Em normóxia, HIF-1α é hidroxilado pela prolil-hidroxilase e degradado no proteassomo; sob hipóxia tecidual, a hidroxilação cessa, HIF-1α estabiliza-se e ativa no núcleo celular renal a transcrição do gene da Eritropoietina (EPO). A EPO atua nos receptores de progenitores eritroides na medula óssea (CFU-E), inibindo sua apoptose e estimulando a diferenciação em pró-eritroblastos, reticulócitos e eritrócitos maduros.',
      keyPoint: 'A hipóxia renal estabiliza o HIF-1α, que dispara a transcrição do gene da EPO; pacientes em doença renal crônica perdem essa capacidade e desenvolvem anemia normocítica refratária.'
    },
    costanzo: {
      chapter: 'Capítulo 5: Fisiologia Respiratória e Transporte de Oxigênio — Cinética do Ferro',
      pages: 'pp. 195-200',
      summary: 'Costanzo traça o ciclo do ferro corporal total (~4 gramas): 65% na hemoglobina, 4% na mioglobina, 1% em enzimas mitocondriais e 30% armazenado no fígado e macrófagos na forma de FERRITINA e hemossiderina. O ferro dietético (Fe2+ ferroso) é absorvido no duodeno via transportador DMT1 e exportado para a circulação pela FERROPORTINA. No sangue, o ferro é oxidado a Fe3+ e transportado ligado à TRANSFERRINA. A HEPCIDINA, hormônio peptídico hepático, é a reguladora mestre do ferro: quando os estoques estão cheios ou na inflamação crônica, a hepcidina liga-se à ferroportina, induzindo sua internalização e degradação, bloqueando a liberação de ferro e causando a Anemia de Doença Crônica.',
      keyPoint: 'A hepcidina bloqueia a ferroportina: na inflamação crônica, a hepcidina elevada aprisiona o ferro dentro dos macrófagos, gerando anemia.'
    },
    specialistSource: {
      chapter: 'Ganong — Fisiologia Médica — Capítulo 31: Células Sanguíneas e Hematopoiese',
      pages: 'pp. 590-608',
      summary: 'Ganong detalha o metabolismo anaeróbico dos eritrócitos maduros: como carecem de mitocôndrias e núcleo celular, geram 100% de seu ATP através da glicólise anaeróbica (via de Embden-Meyerhof) e utilizam o ciclo das pentoses-fosfato (via G6PD) para sintetizar NADPH e manter a glutationa reduzida, protegendo a membrana e o ferro heme contra estresse oxidativo.',
      keyPoint: 'Deficiência de G6PD priva a hemácia de NADPH e glutationa reduzida, gerando hemólise oxidativa induzida por certos fármacos ou feijão-fava (favismo).'
    },
    openstax: {
      section: 'Chapter 18: Blood — Section 18.3: Erythrocytes',
      summary: 'OpenStax descreve as etapas de diferenciação na medula óssea: hemocitoblasto -> pró-eritroblasto -> eritroblasto basofílico -> eritroblasto policromatófilo -> eritroblasto ortocromático (expulsão do núcleo celular) -> reticulócito (com restos de retículo e RNA ribossômico) -> eritrócito maduro.',
      keyPoint: 'A contagem de reticulócitos no sangue periférico (normal: 0,5% a 2,0%) avalia diretamente a capacidade proliferativa da medula óssea.'
    },
    merck: {
      section: 'Hematologia Clínica — Anemias Carenciais e Diagnóstico Diferencial pelo VCM e RDW',
      summary: 'O Manual MSD classifica as anemias com base nos índices hematimétricos automatizados de Wintrobe: Volume Corpuscular Médio (VCM 80-100 fL: microcítica, normocítica, macrocítica) e Concentração de Hemoglobina Corpuscular Média (CHCM 32-36 g/dL: hipocrômica, normocrômica). Destaca a anemia ferropriva clássica como microcítica e hipocrômica com ferritina sérica depletada.',
      keyPoint: 'Anemia ferropriva clássica = VCM baixo (microcitose), CHCM baixo (hipocromia), ferritina deprimida e RDW elevado.'
    },
    researchTopics: [
      {
        title: 'Ciclo de Vida do Eritrócito e Fagocitose Esplênica',
        concept: 'Cinética de 120 dias da hemácia humana, perda progressiva da flexibilidade de membrana, reconhecimento de fosfatidilserina na superfície externa e destruição nos sinusóides do baço.',
        formulaOrLaw: 'Taxa de Renovação: ~2 a 3 milhões de novas hemácias por segundo',
        keyReference: 'Guyton & Hall, Cap. 33',
        query: 'erythrocyte life span splenic clearance red pulp macrophage phagocytosis'
      },
      {
        title: 'Eritropoietina (EPO) e Eixo Renal HIF-1α',
        concept: 'Regulação transcricional da síntese renal de eritropoietina mediada pelo sensor molecular de hipóxia HIF-1α em fibroblastos peritubulares corticais dos rins.',
        formulaOrLaw: 'Hipóxia Renal -> Inibição da Prolil-Hidroxilase -> Estabilização de HIF-1α -> Síntese de EPO',
        keyReference: 'Berne & Levy, Cap. 16',
        query: 'erythropoietin hypoxia inducible factor hif1a renal oxygen sensing'
      },
      {
        title: 'Regulação do Ferro pela Hepcidina e Ferroportina',
        concept: 'Eixo hormonal hepcidina-ferroportina como regulador mestre do estoque corporal de ferro, controlando a absorção duodenal e a reciclagem macrofágica do ferro da hemoglobina.',
        formulaOrLaw: 'Hepcidina Elevada -> Degradação da Ferroportina -> Aprisionamento Celular de Fe',
        keyReference: 'Costanzo, Cap. 5',
        query: 'hepcidin ferroportin iron homeostasis anemia of chronic disease dmt1'
      },
      {
        title: 'Metabolismo Anaeróbico Eritrocitário e Via da G6PD',
        concept: 'Produção exclusiva de ATP pela via glicolítica de Embden-Meyerhof e geração de poder redutor NADPH pela glicose-6-fosfato desidrogenase para neutralizar peróxidos.',
        formulaOrLaw: 'Glicólise Anaeróbia (Lactato + 2 ATP) + Via das Pentoses (NADPH / GSH)',
        keyReference: 'Ganong, Cap. 31',
        query: 'glucose 6 phosphate dehydrogenase erythrocyte metabolism pentose phosphate pathway hemolysis'
      }
    ]
  },

  {
    topicName: 'Hemoglobina e Transporte de O2',
    phaseId: 'w2_p3',
    level: 9,
    worldId: 'w2',
    category: 'Hematologia & Hemostasia',
    phaseTitle: 'Hemoglobina, O2 & Efeito Bohr',
    aliases: ['Hemoglobina e O2', 'Curva de Dissociação da Hemoglobina', 'Efeito Bohr', '2,3-DPG', 'Transporte de Oxigênio'],
    specialistTitle: 'West & Costanzo',
    specialistBadge: 'Gases Sanguíneos & Alosterismo',
    guyton: {
      chapter: 'Unidade VII: Respiração — Capítulo 41: Transporte de Oxigênio e Dióxido de Carbono no Sangue e nos Líquidos Teciduais',
      pages: 'pp. 527-540',
      summary: 'A hemoglobina adulta (HbA) é uma proteína globular tetramérica composta por quatro cadeias polipeptídicas (duas alfa e duas beta), cada uma contendo um grupo prostético HEME com um átomo central de ferro no estado ferroso reduzido (Fe2+). Cada grama de hemoglobina pura liga-se estequiometricamente a 1,34 mL de O2. A ligação do oxigênio exibe cooperatividade positiva (alosterismo): a ligação da primeira molécula de O2 ao estado T ("tenso", baixa afinidade) induz rotação dos dímeros alfa-beta, convertendo o tetrâmero no estado R ("relaxado", alta afinidade), gerando a clássica Curva de Dissociação Oxi-hemoglobina em formato sigmoide (curva em "S"). A P50 normal (PO2 na qual 50% da hemoglobina está saturada) é de aproximadamente 26,6 mmHg.',
      keyPoint: 'A cooperatividade positiva gera a curva sigmoide: facilita saturação máxima nos pulmões (PO2=100 mmHg, Sat=98%) e liberação abundante de O2 nos tecidos (PO2=40 mmHg, Sat=75%).'
    },
    berne: {
      chapter: 'Capítulo 23: Transporte Sanguíneo de Oxigênio e Alosterismo da Hemoglobina',
      pages: 'pp. 410-424',
      summary: 'Berne & Levy detalha a transição alostérica T-para-R do modelo MWC (Monod-Wyman-Changeux) e a modulação pelo 2,3-Bisfosfoglicerato (2,3-DPG), sintetizado pelo shunt de Rapoport-Luebering na hemácia. O 2,3-DPG liga-se com alta afinidade na cavidade central formada pelas cadeias beta do estado T desoxigenado, estabilizando a conformação de baixa afinidade e favorecendo a entrega tecidual de oxigênio.',
      keyPoint: 'A hemoglobina fetal (HbF, cadeias alfa2-gama2) não possui os resíduos de histidina positivos para ligar 2,3-DPG, retendo maior afinidade por O2 que a HbA materna e permitindo a captação placentária de O2.'
    },
    costanzo: {
      chapter: 'Capítulo 5: Curva de Oxi-Hemoglobina e Moduladores Alostéricos (Desvios da Curva)',
      pages: 'pp. 200-208',
      summary: 'Costanzo sintetiza com maestria as causas e significados dos desvios da curva de oxi-hemoglobina: 1) DESVIO PARA A DIREITA (P50 aumenta, afinidade diminui, maior facilidade para entregar O2 aos tecidos ativos): acidose (pH baixo), hipercapnia (PCO2 elevado) — o clássico EFEITO BOHR tecidual —, aumento da temperatura corporal e aumento de 2,3-DPG (exercício físico, altitude e anemia crônica); 2) DESVIO PARA A ESQUERDA (P50 diminui, afinidade aumenta, segura mais o O2): alcalose (pH alto), hipocapnia (PCO2 baixo), hipotermia, queda de 2,3-DPG e ligação por Monóxido de Carbono (CO).',
      keyPoint: 'Músculo em exercício produz calor, H+ e CO2: isso desvia a curva de oxi-hemoglobina para a DIREITA (Efeito Bohr), descarregando mais O2 onde mais se precisa.'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 6: Transporte de Gases pelo Sangue',
      pages: 'pp. 77-94',
      summary: 'John B. West explica o Conteúdo Arterial de Oxigênio (CaO2): CaO2 = (1,34 * [Hb] * SatO2) + (0,003 * PaO2). Demonstra que a fração dissolvida no plasma é ínfima (~0,3 mL O2/dL de sangue para PaO2=100 mmHg), sendo a hemoglobina responsável por 98,5% de todo o O2 transportado. Aborda a intoxicação por monóxido de carbono (CO): liga-se ao heme com afinidade 240 vezes superior à do O2, formando carboxiemoglobina (COHb), e além de bloquear sítios de ligação, trava o tetrâmero remanescente no estado R (desvia para a esquerda), impedindo a liberação de O2 nos tecidos.',
      keyPoint: 'Na intoxicação por CO, a PaO2 arterial é normal, mas o CaO2 despenca e os tecidos sofrem anóxia grave porque o O2 restante não se desliga da hemoglobina.'
    },
    openstax: {
      section: 'Chapter 22: The Respiratory System — Section 22.5: Transport of Gases',
      summary: 'OpenStax compara a mioglobina muscular (curva hiperbólica não cooperativa, reservatório de emergência) com a hemoglobina circulante (curva sigmoide cooperativa com liberação ajustável).',
      keyPoint: 'A mioglobina só libera oxigênio sob PO2 extremamente baixa (< 10 mmHg), funcionando como reserva intracelular em anaerobiose estrita.'
    },
    merck: {
      section: 'Toxicologia Médica — Intoxicação por Monóxido de Carbono e Meta-hemoglobinemia',
      summary: 'O Manual MSD aborda o diagnóstico da carboxiemoglobinemia (pele com coloração vermelho-cereja atípica, oxímetro de pulso comum falsamente normal marcando 100%) e seu tratamento com oxigenoterapia a 100% sob máscara com reservatório ou câmara hiperbárica (reduz a meia-vida da COHb de 320 para 80 ou 20 minutos).',
      keyPoint: 'O oxímetro de pulso convencional não distingue oxi-hemoglobina de carboxiemoglobina; gasometria com co-oximetria é obrigatória.'
    },
    researchTopics: [
      {
        title: 'Cooperatividade Alostérica e Curva Sigmoide de Oxi-Hb',
        concept: 'Transição conformacional quaternária do estado tenso (T) desoxigenado para o estado relaxado (R) oxigenado conforme moléculas consecutivas de O2 se ligam ao complexo heme-ferro.',
        formulaOrLaw: 'Equação de Hill: Y = (PO2)^n / ((P50)^n + (PO2)^n), onde n ≈ 2,8',
        keyReference: 'Guyton & Hall, Cap. 41',
        query: 'hemoglobin oxygen affinity allosteric cooperativity hill equation t to r transition'
      },
      {
        title: 'Efeito Bohr Tecidual e Pulmonar',
        concept: 'Fenômeno biofísico no qual íons de hidrogênio (H+) e CO2 ligam-se a sítios alostéricos na desoxi-hemoglobina, estabilizando pontes salinas do estado T e facilitando a ejeção de oxigênio nos tecidos em hipóxia e acidose.',
        formulaOrLaw: 'HbO2 + H+ + CO2 <-> Hb-H-CO2 + O2 (Desvio para a Direita nos Tecidos)',
        keyReference: 'Costanzo, Cap. 5',
        query: 'bohr effect oxygen hemoglobin dissociation curve proton binding carbon dioxide'
      },
      {
        title: 'Papel do 2,3-Bisfosfoglicerato (2,3-DPG) e Altitude',
        concept: 'Produção eritrocitária de 2,3-DPG em resposta à hipóxia crônica ou alcalose respiratória de grande altitude, diminuindo a afinidade da Hb pelo O2 e promovendo descarga tecidual eficiente.',
        formulaOrLaw: 'Via de Rapoport-Luebering da Glicólise Eritrocitária',
        keyReference: 'Berne & Levy, Cap. 23',
        query: '2 3 biphosphoglycerate 2 3 dpg altitude acclimatization hemoglobin affinity'
      },
      {
        title: 'Toxicodinâmica da Carboxiemoglobina (COHb)',
        concept: 'Cinética de ligação competitiva do monóxido de carbono ao Fe2+ com afinidade 240 vezes superior à do oxigênio e bloqueio alostérico da liberação de O2 tecidual (efeito Haldane invertido).',
        formulaOrLaw: 'Desvio Severo para a Esquerda da Curva Remanescente + Queda do CaO2',
        keyReference: 'West, Fisiologia Respiratória, Cap. 6',
        query: 'carbon monoxide poisoning carboxyhemoglobin co-oximetry oxygen content'
      }
    ]
  },

  {
    topicName: 'Hemostasia Primária e Plaquetas',
    phaseId: 'w2_p4',
    level: 10,
    worldId: 'w2',
    category: 'Hematologia & Hemostasia',
    phaseTitle: 'Hemostasia Primária & Plaquetas',
    aliases: ['Hemostasia Primária', 'Plaquetas e Tampão', 'Fator de von Willebrand', 'Adesão Plaquetária'],
    specialistTitle: 'Silverthorn & Boron',
    specialistBadge: 'Bioquímica Plaquetária',
    guyton: {
      chapter: 'Unidade VI — Capítulo 37: Hemostasia e Coagulação Sanguínea — Tampão Plaquetário',
      pages: 'pp. 481-488',
      summary: 'A hemostasia é a sequência de mecanismos fisiológicos que interrompem o sangramento após uma lesão vascular, compreendendo três etapas: 1) Espasmo Vascular (vasoconstrição reflexa imediata por contração miogênica e liberação local de endotelina e serotonina); 2) Hemostasia Primária (formação do tampão hemostático plaquetário temporário); 3) Hemostasia Secundária (ativação da cascata de coagulação gerando rede de fibrina para consolidar o tampão). As plaquetas (trombócitos) são fragmentos citoplasmáticos anucleados originados dos megacariócitos medulares (150.000 a 450.000/μL, vida média de 7 a 10 dias). Quando o endotélio vascular se rompe, o colágeno subendotelial e o Fator de von Willebrand (vWF) são expostos. As plaquetas aderem através do complexo receptor GpIb-IX-V ao vWF e ativam-se, sofrendo desgranulação e emitindo pseudópodes.',
      keyPoint: 'Hemostasia primária consiste em 4 eventos sequenciais: Adesão (GpIb-vWF) -> Mudança conformacional -> Desgranulação (ADP, TXA2) -> Agregação (GpIIb/IIIa-Fibrinogênio).'
    },
    berne: {
      chapter: 'Capítulo 16: Plaquetas e Mecanismos Bioquímicos da Hemostasia Primária',
      pages: 'pp. 302-316',
      summary: 'Berne & Levy detalha os mediadores químicos secretados pelos grânulos plaquetários: Grânulos Densos (delta): contêm ADP, serotonina, cálcio ionizado (Ca2+) e pirofosfato; Grânulos Alfa: contêm fibrinogênio, fator de von Willebrand, fator V, fator plaquetário 4 (PF4) e PDGF. O ADP liberado liga-se aos receptores purinérgicos P2Y1 e P2Y12, ativando a via de sinalização intracelular da fosfolipase C e inibindo a adenilil-ciclase. Simultaneamente, a fosfolipase A2 ativa cliva o ácido araquidônico da membrana, que é convertido pela Enzima Ciclooxigenase-1 (COX-1) em Tromboxano A2 (TXA2), potente agonista pró-agregante e vasoconritor.',
      keyPoint: 'O Ácido Acetilsalicílico (Aspirina) acetila e inibe irreversivelmente a COX-1 plaquetária, bloqueando a síntese de TXA2 pela vida útil da plaqueta.'
    },
    costanzo: {
      chapter: 'Capítulo 4: Fisiologia do Sangue e Formação do Trombo Plaquetário',
      pages: 'pp. 166-172',
      summary: 'Costanzo detalha a etapa final da AGREGAÇÃO: a estimulação por ADP e TXA2 promove mudança conformacional no receptor de superfície de integrina GpIIb/IIIa (complexo alfaIIb-beta3), convertendo-o em seu estado de alta afinidade por Fibrinogênio. O fibrinogênio, uma molécula bivalente simétrica, atua como uma ponte molecular cruzada entre receptores GpIIb/IIIa de plaquetas adjacentes, agregando centenas de plaquetas em um tampão hemostático coeso. Explica a ação protetora do endotélio intacto: sintetiza constitutivamente Prostaciclina (PGI2) e Óxido Nítrico (NO), potentes vasodilatadores e inibidores da agregação, restringindo o tampão estritamente ao local da lesão vascular.',
      keyPoint: 'O receptor GpIIb/IIIa une plaquetas vizinhas através de pontes de fibrinogênio. O endotélio saudável secreta PGI2 e NO para impedir trombose.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 19: Hemostasia, Fisiologia do Endotélio e Trombose',
      pages: 'pp. 430-448',
      summary: 'Boron detalha a biologia molecular do Fator de von Willebrand (vWF): sintetizado por células endoteliais (armazenado nos corpos de Weibel-Palade) e megacariócitos como multímeros ultra-grandes de alto peso molecular que são clivados fisiologicamente pela metaloproteinase plasmática ADAMTS13. A deficiência de ADAMTS13 resulta em multímeros hiper-reativos que induzem microtrombose difusa (Púrpura Trombocitopênica Trombótica - PTT).',
      keyPoint: 'A ADAMTS13 cliva multímeros gigantes de vWF; sua ausência provoca PTT com anemia hemolítica microangiopática e plaquetopenia grave.'
    },
    openstax: {
      section: 'Chapter 18: Blood — Section 18.5: Hemostasis',
      summary: 'OpenStax ilustra o espasmo miogênico local, a adesão plaquetária via vWF ao colágeno rompido, a liberação de grânulos densos e a formação da rede inicial de tampão branco.',
      keyPoint: 'A hemostasia primária estanca sangramentos de pequenos capilares em 1 a 3 minutos; grandes vasos requerem a rede de fibrina da hemostasia secundária.'
    },
    merck: {
      section: 'Hematologia Clínica — Doença de von Willebrand, Trombocitopenias e Antiplaquetários',
      summary: 'O Manual MSD discute a Doença de von Willebrand (distúrbio hemorrágico hereditário mais comum, gerando defeito na adesão plaquetária com tempo de sangramento alargado) e os antiplaquetários modernos: Clopidogrel e Ticagrelor (bloqueadores do receptor P2Y12 de ADP) e Abciximabe/Tirofibana (bloqueadores de GpIIb/IIIa).',
      keyPoint: 'Clopidogrel bloqueia o receptor P2Y12 de ADP; Aspirina bloqueia a COX-1 de TXA2: associação fundamental na síndrome coronariana aguda.'
    },
    researchTopics: [
      {
        title: 'Receptor GpIb-IX e Fator de von Willebrand',
        concept: 'Ancoragem inicial da plaqueta em alta tensão de cisalhamento através da interação estéreo-específica entre o complexo glicoproteico GpIb da membrana plaquetária e o domínio A1 do vWF aderido ao colágeno.',
        formulaOrLaw: 'Adesão Plaquetária Inicial: GpIb-IX-V + vWF Subendotelial',
        keyReference: 'Guyton & Hall, Cap. 37',
        query: 'glycoprotein ib ix v complex von willebrand factor shear stress adhesion'
      },
      {
        title: 'Via do Tromboxano A2 e Farmacologia da Aspirina',
        concept: 'Ativação da ciclooxigenase-1 plaquetária gerando TXA2 a partir do ácido araquidônico e inibição irreversível por acetilação covalentemente estável de serina-529 pelo AAS.',
        formulaOrLaw: 'Ácido Araquidônico -> COX-1 -> PGH2 -> TXA2-Sintetase -> TXA2 (Bloqueado por Aspirina)',
        keyReference: 'Costanzo, Cap. 4',
        query: 'thromboxane a2 cox1 inhibition aspirin platelet activation'
      },
      {
        title: 'Receptor GpIIb/IIIa e Pontes de Fibrinogênio',
        concept: 'Ativação conformacional "inside-out" da integrina alfaIIb-beta3 ligando o domínio RGD do fibrinogênio plasmático bivalente para consolidar a agregação plaqueta-plaqueta.',
        formulaOrLaw: 'Agregação Plaquetária: Plaquet-GpIIb/IIIa <-> Fibrinogênio <-> GpIIb/IIIa-Plaqueta',
        keyReference: 'Berne & Levy, Cap. 16',
        query: 'glycoprotein iib iiia integrin inside out signaling fibrinogen platelet aggregation'
      },
      {
        title: 'Clivagem por ADAMTS13 e Fisiopatologia da PTT',
        concept: 'Papel da metaloproteinase endotelial ADAMTS13 no desdobramento e clivagem proteolítica de multímeros gigantes de vWF, prevenindo microtrombose espontânea na microcirculação.',
        formulaOrLaw: 'ADAMTS13 cliva sítio Tyr1605-Met1606 do vWF',
        keyReference: 'Boron & Boulpaep, Cap. 19',
        query: 'adamts13 von willebrand factor multimer thrombotic thrombocytopenic purpura'
      }
    ]
  },

  {
    topicName: 'Cascata de Coagulação e Fibrinólise',
    phaseId: 'w2_p5',
    level: 11,
    worldId: 'w2',
    category: 'Hematologia & Hemostasia',
    phaseTitle: 'Coagulação Enzimática & Fibrina',
    aliases: ['Cascata de Coagulação', 'Fibrinólise', 'Trombina', 'Fator Tecidual', 'D-Dímero'],
    specialistTitle: 'Silverthorn & Boron',
    specialistBadge: 'Enzimologia da Coagulação',
    guyton: {
      chapter: 'Unidade VI — Capítulo 37: Mecanismo da Coagulação Sanguínea e Fibrinólise',
      pages: 'pp. 484-496',
      summary: 'A Hemostasia Secundária consiste na ativação sequencial de zimogênios plasmáticos (pró-enzimas) em serino-proteases ativas em uma cascata proteolítica altamente amplificada sobre a superfície fosfolipídica negativa de plaquetas ativadas, culminando na conversão do Fibrinogênio solúvel em uma malha insolúvel de Fibrina (trombo vermelho). A cascata é dividida classicamente em: 1) Via Extrínseca: iniciada pelo FATOR TECIDUAL (Tromboplastina tecidual / Fator III) exposto no endotélio lesado, que se liga ao Fator VII ativando-o (Complexo FT-VIIa, dependente de Ca2+); 2) Via Intrínseca: iniciada pelo contato do Fator XII com superfícies colágenas carregadas negativamente, ativando sequencialmente XIIa -> XIa -> IXa; o IXa junto com seu cofator VIIIa forma o complexo tenase intrínseco; 3) Via Comum: ativada tanto pelo complexo FT-VIIa quanto pelo complexo tenase IXa-VIIIa, convertendo o Fator X em Xa. O Xa forma com o cofator Va o Complexo Protrombinase, que cliva a Protrombina (Fator II) em TROMBINA (Fator IIa).',
      keyPoint: 'A Trombina (Fator IIa) é o maestro enzimático: cliva o fibrinogênio em monômeros de fibrina, ativa o Fator XIII (estabilizador da malha) e ativa cofatores V, VIII e XI por feedback positivo.'
    },
    berne: {
      chapter: 'Capítulo 16: Mecanismos Enzimáticos da Coagulação, Anticoagulação Endógena e Fibrinólise',
      pages: 'pp. 314-326',
      summary: 'Berne & Levy detalha o papel fundamental da Vitamina K: cofator obrigatório para a enzima gama-glutamil carboxilase hepática, que adiciona um grupo carboxila a resíduos de ácido glutâmico nos Fatores II, VII, IX e X (além das proteínas anticoagulantes C e S). Essa carboxilação permite a quelação de íons cálcio (Ca2+), permitindo a ancoragem dos complexos enzimáticos aos fosfolipídios de membrana (fosfatidilserina). A Varfarina inibe a enzima epóxido redutase da vitamina K (VKORC1), sintetizando fatores não funcionais. Aborda os freios anticoagulantes endógenos: Antitrombina III (potencializada pela heparina) e o sistema Trombomodulina-Proteína C-Proteína S.',
      keyPoint: 'Fatores dependentes de Vitamina K: II, VII, IX, X e Proteínas C e S. Varfarina bloqueia a VKORC1, inibindo a gama-carboxilação.'
    },
    costanzo: {
      chapter: 'Capítulo 4: Fisiologia da Coagulação e Testes Laboratoriais (TP e TTPA)',
      pages: 'pp. 172-178',
      summary: 'Costanzo correlaciona os testes laboratoriais clássicos de coagulação: 1) Tempo de Protrombina (TP / INR): avalia a VIA EXTRÍNSECA e a via comum (Fatores VII, X, V, II e fibrinogênio); monitora o uso de anticoagulantes orais antagonistas da vitamina K (Varfarina); 2) Tempo de Tromboplastina Parcial Ativada (TTPA): avalia a VIA INTRÍNSECA e a via comum (Fatores XII, XI, IX, VIII, X, V, II e fibrinogênio); monitora o uso de Heparina Não Fracionada (HNF).',
      keyPoint: 'Varfarina altera primariamente o TP/INR (afeta primeiro o Fator VII de menor meia-vida); Heparina não fracionada altera o TTPA.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 19: Fisiologia da Fibrinólise e D-Dímero',
      pages: 'pp. 442-450',
      summary: 'Boron disseca o sistema fibrinolítico responsável por dissolver trombos organizados e restaurar a perviedade vascular: o Ativador do Plasminogênio Tecidual (t-PA) secretado pelo endotélio converte o plasminogênio aprisionado no trombo em PLASMINA. A plasmina degrada a malha de fibrina insolúvel cruzada covalentemente pelo Fator XIIIa, gerando Produtos de Degradação da Fibrina, sendo o D-DÍMERO o marcador molecular mais sensível e específico da degradação de fibrina estabilizada.',
      keyPoint: 'D-Dímero elevado indica degradação ativa de fibrina ligada covalentemente (altíssimo valor preditivo negativo para afastar Trombose Venosa Profunda e TEP).'
    },
    openstax: {
      section: 'Chapter 18: Blood — Section 18.5: Coagulation and Fibrinolysis',
      summary: 'OpenStax ilustra o modelo em cascata destacando a convergência no Fator Xa, a conversão da protrombina em trombina, a polimerização da fibrina e a retração mecânica do coágulo sanguíneo mediada por filamentos de actomiosina plaquetária.',
      keyPoint: 'O Fator XIIIa forma ligações cruzadas covalentes entre as cadeias de fibrina, convertendo um gel frouxo em malha estruturalmente impenetrável.'
    },
    merck: {
      section: 'Hematologia Clínica — Trombofilias, Trombólise e Anticoagulantes de Ação Direta (DOACs)',
      summary: 'O Manual MSD detalha os novos anticoagulantes orais de ação direta (DOACs): Inibidores diretos do Fator Xa (Rivaroxabana, Apixabana) e Inibidor direto da Trombina (Dabigatrana), que atuam sem necessidade de monitoramento laboratorial de rotina por TP ou TTPA. Explica a indicação de trombolíticos (Alteplase/rt-PA) no AVC isquêmico agudo e infarto com supra de ST dentro da janela terapêutica.',
      keyPoint: 'DOACs inibem diretamente o Xa (oxabanas) ou a trombina IIa (dabigatrana) com perfil de segurança superior à varfarina.'
    },
    researchTopics: [
      {
        title: 'Via Extrínseca do Fator Tecidual e Amplificação por Trombina',
        concept: 'Mecanismo celular no qual o Fator Tecidual subendotelial exposto deflagra a geração inicial de uma centelha de trombina, a qual amplifica exponencialmente o sistema retroativando os fatores V, VIII e XI.',
        formulaOrLaw: 'Iniciação: FT + VIIa + Ca2+ -> Ativação do Fator X',
        keyReference: 'Guyton & Hall, Cap. 37',
        query: 'tissue factor pathway factor viia thrombin amplification cell based coagulation'
      },
      {
        title: 'Gama-Carboxilação Dependente de Vitamina K',
        concept: 'Modificação pós-traducional enzimática de resíduos de ácido glutâmico em Gla, criando sítios de quelação bi-coordenada para o cálcio iônico que ancora os fatores II, VII, IX e X aos fosfolipídios.',
        formulaOrLaw: 'Glutamato + CO2 + O2 + VitK Reduzida -> Gama-Carboxiglutamato (Gla) + Epóxido de VitK',
        keyReference: 'Berne & Levy, Cap. 16',
        query: 'vitamin k cycle gamma glutamyl carboxylase vkorc1 warfarin coagulation'
      },
      {
        title: 'Monitoramento Laboratorial: TP/INR vs. TTPA',
        concept: 'Validação bioanalítica da integridade das vias hemostáticas: TP/INR afere a via extrínseca/comum (sensível ao Fator VII) e TTPA afere a via intrínseca/comum (fatores de contato e heparina).',
        formulaOrLaw: 'INR = (TP_paciente / TP_controle)^ISI',
        keyReference: 'Costanzo, Cap. 4',
        query: 'prothrombin time inr activated partial thromboplastin time aptt heparin warfarin'
      },
      {
        title: 'Fibrinólise, Ação da Plasmina e Cinética do D-Dímero',
        concept: 'Ativação do plasminogênio por t-PA na superfície do coágulo, clivagem proteolítica dos polímeros de fibrina cruzada pelo Fator XIIIa e liberação de fragmentos circulantes de D-dímero.',
        formulaOrLaw: 'Plasminogênio + t-PA -> Plasmina -> Clivagem de Fibrina -> D-Dímeros',
        keyReference: 'Boron & Boulpaep, Cap. 19',
        query: 'fibrinolysis tissue plasminogen activator plasmin d dimer deep vein thrombosis'
      }
    ]
  },

  {
    topicName: 'Grupos Sanguíneos e Imunidade',
    phaseId: 'w2_p6',
    level: 12,
    worldId: 'w2',
    category: 'Hematologia & Hemostasia',
    phaseTitle: 'Grupos Sanguíneos ABO/Rh & Imunidade',
    aliases: ['Grupos Sanguíneos', 'Sistema ABO', 'Fator Rh', 'Eritroblastose Fetal', 'Imunologia Transfusional'],
    specialistTitle: 'Silverthorn & Ganong',
    specialistBadge: 'Imuno-Hematologia',
    guyton: {
      chapter: 'Unidade VI — Capítulo 36: Grupos Sanguíneos, Transfusão e Transplante de Órgãos',
      pages: 'pp. 471-480',
      summary: 'Guyton & Hall explica que os sistemas de grupos sanguíneos ABO e Rh são determinados por aglutinogênios (antígenos) glicolipídicos e proteicos geneticamente herdados expressos na superfície exterior da membrana eritrocitária. O Sistema ABO é governado pela adição de carboidratos terminais à Substância H fundamental: o alelo A codifica uma N-acetilgalactosaminiltransferase; o alelo B codifica uma galactosiltransferase; o alelo O não adiciona nenhum açúcar terminal, deixando a substância H intacta. No plasma sanguíneo encontram-se anticorpos naturais (aglutininas) da classe IgM contra os antígenos ausentes nas hemácias do próprio indivíduo (indivíduo do grupo A tem aglutinina anti-B; grupo B tem anti-A; grupo AB não tem aglutininas; grupo O tem aglutininas anti-A e anti-B).',
      keyPoint: 'O sangue tipo O negativo é o Doador Universal de hemácias (não possui antígenos A, B ou D); o sangue tipo AB positivo é o Receptor Universal.'
    },
    berne: {
      chapter: 'Capítulo 16: Imuno-Hematologia e Sistema Rh (Antígeno D)',
      pages: 'pp. 306-312',
      summary: 'Berne & Levy detalha o Sistema Rh, codificado pelos genes RHD e RHCE. O Antígeno D é a proteína de superfície mais imunogênica conhecida. Indivíduos Rh-positivos possuem o antígeno D; indivíduos Rh-negativos não o possuem. Ao contrário do sistema ABO, indivíduos Rh-negativos NÃO nascem com anticorpos anti-Rh (anti-D) no plasma: a síntese de anti-D requer exposição prévia a hemácias Rh-positivas (transfusão inadvertida ou gestação de feto Rh-positivo). Como os anticorpos anti-D são da classe IgG (monômeros pequenos de 150 kDa), eles atravessam ativamente a barreira placentária materna via receptores FcRn sinciciotrofoblásticos, podendo desencadear a Doença Hemolítica Perinatal (Eritroblastose Fetal).',
      keyPoint: 'Anticorpos anti-A e anti-B são predominantemente IgM (pentâmeros gigantes que não cruzam a placenta); anticorpos anti-D são IgG (atravessam a placenta).'
    },
    costanzo: {
      chapter: 'Capítulo 4: Princípios Transfusionais e Testes Pré-Transfusionais',
      pages: 'pp. 178-182',
      summary: 'Costanzo descreve a Reação Transfusional Hemolítica Aguda (RTHA) por incompatibilidade ABO: se hemácias do grupo A forem infundidas em paciente do grupo O, as aglutininas plasmáticas anti-A IgM do receptor atacam e fixam a cascata do Complemento (via C5b-9, Complexo de Ataque à Membrana MAC), gerando hemólise intravascular imediata com hemoglobinemia, falência renal aguda por precipitação tubular e choque anafilactoide distributivo.',
      keyPoint: 'A prova cruzada maior (hemácias do doador incubadas com soro do receptor) é mandatória para impedir reação hemolítica fatal por IgM.'
    },
    specialistSource: {
      chapter: 'Ganong — Fisiologia Médica — Capítulo 32: Imunidade Transfusional e Profilaxia da Isoimunização Rh',
      pages: 'pp. 610-624',
      summary: 'Ganong detalha a profilaxia da Eritroblastose Fetal: mães Rh-negativas não sensibilizadas que geram fetos Rh-positivos devem receber Imunoglobulina anti-D humana (RhoGAM) na 28ª semana de gestação e até 72 horas pós-parto. Os anticorpos anti-D exógenos ligam-se e opsonizam as poucas hemácias fetais Rh+ que caíram na circulação materna durante o parto, promovendo sua destruição por macrófagos antes que o sistema imune materno monte resposta celular e memória imune B duradoura.',
      keyPoint: 'A profilaxia com imunoglobulina anti-D neutraliza as hemácias fetais na circulação materna, impedindo a isoimunização em gestações subsequentes.'
    },
    openstax: {
      section: 'Chapter 18: Blood — Section 18.6: Blood Typing',
      summary: 'OpenStax fornece a matriz transfusional completa e demonstra o teste de tipagem em lâmina por aglutinação direta com soros anti-A, anti-B e anti-D.',
      keyPoint: 'Aglutinação visível em teste de lâmina com soro anti-A confirma a presença do antígeno A na superfície da hemácia.'
    },
    merck: {
      section: 'Medicina Transfusional — Reações Transfusionais Imunológicas e Não Imunológicas',
      summary: 'O Manual MSD estabelece a conduta imediata diante de suspeita de reação transfusional (febre, dor lombar intensa, hipotensão, urina escura): interrupção imediata da infusão, manutenção de acesso venoso com salina fisiológica, suporte hemodinâmico, coleta de amostras para teste de Coombs direto e notificação ao banco de sangue.',
      keyPoint: 'Interromper imediatamente a transfusão é o primeiro e mais crítico passo ao menor sinal de incompatibilidade sanguínea.'
    },
    researchTopics: [
      {
        title: 'Biossíntese dos Antígenos ABO e Glicosiltransferases',
        concept: 'Diferenciação enzimática na adição de açúcares específicos à Substância H por glicosiltransferases codificadas pelos alelos A, B e O no cromossomo 9 humano.',
        formulaOrLaw: 'Alelo A (N-acetilgalactosamina) vs. Alelo B (Galactose) vs. Alelo O (Substância H intacta)',
        keyReference: 'Guyton & Hall, Cap. 36',
        query: 'abo blood group antigens glycosyltransferase h substance genetics'
      },
      {
        title: 'Mecanismo da Reação Transfusional Hemolítica por IgM',
        concept: 'Ligação das aglutininas bivalentes naturais de classe IgM aos eritrócitos incompatíveis, deflagrando a ativação da via clássica do Complemento até o complexo lítico C5b-9.',
        formulaOrLaw: 'IgM Anti-A/B + Antígeno -> Fixação de C1q -> C5b-9 (MAC) -> Hemólise Intravascular Aguda',
        keyReference: 'Costanzo, Cap. 4',
        query: 'acute hemolytic transfusion reaction abo incompatibility complement mac c5b 9'
      },
      {
        title: 'Antígeno Rh(D) e Fisiopatologia da Eritroblastose Fetal',
        concept: 'Sensibilização imune de gestantes Rh-negativas pelo sangue fetal Rh-positivo com produção de anticorpos IgG que atravessam a placenta na gestação seguinte, destruindo as hemácias fetais.',
        formulaOrLaw: 'Anticorpos IgG Anti-D cruzam a barreira sinciciotrofoblástica via receptores FcRn',
        keyReference: 'Berne & Levy, Cap. 16',
        query: 'rh incompatibility hemolytic disease of the newborn erythroblastosis fetalis anti d igg'
      },
      {
        title: 'Profilaxia Imunológica com Imunoglobulina Anti-D',
        concept: 'Administração passiva de anticorpos anti-Rh(D) à gestante na 28ª semana e pós-parto para clareamento de hemácias fetais antes da ativação de linfócitos B maternos.',
        formulaOrLaw: 'Imunoglobulina Anti-D (300 μg) neutraliza até 15 mL de hemácias fetais Rh+',
        keyReference: 'Ganong, Cap. 32',
        query: 'anti-d immunoglobulin rhogam prophylaxis rhesus immunization fetomaternal hemorrhage'
      }
    ]
  }
];
