// World 4: Sistema Respiratório (6 Níveis, 24 Questões)
const WORLD_4_DATA = {
  "id": "w4",
  "title": "Sistema Respiratório",
  "subtitle": "Mecânica ventilatória, espirometria, trocas gasosas, transporte e controle neural",
  "icon": "lungs",
  "phases": [
    {
      "id": "w4_p1",
      "title": "Mecânica Ventilatória & Lei de Boyle",
      "topic": "Mecânica Ventilatória e Pressões",
      "level": 19,
      "order": 1,
      "nextPhaseId": "w4_p2",
      "lesson": {
        "title": "Ventilação Pulmonar, Músculos Respiratórios e a Lei de Boyle",
        "concept": "A ventilação pulmonar é o processo mecânico cíclico de renovação do ar alveolar por convecção, impulsionado por gradientes de pressão gerados pela musculatura esquelética toracoabdominal.",
        "mechanism": "Lei de Boyle (P₁V₁ = P₂V₂): A pressão de uma massa gasosa é inversamente proporcional ao seu volume em temperatura constante. 1) Inspiração em repouso (ativa): O diafragma contrai e desce (~1 a 2 cm), enquanto os músculos intercostais externos elevam e evertem as costelas (\"alça de balde\"). O volume torácico aumenta, a pressão alveolar cai de 0 para cerca de -1 cmH₂O (subatmosférica), gerando gradiente que aspira ~500 mL de ar para os pulmões; 2) Expiração em repouso (passiva): Ocorre exclusivamente pelo relaxamento dos músculos inspiratórios e pelo recolhimento elástico espontâneo dos pulmões e caixa torácica. O volume diminui, a pressão alveolar sobe para cerca de +1 cmH₂O e o ar é expelido passivamente.",
        "examPoint": "Diferença Crítica: Respiração Basal vs. Forçada: A expiração basal NÃO recruta músculos e não gasta ATP diretamente. A expiração forçada ou ativa (exercício físico, tosse, espirro) recruta ativamente os músculos retos abdominais, oblíquos, transverso do abdome e músculos intercostais internos.",
        "example": "Em crises de asma com broncoespasmo grave, a resistência expiratória das vias aéreas aumenta dramaticamente. O paciente recruta intensamente os músculos abdominais e intercostais internos para forçar a saída do ar.",
        "quickChallenge": "Por que a expiração calma normal em repouso não exige contração de nenhum músculo esquelético?",
        "researchTopic": "Mecânica da Ventilação Pulmonar e Lei de Boyle"
      },
      "questions": [
        {
          "id": "w4_q1",
          "type": "single",
          "topic": "Mecânica Ventilatória e Pressões",
          "difficulty": "easy",
          "xp": 20,
          "title": "Durante uma inspiração tranquila em repouso (eupnéia), quais são os músculos primários responsáveis pela expansão da cavidade torácica?",
          "options": [
            "Músculo reto abdominal e músculos escalenos posteriores auxiliados pelo transverso do tórax.",
            "Músculo diafragma (gerador de ~75% da variação de volume) e músculos intercostais externos.",
            "Músculos intercostais internos em conjunto com os músculos peitoral menor e subclávio.",
            "Músculos esternocleidomastoideos e trapézios ativados bilateralmente pelo nervo acessório."
          ],
          "correctIndex": 1,
          "explanation": "Na respiração em repouso, o diafragma é o principal motor da inspiração (sua cúpula desce ao contrair), associado aos intercostais externos que tracionam as costelas para cima e para fora.",
          "whyWrong": [
            "Músculos da parede abdominal são estritamente expiratórios e atuam apenas na expiração forçada.",
            "Alternativa correta: diafragma e intercostais externos conduzem a inspiração em repouso.",
            "Intercostais internos abaixam as costelas durante a expiração ativa forçada.",
            "O esternocleidomastoideo é músculo acessório recrutado apenas em esforço ventilatório moderado a grave."
          ],
          "tip": "Inspiração basal = Diafragma (desce) + Intercostais Externos (elevam). Expiração basal = Passiva (sem músculos)."
        },
        {
          "id": "w4_q2",
          "type": "cause_effect",
          "topic": "Mecânica Ventilatória e Pressões",
          "difficulty": "medium",
          "xp": 20,
          "title": "Com base na Lei de Boyle (P ∝ 1/V), o que acontece com a pressão no interior dos alvéolos pulmonares quando a cavidade torácica se expande no início da inspiração?",
          "options": [
            "A pressão intra-alveolar eleva-se para cerca de +10 cmH₂O devido ao atrito molecular das vias de condução aéreas.",
            "A pressão alveolar torna-se discretamente subatmosférica (~ -1 cmH₂O), estabelecendo o gradiente que aspira o ar externo.",
            "A pressão alveolar permanece rigorosamente nula por ausência completa de viscosidade no fluido gasoso inspirado.",
            "Ocorre compressão mecânica imediata do gás alveolar com redução proporcional do volume dos sacos alveolares terminais."
          ],
          "correctIndex": 1,
          "explanation": "Pela Lei de Boyle, a expansão do volume alveolar provoca queda imediata na pressão intrapulmonar abaixo da atmosférica (-1 cmH₂O). O ar atmosférico flui para o interior dos pulmões até que o gradiente se anule ao final da inspiração.",
          "whyWrong": [
            "Se a pressão alveolar subisse, o ar seria forçado para fora do tórax em vez de inspirado.",
            "Alternativa correta: o aumento do volume gera pressão negativa que aspira o ar externo.",
            "Se as pressões fossem idênticas, o gradiente seria nulo e nenhum fluxo aéreo ocorreria.",
            "O volume alveolar aumenta e o gás sofre descompressão transitória, não compressão."
          ],
          "tip": "Aumentou o volume torácico -> a pressão alveolar cai abaixo de zero -> o ar entra por sucção!"
        },
        {
          "id": "w4_q3",
          "type": "single",
          "topic": "Mecânica Ventilatória e Pressões",
          "difficulty": "medium",
          "xp": 20,
          "title": "Qual grupo muscular é ativamente recrutado quando uma pessoa realiza uma \"expiração forçada máxima\", como na execução de um teste espirométrico ou durante uma crise de tosse?",
          "options": [
            "Músculo diafragma em regime de contração tetânica isométrica contínua.",
            "Músculos intercostais externos associados ao serrátil anterior e escalenos.",
            "Músculos da parede abdominal (reto, oblíquos e transverso) e intercostais internos.",
            "Músculos platisma, trapézio superior e levantadores da escápula bilateralmente."
          ],
          "correctIndex": 2,
          "explanation": "A expiração forçada exige contração ativa dos músculos da parede abdominal (que comprimem as vísceras e empurram o diafragma para cima) e dos intercostais internos (que tracionam as costelas para baixo e para dentro).",
          "whyWrong": [
            "A contração diafragmática amplia o tórax, atuando como músculo estritamente inspiratório.",
            "Intercostais externos expandem as costelas na inspiração.",
            "Alternativa correta: músculos abdominais e intercostais internos geram as altas pressões da expiração forçada.",
            "Músculos cervicais superficiais e dorsais não exercem força expiratória intratorácica."
          ],
          "tip": "Para expulsar o ar com força: contraia a barriga (abdominais) e feche a grade costal (intercostais internos)."
        },
        {
          "id": "w4_q4",
          "type": "single",
          "topic": "Mecânica Ventilatória e Pressões",
          "difficulty": "hard",
          "xp": 25,
          "title": "Em um indivíduo sadio em repouso ao nível do mar, qual é o valor da pressão alveolar no instante exato do final da inspiração, antes de se iniciar a expiração?",
          "options": [
            "-5 cmH₂O (pressão hidrostática subatmosférica típica do espaço intrapleural basal).",
            "0 cmH₂O (pressão alveolar idêntica à pressão barométrica atmosférica de referência).",
            "+3 cmH₂O (pressão hidrodinâmica positiva observada no pico do fluxo expiratório).",
            "+10 cmH₂O (pressão intrapulmonar extrema atingida durante o fechamento da glote)."
          ],
          "correctIndex": 1,
          "explanation": "No final da inspiração, o fluxo de ar cessa momentaneamente porque a pressão alveolar equalizou-se perfeitamente com a pressão atmosférica externa (0 cmH₂O relativo). O gradiente hidrostático zera antes de a expiração começar.",
          "whyWrong": [
            "-5 cmH₂O é o valor típico de repouso da pressão intrapleural, não da pressão intra-alveolar.",
            "Alternativa correta: nos pontos de transição sem fluxo, a pressão alveolar é 0 cmH₂O.",
            "+3 cmH₂O é uma pressão positiva típica observada no meio da expiração dinâmica.",
            "+10 cmH₂O ocorreria em esforço expiratório com glote fechada (manobra de Valsalva)."
          ],
          "tip": "Se não há fluxo de ar entrando nem saindo na pausa respiratória, a pressão alveolar está em ZERO."
        }
      ]
    },
    {
      "id": "w4_p2",
      "title": "Pressão Intrapleural & Surfactante",
      "topic": "Complacência e Surfactante",
      "level": 20,
      "order": 2,
      "nextPhaseId": "w4_p3",
      "lesson": {
        "title": "Pressão Intrapleural, Complacência e o Papel Biofísico do Surfactante",
        "concept": "Os pulmões e a parede torácica são mantidos em íntimo contato pela fina película de líquido na cavidade pleural. A pressão intrapleural (Pip) é cronicamente subatmosférica durante a respiração normal.",
        "mechanism": "Gênese da Pressão Negativa Pleural: Os pulmões possuem fibras elásticas que tendem continuamente a colapsar para dentro (recolhimento elástico centrípeto), enquanto a caixa torácica possui conformação elástica que tende a se expandir para fora (centrífuga). O líquido pleural entre as pleuras visceral e parietal impede que elas se separem, gerando uma pressão de sucção negativa de aproximadamente -5 cmH₂O em repouso (atingindo cerca de -8 cmH₂O ao final da inspiração).",
        "examPoint": "Surfactante Pulmonar e a Lei de Laplace: Os alvéolos são esferas revestidas por líquido aquoso. Pela Lei de Laplace (P = 2T / r), a pressão de colapso interno (P) é diretamente proporcional à tensão superficial (T) e inversamente proporcional ao raio (r). Sem surfactante, os alvéolos pequenos teriam pressões de colapso muito maiores que os alvéolos grandes, esvaziando-se para dentro deles e colapsando (atelectasia maciça). O Surfactante (sintetizado pelos Pneumócitos Tipo II, rico em dipalmitoilfosfatidilcolina - DPPC) reduz dramaticamente a tensão superficial, proporcionalmente mais nos alvéolos menores, estabilizando os diâmetros e aumentando a complacência pulmonar.",
        "example": "Pneumotórax: Uma perfuração na parede torácica comunica a cavidade pleural com a atmosfera. O ar externo entra na cavidade pleural, a pressão intrapleural sobe para 0 cmH₂O, o vácuo é perdido e o pulmão colapsa instantaneamente sob sua própria força elástica elástica centrípeta.",
        "quickChallenge": "O que aconteceria com os alvéolos pulmonares menores na ausência completa de surfactante pulmonar?",
        "researchTopic": "Surfactante Pulmonar e Mecânica Pleural"
      },
      "questions": [
        {
          "id": "w4_q5",
          "type": "single",
          "topic": "Complacência e Surfactante",
          "difficulty": "medium",
          "xp": 20,
          "title": "Por que a pressão intrapleural é cronicamente subatmosférica (negativa, em torno de -5 cmH₂O) durante todo o ciclo respiratório em condições normais?",
          "options": [
            "Porque os capilares pleurais realizam absorção ativa contínua de ar atmosférico dissolvido no líquido sinovial articular.",
            "Pelo equilíbrio mecânico entre duas forças elásticas antagônicas: a retração centrípeta do pulmão e a expansão centrífuga torácica.",
            "Porque a contração tônica diafragmática exerce tração mecânica isolada sobre os alvéolos basais pulmonares em repouso.",
            "Devido à elevada concentração de hemoglobina livre no líquido pleural que consome gases e reduz a pressão osmótica tecidual."
          ],
          "correctIndex": 1,
          "explanation": "O parênquima pulmonar tende a encolher por recolhimento elástico, enquanto a parede torácica tende a expandir-se. Como o espaço pleural é fechado e contém fina camada de líquido incompressível, essa oposição elástica gera vácuo parcial contínuo (-5 cmH₂O).",
          "whyWrong": [
            "Não há absorção de ar a partir de líquido sinovial; o espaço pleural é estéril e isolado da atmosfera.",
            "Alternativa correta: forças elásticas opostas (pulmão puxa para dentro, tórax para fora) criam a pressão negativa intrapleural.",
            "O diafragma relaxa na expiração, mas a pressão intrapleural permanece negativa mesmo com o diafragma relaxado.",
            "O líquido pleural é acelular e isento de hemoglobina livre em condições fisiológicas normais."
          ],
          "tip": "Pulmão quer fechar (elástico) e tórax quer abrir (mola). O líquido pleural no meio segura ambos sob pressão negativa (-5 cmH2O)."
        },
        {
          "id": "w4_q6",
          "type": "single",
          "topic": "Complacência e Surfactante",
          "difficulty": "hard",
          "xp": 25,
          "title": "Segundo a Lei de Laplace para estruturas esféricas (P = 2T / r), qual é o papel biofísico primordial do surfactante pulmonar nos alvéolos de menor diâmetro?",
          "options": [
            "Acelerar a hidrólise de lipídios da membrana plasmática alveolar para elevar a permeabilidade gasosa transmembrana.",
            "Reduzir intensamente a tensão superficial (T) nos alvéolos menores, equalizando as pressões de colapso e prevenindo atelectasias.",
            "Elevar a tensão superficial da película aquosa para forçar o esvaziamento dos alvéolos menores em direção aos sacos alveolares maiores.",
            "Promover a coagulação de proteínas intersticiais nos septos alveolares para impedir o extravasamento capilar hidrostático."
          ],
          "correctIndex": 1,
          "explanation": "Pela Lei de Laplace, se a tensão superficial (T) fosse constante, alvéolos com menor raio (r) teriam altíssima pressão de colapso (P = 2T/r) e esvaziariam nos maiores. O surfactante diminui T muito mais intensamente nos alvéolos pequenos, estabilizando-os e prevenindo o colapso (atelectasia).",
          "whyWrong": [
            "O surfactante é rico em fosfolipídios (DPPC) que estabilizam a interface ar-líquido, não em lipases degradativas.",
            "Alternativa correta: diminui T mais nos alvéolos pequenos, impedindo seu colapso e evitando atelectasias.",
            "Aumentar a tensão superficial agravaria o colapso e provocaria atelectasia maciça imediata.",
            "O surfactante atua na interface aérea interna do alvéolo, não na coagulação de septos intersticiais."
          ],
          "tip": "Sem surfactante: alvéolo pequeno tem pressão gigante e colapsa no grande (atelectasia). Com surfactante: todos ficam estáveis!"
        },
        {
          "id": "w4_q7",
          "type": "cause_effect",
          "topic": "Complacência e Surfactante",
          "difficulty": "hard",
          "xp": 25,
          "title": "O que ocorre imediatamente com o pulmão quando uma perfuração traumática na parede torácica estabelece um \"pneumotórax aberto\"?",
          "options": [
            "O pulmão expande-se violentamente até preencher todo o hemitórax ipsilateral por perda da resistência elástica costal.",
            "O ar entra no espaço pleural, a pressão intrapleural sobe de -5 para 0 cmH₂O e o pulmão colapsa sob seu próprio recolhimento elástico.",
            "A pressão transpulmonar atinge valores extremamente positivos forçando a hiperinsuflação imediata de todos os lobos pulmonares.",
            "Ocorre vasoconstrição reflexa nos vasos sistêmicos com expulsão de todo o líquido cefalorraquidiano para a cavidade torácica."
          ],
          "correctIndex": 1,
          "explanation": "Em condições normais, o vácuo pleural (-5 cmH₂O) mantém o pulmão distendido contra a parede torácica. No pneumotórax, o ar entra na pleura até igualar à pressão atmosférica (0 cmH₂O). Perdida a pressão de distensão, o pulmão colapsa imediatamente devido às suas fibras elásticas intrínsecas.",
          "whyWrong": [
            "O pulmão não se expande; ele colapsa em direção ao hilo pulmonar.",
            "Alternativa correta: a pressão intrapleural zera (0 cmH₂O) e o pulmão sofre colapso elástico centrípeto imediato.",
            "A pressão transpulmonar (Palv - Pip) cai para zero, impossibilitando a manutenção da insuflação.",
            "O líquido cefalorraquidiano fica restrito ao neuroeixo e não se comunica com a cavidade torácica."
          ],
          "tip": "Pneumotórax: entra ar na pleura -> pressão intrapleural vai para zero -> pulmão encolhe feito bexiga furada!"
        },
        {
          "id": "w4_q8",
          "type": "single",
          "topic": "Complacência e Surfactante",
          "difficulty": "hard",
          "xp": 25,
          "title": "Como a COMPLACÊNCIA PULMONAR (C = ΔV / ΔP) é afetada, respectivamente, no Enfisema Pulmonar e na Fibrose Pulmonar Idiopática?",
          "options": [
            "Encontra-se reduzida no enfisema e marcadamente aumentada na fibrose pulmonar por proliferação de fibras colágenas.",
            "Encontra-se aumentada no enfisema (perda de fibras elásticas) e reduzida na fibrose pulmonar (enrijecimento por deposição colágena).",
            "Permanece perfeitamente inalterada em ambas as doenças pulmonares, uma vez que a complacência depende exclusivamente do surfactante.",
            "Cai para zero no enfisema por destruição das cartilagens traqueais e eleva-se na fibrose pulmonar por hipertrofia muscular."
          ],
          "correctIndex": 1,
          "explanation": "Complacência é a facilidade de distensão pulmonar. No enfisema, a elastase destrói as fibras elásticas; o pulmão perde retração e torna-se flácido e hipercomplacente (fácil de encher, difícil de esvaziar). Na fibrose, há deposição densa de colágeno, tornando o pulmão rígido e hipocomplacente (difícil de expandir).",
          "whyWrong": [
            "Inverte os conceitos patológicos: o enfisema eleva a complacência e a fibrose a reduz.",
            "Alternativa correta: Enfisema = pulmão frouxo (alta complacência); Fibrose = pulmão duro/rígido (baixa complacência).",
            "A complacência depende criticamente da arquitetura tecidual do parênquima pulmonar além do surfactante.",
            "A complacência não cai a zero no enfisema; pelo contrário, atinge valores supranormais de complacência estática."
          ],
          "tip": "Complacência = distensibilidade (\"facilidade de esticar\"). Enfisema = pulmão frouxo (alta C). Fibrose = pulmão duro (baixa C)."
        }
      ]
    },
    {
      "id": "w4_p3",
      "title": "Volumes e Capacidades Pulmonares & Espirometria",
      "topic": "Espirometria e Volumes",
      "level": 21,
      "order": 3,
      "nextPhaseId": "w4_p4",
      "lesson": {
        "title": "Volumes, Capacidades Pulmonares e Diagnóstico Espirométrico",
        "concept": "A espirometria mede os volumes de ar inspirados e expirados em função do tempo, sendo o padrão-ouro no diagnóstico das pneumopatias obstrutivas e restritivas.",
        "mechanism": "Volumes Pulmonares Básicos (Homem jovem sadio ~70 kg): 1) Volume Corrente (VC ~500 mL); 2) Volume de Reserva Inspiratório (VRI ~3.000 mL); 3) Volume de Reserva Expiratório (VRE ~1.100 mL); 4) Volume Residual (VR ~1.200 mL): volume de ar que permanece nos pulmões mesmo após expiração forçada máxima (NÃO PODE ser medido pela espirometria simples, exigindo pletismografia ou diluição de hélio). Capacidades somam dois ou mais volumes: Capacidade Vital (CV = VC + VRI + VRE ~4.600 mL); Capacidade Pulmonar Total (CPT = CV + VR ~5.800 mL).",
        "examPoint": "Padrão Obstrutivo vs. Restritivo na Espirometria: 1) Distúrbio Obstrutivo (Asma, DPOC): Dificuldade de esvaziar os pulmões por aumento da resistência ao fluxo aéreo. O VEF₁ (volume expiratório forçado no 1º segundo) cai desproporcionalmente mais que a CVF. Critério diagnóstico: Relação VEF₁/CVF (Índice de Tiffeneau) < 70% (ou abaixo do LIN); 2) Distúrbio Restritivo (Fibrose pulmonar, escoliose severa): Dificuldade de encher os pulmões. Todos os volumes caem proporcionalmente. A relação VEF₁/CVF permanece NORMAL ou AUMENTADA (≥ 70%), com redução da CVF e CPT.",
        "example": "Um paciente fumante de 60 anos com dispneia crônica realiza espirometria: VEF₁ = 45% do previsto, CVF = 80% do previsto, relação VEF₁/CVF = 52%. Diagnóstico inequívoco: Distúrbio ventilatório obstrutivo (DPOC).",
        "quickChallenge": "Por que o Volume Residual (VR) e a Capacidade Pulmonar Total (CPT) não podem ser medidos diretamente por um espirômetro de fole convencional?",
        "researchTopic": "Espirometria Clínica e Volumes Pulmonares"
      },
      "questions": [
        {
          "id": "w4_q9",
          "type": "single",
          "topic": "Espirometria e Volumes",
          "difficulty": "medium",
          "xp": 20,
          "title": "Qual dos seguintes volumes ou capacidades pulmonares NÃO PODE ser aferido através de uma espirometria estática ou dinâmica convencional?",
          "options": [
            "Volume de Reserva Inspiratório (VRI).",
            "Capacidade Vital Forçada (CVF).",
            "Volume Residual (VR).",
            "Volume Corrente basal (VC)."
          ],
          "correctIndex": 2,
          "explanation": "O espirômetro só mede o ar que entra ou sai da boca do paciente. Como o Volume Residual (VR) nunca sai dos pulmões (mesmo após esforço expiratório máximo), ele e as capacidades que o incluem (CRF e CPT) exigem pletismografia corporal ou técnica de diluição gasosa.",
          "whyWrong": [
            "VRI é medido pedindo ao paciente que inspire ao máximo após respiração corrente normal.",
            "CVF é a medida primária da manobra de expiração forçada máxima no espirômetro.",
            "Alternativa correta: o Volume Residual não é expirável e não pode ser medido por espirometria simples.",
            "Volume corrente é facilmente registrado durante a respiração espontânea em repouso."
          ],
          "tip": "O espirômetro só mede ar em movimento. O ar que NUNCA sai do pulmão (Volume Residual) não pode ser medido por ele!"
        },
        {
          "id": "w4_q10",
          "type": "single",
          "topic": "Espirometria e Volumes",
          "difficulty": "hard",
          "xp": 25,
          "title": "Em um paciente tabagista com tosse crônica e dispneia aos esforços, qual alteração no traçado da espirometria define o diagnóstico de distúrbio ventilatório OBSTRUTIVO (DPOC)?",
          "options": [
            "Queda desproporcional do VEF₁ levando a uma redução da Relação VEF₁/CVF (Índice de Tiffeneau) para valores abaixo de 70%.",
            "Elevação acentuada da relação VEF₁/CVF para mais de 90% associada à diminuição simétrica da capacidade vital forçada.",
            "Aumento isolado do volume de reserva inspiratório com redução estrita da complacência torácica dinâmica.",
            "Normalidade absoluta de todos os fluxos com duplicação espontânea da pressão de recolhimento elástico pulmonar."
          ],
          "correctIndex": 0,
          "explanation": "A marca registrada da obstrução de vias aéreas é a lentificação do fluxo expiratório. O ar demora para sair, de modo que no primeiro segundo (VEF1) o paciente expele uma fração muito menor da sua capacidade vital forçada (CVF). Critério GOLD: VEF1/CVF pós-broncodilatador < 0,70.",
          "whyWrong": [
            "Alternativa correta: obstrução é definida pela queda de VEF1/CVF abaixo de 70% (ou do limite inferior da normalidade).",
            "Relação VEF1/CVF normal ou alta com queda simétrica de CVF caracteriza distúrbio restritivo, não obstrutivo.",
            "O distúrbio obstrutivo reduz o VRI por hiperinsuflação e aprisionamento aéreo.",
            "A DPOC cursa com fluxos expiratórios marcadamente reduzidos e diminuição do recolhimento elástico."
          ],
          "tip": "Obstrução (Asma/DPOC) = VEF1 cai mais que a CVF -> Índice de Tiffeneau (VEF1/CVF) cai abaixo de 70%!"
        },
        {
          "id": "w4_q11",
          "type": "single",
          "topic": "Espirometria e Volumes",
          "difficulty": "medium",
          "xp": 20,
          "title": "O que define a CAPACIDADE VITAL (CV) de um indivíduo sadio em termos de volumes respiratórios somados?",
          "options": [
            "A soma exclusiva do Volume Corrente com o Volume Residual alveolar inexpirável.",
            "O volume máximo de ar expelido dos pulmões a partir de uma inspiração máxima: CV = VC + VRI + VRE.",
            "A quantidade total de gás presente nos pulmões ao término da sístole atrial ventricular.",
            "O volume de ar renovado exclusivamente no espaço morto anatômico durante a taquipneia."
          ],
          "correctIndex": 1,
          "explanation": "A Capacidade Vital (CV) representa a maior variação de volume que o sistema respiratório consegue mobilizar. É a soma do Volume Corrente (VC ~500 mL), Volume de Reserva Inspiratório (VRI ~3.000 mL) e Volume de Reserva Expiratório (VRE ~1.100 mL), totalizando cerca de 4.600 mL.",
          "whyWrong": [
            "Volume Corrente mais Volume Residual não constitui uma capacidade fisiológica canônica.",
            "Alternativa correta: Capacidade Vital = VC + VRI + VRE (tudo o que conseguimos inspirar e expirar ativamente).",
            "A sístole atrial é um evento hemodinâmico cardíaco, não um parâmetro espirométrico pulmonar.",
            "O espaço morto anatômico (~150 mL) não define a capacidade vital."
          ],
          "tip": "Capacidade Vital = o ar que você consegue movimentar com todo o seu esforço (VC + VRI + VRE)."
        },
        {
          "id": "w4_q12",
          "type": "single",
          "topic": "Espirometria e Volumes",
          "difficulty": "hard",
          "xp": 25,
          "title": "Em um laudo de espirometria de um adulto sadio, qual é a faixa de normalidade esperada para a Relação de Tiffeneau (VEF₁ / CVF)?",
          "options": [
            "40 a 50%",
            "75 a 85%",
            "95 a 100%",
            "20 a 30%"
          ],
          "correctIndex": 1,
          "explanation": "Um indivíduo com vias aéreas normais consegue expelir entre 75% e 85% de toda a sua capacidade vital forçada logo no primeiro segundo da manobra de expiração forçada. Valores abaixo de 70% indicam obstrução.",
          "whyWrong": [
            "Valores de 40 a 50% indicam distúrbio ventilatório obstrutivo grave a moderado.",
            "Alternativa correta: a relação normal VEF1/CVF em adultos jovens situa-se entre 75% e 85%.",
            "95 a 100% não é fisiológico em humanos devido à resistência inercial e atrito das vias de condução aéreas.",
            "Valores de 20 a 30% representam obstrução gravíssima e risco iminente de falência ventilatória hipercápnica."
          ],
          "tip": "Indivíduo normal expira cerca de 80% de todo o seu pulmão no primeiro segundo!"
        }
      ]
    },
    {
      "id": "w4_p4",
      "title": "Trocas Gasosas & Difusão Alvéolo-Capilar",
      "topic": "Trocas Gasosas e Difusão",
      "level": 22,
      "order": 4,
      "nextPhaseId": "w4_p5",
      "lesson": {
        "title": "Hematose, Difusão Alvéolo-Capilar e a Lei de Fick",
        "concept": "A hematose é a transferência passiva de oxigênio do ar alveolar para o sangue capilar pulmonar e de dióxido de carbono no sentido oposto, governada puramente pelas leis de difusão de Fick e Henry.",
        "mechanism": "Gradientes de Pressão Parcial: 1) Oxigênio (O₂): No alvéolo, a PO₂ é de ~104 mmHg. No sangue venoso misto que chega pela artéria pulmonar, a PO₂ é de ~40 mmHg. Esse enorme gradiente de 64 mmHg promove rápido influxo de O₂ para o capilar; 2) Dióxido de Carbono (CO₂): No alvéolo, a PCO₂ é de ~40 mmHg. No sangue venoso misto, a PCO₂ é de ~45 mmHg. Embora o gradiente seja modesto (apenas 5 mmHg), o CO₂ difunde-se cerca de 20 vezes mais rápido que o O₂ porque sua solubilidade na água é 24 vezes maior que a do oxigênio!",
        "examPoint": "Tempo de Trânsito Capilar Pulmonar: A hemácia leva cerca de 0,75 s para atravessar o capilar pulmonar em repouso. A hematose completa é atingida em apenas 0,25 s (primeiro terço do capilar). Esse \"tempo de reserva\" de 0,50 s garante que, mesmo durante exercício físico intenso (quando o débito cardíaco triplica e o tempo de trânsito cai para 0,25 s), o sangue arterial continue 100% oxigenado.",
        "example": "Na Fibrose Pulmonar com espessamento da membrana alvéolo-capilar, a velocidade de difusão cai pela Lei de Fick. Em repouso o paciente pode manter oxigenação limítrofe, mas ao exercitar-se o tempo de trânsito encurta e ele dessatura agudamente (hipoxemia de esforço).",
        "quickChallenge": "Por que o CO₂ equilibra-se perfeitamente entre o sangue e o alvéolo mesmo com um gradiente pressórico tão menor que o do O₂?",
        "researchTopic": "Difusão Alvéolo-Capilar e Hematose Pulmonar"
      },
      "questions": [
        {
          "id": "w4_q13",
          "type": "single",
          "topic": "Trocas Gasosas e Difusão",
          "difficulty": "medium",
          "xp": 20,
          "title": "Quais são as pressões parciais típicas de oxigênio (PO₂) e dióxido de carbono (PCO₂) no ar alveolar e no sangue venoso misto ao nível do mar?",
          "options": [
            "Alvéolo: PO₂ = 40 e PCO₂ = 104 mmHg | Sangue venoso: PO₂ = 104 e PCO₂ = 40 mmHg.",
            "Alvéolo: PO₂ = 104 e PCO₂ = 40 mmHg | Sangue venoso misto: PO₂ = 40 e PCO₂ = 45 mmHg.",
            "Alvéolo: PO₂ = 160 e PCO₂ = 0 mmHg | Sangue venoso misto: PO₂ = 100 e PCO₂ = 100 mmHg.",
            "Alvéolo: PO₂ = 760 e PCO₂ = 45 mmHg | Sangue venoso misto: PO₂ = 760 e PCO₂ = 40 mmHg."
          ],
          "correctIndex": 1,
          "explanation": "O ar alveolar apresenta PO2 ≈ 104 mmHg e PCO2 ≈ 40 mmHg. O sangue venoso que chega aos pulmões apresenta PO2 ≈ 40 mmHg e PCO2 ≈ 45 mmHg, sustentando os gradientes de difusão de O2 para dentro do sangue e de CO2 para fora.",
          "whyWrong": [
            "Inverte as pressões: no alvéolo o oxigênio é alto (104) e no sangue venoso é baixo (40).",
            "Alternativa correta: Alvéolo (PO2 104 / PCO2 40); Sangue venoso misto (PO2 40 / PCO2 45).",
            "160 mmHg é a PO2 do ar atmosférico seco ao nível do mar, não a do ar alveolar umidificado.",
            "760 mmHg é a pressão atmosférica barométrica total, não a pressão parcial de um gás isolado."
          ],
          "tip": "Grave os números essenciais: Alvéolo = 104 de O2 / 40 de CO2. Sangue venoso = 40 de O2 / 45 de CO2."
        },
        {
          "id": "w4_q14",
          "type": "cause_effect",
          "topic": "Trocas Gasosas e Difusão",
          "difficulty": "hard",
          "xp": 25,
          "title": "Mesmo com um gradiente de pressão parcial modesto para o CO₂ (apenas 5 mmHg vs 64 mmHg para o O₂), por que o CO₂ difunde-se com extrema facilidade através da barreira hematogasosa?",
          "options": [
            "Porque o CO₂ é transportado ativamente por carreadores transmembranares que consomem duas moléculas de ATP por ciclo.",
            "Porque a solubilidade do CO₂ nos líquidos e membranas biológicas é cerca de 24 vezes maior que a do oxigênio molecular.",
            "Porque o peso molecular do CO₂ é muito menor que o do O₂, conferindo velocidade cinética supersônica.",
            "Porque a hemoglobina catalisa a destruição química do dióxido de carbono na membrana celular alveolar."
          ],
          "correctIndex": 1,
          "explanation": "Pela Lei de Fick e Henry, a taxa de difusão de um gás é proporcional à sua solubilidade e inversamente proporcional à raiz quadrada de seu peso molecular. Por ser ~24 vezes mais solúvel em água que o O2, a constante de difusão do CO2 é ~20 vezes superior, compensando o menor gradiente.",
          "whyWrong": [
            "A difusão dos gases respiratórios é estritamente passiva e não depende de bombas ou hidrólise de ATP.",
            "Alternativa correta: a solubilidade extremamente elevada do CO2 garante difusão ultra-rápida mesmo com gradiente de 5 mmHg.",
            "O CO2 (44 Da) é mais pesado que o O2 (32 Da), não mais leve.",
            "O CO2 não é destruído; ele é expirado na forma de molécula intacta de gás carbônico."
          ],
          "tip": "Solubilidade compensa pressão: CO2 tem 24x mais solubilidade, logo precisa de muito menos gradiente para difundir!"
        },
        {
          "id": "w4_q15",
          "type": "single",
          "topic": "Trocas Gasosas e Difusão",
          "difficulty": "hard",
          "xp": 25,
          "title": "Quanto tempo uma hemácia leva para atravessar o capilar pulmonar em repouso e em quanto tempo o sangue já se encontra completamente oxigenado?",
          "options": [
            "Trânsito total de cerca de 0,75 segundo; oxigenação completa alcançada em apenas 0,25 segundo (no primeiro terço capilar).",
            "Trânsito total de cerca de 5,00 segundos; oxigenação completa alcançada no último milissegundo antes de entrar na veia.",
            "Trânsito total de 0,10 segundo; oxigenação parcial de apenas 50% devido à espessura intransponível da lâmina basal.",
            "Trânsito total de 60 segundos correspondente à duração do ciclo de despolarização espontânea do nó sinoatrial."
          ],
          "correctIndex": 0,
          "explanation": "Em repouso, a hemácia passa 0,75 s no capilar. Em condições normais, em 0,25 s a PO2 capilar já atinge 104 mmHg. Essa margem de segurança de dois terços (0,50 s) permite manter a saturação máxima mesmo quando o débito sobe no exercício físico.",
          "whyWrong": [
            "Alternativa correta: trânsito = 0,75 s; saturação plena aos 0,25 s (amplo tempo de reserva fisiológico).",
            "O trânsito capilar é rápido (< 1 segundo), não durando 5 segundos.",
            "O tempo de trânsito em repouso é de 0,75 s e a oxigenação normal é plena (quase 100%).",
            "60 segundos é um minuto inteiro; o sangue circula pelo coração em fração de segundos."
          ],
          "tip": "Tempo de trânsito = 0,75 s. Tempo para oxigenar = 0,25 s. Temos 0,50 s de pura reserva para o exercício!"
        },
        {
          "id": "w4_q16",
          "type": "single",
          "topic": "Trocas Gasosas e Difusão",
          "difficulty": "hard",
          "xp": 25,
          "title": "Em um paciente com Fibrose Pulmonar e espessamento progressivo da barreira alvéolo-capilar, por que a hipoxemia se agrava dramaticamente durante o exercício físico leve?",
          "options": [
            "Porque o exercício físico suprime a ventilação alveolar e diminui o volume corrente para índices estritamente inferiores ao espaço morto anatômico.",
            "Porque o aumento do débito cardíaco encurta o tempo de trânsito capilar para ~0,25 s, impedindo o equilíbrio difusional através da membrana espessada.",
            "Porque os miócitos esqueléticos liberam radicais livres na circulação que degradam e desintegram todas as moléculas de hemoglobina funcional.",
            "Porque as vias aéreas de condução sofrem colapso dinâmico instantâneo e total por destruição completa das cartilagens brônquicas e traqueais."
          ],
          "correctIndex": 1,
          "explanation": "Com membrana espessada, a difusão é lenta e exige mais tempo para oxigenar o sangue. Em repouso (0,75 s), a hemácia ainda consegue equilibrar-se. No exercício, o fluxo acelera e a hemácia atravessa em 0,25 s, saindo do pulmão antes de conseguir captar o O2 necessário.",
          "whyWrong": [
            "A ventilação minuto aumenta expressivamente no esforço físico por estimulação dos centros bulbares.",
            "Alternativa correta: o tempo de trânsito cai para 0,25 s e a barreira fibrótica espessa impede a difusão a tempo.",
            "O esforço muscular não induz destruição em massa da hemoglobina.",
            "A fibrose acomete o parênquima alveolar intersticial, não destruindo os anéis cartilaginosos da árvore brônquica."
          ],
          "tip": "Fibrose = membrana grossa. No repouso dá tempo (0,75 s). No exercício o sangue corre rápido demais (0,25 s) e o paciente dessatura!"
        }
      ]
    },
    {
      "id": "w4_p5",
      "title": "Transporte de Gases Sanguíneos & Efeito Haldane",
      "topic": "Transporte de Gases Sanguíneos",
      "level": 23,
      "order": 5,
      "nextPhaseId": "w4_p6",
      "lesson": {
        "title": "Transporte de O₂ e CO₂ no Sangue e o Efeito Haldane",
        "concept": "O oxigênio e o dióxido de carbono são transportados no sangue em diferentes frações físico-químicas, integrando o transporte gasoso com o equilíbrio ácido-base sistêmico.",
        "mechanism": "Formas de Transporte: 1) Oxigênio (O₂): 98,5% ligado reversivelmente à hemoglobina nos eritrócitos e apenas 1,5% dissolvido fisicamente no plasma (que determina a PO₂ arterial); 2) Dióxido de Carbono (CO₂): ~70% como Íon Bicarbonato (HCO₃⁻); ~23% como Compostos Carbamino (carbamino-hemoglobina); ~7% dissolvido fisicamente no plasma.",
        "examPoint": "O Fenômeno do Desvio de Cloreto (Chloride Shift): Nos tecidos, o CO2 entra na hemácia, onde a enzima Anidrase Carbônica converte CO2 + H2O em H2CO3, que se dissocia em H+ e HCO3-. O HCO3- é ejetado para o plasma pelo trocador aniônico AE1, enquanto íons Cloreto (Cl-) entram na hemácia para manter a neutralidade elétrica. Nos pulmões, o processo se inverte rigorosamente.",
        "example": "Efeito Haldane: A oxigenação da hemoglobina nos capilares alveolares diminui sua afinidade pelo CO₂, forçando a liberação rápida de CO₂ para o alvéolo.",
        "quickChallenge": "Por que o oxigênio dissolvido no plasma (1,5%) é tão importante se 98,5% do oxigênio viaja ligado à hemoglobina?",
        "researchTopic": "Transporte de Dióxido de Carbono e Efeito Haldane"
      },
      "questions": [
        {
          "id": "w4_q17",
          "type": "single",
          "topic": "Transporte de Gases Sanguíneos",
          "difficulty": "medium",
          "xp": 20,
          "title": "Como a maior parte do dióxido de carbono (CO₂) gerado pelo metabolismo celular é transportada no sangue venoso até os pulmões?",
          "options": [
            "Ligado covalentemente ao átomo de ferro central do grupo heme competindo com o oxigênio.",
            "Exclusivamente dissolvido como gás livre na fração líquida da água plasmática arterial.",
            "Na forma de íons Bicarbonato (HCO₃⁻), correspondendo a cerca de 70% do CO₂ total transportado.",
            "Aprisionado em vesículas lipídicas endocíticas sintetizadas pelos macrófagos alveolares."
          ],
          "correctIndex": 2,
          "explanation": "Cerca de 70% do CO2 é transportado como bicarbonato (HCO3-), 23% ligado a grupos amino da globina (carbamino-Hb) e apenas 7% dissolvido fisicamente no plasma.",
          "whyWrong": [
            "O CO2 liga-se aos grupos amino das cadeias de globina (carbamino-hemoglobina), e não ao ferro do heme.",
            "O CO2 dissolvido representa apenas cerca de 7% do total.",
            "Alternativa correta: 70% do CO2 é convertido pela anidrase carbônica em bicarbonato.",
            "Gases não viajam em vesículas lipídicas de macrófagos."
          ],
          "tip": "Transporte de CO2: 70% Bicarbonato, 23% Carbamino (na globina), 7% Dissolvido."
        },
        {
          "id": "w4_q18",
          "type": "cause_effect",
          "topic": "Transporte de Gases Sanguíneos",
          "difficulty": "hard",
          "xp": 25,
          "title": "O que é o \"Desvio de Cloreto\" (Chloride Shift / Efeito Hamburger) que ocorre na membrana das hemácias nos leitos capilares sistêmicos?",
          "options": [
            "A substituição do átomo de ferro do anel tetrapirrólico da hemoglobina por íons de cloro livre para potencializar a taxa de difusão tecidual.",
            "O efluxo de íons bicarbonato (HCO₃⁻) da hemácia para o plasma, equilibrado eletricamente pela entrada de íons cloreto (Cl⁻) via trocador AE1.",
            "A secreção activa de cloreto de sódio pelas células da mucosa brônquica para neutralizar a acidez gerada pela difusão do gás carbônico capilar.",
            "A precipitação de cristais de cloreto de potássio no sarcoplasma das fibras musculares provocada pelo aumento abrupto da acidez intracelular."
          ],
          "correctIndex": 1,
          "explanation": "Ao converter CO2 em HCO3- e H+, a hemácia acumula bicarbonato citosólico. O trocador aniônico AE1 (Banda 3) exporta HCO3- para o plasma e, para manter o potencial elétrico neutro, importa Cl- para o interior da hemácia.",
          "whyWrong": [
            "O cloro não substitui o ferro do grupo heme em nenhuma circunstância biológica.",
            "Alternativa correta: saída de bicarbonato com entrada estequiométrica de cloreto (Chloride Shift) via trocador AE1.",
            "O efeito Hamburger é um fenômeno eritrocitário intravascular, não gástrico.",
            "Não ocorre precipitação de cristais de sal em condições fisiológicas normais."
          ],
          "tip": "Desvio de Cloreto: Bicarbonato SAI para o plasma -> Cloreto ENTRA na hemácia para manter a carga neutra!"
        },
        {
          "id": "w4_q19",
          "type": "single",
          "topic": "Transporte de Gases Sanguíneos",
          "difficulty": "hard",
          "xp": 25,
          "title": "O que descreve com exatidão o EFEITO HALDANE na dinâmica de transporte e eliminação do dióxido de carbono nos capilares pulmonares?",
          "options": [
            "O resfriamento do sangue na circulação capilar alveolar desencadeia a quebra espontânea do tetrâmero de hemoglobina em subunidades monoméricas.",
            "A ligação do oxigênio à hemoglobina nos pulmões diminui sua afinidade pelo CO₂ e por prótons (H⁺), facilitando a liberação e eliminação de CO₂.",
            "A presença de monóxido de carbono no plasma arterial estimula a síntese e a secreção renal acelerada de tampão bicarbonato para corrigir o pH.",
            "Os pneumócitos tipo II utilizam o excesso de dióxido de carbono como substrato bioquímico direto para sintetizar fosfolipídios do surfactante."
          ],
          "correctIndex": 1,
          "explanation": "O Efeito Haldane é o análogo do Efeito Bohr para o CO2: a oxi-hemoglobina é um ácido mais forte, ligando menos CO2 e liberando H+, o que desloca o equilíbrio do bicarbonato para CO2 e H2O, promovendo rápida liberação do gás no alvéolo.",
          "whyWrong": [
            "O tetrâmero de hemoglobina preserva sua estrutura quaternária funcional intacta.",
            "Alternativa correta: Oxigênio ligando na hemoglobina nos alvéolos = descarrega CO2 para o ar alveolar (Efeito Haldane).",
            "O Efeito Haldane é uma propriedade da molécula de hemoglobina nos eritrócitos, não um mecanismo renal.",
            "O CO2 é um produto final do metabolismo celular excretado pelos pulmões, não precursor de surfactante."
          ],
          "tip": "Efeito Bohr: CO2/ácido ajuda a soltar O2 nos tecidos. Efeito Haldane: O2 ajuda a soltar CO2 nos pulmões!"
        },
        {
          "id": "w4_q20",
          "type": "single",
          "topic": "Transporte de Gases Sanguíneos",
          "difficulty": "medium",
          "xp": 20,
          "title": "Qual enzima eritrocitária catalisa a conversão reversível ultrarrápida de CO₂ e água em ácido carbônico (H₂CO₃)?",
          "options": [
            "Lactato desidrogenase.",
            "Fosfofrutoquinase-1.",
            "Creatina quinase.",
            "Anidrase Carbônica."
          ],
          "correctIndex": 3,
          "explanation": "A Anidrase Carbônica (isoforma CA-I e CA-II nos eritrócitos) acelera a reação CO2 + H2O <-> H2CO3 em milhares de vezes, sendo crucial para a conversão de CO2 em bicarbonato nos tecidos e sua reversão nos pulmões.",
          "whyWrong": [
            "Lactato desidrogenase interconverte piruvato e lactato na glicólise anaeróbia.",
            "Fosfofrutoquinase-1 é enzima marca-passo da via glicolítica.",
            "Creatina quinase fosforila creatina no metabolismo energético do músculo e cérebro.",
            "Alternativa correta: Anidrase Carbônica catalisa CO2 + H2O <-> H2CO3."
          ],
          "tip": "Anidrase Carbônica = a enzima do CO2 e do Bicarbonato no sangue e nos rins."
        }
      ]
    },
    {
      "id": "w4_p6",
      "title": "Relação V/Q & Controle Neural da Respiração",
      "topic": "Relação V/Q e Controle Neural",
      "level": 24,
      "order": 6,
      "nextPhaseId": "w5_p1",
      "lesson": {
        "title": "Relação Ventilação-Perfusão (V/Q) e Controle Neural Respiratório",
        "concept": "Para uma hematose ideal, a ventilação alveolar (V) deve estar perfeitamente pareada com a perfusão capilar pulmonar (Q). A respiração rítmica é gerada e modulada por centros neuronais no tronco encefálico.",
        "mechanism": "Relação V/Q: 1) Normal: V/Q médio pulmonar ≈ 0,8 (4 L/min de ventilação / 5 L/min de fluxo); 2) Espaço Morto Alveolar (V/Q -> infinito): Alvéolo ventilado mas não perfundido (ex: tromboembolismo pulmonar); 3) Efeito Shunt (V/Q -> zero): Alvéolo perfundido mas não ventilado (ex: atelectasia, pneumonia obstrutiva).",
        "examPoint": "Vasoconstrição Pulmonar Hipóxica: Fenômeno ÚNICO da circulação pulmonar! Na circulação sistêmica, a hipóxia causa vasodilatação para nutrir o tecido. Na circulação pulmonar, a hipóxia alveolar causa VASOCONSTRIÇÃO nas arteríolas locais. Isso desvia o fluxo de sangue das áreas alvéolo-capilares mal ventiladas para regiões bem ventiladas, otimizando o pareamento V/Q!",
        "example": "Quimiorreceptores Centrais: Localizados na superfície ventral do bulbo, respondem diretamente a íons H+ no líquido cefalorraquidiano (LCR), derivados da difusão de CO2 através da barreira hematoencefálica. A elevação da PCO2 arterial (hipercapnia) é o estímulo fisiológico dominante para aumentar a ventilação.",
        "quickChallenge": "Por que a vasoconstrição pulmonar hipóxica generalizada em grandes altitudes pode levar ao desenvolvimento de hipertensão pulmonar e edema de pulmão?",
        "researchTopic": "Relação Ventilação-Perfusão e Centros Respiratórios Bulbares"
      },
      "questions": [
        {
          "id": "w4_q21",
          "type": "single",
          "topic": "Relação V/Q e Controle Neural",
          "difficulty": "medium",
          "xp": 20,
          "title": "Qual é a resposta vascular adaptativa única que ocorre nas arteríolas pulmonares que irrigam alvéolos hipóxicos (mal ventilados)?",
          "options": [
            "Vasodilatação intensa com abertura de anastomoses arteriovenosas.",
            "Vasoconstrição pulmonar hipóxica desviar o fluxo para áreas bem ventiladas.",
            "Angiogênese maciça acelerada com proliferação de capilares anômalos.",
            "Bloqueio completo da atividade da enzima conversora de angiotensina."
          ],
          "correctIndex": 1,
          "explanation": "Ao contrário dos vasos sistêmicos (que dilatam com hipóxia), as arteríolas pulmonares sofrem vasoconstrição quando a PO2 alveolar cai. Isso redireciona o sangue desoxigenado para alvéolos bem ventilados, preservando a relação V/Q global.",
          "whyWrong": [
            "Vasodilatação ocorre na circulação sistêmica com hipóxia, mas na circulação pulmonar ocorre vasoconstrição!",
            "Alternativa correta: Vasoconstrição Pulmonar Hipóxica (desvia o sangue de onde não há ar para onde há ar).",
            "Angiogênese é um processo crônico de semanas/meses, não a resposta vasomotora imediata.",
            "A ECA endotelial continua ativa nos leitos vasculares funcionantes."
          ],
          "tip": "Pegadinha clássica de prova: No corpo todo, hipóxia DILATA vasos. No PULMÃO, hipóxia CONTRAI vasos (Vasoconstrição Pulmonar Hipóxica)!"
        },
        {
          "id": "w4_q22",
          "type": "single",
          "topic": "Relação V/Q e Controle Neural",
          "difficulty": "hard",
          "xp": 25,
          "title": "O que define o fenômeno de \"Shunt Intrapulmonar\" (relação V/Q tendendo a zero) em um quadro clínico de pneumonia lobar condensada?",
          "options": [
            "Alvéolos amplamente ventilados que recebem perfusão sanguínea nula ou abolida devido à oclusão vascular por êmbolo maciço.",
            "Alvéolos preenchidos por exsudato purulento que continuam sendo perfundidos por sangue venoso sem realizar trocas gasosas.",
            "Vasodilatação arteriolar generalizada com aumento maciço da permeabilidade endotelial e extravasamento de plasma para a pele.",
            "Paralisia completa do centro respiratório dorsal do tronco encefálico provocada pela hipoxemia arterial grave e refratária."
          ],
          "correctIndex": 1,
          "explanation": "Shunt (V/Q = 0) significa que o sangue venoso atravessa o pulmão sem entrar em contato com gás alveolar oxigenado (como em alvéolos condensados por pneumonia ou atelectasia), misturando-se desoxigenado ao sangue arterial (hipoxemia refratária à O2 puro).",
          "whyWrong": [
            "Alvéolos ventilados sem perfusão definem Espaço Morto Alveolar (V/Q = infinito), não Shunt.",
            "Alternativa correta: Shunt = perfusão presente em alvéolo sem ventilação (V/Q = 0).",
            "Extravasamento subcutâneo é anasarca, não shunt pulmonar.",
            "O shunt é um distúrbio intrapulmonar de pareamento V/Q, e não paralisia do centro bulbar."
          ],
          "tip": "V/Q = 0 é SHUNT (tem sangue, não tem ar). V/Q = infinito é ESPAÇO MORTO (tem ar, não tem sangue)."
        },
        {
          "id": "w4_q23",
          "type": "single",
          "topic": "Relação V/Q e Controle Neural",
          "difficulty": "hard",
          "xp": 25,
          "title": "Em um indivíduo saudável em repouso ao nível do mar, qual é o principal estímulo químico que governa o drive ventilatório basal nos quimiorreceptores centrais?",
          "options": [
            "A queda da PO₂ arterial sistêmica para valores inferiores a 90 mmHg percebida pelos mecanorreceptores das paredes das artérias carótidas.",
            "A concentração de íons H⁺ no líquido cefalorraquidiano (LCR) resultante da difusão do CO₂ através da barreira hematoencefálica.",
            "A concentração plasmática de nitrogênio gasoso insolúvel em circulação captada diretamente pelas terminações aferentes do nervo vago.",
            "A osmolaridade total do líquido intersticial encefálico monitorada pelos osmorreceptores localizados no núcleo supraóptico hipotalâmico."
          ],
          "correctIndex": 1,
          "explanation": "O CO2 arterial atravessa livremente a barreira hematoencefálica para o LCR, onde se hidrata formando H+ e HCO3-. Os quimiorreceptores centrais no bulbo são extremamente sensíveis a esse H+, sendo o principal determinante do ritmo respiratório minuto em condições normais.",
          "whyWrong": [
            "A PO2 só se torna o estímulo respiratório dominante em hipoxemia grave (PO2 < 60 mmHg), via corpúsculos carotídeos periféricos.",
            "Alternativa correta: o CO2 atravessa a BHE, gera H+ no LCR e excita os quimiorreceptores centrais bulbares.",
            "O nitrogênio é metabolicamente inerte e não regula centros ventilatórios normais.",
            "Os osmorreceptores supraópticos controlam a secreção de ADH e a sede, não o drive respiratório minuto."
          ],
          "tip": "Quem manda na respiração basal é o CO2 (via H+ no líquor nos quimiorreceptores centrais). O oxigênio só assume se cair abaixo de 60 mmHg!"
        },
        {
          "id": "w4_q24",
          "type": "single",
          "topic": "Relação V/Q e Controle Neural",
          "difficulty": "hard",
          "xp": 25,
          "title": "Qual é o papel fisiológico do Reflexo de Insuflação de Hering-Breuer transmitido através de fibras do Nervo Vago (NC X)?",
          "options": [
            "Elevar de forma reflexa a frequência respiratória minuto sempre que o pH plasmático arterial se desloca para valores excessivamente alcalinos.",
            "Interromper a inspiração e iniciar a expiração quando os pulmões atingem insuflação excessiva, prevenindo a hiperdistensão alveolar.",
            "Interromper o fluxo sanguíneo na circulação pulmonar durante o ato reflexo de deglutição de bolos alimentares sólidos pela faringe e laringe.",
            "Estimular a motilidade gastrointestinal e a secreção ácida gástrica durante as fases profundas de sono com sincronização de ondas lentas."
          ],
          "correctIndex": 1,
          "explanation": "Os mecanorreceptores de estiramento de adaptação lenta localizados nas paredes brônquicas disparam quando os pulmões se hiperinsuflam. Os sinais sobem pelo nervo vago ao grupo respiratório dorsal bulbar, inibindo a rampa inspiratória e protegendo os alvéolos contra rotura mecânica.",
          "whyWrong": [
            "O reflexo de Hering-Breuer é um reflexo mecânico protetor de estiramento, não quimiossensorial.",
            "Alternativa correta: estiramento pulmonar excessivo -> vago inibe inspiração e deflagra expiração (proteção contra barotrauma).",
            "A deglutição fecha a glote e inibe a respiração, mas isso é coordenado pelo centro da deglutição, não por Hering-Breuer.",
            "A secreção gástrica basal não é governada por mecanorreceptores brônquicos."
          ],
          "tip": "Hering-Breuer = \"Freio de mão\" da inspiração. Se o pulmão esticar demais, o vago manda parar de puxar ar!"
        }
      ]
    }
  ]
};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.WORLD_4_DATA = WORLD_4_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORLD_4_DATA };
}
