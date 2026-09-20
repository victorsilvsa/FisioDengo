// World 3: Fluxo Sanguíneo e Sistema Cardiovascular (6 Níveis, 24 Questões)
const WORLD_3_DATA = {
  "id": "w3",
  "title": "Fluxo Sanguíneo & Sistema Cardiovascular",
  "subtitle": "Hemodinâmica, eletrofisiologia, ciclo cardíaco, débito e regulação pressórica",
  "icon": "heartPulse",
  "phases": [
    {
      "id": "w3_p1",
      "title": "Hemodinâmica & Resistência Vascular",
      "topic": "Hemodinâmica e Resistência",
      "level": 13,
      "order": 1,
      "nextPhaseId": "w3_p2",
      "lesson": {
        "title": "Hemodinâmica: Pressão, Fluxo e a Lei de Poiseuille",
        "concept": "O fluxo sanguíneo (Q) através de qualquer leito vascular é determinado pela diferença de pressão entre a entrada e a saída (ΔP) dividida pela resistência vascular (R): Q = ΔP / R. O sangue flui invariavelmente de regiões de maior pressão para menor pressão.",
        "mechanism": "Pela equação de Hagen-Poiseuille, a resistência vascular (R) depende do comprimento do vaso (L), da viscosidade do sangue (η) e, de modo determinante, da quarta potência do raio vascular (r): R = (8 · η · L) / (π · r⁴). Pequenas alterações no diâmetro arteriolar modulam massivamente a resistência e o fluxo tecidual.",
        "examPoint": "As arteríolas são os principais vasos de resistência do sistema cardiovascular, contendo rica túnica muscular lisa sensível a estímulos neurais e metabólicos. Se o raio de uma arteríola é reduzido pela metade (1/2), sua resistência aumenta 16 vezes (2⁴ = 16) e o fluxo cai na mesma proporção se a pressão for constante.",
        "example": "Durante o exercício físico vigoroso, arteríolas que irrigam os músculos ativos sofrem vasodilatação intensa por adenosina, potássio e lactato, aumentando dramaticamente o raio vascular e elevando o fluxo sanguíneo local em até 20 vezes.",
        "quickChallenge": "Se o raio arteriolar diminuir em 50%, quantas vezes aumentará a resistência vascular?",
        "researchTopic": "Equação de Poiseuille e Vasos de Resistência"
      },
      "questions": [
        {
          "id": "w3_q1",
          "type": "single",
          "topic": "Hemodinâmica e Resistência",
          "difficulty": "medium",
          "xp": 20,
          "title": "De acordo com a Lei de Poiseuille, se o raio (r) de uma arteríola sofrer uma redução de 50% por vasoconstrição, o que ocorrerá com sua resistência vascular?",
          "options": [
            "A resistência vascular periférica permanecerá inalterada porque o comprimento linear do vaso é constante.",
            "A resistência vascular elevar-se-á linearmente em exatamente duas vezes por conservação de momento linear.",
            "A resistência vascular aumentará em dezesseis vezes (2⁴ = 16) em decorrência da relação com a quarta potência.",
            "A resistência vascular declinará para um dezesseis avos do valor basal por aumento da velocidade de cisalhamento."
          ],
          "correctIndex": 2,
          "explanation": "Pela Lei de Poiseuille, a resistência vascular é inversamente proporcional à quarta potência do raio (R ∝ 1/r⁴). Ao reduzir o raio à metade (r/2), a nova resistência é proporcional a 1 / (1/2)⁴ = 1 / (1/16) = 16 vezes a inicial.",
          "whyWrong": [
            "O raio é o parâmetro físico com maior impacto sobre a resistência vascular hidrodinâmica.",
            "A variação não é linear com o diâmetro, mas regida pela quarta potência.",
            "Alternativa correta: redução pela metade do raio eleva a resistência em 16 vezes.",
            "Vasoconstrição reduz o diâmetro da luz vascular e sempre aumenta a resistência ao fluxo."
          ],
          "tip": "Raio elevado à 4ª potência: metade do raio = 2⁴ = 16x mais resistência!"
        },
        {
          "id": "w3_q2",
          "type": "cause_effect",
          "topic": "Hemodinâmica e Resistência",
          "difficulty": "medium",
          "xp": 20,
          "title": "Para que o sangue flua continuamente da raiz aórtica até os capilares e retorne ao átrio direito, qual condição hemodinâmica é obrigatória?",
          "options": [
            "A velocidade de circulação nos capilares teciduais deve ser superior àquela aferida na raiz aórtica ascendente.",
            "A pressão hidrostática no interior do átrio direito deve superar a pressão sistólica na raiz da artéria aorta.",
            "Deve existir um gradiente contínuo de pressão hidrostática decrescente (ΔP > 0) ao longo de todo o leito vascular sistêmico.",
            "Todas as quatro valvas cardíacas devem permanecer abertas simultaneamente durante toda a fase de relaxamento ventricular."
          ],
          "correctIndex": 2,
          "explanation": "O deslocamento de qualquer fluido real exige diferença líquida de pressão (Q = ΔP / R). O sangue parte de ~100 mmHg na aorta e chega a ~2 a 4 mmHg no átrio direito.",
          "whyWrong": [
            "A velocidade nos capilares é a mais lenta de todo o sistema devido à gigantesca área de secção transversal somada.",
            "Se a pressão no átrio direito superasse a aórtica, o fluxo sanguíneo seria retrógrado.",
            "Alternativa correta: o sangue flui impulsionado pelo gradiente contínuo de alta para baixa pressão.",
            "As valvas cardíacas se alternam estritamente entre abertura e fechamento para garantir fluxo unidirecional."
          ],
          "tip": "Lembre-se: fluidos movem-se por diferença de pressão (ΔP), e não pelo valor de pressão absoluta."
        },
        {
          "id": "w3_q3",
          "type": "single",
          "topic": "Hemodinâmica e Resistência",
          "difficulty": "hard",
          "xp": 25,
          "title": "Embora a velocidade do fluxo sanguíneo seja máxima na aorta (~40 cm/s), ela cai para ~0,05 cm/s nos capilares. Qual é a causa biofísica e o papel funcional dessa desaceleração?",
          "options": [
            "A pressão capilar torna-se subatmosférica, o que freia os eritrócitos para impedir hemólise mecânica por atrito.",
            "A área de secção transversal total somada dos capilares é centenas de vezes maior que a da aorta, permitindo tempo hábil para trocas.",
            "Ocorre vasoconstrição esfincteriana pré-capilar contínua que bloqueia o influxo de solutos hidrossolúveis teciduais.",
            "A viscosidade sanguínea diminui para zero nos vasos microscópicos pelo fenômeno biofísico de agregação plaquetária reversível."
          ],
          "correctIndex": 1,
          "explanation": "Pela equação da continuidade (Q = v · A), a velocidade (v) é inversamente proporcional à área de secção transversal total (A). Como existem bilhões de capilares em paralelo, a área transversal somada é enorme (~2.500-3.000 cm² vs ~3 cm² da aorta), tornando a velocidade ultralenta para permitir difusão ideal.",
          "whyWrong": [
            "A pressão capilar não é negativa; varia tipicamente de 30 mmHg na extremidade arteriolar a 15 mmHg na venular.",
            "Alternativa correta: velocidade v = Q/A. Área combinada gigantesca resulta em velocidade microscópica para trocas teciduais.",
            "Os esfíncteres pré-capilares regulam perfusão local intermitente (vasomoção), mas a velocidade média depende da área total.",
            "A viscosidade capilar é modulada pelo efeito Fåhraeus-Lindqvist, mas jamais atinge zero."
          ],
          "tip": "Velocidade = Fluxo / Área. Pense em um rio estreito que deságua em um lago imenso: a água desacelera."
        },
        {
          "id": "w3_q4",
          "type": "single",
          "topic": "Hemodinâmica e Resistência",
          "difficulty": "hard",
          "xp": 25,
          "title": "Qual segmento do leito vascular sistêmico responde pela maior queda percentual de pressão hidrostática intravascular média ao longo do circuito?",
          "options": [
            "Grandes artérias elásticas de condução condutoras de fluxo pulsátil.",
            "Arteríolas terminais e pré-capilares que atuam como vasos de resistência.",
            "Grandes veias cavas e vasos coletores de capacitância volumétrica.",
            "Vênulas pós-capilares e plexos venosos dérmicos superficiais."
          ],
          "correctIndex": 1,
          "explanation": "As arteríolas apresentam a maior resistência ao escoamento em todo o sistema cardiovascular. Por gerarem a maior impedância, é exatamente ao passar por elas que a pressão cai mais acentuadamente (de ~85 mmHg na entrada para ~30-35 mmHg na saída).",
          "whyWrong": [
            "As grandes artérias têm altíssima complacência e raio imenso, gerando mínima resistência e queda de pressão irrisória.",
            "Alternativa correta: as arteríolas constituem os principais vasos de resistência (RVP) e provocam a maior queda de PAM.",
            "As veias são vasos de capacitância com paredes finas e baixa resistência ao retorno sanguíneo.",
            "Nas vênulas a pressão já se encontra bastante reduzida (~15-10 mmHg), tendo sofrido a queda maior nas arteríolas."
          ],
          "tip": "Onde a resistência é maior (arteríolas), o consumo de energia de pressão para vencer o atrito é máximo."
        }
      ]
    },
    {
      "id": "w3_p2",
      "title": "Condução Elétrica & Nó AV",
      "topic": "Eletrofisiologia Cardíaca",
      "level": 14,
      "order": 2,
      "nextPhaseId": "w3_p3",
      "lesson": {
        "title": "Sistema Especializado de Condução e o Retardo no Nó AV",
        "concept": "O coração possui um sistema especializado excito-condutor formado por cardiomiócitos modificados capazes de gerar impulsos espontâneos rítmicos e conduzi-los ordenadamente por átrios e ventrículos.",
        "mechanism": "Vias de Condução: 1) Nó Sinoatrial (SA): marca-passo fisiológico primário na junção da veia cava superior com o átrio direito; 2) Tratos Internodais e feixe de Bachmann: propagam a despolarização pelos átrios; 3) Nó Atrioventricular (AV): situado no septo interatrial póstero-inferior; 4) Feixe de His e Ramos Direito/Esquerdo; 5) Rede de Fibras de Purkinje: condução ultrarrápida (~4 m/s) para o miocárdio ventricular do ápice em direção à base.",
        "examPoint": "Atraso Crítico no Nó Atrioventricular (~0,09 a 0,12 s): O impulso elétrico desacelera expressivamente para ~0,05 m/s no nó AV por conta do menor calibre celular e menor densidade de junções comunicantes (gap junctions). Esse retardo é vital: concede tempo para os átrios terminarem sua contração e preencherem completamente os ventrículos antes do início da sístole ventricular!",
        "example": "No bloqueio atrioventricular de 3º grau (total), o impulso supraventricular não atinge os ventrículos. Um marca-passo subsidiário intrínseco de escape ventricular (Purkinje) assume em frequência insuficiente (~20-40 bpm), exigindo marca-passo artificial.",
        "quickChallenge": "O que ocorreria com o enchimento ventricular se o nó AV conduzisse na mesma velocidade das fibras de Purkinje?",
        "researchTopic": "Sistema de Condução Cardíaca e Nó Sinoatrial"
      },
      "questions": [
        {
          "id": "w3_q5",
          "type": "single",
          "topic": "Eletrofisiologia Cardíaca",
          "difficulty": "medium",
          "xp": 20,
          "title": "Ordene o trajeto sequencial fisiológico normal do potencial de ação através do sistema excito-condutor cardíaco:",
          "options": [
            "Nó Sinoatrial → Tratos internodais atriais → Nó Atrioventricular → Feixe de His e Ramos → Fibras de Purkinje.",
            "Nó Atrioventricular → Nó Sinoatrial → Fibras de Purkinje → Tronco do Feixe de His → Músculo atrial esquerdo.",
            "Fibras de Purkinje → Tronco do Feixe de His → Nó AV → Nó Sinoatrial → Miocárdio ventricular septal.",
            "Nó Sinoatrial → Fibras de Purkinje → Nó Atrioventricular → Ramos do Feixe de His → Músculo atrial direito."
          ],
          "correctIndex": 0,
          "explanation": "A sequência cronológica fisiológica se inicia no nó SA (marca-passo primário), propaga-se pelos átrios até o nó AV (retardo fisiológico), desce pelo tronco do feixe de His e seus ramos septais, e atinge as fibras subendocárdicas de Purkinje.",
          "whyWrong": [
            "Alternativa correta: Nó SA → Átrios → Nó AV → Feixe de His → Purkinje.",
            "O nó AV não dispara antes do nó sinoatrial em condições fisiológicas basais.",
            "As fibras de Purkinje são a via terminal ventricular, não a origem do estímulo normal.",
            "As fibras de Purkinje não conduzem diretamente dos átrios para o nó atrioventricular."
          ],
          "tip": "Guarde a rota do marcapasso: SA → Átrios → AV → His → Purkinje."
        },
        {
          "id": "w3_q6",
          "type": "single",
          "topic": "Eletrofisiologia Cardíaca",
          "difficulty": "hard",
          "xp": 25,
          "title": "Qual é a principal função fisiológica do atraso de condução de aproximadamente 0,10 segundo que ocorre no Nó Atrioventricular (AV)?",
          "options": [
            "Assegurar que as valvas aórtica e pulmonar permaneçam totalmente abertas durante a sístole atrial.",
            "Permitir que a sístole atrial finalize completamente, completando o enchimento diastólico ventricular antes da ejeção.",
            "Acelerar a repolarização precoce do miocárdio ventricular mediada por canais de potássio ultra-rápidos.",
            "Garantir que a pressão hidrostática no ventrículo direito exceda permanentemente a do ventrículo esquerdo."
          ],
          "correctIndex": 1,
          "explanation": "Se a onda excitatória passasse instantaneamente aos ventrículos, átrios e ventrículos contrairiam quase ao mesmo tempo. As valvas AV fechariam durante a ejeção atrial, impedindo a contribuição atrial ao enchimento ventricular.",
          "whyWrong": [
            "Durante a sístole atrial, as valvas semilunares estão fechadas e as valvas AV abertas.",
            "Alternativa correta: o atraso permite enchimento ventricular ótimo antes da sístole ventricular.",
            "O retardo nodal precede a despolarização dos ventrículos, não atuando na sua repolarização.",
            "As pressões do ventrículo esquerdo são fisiologicamente muito maiores que as do direito em todas as fases."
          ],
          "tip": "Retardo no Nó AV = Pausa estratégica para os átrios terminarem de esvaziar nos ventrículos."
        },
        {
          "id": "w3_q7",
          "type": "cause_effect",
          "topic": "Eletrofisiologia Cardíaca",
          "difficulty": "medium",
          "xp": 20,
          "title": "Por que o Nó Sinoatrial (SA) atua como o \"marca-passo dominante\" do coração em condições fisiológicas de repouso?",
          "options": [
            "Porque possui o potencial de repouso mais negativo e hiperpolarizado de todo o miocárdio de trabalho (-90 mV).",
            "Porque apresenta a maior frequência intrínseca de despolarização espontânea (fase 4), despolarizando antes dos focos subsidiários.",
            "Porque é a única estrutura excito-condutora que expressa canais rápidos de sódio voltagem-dependentes (Nav1.5).",
            "Porque recebe inervação exclusiva do sistema nervoso simpático, sendo desprovido de receptores muscarínicos colinérgicos."
          ],
          "correctIndex": 1,
          "explanation": "O nó SA possui a inclinação mais íngreme da fase 4 (corrente de marca-passo If ou \"funny current\"), atingindo o limiar (~70 a 80 vezes/minuto) antes do nó AV (~40-60 bpm) ou das fibras de Purkinje (~20-40 bpm), suprimindo os marca-passos subsidiários por supressão por sobre-estimulação.",
          "whyWrong": [
            "O nó SA não possui potencial de repouso estável em -90 mV; ele oscila a partir de ~ -60 mV em fase 4 lenta.",
            "Alternativa correta: maior inclinação da fase 4 = despolariza primeiro e comanda o ritmo cardíaco.",
            "O nó SA depende principalmente de canais de cálcio do tipo L e T na fase 0, e não de canais rápidos Nav1.5.",
            "O nó SA recebe densa inervação vagal parassimpática rica em receptores M2 acoplados à proteína Gi."
          ],
          "tip": "Marca-passo dominante = aquele que dispara mais rápido e \"assume o comando\" suprimindo os mais lentos."
        },
        {
          "id": "w3_q8",
          "type": "single",
          "topic": "Eletrofisiologia Cardíaca",
          "difficulty": "hard",
          "xp": 25,
          "title": "Em um coração saudável, como os ventrículos são eletricamente isolados dos átrios, impedindo que o potencial passe fora do nó AV?",
          "options": [
            "Por uma barreira lipídica de mielina espessa que envolve toda a superfície epicárdica atrial.",
            "Pelo esqueleto fibroso atrioventricular constituído por anéis densos de tecido conjuntivo eletricamente isolante.",
            "Por correntes de hiperpolarização contínua geradas pelo endotélio das veias coronárias circunflexas.",
            "Pela presença exclusiva de junções comunicantes de altíssima resistência química no septo interventricular membranoso."
          ],
          "correctIndex": 1,
          "explanation": "O esqueleto fibroso do coração consiste em tecido conjuntivo denso que ancora as valvas e isola eletricamente átrios de ventrículos. A única ponte de condução fisiológica que perfura esse esqueleto fibroso é o feixe atrioventricular de His.",
          "whyWrong": [
            "O coração não possui bainha de mielina em suas paredes musculares.",
            "Alternativa correta: o esqueleto fibroso bloqueia a condução direta, forçando o impulso a passar pelo Nó AV.",
            "Não são as veias coronárias que promovem o isolamento elétrico entre as câmaras.",
            "O esqueleto fibroso é acelular/fibroso e desprovido de gap junctions condutoras, atuando como barreira física isolante."
          ],
          "tip": "Esqueleto fibroso = isolante elétrico que impede arritmias e força o sinal a passar pelo Nó AV."
        }
      ]
    },
    {
      "id": "w3_p3",
      "title": "Eletrocardiograma (ECG): Ondas e Intervalos",
      "topic": "Eletrocardiograma (ECG)",
      "level": 15,
      "order": 3,
      "nextPhaseId": "w3_p4",
      "lesson": {
        "title": "Bases Eletrofisiológicas do Eletrocardiograma (ECG)",
        "concept": "O ECG registra na superfície corporal as diferenças de potencial elétrico extracelulares geradas pela despolarização e repolarização das câmaras cardíacas.",
        "mechanism": "Correspondência das Ondas do ECG: 1) Onda P: Despolarização atrial; 2) Intervalo PR (0,12 a 0,20 s): Tempo do início da ativação atrial até o início da despolarização ventricular (reflete o retardo no nó AV); 3) Complexo QRS (< 0,12 s): Despolarização rápida ventricular (a repolarização atrial fica oculta no QRS); 4) Segmento ST: Platô do potencial de ação ventricular (fase 2 lenta mediada por Ca2+); 5) Onda T: Repolarização ventricular.",
        "examPoint": "Onda T invertida ou supra de ST: Se o segmento ST estiver desnivelado para cima (supradesnivelamento de ST), indica corrente de lesão transmural aguda decorrente de oclusão coronariana completa (Infarto Agudo do Miocárdio com supra de ST).",
        "example": "No bloqueio atrioventricular de 1º grau, o intervalo PR encontra-se patologicamente alargado (> 0,20 s), demonstrando condução excessivamente lenta no nó AV.",
        "quickChallenge": "Por que a repolarização atrial não aparece como uma onda visível no traçado convencional de ECG?",
        "researchTopic": "Eletrocardiografia e Potenciais Vetoriais Cardíacos"
      },
      "questions": [
        {
          "id": "w3_q9",
          "type": "single",
          "topic": "Eletrocardiograma (ECG)",
          "difficulty": "medium",
          "xp": 20,
          "title": "Relacione cada onda ou complexo do ECG ao seu respectivo evento eletrofisiológico:",
          "options": [
            "Onda P: Despolarização ventricular | Complexo QRS: Despolarização atrial | Onda T: Repolarização ventricular.",
            "Onda P: Despolarização atrial | Complexo QRS: Despolarização ventricular | Onda T: Repolarização ventricular.",
            "Onda P: Repolarização atrial | Complexo QRS: Ejeção aórtica isovolumétrica | Onda T: Despolarização do nó AV.",
            "Onda P: Despolarização do feixe de His | Complexo QRS: Repolarização ventricular | Onda T: Contração atrial ativa."
          ],
          "correctIndex": 1,
          "explanation": "Onda P = despolarização atrial; Complexo QRS = despolarização ventricular; Onda T = repolarização ventricular.",
          "whyWrong": [
            "Inverte as atribuições das ondas P e do complexo QRS.",
            "Alternativa correta: P = átrios despolarizam; QRS = ventrículos despolarizam; T = ventrículos repolarizam.",
            "Onda P representa despolarização e não repolarização atrial; QRS reflete fenômeno elétrico, não mecânico.",
            "A onda P decorre da propagação atrial a partir do nó SA, e não de ativação isolada do feixe de His."
          ],
          "tip": "P = Átrio despolariza; QRS = Ventrículo despolariza; T = Ventrículo repolariza."
        },
        {
          "id": "w3_q10",
          "type": "single",
          "topic": "Eletrocardiograma (ECG)",
          "difficulty": "medium",
          "xp": 20,
          "title": "O que representa o Intervalo PR no traçado do eletrocardiograma e qual é o seu valor fisiológico de referência?",
          "options": [
            "O tempo total decorrido entre o término da onda T e o início da onda P seguinte, mensurado entre 0,25 e 0,35 segundos.",
            "O intervalo de condução elétrica desde o nó sinoatrial até o início da despolarização ventricular, medindo 0,12 a 0,20 s.",
            "A duração da fase mecânica de ejeção rápida ventricular através da valva aórtica aberta, oscilando entre 0,12 e 0,20 s.",
            "O período refratário absoluto dos miócitos atriais durante a contração isovolumétrica, com duração basal de 0,15 a 0,22 s."
          ],
          "correctIndex": 1,
          "explanation": "O intervalo PR estende-se do início da onda P até o início do complexo QRS. Dura normalmente de 0,12 a 0,20 s (3 a 5 quadradinhos de 1 mm). Seu componente mais demorado é a passagem pelo nó AV.",
          "whyWrong": [
            "O intervalo PR é um evento puramente eletrocardiográfico, não uma medida do relaxamento isovolumétrico.",
            "Alternativa correta: mede o tempo de ativação atrial + retardo no Nó AV (0,12 a 0,20 s).",
            "A fase de ejeção mecânica não corresponde ao intervalo PR elétrico.",
            "O período refratário ventricular é mensurado principalmente pelo intervalo QT, não pelo PR."
          ],
          "tip": "Intervalo PR = 0,12 a 0,20 s. Se maior que 0,20 s = Bloqueio Atrioventricular de 1º grau."
        },
        {
          "id": "w3_q11",
          "type": "single",
          "topic": "Eletrocardiograma (ECG)",
          "difficulty": "hard",
          "xp": 25,
          "title": "Por que a repolarização atrial (onda Ta) habitualmente não é visível no eletrocardiograma convencional de doze derivações?",
          "options": [
            "Porque ela ocorre concomitantemente ao complexo QRS, ficando mascarada pela magnitude da despolarização ventricular.",
            "Porque as células atriais permanecem despolarizadas durante toda a sístole mecânica sem realizar repolarização.",
            "Porque o vetor elétrico de repolarização atrial é perfeitamente perpendicular a todos os eixos das doze derivações.",
            "Porque os potenciais elétricos atriais são bloqueados pelo osso esterno antes de atingirem a pele torácica."
          ],
          "correctIndex": 0,
          "explanation": "A repolarização dos átrios ocorre simultaneamente à despolarização dos ventrículos. Como a massa ventricular é incomparavelmente maior, o gigantesco vetor do complexo QRS mascara totalmente a pequena onda de repolarização atrial.",
          "whyWrong": [
            "Alternativa correta: o grande vetor do QRS oculta a pequena onda de repolarização atrial.",
            "As células atriais repolarizam normalmente na fase 3 de seu potencial de ação.",
            "O vetor atrial não é perpendicular a todas as derivações; ele apenas tem amplitude muito menor.",
            "As correntes iônicas conduzem-se por todo o volume condutor tecidual até a superfície da pele."
          ],
          "tip": "A onda de repolarização atrial existe, mas fica \"escondida\" debaixo da explosão elétrica do QRS."
        },
        {
          "id": "w3_q12",
          "type": "single",
          "topic": "Eletrocardiograma (ECG)",
          "difficulty": "hard",
          "xp": 25,
          "title": "O que o Segmento ST isoelétrico do ECG reflete em relação às fases do potencial de ação das células do miocárdio ventricular?",
          "options": [
            "A fase zero de despolarização rápida ventricular dependente da abertura em cascata de canais de sódio rápidos voltagem-dependentes.",
            "A fase dois de platô sustentado, na qual o influxo de Ca²⁺ se equilibra com o efluxo de K⁺ e todo o ventrículo está despolarizado.",
            "O período elétrico de repouso diastólico transmembrana correspondente à fase quatro estável sustentada pelos canais de potássio.",
            "A fase um transitória de repolarização inicial rápida mediada pela inativação dos canais de sódio e influxo acentuado de cloreto."
          ],
          "correctIndex": 1,
          "explanation": "Durante o segmento ST, todos os miócitos ventriculares encontram-se despolarizados na fase 2 de platô. Não havendo gradiente de voltagem entre diferentes áreas do miocárdio, o traçado permanece na linha isoelétrica (zero).",
          "whyWrong": [
            "A fase 0 rápida gera a deflexão rápida do complexo QRS.",
            "Alternativa correta: segmento ST = fase 2 (platô) do potencial de ação ventricular.",
            "A fase 4 de repouso corresponde à linha basal diastólica (após a onda T e antes da próxima onda P).",
            "O segmento ST não representa hiperpolarização, mas o estado de despolarização uniforme do miocárdio ventricular."
          ],
          "tip": "Segmento ST = Platô (Fase 2). Se desnivelar para cima (supra de ST) = Isquemia/Lesão miocárdica transmural aguda."
        }
      ]
    },
    {
      "id": "w3_p4",
      "title": "Ciclo Cardíaco & Dinâmica Valvar",
      "topic": "Ciclo Cardíaco e Valvas",
      "level": 16,
      "order": 4,
      "nextPhaseId": "w3_p5",
      "lesson": {
        "title": "Fases do Ciclo Cardíaco e Gênese das Bulhas Cardíacas",
        "concept": "O ciclo cardíaco compreende os eventos mecânicos, elétricos e pressóricos que ocorrem a cada batimento, alternando entre sístole (contração e ejeção) e diástole (relaxamento e enchimento).",
        "mechanism": "Fases Sequenciais do Ciclo Cardíaco Ventricular: 1) Sístole Atrial; 2) Contração Isovolumétrica; 3) Ejeção Rápida e Reduzida; 4) Relaxamento Isovolumétrico; 5) Enchimento Rápido, Diástase e Sístole Atrial.",
        "examPoint": "Gênese das Bulhas Cardíacas Normais: A primeira bulha (B1) decorre da desaceleração abrupta do sangue e vibração das cúspides pelo fechamento das valvas atrioventriculares (Mitral e Tricúspide). A segunda bulha (B2) decorre do fechamento súbito das valvas semilunares (Aórtica e Pulmonar).",
        "example": "Na estenose aórtica severa, a valva aórtica calcificada não se abre livremente, gerando enorme gradiente pressórico sistólico ventrículo-aorta e sopro sistólico ejetivo rude.",
        "quickChallenge": "Durante quais fases específicas do ciclo cardíaco o volume de sangue nos ventrículos permanece estritamente constante?",
        "researchTopic": "Diagrama de Wiggers e Mecânica Valvar"
      },
      "questions": [
        {
          "id": "w3_q13",
          "type": "single",
          "topic": "Ciclo Cardíaco e Valvas",
          "difficulty": "medium",
          "xp": 20,
          "title": "O que define a fase de CONTRAÇÃO ISOVOLUMÉTRICA da sístole ventricular esquerda?",
          "options": [
            "O ventrículo contrai esvaziando metade do seu volume através da valva aórtica aberta sob alta pressão.",
            "O ventrículo desenvolve tensão com todas as valvas fechadas, elevando a pressão sem alterar seu volume.",
            "As valvas atrioventriculares abrem-se para receber sangue atrial adicional enquanto os miócitos relaxam.",
            "Ocorre ejeção retrógrada para os átrios sob controle das cordas tendíneas dos músculos papilares."
          ],
          "correctIndex": 1,
          "explanation": "Na contração isovolumétrica, o miocárdio contrai ativamente, mas como a pressão ventricular ainda não superou a aórtica e já superou a atrial, todas as valvas estão fechadas. O volume ventricular não varia, mas a pressão sobe vertiginosamente.",
          "whyWrong": [
            "Na contração isovolumétrica nenhuma gota de sangue é ejetada para a aorta.",
            "Alternativa correta: \"Isovolumétrica\" = volume constante com valvas fechadas e elevação de pressão.",
            "As valvas AV fecham no início da contração (gerando B1), não se abrindo.",
            "As valvas AV sadias impedem o refluxo retrógrado para os átrios durante toda a sístole."
          ],
          "tip": "Contração Isovolumétrica: Válvulas FECHADAS, pressão SOBE, volume CONSTANTE."
        },
        {
          "id": "w3_q14",
          "type": "single",
          "topic": "Ciclo Cardíaco e Valvas",
          "difficulty": "medium",
          "xp": 20,
          "title": "Qual é a configuração funcional das quatro valvas cardíacas durante a fase de RELAXAMENTO ISOVOLUMÉTRICO ventricular?",
          "options": [
            "Apenas a valva mitral encontra-se aberta para permitir o enchimento precoce.",
            "Todas as quatro valvas cardíacas (mitral, aórtica, tricúspide e pulmonar) estão totalmente fechadas.",
            "Apenas as valvas semilunares aórtica e pulmonar permanecem patentes para escoar sangue residual.",
            "Todas as quatro valvas permanecem amplamente abertas por inibição parassimpática vagal."
          ],
          "correctIndex": 1,
          "explanation": "No relaxamento isovolumétrico, as valvas semilunares já se fecharam (ao término da sístole, gerando B2) e as valvas AV ainda não se abriram (pois a pressão ventricular ainda é maior que a atrial). Assim, todas as quatro valvas estão simultaneamente fechadas.",
          "whyWrong": [
            "A valva mitral só se abre após a pressão ventricular cair abaixo da pressão atrial esquerda.",
            "Alternativa correta: no relaxamento isovolumétrico todas as quatro valvas estão fechadas.",
            "As semilunares fecharam marcando o início da diástole.",
            "Todas as quatro valvas nunca ficam abertas ao mesmo tempo em nenhuma fase do ciclo normal."
          ],
          "tip": "Tanto na contração quanto no relaxamento isovolumétricos: TODAS as 4 valvas estão FECHADAS."
        },
        {
          "id": "w3_q15",
          "type": "single",
          "topic": "Ciclo Cardíaco e Valvas",
          "difficulty": "hard",
          "xp": 25,
          "title": "Qual evento mecânico e hemodinâmico é o responsável direto pela gênese da PRIMEIRA BULHA CARDÍACA (B1)?",
          "options": [
            "O fechamento das valvas atrioventriculares (Mitral e Tricúspide) associado à vibração das cúspides e da massa sanguínea.",
            "O impacto violento do fluxo ejetivo de alta velocidade contra as paredes elásticas da raiz da artéria aorta.",
            "O fechamento abrupto das valvas semilunares aórtica e pulmonar ao término da fase de ejeção sistólica ventricular.",
            "O turbilhonamento patológico provocado pelo refluxo de sangue através das veias pulmonares durante a diástole."
          ],
          "correctIndex": 0,
          "explanation": "B1 (o som \"tum\") é gerada pelo fechamento das valvas AV (mitral antes da tricúspide) no início da sístole ventricular, decorrente do gradiente reverso de pressão entre ventrículo e átrio.",
          "whyWrong": [
            "Alternativa correta: B1 = fechamento das valvas AV (Mitral e Tricúspide).",
            "O fluxo na raiz aórtica não gera som audível normal no indivíduo sadio em repouso.",
            "O fechamento das semilunares gera a SEGUNDA bulha (B2), não a primeira.",
            "Não há refluxo fisiológico nas veias pulmonares gerando bulha cardíaca audível."
          ],
          "tip": "B1 = \"TUM\" = fechamento de Mitral e Tricúspide. B2 = \"TÁ\" = fechamento de Aórtica e Pulmonar."
        },
        {
          "id": "w3_q16",
          "type": "single",
          "topic": "Ciclo Cardíaco e Valvas",
          "difficulty": "hard",
          "xp": 25,
          "title": "O que representa o Volume Sistólico Final (VSF) e qual é a fração de sangue típica ejetada em um coração adulto sadio em repouso?",
          "options": [
            "O volume total de sangue retido nos pulmões ao final da inspiração forçada em posição ortostática.",
            "O volume de sangue remanescente no ventrículo ao término da sístole (~50 mL), com fração de ejeção fisiológica de 55% a 70%.",
            "O volume total que ingressa no átrio direito através das veias cavas durante a sístole isovolumétrica ventricular.",
            "A quantidade de sangue que retorna retradulamente ao ventrículo devido à regurgitação fisiológica das valvas semilunares."
          ],
          "correctIndex": 1,
          "explanation": "O ventrículo nunca se esvazia totalmente. De cerca de 120 mL (Volume Diastólico Final - VDF), ele ejeta ~70 mL (Volume Sistólico - VS) e retém cerca de 50 mL (VSF). Fração de Ejeção = VS / VDF ≈ 60%.",
          "whyWrong": [
            "VSF é uma grandeza intraventricular cardíaca, não pulmonar.",
            "Alternativa correta: VSF ≈ 50 mL remanescentes no ventrículo ao final da sístole; FE = 55-70%.",
            "O retorno venoso pelas cavas ocorre continuamente e não define o VSF ventricular.",
            "Em valvas normais não ocorre regurgitação significativa gerando VSF."
          ],
          "tip": "VSF = Volume que sobra no ventrículo no fim da sístole (~50 mL). FE = (VDF - VSF)/VDF."
        }
      ]
    },
    {
      "id": "w3_p5",
      "title": "Débito Cardíaco & Frank-Starling",
      "topic": "Débito Cardíaco e Frank-Starling",
      "level": 17,
      "order": 5,
      "nextPhaseId": "w3_p6",
      "lesson": {
        "title": "Débito Cardíaco e Mecanismo de Frank-Starling",
        "concept": "O Débito Cardíaco (DC) é o volume total de sangue bombeado por cada ventrículo por minuto, sendo o produto da Frequência Cardíaca (FC) pelo Volume Sistólico (VS): DC = FC × VS.",
        "mechanism": "Determinantes do Volume Sistólico: 1) Pré-carga; 2) Pós-carga; 3) Contratilidade miocárdica (inotropismo).",
        "examPoint": "Mecanismo de Frank-Starling: Estabelece a capacidade intrínseca do coração de se adaptar a volumes crescentes de afluxo sanguíneo. Quanto maior o retorno venoso (maior VDF), maior o estiramento inicial das fibras miocárdicas até o comprimento sarcomérico ótimo (~2,2 μm), aumentando a sensibilidade dos miofilamentos ao Ca2+ e a força de contração.",
        "example": "Ao deitar-se (posição supina), a gravidade não mais retém sangue nas pernas; o retorno venoso aumenta, estirando os ventrículos e elevando o volume sistólico por Frank-Starling.",
        "quickChallenge": "Como o aumento da pós-carga aórtica crônica (ex: hipertensão não tratada) afeta o trabalho cardíaco?",
        "researchTopic": "Curva de Frank-Starling e Função Sistólica"
      },
      "questions": [
        {
          "id": "w3_q17",
          "type": "single",
          "topic": "Débito Cardíaco e Frank-Starling",
          "difficulty": "easy",
          "xp": 15,
          "title": "Qual expressão matemática define com exatidão o Débito Cardíaco (DC) de um ventrículo?",
          "options": [
            "Débito Cardíaco = Pressão Arterial Média dividida pela Resistência Vascular Periférica total.",
            "Débito Cardíaco = Frequência Cardíaca (FC) multiplicada pelo Volume Sistólico (VS).",
            "Débito Cardíaco = Volume Diastólico Final dividido pelo Volume Sistólico Final ao quadrado.",
            "Débito Cardíaco = Pressão Venosa Central multiplicada pela área de secção aórtica."
          ],
          "correctIndex": 1,
          "explanation": "DC = FC × VS. Se um indivíduo tem FC de 70 bpm e ejeta 70 mL por batimento: DC = 70 × 70 = 4.900 mL/min ≈ 5 L/min.",
          "whyWrong": [
            "DC = PAM / RVP expressa a relação hemodinâmica ohmica global, mas a definição direta e primária de débito é FC × VS.",
            "Alternativa correta: DC = FC × VS.",
            "Relação matemática sem fundamento fisiológico.",
            "PVC multiplicada por área aórtica não produz unidade de fluxo volumétrico."
          ],
          "tip": "Fórmula essencial: DC = FC × VS. (Em repouso: 70 bpm × 70 mL ≈ 5 L/min)."
        },
        {
          "id": "w3_q18",
          "type": "single",
          "topic": "Débito Cardíaco e Frank-Starling",
          "difficulty": "medium",
          "xp": 20,
          "title": "O que enuncia com precisão a clássica Lei de Frank-Starling do coração?",
          "options": [
            "Dentro de limites fisiológicos, quanto maior o estiramento das fibras pelo volume diastólico final, maior a força de contração sistólica subsequente.",
            "A força de contração ventricular declina de modo inversamente proporcional ao volume diastólico final para poupar a reserva energética celular.",
            "A frequência de disparo do nó sinoatrial independe do retorno venoso, mantendo débito cardíaco estritamente constante sob qualquer pré-carga.",
            "O ventrículo ejeta volume sistólico fixo e constante em cada batimento cardíaco, indiferente a alterações do estiramento dos sarcômeros."
          ],
          "correctIndex": 0,
          "explanation": "A Lei de Frank-Starling dita que o coração bombeia todo o sangue que a ele retorna. O aumento do volume diastólico estira os sarcômeros até sua sobreposição ideal de pontes cruzadas actina-miosina, gerando contração mais vigorosa.",
          "whyWrong": [
            "Alternativa correta: maior estiramento (pré-carga) = maior força de ejeção.",
            "A contratilidade aumenta com o estiramento na faixa fisiológica, não diminui.",
            "A FC é intensamente modulada por simpático, parassimpático e catecolaminas circulantes.",
            "O coração nunca se esvazia 100%; ele retém o VSF (~50 mL)."
          ],
          "tip": "Frank-Starling: Maior enchimento na diástole = Maior estiramento = Maior força na sístole."
        },
        {
          "id": "w3_q19",
          "type": "single",
          "topic": "Débito Cardíaco e Frank-Starling",
          "difficulty": "hard",
          "xp": 25,
          "title": "Em um paciente em insuficiência cardíaca crônica descompensada, como a ativação excessiva do sistema simpático e a retenção de volume afetam a curva de Frank-Starling?",
          "options": [
            "A curva de função ventricular é transladada para cima e para a esquerda, gerando aumentos exponenciais na fração de ejeção sistólica.",
            "O ventrículo opera no platô deprimido da curva com pressões diastólicas elevadas, gerando congestão pulmonar sem ganho de débito.",
            "O volume diastólico final ventricular cai a níveis indetectáveis decorrente da intensa vasodilatação arteriolar simpática periférica.",
            "As cúspides das valvas atrioventriculares colabam completamente durante a sístole para suportar a elevação acentuada da pré-carga."
          ],
          "correctIndex": 1,
          "explanation": "No coração insuficiente, a curva de função ventricular está deprimida (deslocada para baixo e para a direita). O aumento compensatório da pré-carga já não eleva o volume sistólico, gerando apenas elevação patológica das pressões de enchimento e edema pulmonar.",
          "whyWrong": [
            "Deslocamento para cima e esquerda é característico de aumento de inotropismo (ex: estimulação beta-adrenérgica em coração normal).",
            "Alternativa correta: coração insuficiente opera no segmento horizontal deprimido = congestão venocapilar pulmonar.",
            "O VDF está aumentado na insuficiência cardíaca (cardiomegalia), não zerado.",
            "As valvas AV fecham na sístole; se regurgitarem por dilatação anular, trata-se de insuficiência valvar patológica."
          ],
          "tip": "Insuficiência Cardíaca: a curva cai e achata. Mais volume não gera mais débito, apenas gera congestão/falta de ar."
        },
        {
          "id": "w3_q20",
          "type": "single",
          "topic": "Débito Cardíaco e Frank-Starling",
          "difficulty": "hard",
          "xp": 25,
          "title": "O que define a PÓS-CARGA ventricular esquerda e qual condição clínica clássica a eleva de forma acentuada?",
          "options": [
            "A tensão na parede ventricular durante a ejeção sistólica para vencer a pressão aórtica, amplamente elevada na estenose aórtica.",
            "O volume de sangue que distende o ventrículo no final da diástole antes da contração isométrica, elevado na desidratação grave.",
            "A velocidade máxima com que os potenciais de ação percorrem as fibras de Purkinje, aumentada significativamente no sono profundo.",
            "A pressão coloidosmótica do plasma no interior dos capilares sinusóides hepáticos, marcadamente elevada na cirrose hepática crônica."
          ],
          "correctIndex": 0,
          "explanation": "Pós-carga é a resistência ou carga contra a qual o ventrículo deve contrair para ejetar sangue. É determinada principalmente pela pressão arterial aórtica e pela impedância valvar. A estenose aórtica e a hipertensão arterial aumentam drasticamente a pós-carga.",
          "whyWrong": [
            "Alternativa correta: pós-carga = carga contra a ejeção (pressão aórtica, estenose aórtica).",
            "O volume de enchimento antes da contração define a PRÉ-CARGA, não a pós-carga.",
            "A frequência do nó SA não define a pós-carga ventricular.",
            "A pressão coloidosmótica do plasma não é a definição de pós-carga mecânica."
          ],
          "tip": "Pré-carga = o que ENCHE o coração (VDF). Pós-carga = a RESISTÊNCIA que ele tem que vencer para ejetar (pressão aórtica)."
        }
      ]
    },
    {
      "id": "w3_p6",
      "title": "Barorreflexo & Regulação da Pressão Arterial",
      "topic": "Barorreflexo e Regulação da PA",
      "level": 18,
      "order": 6,
      "nextPhaseId": "w4_p1",
      "lesson": {
        "title": "Alça do Barorreflexo e Regulação da Pressão a Curto Prazo",
        "concept": "A pressão arterial é regulada a curto prazo (segundos) pelo reflexo barorreceptor arterial, que estabiliza a pressão contra variações bruscas, como na mudança postural.",
        "mechanism": "Componentes do Barorreflexo: 1) Sensores: Barorreceptores no Seio Carotídeo (inervado pelo nervo glossofaríngeo - NC IX) e Arco Aórtico (inervado pelo nervo vago - NC X); 2) Centro Integrador: Núcleo do Trato Solitário (NTS) no bulbo; 3) Vias Eferentes: Simpática e Parassimpática.",
        "examPoint": "Resposta à Queda de Pressão (ex: ao levantar-se / ortostase): Queda de PA -> menor estiramento dos barorreceptores -> MENOR frequência de disparo aferente aos centros bulbares -> desinibição do centro vasomotor simpático e inibição do tônus vagal -> taquicardia reflexa, aumento da contratilidade miocárdica e vasoconstrição arteriolar generalizada -> restauração da PA.",
        "example": "Na hipotensão ortostática, falha ou lentidão do barorreflexo (comum em idosos e diabéticos) provoca queda transitória da perfusão cerebral ao levantar-se, com tontura e síncope.",
        "quickChallenge": "O que acontece com a frequência de disparo dos barorreceptores carotídeos quando a pressão arterial sobe agudamente de 120/80 para 180/110 mmHg?",
        "researchTopic": "Barorreflexo Arterial e Controle Autonômico"
      },
      "questions": [
        {
          "id": "w3_q21",
          "type": "single",
          "topic": "Barorreflexo e Regulação da PA",
          "difficulty": "medium",
          "xp": 20,
          "title": "Quando a pressão arterial média se eleva agudamente de 90 para 140 mmHg, qual é a resposta neurofisiológica primária dos barorreceptores carotídeos?",
          "options": [
            "Cessam prontamente qualquer disparo aferente ao tronco encefálico devido à saturação mecânica dos canais iônicos sensíveis ao estiramento.",
            "Aumentam expressivamente a frequência de disparos aferentes ao NTS, estimulando o tônus vagal e deprimindo o tônus simpático.",
            "Estimulam a liberação maciça e imediata de renina pelo aparelho justaglomerular renal com o objetivo de reter água e sódio no túbulo.",
            "Desencadeiam vasoconstrição simpática imediata e intensa em todas as arteríolas do território esplâncnico e cutâneo periférico."
          ],
          "correctIndex": 1,
          "explanation": "Os barorreceptores são mecanorreceptores de estiramento. Se a PA sobe, eles são mais estirados e DISPARAM MAIS potenciais de ação pelo nervo de Hering (NC IX). No NTS bulbar, isso ativa neurônios inibitórios que diminuem o efluxo simpático e ativam o vago, baixando FC e PA.",
          "whyWrong": [
            "Os barorreceptores aumentam sua frequência de disparo com a pressão; não sofrem paralisia.",
            "Alternativa correta: aumento de pressão = maior disparo de potenciais aferentes ao NTS.",
            "O barorreflexo inibe o simpático renal, reduzindo a renina, e não a aumentando.",
            "A resposta reflexa à hipertensão é VASODILATAÇÃO por retirada do tônus simpático, não vasoconstrição."
          ],
          "tip": "Pressão ALTA = Barorreceptores disparam MAIS = Ativa Vago (FC cai) e Inibe Simpático (vasos dilatam) -> PA cai de volta."
        },
        {
          "id": "w3_q22",
          "type": "cause_effect",
          "topic": "Barorreflexo e Regulação da PA",
          "difficulty": "hard",
          "xp": 25,
          "title": "Ao passar rapidamente da posição deitada para a posição em pé (ortostatismo), o sangue acumula-se nas veias dos membros inferiores. Como o barorreflexo previne a síncope?",
          "options": [
            "Aumentando a síntese de peptídeo natriurético atrial para reduzir o volume plasmático circulante e minimizar o trabalho ventricular de bomba.",
            "A menor distensão dos barorreceptores reduz seus disparos aferentes, desinibindo o simpático para gerar taquicardia e vasoconstrição reflexas.",
            "Induzindo vasodilatação arteriolar periférica imediata mediada pela histamina e bradicinina para reduzir o retorno venoso às câmaras direitas.",
            "Interrompendo a despolarização dos fusos neuromusculares esqueléticos para diminuir bruscamente a demanda metabólica corporal de oxigênio."
          ],
          "correctIndex": 1,
          "explanation": "Ao levantar-se, 500 a 800 mL de sangue se depositam nas veias dependentes pela gravidade. O retorno venoso cai -> DC cai -> PA cai. Os barorreceptores descarregam MENOS -> o bulbo desinibe o simpático -> taquicardia reflexa e vasoconstrição periférica restauram a PA em 2 a 3 batimentos.",
          "whyWrong": [
            "O ANP é reduzido quando o retorno venoso cai, não aumentado.",
            "Alternativa correta: menor pressão -> menor disparo barorreceptor -> ativação simpática reflexa compensatória.",
            "A resposta compensatória é vasoconstrição, não vasodilatação.",
            "O tônus muscular esquelético aumenta (bomba muscular) para comprimir as veias e melhorar o retorno venoso."
          ],
          "tip": "Ficar em pé: PA cai momentaneamente -> barorreceptores disparam MENOS -> simpático dispara MAIS -> FC sobe e vasos contraem."
        },
        {
          "id": "w3_q23",
          "type": "single",
          "topic": "Barorreflexo e Regulação da PA",
          "difficulty": "medium",
          "xp": 20,
          "title": "Quais pares cranianos conduzem as informações aferentes dos barorreceptores do seio carotídeo e do arco aórtico, respectivamente, até o tronco encefálico?",
          "options": [
            "Nervo Trigêmeo (NC V) e Nervo Facial (NC VII).",
            "Nervo Glossofaríngeo (NC IX) e Nervo Vago (NC X).",
            "Nervo Óptico (NC II) e Nervo Hipoglosso (NC XII).",
            "Nervo Acessório (NC XI) e Nervo Troclear (NC IV)."
          ],
          "correctIndex": 1,
          "explanation": "Os barorreceptores do seio carotídeo enviam fibras pelo nervo de Hering, ramo do nervo glossofaríngeo (NC IX). Os barorreceptores do arco aórtico enviam suas fibras pelo nervo vago (NC X). Ambos terminam no NTS bulbar.",
          "whyWrong": [
            "NC V inerva sensibilidade facial e músculos da mastigação; NC VII controla mímica facial.",
            "Alternativa correta: Seio Carotídeo = Glossofaríngeo (IX); Arco Aórtico = Vago (X).",
            "NC II é visual sensorial; NC XII é motor lingual.",
            "NC XI inerva trapézio e esternocleidomastóideo; NC IV inerva o músculo oblíquo superior do olho."
          ],
          "tip": "Mnemônico: \"Carótida é 9 (IX); Arco da Aorta é 10 (X)\"."
        },
        {
          "id": "w3_q24",
          "type": "single",
          "topic": "Barorreflexo e Regulação da PA",
          "difficulty": "hard",
          "xp": 25,
          "title": "Por que o sistema barorreceptor arterial é considerado um sistema de regulação de \"curto prazo\", incapaz de curar a hipertensão arterial crônica sustentada?",
          "options": [
            "Porque seus mecanorreceptores sofrem necrose isquêmica irreversível e apoptose celular após 24 horas contínuas de hipertensão arterial.",
            "Porque em 1 a 2 dias de pressão cronicamente elevada, os barorreceptores sofrem \"resetting\" (reajuste), adotando a nova pressão alta como normal.",
            "Porque as vesículas pré-sinápticas do nervo vago esgotam totalmente seus estoques de acetilcolina após poucas horas de estímulo pressórico.",
            "Porque as vias espinhais descendentes bloqueiam os sinais vasomotores bulbares com a finalidade de proteger os néfrons contra a nefroesclerose."
          ],
          "correctIndex": 1,
          "explanation": "O fenômeno do \"resetting\" (reajuste) dos barorreceptores faz com que, após 24 a 48 horas de hipertensão contínua, a curva de disparo se desloque para a direita. Eles passam a disparar normalmente no novo patamar hipertenso, deixando de tentar reduzi-lo. O controle a longo prazo cabe aos rins (eixo renina-angiotensina-aldosterona e natriurese de pressão).",
          "whyWrong": [
            "Não há necrose celular dos barorreceptores na hipertensão crônica comum.",
            "Alternativa correta: os barorreceptores sofrem resetting em 24-48h, reajustando-se ao novo nível pressórico.",
            "Não ocorre esgotamento de acetilcolina no vago em condições crônicas.",
            "A medula não bloqueia centros bulbares de forma seletiva para lesão renal."
          ],
          "tip": "Barorreflexo = controle rápido (segundos/minutos). Controle a longo prazo (dias/anos) é função dos RINS!"
        }
      ]
    }
  ]
};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.WORLD_3_DATA = WORLD_3_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORLD_3_DATA };
}
