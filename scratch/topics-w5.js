// Mundo 5: Fisiologia Renal, Ácido-Base & Integração Sistêmica (Níveis 25 a 30)
module.exports = [
  {
    topicName: 'Filtração Glomerular e TFG',
    phaseId: 'w5_p1',
    level: 25,
    worldId: 'w5',
    category: 'Fisiologia Renal & Ácido-Base',
    phaseTitle: 'Filtração Glomerular (TFG) & Forças de Starling',
    aliases: ['Filtração Glomerular', 'TFG', 'Forças de Starling Renais', 'Feedback Tubuloglomerular', 'Autorregulação Renal'],
    specialistTitle: 'Berne & Levy',
    specialistBadge: 'Fisiologia Renal Quantitativa',
    guyton: {
      chapter: 'Unidade V: Os Líquidos Corporais e os Rins — Capítulo 26: Filtração Glomerular, Fluxo Sanguíneo Renal e seu Controle',
      pages: 'pp. 323-340',
      summary: 'A formação da urina inicia-se com a ultrafiltração em massa de plasma dos capilares glomerulares para a cápsula de Bowman, gerando a TAXA DE FILTRAÇÃO GLOMERULAR (TFG ≈ 125 mL/min ou 180 Litros por dia em um adulto normal). A barreira de filtração glomerular é composta por três camadas em série: 1) Endotélio capilar fenestrado (poros de 70 a 90 nm que retêm células sanguíneas); 2) Membrana basal glomerular rica em proteoglicanos de heparana-sulfato carregados negativamente (barreira eletrostática que repele macromoléculas aniônicas); 3) Fendas de filtração entre os pedicelos dos podócitos recobertos por diafragmas de fenda formados por nefrina e podocalicina negativa. Essa barreira é altamente permeável à água e pequenos solutos cristaloides (eletrólitos, glicose, aminoácidos, ureia), mas virtualmente impermeável a proteínas plasmáticas (a albumina sérica de 66 kDa e carga negativa é quase 100% retida).',
      keyPoint: 'A barreira glomerular filtra 180 L/dia de plasma livre de células e proteínas; a TFG é de ~125 mL/min em adultos sadios.'
    },
    berne: {
      chapter: 'Capítulo 32: Elementos da Função Renal e Filtração Glomerular',
      pages: 'pp. 580-602',
      summary: 'Berne & Levy quantifica a Pressão Líquida de Filtração (PLF) glomerular através das Forças de Starling: PLF = P_GC - P_BC - π_GC, onde: 1) Pressão Hidrostática no Capilar Glomerular (P_GC ≈ 60 mmHg, favorável à filtração): mantida alta pela constrição da arteríola eferente de saída; 2) Pressão Hidrostática na Cápsula de Bowman (P_BC ≈ 18 mmHg, opõe-se à filtração): decorrente da resistência do fluxo tubular adiante; 3) Pressão Coloidosmótica no Capilar Glomerular (π_GC ≈ 32 mmHg média, opõe-se à filtração): exercida pelas proteínas plasmáticas que se concentram conforme o fluido ultrafiltrado desprovido de proteína sai do vaso. Consequentemente: PLF = 60 - 18 - 32 = +10 mmHg. A TFG é calculada por: TFG = Kf * PLF, onde Kf é o coeficiente de ultrafiltração glomerular (área de superfície capilar multiplicada pela condutividade hidráulica).',
      keyPoint: 'Forças de Starling glomerulares: PLF = P_GC (60) - P_BC (18) - π_GC (32) = +10 mmHg a favor da filtração.'
    },
    costanzo: {
      chapter: 'Capítulo 6: Fisiologia Renal — Autorregulação e Feedback Tubuloglomerular',
      pages: 'pp. 235-248',
      summary: 'Costanzo detalha a AUTORREGULAÇÃO RENAL: o Fluxo Sanguíneo Renal (FSR) e a TFG permanecem praticamente constantes em uma ampla faixa de pressão arterial média (entre 80 e 180 mmHg) através de dois mecanismos intrínsecos independentes de inervação externa: 1) Resposta Miogênica (estiramento mecânico da arteríola aferente abre canais de cálcio mecano-sensíveis, induzindo vasoconstrição reflexa da aferente para proteger o glomérulo); 2) FEEDBACK TUBULOGLOMERULAR mediado pela Mácula Densa no aparelho justaglomerular. Se a TFG se eleva, o fluxo de fluido tubular acelera e maior quantidade de NaCl chega à mácula densa; as células da mácula densa captam NaCl pelo cotransportador NKCC2, sofrem tumefação e liberam ADENOSINA no interstício; a adenosina liga-se aos receptores A1 na arteríola aferente adjacente, promovendo vasoconstrição aferente seletiva, reduzindo a P_GC e trazendo a TFG de volta ao ponto de ajuste.',
      keyPoint: 'O Feedback Tubuloglomerular: excesso de NaCl na mácula densa induz liberação de adenosina, que contrai a arteríola aferente, normalizando a TFG.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 34: Filtração Glomerular e Hemodinâmica Renal',
      pages: 'pp. 750-774',
      summary: 'Boron aborda a hemodinâmica diferencial das arteríolas renal aferente e eferente: 1) Prostaglandinas vasodilatadoras renais (PGE2 e PGI2): sintetizadas localmente para manter a arteríola AFERENTE DILATADA (preservando o FSR e a TFG); 2) Angiotensina II: constringe preferencialmente a arteríola EFERENTE em baixas concentrações (aumentando a P_GC para sustentar a TFG mesmo em hipotensão leve). Alerta médico sobre a "Associação Perigosa": AINEs (anti-inflamatórios que bloqueiam prostaglandinas, constringindo a aferente) combinados com IECAs/BRAs (que bloqueiam angiotensina II, dilatando a eferente) colapsam a P_GC glomerular, precipitando Injúria Renal Aguda hemodinâmica severa.',
      keyPoint: 'AINE constringe a aferente e IECA dilata a eferente: o uso concomitante derruba a pressão capilar glomerular e induz insuficiência renal aguda.'
    },
    openstax: {
      section: 'Chapter 25: The Urinary System — Section 25.4: Glomerular Filtration',
      summary: 'OpenStax ilustra o aparelho justaglomerular com suas três linhagens celulares: células da mácula densa (sensores quimiossensíveis de NaCl), células justaglomerulares mioepiteliais na parede da arteríola aferente (produtoras de renina) e células mesangiais extraglomerulares.',
      keyPoint: 'A queda no aporte de NaCl à mácula densa estimula a liberação de Renina pelas células justaglomerulares para ativar o SRAA.'
    },
    merck: {
      section: 'Nefrologia — Avaliação da Função Renal, Clearance de Creatinina e Estadiamento da DRC',
      summary: 'O Manual MSD estabelece a medição da TFG pelo clearance de substâncias: a Inulina é a substância padrão-ouro exógena ideal (livremente filtrada, não reabsorvida, não secretada e não metabolizada nos rins: TFG = [U_inulina * V_urina] / P_inulina). Na prática clínica diária, utiliza-se a Creatinina endógena (clearance ≈ TFG, com leve superestimação de 10% por secreção tubular proximal) e as equações CKD-EPI baseadas na creatinina sérica.',
      keyPoint: 'O clearance de inulina é o padrão-ouro teórico de TFG; a creatinina sérica é o marcador clínico universal na rotina médica.'
    },
    researchTopics: [
      {
        title: 'Barreira de Filtração e Carga Eletrostática Glomerular',
        concept: 'Arquitetura de tripla camada e papel dos proteoglicanos de heparana-sulfato negativos e nefrina na prevenção de proteinúria e perda de albumina sérica.',
        formulaOrLaw: 'Permeabilidade Eletrostática: Ânions Retidos > Neutros Filtrados > Cátions Livres',
        keyReference: 'Guyton & Hall, Cap. 26',
        query: 'glomerular filtration barrier podocyte slit diaphragm heparan sulfate albuminuria'
      },
      {
        title: 'Forças de Starling Glomerulares e Pressão Líquida (PLF)',
        concept: 'Interação hidrostática e coloidosmótica que resulta em pressão líquida de filtração de aproximadamente +10 mmHg em toda a extensão do capilar glomerular.',
        formulaOrLaw: 'TFG = Kf * PLF = Kf * [(P_GC - P_BC) - (π_GC - π_BC)]',
        keyReference: 'Berne & Levy, Cap. 32',
        query: 'glomerular filtration starling forces ultrafiltration coefficient hydraulic conductance'
      },
      {
        title: 'Feedback Tubuloglomerular e Mecanismo da Adenosina',
        concept: 'Acoplamento retrógrado entre o transporte de eletrólitos no ramo espesso ascendente via NKCC2 da mácula densa e a resistência vascular da arteríola aferente.',
        formulaOrLaw: 'NKCC2 na Mácula Densa -> Liberação de Adenosina -> Receptor A1 -> Constrição Aferente',
        keyReference: 'Costanzo, Cap. 6',
        query: 'tubuloglomerular feedback macula densa adenosine nkcc2 afferent arteriole resistance'
      },
      {
        title: 'Clearance Renal: Inulina vs. Creatinina e Equação de Depuração',
        concept: 'Fundamento bioanalítico do clearance plasmático de solutos como o volume virtual de plasma totalmente depurado de uma substância pelos rins por unidade de tempo.',
        formulaOrLaw: 'Clearance C = (U * V) / P (mL/min)',
        keyReference: 'Boron & Boulpaep, Cap. 34',
        query: 'renal clearance inulin creatinine glomerular filtration rate ckd-epi formula'
      }
    ]
  },

  {
    topicName: 'Transporte Tubular Renal',
    phaseId: 'w5_p2',
    level: 26,
    worldId: 'w5',
    category: 'Fisiologia Renal & Ácido-Base',
    phaseTitle: 'Reabsorção e Secreção Tubular ao Longo do Néfron',
    aliases: ['Segmentos Tubulares do Néfron', 'Túbulo Proximal', 'Alça de Henle', 'Túbulo Distal', 'Ducto Coletor'],
    specialistTitle: 'Berne & Levy',
    specialistBadge: 'Transporte Epitelial Renal',
    guyton: {
      chapter: 'Unidade V — Capítulo 27: Reabsorção e Secreção Tubular Renal',
      pages: 'pp. 341-360',
      summary: 'Dos 180 litros diários ultrafiltrados nos glomérulos, mais de 99% da água e dos solutos são reabsorvidos ao longo dos túbulos renais, sendo excretados em média apenas 1,5 litro de urina por dia. Cada segmento do néfron possui maquinaria especializada: 1) TÚBULO CONTORCIDO PROXIMAL (TCP): o "cavalo de batalha" do néfron, reabsorve cerca de 65% a 70% de todo o Na+, Cl-, K+ e água filtrados, e 100% de toda a glicose e aminoácidos filtrados (via simporte dependente de sódio SGLT e amino-transportadores). O fluido que sai do TCP é rigorosamente ISOSMOLAR (~300 mOsm/L) porque a reabsorção de água por aquaporina 1 acompanha estequiometricamente a de solutos; 2) ALÇA DE HENLE: Ramo Delgado Descendente: altamente permeável à água (expressa AQP1), mas impermeável a solutos (o fluido concentra-se até 1.200 mOsm/L na ponta medular); Ramo Espesso Ascendente (TAL): impermeável à água, mas reabsorve ativamente cerca de 25% do Na+, K+ e 2 Cl- através do cotransportador apical NKCC2 (alvo dos diuréticos de alça como a furosemida); 3) TÚBULO CONTORCIDO DISTAL INICIAL (TCD): impermeável à água, reabsorve 5% de NaCl via cotransportador sensível a tiazídicos NCC; 4) TÚBULO DISTAL TARDIO E DUCTO COLETOR: regulação hormonal fina pelas Células Principais (reabsorção de Na+ via canal ENaC e secreção de K+ via ROMK, estimuladas pela ALDOSTERONA) e Células Intercaladas Tipo A (secreção ativa de H+ via H+-ATPase para acidificação urinária).',
      keyPoint: 'O TCP reabsorve 65% do ultrafiltrado e 100% da glicose de modo isosmolar; o ramo espesso da alça reabsorve 25% de Na+ via NKCC2 (alvo da furosemida).'
    },
    berne: {
      chapter: 'Capítulo 33: Transporte Tubular de Solutos e Balanço de Sódio e Água',
      pages: 'pp. 604-632',
      summary: 'Berne & Levy detalha o potencial transepitelial do Ramo Espesso Ascendente da Alça de Henle (TAL): o cotransportador NKCC2 internaliza 1 Na+, 1 K+ e 2 Cl-. O K+ citosólico é reciclado de volta para o lúmen tubular através do canal de potássio apical ROMK. Essa retro-injeção contínua de cargas positivas de K+ gera um POTENCIAL TRANSEPITELIAL POSITIVO NA LUZ TUBULAR (+8 a +10 mV) que atua repelindo e impulsionando a reabsorção paracelular de cátions divalentes vitais: Cálcio (Ca2+) e Magnésio (Mg2+) através das claudinas 16 e 19.',
      keyPoint: 'A reciclagem de K+ pelo canal ROMK no ramo ascendente gera lúmen positivo (+10 mV) que empurra Ca2+ e Mg2+ pela via paracelular; a furosemida bloqueia esse mecanismo, induzindo calciúria.'
    },
    costanzo: {
      chapter: 'Capítulo 6: Fisiologia Renal — Mecanismos de Transporte Tubular e Diuréticos',
      pages: 'pp. 248-268',
      summary: 'Costanzo traça o mapa farmacológico definitivo dos DIURÉTICOS e seus sítios de ação tubulares: 1) Inibidores da Anidrase Carbônica (Acetazolamida): atuam no Túbulo Proximal bloqueando a reabsorção de bicarbonato e sódio; 2) Diuréticos de Alça (Furosemida, Bumetanida): atuam no Ramo Espesso Ascendente inibindo o cotransportador NKCC2; são os mais potentes da farmacologia médica ("diuréticos de alta eficácia"); 3) Tiazídicos (Hidroclorotiazida, Clortalidona): atuam no Túbulo Contorcido Distal inibindo o cotransportador Na+/Cl- (NCC); aumentam a reabsorção de cálcio; 4) Diuréticos Poupadores de Potássio: atuam no Ducto Coletor bloqueando o canal de sódio ENaC (Amilorida, Triantereno) ou antagonizando os receptores de mineralocorticoide da aldosterona (Espironolactona, Eplerenona), inibindo a perda urinária de potássio.',
      keyPoint: 'Furosemida inibe NKCC2 na alça; Tiazídicos inibem NCC no túbulo distal; Espironolactona antagoniza a aldosterona no ducto coletor.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 35: Transporte Tubular de Glicose e Limiar de Transporte (Tm)',
      pages: 'pp. 775-798',
      summary: 'Boron formaliza o Transporte Máximo Tubular de Glicose (Tm_glicose ≈ 375 mg/min): em normoglicemia (glicemia de 70 a 100 mg/dL), a carga filtrada de glicose é de ~100 mg/min, sendo 100% reabsorvida no túbulo proximal via SGLT2 (90% no segmento S1) e SGLT1 (10% no segmento S3). Quando a glicemia ultrapassa o LIMIAR RENAL DE GLICOSE (~180 a 200 mg/dL), a carga filtrada satura o Tm; o excesso não reabsorvido transborda para a urina definitiva (GLICOSÚRIA), atuando como soluto osmoticamente ativo que retém água na luz tubular, deflagrando DIURESE OSMÓTICA com poliúria clássica e polidipsia no diabetes descompensado.',
      keyPoint: 'Limiar renal de glicose é ~180 mg/dL: acima desse valor, os transportadores SGLT saturam e a glicose extravasa na urina, gerando diurese osmótica.'
    },
    openstax: {
      section: 'Chapter 25: The Urinary System — Section 25.5: Tubular Reabsorption and Secretion',
      summary: 'OpenStax ilustra o corte transversal das células epiteliais de cada segmento tubular: o túbulo proximal com abundância de mitocôndrias e borda em escova densa de microvilosidades para maximizar a área de absorção versus o epitélio cúbico liso do ducto coletor.',
      keyPoint: 'A borda em escova do túbulo proximal amplia a área de superfície de absorção em mais de 20 vezes.'
    },
    merck: {
      section: 'Nefrologia e Farmacologia — Síndrome de Bartter, Gitelman e Terapia Diurética',
      summary: 'O Manual MSD correlaciona canalopatias congênitas que mimetizam diuréticos: a Síndrome de Bartter (mutação inativadora no NKCC2 ou ROMK na alça de Henle, simulando o uso contínuo de furosemida com hipocalemia, alcalose metabólica e hipercalciúria) e a Síndrome de Gitelman (mutação inativadora no NCC do túbulo distal, simulando uso crônico de tiazídicos com hipocalemia e hipocalciúria).',
      keyPoint: 'Síndrome de Bartter mimetiza uso crônico de furosemida; Síndrome de Gitelman mimetiza uso de tiazídicos.'
    },
    researchTopics: [
      {
        title: 'Cotransportador NKCC2 e Mecanismo da Furosemida',
        concept: 'Mecanismo molecular do carreador eletroneutro 1Na+:1K+:2Cl- no ramo espesso ascendente e sua inibição estéreo-específica pela furosemida na alça de Henle.',
        formulaOrLaw: 'Bloqueio de NKCC2 -> Abolição do Gradiente Hiperosmótico Medular -> Diurese Maciça',
        keyReference: 'Berne & Levy, Cap. 33',
        query: 'nkcc2 cotransporter furosemide loop diuretics thick ascending limb romk'
      },
      {
        title: 'Transporte Máximo de Glicose (Tm) e Diurese Osmótica',
        concept: 'Cinética de saturação dos carreadores SGLT2/SGLT1 no túbulo proximal quando a glicemia plasmática excede o limiar de 180-200 mg/dL gerando perda urinária de água.',
        formulaOrLaw: 'Excreção de Glicose = Carga Filtrada (TFG * Glicemia) - Reabsorção Máxima (Tm)',
        keyReference: 'Costanzo, Cap. 6',
        query: 'glucose transport maximum renal threshold sglt2 osmotic diuresis diabetes'
      },
      {
        title: 'Células Principais vs. Intercaladas do Ducto Coletor',
        concept: 'Divisão funcional no epitélio do ducto coletor entre a regulação de volume/sódio/potássio por canais ENaC e a regulação ácido-base por bombas ativas de H+ e trocadores de bicarbonato.',
        formulaOrLaw: 'Célula Principal: ENaC (Na+ in) / ROMK (K+ out) | Célula Intercalada A: H+-ATPase / H+/K+-ATPase',
        keyReference: 'Guyton & Hall, Cap. 27',
        query: 'principal cells intercalated cells collecting duct enac romk aldosterone h atpase'
      },
      {
        title: 'Farmacologia dos Diuréticos Poupadores de Potássio',
        concept: 'Inibição direta de canais de sódio apicais ENaC por amilorida ou antagonismo competitivo do receptor citosólico de mineralocorticoide por espironolactona.',
        formulaOrLaw: 'Bloqueio de ENaC -> Redução do Potencial Transepitelial Negativo -> Menor Secreção de K+ e H+',
        keyReference: 'Boron & Boulpaep, Cap. 35',
        query: 'potassium sparing diuretics spironolactone eplerenone amiloride enac collecting duct'
      }
    ]
  },

  {
    topicName: 'Contracorrente e ADH',
    phaseId: 'w5_p3',
    level: 27,
    worldId: 'w5',
    category: 'Fisiologia Renal & Ácido-Base',
    phaseTitle: 'Mecanismo de Contracorrente, ADH & Osmorregulação',
    aliases: ['Multiplicador de Contracorrente', 'ADH e Vasopressina', 'Osmorregulação', 'Aquaporina 2', 'Ureia Medular'],
    specialistTitle: 'Berne & Levy',
    specialistBadge: 'Osmorregulação Renal',
    guyton: {
      chapter: 'Unidade V — Capítulo 28: Concentração e Diluição da Urina; Regulação da Osmolaridade do Líquido Extracelular',
      pages: 'pp. 361-378',
      summary: 'Os rins humanos têm a extraordinária capacidade de concentrar a urina até 1.200 a 1.400 mOsm/L (para conservar água na desidratação) ou diluí-la até 50 mOsm/L (para eliminar excesso hídrico), mantendo a osmolaridade do plasma rigorosamente em ~290 mOsm/L. Essa façanha biofísica é realizada pelo MECANISMO MULTIPLICADOR DE CONTRACORRENTE na medula renal: 1) A Alça de Henle dos néfrons justamedulares longos opera como um multiplicador de contracorrente, bombeando NaCl para fora através do ramo ascendente impermeável à água; 2) O fluxo sanguíneo lento em contracorrente nos capilares retos (Vasa Recta) atua como um TROCADOR DE CONTRACORRENTE, que remove o excesso de água absorvida sem dispersar o gradiente osmótico medular; 3) A Reciclagem de Ureia (via transportadores UT-A1 e UT-A3 ativados por ADH) contribui com quase 50% de todo o gradiente hiperosmótico no interstício da medula interna profunda.',
      keyPoint: 'O multiplicador de contracorrente na alça de Henle e vasa recta constrói um gradiente medular de até 1.200 mOsm/L; o ADH permite à urina equilibrar-se com esse meio concentrado.'
    },
    berne: {
      chapter: 'Capítulo 34: Concentração da Urina, Eixo Hipotalâmico-Neuro-Hipofisário e ADH',
      pages: 'pp. 635-654',
      summary: 'Berne & Levy detalha a osmorregulação central: os OSMORRECEPTORES HIPOTALÂMICOS (nos núcleos supraóptico e paraventricular, e nos órgãos circunventriculares OVLT) são mecanorreceptores celulares de extrema precisão, capazes de detectar variações de apenas 1% na osmolaridade plasmática efetiva. Quando a osmolaridade plasmática sobe acima do limiar de 285 mOsm/L (ex: perda hídrica pelo suor), a saída osmótica de água retrai os osmorreceptores; isso dispara potenciais de ação que estimulam o CENTRO DA SEDE no córtex e a secreção de HORMÔNIO ANTIDIURÉTICO (ADH / Arginina-Vasopressina) pela neuro-hipófise para a circulação sistêmica.',
      keyPoint: 'Variação de apenas 1% na osmolaridade do plasma já deflagra secreção imediata de ADH e sensação de sede para proteger o volume celular cerebral.'
    },
    costanzo: {
      chapter: 'Capítulo 6: Fisiologia Renal — Ação Celular do ADH e Aquaporinas',
      pages: 'pp. 268-278',
      summary: 'Costanzo disseca a cascata celular do ADH nas Células Principais do ducto coletor: o ADH liga-se aos receptores basolaterais V2 acoplados à proteína Gs -> ativa a adenilil-ciclase -> eleva o AMPc intracelular -> ativa a Proteína Quinase A (PKA) -> a PKA fosforila e estimula o tráfego exocítico de vesículas contendo CANAIS DE AQUAPORINA 2 (AQP2), promovendo sua inserção rápida na MEMBRANA APICAL luminal. A água da luz tubular passa então livremente por osmose para o interior da célula via AQP2 apical e sai para o interstício via AQP3 e AQP4 basolaterais constitutivas, concentrando a urina ao máximo (antidiurese). Na ausência de ADH, os canais AQP2 são reinternalizados por endocitose, a membrana apical torna-se impermeável à água e a urina sai diluída (diurese copiosa de até 20 litros por dia).',
      keyPoint: 'O ADH via receptor V2 e AMPc insere canais Aquaporina 2 na membrana apical do ducto coletor, permitindo reabsorção em massa de água.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 38: Fisiopatologia da Osmorregulação e Diabetes Insipidus',
      pages: 'pp. 830-852',
      summary: 'Boron compara as duas formas clínicas de DIABETES INSIPIDUS (DI): 1) Diabetes Insipidus Central / Neurogênico (falha na síntese ou secreção de ADH pelo hipotálamo/hipófise por trauma craniano ou tumor); o paciente urina 15 a 20 L/dia de urina hipotônica (< 100 mOsm/L); RESPONDE imediatamente à administração de Desmopressina exógena (DDAVP); 2) Diabetes Insipidus Nefrogênico (resistência renal ao ADH por mutação no receptor V2 ou no gene da AQP2, ou por toxicidade crônica pelo LÍTIO utilizado no transtorno bipolar); NÃO responde ao DDAVP, pois os receptores renais são insensíveis.',
      keyPoint: 'DI Central responde à desmopressina exógena; DI Nefrogênico (ex: por intoxicação por lítio) não responde porque o túbulo renal é insensível ao ADH.'
    },
    openstax: {
      section: 'Chapter 25: The Urinary System — Section 25.6: Tubular Secretion and Urine Concentration',
      summary: 'OpenStax ilustra a arquitetura anatômica dos néfrons corticais (alças curtas que não penetram a medula profunda) versus néfrons justamedulares (alças longas que atingem a ponta da papila renal e são os únicos construtores do gradiente medular concentrador).',
      keyPoint: 'Apenas os néfrons justamedulares (15% dos néfrons) com alças de Henle longas constroem o gradiente hiperosmótico de contracorrente.'
    },
    merck: {
      section: 'Endocrinologia e Nefrologia — Síndrome da Secreção Inapropriada de ADH (SIADH)',
      summary: 'O Manual MSD detalha a SIADH (secreção desregulada e excessiva de ADH por carcinomas pulmonares de pequenas células, infecções do SNC ou drogas): retenção contínua de água livre gera HIPONATREMIA HIPO-OSMOLAR EUVOLÊMICA com urina inapropriadamente concentrada (> 100 mOsm/L). O tratamento inclui restrição hídrica rigorosa e antagonistas dos receptores V2 do ADH (Vaptanos: Tolvaptano).',
      keyPoint: 'Na SIADH há retenção patológica de água livre com hiponatremia grave e urina concentrada; o tratamento baseia-se em restrição hídrica e vaptanos.'
    },
    researchTopics: [
      {
        title: 'Multiplicador de Contracorrente e Gradiente Hiperosmótico',
        concept: 'Mecanismo no qual a separação entre transporte ativo de solutos sem água no ramo ascendente e absorção passiva de água no ramo descendente amplifica o gradiente corticomedular.',
        formulaOrLaw: 'Gradiente Corticomedular: de 300 mOsm/L no córtex até 1.200 mOsm/L na papila',
        keyReference: 'Guyton & Hall, Cap. 28',
        query: 'countercurrent multiplier loop of henle vasa recta hyperosmotic medullary gradient'
      },
      {
        title: 'Cascata Molecular do Receptor V2 e Aquaporina 2 (AQP2)',
        concept: 'Sinalização transmembrana por proteína Gs e AMPc comandando a translocação de vesículas contendo homotetrâmeros de aquaporina 2 para a membrana luminal do ducto coletor.',
        formulaOrLaw: 'ADH -> Receptor V2 -> Gs -> Adenilil Ciclase -> ↑ AMPc -> PKA -> Exocitose de AQP2',
        keyReference: 'Costanzo, Cap. 6',
        query: 'vasopressin v2 receptor aquaporin 2 trafficking collecting duct pka phosphorylation'
      },
      {
        title: 'Diagnóstico Diferencial: Diabetes Insipidus Central vs. Nefrogênico',
        concept: 'Protocolo clínico de privação hídrica associado ao teste com desmopressina sintética para discriminação entre deficiência secretória hipofisária e resistência do epitélio tubular.',
        formulaOrLaw: 'Teste do DDAVP: DI Central (Urina concentra > 50%) vs. DI Nefrogênico (Sem resposta)',
        keyReference: 'Boron & Boulpaep, Cap. 38',
        query: 'diabetes insipidus water deprivation test desmopressin ddavp central nephrogenic'
      },
      {
        title: 'Fisiopatologia da SIADH e Tratamento com Vaptanos',
        concept: 'Hiperprodução ectópica de vasopressina promovendo expansão subclínica do LEC, natriurese secundária por ANP e hiponatremia dilucional perigosa.',
        formulaOrLaw: 'SIADH: Hiponatremia Hipotônica + Urina Concentrada (> 100 mOsm/L) + Euvolemia Clínica',
        keyReference: 'Berne & Levy, Cap. 34',
        query: 'syndrome of inappropriate adh secretion siadh hyponatremia vaptans tolvaptan'
      }
    ]
  },

  {
    topicName: 'Equilíbrio Ácido-Base',
    phaseId: 'w5_p4',
    level: 28,
    worldId: 'w5',
    category: 'Fisiologia Renal & Ácido-Base',
    phaseTitle: 'Equilíbrio Ácido-Base & Compensação',
    aliases: ['Equilíbrio Ácido Base', 'Equação de Henderson-Hasselbalch', 'Acidose e Alcalose', 'Ânion Gap', 'Compensação Pulmonar e Renal'],
    specialistTitle: 'Costanzo & Boron',
    specialistBadge: 'Gasometria & Ácido-Base',
    guyton: {
      chapter: 'Unidade V — Capítulo 31: Regulação do Equilíbrio Ácido-Básico',
      pages: 'pp. 409-428',
      summary: 'A concentração fisiológica de íons de hidrogênio livres no sangue arterial é extremamente diminuta (~40 nEq/L), correspondendo a um pH arterial rigidamente controlado entre 7,35 e 7,45 (limites compatíveis com a vida: 6,8 a 8,0). O organismo dispõe de TRÊS LINHAS DE DEFESA escalonadas no tempo: 1) TAMPÕES QUÍMICOS DOS LÍQUIDOS CORPORAIS (atuam em fração de segundos): o Sistema Tampão Bicarbonato (H+ + HCO3- <-> H2CO3 <-> CO2 + H2O), o tampão fosfato intracelular/renal e as proteínas plasmáticas/intracelulares (hemoglobina e albumina); 2) COMPENSAÇÃO RESPIRATÓRIA (atua em minutos a poucas horas): o centro respiratório bulbar ajusta a frequência e profundidade ventilatória para eliminar ou reter CO2 volátil; 3) COMPENSAÇÃO RENAL (a mais poderosa, porém lenta, atuando em 24 a 72 horas): os rins reabsorvem 100% do bicarbonato filtrado (via trocador NHE3 proximal), regeneram novo bicarbonato no plasma e excretam a carga ácida líquida não-volátil diária (~70 a 100 mEq/dia) na forma de Acidez Titulável (tamponamento por fosfato H2PO4-) e Íons Amônio (NH4+ sintetizado a partir da glutamina no túbulo proximal).',
      keyPoint: 'O pH sanguíneo normal é 7,35 a 7,45. A defesa ácido-base opera em três etapas: 1) Tampões químicos imediatos; 2) Compensação respiratória em minutos; 3) Compensação renal em 1 a 3 dias.'
    },
    berne: {
      chapter: 'Capítulo 35: Regulação Renal e Sistêmica do Equilíbrio Ácido-Básico',
      pages: 'pp. 656-678',
      summary: 'Berne & Levy detalha a EQUAÇÃO DE HENDERSON-HASSELBALCH para o sistema tampão bicarbonato: pH = pKa + log10([HCO3-] / [CO2 dissolvido]), onde pKa = 6,1 e [CO2 dissolvido] = 0,03 * PCO2. Portanto: pH = 6,1 + log10([HCO3-] / (0,03 * PCO2)). Em condições ideais: pH = 6,1 + log10(24 / (0,03 * 40)) = 6,1 + log10(24 / 1,2) = 6,1 + log10(20) = 6,1 + 1,30 = 7,40. Demonstra que o pH é governado pela RAZÃO entre o bicarbonato metabólico (regulada pelos rins no numerador) e a PCO2 respiratória (regulada pelos pulmões no denominador). Se a razão [HCO3-] / PCO2 se mantiver igual a 20:1, o pH permanecerá rigorosamente 7,40.',
      keyPoint: 'Pela Equação de Henderson-Hasselbalch, o pH depende estritamente da razão entre [HCO3-] renal e PCO2 pulmonar (Razão normal de 20:1 resulta em pH 7,40).'
    },
    costanzo: {
      chapter: 'Capítulo 7: Fisiologia Ácido-Básica — Diagnóstico dos 4 Distúrbios Primários e Ânion Gap',
      pages: 'pp. 285-305',
      summary: 'Costanzo estabelece a tabela diagnóstica definitiva dos quatro distúrbios primários: 1) ACIDOSE METABÓLICA: distúrbio primário = [HCO3-] baixo (< 22 mEq/L) com pH < 7,35; Compensação respiratória imediata: hiperventilação compensatória para lavar CO2 (Respiração de Kussmaul), calculada pela Fórmula de Winter: PCO2 esperada = (1,5 * [HCO3-]) + 8 ± 2; 2) ALCALOSE METABÓLICA: distúrbio primário = [HCO3-] alto (> 26 mEq/L) com pH > 7,45; Compensação: hipoventilação alveolar para reter CO2; 3) ACIDOSE RESPIRATÓRIA: distúrbio primário = PCO2 alto (> 45 mmHg) por hipoventilação (DPOC, opioides, parada) com pH < 7,35; Compensação renal: síntese e retenção de HCO3- e excreção de H+; 4) ALCALOSE RESPIRATÓRIA: distúrbio primário = PCO2 baixo (< 35 mmHg) por hiperventilação (ansiedade, crise de pânico, dor, altitude) com pH > 7,45; Compensação renal: excreção de HCO3-. Detalha o ÂNION GAP sérico: AG = [Na+] - ([Cl-] + [HCO3-]), normal entre 8 e 12 mEq/L.',
      keyPoint: 'Fórmula de Winter prediz a compensação respiratória na acidose metabólica. Ânion Gap elevado (> 12 mEq/L) indica cetoacidose, acidose lática ou uremia.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 39: Fisiopatologia Ácido-Base e Amoniogênese Renal',
      pages: 'pp. 855-885',
      summary: 'Boron disseca a Amoniogênese Renal Proximal: o metabolismo de 1 molécula de glutamina pelas células tubulares gera 2 íons amônio (NH4+) e regenera 2 novos íons bicarbonato (HCO3-) que são devolvidos ao plasma. O NH4+ é secretado ativamente na luz tubular pelo trocador apical NHE3 (substituindo o próton H+), sendo a principal via renal adaptativa para excretar grandes sobrecargas ácidas na cetoacidose diabética.',
      keyPoint: 'A glutamina metabolizada no túbulo proximal sintetiza novos íons bicarbonato para o sangue e excreta amônio na urina.'
    },
    openstax: {
      section: 'Chapter 26: Fluid, Electrolyte, and Acid-Base Balance — Section 26.4: Acid-Base Balance',
      summary: 'OpenStax fornece fluxogramas de decisão gasométrica baseados nos três parâmetros laboratoriais fundamentais: pH, PCO2 e bicarbonato sérico.',
      keyPoint: 'Se o distúrbio e a alteração da PCO2 caminham na mesma direção, o distúrbio é primariamente metabólico; se em direções opostas, é primariamente respiratório.'
    },
    merck: {
      section: 'Nefrologia e Terapia Intensiva — Distúrbios Ácido-Básicos Mistos e Manejo da Cetoacidose',
      summary: 'O Manual MSD aborda as causas clássicas de Acidose Metabólica com Ânion Gap Elevado através do mnemônico MUDPILES: Metanol, Uremia, Cetoacidose Diabética, Paraleído, Isoniazida/Infecção, Acidose Lática, Etilenoglicol e Salicilatos (Aspirina). Detalha a conduta na crise de pânico (alcalose respiratória aguda com parestesias periorais e espasmo carpopedal por hipocalcemia ionizada induzida por alcalose).',
      keyPoint: 'Na alcalose respiratória aguda por ansiedade, o aumento da ligação do cálcio à albumina gera hipocalcemia ionizada com tetania e parestesias.'
    },
    researchTopics: [
      {
        title: 'Equação de Henderson-Hasselbalch e Tampão Bicarbonato',
        concept: 'Relação quantitativa entre o pH arterial e a proporção estequiométrica molar entre o bicarbonato plasmático e o dióxido de carbono dissolvido.',
        formulaOrLaw: 'pH = 6,1 + log10([HCO3-] / [0,03 * PCO2]) -> Razão 20:1 resulta em pH 7,40',
        keyReference: 'Berne & Levy, Cap. 35',
        query: 'henderson hasselbalch equation bicarbonate buffer system ph blood gas analysis'
      },
      {
        title: 'Acidose Metabólica, Fórmula de Winter e Ânion Gap',
        concept: 'Validação da suficiência compensatória respiratória e classificação diagnóstica em acidose com hiato aniônico elevado versus acidose hiperclorêmica normal.',
        formulaOrLaw: 'Fórmula de Winter: PCO2 esperada = (1,5 * [HCO3-]) + 8 ± 2 | Ânion Gap = Na - (Cl + HCO3)',
        keyReference: 'Costanzo, Cap. 7',
        query: 'metabolic acidosis winter formula anion gap ketoacidosis lactic acidosis'
      },
      {
        title: 'Amoniogênese Renal e Excreção Líquida de Ácidos',
        concept: 'Desaminação da glutamina no túbulo contorcido proximal gerando novos íons bicarbonato para a circulação e íons amônio para excreção urinária.',
        formulaOrLaw: '1 Glutamina -> 2 NH4+ (secretados via NHE3) + 2 HCO3- novos (reabsorvidos)',
        keyReference: 'Boron & Boulpaep, Cap. 39',
        query: 'renal ammoniagenesis glutamine metabolism net acid excretion titratable acid'
      },
      {
        title: 'Alcalose Respiratória Aguda e Tetania por Hipocalcemia',
        concept: 'Mecanismo no qual a perda excessiva de CO2 alcaliniza o plasma, liberando prótons da albumina e atraindo cálcio ionizado livre, precipitando espasmos musculares.',
        formulaOrLaw: 'Alcalose -> H+ dissocia da Albumina -> Sítios negativos ligam Ca2+ livre -> Queda do Ca2+ ionizado',
        keyReference: 'Guyton & Hall, Cap. 31',
        query: 'respiratory alkalosis hyperventilation ionized hypocalcemia tetany carpopedal spasm'
      }
    ]
  },

  {
    topicName: 'Fisiologia Integrada do Exercício',
    phaseId: 'w5_p5',
    level: 29,
    worldId: 'w5',
    category: 'Integração Sistêmica & Fisiologia do Esforço',
    phaseTitle: 'Integração Cardio-Respiratória no Exercício Intenso',
    aliases: ['Fisiologia do Exercício', 'VO2 Máximo', 'Limiar de Lactato', 'Consumo de Oxigênio', 'Equação de Fick no Esforço'],
    specialistTitle: 'Ganong & West',
    specialistBadge: 'Fisiologia do Esforço',
    guyton: {
      chapter: 'Unidade XIV — Capítulo 85: Fisiologia Esportiva; Músculos no Exercício, Respiração e Sistema Cardiovascular',
      pages: 'pp. 1065-1080',
      summary: 'Durante o exercício físico dinâmico extenuante, os sistemas cardiovascular, respiratório, metabólico e neuromuscular operam em perfeita sintonia integrativa para suprir a demanda energética colossal dos músculos esqueléticos em contração, cujo consumo metabólico de oxigênio pode aumentar em mais de 20 a 50 vezes em relação ao repouso. O Débito Cardíaco sobe de 5 L/min para até 20 a 25 L/min em indivíduos não treinados e 35 L/min em atletas maratonistas de elite, impulsionado por elevação dramática da Frequência Cardíaca (até a FC máxima ≈ 220 - idade) e aumento do Volume Sistólico (potencializado pelo mecanismo de Frank-Starling via bomba muscular venosa e inotropismo simpático). A Pressão Arterial Sistólica (PAS) eleva-se progressivamente com o esforço (de 120 para 180-200 mmHg pelo alto débito ejetado na aorta), enquanto a Pressão Arterial Diastólica (PAD) permanece inalterada ou até declina ligeiramente (decorrente da intensa vasodilatação arteriolar metabólica provocada por adenosina, lactato, K+ e óxido nítrico nos leitos musculares ativos, que derruba a Resistência Periférica Total).',
      keyPoint: 'No exercício dinâmico: o débito cardíaco sobe até 5x; a PAS se eleva enquanto a PAD fica estável ou cai devido à intensa vasodilatação muscular metabólica.'
    },
    berne: {
      chapter: 'Capítulo 20: Circulação no Músculo Esquelético e Hiperemia Funcional Ativa',
      pages: 'pp. 370-388',
      summary: 'Berne & Levy detalha a HIPEREMIA FUNCIONAL / ATIVA no tecido muscular: a estimulação simpática generalizada induz vasoconstrição mediada por receptores alfa-1 adrenérgicos em territórios inativos (circulação esplâncnica, renal e cutânea inicial, desviando o fluxo para os músculos). No entanto, nos próprios músculos esqueléticos em exercício, esse tônus vasoconstritor simpático é completamente sobrepujado e anulado pela liberação local contínua de metabólitos vasodilatadores sintetizados pelas fibras musculares ativas (adenosina da quebra de ATP, K+ de efluxo dos potenciais de ação repetidos, íons H+, osmolaridade aumentada e óxido nítrico endotelial). Esse fenômeno biofísico de sobrepujar a inervação autonômica sistêmica por controle metabólico local denomina-se SIMPATÓLISE FUNCIONAL.',
      keyPoint: 'Simpatólise Funcional: os metabólitos locais (adenosina, K+, lactato) anulam o tônus vasoconstritor simpático alfa-1 nos músculos ativos, garantindo hiperemia maciça.'
    },
    costanzo: {
      chapter: 'Capítulo 3 e 5: Fisiologia Cardiovascular e Respiratória Integradas no Exercício',
      pages: 'pp. 168-172, 214-218',
      summary: 'Costanzo analisa a EQUAÇÃO DE FICK no exercício: VO2 = DC * (CaO2 - CvO2). No esforço exaustivo, o consumo corporal de oxigênio (VO2) atinge seu teto genético e de treinamento denominado CONSUMO MÁXIMO DE OXIGÊNIO (VO2 máx). A diferença arteriovenosa de oxigênio (CaO2 - CvO2) alarga-se espetacularmente: enquanto em repouso o sangue venoso misto retorna com 75% de saturação (CvO2 ≈ 15 mL/dL), no exercício vigoroso os músculos extraem quase todo o oxigênio disponível, derrubando a saturação venosa para menos de 20-25% (CvO2 cai para 4-5 mL/dL). Aborda o LIMIAR DE LACTATO (Limiar Anaeróbio): intensidade metabólica na qual a taxa de produção de lactato pelo metabolismo glicolítico supera a capacidade de metabolização hepática e muscular oxidativa, acumulando ácido lático no sangue.',
      keyPoint: 'No esforço máximo, os músculos extraem tanto O2 que a saturação venosa cai de 75% para menos de 20%, alargando a diferença arteriovenosa ao extremo.'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 9: O Sistema Respiratório sob Estresse: Exercício e Altitude',
      pages: 'pp. 143-158',
      summary: 'John B. West explica o Ponto de Quebra Ventilatório (Compensação Respiratória do Limiar de Lactato): quando o lactato se acumula no sangue, a acidose metabólica lática estimula intensamente os quimiorreceptores carotídeos periféricos, deflagrando uma hiperventilação desproporcional ao consumo de O2 (a ventilação minuto sobe de 6 L/min no repouso para mais de 120 a 150 L/min no esforço máximo!). Essa hiperventilação de urgência "lava" o CO2 arterial, derrubando a PaCO2 abaixo de 35 mmHg e compensando parcialmente a acidose metabólica.',
      keyPoint: 'A hiperventilação acima do limiar de lactato elimina CO2 em massa (PaCO2 cai), constituindo a compensação respiratória da acidose lática de esforço.'
    },
    openstax: {
      section: 'Chapter 20: Blood Vessels — Section 20.5: Circulatory Pathways (Exercise Adaptations)',
      summary: 'OpenStax ilustra o desvio hemodinâmico ("shunting"): em repouso os músculos recebem cerca de 20% do débito cardíaco (1 L/min); em exercício intenso, recebem mais de 80% a 85% de todo o débito cardíaco bombeado pelo coração (mais de 20 L/min).',
      keyPoint: 'O fluxo sanguíneo muscular pode saltar de 1 L/min no repouso para mais de 20 L/min no exercício máximo.'
    },
    merck: {
      section: 'Medicina do Esporte e Cardiologia — Teste Ergométrico e Ergoespirometria Cardiopulmonar',
      summary: 'O Manual MSD aborda o Teste de Esforço Cardiopulmonar (TECP / Ergoespirometria): quantificação direta do VO2 máx, do primeiro limiar ventilatório (LV1 / aeróbio) e segundo limiar ventilatório (LV2 / ponto de quebra respiratória do lactato), utilizado para estratificação de risco cirúrgico cardíaco e prescrição de treinamento esportivo.',
      keyPoint: 'A ergoespirometria mede diretamente as trocas gasosas respiração a respiração, definindo a capacidade funcional cardiovascular do paciente.'
    },
    researchTopics: [
      {
        title: 'Equação de Fick e Consumo Máximo de Oxigênio (VO2 máx)',
        concept: 'Balanço da taxa metabólica oxidativa corporal como o produto entre o débito cardíaco de entrega e a taxa de extração tecidual muscular periférica de O2.',
        formulaOrLaw: 'VO2 = Débito Cardíaco * (CaO2 - CvO2)',
        keyReference: 'Costanzo, Cap. 3',
        query: 'fick principle vo2 max maximal oxygen consumption exercise physiology'
      },
      {
        title: 'Simpatólise Funcional e Vasodilatação Metabólica Muscular',
        concept: 'Mecanismo celular no qual a secreção de adenosina, óxido nítrico e íons K+ bloqueia a vasoconstrição simpática alfa-1 no leito muscular esquelético ativo.',
        formulaOrLaw: 'Controle Metabólico Local > Tônus Simpático Central Sistêmico',
        keyReference: 'Berne & Levy, Cap. 20',
        query: 'functional sympatholysis exercise metabolic vasodilation skeletal muscle hyperemia'
      },
      {
        title: 'Limiar de Lactato e Ponto de Quebra Ventilatório',
        concept: 'Transição fisiológica na qual a glicólise anaeróbia ultrapassa o clareamento tecidual gerando acidose lática que estimula os quimiorreceptores periféricos à hiperventilação.',
        formulaOrLaw: 'Acidose Lática -> Estímulo dos Corpos Carotídeos -> Hiperventilação Desproporcional -> PaCO2 cai',
        keyReference: 'West, Fisiologia Respiratória, Cap. 9',
        query: 'lactate threshold ventilatory breakpoint anaerobic threshold exercise acid base'
      },
      {
        title: 'Hemodinâmica Pressórica no Exercício: PAS vs. PAD',
        concept: 'Comportamento divergente da pressão sistólica que sobe com o débito cardíaco ejetado versus pressão diastólica que se mantém ou cai devido à queda da RPT.',
        formulaOrLaw: 'PAS ↑↑ (pelo DC aumentado) + PAD ↔/↓ (pela RPT diminuída)',
        keyReference: 'Guyton & Hall, Cap. 85',
        query: 'blood pressure response dynamic exercise systolic diastolic systemic vascular resistance'
      }
    ]
  },

  {
    topicName: 'Choque e Fisiologia Extrema',
    phaseId: 'w5_p6',
    level: 30,
    worldId: 'w5',
    category: 'Integração Sistêmica & Fisiologia do Esforço',
    phaseTitle: 'Choque Circulatório, Hemorragia & Grandes Altitudes',
    aliases: ['Choque Circulatório', 'Choque Hipovolêmico', 'Choque Séptico', 'Grandes Altitudes', 'Aclimatação à Hipóxia'],
    specialistTitle: 'Guyton & West',
    specialistBadge: 'Fisiologia Extrema & Choque',
    guyton: {
      chapter: 'Unidade IV e VIII — Capítulos 24 e 44: Choque Circulatório e Fisiologia da Aviação, das Altitudes e do Espaço',
      pages: 'pp. 289-304, 557-570',
      summary: 'O CHOQUE CIRCULATÓRIO é a síndrome clínica grave de colapso hemodinâmico agudo caracterizada por inadequação generalizada do fluxo sanguíneo em nutrir os tecidos celulares com oxigênio e remover metabólitos, culminando em disfunção celular difusa e acidose lática profunda. Classificação hemodinâmica dos 4 tipos de choque: 1) CHOQUE HIPOVOLÊMICO (hemorragia aguda maciça, desidratação extrema, grandes queimaduras): perda crítica de volume intravascular com queda da pré-carga, do débito cardíaco e das pressões de enchimento; a resposta neuro-humoral compensatória é imediata e intensa: descarga simpática adrenérgica em massa (taquicardia, vasoconstrição periférica intensa com pele fria e pegajosa), ativação do SRAA (retenção de Na+ e água) e secreção de vasopressina (ADH); 2) CHOQUE CARDIOGÊNICO (infarto agudo extenso, miocardite): falência intrínseca da bomba miocárdica com DC baixo e pressões de enchimento altas (congestão pulmonar); 3) CHOQUE OBSTRUTIVO (embolia pulmonar maciça, tamponamento cardíaco, pneumotórax hipertensivo): bloqueio mecânico ao fluxo; 4) CHOQUE DISTRIBUTIVO (Sepse grave, Anafilaxia, Choque Neurogênico): vasodilatação arteriolar periférica descontrolada com colapso da Resistência Periférica Total (o choque séptico apresenta pele inicialmente quente com débito cardíaco hiperdinâmico e má distribuição da microcirculação).',
      keyPoint: 'Choque hipovolêmico = RPT alta e débito baixo (pele fria e pegajosa); Choque séptico distributivo = RPT extremamente baixa por vasodilatação mediada por citocinas (pele quente).'
    },
    berne: {
      chapter: 'Capítulo 20: Fisiopatologia do Choque Irreversível e Lesão por Isquemia-Reperfusão',
      pages: 'pp. 372-386',
      summary: 'Berne & Levy detalha a transição entre as fases do choque: 1) Choque Compensado: as alças de feedback negativo (barorreflexo, SRAA, transudação reversa transcapilar) mantêm a perfusão dos órgãos vitais (cérebro e coronárias) em detrimento de órgãos esplâncnicos e pele; 2) Choque Progressivo e Irreversível: a isquemia celular sustentada priva os tecidos de ATP, desligando a Na+/K+ ATPase (as células sofrem tumefação e lise); o endotélio capilar sofre necrose com extravasamento maciço de plasma; as toxinas bacterianas e citocinas inflamatórias (TNF-alfa, IL-1, óxido nítrico sintase induzível iNOS) causam paralisia vasomotora terminal refratária à noradrenalina, evoluindo para Síndrome de Disfunção de Múltiplos Órgãos (SDMO) e morte.',
      keyPoint: 'No choque irreversível, a falência da Na+/K+ ATPase e a produção maciça de NO endotelial paralisam a resposta vasomotora, tornando a hipotensão refratária.'
    },
    costanzo: {
      chapter: 'Capítulo 3: Fisiologia Cardiovascular — Resposta Integrada à Hemorragia Aguda',
      pages: 'pp. 172-178',
      summary: 'Costanzo disseca os mecanismos compensatórios sequenciais disparados após a perda de 1.000 a 1.500 mL de sangue (Choque Classe III): 1) Barorreflexo arterial imediato em segundos (taquicardia, vasoconstrição esplâncnica e renal); 2) Reabsorção transcapilar de líquido intersticial ("autotransfusão" em minutos: a vasoconstrição arteriolar derruba a pressão hidrostática capilar Pc, de modo que a pressão oncótica πc atrai passivamente mais de 1 litro de fluido do interstício para dentro dos capilares); 3) Ativação do SRAA (angiotensina II vasoconstritora e aldosterona que retém sódio); 4) Secreção de ADH ativada por barorreceptores de baixa pressão atriais, promovendo reabsorção renal de água livre.',
      keyPoint: 'Na hemorragia, a queda da pressão hidrostática capilar faz o líquido do interstício ser puxado para os capilares, recompondo a volemia (autotransfusão).'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 9: Resposta à Altitude Extrema e Hipóxia Hipobárica',
      pages: 'pp. 146-160',
      summary: 'John B. West explica as etapas integradas de ACLIMATAÇÃO A GRANDES ALTITUDES (acima de 4.000 metros, onde a fração de oxigênio do ar continua sendo 21%, mas a pressão barométrica cai de 760 para ~460 mmHg, derrubando a PO2 inspirada): 1) Resposta Imediata (minutos a horas): hipóxia alveolar estimula os corpos carotídeos a deflagrar HIPERVENTILAÇÃO AGUDA; isso expulsa CO2 e gera ALCALOSE RESPIRATÓRIA aguda (que freia temporariamente o centro respiratório bulbar); 2) Resposta Subaguda (2 a 5 dias): os rins compensam a alcalose excretando ativamente bicarbonato na urina, normalizando o pH do líquor e permitindo que a hiperventilação se torne sustentada e profunda; 3) Resposta Hematológica Crônica (2 a 3 semanas): a hipóxia renal continuada estimula a síntese maciça de ERITROPOIETINA (EPO), elevando o hematócrito de 45% para até 60-65% (POLIGLOBULIA ADAPTATIVA DE ALTITUDE), o que restaura o conteúdo arterial de oxigênio (CaO2) para níveis normais ou superiores aos do nível do mar.',
      keyPoint: 'Aclimatação à altitude: hiperventilação imediata (gera alcalose respiratória), compensação renal com perda urinária de bicarbonato em dias e poliglobulia por EPO em semanas.'
    },
    openstax: {
      section: 'Chapter 20: Blood Vessels — Section 20.6: Circulatory Shock and Adaptations',
      summary: 'OpenStax ilustra o ciclo vicioso do choque circulatório não tratado: hipotensão -> isquemia miocárdica -> queda adicional do débito -> acidose lática -> depressão vasomotora e morte celular.',
      keyPoint: 'O tratamento do choque hipovolêmico exige infusão intravenosa imediata de cristaloides aquecidos e transfusão de hemoderivados guiada por metas.'
    },
    merck: {
      section: 'Terapia Intensiva e Emergência — Manejo do Choque Séptico, Hipovolêmico e Mal das Altitudes',
      summary: 'O Manual MSD estabelece o protocolo de ressuscitação hemodinâmica na sepse: coleta de lactato sérico e hemoculturas, antibióticos de amplo espectro na 1ª hora, ressuscitação volêmica com cristaloide (30 mL/kg em 3 horas) e noradrenalina precoce como vasopressor de escolha para restaurar a PAM acima de 65 mmHg. Detalha o Mal Agudo das Montanhas e o Edema Pulmonar de Grande Altitude (HAPE), tratado com descida imediata e oxigênio.',
      keyPoint: 'Na sepse com hipotensão refratária a volume, a Noradrenalina é o vasopressor de primeira linha para restabelecer a PAM em 65 mmHg.'
    },
    researchTopics: [
      {
        title: 'Fisiopatologia dos 4 Tipos de Choque Circulatório',
        concept: 'Diferenciação hemodinâmica entre choque hipovolêmico, cardiogênico, obstrutivo e distributivo com base em débito cardíaco, resistência vascular sistêmica e saturação venosa.',
        formulaOrLaw: 'Choque Hipovolêmico (DC ↓, RPT ↑) vs. Choque Séptico Distributivo (DC ↑/normal, RPT ↓↓)',
        keyReference: 'Guyton & Hall, Cap. 24',
        query: 'circulatory shock classification hypovolemic cardiogenic septic distributive systemic vascular resistance'
      },
      {
        title: 'Autotransfusão Transcapilar e Alça SRAA na Hemorragia',
        concept: 'Mecanismo físico no qual a vasoconstrição arteriolar diminui a pressão hidrostática capilar, permitindo que a pressão oncótica absorva fluido intersticial para dentro do leito vascular.',
        formulaOrLaw: 'Vasoconstrição Arteriolar -> Pc capilar cai -> Influxo Líquido Intersticial para o Sangue',
        keyReference: 'Costanzo, Cap. 3',
        query: 'hemorrhagic shock compensatory mechanisms transcapillary refill raas baroreflex'
      },
      {
        title: 'Etapas Integradas de Aclimatação à Grande Altitude',
        concept: 'Sequência cronológica adaptativa em hipóxia hipobárica: hiperventilação carotídea imediata, compensação renal da alcalose em 48-72h e eritropoiese maciça em 3 semanas.',
        formulaOrLaw: 'Hipóxia Hipobárica -> Hiperventilação -> Bicarbonatúria Renal -> Poliglobulia via EPO',
        keyReference: 'West, Fisiologia Respiratória, Cap. 9',
        query: 'high altitude acclimatization hypoxic hyperventilation respiratory alkalosis polycythemia epo'
      },
      {
        title: 'Manejo do Choque Séptico e Vasopressores (Noradrenalina)',
        concept: 'Restabelecimento do tônus vasomotor na vasodilatação mediada por citocinas e óxido nítrico com agentes alfa-1 agonistas seletivos para restaurar a pressão de perfusão crítica.',
        formulaOrLaw: 'Noradrenalina: Agonismo Alfa-1 (Vasoconstrição Sistêmica) + Beta-1 Moderado -> PAM ≥ 65 mmHg',
        keyReference: 'Berne & Levy, Cap. 20',
        query: 'septic shock resuscitation norepinephrine vasopressors systemic vascular resistance surviving sepsis'
      }
    ]
  }
];
