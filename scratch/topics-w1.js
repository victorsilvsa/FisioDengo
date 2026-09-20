// Mundo 1: Homeostase e Fisiologia Celular (Níveis 1 a 6)
module.exports = [
  {
    topicName: 'Homeostase e Feedback',
    phaseId: 'w1_p1',
    level: 1,
    worldId: 'w1',
    category: 'Fisiologia Celular & Meio Interno',
    phaseTitle: 'Homeostase & Alça de Controle',
    aliases: ['Homeostase', 'Feedback Negativo', 'Alça de Controle'],
    specialistTitle: 'Boron & Boulpaep',
    specialistBadge: 'Fisiologia Molecular',
    guyton: {
      chapter: 'Unidade I: Introdução à Fisiologia — Capítulo 1: Organização Funcional do Corpo Humano e Controle do "Meio Interno"',
      pages: 'pp. 3-14',
      summary: 'Claude Bernard introduziu o conceito seminal de milieu intérieur (meio interno), o líquido extracelular (LEC) que banha e nutre todas as células do corpo. Walter Cannon cunhou o termo homeostase para descrever a manutenção ativa de condições quase constantes nesse meio interno. Guyton & Hall detalha que a imensa maioria dos sistemas fisiológicos opera sob alças de retroalimentação negativa (feedback negativo): uma perturbação inicial é detectada por receptores (sensores), que enviam sinais aferentes a um centro de integração; este compara o valor monitorado com um ponto de ajuste pré-fixado (set-point) e dispara uma resposta eferente via efetores que inverte o sentido da alteração, retornando a variável à faixa de normalidade.',
      keyPoint: 'O feedback negativo inverte o desvio e sustenta a homeostase. O feedback positivo amplifica o desvio e é reservado a eventos de conclusão rápida (parto, coagulação e potencial de ação).'
    },
    berne: {
      chapter: 'Capítulo 1: Princípios Celulares e Controle Homeostático',
      pages: 'pp. 2-18',
      summary: 'Berne & Levy aborda o controle homeostático sob o ponto de vista termodinâmico e biofísico: o organismo humano é um sistema aberto que troca matéria e energia com o meio ambiente, mantendo-se em estado estacionário dinâmico (steady state), e não em equilíbrio químico simples. A manutenção do estado estacionário consome constantemente energia livre (ATP). A obra formaliza o "ganho" da alça de controle (Gain = Correção / Erro residual), demonstrando matematicamente que quanto maior o ganho de um sistema regulador, mais eficaz é a sua capacidade de tamponar oscilações externas.',
      keyPoint: 'Homeostase é um estado estacionário dinâmico mantido com gasto contínuo de energia metabólica, e não um mero equilíbrio termodinâmico passivo.'
    },
    costanzo: {
      chapter: 'Capítulo 1: Fisiologia Celular — Alças de Retroalimentação',
      pages: 'pp. 1-6',
      summary: 'Costanzo disseca didaticamente os componentes universais da alça: Estímulo -> Receptor -> Via Aferente -> Centro de Controle -> Via Eferente -> Efetor -> Resposta. Exemplifica com clareza o reflexo barorreceptor para regulação da pressão arterial média e a alça endócrina glicose-insulina: quando a glicemia sobe, células beta pancreáticas atuam concomitantemente como sensor e centro integrador, secretando insulina para que fígado e músculos captem glicose, finalizando a alça.',
      keyPoint: 'A resposta do efetor desativa o estímulo que originalmente deflagrou a alça no feedback negativo.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 1: Fundamentos da Fisiologia Médica e Regulação Dinâmica',
      pages: 'pp. 3-12',
      summary: 'Boron & Boulpaep aprofunda o conceito de regulação antecipatória (feedforward control), no qual o sistema nervoso detecta um distúrbio iminente antes mesmo que o meio interno sofra alteração (ex: secreção cefálica de saliva e ácido gástrico ao ver ou cheirar alimento, e hiperventilação antecipatória pré-exercício físico), prevenindo o desvio homeostático antes de sua ocorrência.',
      keyPoint: 'O mecanismo de feedforward previne a alteração homeostática antes que ela ocorra, enquanto o feedback reage à alteração consumada.'
    },
    openstax: {
      section: 'Chapter 1: An Introduction to the Human Body — Section 1.5: Homeostasis',
      summary: 'OpenStax detalha os três componentes fundamentais da alça e apresenta diagramas comparativos entre feedback negativo (regulação térmica corporal) e feedback positivo (liberação de ocitocina pelas contrações uterinas no reflexo de Ferguson).',
      keyPoint: 'Sensor -> Integrador -> Efetor formam a arquitetura universal de controle biológico.'
    },
    merck: {
      section: 'Biologia dos Sistemas — Homeostase e Distúrbios Hidroeletrolíticos',
      summary: 'O Manual MSD enfatiza a homeostase clínica como a margem de sobrevivência dos pacientes críticos na UTI. Destaca que falhas no feedback negativo sobre o pH arterial ou osmolaridade sérica precipitam choque, convulsões e óbito rápido.',
      keyPoint: 'Toda doença clínica grave reflete o colapso de uma ou mais alças de controle homeostático.'
    },
    researchTopics: [
      {
        title: 'Alça de Controle Homeostático e Sensores',
        concept: 'Estrutura funcional composta por sensores específicos que detectam variações físicas ou químicas no LEC, vias aferentes neuronais ou hormonais, centros integradores que processam a magnitude do erro e vias eferentes que acionam efetores teciduais.',
        formulaOrLaw: 'Ganho da Alça = Correção Efetuada / Erro Residual',
        keyReference: 'Guyton & Hall, Cap. 1',
        query: 'homeostatic control loop sensor integrator effector gain'
      },
      {
        title: 'Feedback Negativo e Ponto de Ajuste (Set-Point)',
        concept: 'Mecanismo predominante na fisiologia no qual o sinal de saída da alça atua de forma oposta ao estímulo desencadeante, amortecendo flutuações e conservando a variável dentro de limites estreitos de compatibilidade com a vida.',
        formulaOrLaw: 'Resposta = - k * (Variável Real - SetPoint)',
        keyReference: 'Costanzo, Fisiologia, Cap. 1',
        query: 'negative feedback mechanisms physiological homeostasis set point'
      },
      {
        title: 'Feedback Positivo no Parto (Reflexo de Ferguson)',
        concept: 'Ciclo auto-amplificador no qual o estiramento da cérvice uterina pelo feto estimula a secreção de ocitocina pela neuro-hipófise, a qual intensifica as contrações miometriais, estirando ainda mais a cérvice até a expulsão completa do concepto.',
        formulaOrLaw: 'Amplificação Autocatalítica: dX/dt = + k * X',
        keyReference: 'Guyton & Hall, Cap. 83',
        query: 'oxytocin positive feedback ferguson reflex parturition'
      },
      {
        title: 'Controle Antecipatório (Feedforward) e Meio Interno',
        concept: 'Controle preditivo no qual o organismo inicia respostas fisiológicas adaptativas previamente ao surgimento da perturbação no LEC, utilizando pistas sensoriais ambientais ou comandos motores centrais.',
        formulaOrLaw: 'Regulação Preditiva Sem Erro Prévio',
        keyReference: 'Boron & Boulpaep, Cap. 1',
        query: 'feedforward control physiological homeostasis anticipation'
      }
    ]
  },

  {
    topicName: 'Membrana e Transporte Passivo',
    phaseId: 'w1_p2',
    level: 2,
    worldId: 'w1',
    category: 'Fisiologia Celular & Meio Interno',
    phaseTitle: 'Membrana & Transporte Passivo',
    aliases: ['Membrana Plasmática', 'Difusão Simples', 'Difusão Facilitada'],
    specialistTitle: 'Boron & Boulpaep',
    specialistBadge: 'Biofísica Celular',
    guyton: {
      chapter: 'Unidade I — Capítulo 4: Transporte de Substâncias Através das Membranas Celulares',
      pages: 'pp. 47-60',
      summary: 'A membrana celular consiste em uma bicamada lipídica hidrofóbica com proteínas integrais e periféricas inseridas. O transporte passivo ocorre sem consumo direto ou indireto de energia metabólica, impulsionado pela energia cinética térmica molecular inerente e pelo gradiente eletroquímico. A difusão simples independe de carreadores proteicos e sua taxa é diretamente proporcional à solubilidade lipídica do soluto e à área de membrana (gases O2, CO2, N2 e pequenas moléculas lipofílicas como anestésicos e esteroides). A difusão facilitada depende de proteínas carreadoras transmembrana (como os transportadores de glicose GLUT), exibindo características de saturação cinética (velocidade máxima Vmax), especificidade química e competição estérica entre análogos.',
      keyPoint: 'A difusão simples não satura; a difusão facilitada satura em Vmax porque o número de transportadores de membrana é finito.'
    },
    berne: {
      chapter: 'Capítulo 2: Transporte de Membrana e Biofísica da Permeabilidade',
      pages: 'pp. 20-38',
      summary: 'Berne & Levy quantifica os fluxos de difusão simples através da 1ª Lei de Fick: J = - P * A * (C1 - C2), onde P é o coeficiente de permeabilidade da membrana e A a área de superfície. O coeficiente de permeabilidade incorpora o coeficiente de partição óleo/água de Meyer-Overton, o coeficiente de difusão na membrana e a espessura da bicamada. Para a difusão facilitada, aplica-se a cinética de Michaelis-Menten: J = (Jmax * [S]) / (Km + [S]), demonstrando que a afinidade do carreador é expressa inversamente pelo Km.',
      keyPoint: 'Equação de Michaelis-Menten rege a difusão facilitada: em altas concentrações de soluto, o fluxo atinge o platô Jmax.'
    },
    costanzo: {
      chapter: 'Capítulo 1: Difusão Simples versus Facilitada',
      pages: 'pp. 6-12',
      summary: 'Costanzo compara didaticamente as características dos carreadores de difusão facilitada: 1) Estereoespecificidade (ex: GLUT transporta D-glicose, mas é incapaz de transportar L-glicose); 2) Saturação (a taxa máxima ocorre quando todos os sítios de ligação estão ocupados); 3) Competição (a presença de D-galactose reduz a taxa de transporte de D-glicose por ocupar competitivamente os sítios).',
      keyPoint: 'D-glicose entra nos eritrócitos por difusão facilitada via GLUT1, um transporte estéreo-específico e saturável.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 5: Mecanismos Moleculares de Transporte e Poros Celulares',
      pages: 'pp. 102-124',
      summary: 'Boron descreve as conformações moleculares alternantes do modelo rocker-switch em proteínas carreadoras: o sítio de ligação de alta afinidade expõe-se alternadamente ao fluido extracelular e ao citosol, sofrendo mudança conformacional termicamente ativada que permite o trânsito do soluto sem abertura contínua de um poro aquoso.',
      keyPoint: 'Transportadores carreadores operam por ciclos conformacionais alternantes, ao contrário dos canais que formam poros aquosos contínuos.'
    },
    openstax: {
      section: 'Chapter 3: The Cellular Level of Organization — Section 3.1: The Cell Membrane',
      summary: 'OpenStax ilustra o modelo do mosaico fluido de Singer e Nicolson, a presença de colesterol modulando a fluidez da membrana e a classificação de proteínas transmembrana multipasso em canais aquosos, carreadores e bombas.',
      keyPoint: 'Gases e lipídios cruzam a bicamada livremente; solutos polares e íons exigem carreadores ou canais proteicos.'
    },
    merck: {
      section: 'Farmacologia Básica — Absorção de Fármacos e Permeabilidade de Membrana',
      summary: 'O Manual MSD correlaciona a lipossolubilidade dos medicamentos com sua capacidade de atravessar a barreira hematoencefálica por difusão simples passiva, destacando que substâncias ionizadas ou hidrofílicas exigem sistemas transportadores específicos.',
      keyPoint: 'Fármacos lipofílicos atravessam barreiras celulares com muito mais facilidade do que compostos hidrofílicos polares.'
    },
    researchTopics: [
      {
        title: 'Difusão Facilitada e Cinética Vmax (GLUT)',
        concept: 'Transporte passivo carreado que não hidrolisa ATP, no qual a taxa de influxo de glicose atinge platô quando a concentração do substrato satura todos os sítios ativos do carreador na membrana.',
        formulaOrLaw: 'J = (Vmax * [S]) / (Km + [S])',
        keyReference: 'Guyton & Hall, Cap. 4',
        query: 'facilitated diffusion glucose transporter saturation kinetics vmax'
      },
      {
        title: 'Lei de Fick da Difusão de Membrana',
        concept: 'Princípio biofísico que estabelece que o fluxo difusional líquido de um soluto apolar através da bicamada lipídica é proporcional à área, ao gradiente de concentração e inversamente proporcional à espessura da membrana.',
        formulaOrLaw: 'J = - D * A * (dC / dx)',
        keyReference: 'Berne & Levy, Cap. 2',
        query: 'fick law membrane permeability diffusion flux coefficient'
      },
      {
        title: 'Canais Iônicos de Vazamento (Leak Channels)',
        concept: 'Poros proteicos transmembrana constitutivamente abertos no repouso, altamente seletivos para o potássio (K2P), que permitem o fluxo passivo de íons a favor do gradiente eletroquímico.',
        formulaOrLaw: 'I = g * (Vm - Eion)',
        keyReference: 'Boron & Boulpaep, Cap. 6',
        query: 'leak potassium channels resting membrane conductance'
      },
      {
        title: 'Seletividade e Filtro de Desidratação de Íons',
        concept: 'Arranjo coordenado de átomos de oxigênio de carbonila no filtro de seletividade do canal de K+ que mimetiza a esfera de hidratação do íon, permitindo passagem rápida e seletiva apenas para o potássio desidratado.',
        formulaOrLaw: 'Filtro de Seletividade de MacKinnon',
        keyReference: 'Boron & Boulpaep, Cap. 6',
        query: 'ion channel selectivity filter hydration shell potassium channel'
      }
    ]
  },

  {
    topicName: 'Tonicidade e Osmose',
    phaseId: 'w1_p3',
    level: 3,
    worldId: 'w1',
    category: 'Fisiologia Celular & Meio Interno',
    phaseTitle: 'Osmose, Tonicidade & Hemácias',
    aliases: ['Osmose', 'Tonicidade', 'Osmolaridade'],
    specialistTitle: 'Boron & Boulpaep',
    specialistBadge: 'Biofísica Osmótica',
    guyton: {
      chapter: 'Unidade V: Os Líquidos Corporais e os Rins — Capítulo 25: Compartimentos Líquidos Corporais, Osmose e Tonicidade',
      pages: 'pp. 305-322',
      summary: 'Guyton & Hall esclarece com máxima clareza a distinção médica fundamental entre osmolaridade e tonicidade. A osmolaridade quantifica o número total de partículas de soluto osmoticamente ativas por litro de solução (mOsm/L), independentemente de serem permeáveis ou impermeáveis à membrana. A tonicidade, por sua vez, é uma propriedade biológica relativa que descreve a capacidade de uma solução de alterar o volume celular em estado estacionário, e depende EXCLUSIVAMENTE da concentração de solutos NÃO-PENETRANTES (impermeáveis, como Na+ e glicose fora da célula, e K+ e proteínas no interior). Soluções com solutos penetrantes (como a ureia) são isosmolares, mas se comportam como funcionalmente hipotônicas, causando tumefação celular.',
      keyPoint: 'Tonicidade é determinada estritamente por solutos não-penetrantes. Solução de ureia 300 mOsm/L é isosmolar, mas hipotônica e causará hemólise.'
    },
    berne: {
      chapter: 'Capítulo 2: Forças Osmóticas e Equilíbrio Hídrico de Van t Hoff',
      pages: 'pp. 32-44',
      summary: 'Berne & Levy detalha a Lei de Van t Hoff para a pressão osmótica teórica: π = i * C * R * T, onde i é o fator de dissociação de van t Hoff (ex: i=1,8 para NaCl). Introduz o Coeficiente de Reflexão de Staverman (σ): se σ = 1, a membrana é totalmente impermeável ao soluto (soluto não-penetrante; reflete 100% das moléculas gerando pressão osmótica efetiva máxima π_efetiva = σ * π); se σ = 0, a membrana é totalmente permeável ao soluto (como a ureia), de modo que a pressão osmótica efetiva é zero.',
      keyPoint: 'Pressão Osmótica Efetiva = σ * π. Se o coeficiente de reflexão σ for zero, o soluto não gera força osmótica para reter água.'
    },
    costanzo: {
      chapter: 'Capítulo 1: Balanço Hídrico, Osmolaridade e Comportamento Eritrocitário',
      pages: 'pp. 12-18',
      summary: 'Costanzo expõe os três cenários clássicos do teste de fragilidade osmótica eritrocitária: 1) Solução Isotônica (NaCl 0,9% ~300 mOsm/L): sem fluxo líquido de água, hemácia preserva seu formato bicôncavo; 2) Solução Hipotônica (água pura ou NaCl 0,45%): a água entra por osmose a favor de seu gradiente químico, a célula incha e sofre hemólise; 3) Solução Hipertônica (NaCl 3%): a água sai da célula para o meio de maior tonicidade, provocando retração e crenação celular.',
      keyPoint: 'Água destilada intravenosa causa hemólise aguda maciça com liberação de hemoglobina livre, oclusão tubular renal e morte.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 5: Biofísica das Aquaporinas e Transporte Transcelular de Água',
      pages: 'pp. 115-122',
      summary: 'Boron detalha a biologia molecular das aquaporinas (AQP1 nos eritrócitos e túbulo proximal renal; AQP2 regulada por ADH no ducto coletor), proteínas tetrâmeras que contêm canais de água com resíduos de asparagina que impedem a passagem de prótons (H+), preservando o gradiente eletroquímico.',
      keyPoint: 'Aquaporinas realizam transporte facilitado de água em massa com velocidade de até 3 bilhões de moléculas por segundo por canal.'
    },
    openstax: {
      section: 'Chapter 3: The Cellular Level of Organization — Section 3.1: Tonicity',
      summary: 'OpenStax apresenta micrografias de varredura demonstrando hemácias normais bicôncavas, crenadas em meio hipertônico e rompidas por hemólise em meio hipotônico.',
      keyPoint: 'Meio hipotônico = edema celular e lise; Meio hipertônico = desidratação celular e retração.'
    },
    merck: {
      section: 'Distúrbios Hidroeletrolíticos — Hiponatremia, Hipernatremia e Reposição com Cristaloides',
      summary: 'O Manual MSD discute os riscos da correção rápida da hiponatremia e hipernatremia. Destaca a Síndrome de Desmielinização Osmótica (mielinólise pontina central) se a hiponatremia for corrigida com NaCl hipertônico de modo precipitado.',
      keyPoint: 'A tonicidade do plasma é governada pelo sódio; oscilações osmóticas bruscas lesam irreversivelmente neurônios encefálicos.'
    },
    researchTopics: [
      {
        title: 'Osmolaridade vs. Tonicidade Celular',
        concept: 'Diferenciação crítica entre a concentração osmolar absoluta (todos os solutos) e a tonicidade efetiva exercida apenas por solutos não-penetrantes que forçam o deslocamento transmembrana de água.',
        formulaOrLaw: 'Tonicidade Efetiva = Σ (σ_i * C_i)',
        keyReference: 'Guyton & Hall, Cap. 25',
        query: 'osmolarity vs tonicity nonpenetrating solutes cell volume'
      },
      {
        title: 'Lei de Van t Hoff e Coeficiente de Reflexão (σ)',
        concept: 'Formulação matemática da pressão osmótica coligativa e o fator de correção de Staverman (σ), que varia de 0 (soluto permeável) a 1 (soluto estritamente impermeável).',
        formulaOrLaw: 'π_efetiva = σ * i * C * R * T',
        keyReference: 'Berne & Levy, Cap. 2',
        query: 'van t hoff osmotic pressure reflection coefficient staverman'
      },
      {
        title: 'Fragilidade Osmótica e Hemólise Eritrocitária',
        concept: 'Comportamento da membrana eritrocitária sob estresse osmótico decrescente, no qual o influxo maciço de água supera o limite elástico do citoesqueleto de espectrina, lisando a célula.',
        formulaOrLaw: 'Ponto Crítico de Hemólise (~150 mOsm/L)',
        keyReference: 'Costanzo, Cap. 1',
        query: 'erythrocyte osmotic fragility hypotonic hemolysis spectrin'
      },
      {
        title: 'Aquaporinas e Condutância Hídrica de Membrana',
        concept: 'Estrutura e seletividade dos canais proteicos de aquaporina que aceleram a velocidade de osmose em ordens de magnitude em comparação com a difusão simples pela bicamada lipídica.',
        formulaOrLaw: 'Fluxo Osmótico de Água: Jv = Lp * A * Δπ_efetiva',
        keyReference: 'Boron & Boulpaep, Cap. 5',
        query: 'aquaporin water permeability osmotic water flux membrane'
      }
    ]
  },

  {
    topicName: 'Transporte Ativo e Bomba Na+/K+',
    phaseId: 'w1_p4',
    level: 4,
    worldId: 'w1',
    category: 'Fisiologia Celular & Meio Interno',
    phaseTitle: 'Transporte Ativo & Bomba Na+/K+',
    aliases: ['Transporte Ativo', 'Bomba de Sódio e Potássio', 'Na+/K+ ATPase', 'Transporte Ativo Secundário'],
    specialistTitle: 'Boron & Boulpaep',
    specialistBadge: 'Bioenergética Celular',
    guyton: {
      chapter: 'Unidade I — Capítulo 4: Transporte Ativo Primário e Secundário através das Membranas',
      pages: 'pp. 52-62',
      summary: 'Guyton & Hall classifica o transporte ativo em Primário e Secundário. O transporte ativo primário acopla diretamente a hidrólise enzimática do ATP à translocação de solutos contra gradientes eletroquímicos íngremes. O exemplo arquetípico é a Na+/K+-ATPase presente na membrana de praticamente todas as células de mamíferos: para cada molécula de ATP hidrolisada, bombeia ativamente 3 íons Na+ para o meio extracelular e 2 íons K+ para o meio intracelular. Como há saída líquida de 1 carga positiva por ciclo, a bomba é eletrogênica, contribuindo diretamente com -4 a -5 mV para o potencial de membrana em repouso e, primordialmente, criando os gradientes iônicos que energizam o potencial de ação e todo o transporte ativo secundário (cotransporte Na+/glicose via SGLT e contratransporte Na+/Ca2+ via NCX).',
      keyPoint: 'A Na+/K+-ATPase bombeia 3 Na+ para fora e 2 K+ para dentro por ATP hidrolisado, sustentando o meio intracelular rico em K+ e pobre em Na+.'
    },
    berne: {
      chapter: 'Capítulo 2: Bombas do Tipo P e Transporte Secundário Energizado',
      pages: 'pp. 40-52',
      summary: 'Berne & Levy detalha o ciclo enzimático de Post-Albers da Na+/K+-ATPase (uma ATPase do tipo P com intermediário fosforilado em aspartato): o estado conformacional E1 tem alta afinidade por Na+ intracelular; a fosforilação pelo ATP converte-a no estado E2 com alta afinidade por K+ extracelular. A ouabaína e a digoxina ligam-se especificamente à face extracelular do estado E2, inibindo a bomba e acumulando Na+ no citosol.',
      keyPoint: 'Digitálicos inibem a Na+/K+-ATPase, elevando o Na+ intracelular, o que reduz o efluxo de Ca2+ via NCX e aumenta a contratilidade miocárdica.'
    },
    costanzo: {
      chapter: 'Capítulo 1: Transporte Ativo Primário e Secundário',
      pages: 'pp. 14-22',
      summary: 'Costanzo diferencia claramente: Primário (gasto direto de ATP: Na+/K+-ATPase, Ca2+-ATPase do retículo sarcoplasmático SERCA, H+/K+-ATPase das células parietais gástricas); Secundário (não hidrolisa ATP diretamente; aproveita a energia potencial eletroquímica do Na+ estabelecida previamente pela Na+/K+-ATPase). Divide o secundário em Simporte/Cotransporte (Na+ e soluto na mesma direção: SGLT1 e SGLT2 para glicose; NKCC2 na alça de Henle) e Antiporte/Contratransporte (direções opostas: trocador Na+/H+ NHE1 e trocador Na+/Ca2+ NCX).',
      keyPoint: 'Se a Na+/K+-ATPase for bloqueada, os transportadores secundários (SGLT e NCX) cessam por perda do gradiente de sódio.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 5: Transportadores Ativos da Família SLC e P-ATPases',
      pages: 'pp. 125-144',
      summary: 'Boron descreve as famílias de carreadores SLC (Solute Carrier Family), mapeando a estequiometria do cotransporte Na+/Glicose (SGLT1 transporta 2 Na+ para 1 glicose, gerando acúmulo de glicose de até 30.000 vezes contra gradiente no epitélio intestinal; SGLT2 transporta 1 Na+ para 1 glicose no túbulo proximal renal).',
      keyPoint: 'Inibidores de SGLT2 (gliflozinas) bloqueiam a reabsorção tubular renal de glicose e são fármacos de primeira linha no diabetes e insuficiência cardíaca.'
    },
    openstax: {
      section: 'Chapter 3: The Cellular Level of Organization — Section 3.1: Active Transport',
      summary: 'OpenStax ilustra o ciclo funcional de fosforilação e desfosforilação da bomba de sódio-potássio e o funcionamento dos simportes e antiportes secundários nas microvilosidades do intestino delgado.',
      keyPoint: 'A bomba Na+/K+ consome cerca de 30% a 70% de todo o ATP de repouso do cérebro e dos rins.'
    },
    merck: {
      section: 'Farmacologia Cardiovascular — Inotrópicos Digitálicos e Homeostase do Cálcio',
      summary: 'O Manual MSD aborda o mecanismo farmacológico dos glicosídeos cardíacos (digoxina) na insuficiência cardíaca: inibição moderada da bomba Na+/K+ eleva o sódio citosólico, desacelera o trocador NCX (3 Na+ para 1 Ca2+), retém cálcio no miócito e aumenta a força contrátil sistólica (efeito inotrópico positivo).',
      keyPoint: 'Intoxicação digitálica bloqueia excessivamente a Na+/K+ ATPase, gerando arritmias ventriculares graves por sobrecarga de cálcio.'
    },
    researchTopics: [
      {
        title: 'Mecanismo Eletrogênico da Na+/K+ ATPase',
        concept: 'Estequiometria assimétrica de translocação iônica (3 Na+ exportados para cada 2 K+ importados) gerando corrente hiperpolarizante líquida e mantendo o gradiente osmótico contra tumefação celular.',
        formulaOrLaw: '3 Na+_in + 2 K+_out + ATP -> 3 Na+_out + 2 K+_in + ADP + Pi',
        keyReference: 'Guyton & Hall, Cap. 4',
        query: 'sodium potassium pump electrogenic stoichiometry 3 na 2 k atp hydrolysis'
      },
      {
        title: 'Inibição por Digitálicos (Digoxina e Ouabaína)',
        concept: 'Acoplamento da inibição da Na+/K+-ATPase à redução na taxa de efluxo de cálcio via trocador Na+/Ca2+ (NCX), elevando a concentração diastólica de cálcio no retículo sarcoplasmático.',
        formulaOrLaw: 'Inibição da Bomba -> ↑ [Na+]i -> ↓ Atividade do NCX -> ↑ [Ca2+]i',
        keyReference: 'Costanzo, Cap. 1',
        query: 'ouabain digoxin na k atpase inhibition inotropic effect calcium exchanger'
      },
      {
        title: 'Transporte Ativo Secundário: Cotransporte SGLT',
        concept: 'Utilização da energia potencial eletroquímica do gradiente de sódio criado pela bomba para impulsionar a captação de D-glicose contra seu gradiente de concentração no epitélio intestinal e renal.',
        formulaOrLaw: 'ΔG_transporte = R*T*ln([Glicose]i/[Glicose]e) + n*Δμ_Na',
        keyReference: 'Berne & Levy, Cap. 2',
        query: 'secondary active transport sodium glucose cotransporter sglt stoichiometry'
      },
      {
        title: 'Trocador Na+/H+ (NHE1) e Regulação do pH Intracelular',
        concept: 'Antiporte secundário vital que expulsa prótons (H+) em troca da entrada passiva de Na+, impedindo a acidificação citosólica prejudicial ao metabolismo celular.',
        formulaOrLaw: 'Antiporte Eletricamente Neutro: 1 Na+ entra : 1 H+ sai',
        keyReference: 'Boron & Boulpaep, Cap. 28',
        query: 'sodium hydrogen antiporter nhe1 intracellular ph regulation'
      }
    ]
  },

  {
    topicName: 'Potenciais Bioelétricos e Canais Iônicos',
    phaseId: 'w1_p5',
    level: 5,
    worldId: 'w1',
    category: 'Fisiologia Celular & Meio Interno',
    phaseTitle: 'Potenciais Bioelétricos & Canais Iônicos',
    aliases: ['Potencial de Repouso', 'Equação de Nernst', 'Equação de Goldman', 'Bioeletrogênese'],
    specialistTitle: 'Berne & Levy',
    specialistBadge: 'Eletrofisiologia Avançada',
    guyton: {
      chapter: 'Unidade II: Fisiologia de Membranas, Nervos e Músculos — Capítulo 5: Potenciais de Membrana e Potenciais de Ação',
      pages: 'pp. 63-75',
      summary: 'Guyton & Hall explica que existe uma diferença de potencial elétrico através da membrana plasmática de todas as células no repouso (potencial de membrana de repouso, Vm), sendo o interior negativo em relação ao exterior (aproximadamente -70 mV em neurônios e -90 mV em miócitos cardíacos e fibras musculoesqueléticas). Essa voltagem decorre de dois fatores principais: 1) Gradientes químicos assimétricos gerados pela Na+/K+ ATPase ([K+]i ≈ 140 mEq/L vs [K+]e ≈ 4 mEq/L; [Na+]i ≈ 14 mEq/L vs [Na+]e ≈ 142 mEq/L); 2) Permeabilidade relativa da membrana no repouso, na qual canais de vazamento de K+ (canais K2P) estão amplamente abertos, conferindo à membrana uma condutância ao potássio cerca de 50 a 100 vezes maior do que ao sódio. Como consequência, o Vm de repouso fica muito próximo do potencial de equilíbrio eletroquímico do potássio calculado por Nernst (-94 mV).',
      keyPoint: 'O potencial de repouso é negativo e próximo de -90 mV porque a membrana no repouso é amplamente permeável ao K+ e quase impermeável ao Na+.'
    },
    berne: {
      chapter: 'Capítulo 3: Gênese do Potencial de Membrana em Repouso e Biofísica Iônica',
      pages: 'pp. 54-70',
      summary: 'Berne & Levy expõe as duas equações fundamentais da eletrofisiologia: 1) Equação de Nernst para um único íon no equilíbrio: E_ion = (R*T / z*F) * ln([Ion]e / [Ion]i) ≈ (61,5 mV / z) * log10([Ion]e / [Ion]i) a 37°C. O potencial de equilíbrio é a voltagem de membrana exata que gera uma força elétrica contrária igual e oposta à força do gradiente químico de concentração. 2) Equação de Goldman-Hodgkin-Katz (GHK), que calcula o Vm quando múltiplos íons permeáveis estão presentes, ponderando o potencial de equilíbrio de cada íon pela sua permeabilidade relativa (P_K, P_Na, P_Cl): Vm = 61,5 * log10[(P_K*[K+]e + P_Na*[Na+]e + P_Cl*[Cl-]i) / (P_K*[K+]i + P_Na*[Na+]i + P_Cl*[Cl-]e)].',
      keyPoint: 'A Equação de Goldman-Hodgkin-Katz demonstra que o Vm é determinado pelo íon com a maior permeabilidade de membrana (no repouso, o K+).'
    },
    costanzo: {
      chapter: 'Capítulo 1: Eletrofisiologia Celular — Potencial de Difusão e Equilíbrio',
      pages: 'pp. 22-30',
      summary: 'Costanzo reforça a importância clínica de alterações na concentração de íons no LEC. Na HIPERCALEMIA (elevação do K+ extracelular de 4 para 8 mEq/L), a razão [K+]e / [K+]i aumenta, tornando o potencial de Nernst do K+ menos negativo (despolariza o repouso para ~ -60 mV). Inicialmente isso aproxima a célula do limiar, mas a despolarização sustentada inativa cronicamente as comportas de inativação (h) dos canais de Na+ rápidos, impedindo a deflagração de potenciais de ação e causando paralisia flácida e arritmias ventriculares fatais.',
      keyPoint: 'Hipercalemia grave despolariza o repouso, inativa os canais de sódio voltagem-dependentes e paralisa a condução elétrica miocárdica.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 6: Eletrofisiologia das Membranas e Canais K2P',
      pages: 'pp. 145-168',
      summary: 'Boron disseca a estrutura molecular dos canais de potássio com dois domínios de poro (K2P: canais TASK, TREK e TRAAK), que são responsáveis pela condutância basal de repouso ("corrente de fundo de potássio"), regulados por pH, oxigenação tecidual e anestésicos voláteis.',
      keyPoint: 'Anestésicos gerais inalatórios abrem canais de vazamento TREK, hiperpolarizando os neurônios corticais e suprimindo a consciência.'
    },
    openstax: {
      section: 'Chapter 12: The Nervous System and Nervous Tissue — Section 12.4: The Action Potential',
      summary: 'OpenStax ilustra o arranjo dipolo da membrana celular com acúmulo de cargas negativas alinhadas na face interna e cargas positivas na face externa, operando como um capacitor elétrico biológico microscópico.',
      keyPoint: 'A membrana atua como capacitor: a separação microscópica de cargas na espessura de 7 nm da bicamada gera campos elétricos colossais.'
    },
    merck: {
      section: 'Distúrbios Hidroeletrolíticos — Hiperpotassemia e Hipopotassemia',
      summary: 'O Manual MSD fornece o protocolo de urgência para hipercalemia grave com alterações no ECG (ondas T pontiagudas e simétricas, alargamento do QRS): administração imediata de Gluconato de Cálcio intravenoso para antagonismo de membrana e estabilização elétrica miocárdica.',
      keyPoint: 'O cálcio IV não reduz o potássio sérico, mas normaliza o potencial limiar cardíaco, evitando fibrilação ventricular imediata.'
    },
    researchTopics: [
      {
        title: 'Equação de Nernst e Potencial de Equilíbrio do K+',
        concept: 'Equação biofísica fundamental que define o potencial elétrico transmembrana no qual a taxa de efluxo difusional de um íon pelo gradiente químico iguala exatamente a taxa de influxo pela atração eletrostática.',
        formulaOrLaw: 'E_K = (61,5 mV / z) * log10([K+]ext / [K+]int)',
        keyReference: 'Berne & Levy, Cap. 3',
        query: 'nernst equation equilibrium potential potassium electrochemistry'
      },
      {
        title: 'Equação de Goldman-Hodgkin-Katz (GHK)',
        concept: 'Equação de campo elétrico constante que quantifica o potencial de membrana real considerando as concentrações e as permeabilidades relativas dos íons sódio, potássio e cloreto.',
        formulaOrLaw: 'Vm = 61,5 * log10[(P_K*[K]e + P_Na*[Na]e + P_Cl*[Cl]i) / (P_K*[K]i + P_Na*[Na]i + P_Cl*[Cl]e)]',
        keyReference: 'Guyton & Hall, Cap. 5',
        query: 'goldman hodgkin katz equation resting membrane potential relative permeability'
      },
      {
        title: 'Canais de Vazamento de Potássio K2P e Condutância Basal',
        concept: 'Proteínas de membrana da família tandem pore K+ que permanecem constitutivamente ativadas em repouso, gerando a corrente iônica eferente de K+ que fixa o Vm próximo de -70 a -90 mV.',
        formulaOrLaw: 'I_K,leak = g_leak * (Vm - E_K)',
        keyReference: 'Boron & Boulpaep, Cap. 6',
        query: 'two-pore domain potassium channels k2p resting conductance'
      },
      {
        title: 'Efeito da Hipercalemia e Hipocalemia no Vm',
        concept: 'Alteração dos limiares de excitabilidade celular decorrente do desvio do potencial de Nernst do potássio plasmático, induzindo inativação de canais de sódio rápidos ou hiperexcitabilidade inicial transitória.',
        formulaOrLaw: 'Hipercalemia: [K+]e ↑ -> E_K despolariza -> Inativação dos canais Nav',
        keyReference: 'Costanzo, Cap. 1',
        query: 'hyperkalemia hypokalemia membrane potential cardiac arrhythmias nernst'
      }
    ]
  },

  {
    topicName: 'Potencial de Ação e Período Refratário',
    phaseId: 'w1_p6',
    level: 6,
    worldId: 'w1',
    category: 'Fisiologia Celular & Meio Interno',
    phaseTitle: 'Potencial de Ação & Período Refratário',
    aliases: ['Potencial de Ação', 'Despolarização', 'Repolarização', 'Período Refratário', 'Canal de Sódio Nav'],
    specialistTitle: 'Berne & Levy',
    specialistBadge: 'Biofísica de Hodgkin-Huxley',
    guyton: {
      chapter: 'Unidade II — Capítulo 5: Gênese do Potencial de Ação Nervoso e Condução Saltatória',
      pages: 'pp. 66-82',
      summary: 'Guyton & Hall descreve o potencial de ação como uma despolarização regenerativa transitória e estereotipada de "tudo-ou-nada". Quando um estímulo atinge o Potencial Limiar (aproximadamente -55 mV), canais de sódio voltagem-dependentes (Nav) abrem suas comportas de ativação (m), permitindo um influxo maciço e acelerado de Na+ que despolariza o interior até +30 mV (overshoot). Esse fenômeno configura um feedback positivo (Ciclo de Hodgkin). No pico do potencial, as comportas de inativação (h) dos canais Nav se fecham automaticamente (tempo-dependentes), e canais de potássio voltagem-dependentes (Kv) abrem suas comportas lentas, promovendo efluxo rápido de K+ que repolariza a membrana de volta ao repouso, muitas vezes gerando uma breve pós-hiperpolarização (undershoot).',
      keyPoint: 'Ciclo de Hodgkin: Despolarização abre canais Nav -> Influxo de Na+ despolariza mais a membrana -> Abre mais canais Nav (feedback positivo).'
    },
    berne: {
      chapter: 'Capítulo 4: Canais de Sódio Voltagem-Dependentes e Modelo de Hodgkin-Huxley',
      pages: 'pp. 72-92',
      summary: 'Berne & Levy detalha as três conformações biofísicas do canal Nav: 1) Repouso (comporta de ativação fechada, inativação aberta; o canal pode ser ativado); 2) Ativado/Aberto (ambas as comportas abertas; corrente de sódio flui); 3) Inativado (comporta de inativação fechada pelo mecanismo ball-and-chain; o canal está bloqueado e NÃO responde a nenhum estímulo, não importando a intensidade). Este estado inativado constitui a base biofísica do Período Refratário Absoluto. À medida que a membrana se repolariza, as comportas de inativação se reabrem e os canais voltam à conformação de repouso, entrando no Período Refratário Relativo, no qual um potencial de ação pode ser deflagrado, mas exige estímulo supralimiar.',
      keyPoint: 'No período refratário absoluto, os canais de sódio Nav estão na conformação INATIVADA; nenhum estímulo consegue abrir o canal.'
    },
    costanzo: {
      chapter: 'Capítulo 1: Características do Potencial de Ação e Condução Nervosa',
      pages: 'pp. 30-40',
      summary: 'Costanzo resume os papéis do Período Refratário: 1) Limita a frequência máxima de disparos de potenciais de ação; 2) Impede a retropropagação do impulso nervoso, assegurando condução estritamente unidirecional ortodrômica desde o cone de implantação axônico até as terminações sinápticas. Explica a Condução Saltatória: a bainha de mielina (células de Schwann no SNP; oligodendrócitos no SNC) atua como isolante elétrico que reduz a capacitância de membrana e aumenta a resistência transversal, forçando o potencial a saltar de nódulo em nódulo de Ranvier.',
      keyPoint: 'A condução saltatória nos Nódulos de Ranvier acelera a velocidade de propagação de 1 m/s para até 120 m/s em fibras mielinizadas A-alfa.'
    },
    specialistSource: {
      chapter: 'Boron & Boulpaep — Capítulo 7: Eletrofisiologia Quantitativa e Condução Saltatória',
      pages: 'pp. 170-196',
      summary: 'Boron formaliza a constante de espaço (lambda = sqrt(rm / ri)) e a constante de tempo (tau = rm * cm). A mielina aumenta a resistência da membrana (rm) e reduz drasticamente a capacitância (cm), elevando a constante de espaço e permitindo que o circuito local de corrente despolarize o próximo nódulo de Ranvier com perda atenuada.',
      keyPoint: 'Doenças desmielinizantes como a Esclerose Múltipla aumentam a capacitância e dispersam a corrente, causando bloqueio da condução nervosa.'
    },
    openstax: {
      section: 'Chapter 12: The Nervous System — Section 12.4: Propagation of the Action Potential',
      summary: 'OpenStax ilustra o gráfico clássico em milissegundos mostrando o repouso (-70 mV), o limiar (-55 mV), o pico despolarizante (+30 mV), a repolarização e o undershoot (-80 mV).',
      keyPoint: 'Bloqueadores dos canais de sódio Nav, como a lidocaína e a tetrodotoxina (TTX), impedem a despolarização e abolem o potencial de ação.'
    },
    merck: {
      section: 'Anestesiologia e Farmacologia — Anestésicos Locais e Bloqueio de Canais Nav',
      summary: 'O Manual MSD detalha o mecanismo de ação da lidocaína e bupivacaína: penetram na forma neutra pela membrana lipídica, ionizam-se no citosol e bloqueiam o poro interno do canal de sódio Nav, impedindo a dor por abolição do potencial de ação nas fibras nociceptivas C e A-delta.',
      keyPoint: 'Anestésicos locais bloqueiam os canais de sódio dependentes de voltagem na face intracelular do poro.'
    },
    researchTopics: [
      {
        title: 'Ciclo de Hodgkin e Despolarização Regenerativa',
        concept: 'Alça de feedback positivo eletrofisiológico na qual a abertura inicial de canais de sódio voltagem-dependentes acelera a despolarização de membrana, abrindo cooperativamente todos os canais Nav vizinhos.',
        formulaOrLaw: 'Feedback Positivo: Despolarização -> ↑ g_Na -> ↑ Influxo Na+ -> Mais Despolarização',
        keyReference: 'Guyton & Hall, Cap. 5',
        query: 'hodgkin cycle regenerative depolarization voltage-gated sodium channel'
      },
      {
        title: 'Bases Moleculares do Período Refratário Absoluto e Relativo',
        concept: 'Transição das comportas do canal Nav entre os estados aberto, inativado e repouso, impondo janela temporal na qual a geração de novo disparo é fisiologicamente impossível.',
        formulaOrLaw: 'Refratariedade Absoluta: 100% dos canais Nav no estado inativado (h fechado)',
        keyReference: 'Berne & Levy, Cap. 4',
        query: 'absolute refractory period relative refractory period sodium channel inactivation gates'
      },
      {
        title: 'Condução Saltatória nos Nódulos de Ranvier',
        concept: 'Mecanismo no qual a mielina atua como isolante elétrico de alta resistência e baixa capacitância, confinando a geração regenerativa do potencial de ação estritamente aos nós amielínicos de Ranvier.',
        formulaOrLaw: 'Velocidade de Condução ∝ Diâmetro da Fibra Mielinizada (v ≈ 6 * diâmetro em μm)',
        keyReference: 'Costanzo, Cap. 1',
        query: 'saltatory conduction myelin sheath nodes of ranvier action potential velocity'
      },
      {
        title: 'Bloqueio Farmacológico por Anestésicos Locais (Lidocaína)',
        concept: 'Ligação estéreo-específica de anestésicos amino-amidas e amino-ésteres no interior do vestíbulo aquoso do canal de Na+, bloqueando a condutância iônica e a percepção dolorosa periférica.',
        formulaOrLaw: 'Bloqueio Uso-Dependente de Canais Nav',
        keyReference: 'Boron & Boulpaep, Cap. 7',
        query: 'local anesthetics lidocaine tetrodotoxin voltage-gated sodium channel block'
      }
    ]
  }
];
