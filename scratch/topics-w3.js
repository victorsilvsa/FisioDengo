// Mundo 3: Fluxo Sanguíneo e Sistema Cardiovascular (Níveis 13 a 18)
module.exports = [
  {
    topicName: 'Hemodinâmica e Resistência',
    phaseId: 'w3_p1',
    level: 13,
    worldId: 'w3',
    category: 'Sistema Cardiovascular',
    phaseTitle: 'Hemodinâmica & Resistência Vascular',
    aliases: ['Hemodinâmica e Poiseuille', 'Resistência Vascular', 'Lei de Poiseuille', 'Fluxo Laminar'],
    specialistTitle: 'Berne & Levy',
    specialistBadge: 'Biofísica Hemodinâmica',
    guyton: {
      chapter: 'Unidade IV: A Circulação — Capítulo 14: Visão Geral da Circulação; Biofísica da Pressão, do Fluxo e da Resistência',
      pages: 'pp. 161-176',
      summary: 'Guyton & Hall estabelece as leis físicas fundamentais que regem a circulação sanguínea. O fluxo sanguíneo (Q) através de um leito vascular é diretamente proporcional à diferença de pressão hidráulica (gradiente de pressão, ΔP = P1 - P2) e inversamente proporcional à Resistência Vascular (R): Q = ΔP / R (análogo biológico da Lei de Ohm). O fluxo laminar é caracterizado por camadas concêntricas cilíndricas com velocidade parabólica máxima no centro do vaso e atrito mínimo na parede endotelial. Quando a velocidade é excessivamente alta, há estenose valvar ou a viscosidade do sangue diminui (como na anemia profunda), o fluxo torna-se turbulento, gerando turbilhões e vibrações acústicas audíveis (sopros cardíacos e ruídos de Korotkoff na aferição da pressão).',
      keyPoint: 'O fluxo é gerado pela diferença de pressão (ΔP) dividida pela resistência (R). Fluxo turbulento gera sopros cardíacos audíveis pelo estetoscópio.'
    },
    berne: {
      chapter: 'Capítulo 17: Hemodinâmica e a Lei de Poiseuille',
      pages: 'pp. 290-310',
      summary: 'Berne & Levy detalha a dedução da Lei de Hagen-Poiseuille para o fluxo laminar em tubos rígidos: R = (8 * η * L) / (π * r^4), onde η é a viscosidade do sangue, L o comprimento do vaso e r o raio interno do vaso. Consequentemente, o fluxo é expresso por Q = (ΔP * π * r^4) / (8 * η * L). Como a resistência vascular é inversamente proporcional à QUARTA POTÊNCIA DO RAIO (r^4), pequenas alterações vasomotoras no diâmetro do vaso provocam alterações astronômicas na resistência e no fluxo. Se uma arteríola sofre vasoconstrição e seu raio diminui pela metade (1/2), sua resistência vascular individual aumenta 16 vezes (2^4 = 16) e o fluxo cai para 1/16 do valor original.',
      keyPoint: 'A dependência da resistência em relação à quarta potência do raio (1/r^4) confere às arteríolas musculares o papel de torneiras reguladoras do fluxo orgânico.'
    },
    costanzo: {
      chapter: 'Capítulo 3: Fisiologia Cardiovascular — Relação entre Pressão, Fluxo e Resistência',
      pages: 'pp. 115-125',
      summary: 'Costanzo compara a organização dos vasos sanguíneos: 1) Circuitos em Série (ex: artéria renal -> arteríola aferente -> capilares glomerulares -> arteríola eferente -> capilares peritubulares): a resistência total é a soma algébrica direta das resistências individuais (R_total = R1 + R2 + ...), de modo que a constrição de qualquer segmento eleva a resistência de todo o circuito; 2) Circuitos em Paralelo (a circulação sistêmica dos principais órgãos: cerebral, coronariana, renal, gastrointestinal, muscular e cutânea): a resistência total é dada por 1/R_total = 1/R1 + 1/R2 + ..., o que assegura que a resistência periférica total (RPT) seja sempre MENOR do que a resistência de qualquer leito individual, permitindo a regulação independente do fluxo a cada órgão sem desestabilizar os outros.',
      keyPoint: 'Os órgãos estão dispostos em paralelo: o fechamento das arteríolas de um órgão desvia o fluxo para os outros sem colapsar a circulação.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 17: Biofísica do Sistema Vascular e Número de Reynolds',
      pages: 'pp. 410-432',
      summary: 'Boron formaliza o Número de Reynolds (Re): Re = (v * D * ρ) / η, onde v é a velocidade do sangue, D o diâmetro vascular, ρ a densidade do sangue e η a viscosidade plasmática. Quando Re ultrapassa 2.000, o fluxo transita de laminar para turbulento. Demonstra que a anemia acentuada reduz a viscosidade (η cai pelo hematócrito baixo), elevando o número de Reynolds e precipitando sopros sistólicos de ejeção inocentes em pacientes jovens com coração funcionalmente sadio.',
      keyPoint: 'Anemia reduz a viscosidade sanguínea, elevando o Número de Reynolds acima de 2.000 e deflagrando fluxo turbulento audível (sopro funcional).'
    },
    openstax: {
      section: 'Chapter 20: The Cardiovascular System: Blood Vessels — Section 20.2: Blood Flow, Blood Pressure, and Resistance',
      summary: 'OpenStax classifica a árvore vascular funcionalmente: artérias condutoras elásticas (aorta, reservatório de pressão Windkessel), arteríolas de distribuição (vasos de resistência), capilares (vasos de troca com fluxo lento) e vênulas/veias (vasos de capacitância contendo 64% da volemia corporal total).',
      keyPoint: 'As arteríolas concentram o maior gradiente de queda pressórica do sistema, sendo o sítio anatômico primário da Resistência Periférica Total (RPT).'
    },
    merck: {
      section: 'Cardiologia — Fisiopatologia da Hipertensão Arterial e Aterosclerose',
      summary: 'O Manual MSD correlaciona a Lei de Poiseuille com a gênese da hipertensão arterial essencial: o remodelamento hipertrófico da parede arteriolar com espessamento da túnica média reduz o raio luminal basal, elevando dramaticamente a RPT e sobrecarregando o ventrículo esquerdo.',
      keyPoint: 'O tratamento farmacológico com vasodilatadores (bloqueadores dos canais de cálcio e IECAs) atua relaxando o tônus arteriolar para restaurar o raio.'
    },
    researchTopics: [
      {
        title: 'Lei de Poiseuille e Resistência à 4ª Potência do Raio',
        concept: 'Formulação matemática hidrodinâmica que comprova que o diâmetro luminal das arteríolas musculares é a variável mais poderosa e sensível de regulação da resistência e da perfusão tecidual.',
        formulaOrLaw: 'Resistência Vascular: R = (8 * η * L) / (π * r^4)',
        keyReference: 'Guyton & Hall, Cap. 14',
        query: 'poiseuille law vascular resistance vessel radius fourth power hemodynamics'
      },
      {
        title: 'Circuitos em Série vs. Paralelo na Circulação Sistêmica',
        concept: 'Arquitetura hidrostática comparativa: leitos viscerais em paralelo reduzem a resistência periférica total e permitem controle autorregulatório independente de cada órgão.',
        formulaOrLaw: '1 / RPT = 1 / R_cerebral + 1 / R_coronária + 1 / R_renal + 1 / R_esplâncnica',
        keyReference: 'Costanzo, Cap. 3',
        query: 'parallel series vascular resistance systemic circulation organ blood flow'
      },
      {
        title: 'Fluxo Laminar vs. Turbulento e Número de Reynolds',
        concept: 'Transição biofísica entre o fluxo silencioso em camadas de cisalhamento e o regime turbulento ruidoso dependente da velocidade, diâmetro vascular e viscosidade sanguínea.',
        formulaOrLaw: 'Re = (v * D * ρ) / η (Re > 2.000 prediz turbulência e sopro acústico)',
        keyReference: 'Berne & Levy, Cap. 17',
        query: 'reynolds number laminar turbulent blood flow vascular bruits anemia'
      },
      {
        title: 'Efeito Windkessel da Aorta e Complacência Arterial',
        concept: 'Capacidade elástica das grandes artérias elásticas de se distenderem na sístole absorvendo energia cinética ventricular e recolherem-se elasticamente na diástole, mantendo fluxo sanguíneo capilar contínuo.',
        formulaOrLaw: 'Complacência Arterial: C = ΔV / ΔP (Diminui com o envelhecimento e aterosclerose)',
        keyReference: 'Boron & Boulpaep, Cap. 17',
        query: 'windkessel effect aortic compliance pulse pressure aging atherosclerosis'
      }
    ]
  },

  {
    topicName: 'Eletrofisiologia Cardíaca',
    phaseId: 'w3_p2',
    level: 14,
    worldId: 'w3',
    category: 'Sistema Cardiovascular',
    phaseTitle: 'Condução Elétrica & Nó AV',
    aliases: ['Condução Cardíaca', 'Nó Sinoatrial', 'Nó Atrioventricular', 'Potencial Marcapasso', 'Fibras de Purkinje'],
    specialistTitle: 'Berne & Levy',
    specialistBadge: 'Eletrofisiologia Miocárdica',
    guyton: {
      chapter: 'Unidade III: O Coração — Capítulo 10: Ritmo e Condução Excitatória do Coração',
      pages: 'pp. 117-128',
      summary: 'O sistema excito-condutor cardíaco é responsável pela geração rítmica espontânea e condução sequencial rápida do impulso elétrico para todas as câmaras cardíacas: 1) NÓ SINOATRIAL (Nó SA, marcapasso fisiológico natural localizado no sulco terminal do átrio direito, disparando 60 a 100 bpm em virtude de sua fase 4 de despolarização espontânea mais rápida); 2) Vias internodais atriais e Feixe de Bachmann; 3) NÓ ATRIOVENTRICULAR (Nó AV, no triângulo de Koch no assoalho atrial direito); 4) Feixe de His; 5) Ramos direito e esquerdo do feixe; 6) Rede subendocárdica de Fibras de Purkinje. O Nó AV impõe um RETARDO FISIOLÓGICO CRÍTICO de cerca de 0,09 a 0,12 segundos na condução do estímulo, decorrente de células de menor diâmetro com poucas junções comunicantes (gap junctions). Esse retardo é essencial porque assegura que os átrios completem totalmente sua contração mecânica ("chute atrial") e esvaziem seu sangue nos ventrículos ANTES que os ventrículos comecem sua sístole.',
      keyPoint: 'O retardo fisiológico no nó AV (~0,10 s) sincroniza o ciclo: garante o enchimento ventricular completo pelos átrios antes da sístole ventricular.'
    },
    berne: {
      chapter: 'Capítulo 14: Eletrofisiologia Cardíaca, Canais Funny (If) e Potenciais de Resposta Lenta',
      pages: 'pp. 235-256',
      summary: 'Berne & Levy estabelece a distinção eletrofisiológica entre: 1) Células de Resposta Rápida (miócitos atriais, ventriculares e Purkinje: fase 0 rápida mediada por canais de sódio Nav com platô na fase 2 mediado por canais de Ca2+ tipo L); 2) Células de Resposta Lenta / Células Marcapasso (Nó SA e Nó AV: não possuem canais de sódio rápidos funcionais; sua fase 0 lenta é mediada exclusivamente pela entrada de Ca2+ por canais tipo L). A despolarização diastólica lenta de repouso (fase 4 do nó SA) é impulsionada pela CORRENTE FUNNY (If), uma corrente mista de Na+/K+ carreada por canais HCN (Hyperpolarization-activated Cyclic Nucleotide-gated) que se abrem espontaneamente durante a hiperpolarização no final da fase 3.',
      keyPoint: 'A corrente funny (If, canais HCN) é ativada por hiperpolarização na fase 4 do nó SA, sendo a responsável biofísica pelo automatismo cardíaco.'
    },
    costanzo: {
      chapter: 'Capítulo 3: Eletrofisiologia Cardíaca — Modulação Autonômica Cronotrópica',
      pages: 'pp. 125-138',
      summary: 'Costanzo detalha a regulação cronotrópica autonômica do nó SA: 1) Estímulo Simpático (Noradrenalina e Adrenalina nos receptores beta-1 acoplados à proteína Gs): eleva o AMPc intracelular, que se liga diretamente aos canais HCN, acelerando a taxa de inclinação da fase 4 (mais Na+ entra via If) e aumentando a probabilidade de abertura de canais de Ca2+ tipo T e L; isso atinge o potencial limiar mais rapidamente, provocando TAQUICARDIA (efeito cronotrópico positivo); 2) Estímulo Parassimpático / Vagal (Acetilcolina nos receptores muscarínicos M2 acoplados à proteína Gi): reduz o AMPc e abre canais de K+ dependentes de acetilcolina (corrente I_K,ACh via subunidades beta-gama), hiperpolarizando o repouso e deprimindo a inclinação da fase 4, gerando BRADICARDIA (efeito cronotrópico negativo).',
      keyPoint: 'O tônus vagal parassimpático desacelera a inclinação da fase 4 no nó SA, mantendo a frequência cardíaca basal de repouso em ~70 bpm.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 21: Eletrofisiologia Cardíaca e Canais HCN',
      pages: 'pp. 480-504',
      summary: 'Boron aborda a farmacologia da Ivabradina: bloqueador seletivo e específico da corrente If dos canais HCN no nó sinoatrial. A ivabradina reduz de forma dose-dependente a frequência cardíaca em repouso e esforço sem interferir na contratilidade ventricular (inotrópico nulo) ou na pressão arterial, demonstrando a exclusividade da corrente If no automatismo.',
      keyPoint: 'Ivabradina bloqueia seletivamente a corrente If no nó SA, desacelerando o coração sem afetar o inotropismo ventricular.'
    },
    openstax: {
      section: 'Chapter 19: The Cardiovascular System: The Heart — Section 19.2: Cardiac Muscle and Electrical Activity',
      summary: 'OpenStax compara a velocidade de condução do impulso ao longo do sistema: rápida nos feixes atriais (1 m/s), extremamente lenta no nó AV (0,05 m/s) e ultrarrápida nas fibras de Purkinje (4 m/s), permitindo despolarização quase síncrona de ambos os ventrículos do ápice para a base.',
      keyPoint: 'Fibras de Purkinje conduzem a 4 m/s (80 vezes mais rápido que o nó AV) para ejetar o sangue eficazmente na sístole.'
    },
    merck: {
      section: 'Arritmias Cardíacas — Bloqueios Atrioventriculares (BAV de 1º, 2º e 3º Grau)',
      summary: 'O Manual MSD correlaciona disfunções do nó AV: BAV de 1º grau (prolongamento fixo do retardo AV com intervalo PR > 0,20 s); BAV de 2º grau Mobitz I / Wenckebach (prolongamento progressivo do PR até uma onda P não ser conduzida); BAV de 2º grau Mobitz II (falha abrupta infranodal com alto risco de progressão); BAV de 3º grau ou Bloqueio Cardíaco Total (dissociação atrioventricular completa com necessidade de implante de marca-passo definitivo de emergência).',
      keyPoint: 'No BAV total, átrios e ventrículos batem independentemente; o ritmo de escape ventricular intrínseco sustenta apenas 30 a 40 bpm.'
    },
    researchTopics: [
      {
        title: 'Corrente Funny (If) e Canais HCN no Automatismo Cardíaco',
        concept: 'Corrente mista de influxo catiônico ativada por hiperpolarização diastólica terminal, regulada por nucleotídeos cíclicos e responsável pelo potencial marcapasso espontâneo do nó sinoatrial.',
        formulaOrLaw: 'Canais HCN4: Ativação por Hiperpolarização + Modulação por AMPc',
        keyReference: 'Berne & Levy, Cap. 14',
        query: 'funny current if hcn channels pacemaker potential sinoatrial node'
      },
      {
        title: 'Bases Fisiológicas do Retardo no Nó Atrioventricular',
        concept: 'Mecanismo ultraestrutural de retardo elétrico (~0,10 s) por miócitos de pequeno calibre e baixa densidade de conexinas 43, permitindo o esvaziamento atrial pré-sistólico.',
        formulaOrLaw: 'Velocidade de Condução no Nó AV: ~0,05 m/s (vs. 4 m/s em Purkinje)',
        keyReference: 'Guyton & Hall, Cap. 10',
        query: 'atrioventricular node delay physiological significance atrial kick gap junctions'
      },
      {
        title: 'Modulação Cronotrópica Autonômica Simpática e Vagal',
        concept: 'Controle da frequência de disparo sinusal por receptores beta-1 adrenérgicos (Gs -> ↑ AMPc -> ↑ If) e muscarínicos M2 colinérgicos (Gi -> ↓ AMPc e ativação de canais GIRK/I_K,ACh).',
        formulaOrLaw: 'Simpático: Inclinação da Fase 4 ↑; Parassimpático: Hiperpolarização + Fase 4 ↓',
        keyReference: 'Costanzo, Cap. 3',
        query: 'autonomic regulation heart rate beta adrenergic muscarinic acetylcholine girk'
      },
      {
        title: 'Velocidade do Sistema Purkinje e Despolarização Síncrona',
        concept: 'Expressão massiva de conexinas 40 e canais de sódio rápidos Nav1.5 no feixe de His e fibras de Purkinje, assegurando ativação mecânica síncrona e coordenada do ápice para a base.',
        formulaOrLaw: 'Ativação Ventricular Apicobasal: Condução a 4 metros por segundo',
        keyReference: 'Boron & Boulpaep, Cap. 21',
        query: 'purkinje fibers conduction velocity syncytium apical to basal activation'
      }
    ]
  },

  {
    topicName: 'Eletrocardiograma (ECG)',
    phaseId: 'w3_p3',
    level: 15,
    worldId: 'w3',
    category: 'Sistema Cardiovascular',
    phaseTitle: 'Eletrocardiograma (ECG): Ondas e Intervalos',
    aliases: ['Eletrocardiograma', 'ECG', 'Onda P', 'Complexo QRS', 'Onda T', 'Intervalo PR', 'Segmento ST'],
    specialistTitle: 'Costanzo & Berne',
    specialistBadge: 'Eletrocardiografia Médica',
    guyton: {
      chapter: 'Unidade III — Capítulos 11 e 12: O Eletrocardiograma Normal e Interpretação Eletrocardiográfica',
      pages: 'pp. 129-148',
      summary: 'O Eletrocardiograma (ECG) de superfície de 12 derivações registra os vetores de correntes elétricas extracelulares geradas pela despolarização e repolarização sucessivas do sincício miocárdico, conduzidas através dos fluidos corporais até eletrodos na pele. Componentes essenciais do traçado: 1) ONDA P: despolarização de ambos os átrios (inicia no átrio direito e segue para o esquerdo; duração normal < 0,11 s); 2) INTERVALO PR: medido do início da onda P até o início do complexo QRS (representa o tempo de condução desde o nó SA através do nó AV até as fibras de Purkinje; duração normal: 0,12 a 0,20 segundos ou 3 a 5 quadradinhos na velocidade de 25 mm/s); 3) COMPLEXO QRS: despolarização rápida de ambos os ventrículos (duração normal: 0,08 a 0,10 s; > 0,12 s indica bloqueio de ramo); a repolarização atrial ocorre simultaneamente, mas fica encoberta pelo QRS; 4) SEGMENTO ST: linha isoelétrica entre o fim da onda S e o início da onda T, correspondendo à fase 2 de platô sustentado do potencial de ação ventricular (quando todo o ventrículo está homogeneamente despolarizado); 5) ONDA T: repolarização ventricular rápida (fase 3); 6) INTERVALO QT: do início do QRS ao fim da onda T (representa a sístole elétrica ventricular total; corrigido pela fórmula de Bazett, normal < 0,44 s).',
      keyPoint: 'O intervalo PR mede a condução atrioventricular (0,12 a 0,20 s); o segmento ST reflete a fase 2 de platô ventricular; o QRS reflete a despolarização ventricular (< 0,10 s).'
    },
    berne: {
      chapter: 'Capítulo 15: O Eletrocardiograma e a Teoria do Dipolo Vetorial de Einthoven',
      pages: 'pp. 258-278',
      summary: 'Berne & Levy detalha o Triângulo de Einthoven e as derivações do plano frontal (bipolares I, II, III e unipolares aumentadas aVR, aVL, aVF) e horizontal (precordiais V1 a V6). Um vetor elétrico que se propaga em direção ao polo positivo de uma derivação gera uma deflexão POSITIVA para cima; se propaga afastando-se do polo positivo, gera deflexão NEGATIVA para baixo; se propaga perpendicularmente, gera deflexão ISODIFÁSICA bifásica. A onda T é normalmente positiva nas mesmas derivações em que o QRS é positivo porque a repolarização ventricular progride do epicárdio para o endocárdio (sentido inverso ao da despolarização), gerando um vetor com o polo positivo apontado para o eletrodo.',
      keyPoint: 'A onda T é concordante com o QRS porque o epicárdio repolariza antes do endocárdio, invertendo a direção do dipolo da repolarização.'
    },
    costanzo: {
      chapter: 'Capítulo 3: O Eletrocardiograma e Correlações Eletrofisiológicas',
      pages: 'pp. 138-146',
      summary: 'Costanzo estabelece o pareamento exato entre as fases do potencial de ação celular miocárdico e o ECG de superfície: 1) Fase 0 (despolarização rápida por Na+) -> Complexo QRS; 2) Fase 2 (platô com influxo de Ca2+ balanceado pelo efluxo de K+) -> Segmento ST isoelétrico; 3) Fase 3 (repolarização rápida por efluxo de K+) -> Onda T; 4) Fase 4 (potencial de repouso isoelétrico) -> Linha de base TP. Destaca as alterações eletrolíticas: HIPERCALEMIA gera ondas T apiculadas e simétricas ("em tenda") e perda de ondas P; HIPOCALEMIA gera ondas T achatadas, infradesnivelamento de ST e o aparecimento de Onda U proeminente.',
      keyPoint: 'Segmento ST isoelétrico = fase 2 de platô ventricular. Isquemia miocárdica desequilibra esse platô e causa desnível de ST.'
    },
    specialistSource: {
      chapter: 'Ganong — Fisiologia Médica — Capítulo 28: Eletrocardiografia e Isquemia Miocárdica',
      pages: 'pp. 530-548',
      summary: 'Ganong analisa a corrente de lesão na isquemia transmural: miócitos isquêmicos sem ATP não conseguem manter o potencial de repouso normal, permanecendo parcialmente despolarizados e gerando um vetor de corrente contínua entre a área isquêmica e o tecido normal circundante, o que se traduz no traçado do ECG como SUPRADESNIVELAMENTO DO SEGMENTO ST (IAM com supra de ST - IAMCSST), marcador mandatório de reperfusão coronariana de emergência.',
      keyPoint: 'Supradesnivelamento do segmento ST reflete corrente de lesão transmural aguda por oclusão coronariana total.'
    },
    openstax: {
      section: 'Chapter 19: The Heart — Section 19.2: Electrocardiogram',
      summary: 'OpenStax ilustra o papel milimetrado padronizado de ECG: cada quadradinho pequeno mede 1 mm x 1 mm (0,04 segundos no eixo horizontal e 0,1 mV no eixo vertical na velocidade padrão de 25 mm/s e calibração de 10 mm/mV).',
      keyPoint: 'Na velocidade padrão de 25 mm/s: 1 quadradinho pequeno = 0,04 s; 1 quadrado grande (5 pequenos) = 0,20 s.'
    },
    merck: {
      section: 'Cardiologia — Síndromes Coronarianas Agudas e Arritmias Ventriculares no ECG',
      summary: 'O Manual MSD discute o diagnóstico diferencial no ECG de dor torácica aguda: diferenciação entre IAMCSST (angioplastia primária em < 90 minutos), IAM sem supra de ST (infradesnível de ST ou inversão de onda T) e pericardite aguda (supradesnível de ST difuso com concavidade para cima e infradesnível de PR).',
      keyPoint: 'Infradesnível do segmento PR associado a supra de ST côncavo generalizado é patognomônico de pericardite aguda.'
    },
    researchTopics: [
      {
        title: 'Intervalo PR e Tempo de Trânsito Atrioventricular',
        concept: 'Medição da latência de condução desde a primeira despolarização atrial até o início da ativação dos miócitos ventriculares basais, variando normalmente de 0,12 a 0,20 segundos.',
        formulaOrLaw: 'PR Normal: 120 a 200 ms (3 a 5 quadradinhos de 1 mm a 25 mm/s)',
        keyReference: 'Guyton & Hall, Cap. 11',
        query: 'pr interval atrioventricular conduction electrocardiogram normal limits'
      },
      {
        title: 'Segmento ST Isoelétrico e Fase 2 de Platô Miocárdico',
        concept: 'Correspondência biofísica exata entre o equilíbrio iônico de influxo de cálcio por canais tipo L e efluxo de potássio na fase 2 e a ausência de gradientes de voltagem no eletrocardiograma.',
        formulaOrLaw: 'Segmento ST Isoelétrico = Gradiente de Voltagem Transventricular Nulo (Fase 2)',
        keyReference: 'Costanzo, Cap. 3',
        query: 'st segment isoelectric plateau phase 2 ventricular action potential'
      },
      {
        title: 'Teoria do Dipolo de Einthoven e Gênese da Onda T',
        concept: 'Propagação vetorial do dipolo elétrico no plano frontal e horizontal: por que a repolarização epicárdica precoce preserva a mesma polaridade positiva da onda T e do QRS.',
        formulaOrLaw: 'Einthoven: Derivação II = Derivação I + Derivação III',
        keyReference: 'Berne & Levy, Cap. 15',
        query: 'einthoven triangle vector dipole theory t wave concordance ventricular repolarization'
      },
      {
        title: 'Corrente de Lesão Isquêmica e Supradesnível de ST',
        concept: 'Despolarização diastólica persistente de miócitos isquêmicos depletados de ATP, gerando gradiente de voltagem contínuo de repouso expresso no ECG como desvio de ST.',
        formulaOrLaw: 'Corrente de Lesão Miocárdica Transmural -> Supradesnivelamento de ST no ECG',
        keyReference: 'Ganong, Cap. 28',
        query: 'current of injury st elevation myocardial infarction ischemia transmembrane potential'
      }
    ]
  },

  {
    topicName: 'Ciclo Cardíaco e Valvas',
    phaseId: 'w3_p4',
    level: 16,
    worldId: 'w3',
    category: 'Sistema Cardiovascular',
    phaseTitle: 'Ciclo Cardíaco & Dinâmica Valvar',
    aliases: ['Ciclo Cardíaco', 'Fases do Ciclo Cardíaco', 'Bulhas Cardíacas', 'Diagrama de Wiggers', 'Contração Isovolumétrica'],
    specialistTitle: 'Costanzo & Boron',
    specialistBadge: 'Mecânica Ventricular',
    guyton: {
      chapter: 'Unidade III — Capítulo 9: O Músculo Cardíaco; O Coração como Bomba e a Função das Valvas Cardíacas',
      pages: 'pp. 103-116',
      summary: 'O Ciclo Cardíaco é a sequência integrada de eventos elétricos, mecânicos, pressóricos, volumétricos e sonoros que ocorrem a cada batimento cardíaco, composto por duas fases primárias: SÍSTOLE (contração e ejeção ventricular) e DIÁSTOLE (relaxamento e enchimento ventricular). É dividido classicamente em 7 fases descritas no célebre DIAGRAMA DE WIGGERS: 1) Sístole Atrial ("chute atrial", contribui com 15-20% do volume ventricular de repouso); 2) Contração Ventricular Isovolumétrica: inicia com o FECHAMENTO DAS VALVAS ATRIOVENTRICULARES (Mitral e Tricúspide), que produz a PRIMEIRA BULHA CARDÍACA (B1 - "tum"). Como as valvas semilunares aórtica e pulmonar ainda estão fechadas, os ventrículos contraem-se como câmaras fechadas: a pressão intraventricular dispara verticalmente (de 10 para 80 mmHg no VE) sem nenhuma mudança no volume de sangue contido; 3) Ejeção Rápida (quando a pressão ventricular esquerda supera a pressão diastólica da aorta de 80 mmHg, a valva aórtica se abre abruptamente e o sangue é ejetado); 4) Ejeção Reduzida; 5) Relaxamento Ventricular Isovolumétrico: inicia quando a pressão aórtica supera a pressão ventricular e o sangue reflui ligeiramente, gerando o FECHAMENTO DAS VALVAS SEMILUNARES (Aórtica e Pulmonar), que produz a SEGUNDA BULHA CARDÍACA (B2 - "tá"). Todas as quatro valvas cardíacas voltam a estar simultaneamente fechadas e a pressão ventricular despenca; 6) Enchimento Ventricular Rápido (abertura da mitral e influxo passivo maciço); 7) Enchimento Reduzido (diástase).',
      keyPoint: 'B1 ("tum") é produzida pelo fechamento das valvas mitral e tricúspide no início da contração isovolumétrica; B2 ("tá") pelo fechamento das semilunares no início do relaxamento isovolumétrico.'
    },
    berne: {
      chapter: 'Capítulo 18: Mecânica Cardíaca e a Curva Pressão-Volume Ventricular',
      pages: 'pp. 330-348',
      summary: 'Berne & Levy detalha a Alça Pressão-Volume Ventricular Esquerda (curva PV): 1) VDF (Volume Diastólico Final, ~120 mL): volume de sangue no ventrículo logo antes do início da sístole; 2) VSF (Volume Sistólico Final, ~50 mL): volume de sangue remanescente que sobra no ventrículo ao final da ejeção sistólica; 3) VOLUME SISTÓLICO (VS = VDF - VSF ≈ 70 mL): o volume efetivamente ejetado na aorta a cada batimento; 4) FRAÇÃO DE EJEÇÃO (FE = VS / VDF = 70 / 120 ≈ 58-60%, normal entre 55% e 70%). O ventrículo sadio NUNCA se esvazia totalmente.',
      keyPoint: 'Fração de Ejeção normal = 55% a 70%. Fração de Ejeção < 40% define Insuficiência Cardíaca com Fração de Ejeção Reduzida (ICFER).'
    },
    costanzo: {
      chapter: 'Capítulo 3: Eventos do Ciclo Cardíaco e as Quatro Bulhas',
      pages: 'pp. 146-154',
      summary: 'Costanzo detalha a fisiologia das bulhas acústicas: B1 (fechamento mitral/tricúspide, melhor audível no ápice cardíaco); B2 (fechamento aórtico/pulmonar, melhor audível na base; exibe desdobramento fisiológico na inspiração porque a maior pressão intratorácica negativa eleva o retorno venoso direito, atrasando o fechamento da valva pulmonar P2); B3 (Terceira Bulha, proto-diastólica: vibração rápida das paredes ventriculares durante o enchimento rápido passivo; pode ser normal em crianças e atletas, mas em adultos indica sobrecarga de volume ventricular na insuficiência cardíaca); B4 (Quarta Bulha, pré-sistólica: vibração provocada pela contração atrial contra um ventrículo hipertrófico e rígido de baixa complacência; sempre patológica).',
      keyPoint: 'O desdobramento fisiológico de B2 na inspiração decorre do retardo no fechamento da valva pulmonar provocado pelo aumento do retorno venoso às câmaras direitas.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 22: Acoplamento Excitação-Contração Miocárdico',
      pages: 'pp. 510-532',
      summary: 'Boron explica o mecanismo de Liberação de Cálcio Induzida por Cálcio (CICR): o potencial de ação ventricular despolariza os túbulos T, abrindo canais de cálcio voltagem-dependentes Cav1.2 tipo L (receptores DHPR); o influxo de uma pequena quantidade de cálcio "gatilho" ativa os canais receptores de rianodina (RyR2) na membrana do retículo sarcoplasmático (RS), liberando uma enxurrada massiva de Ca2+ estocado no sarcoplasma para ativar a troponina C e disparar o golpe de força da actina-miosina. Na diástole, o relaxamento ativo requer o bombeamento do cálcio de volta ao RS pela bomba SERCA2a (regulada pelo fosfolamban) e para fora da célula pelo trocador NCX.',
      keyPoint: 'O relaxamento ventricular na diástole é um processo ativo dependente de ATP (requer que a bomba SERCA2a recapte o cálcio para o retículo).'
    },
    openstax: {
      section: 'Chapter 19: The Heart — Section 19.3: Cardiac Cycle',
      summary: 'OpenStax correlaciona o traçado elétrico do ECG com o ciclo mecânico: a onda P precede a sístole atrial; o QRS precede imediatamente a contração isovolumétrica e B1; a onda T precede o relaxamento isovolumétrico e B2.',
      keyPoint: 'O evento elétrico sempre antecede o evento mecânico correspondente em alguns milissegundos.'
    },
    merck: {
      section: 'Valvopatias Cardíacas — Estenose Aórtica, Insuficiência Mitral e Sopros',
      summary: 'O Manual MSD classifica os sopros cardíacos no ciclo: Estenose Aórtica (sopro sistólico ejetivo em diamante, crescendo-decrescendo); Insuficiência Mitral (sopro holossistólico em platô que irradia para a axila); Estenose Mitral (ruflar diastólico com estalido de abertura pós-B2); Insuficiência Aórtica (sopro diastólico aspirativo decrescente com pressão de pulso divergente).',
      keyPoint: 'Sopro sistólico entre B1 e B2 reflete estenose aórtica ou insuficiência mitral; sopro diastólico entre B2 e B1 indica estenose mitral ou insuficiência aórtica.'
    },
    researchTopics: [
      {
        title: 'Fases Isovolumétricas da Sístole e Diástole',
        concept: 'Etapas de transição funcional nas quais as 4 valvas cardíacas estão simultaneamente ocluídas: a pressão intraventricular varia drasticamente sem alteração no volume de sangue cavitário.',
        formulaOrLaw: 'Contração Isovolumétrica: Mitral Fechada + Aórtica Fechada -> dP/dt Máximo',
        keyReference: 'Guyton & Hall, Cap. 9',
        query: 'isovolumetric contraction relaxation cardiac cycle wiggers diagram intraventricular pressure'
      },
      {
        title: 'Curva Pressão-Volume (Loop PV) e Fração de Ejeção',
        concept: 'Representação geométrica do trabalho sistólico ventricular mapeando os pontos de abertura e fechamento valvar, volumes diastólico e sistólico final e complacência miocárdica.',
        formulaOrLaw: 'Fração de Ejeção: FE = (VDF - VSF) / VDF * 100% (Normal: 55 a 70%)',
        keyReference: 'Berne & Levy, Cap. 18',
        query: 'pressure volume loop end diastolic volume stroke volume ejection fraction'
      },
      {
        title: 'Mecanismo de Gênese das Bulhas B1, B2, B3 e B4',
        concept: 'Vibrações mecânicas teciduais decorrentes da desaceleração abrupta do fluxo sanguíneo contra valvas ocluídas (B1 e B2) e turbilhonamento durante o enchimento ventricular (B3 e B4).',
        formulaOrLaw: 'B1 (Fechamento AV) -> Sístole -> B2 (Fechamento Semilunar) -> Diástole',
        keyReference: 'Costanzo, Cap. 3',
        query: 'heart sounds s1 s2 s3 s4 physiological splitting aortic pulmonary valve'
      },
      {
        title: 'Acoplamento Excitação-Contração e Receptor RyR2 (CICR)',
        concept: 'Mecanismo molecular no qual o influxo de cálcio via canais tipo L despolarizados deflagra a abertura amplificada de receptores de rianodina e liberação de cálcio do retículo sarcoplasmático.',
        formulaOrLaw: 'Liberação de Cálcio Induzida por Cálcio: Ca2+_influxo -> RyR2 -> Liberação Ca2+_RS',
        keyReference: 'Boron & Boulpaep, Cap. 22',
        query: 'excitation contraction coupling calcium induced calcium release ryanodine receptor serca'
      }
    ]
  },

  {
    topicName: 'Débito Cardíaco e Frank-Starling',
    phaseId: 'w3_p5',
    level: 17,
    worldId: 'w3',
    category: 'Sistema Cardiovascular',
    phaseTitle: 'Débito Cardíaco & Frank-Starling',
    aliases: ['Débito Cardíaco', 'Lei de Frank-Starling', 'Pré-Carga', 'Pós-Carga', 'Contratilidade'],
    specialistTitle: 'Berne & Levy',
    specialistBadge: 'Mecânica Cardiovascular',
    guyton: {
      chapter: 'Unidade IV — Capítulos 20 e 21: Débito Cardíaco, Retorno Venoso e sua Regulação',
      pages: 'pp. 241-260',
      summary: 'O Débito Cardíaco (DC) é o volume total de sangue bombeado por cada ventrículo na circulação por minuto, sendo o produto da Frequência Cardíaca (FC) pelo Volume Sistólico (VS): DC = FC * VS. Em um adulto jovem sadio em repouso: DC = 72 bpm * 70 mL ≈ 5,0 L/min (Índice Cardíaco ≈ 3,0 L/min/m²). Em exercício físico vigoroso, o DC pode subir para 20 a 25 L/min em indivíduos normais e até 35 L/min em atletas de elite. O Volume Sistólico é governado por três determinantes independentes e interconectados: 1) PRÉ-CARGA (o estiramento das fibras miocárdicas ao final da diástole imposto pelo Volume Diastólico Final); 2) PÓS-CARGA (a tensão parietal ou carga contra a qual o miócito ventricular deve contrair-se para ejetar o sangue, determinada principalmente pela pressão arterial aórtica e resistência vascular periférica); 3) CONTRATILIDADE ou Inotropismo (a força intrínseca de contração do miocárdio para um determinado comprimento inicial de fibra, governada pela disponibilidade de Ca2+ citosólico estimulada pelo sistema simpático).',
      keyPoint: 'Débito Cardíaco = FC x VS (~5 L/min no repouso). O volume sistólico depende do trio: Pré-Carga, Pós-Carga e Contratilidade.'
    },
    berne: {
      chapter: 'Capítulo 18: Mecanismo de Frank-Starling e Curva de Função Ventricular',
      pages: 'pp. 336-352',
      summary: 'Berne & Levy enuncia com precisão a Lei de Frank-Starling do coração: dentro de limites fisiológicos normais, quanto maior o estiramento inicial das fibras ventriculares pelo volume de sangue no final da diástole (VDF), maior é a força mecânica de contração sistólica subsequente e maior o volume de sangue ejetado. As bases celulares e moleculares do Frank-Starling incluem: 1) Otimização da sobreposição entre os filamentos grossos de miosina e filamentos finos de actina no sarcômero (comprimento ideal do sarcômero de 2,2 μm); 2) Aumento da sensibilidade da Troponina C ao Cálcio ionizado decorrente do estiramento longitudinal (mecanossensibilidade molecular que diminui o espaçamento lateral interfilamentar).',
      keyPoint: 'A Lei de Frank-Starling garante que o débito do ventrículo esquerdo iguale exatamente o débito do ventrículo direito a cada minuto, impedindo congestão pulmonar ou sistêmica.'
    },
    costanzo: {
      chapter: 'Capítulo 3: Fisiologia Cardiovascular — Fatores que Afetam o Volume Sistólico',
      pages: 'pp. 154-162',
      summary: 'Costanzo sintetiza o efeito das variáveis na Curva de Frank-Starling (relação VDF vs. Volume Sistólico / Pressão): 1) Aumento da Contratilidade (Inotropismo positivo por estimulação simpática beta-1 ou digitálicos): translada a curva de função ventricular para CIMA e para a ESQUERDA (ejeta mais sangue para o mesmo VDF, elevando a fração de ejeção); 2) Depressão da Contratilidade (Insuficiência Cardíaca, hipóxia ou betabloqueadores): translada a curva para BAIXO e para a DIREITA (ejeta menos sangue e opera sob pressões diastólicas congestivas elevadas); 3) Aumento da Pós-Carga (estenose aórtica ou crise hipertensiva aguda): reduz o volume sistólico e aumenta o volume sistólico final residual.',
      keyPoint: 'Inotropismo positivo translada a curva de Starling para cima e esquerda; insuficiência cardíaca deprime a curva para baixo e direita.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 23: Regulação Integrada do Débito Cardíaco e Princípio de Fick',
      pages: 'pp. 535-555',
      summary: 'Boron detalha o Princípio de Fick para medição padrão-ouro do Débito Cardíaco in vivo: DC = VO2 / (CaO2 - CvO2), onde VO2 é o consumo corporal de oxigênio (mL/min), CaO2 o conteúdo de O2 do sangue arterial e CvO2 o conteúdo de O2 do sangue venoso misto na artéria pulmonar coletado por cateter de Swan-Ganz. Demonstra o diagrama de Guyton de acoplamento vascular: o ponto de equilíbrio operacional da circulação é a interseção exata entre a curva de função cardíaca de Starling e a curva de retorno venoso vascular.',
      keyPoint: 'Pelo Princípio de Fick: Débito Cardíaco = Consumo de O2 / Diferença Arteriovenosa de O2 (DC = VO2 / [CaO2 - CvO2]).'
    },
    openstax: {
      section: 'Chapter 19: The Heart — Section 19.4: Cardiac Physiology',
      summary: 'OpenStax ilustra o mecanismo de Starling no coração sadio e no coração dilatado de um paciente com miocardiopatia, onde o estiramento excessivo desengata a actina da miosina, derrubando a força contrátil.',
      keyPoint: 'O estiramento excessivo patológico das fibras miocárdicas além do comprimento ideal de 2,2 μm reduz o número de pontes cruzadas e causa falência de bomba.'
    },
    merck: {
      section: 'Cardiologia — Insuficiência Cardíaca Descompensada e Tratamento Farmacológico',
      summary: 'O Manual MSD correlaciona a pré-carga e a pós-carga no manejo da Insuficiência Cardíaca Congestiva (ICC): diuréticos de alça (furosemida) e nitratos reduzem a pré-carga excessiva, aliviando o edema pulmonar e a ortopneia; vasodilatadores arteriolares (hidralazina, inibidores da ECA) reduzem a pós-carga aórtica, aumentando o volume sistólico ejetado sem elevar o consumo miocárdico de oxigênio.',
      keyPoint: 'Reduzir a pós-carga com vasodilatadores permite ao ventrículo com insuficiência ejetar maior volume sistólico com menor esforço mecânico.'
    },
    researchTopics: [
      {
        title: 'Lei de Frank-Starling e Comprimento Sarcocelular',
        concept: 'Adaptação intrínseca heterométrica na qual o aumento da pré-carga diastólica alinha otimamente os filamentos de actina e miosina a 2,2 μm e aumenta a afinidade da troponina C ao cálcio.',
        formulaOrLaw: 'Força Contrátil ∝ Estiramento Diastólico das Fibras Ventriculares',
        keyReference: 'Guyton & Hall, Cap. 9',
        query: 'frank starling law mechanism length tension sarcomere cardiac muscle'
      },
      {
        title: 'Determinantes do Volume Sistólico: Pré-Carga, Pós-Carga e Inotropismo',
        concept: 'Interação hemodinâmica tripartite que governa o volume ejetado pelo ventrículo em cada ciclo e sua modulação por volume intravascular, tônus simpático e resistência aórtica.',
        formulaOrLaw: 'VS = VDF - VSF (Influenciado por Pré-Carga ↑, Pós-Carga ↓ e Inotropismo ↑)',
        keyReference: 'Costanzo, Cap. 3',
        query: 'stroke volume preload afterload inotropy ventricular performance'
      },
      {
        title: 'Equação de Fick para Medição do Débito Cardíaco',
        concept: 'Aplicação da conservação de massa do oxigênio molecular na circulação sistêmica para quantificação do débito cardíaco por cateterismo arterial e venoso misto.',
        formulaOrLaw: 'DC = Consumo Total de O2 (VO2) / (CaO2 - CvO2)',
        keyReference: 'Boron & Boulpaep, Cap. 23',
        query: 'fick principle cardiac output oxygen consumption arteriovenous oxygen difference'
      },
      {
        title: 'Curva de Guyton de Acoplamento Cardíaco-Vascular',
        concept: 'Equilíbrio mecânico entre a curva de função de bomba ventricular e a curva de complacência de retorno venoso sistêmico na determinação da pressão venosa central e débito.',
        formulaOrLaw: 'Ponto Operacional da Circulação: Retorno Venoso = Débito Cardíaco',
        keyReference: 'Guyton & Hall, Cap. 20',
        query: 'guyton venous return curve cardiac function vascular function equilibrium'
      }
    ]
  },

  {
    topicName: 'Barorreflexo e Regulação da PA',
    phaseId: 'w3_p6',
    level: 18,
    worldId: 'w3',
    category: 'Sistema Cardiovascular',
    phaseTitle: 'Barorreflexo & Regulação da Pressão Arterial',
    aliases: ['Barorreflexo', 'Controle Rápido da Pressão Arterial', 'Seio Carotídeo', 'Receptores de Estiramento', 'Hipotensão Postural'],
    specialistTitle: 'Ganong & Costanzo',
    specialistBadge: 'Controle Neural Autonômico',
    guyton: {
      chapter: 'Unidade IV — Capítulo 18: Regulação Nervosa da Circulação e Controle Rápido da Pressão Arterial',
      pages: 'pp. 215-228',
      summary: 'A Pressão Arterial Média (PAM ≈ Pressão Diastólica + 1/3 da Pressão de Pulso) é o produto do Débito Cardíaco pela Resistência Periférica Total: PAM = DC * RPT. O organismo dispõe de sistemas de controle temporalmente escalonados: regulação em segundos (sistema neural por reflexos barorreceptores e quimiorreceptores), regulação em minutos a horas (sistema renina-angiotensina-aldosterona e vasopressina/ADH) e regulação em dias a longo prazo (balanço renal de sódio e água pelo mecanismo de natriurese e diurese por pressão). A ALÇA DO BARORREFLEXO ARTERIAL é o mecanismo mestre de controle rápido: mecanorreceptores de estiramento nas paredes do Seio Carotídeo (inervados pelo Nervo Glossofaríngeo, NC IX - nervo de Hering) e do Arco Aórtico (inervados pelo Nervo Vago, NC X) monitoram a pressão pulsátil e a PAM segundo a segundo. Quando a PAM se eleva, a distensão da parede vascular abre mecanocanais, aumentando a frequência de disparos aferentes em direção ao Núcleo do Trato Solitário (NTS) no bulbo cerebral.',
      keyPoint: 'O barorreflexo é o amortecedor de curto prazo da pressão arterial: elevações de PA aumentam os disparos aferentes ao bulbo, que estimula o tônus vagal e inibe o simpático.'
    },
    berne: {
      chapter: 'Capítulo 19: Controle Neural da Circulação Sistêmica e o Núcleo do Trato Solitário',
      pages: 'pp. 355-374',
      summary: 'Berne & Levy detalha a circuitaria sináptica bulbar: os sinais aferentes do NC IX e X ativam neurônios glutamatérgicos no Núcleo do Trato Solitário (NTS). O NTS envia projeções excitatórias para: 1) O Núcleo Ambíguo e Núcleo Motor Dorsal do Vago (ativação parassimpática parassimpática eferente para o nó SA, liberando acetilcolina e reduzindo a frequência cardíaca); 2) A Área Ventrolateral Caudal (CVLM), que por sua vez envia projeções inibitórias GABAérgicas para a Área Ventrolateral Rostral (RVLM). Como a RVLM é a fonte dos neurônios pré-ganglionares simpáticos vasoconstritores, sua inibição deprime o tônus simpático periférico, promovendo vasodilatação arteriolar sistêmica e venodilatação.',
      keyPoint: 'A ativação do NTS pelo barorreflexo excita neurônios inibitórios da CVLM, silenciando o centro simpático vasomotor RVLM e reduzindo a RPT.'
    },
    costanzo: {
      chapter: 'Capítulo 3: Fisiologia da Regulação Arterial e Resposta ao Ortostatismo',
      pages: 'pp. 162-170',
      summary: 'Costanzo explica a clássica Resposta ao Ortostatismo (mudança abrupta da posição deitada para a em pé): 1) A gravidade desloca passivamente 500 a 800 mL de sangue para as veias dos membros inferiores; 2) O retorno venoso ao átrio direito cai abruptamente, reduzindo a pressão venosa central, o VDF e o débito cardíaco; 3) A PAM cai transientemente; 4) Menor estiramento dos barorreceptores reduz seus disparos aferentes para o NTS; 5) O bulbo desinibe o sistema simpático e reduz o tônus parassimpático; 6) RESPOSTA EFERENTE REFLEXA IMEDIATA: taquicardia reflexa (aumento da FC), aumento da contratilidade miocárdica (aumento do VS), vasoconstrição arteriolar esplâncnica e muscular (aumento da RPT) e venoconstrição (aumento do retorno venoso), restaurando a pressão arterial e prevenindo a isquemia cerebral transitória e a síncope.',
      keyPoint: 'Ao ficar em pé: a queda do retorno venoso reduz os disparos do barorreceptor, desinibindo o simpático para gerar taquicardia e vasoconstrição reflexas em 2 segundos.'
    },
    specialistSource: {
      chapter: 'Ganong — Fisiologia Médica — Capítulo 33: Regulação Cardiovascular Central e Resetting Barorreceptor',
      pages: 'pp. 630-650',
      summary: 'Ganong explica o fenômeno do "Resetting" (Reajuste) dos Barorreceptores: os barorreceptores adaptam-se rapidamente e reajustam seu ponto de disparo em 24 a 48 horas de pressão cronicamente alterada. Em um paciente que se torna cronicamente hipertenso (PAM de 140 mmHg), os barorreceptores passam a reconhecer os 140 mmHg como sua "nova linha de base normal", disparando suas respostas como se essa pressão alta fosse a correta. Por essa razão, os barorreceptores NÃO curam nem revertem a hipertensão crônica mantida, sendo um sistema estritamente regulador de curto prazo.',
      keyPoint: 'Os barorreceptores sofrem "resetting" em 1 a 2 dias de hipertensão contínua, sendo incapazes de controlar a pressão arterial a longo prazo.'
    },
    openstax: {
      section: 'Chapter 20: Blood Vessels — Section 20.4: Homeostatic Regulation of the Vascular System',
      summary: 'OpenStax ilustra o trajeto das vias aferentes dos barorreceptores carotídeos (nervo de Hering, ramo do glossofaríngeo) e aórticos (nervo vago) convergindo para a medula oblonga (bulbo).',
      keyPoint: 'O seio carotídeo é sensível tanto a elevações quanto a quedas na PA; o arco aórtico responde primariamente a elevações pressóricas.'
    },
    merck: {
      section: 'Cardiologia — Hipotensão Ortostática, Síncope Vasovagal e Disautonomias',
      summary: 'O Manual MSD aborda o diagnóstico da Hipotensão Postural (queda na PAS ≥ 20 mmHg ou na PAD ≥ 10 mmHg dentro de 3 minutos após ficar em pé): falha do arco reflexo barorreceptor (neuropatia autonômica diabética, idosos acamados, hipovolemia ou uso de vasodilatadores e alfabloqueadores). Detalha a Síncope Vasovagal: hiperativação reflexa parassimpática paradoxal provocando bradicardia intensa e vasodilatação com perda transitória da consciência.',
      keyPoint: 'Na síncope vasovagal, um estímulo emocional ou ortostático prolongado dispara descarga vagal paradoxal com bradicardia e hipotensão abruptas.'
    },
    researchTopics: [
      {
        title: 'Mecanotransdução no Seio Carotídeo e Nervo de Hering',
        concept: 'Ativação de canais iônicos mecano-sensíveis Piezo1 e Piezo2 nas terminações nervosas livres da adventícia do seio carotídeo em resposta à deformação elástica circunferencial da parede arterial.',
        formulaOrLaw: 'Frequência de Disparos Aferentes (Hz) ∝ PAM e dP/dt (Taxa de Variação Pressórica)',
        keyReference: 'Guyton & Hall, Cap. 18',
        query: 'carotid sinus baroreceptors mechanotransduction piezo channels hering nerve'
      },
      {
        title: 'Circuitaria Bulbar NTS-CVLM-RVLM',
        concept: 'Integração neuroquímica no tronco encefálico no qual a excitação glutamatérgica do NTS aciona interneurônios inibitórios GABAérgicos na CVLM que suprimem a atividade simpática basal da RVLM.',
        formulaOrLaw: 'NTS (+ Glu) -> CVLM (+ GABA) -> Inibição da RVLM -> ↓ Eferência Simpática',
        keyReference: 'Berne & Levy, Cap. 19',
        query: 'nucleus tractus solitarius cvlm rvlm baroreflex central pathways gaba'
      },
      {
        title: 'Fisiologia do Ortostatismo e Prevenção de Síncope',
        concept: 'Compensação hemodinâmica imediata à redução de retorno venoso gravitacional via desinibição simpática, elevando frequência cardíaca, volume sistólico e tônus arteriolar.',
        formulaOrLaw: 'Ortostatismo -> ↓ Retorno Venoso -> ↓ Disparo Barorreceptor -> ↑ Tônus Simpático Imediato',
        keyReference: 'Costanzo, Cap. 3',
        query: 'orthostatic stress compensation venous pooling baroreflex response syncope'
      },
      {
        title: 'Resetting Barorreceptor e Limitações no Longo Prazo',
        concept: 'Adaptação temporal dos mecanorreceptores e vias sinápticas centrais após 24-48 horas de hipertensão contínua, deslocando o ponto de ajuste operacional para patamares elevados.',
        formulaOrLaw: 'Resetting Agudo e Crônico: Deslocamento do Set-Point Pressórico para Cima',
        keyReference: 'Ganong, Cap. 33',
        query: 'baroreceptor resetting chronic hypertension long term blood pressure control'
      }
    ]
  }
];
