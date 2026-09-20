// Mundo 4: Sistema Respiratório (Níveis 19 a 24)
module.exports = [
  {
    topicName: 'Mecânica Ventilatória e Pressões',
    phaseId: 'w4_p1',
    level: 19,
    worldId: 'w4',
    category: 'Sistema Respiratório',
    phaseTitle: 'Mecânica Ventilatória & Lei de Boyle',
    aliases: ['Mecânica Ventilatória', 'Lei de Boyle', 'Músculos da Respiração', 'Pressão Alveolar'],
    specialistTitle: 'John B. West',
    specialistBadge: 'Fisiologia Respiratória de West',
    guyton: {
      chapter: 'Unidade VII: Respiração — Capítulo 38: Ventilação Pulmonar',
      pages: 'pp. 497-508',
      summary: 'A ventilação pulmonar é o processo mecânico cíclico de renovação gasosa nos alvéolos impulsionado por gradientes de pressão gerados pela contração dos músculos esqueléticos respiratórios. É regida pela LEI DE BOYLE-MARIOTTE: para uma quantidade fixa de gás mantida a temperatura constante, a pressão de um gás é inversamente proporcional ao volume de seu compartimento (P1 * V1 = P2 * V2). A INSPIRAÇÃO é um processo ATIVO: o diafragma contrai-se e descende seu platô tendíneo (responsável por 75% da expansão torácica basal), enquanto os músculos intercostais externos contraem-se elevando as costelas ("movimento em alça de balde" no sentido transversal e "braço de bomba" no sentido anteroposterior). A expansão da caixa torácica traciona a pleura parietal, tornando a pressão intrapleural mais negativa (de -5 para -8 cmH2O), expandindo os pulmões: o volume alveolar aumenta e a pressão alveolar cai de 0 para -1 cmH2O em relação à atmosfera, gerando gradiente que aspira o ar para dentro. A EXPIRAÇÃO em repouso é um processo PASSIVO: decorre do recolhimento elástico espontâneo dos pulmões e relaxamento diafragmático.',
      keyPoint: 'A inspiração basal é ativa (diafragma e intercostais externos); a expiração basal é passiva, decorrente unicamente do recolhimento elástico pulmonar.'
    },
    berne: {
      chapter: 'Capítulo 21: Mecânica Respiratória e Gradientes de Pressão Transpulmonar',
      pages: 'pp. 378-395',
      summary: 'Berne & Levy detalha as pressões do ciclo ventilatório: 1) Pressão Atmosférica (Patm = 0 cmH2O como referência ao nível do mar); 2) Pressão Alveolar (Palv: varia de -1 cmH2O na inspiração a +1 cmH2O na expiração; torna-se zero no final da inspiração e final da expiração quando o fluxo cessa momentaneamente); 3) PRESSÃO TRANSPULMONAR (Ptp = Palv - Pip): a diferença entre a pressão alveolar e a pressão intrapleural. Como Pip é sempre negativa em relação a Palv, Ptp é sempre positiva (+5 a +8 cmH2O), representando a pressão de distensão transmural transmural que mantém os pulmões abertos contra seu recolhimento elástico natural.',
      keyPoint: 'Pressão Transpulmonar = Palv - Pip. É a força que mantém o parênquima pulmonar insuflado contra a tendência retrátil elástica.'
    },
    costanzo: {
      chapter: 'Capítulo 5: Fisiologia Respiratória — Músculos e Dinâmica das Pressões',
      pages: 'pp. 183-192',
      summary: 'Costanzo detalha os músculos da RESPIRAÇÃO FORÇADA: 1) Músculos Acessórios da Inspiração Forçada (exercício vigoroso, crise de asma): escalenos (elevam a 1ª e 2ª costelas), esternocleidomastóideo (eleva o esterno) e peitorais menores; 2) Músculos da Expiração Ativa Forçada (tosse, fonação, manobra de Valsalva e esforço): MÚSCULOS ABDOMINAIS (reto abdominal, oblíquos interno e externo, transverso do abdome — empurram as vísceras contra o diafragma para cima) e Músculos Intercostais Internos (tracionam as costelas para baixo e para dentro).',
      keyPoint: 'Na respiração forçada ou exercício: a expiração torna-se ativa dependente da contração dos músculos abdominais e intercostais internos.'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 7: Mecânica da Respiração',
      pages: 'pp. 95-126',
      summary: 'John B. West analisa a Resistência das Vias Aéreas (Raw): Raw = ΔP / V_ponto. O maior sítio de resistência friccional ao fluxo aéreo no sistema respiratório normal situa-se nos brônquios de médio calibre (4ª a 8ª geração de ramificação brônquica), e NÃO nos bronquíolos terminais. Nos bronquíolos muito finos, a resistência individual é alta, mas como estão dispostos em centenas de milhares de ramificações em PARALELO, a área de secção transversal total combinada é gigantesca (~10.000 cm²), tornando a resistência global das vias aéreas distais extremamente baixa ("zona silenciosa" do pulmão).',
      keyPoint: 'A maior resistência ao fluxo de ar localiza-se nos brônquios de médio calibre (4ª a 8ª geração); bronquíolos terminais em paralelo têm área enorme e resistência quase nula.'
    },
    openstax: {
      section: 'Chapter 22: The Respiratory System — Section 22.3: The Process of Breathing',
      summary: 'OpenStax ilustra o mecanismo de Boyle com um êmbolo de seringa e detalha o trajeto das fibras do Nervo Frênico (raízes espinhais cervicais C3, C4, C5) inervando o diafragma ("C3, C4, C5 keep the diaphragm alive").',
      keyPoint: 'Lesão medular traumática acima de C3 paralisa o nervo frênico e abole a ventilação espontânea, exigindo suporte ventilatório mecânico imediato.'
    },
    merck: {
      section: 'Pneumologia — Insuficiência Respiratória Aguda e Fadiga Muscular Diafragmática',
      summary: 'O Manual MSD aborda os sinais clínicos de fadiga e falência iminente dos músculos respiratórios em pacientes com exacerbação de DPOC ou asma grave: uso proeminente da musculatura acessória cervical (tiragem de fúrcula e batimento de asa de nariz), respiração paradoxal tóraco-abdominal (o abdome retrai na inspiração quando o diafragma entra em exaustão) e taquipneia superficial ineficaz evoluindo para acidose respiratória hipercápnica.',
      keyPoint: 'Respiração paradoxal tóraco-abdominal indica fadiga diafragmática terminal e risco iminente de parada respiratória.'
    },
    researchTopics: [
      {
        title: 'Lei de Boyle e Ciclo de Pressões na Ventilação',
        concept: 'Aplicação da lei dos gases ideais na caixa torácica: expansão volumétrica torácica gera queda da pressão alveolar abaixo da atmosférica, forçando o fluxo de ar para o interior.',
        formulaOrLaw: 'Lei de Boyle: P1 * V1 = P2 * V2 (T constante) -> Palv = -1 cmH2O na inspiração',
        keyReference: 'Guyton & Hall, Cap. 38',
        query: 'boyle law alveolar pressure intrapleural pressure ventilation mechanics'
      },
      {
        title: 'Pressão Transpulmonar e Recolhimento Elástico',
        concept: 'Gradiente de pressão transmural entre o interior dos alvéolos e a cavidade pleural que sustenta a expansão alveolar contra a tendência centrípeta de colabamento elástico.',
        formulaOrLaw: 'Ptp = Palv - Pip (Sempre positiva em condições fisiológicas)',
        keyReference: 'Berne & Levy, Cap. 21',
        query: 'transpulmonary pressure elastic recoil intrapleural pressure lung compliance'
      },
      {
        title: 'Músculos Respiratórios na Ventilação Basal vs. Forçada',
        concept: 'Diferenciação eletromiográfica da ativação do diafragma na inspiração em repouso versus o recrutamento de músculos abdominais e intercostais internos na expiração forçada ativa.',
        formulaOrLaw: 'Expiração Ativa: Músculos Reto Abdominal, Oblíquos e Transverso',
        keyReference: 'Costanzo, Cap. 5',
        query: 'respiratory muscles diaphragm abdominal muscles forced expiration electromyography'
      },
      {
        title: 'Resistência ao Fluxo e Zona Silenciosa dos Bronquíolos',
        concept: 'Paradoxo de bifurcação brônquica: por que brônquios segmentares concentram a resistência ao fluxo aéreo enquanto os bronquíolos distais em paralelo exibem resistência ínfima.',
        formulaOrLaw: 'Área Seccional Transversal dos Bronquíolos Distais > 10.000 cm²',
        keyReference: 'West, Fisiologia Respiratória, Cap. 7',
        query: 'airway resistance medium sized bronchi silent zone peripheral airways'
      }
    ]
  },

  {
    topicName: 'Complacência e Surfactante',
    phaseId: 'w4_p2',
    level: 20,
    worldId: 'w4',
    category: 'Sistema Respiratório',
    phaseTitle: 'Pressão Intrapleural & Surfactante',
    aliases: ['Complacência Pulmonar', 'Surfactante', 'Lei de Laplace', 'Pneumotórax', 'Pneumócitos Tipo II'],
    specialistTitle: 'John B. West',
    specialistBadge: 'Biofísica Alveolar de West',
    guyton: {
      chapter: 'Unidade VII — Capítulo 38: Complacência Pulmonar, Tensão Superficial e Surfactante',
      pages: 'pp. 500-508',
      summary: 'A COMPLACÊNCIA PULMONAR (distensibilidade) é a variação de volume pulmonar obtida para cada unidade de variação na pressão transpulmonar: C = ΔV / ΔP (em um adulto normal, a complacência pulmonar combinada é de aproximadamente 200 mL/cmH2O). A elastância é o inverso da complacência (tendência de recolhimento). Duas forças geram o recolhimento elástico dos pulmões: 1) Fibras elásticas e colágenas do interstício (1/3 da força retrátil); 2) TENSÃO SUPERFICIAL na interface ar-líquido alveolar (2/3 de toda a força retrátil elástica!). As moléculas de água na superfície interna alveolar exercem forte atração coesiva mútua (pontes de hidrogênio), tentando contrair o alvéolo e expulsar o ar. O SURFACTANTE PULMONAR, sintetizado e secretado pelos PNEUMÓCITOS TIPO II a partir da 24ª-28ª semana de gestação (amadurecendo após a 34ª semana), é uma mistura complexa de fosfolipídios (especialmente a Dipalmitoilfosfatidilcolina - DPPC) e apoproteínas específicas (SP-A, B, C, D) que se intercalam entre as moléculas de água, reduzindo drasticamente a tensão superficial.',
      keyPoint: 'O surfactante reduz a tensão superficial alveolar, impedindo o colapso dos pequenos alvéolos (atelectasia), aumentando a complacência e diminuindo o trabalho respiratório.'
    },
    berne: {
      chapter: 'Capítulo 21: Biofísica da Tensão Superficial e a Lei de Laplace Alveolar',
      pages: 'pp. 382-398',
      summary: 'Berne & Levy formaliza o comportamento alveolar através da LEI DE LAPLACE para esferas: P = (2 * T) / r, onde P é a pressão de colapso intra-alveolar que tende a esvaziar a esfera, T é a tensão superficial na parede e r é o raio do alvéolo. Sem surfactante, a tensão superficial T seria constante em todos os alvéolos; consequentemente, os alvéolos MENORES (com raio r pequeno) desenvolveriam pressões de colapso muito mais elevadas do que os alvéolos maiores, fazendo com que o ar fluísse dos pequenos para os grandes, colapsando completamente os menores (atelectasia em massa). O surfactante resolve esse dilema biofísico: quando o alvéolo se contrai e seu raio diminui, as moléculas de DPPC ficam mais densamente compactadas na superfície, reduzindo a tensão superficial T ainda mais do que a redução de r, igualando as pressões entre alvéolos de diferentes tamanhos e estabilizando a arquitetura pulmonar.',
      keyPoint: 'Pela Lei de Laplace (P = 2T / r), alvéolos menores colapsariam nos maiores; o surfactante reduz T proporcionalmente ao raio r, estabilizando os pequenos alvéolos.'
    },
    costanzo: {
      chapter: 'Capítulo 5: Complacência Pulmonar e Síndrome do Desconforto Respiratório',
      pages: 'pp. 188-196',
      summary: 'Costanzo compara os distúrbios da complacência: 1) Complacência REDUZIDA (pulmão "duro", difícil de expandir): Fibrose Pulmonar Idiopática (deposição de colágeno intersticial), edema alveolar e Síndrome do Desconforto Respiratório do Neonato (SDRN); 2) Complacência ELEVADA (pulmão "mole", perdeu o recolhimento elástico): Enfisema Pulmonar (destruição das fibras elásticas pela elastase neutrofílica no tabagismo; fácil de inflar, mas colapsa as vias aéreas na expiração). Detalha a SDRN em prematuros: pulmões imaturos sem DPPC colabam na primeira expiração, gerando shunt, hipoxemia profunda e formação de membranas hialinas.',
      keyPoint: 'Fibrose pulmonar = complacência diminuída (pulmão rígido); Enfisema pulmonar = complacência aumentada (perda do recolhimento elástico).'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 7: Tensão Superficial e Estabilidade Alveolar',
      pages: 'pp. 102-118',
      summary: 'John B. West explica o papel protetor do surfactante contra o EDEMA PULMONAR: a tensão superficial elevada atuaria como um vácuo hidrodinâmico aspirando fluido dos capilares para dentro da luz alveolar. Ao manter a tensão superficial alveolar baixa, o surfactante impede a trasudação de líquido capilar. Aborda a física do PNEUMOTÓRAX: a cavidade pleural tem pressão negativa (-5 cmH2O) porque o pulmão puxa para dentro (recolhimento) e a caixa torácica puxa para fora (mola elástica). Se a pleura for perfurada por trauma, o ar entra na cavidade pleural até Pip igualar Patm (0 cmH2O), rompendo a adesão: o pulmão colapsa completamente para seu volume mínimo e a parede torácica expande-se para fora.',
      keyPoint: 'No pneumotórax, o ar entra na cavidade pleural, a pressão intrapleural sobe de -5 para 0 cmH2O e o pulmão colapsa por sua própria retração elástica.'
    },
    openstax: {
      section: 'Chapter 22: The Respiratory System — Section 22.3: Respiratory Mechanics and Surface Tension',
      summary: 'OpenStax detalha a histologia ultraestrutural dos pneumócitos tipo II com seus corpos lamelares de armazenamento de surfactante e a prevenção pré-natal da prematuridade com corticoides (betametasona) para acelerar a maturação pulmonar fetal.',
      keyPoint: 'Administração de corticoide antenatal à gestante acelera a síntese de surfactante e reduz a mortalidade por SDRN neonatal em prematuros.'
    },
    merck: {
      section: 'Neonatologia e Terapia Intensiva — Síndrome do Desconforto Respiratório do Recém-Nascido e SDRA no Adulto',
      summary: 'O Manual MSD detalha a reposição de surfactante exógeno purificado endotraqueal (Curosurf/Survanta) em recém-nascidos prematuros, promovendo reabertura alveolar imediata e redução da necessidade de ventilação invasiva prolongada. Compara com a SDRA no adulto (dano alveolar difuso por sepse).',
      keyPoint: 'Surfactante exógeno administrado diretamente na traqueia salva prematuros revertendo o colapso alveolar em minutos.'
    },
    researchTopics: [
      {
        title: 'Lei de Laplace e Estabilidade Mecânica dos Alvéolos',
        concept: 'Demonstração biofísica de que a compactação da dipalmitoilfosfatidilcolina durante a desinsuflação alveolar reduz a tensão superficial e previne o colapso dos alvéolos pequenos.',
        formulaOrLaw: 'Lei de Laplace: Pressão de Colapso P = (2 * Tensão Superficial) / Raio Alveolar',
        keyReference: 'Berne & Levy, Cap. 21',
        query: 'laplace law alveoli surface tension surfactant dppc stability'
      },
      {
        title: 'Bioquímica da DPPC e Corpos Lamelares dos Pneumócitos II',
        concept: 'Síntese fosfolipídica intracelular, acondicionamento em vesículas lamelares e exocitose do surfactante com proteínas hidrofóbicas SP-B e SP-C para formação da monocamada.',
        formulaOrLaw: 'Dipalmitoilfosfatidilcolina (DPPC) + Apoproteínas SP-A, SP-B, SP-C, SP-D',
        keyReference: 'Guyton & Hall, Cap. 38',
        query: 'dipalmitoylphosphatidylcholine lamellar bodies type ii pneumocytes surfactant proteins'
      },
      {
        title: 'Curva Pressão-Volume Pulmonar e Histerese',
        concept: 'Comportamento viscoelástico do parênquima pulmonar demonstrando que a curva de insuflação exige pressões transpulmonares maiores do que a curva de desinsuflação.',
        formulaOrLaw: 'Complacência: C = ΔV / ΔP (Histerese decorrente do recrutamento e tensão superficial)',
        keyReference: 'Costanzo, Cap. 5',
        query: 'pressure volume curve lung compliance hysteresis surfactant recruitment'
      },
      {
        title: 'Fisiopatologia do Pneumotórax Aberto e Hipertensivo',
        concept: 'Rompimento da pressão intrapleural negativa por comunicação traumática, causando perda do acoplamento mecânico com colapso atelectásico do pulmão afetado.',
        formulaOrLaw: 'Pneumotórax: Pip sobe de -5 para 0 cmH2O -> Ptp cai a zero -> Colapso Pulmonar',
        keyReference: 'West, Fisiologia Respiratória, Cap. 7',
        query: 'pneumothorax intrapleural pressure tension pneumothorax lung collapse'
      }
    ]
  },

  {
    topicName: 'Espirometria e Volumes',
    phaseId: 'w4_p3',
    level: 21,
    worldId: 'w4',
    category: 'Sistema Respiratório',
    phaseTitle: 'Volumes e Capacidades Pulmonares & Espirometria',
    aliases: ['Espirometria e Volumes Pulmonares', 'Volume Corrente', 'Capacidade Vital', 'Índice de Tiffeneau', 'Volume Residual'],
    specialistTitle: 'John B. West',
    specialistBadge: 'Espirometria Diagnóstica',
    guyton: {
      chapter: 'Unidade VII — Capítulo 38: Volumes e Capacidades Pulmonares e Espirometria',
      pages: 'pp. 503-512',
      summary: 'A avaliação funcional da ventilação pulmonar baseia-se na quantificação de quatro volumes elementares independentes e quatro capacidades combinadas: 1) VOLUME CORRENTE (VC ≈ 500 mL): volume de ar inspirado ou expirado a cada ciclo respiratório basal de repouso; 2) VOLUME DE RESERVA INSPIRATÓRIO (VRI ≈ 3.000 mL): volume máximo de ar que pode ser inspirado além do volume corrente normal; 3) VOLUME DE RESERVA EXPIRATÓRIO (VRE ≈ 1.100 mL): volume máximo de ar que pode ser expirado forçadamente ao final de uma expiração normal; 4) VOLUME RESIDUAL (VR ≈ 1.200 mL): volume de ar que permanece nos pulmões mesmo após uma expiração forçada máxima; NUNCA pode ser medido por espirometria simples. As quatro capacidades são: 1) Capacidade Inspiratória (CI = VC + VRI ≈ 3.500 mL); 2) CAPACIDADE RESIDUAL FUNCIONAL (CRF = VRE + VR ≈ 2.300 mL): volume de ar nos pulmões ao final de uma expiração basal normal (quando o recolhimento do pulmão equilibra a expansão da caixa torácica); 3) CAPACIDADE VITAL (CV = VRI + VC + VRE ≈ 4.600 mL); 4) CAPACIDADE PULMONAR TOTAL (CPT = CV + VR ≈ 5.800 mL).',
      keyPoint: 'O Volume Residual (VR) e a Capacidade Residual Funcional (CRF) NÃO podem ser medidos por espirometria comum (exigem pletismografia ou diluição de hélio).'
    },
    berne: {
      chapter: 'Capítulo 21: Provas de Função Pulmonar e Métodos de Diluição Gasosa',
      pages: 'pp. 380-394',
      summary: 'Berne & Levy detalha a medição do Volume Residual pelo Método de Diluição de Hélio: utiliza-se um gás inerte insolúvel no sangue em circuito fechado (C1 * V1 = C2 * (V1 + CRF)), permitindo o cálculo exato da CRF e, subtraindo o VRE, obtém-se o Volume Residual. Discute a Ventilação Minuto (V_minuto = VC * FR ≈ 500 mL * 12 = 6.000 mL/min) versus a VENTILAÇÃO ALVEOLAR EFETIVA (Va = (VC - Vd) * FR): dos 500 mL do volume corrente, cerca de 150 mL ficam aprisionados nas vias aéreas de condução sem realizar trocas gasosas (Espaço Morto Anatômico, Vd ≈ 150 mL ou 2 mL/kg). Apenas os 350 mL restantes penetram os alvéolos funcionais (Va = 350 mL * 12 = 4.200 mL/min).',
      keyPoint: 'Ventilação Alveolar = (Volume Corrente - Espaço Morto) x Frequência Respiratória. Respiração rápida e superficial apenas ventila o espaço morto sem oxigenar o sangue.'
    },
    costanzo: {
      chapter: 'Capítulo 5: Espirometria Clínica — Padrão Obstrutivo versus Restritivo',
      pages: 'pp. 184-188',
      summary: 'Costanzo disseca a interpretação clínica da Espirometria Forçada: 1) Capacidade Vital Forçada (CVF): volume total de ar expelido com esforço expiratório máximo após inspiração profunda; 2) Volume Expiratório Forçado no 1º segundo (VEF1): volume de ar ejetado no primeiro segundo da manobra; 3) ÍNDICE DE TIFFENEAU (VEF1 / CVF, normal entre 75% e 80% ou 0,75-0,80): PADRÃO OBSTRUTIVO (Asma, DPOC/Enfisema, Bronquite Crônica): resistência aumentada nas vias aéreas reduz o fluxo expiratório desproporcionalmente; o VEF1 cai drasticamente e o ÍNDICE DE TIFFENEAU FICA MENOR QUE 70% (< 0,70); PADRÃO RESTRITIVO (Fibrose Pulmonar, Esclerodermia, Cifoescoliose grave): diminuição simétrica de todos os volumes pulmonares; tanto a CVF quanto o VEF1 caem na mesma proporção, de modo que o ÍNDICE DE TIFFENEAU PERMANECE NORMAL OU ATÉ ELEVADO (≥ 80%).',
      keyPoint: 'Índice de Tiffeneau (VEF1/CVF) < 70% define Distúrbio Obstrutivo (Asma/DPOC). Tiffeneau normal/alto com CVF reduzida define Distúrbio Restritivo (Fibrose).'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 2: Ventilação e Espaço Morto',
      pages: 'pp. 13-28',
      summary: 'John B. West explica a Equação de Bohr para medição do Espaço Morto Fisiológico: Vd/Vt = (PaCO2 - PeCO2) / PaCO2, onde PeCO2 é a fração de CO2 coletada no ar expirado misto. Demonstra que se os alvéolos forem ventilados mas não perfundidos (como em embolia pulmonar), eles somam-se ao espaço morto anatômico, compondo o Espaço Morto Fisiológico aumentado.',
      keyPoint: 'Pela Equação de Bohr, se a PCO2 do ar expirado misto cair muito em relação ao sangue arterial, o espaço morto fisiológico está ampliado (embolia pulmonar).'
    },
    openstax: {
      section: 'Chapter 22: The Respiratory System — Section 22.3: Respiratory Volumes and Capacities',
      summary: 'OpenStax fornece o espirograma clássico com suas faixas de volumes e capacidades coloridas e demonstra a manobra espirométrica realizada por um paciente em bocal com pinça nasal.',
      keyPoint: 'A capacidade vital é a soma do volume de reserva inspiratório, volume corrente e volume de reserva expiratório (CV = VRI + VC + VRE).'
    },
    merck: {
      section: 'Pneumologia — Espirometria e Teste de Broncodilatação',
      summary: 'O Manual MSD estabelece a confirmação diagnóstica de ASMA através da Prova Broncodilatadora com beta-2 agonista inalatório (salbutamol 400 μg): melhora no VEF1 ≥ 12% E ganho absoluto ≥ 200 mL após 15 minutos comprova obstrução reversível ao fluxo aéreo, diferenciando da DPOC (obstrução fixa pouco reversível).',
      keyPoint: 'Ganho de VEF1 ≥ 12% e 200 mL após salbutamol inalatório confirma hiper-reatividade e reversibilidade brônquica na asma.'
    },
    researchTopics: [
      {
        title: 'Volumes Pulmonares e Limitações da Espirometria',
        concept: 'Discriminação dos 4 volumes estáticos e fundamentação de por que o Volume Residual não pode ser medido por espirometria clássica devido ao ar retido nas vias colapsadas.',
        formulaOrLaw: 'Capacidade Pulmonar Total (CPT) = Capacidade Vital (CV) + Volume Residual (VR)',
        keyReference: 'Guyton & Hall, Cap. 38',
        query: 'spirometry pulmonary volumes residual volume functional residual capacity'
      },
      {
        title: 'Diagnóstico Diferencial: Distúrbio Obstrutivo vs. Restritivo',
        concept: 'Análise espirométrica da relação VEF1/CVF (Índice de Tiffeneau) para separação clínica inequívoca entre doenças de vias aéreas e doenças de parênquima ou caixa torácica.',
        formulaOrLaw: 'Obstrução: VEF1/CVF < 0,70; Restrição: VEF1/CVF ≥ 0,70 com CVF < 80% do previsto',
        keyReference: 'Costanzo, Cap. 5',
        query: 'obstructive restrictive lung disease fev1 fvc ratio tiffeneau index spirometry'
      },
      {
        title: 'Ventilação Alveolar e Equação do Espaço Morto de Bohr',
        concept: 'Quantificação da ventilação fisiologicamente útil versus a ventilação ineficaz do espaço morto anatômico e alveolar utilizando a excreção fracionária de dióxido de carbono.',
        formulaOrLaw: 'Equação de Bohr: Vd / Vt = (PaCO2 - PeCO2) / PaCO2',
        keyReference: 'West, Fisiologia Respiratória, Cap. 2',
        query: 'alveolar ventilation anatomic dead space bohr equation dead space fraction'
      },
      {
        title: 'Pletismografia Corporal e Diluição de Hélio',
        concept: 'Metodologias avançadas de função pulmonar baseadas na lei de Boyle em cabine selada ou na conservação de massa de hélio para quantificação precisa do VR e da CRF.',
        formulaOrLaw: 'Pletismografia: P1 * V1 = P2 * (V1 - ΔV); Diluição: C1 * V1 = C2 * (V1 + CRF)',
        keyReference: 'Berne & Levy, Cap. 21',
        query: 'body plethysmography helium dilution functional residual capacity lung volume'
      }
    ]
  },

  {
    topicName: 'Trocas Gasosas e Difusão',
    phaseId: 'w4_p4',
    level: 22,
    worldId: 'w4',
    category: 'Sistema Respiratório',
    phaseTitle: 'Trocas Gasosas & Difusão Alvéolo-Capilar',
    aliases: ['Trocas Gasosas', 'Lei de Fick da Difusão', 'Barreira Alvéolo-Capilar', 'Gradiente Alvéolo-Arterial', 'Capacidade de Difusão DLCO'],
    specialistTitle: 'John B. West',
    specialistBadge: 'Difusão Alvéolo-Capilar de West',
    guyton: {
      chapter: 'Unidade VII — Capítulo 39: Princípios Físicos das Trocas Gasosas; Difusão de Oxigênio e Dióxido de Carbono através da Membrana Respiratória',
      pages: 'pp. 513-526',
      summary: 'A hematose é a difusão passiva de oxigênio dos alvéolos para o sangue capilar pulmonar e de dióxido de carbono do sangue para os alvéolos, governada pelos gradientes de pressões parciais dos gases de acordo com a Lei de Dalton e a Lei de Henry. Ao nível do mar (Pressão Barométrica = 760 mmHg), as pressões parciais fisiológicas em repouso são: 1) No Alvéolo: PAO2 ≈ 104 mmHg; PACO2 ≈ 40 mmHg; 2) No Sangue Venoso Misto que chega pela artéria pulmonar: PvO2 ≈ 40 mmHg; PvCO2 ≈ 45 mmHg; 3) No Sangue Capilar Pulmonar Efetivo: equilibra-se rapidamente, saindo com PaO2 ≈ 100 mmHg e PaCO2 ≈ 40 mmHg. A membrana respiratória (barreira alvéolo-capilar) é extraordinariamente delgada (espessura média de apenas 0,5 μm) com uma área de superfície colossal de 70 a 100 metros quadrados (equivalente a uma quadra de tênis), composta por surfactante, pneumócito tipo I, lâmina basal fundida e endotélio capilar.',
      keyPoint: 'Gradientes de difusão em repouso: Oxigênio = 104 - 40 = 64 mmHg (para dentro do capilar); CO2 = 45 - 40 = 5 mmHg (para dentro do alvéolo).'
    },
    berne: {
      chapter: 'Capítulo 22: Difusão Gasosa Através da Membrana Respiratória e Lei de Fick',
      pages: 'pp. 396-408',
      summary: 'Berne & Levy detalha a 1ª Lei de Fick da Difusão para gases: V_gás = [A * D * (P1 - P2)] / T, onde A é a área de superfície da barreira alvéolo-capilar, T a espessura da barreira, (P1 - P2) a diferença de pressão parcial transmembrana e D o coeficiente de difusão do gás. Pela Lei de Graham e Lei de Henry, D é proporcional à solubilidade do gás dividida pela raiz quadrada de sua massa molecular: D ∝ Solubilidade / sqrt(PM). Como o Dióxido de Carbono (CO2) é cerca de 24 vezes mais solúvel em água e tecidos do que o Oxigênio (O2), o CO2 DIFUNDE APROXIMADAMENTE 20 VEZES MAIS RÁPIDO através da membrana respiratória do que o O2 para um mesmo gradiente pressórico!',
      keyPoint: 'O CO2 difunde 20 vezes mais rápido que o O2 porque sua solubilidade tecidual é imensamente superior; doenças de barreira causam hipoxemia muito antes de reter CO2.'
    },
    costanzo: {
      chapter: 'Capítulo 5: Troca Gasosa — Transporte Limitado por Perfusão versus Difusão',
      pages: 'pp. 192-196',
      summary: 'Costanzo explica o tempo de equilíbrio capilar: uma hemácia leva cerca de 0,75 segundos para transitar ao longo do capilar pulmonar em repouso. O equilíbrio difusional do oxigênio é tão rápido que a PO2 capilar atinge 104 mmHg no primeiro terço do trajeto capilar (~0,25 segundos), restando 0,50 segundos de margem de reserva temporal de segurança. Em indivíduos normais, a captação de O2 e CO2 é LIMITADA POR PERFUSÃO (o único modo de aumentar o O2 captado é bombear mais sangue através dos pulmões). Já o Monóxido de Carbono (CO) liga-se avidamente à hemoglobina sem gerar pressão parcial dissolvida, sendo o modelo clássico de gás LIMITADO POR DIFUSÃO.',
      keyPoint: 'Em repouso, o O2 equilibra-se em 0,25 s (1/3 do capilar); em pulmão fibrótico durante o exercício, o trânsito cai para 0,25 s e o O2 torna-se limitado por difusão (hipoxemia).'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 3: Difusão e Medição da DLCO',
      pages: 'pp. 29-44',
      summary: 'John B. West detalha a Capacidade de Difusão Pulmonar pelo Monóxido de Carbono (DLCO): DLCO = V_CO / PA_CO. A DLCO quantifica a integridade da barreira alvéolo-capilar. Está patologicamente REDUZIDA na Fibrose Pulmonar Idiopática (espessamento fibrótico de T), no Enfisema Pulmonar (destruição de septos com perda catastrófica de área A) e na Anemia (pouca hemoglobina nos capilares); está ELEVADA na hemorragia alveolar (sangue livre alveolar capta CO) e durante o exercício físico intenso (recrutamento e distensão dos capilares de ápice pulmonar aumentam a área A efetiva).',
      keyPoint: 'DLCO reduzida confirma defeito de difusão por espessamento da membrana (fibrose) ou perda de área capilar alveolar (enfisema pulmonar).'
    },
    openstax: {
      section: 'Chapter 22: The Respiratory System — Section 22.4: Gas Exchange',
      summary: 'OpenStax ilustra a ultraestrutura da membrana respiratória sob microscopia eletrônica e mapeia as pressões parciais desde os alvéolos até os capilares sistêmicos musculares.',
      keyPoint: 'A barreira alvéolo-capilar mede apenas 0,5 micrômetros de espessura para minimizar a distância de difusão de Fick.'
    },
    merck: {
      section: 'Pneumologia — Doenças Pulmonares Intersticiais e Fibrose Pulmonar Idiopática',
      summary: 'O Manual MSD correlaciona a fisiopatologia da Fibrose Pulmonar: a proliferação desordenada de miofibroblastos e colágeno espessa a barreira alvéolo-capilar (T aumenta). Em repouso o paciente pode estar eupneico, mas ao menor esforço físico, o aumento do débito cardíaco encurta o tempo de trânsito eritrocitário, impedindo o equilíbrio difusional e deflagrando dessaturação profunda de O2.',
      keyPoint: 'Na fibrose pulmonar, a dessaturação profunda aos esforços é o achado clássico do bloqueio alvéolo-capilar difusional.'
    },
    researchTopics: [
      {
        title: 'Lei de Fick da Difusão Gasosa Alvéolo-Capilar',
        concept: 'Relação física direta entre o fluxo de transferência gasosa e a área da membrana alveolar, solubilidade tecidual e gradiente de pressão parcial, e inversa à espessura tecidual.',
        formulaOrLaw: 'V_gás = [Área * Solubilidade * (PA - Pc)] / [Espessura * sqrt(PM)]',
        keyReference: 'Guyton & Hall, Cap. 39',
        query: 'fick law alveolar capillary gas exchange diffusion membrane'
      },
      {
        title: 'Solubilidade do CO2 vs. O2 e Velocidade de Difusão',
        concept: 'Demonstração biofísica de por que o dióxido de carbono difunde 20 vezes mais rápido que o oxigênio através de membranas biológicas aquosas apesar do menor gradiente pressórico.',
        formulaOrLaw: 'Solubilidade CO2 ≈ 24x Solubilidade O2 -> Taxa Difusional CO2 ≈ 20x Taxa O2',
        keyReference: 'Berne & Levy, Cap. 22',
        query: 'carbon dioxide oxygen diffusion rate solubility graham law alveolar membrane'
      },
      {
        title: 'Limitação por Perfusão vs. Difusão (Equilíbrio em 0,25 s)',
        concept: 'Cinética de trânsito dos eritrócitos nos capilares pulmonares (0,75 s em repouso vs. 0,25 s no esforço) e comparação entre a captação de N2O, O2 e CO.',
        formulaOrLaw: 'Tempo de Equilíbrio Normal do O2 = 0,25 s (1/3 do Trânsito Capilar)',
        keyReference: 'Costanzo, Cap. 5',
        query: 'perfusion limited diffusion limited gas exchange transit time capillary blood'
      },
      {
        title: 'Capacidade de Difusão do Monóxido de Carbono (DLCO)',
        concept: 'Método clínico padrão-ouro com inalação de dose traço de CO para quantificação da resistência de membrana e volume de sangue capilar pulmonar.',
        formulaOrLaw: '1 / DLCO = 1 / D_membrana + 1 / (θ * V_capilar)',
        keyReference: 'West, Fisiologia Respiratória, Cap. 3',
        query: 'diffusing capacity carbon monoxide dlco pulmonary fibrosis emphysema robertson'
      }
    ]
  },

  {
    topicName: 'Transporte de Gases Sanguíneos',
    phaseId: 'w4_p5',
    level: 23,
    worldId: 'w4',
    category: 'Sistema Respiratório',
    phaseTitle: 'Transporte de Gases Sanguíneos & Efeito Haldane',
    aliases: ['Transporte de Gases', 'Efeito Haldane', 'Bicarbonato Plasmático', 'Anidrase Carbônica', 'Desvio de Cloreto'],
    specialistTitle: 'West & Boron',
    specialistBadge: 'Bioquímica Respiratória',
    guyton: {
      chapter: 'Unidade VII — Capítulo 41: Transporte de Oxigênio e Dióxido de Carbono no Sangue',
      pages: 'pp. 533-542',
      summary: 'Enquanto o O2 é transportado 98,5% ligado à hemoglobina e apenas 1,5% dissolvido no plasma, o transporte do DIÓXIDO DE CARBONO (CO2) pelo sangue dos tecidos periféricos até os pulmões ocorre através de TRÊS MODALIDADES DISTINTAS: 1) ÍON BICARBONATO DISSOLVIDO (HCO3-): representa aproximadamente 70% de todo o CO2 transportado; 2) COMPOSTOS CARBAMINO (Carbaminoemoglobina): cerca de 23% do CO2 liga-se diretamente aos grupos amino terminais das globinas da hemoglobina desoxigenada; 3) GÁS DISSOLVIDO no plasma: cerca de 7% do CO2 viaja livre em solução aquosa física.',
      keyPoint: 'O CO2 viaja 70% na forma de bicarbonato (HCO3-), 23% ligado à hemoglobina como carbamino e 7% dissolvido no plasma.'
    },
    berne: {
      chapter: 'Capítulo 23: Química do Transporte de CO2, Anidrase Carbônica e Desvio de Cloreto',
      pages: 'pp. 418-430',
      summary: 'Berne & Levy detalha a cascata bioquímica dentro da hemácia nos capilares teciduais: o CO2 difunde dos tecidos para a hemácia, onde a enzima ANIDRASE CARBÔNICA (AC-I e AC-II) catalisa a hidratação reversível ultra-rápida do CO2 em ácido carbônico: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-. Os íons H+ livres são imediatamente tamponados pelos resíduos de histidina da desoxi-hemoglobina (amortecendo a queda de pH). À medida que o bicarbonato se acumula dentro do eritrócito, ele é ejetado para o plasma sanguíneo em troca da entrada passiva de íons cloreto (Cl-) através do TROCADOR ÂNIONICO 1 (AE1 / Proteína Banda 3 da membrana). Esse fenômeno é denominado DESVIO DE CLORETO (Chloride Shift / Fenômeno de Hamburger). Nos pulmões, o processo inverte-se 100%: o cloreto sai da hemácia e o bicarbonato reentra para ser convertido em CO2 e exalado.',
      keyPoint: 'O Desvio de Cloreto (trocador AE1) expulsa HCO3- para o plasma e internaliza Cl- na hemácia nos capilares teciduais, mantendo a neutralidade elétrica.'
    },
    costanzo: {
      chapter: 'Capítulo 5: Fisiologia Respiratória — O Efeito Haldane',
      pages: 'pp. 206-210',
      summary: 'Costanzo conceitua com clareza cristalina o EFEITO HALDANE: descreve a influência direta da oxigenação da hemoglobina sobre sua afinidade pelo dióxido de carbono e prótons (H+). Nos capilares teciduais desoxigenados, a liberação de O2 converte a hemoglobina no estado tenso (desoxi-Hb), o que dobra sua capacidade de captar CO2 (formando mais carbamino) e sequestrar íons H+. Inversamente, nos capilares pulmonares, a oxigenação da hemoglobina promove a expulsão do CO2 de seus sítios amino e a liberação de prótons H+, que recombinam-se com o bicarbonato plasmático gerando CO2 gasoso livre para ser exalado pelos alvéolos.',
      keyPoint: 'Efeito Haldane: a ligação de O2 à hemoglobina nos pulmões reduz sua afinidade por CO2 e H+, forçando a liberação e eliminação do CO2 na respiração.'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 6: A Curva de Dissociação de Dióxido de Carbono',
      pages: 'pp. 88-94',
      summary: 'John B. West compara as curvas de dissociação de O2 e CO2: enquanto a curva de oxi-hemoglobina é sigmoide e satura precocemente em platô sob PO2 de 100 mmHg, a Curva de Dissociação do Dióxido de Carbono é muito mais linear e não exibe saturação na faixa fisiológica (PCO2 de 40 a 50 mmHg), operando com inclinação mais íngreme. O Efeito Haldane translada toda a curva de CO2 para baixo e para a direita quando o sangue se oxigena, maximizando a troca respiratória.',
      keyPoint: 'A curva de CO2 é muito mais íngreme e linear que a de O2: pequenas alterações ventilatórias provocam mudanças imediatas na PCO2 arterial.'
    },
    openstax: {
      section: 'Chapter 22: The Respiratory System — Section 22.5: Transport of Carbon Dioxide',
      summary: 'OpenStax ilustra o ciclo enzimático no interior do eritrócito: difusão do CO2 tecidual, ação da anidrase carbônica, saída do bicarbonato via trocador banda 3 e entrada eletricamente neutra de cloreto.',
      keyPoint: 'A anidrase carbônica eritrocitária acelera a reação em mais de 10.000 vezes em comparação com a hidratação espontânea no plasma acelular.'
    },
    merck: {
      section: 'Farmacologia Respiratória e Renal — Inibidores da Anidrase Carbônica (Acetazolamida)',
      summary: 'O Manual MSD aborda o mecanismo da Acetazolamida (Diamox): inibidor farmacológico da anidrase carbônica nos rins e hemácias. Ao inibir a AC nos túbulos renais, promove bicarbonatúria e acidose metabólica hiperclorêmica leve; essa acidose estimula os quimiorreceptores centrais e periféricos a disparar hiperventilação compensatória, sendo utilizada no tratamento e profilaxia do Mal Agudo das Montanhas.',
      keyPoint: 'Acetazolamida inibe a anidrase carbônica, induz acidose metabólica e estimula o drive ventilatório em grandes altitudes.'
    },
    researchTopics: [
      {
        title: 'As Três Formas de Transporte de CO2 no Sangue',
        concept: 'Balanço estequiométrico das frações de dióxido de carbono na circulação sistêmica: bicarbonato ionizado (70%), carbamino-compostos (23%) e gás dissolvido livre (7%).',
        formulaOrLaw: 'Conteúdo Total de CO2 = [HCO3-]plasmático + [Carbamino-Hb] + [CO2 dissolvido: 0,03 * PCO2]',
        keyReference: 'Guyton & Hall, Cap. 41',
        query: 'carbon dioxide transport blood bicarbonate carbaminohemoglobin dissolved co2'
      },
      {
        title: 'Desvio de Cloreto (Efeito Hamburger) e Trocador AE1',
        concept: 'Mecanismo molecular de antiporte aniônico na membrana do eritrócito que permuta íons bicarbonato intracelulares por íons cloreto plasmáticos preservando a eletroneutralidade.',
        formulaOrLaw: 'Trocador AE1 (Banda 3): Efluxo de 1 HCO3- : Influxo de 1 Cl-',
        keyReference: 'Berne & Levy, Cap. 23',
        query: 'chloride shift hamburger phenomenon ae1 band 3 bicarbonate transport erythrocyte'
      },
      {
        title: 'Efeito Haldane nos Pulmões e Tecidos',
        concept: 'Modulação alostérica da afinidade da hemoglobina por CO2 e prótons pelo oxigênio molecular, otimizando a captação de CO2 nos tecidos e sua exalação nos alvéolos.',
        formulaOrLaw: 'Oxigenação da Hb nos Pulmões -> Liberação Imediata de CO2 e Prótons H+',
        keyReference: 'Costanzo, Cap. 5',
        query: 'haldane effect hemoglobin oxygenation carbon dioxide affinity carbamino'
      },
      {
        title: 'Anidrase Carbônica e Farmacologia da Acetazolamida',
        concept: 'Cinética catalítica da conversão de CO2 em bicarbonato e sua inibição farmacológica por sulfonamidas para indução de acidose metabólica estimulante do centro respiratório.',
        formulaOrLaw: 'CO2 + H2O <--(Anidrase Carbônica)--> H2CO3 <--> H+ + HCO3-',
        keyReference: 'West, Fisiologia Respiratória, Cap. 6',
        query: 'carbonic anhydrase kinetics acetazolamide mountain sickness ventilation drive'
      }
    ]
  },

  {
    topicName: 'Relação V/Q e Controle Neural',
    phaseId: 'w4_p6',
    level: 24,
    worldId: 'w4',
    category: 'Sistema Respiratório',
    phaseTitle: 'Relação V/Q & Controle Neural da Respiração',
    aliases: ['Relação V/Q e Regulação', 'Relação Ventilação Perfusão', 'Quimiorreceptores', 'Controle da Respiração', 'Vasoconstrição Hipóxica Pulmonar'],
    specialistTitle: 'John B. West',
    specialistBadge: 'Relação V/Q de West',
    guyton: {
      chapter: 'Unidade VII — Capítulos 40 e 42: Relação Ventilação-Perfusão e Regulação da Respiração',
      pages: 'pp. 520-532, 543-556',
      summary: 'A hematose ideal exige que a Ventilação Alveolar (V ≈ 4,2 L/min) esteja perfeitamente acoplada à Perfusão Sanguínea Capilar Pulmonar (Q ≈ 5,0 L/min), definindo a RELAÇÃO V/Q GLOBAL MÉDIA de aproximadamente 0,8 a 0,85. O parênquima pulmonar sadio em posição ortostática exibe heterogeneidade gravitacional descrita nas TRÊS ZONAS DE WEST: no Ápice Pulmonar (Zona 1/2), a ventilação supera a perfusão (V/Q alto ≈ 3,3, com PO2 elevada de 130 mmHg e PCO2 baixa de 28 mmHg); na Base Pulmonar (Zona 3), o peso da coluna de sangue favorece imensamente a perfusão em relação à ventilação (V/Q baixo ≈ 0,63, com PO2 de 89 mmHg e PCO2 de 42 mmHg). Os dois extremos patológicos da relação V/Q são: 1) ESPAÇO MORTO ALVEOLAR (V/Q tendendo ao infinito): alvéolo é amplamente ventilado, mas recebe perfusão sanguínea nula (como na oclusão por Embolia Pulmonar Maciça); 2) SHUNT INTRAPULMONAR (V/Q tendendo a zero): alvéolo é perfundido por sangue venoso, mas recebe ventilação nula (alvéolo preenchido por pus na pneumonia, atelectasia ou edema alveolar grave).',
      keyPoint: 'Shunt (V/Q = 0): sangue venoso cruza o pulmão sem receber oxigênio (hipoxemia refratária à O2 terapia); Espaço Morto (V/Q = infinito): ventilação sem sangue (embolia).'
    },
    berne: {
      chapter: 'Capítulo 24: Controle Neural e Químico do Ritmo Ventilatório Central',
      pages: 'pp. 432-452',
      summary: 'Berne & Levy detalha o controle respiratório neural e químico no tronco encefálico: 1) Grupo Respiratório Dorsal (DRG, no NTS do bulbo): neurônios que estabelecem o ritmo intrínseco inspiratório básico basal ("rampa inspiratória"); 2) Grupo Respiratório Ventral (VRG, complexo pré-Bötzinger e núcleo retroambíguo): neurônios que comandam a expiração e inspiração forçadas ativas; 3) Centro Pneumotáxico (Ponte rostral): desliga a rampa inspiratória limitando a duração da inspiração e acelerando a frequência. Detalha os QUIMIORRECEPTORES CENTRAIS (superfície ventrolateral do bulbo): respondem primariamente à concentração de íons H+ no líquido cefalorraquidiano (LCR). Como os íons H+ não cruzam a barreira hematoencefálica (BHE), é o CO2 arterial lipossolúvel que difunde livremente pela BHE para o LCR, hidratando-se em H+ e HCO3- pela anidrase carbônica local para excitar diretamente os quimiorreceptores.',
      keyPoint: 'O principal drive respiratório em repouso ao nível do mar é a PCO2 arterial através dos íons H+ gerados no líquor encefálico nos quimiorreceptores centrais.'
    },
    costanzo: {
      chapter: 'Capítulo 5: Fisiologia Respiratória — Resposta Quimiossensível e Reflexo de Hering-Breuer',
      pages: 'pp. 210-218',
      summary: 'Costanzo analisa os QUIMIORRECEPTORES PERIFÉRICOS nos Corpos Carotídeos (via nervo glossofaríngeo) e Corpos Aórticos (via nervo vago): ao contrário dos centrais, os periféricos respondem diretamente à HIPÓXIA (queda da PO2 arterial abaixo de 60 mmHg), além de acidose e hipercapnia. Quando a PaO2 cai abaixo de 60 mmHg, os canais de K+ sensíveis ao oxigênio nas células glômicas se fecham, despolarizando a célula e abrindo canais de Ca2+ que liberam dopamina e ATP, disparando hiperventilação de urgência. Detalha o REFLEXO DE HERING-BREUER: mecanorreceptores de estiramento de adaptação lenta no músculo liso bronquial disparam potenciais via nervo vago quando os pulmões atingem insuflação excessiva (> 1,5 L), interrompendo a rampa inspiratória para proteger os alvéolos contra hiperdistensão mecânica.',
      keyPoint: 'Quimiorreceptores centrais respondem a H+/CO2 no líquor; quimiorreceptores carotídeos periféricos são os únicos que respondem à hipóxia (PaO2 < 60 mmHg).'
    },
    specialistSource: {
      chapter: 'West — Fisiologia Respiratória — Capítulo 5: Relação Ventilação-Perfusão e Vasoconstrição Hipóxica',
      pages: 'pp. 59-76',
      summary: 'John B. West explica o mecanismo exclusivo da VASOCONSTRIÇÃO PULMONAR HIPÓXICA (VPH): ao contrário de todas as artérias sistêmicas periféricas (que se dilatam na hipóxia para levar mais oxigênio aos tecidos), as arteríolas pré-capilares pulmonares SOFREM VASOCONSTRIÇÃO quando a PO2 alveolar regional cai abaixo de 70 mmHg. Essa resposta autoreguladora é brilhante: desvia o fluxo sanguíneo para longe de alvéolos hipoventilados em direção a alvéolos bem oxigenados, otimizando o acoplamento V/Q global. Contudo, em altitudes extremas ou na hipóxia alveolar generalizada do DPOC, a vasoconstrição pulmonar ocorre em todos os vasos do pulmão, gerando Hipertensão Arterial Pulmonar crônica e sobrecarga do ventrículo direito (Cor Pulmonale).',
      keyPoint: 'A vasoconstrição pulmonar hipóxica desvia o fluxo de áreas hipoventiladas para áreas oxigenadas; se for difusa, causa hipertensão pulmonar e cor pulmonale.'
    },
    openstax: {
      section: 'Chapter 22: The Respiratory System — Section 22.6: Modifications in Respiratory Functions',
      summary: 'OpenStax ilustra o feedback respiratório completo com os receptores carotídeos, bulbo, nervo frênico e diafragma atuando em alça negativa fechada para manter a PaCO2 rigorosamente em 40 mmHg.',
      keyPoint: 'A ventilação minuto ajusta-se proporcionalmente à produção metabólica de CO2 para conservar o pH arterial entre 7,35 e 7,45.'
    },
    merck: {
      section: 'Pneumologia — Embolia Pulmonar, Shunt Intrapulmonar e Oxigenoterapia na DPOC Crônica',
      summary: 'O Manual MSD discute a oxigenoterapia em pacientes com DPOC crônica retentores de CO2: como seu centro respiratório central sofreu dessensibilização crônica por tamponamento do líquor por bicarbonato, seu drive ventilatório tornou-se dependente do estímulo hipóxico periférico dos corpos carotídeos. A administração intempestiva de altas concentrações de oxigênio (FiO2 100%) remove esse drive hipóxico residual, podendo precipitar apneia, narcose por CO2 e parada respiratória.',
      keyPoint: 'Em retentores crônicos de CO2, a oxigenoterapia deve ser dosada com alvos de SatO2 entre 88% e 92% para não suprimir o estímulo respiratório hipóxico.'
    },
    researchTopics: [
      {
        title: 'Zonas de West da Relação V/Q e Gravidade',
        concept: 'Distribuição regional das pressões alveolar (PA), arterial pulmonar (Pa) e venosa pulmonar (Pv) determinando perfusão preferencial na base e ventilação proporcional no ápice.',
        formulaOrLaw: 'Zona 1 (PA > Pa > Pv); Zona 2 (Pa > PA > Pv); Zona 3 (Pa > Pv > PA)',
        keyReference: 'West, Fisiologia Respiratória, Cap. 5',
        query: 'west zones of the lung ventilation perfusion ratio gravity pulmonary blood flow'
      },
      {
        title: 'Vasoconstrição Pulmonar Hipóxica (VPH)',
        concept: 'Mecanismo homeostático intrínseco das arteríolas pulmonares que redireciona ativamente a perfusão para alvéolos normóxicos através de canais de K+ dependentes de O2.',
        formulaOrLaw: 'Queda na PAO2 alveolar (< 70 mmHg) -> Constrição Arteriolar Pré-Capilar Regional',
        keyReference: 'Guyton & Hall, Cap. 40',
        query: 'hypoxic pulmonary vasoconstriction mechanism potassium channels regional blood flow'
      },
      {
        title: 'Quimiorreceptores Centrais e Barreira Hematoencefálica',
        concept: 'Difusão molecular de CO2 gasoso arterial através da barreira hematoencefálica para geração de H+ no líquor e estimulação do centro respiratório bulbar.',
        formulaOrLaw: 'PaCO2 arterial -> Difusão BHE -> AC no LCR -> ↑ [H+]LCR -> Disparo Quimiossensível Central',
        keyReference: 'Berne & Levy, Cap. 24',
        query: 'central chemoreceptors carbon dioxide blood brain barrier cerebrospinal fluid hydrogen ions'
      },
      {
        title: 'Reflexo de Insuflação de Hering-Breuer',
        concept: 'Mecanismo reflexo inibitório vagal disparado por mecanorreceptores broncopulmonares para limitar o volume corrente máximo e prevenir barotrauma alveolar.',
        formulaOrLaw: 'Insuflação Pulmonar Excessiva -> Condução via Nervo Vago -> Inibição da Rampa no DRG',
        keyReference: 'Costanzo, Cap. 5',
        query: 'hering breuer inflation reflex stretch receptors vagus nerve respiratory center'
      }
    ]
  }
];
