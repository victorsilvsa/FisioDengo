const fs = require('fs');

const world5 = {
  id: 'w5',
  title: 'Fisiologia Renal, Ácido-Base & Integração Sistêmica',
  subtitle: 'Filtração glomerular, osmorregulação, equilíbrio ácido-base e integração avançada',
  icon: 'brain',
  phases: [
    // Nível 25: w5_p1
    {
      id: 'w5_p1',
      title: 'Filtração Glomerular (TFG) & Forças de Starling',
      topic: 'Filtração Glomerular e TFG',
      level: 25,
      order: 1,
      nextPhaseId: 'w5_p2',
      lesson: {
        title: 'Filtração Glomerular: Dinâmica das Forças de Starling e Autorregulação',
        concept: 'A formação da urina inicia-se nos glomérulos renais através da filtração em massa de água e solutos plasmáticos do capilar glomerular para a cápsula de Bowman, gerando a Taxa de Filtração Glomerular (TFG ≈ 125 mL/min ou 180 L/dia).',
        mechanism: 'Forças de Starling Glomerulares: A Pressão Líquida de Filtração (PLF) resulta do balanço entre forças a favor e forças contrárias: PLF = PGC - PBC - πGC. 1) Pressão Hidrostática Capilar Glomerular (PGC ≈ 60 mmHg, a favor): Favorece a saída de fluido; 2) Pressão Hidrostática na Cápsula de Bowman (PBC ≈ 18 mmHg, contra): Opõe-se à filtração; 3) Pressão Coloidosmótica Glomerular (πGC ≈ 32 mmHg, contra): Exercida pelas proteínas plasmáticas que não atravessam a barreira, retendo líquido no sangue. A barreira de filtração (endotélio fenestrado, lâmina basal com podocalicina negativa e fendas dos podócitos) impede a passagem de células e proteínas de alto peso como a albumina.',
        examPoint: 'Autorregulação e Feedback Tubuloglomerular: O fluxo sanguíneo renal e a TFG permanecem quase constantes em uma faixa de PAM entre 80 e 180 mmHg graças a dois mecanismos: 1) Resposta Miogênica das arteríolas aferentes; 2) Feedback Tubuloglomerular mediado pela Mácula Densa do aparelho justaglomerular. Se a TFG subir, mais NaCl chega à mácula densa, que libera adenosina promovendo vasoconstrição da arteríola aferente, trazendo a TFG de volta ao normal.',
        example: 'Efeito dos AINEs e IECA/BRA: As prostaglandinas dilatam a arteríola aferente (mantendo a TFG), enquanto a angiotensina II constringe preferencialmente a arteríola eferente. O uso combinado de AINE (bloqueia prostaglandinas) e IECA (bloqueia angiotensina II) pode derrubar a TFG e precipitar Injúria Renal Aguda hemodinâmica.',
        quickChallenge: 'O que acontece com a Taxa de Filtração Glomerular se a arteríola eferente sofrer vasoconstrição moderada mediada por angiotensina II?',
        researchTopic: 'Filtração Glomerular, Forças de Starling e Feedback Tubuloglomerular'
      },
      questions: [
        {
          id: 'w5_q1',
          type: 'single',
          topic: 'Filtração Glomerular e TFG',
          difficulty: 'medium',
          xp: 25,
          title: 'Em um indivíduo sadio em repouso, qual é a principal força hidrostática ou osmótica que atua FAVORAVELMENTE para empurrar o plasma do sangue capilar para dentro da cápsula de Bowman?',
          options: [
            'A pressão coloidosmótica das proteínas solúveis no fluido ultrafiltrado da cápsula de Bowman (πBC).',
            'A pressão hidrostática no interior do capilar glomerular (PGC ≈ 60 mmHg) mantida pela resistência eferente.',
            'A pressão hidrostática retrógrada acumulada na pelve renal resultante da sístole peristáltica do ureter.',
            'A pressão oncótica das hemácias desoxigenadas que transitam em fila única pelos capilares glomerulares.'
          ],
          correctIndex: 1,
          explanation: 'A pressão hidrostática capilar glomerular (PGC ≈ 60 mmHg) é a principal força propulsora da ultrafiltração. Ela é consideravelmente maior que a dos capilares sistêmicos comuns (~30 mmHg) devido à alta resistência da arteríola eferente logo à jusante.',
          whyWrong: [
            'O filtrado na cápsula de Bowman é virtualmente isento de proteínas, logo πBC é praticamente zero.',
            'Alternativa correta: PGC (~60 mmHg) é a força motriz a favor da filtração.',
            'A pressão na pelve é retrógrada e se opõe ao fluxo urinário se houver obstrução litiásica.',
            'As hemácias não exercem pressão oncótica (esta é mediada por proteínas solúveis plasmáticas como albumina).'
          ],
          tip: 'A pressão hidrostática do capilar glomerular (PGC) é a força motriz central que empurra o sangue para virar filtrado.'
        },
        {
          id: 'w5_q2',
          type: 'cause_effect',
          topic: 'Filtração Glomerular e TFG',
          difficulty: 'hard',
          xp: 25,
          title: 'Como a constrição seletiva da arteríola aferente afeta a Pressão Hidrostática Capilar Glomerular (PGC) e a Taxa de Filtração Glomerular (TFG)?',
          options: [
            'Eleva a PGC e aumenta significativamente a TFG por congestão retrógrada no tufo capilar vascular.',
            'Reduz a PGC e diminui a TFG, pois reduz o influxo de sangue e a pressão que atinge o tufo glomerular.',
            'Mantém a TFG rigorosamente inalterada através da hipertrofia morfológica compensatória dos podócitos glomerulares.',
            'Provoca aumento descontrolado da permeabilidade que culmina com perda massiva de albumina na urina primária.'
          ],
          correctIndex: 1,
          explanation: 'A vasoconstrição da arteríola aferente aumenta a resistência antes do capilar glomerular, diminuindo a pressão hidrostática a jusante (PGC) e o fluxo sanguíneo renal, o que derruba diretamente a Taxa de Filtração Glomerular (TFG).',
          whyWrong: [
            'A constrição antes do capilar reduz a pressão adiante, não eleva.',
            'Alternativa correta: fechar a torneira de entrada (aferente) diminui a pressão do glomérulo e a filtração cai.',
            'A barreira mecânica podocitária não compensa hidrodinamicamente a queda de pressão.',
            'A permeabilidade a macromoléculas não se altera; o que cai é a taxa mecânica de ultrafiltração.'
          ],
          tip: 'Fechou a arteríola aferente (entrada) = menos pressão no glomérulo = TFG despenca.'
        },
        {
          id: 'w5_q3',
          type: 'single',
          topic: 'Filtração Glomerular e TFG',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual é o papel funcional das células especializadas da Mácula Densa no aparelho justaglomerular renal?',
          options: [
            'Secretar insulina diretamente no túbulo coletor medular para facilitar a captação tubular de glicose filtrada.',
            'Detectar a concentração de NaCl no fluido tubular distal e emitir sinais parácrinos para autorregular a TFG e renina.',
            'Promover a fagocitose de imunocomplexos circulantes que se depositam nas fendas de filtração podocitárias.',
            'Bombear ativamente glicose contra gradientes químicos para restabelecer a volemia nos capilares peritubulares.'
          ],
          correctIndex: 1,
          explanation: 'A mácula densa atua como um sensor quimiomiscível no final da alça de Henle. Quando a TFG sobe, o fluxo tubular acelerado entrega mais NaCl à mácula densa; ela secreta adenosina, promovendo vasoconstrição da arteríola aferente para restabelecer a TFG ideal.',
          whyWrong: [
            'Insulina é sintetizada pelas células beta das ilhotas de Langerhans no pâncreas endócrino.',
            'Alternativa correta: a mácula densa monitora a carga de NaCl para operar o feedback tubuloglomerular.',
            'A imunidade antibacteriana local depende de leucócitos e uroepitélio, não da mácula densa.',
            'A reabsorção de glicose é função exclusiva do túbulo contorcido proximal via SGLT2.'
          ],
          tip: 'Mácula Densa = Sentinela química do néfron. Mede o sal que passa e ajusta o calibre da arteríola aferente.'
        },
        {
          id: 'w5_q4',
          type: 'single',
          topic: 'Filtração Glomerular e TFG',
          difficulty: 'medium',
          xp: 20,
          title: 'Por que proteínas plasmáticas de carga elétrica negativa, como a albumina sérica (~69 kDa), praticamente não ultrapassam a barreira de filtração glomerular em condições fisiológicas normais?',
          options: [
            'Porque são destruídas por enzimas lisossômicas no lúmen do ureter antes de atingirem a bexiga urinária.',
            'Devido ao tamanho molecular e à forte repulsão eletrostática imposta pelas glicoproteínas aniônicas da barreira.',
            'Porque a albumina plasmática é clivada em aminoácidos livres e ureia antes de penetrar na arteríola renal aferente.',
            'Porque a pressão hidrostática na cápsula de Bowman é dez vezes superior à pressão de perfusão sistêmica arterial.'
          ],
          correctIndex: 1,
          explanation: 'A barreira de filtração glomerular possui seletividade por tamanho e por carga. A superfície dos podócitos e a lâmina basal contêm proteoglicanos ricos em heparansulfato e podocalicina carregados negativamente, repelindo proteínas plasmáticas aniônicas como a albumina.',
          whyWrong: [
            'A albumina não é destruída no ureter; ela permanece retida na circulação intravascular.',
            'Alternativa correta: a barreira negativa repele a albumina negativa, impedindo proteinúria fisiológica.',
            'A ureia é sintetizada no fígado pelo ciclo da ornitina a partir de amônia, sem relação com a albumina renal.',
            'A pressão na cápsula de Bowman é de apenas ~18 mmHg, muito inferior à arterial.'
          ],
          tip: 'Carga negativa repele carga negativa: os filtros do rim são negativos, logo a albumina negativa não passa!'
        }
      ]
    },

    // Nível 26: w5_p2
    {
      id: 'w5_p2',
      title: 'Reabsorção e Secreção Tubular ao Longo do Néfron',
      topic: 'Transporte Tubular Renal',
      level: 26,
      order: 2,
      nextPhaseId: 'w5_p3',
      lesson: {
        title: 'Fisiologia Tubular: Segmentação, Transportadores e Reabsorção',
        concept: 'Mais de 99% dos 180 litros diários de filtrado glomerular são reabsorvidos ao longo dos túbulos renais, recuperando solutos vitais e água, enquanto substâncias tóxicas são ativamente secretadas.',
        mechanism: 'Segmentação do Néfron: 1) Túbulo Contorcido Proximal (TCP): O grande "trabalhador" do néfron; reabsorve de forma iso-osmótica cerca de 65% de todo o Na⁺ e água filtrados, além de 100% da glicose e aminoácidos (via cotransportadores acoplados a Na⁺, como SGLT2) e 85% do bicarbonato filtrado; 2) Alça de Henle: Ramo descendente fino é altamente permeável à água e impermeável a solutos; Ramo ascendente espesso é impermeável à água e reabsorve avidamente solutos (~25% do Na⁺, K⁺ e Cl⁻) através do cotransportador apical Na⁺-K⁺-2Cl⁻ (NKCC2), sítio de ação dos diuréticos de alça como a furosemida; 3) Túbulo Contorcido Distal (TCD): Reabsorve Na⁺ e Cl⁻ via cotransportador sensível a tiazídicos (NCC); 4) Ducto Coletor Cortical: Células principais reabsorvem Na⁺ através dos canais epiteliais de sódio (ENaC) e secretam K⁺ sob o controle direto da Aldosterona.',
        examPoint: 'Limiar Renal da Glicose: A capacidade máxima dos transportadores proximais de glicose (TmG) é de ~375 mg/min. Quando a glicemia ultrapassa ~180 a 200 mg/dL, o limiar de saturação dos transportadores é superado e a glicose surge na urina (glicosúria), arrastando água por diurese osmótica (poliúria do diabetes mellitus descompensado).',
        example: 'Inibidores de SGLT2 (gliflozinas, como dapagliflozina e empagliflozina) bloqueiam o cotransporte Na⁺-glicose no túbulo proximal, induzindo glicosúria terapêutica com queda da glicemia, perda ponderal e proteção cardiorrenal comprovada.',
        quickChallenge: 'Por que pacientes com diabetes mellitus não controlado urinam em grande volume (poliúria)?',
        researchTopic: 'Reabsorção Tubular, Segmentação do Néfron e Cotransportadores'
      },
      questions: [
        {
          id: 'w5_q5',
          type: 'single',
          topic: 'Transporte Tubular Renal',
          difficulty: 'medium',
          xp: 25,
          title: 'Em qual segmento do néfron ocorre a reabsorção obrigatória de 100% da glicose filtrada e cerca de 65% da água e do sódio?',
          options: [
            'No ramo descendente fino da alça de Henle.',
            'No túbulo contorcido proximal (TCP) renal.',
            'No túbulo contorcido distal (TCD) cortical.',
            'No ducto coletor medular interno terminal.'
          ],
          correctIndex: 1,
          explanation: 'O túbulo contorcido proximal possui uma borda em escova densa com microvilosidades e rica maquinaria mitocondrial, efetuando o transporte acoplado de sódio que recupera 100% da glicose e aminoácidos e 65% da água e eletrólitos.',
          whyWrong: [
            'A alça descendente delgada reabsorve água passivamente, sem transportadores ativos de glicose.',
            'Alternativa correta: o túbulo proximal realiza a maior parte do trabalho de reabsorção de solutos.',
            'O túbulo distal reabsorve apenas frações menores de sódio e cálcio ajustadas por hormônios.',
            'O ducto coletor atua no ajuste fino terminal de água e eletrólitos sob comando hormonal.'
          ],
          tip: 'Túbulo PROXIMAL = Faz a maior parte do trabalho bruto: 100% de glicose e 65% da água e sal!'
        },
        {
          id: 'w5_q6',
          type: 'cause_effect',
          topic: 'Transporte Tubular Renal',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual transportador iônico localizado na membrana apical do Ramo Ascendente Espesso da alça de Henle é inibido pelos diuréticos de alça (furosemida)?',
          options: [
            'O trocador antiporter Na+/H+ tipo 3 (NHE3) proximal.',
            'O cotransportador eletroneutro Na+-K+-2Cl- (NKCC2).',
            'O cotransportador sódio-glicose tipo 2 (SGLT2).',
            'O canal epitelial de sódio sensível à amilorida (ENaC).'
          ],
          correctIndex: 1,
          explanation: 'A furosemida liga-se competitivamente ao sítio do cloreto no cotransportador apical Na⁺-K⁺-2Cl⁻ (NKCC2) no ramo ascendente espesso, bloqueando a reabsorção de cerca de 25% da carga filtrada de sódio e dissipando o gradiente medular.',
          whyWrong: [
            'NHE3 situa-se no túbulo proximal efetuando reabsorção de bicarbonato.',
            'Alternativa correta: furosemida inibe o cotransportador NKCC2 na alça de Henle.',
            'SGLT2 é o alvo das gliflozinas no túbulo proximal para diabetes tipo 2.',
            'ENaC situa-se no túbulo coletor e é o alvo de diuréticos poupadores de potássio como a amilorida.'
          ],
          tip: 'Diurético de Alça (Furosemida) = Bloqueia o transportador NKCC2 (1 Sódio, 1 Potássio e 2 Cloros).'
        },
        {
          id: 'w5_q7',
          type: 'single',
          topic: 'Transporte Tubular Renal',
          difficulty: 'medium',
          xp: 20,
          title: 'O que explica a manifestação de poliúria osmótica em um paciente portador de diabetes mellitus descompensado com glicemia de 350 mg/dL?',
          options: [
            'A glicemia elevada induz lesão necrótica aguda nas células do centro da sede localizadas no hipotálamo ventromedial.',
            'A carga de glicose filtrada satura o TmG renal; o excesso luminal retém água por osmose e impede sua reabsorção tubular.',
            'A glicose em excesso bloqueia a secreção de prótons pelas células intercaladas alfa, promovendo alcalinização urinária intensa.',
            'Ocorre secreção ectópica paraneoplásica de vasopressina que paralisa o transporte hidroeletrolítico no ducto coletor cortical.'
          ],
          correctIndex: 1,
          explanation: 'Quando a glicemia supera ~180 mg/dL, os transportadores SGLT2 do túbulo proximal saturam. A glicose que sobra no lúmen funciona como um soluto osmoticamente ativo, segurando água consigo e gerando diurese osmótica maciça (poliúria).',
          whyWrong: [
            'A hiperglicemia estimula a sede (polidipsia) por hiperosmolaridade plasmática, e não por necrose hipotalâmica.',
            'Alternativa correta: saturação de SGLT2 = glicose retida no lúmen = diurese osmótica (poliúria).',
            'A poliúria diabética é um fenômeno osmótico decorrente da glicose no lúmen, não de alcalose urinária.',
            'A vasopressina (ADH) retém água e diminuiria o volume urinário; na verdade a poliúria ocorre por força osmótica no filtrado.'
          ],
          tip: 'Açúcar na urina (glicosúria) puxa água por osmose. O rim não consegue reabsorver a água e o paciente urina sem parar (poliúria)!'
        },
        {
          id: 'w5_q8',
          type: 'single',
          topic: 'Transporte Tubular Renal',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual hormônio esteroide sintetizado na zona glomerulosa adrenal estimula a reabsorção de Na⁺ e secreção de K⁺ nas células principais do ducto coletor?',
          options: [
            'Cortisol glicocorticoide sintetizado na zona fasciculada.',
            'Aldosterona mineralocorticoide ativando canais ENaC.',
            'Peptídeo natriurético atrial secretado pelo miocárdio.',
            'Hormônio paratireóideo regulador do metabolismo do cálcio.'
          ],
          correctIndex: 1,
          explanation: 'A aldosterona liga-se ao receptor mineralocorticoide citoplasmático nas células principais do túbulo coletor, estimulando a síntese e inserção apical de canais de sódio (ENaC) e basolateral da bomba Na+/K+ ATPase, aumentando a reabsorção de sódio e a excreção de potássio.',
          whyWrong: [
            'Cortisol é glicocorticoide da zona fasciculada, embora em doses maciças possa ter efeito mineralocorticoide.',
            'Alternativa correta: Aldosterona = retém Na+ e expulsa K+ e H+ no ducto coletor.',
            'O ANP antagoniza a aldosterona, promovendo natriurese (perda de sódio).',
            'O PTH atua na reabsorção de cálcio e excreção de fosfato, não no controle primário da relação Na+/K+ aldosterônica.'
          ],
          tip: 'Aldosterona = "Puxa Sódio para o sangue, joga Potássio na urina".'
        }
      ]
    },

    // Nível 27: w5_p3
    {
      id: 'w5_p3',
      title: 'Mecanismo de Contracorrente, ADH & Osmorregulação',
      topic: 'Contracorrente e ADH',
      level: 27,
      order: 3,
      nextPhaseId: 'w5_p4',
      lesson: {
        title: 'Multiplicação por Contracorrente, Gradiente Medular e o Hormônio Antidiurético',
        concept: 'A osmorregulação corporal mantém a osmolaridade plasmática estritamente em torno de 285 a 295 mOsm/kg através do balanço de água livre controlado pelo Hormônio Antidiurético (ADH / Vasopressina) e pela sede.',
        mechanism: 'Multiplicador de Contracorrente Medular: A alça de Henle dos néfrons justamedulares atua como multiplicador por contracorrente: o ramo descendente perde água para o interstício e concentra o fluido; o ramo ascendente espesso ejeta solutos ativamente (via NKCC2) sem permitir passagem de água. Isso gera um gradiente de hiperosmolaridade córtico-medular crescente (de 300 mOsm/kg no córtex até 1.200 mOsm/kg na papila medular). Os vasos retos (vasa recta) atuam como trocadores por contracorrente, retirando água sem dissipar o gradiente osmótico medular.',
        examPoint: 'Ação Celular do ADH (Vasopressina): Liberado pela neuro-hipófise em resposta a aumentos de apenas 1% na osmolaridade plasmática (detectados por osmorreceptores hipotalâmicos). O ADH liga-se a receptores basolaterais V2 acoplados à proteína Gs nas células do ducto coletor -> eleva o AMP cíclico -> fosforila a proteína quinase A (PKA) -> promove a translocação e inserção de vesículas contendo canais de água Aquaporina-2 (AQP2) na membrana apical. A água é reabsorvida por osmose em direção ao interstício hipertônico medular, concentrando a urina (até 1.200 mOsm/kg) e reduzindo seu volume.',
        example: 'Diabetes Insipidus: Na forma neurogênica (falta de secreção de ADH por trauma craniano) ou nefrogênica (mutação no receptor V2 ou resistência por uso crônico de lítio), os ductos coletores permanecem impermeáveis à água. O paciente excreta até 15 a 20 litros diários de urina extremamente diluída e hipo-osmolar (< 100 mOsm/kg).',
        quickChallenge: 'O que aconteceria com a capacidade do rim de concentrar a urina se os vasos retos tivessem fluxo sanguíneo de altíssima velocidade em vez de fluxo capilar lento?',
        researchTopic: 'Multiplicação por Contracorrente, Vasos Retos e Ação do ADH'
      },
      questions: [
        {
          id: 'w5_q9',
          type: 'single',
          topic: 'Contracorrente e ADH',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual mecanismo tubular é o responsável primordial por criar e sustentar o gradiente de hiperosmolaridade medular crescente (de 300 até 1.200 mOsm/kg)?',
          options: [
            'O transporte ativo primário de glicose e albumina mediado pelo epitélio do ureter proximal.',
            'O transporte ativo de NaCl pelo cotransportador NKCC2 no ramo ascendente espesso impermeável à água.',
            'A filtração glomerular descontrolada decorrente da ausência de arteríola eferente nos néfrons corticais.',
            'A secreção tubular passiva de potássio acoplada à perda obrigatória de bicarbonato no túbulo distal.'
          ],
          correctIndex: 1,
          explanation: 'O ramo ascendente espesso da alça de Henle bombeia ativamente sódio, potássio e cloreto (NKCC2) para o interstício medular, mas é impermeável à água ("segmento diluidor"). Esse "efeito unitário" é multiplicado pelo fluxo em contracorrente ao longo da alça, gerando o gradiente hipertônico medular.',
          whyWrong: [
            'O ureter é uma via condutora urinária que não cria gradientes osmóticos medulares renais.',
            'Alternativa correta: bombeamento de soluto sem água pelo ramo ascendente espesso da alça de Henle.',
            'Todos os néfrons possuem arteríola eferente e a TFG é rigorosamente autorregulada.',
            'A secreção de potássio no túbulo distal não é o motor da multiplicação por contracorrente na medula profunda.'
          ],
          tip: 'Motor da hiperosmolaridade medular: Ramo ascendente espesso da alça de Henle joga sal no interstício e não deixa a água passar!'
        },
        {
          id: 'w5_q10',
          type: 'cause_effect',
          topic: 'Contracorrente e ADH',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual é a cascata molecular intracelular deflagrada pelo Hormônio Antidiurético (ADH) ao se ligar ao seu receptor V2 nas células do ducto coletor?',
          options: [
            'Inativação da adenilil ciclase gerando degradação imediata de todos os canais de sódio epiteliais.',
            'Ativação da adenilil ciclase, elevação de AMPc, ativação de PKA e inserção apical de aquaporinas tipo 2 (AQP2).',
            'Abertura de canais de cálcio que promovem a secreção maciça de renina pelas células principais do ducto.',
            'Fosforilação direta da bomba Na+/K+ ATPase com reversão do fluxo iônico para o lúmen urinário.'
          ],
          correctIndex: 1,
          explanation: 'O ADH liga-se a receptores V2 basolaterais acoplados à proteína Gs -> ativa adenilil ciclase -> sobe AMPc -> ativa PKA -> vesículas contendo canais AQP2 sofrem exocitose na membrana apical luminal, tornando a membrana permeável à água.',
          whyWrong: [
            'O receptor V2 ativa (e não inibe) a adenilil ciclase através da subunidade alfa da proteína Gs.',
            'Alternativa correta: V2 -> Gs -> AMPc -> PKA -> inserção de Aquaporina-2 na membrana apical.',
            'A renina é produzida pelas células justaglomerulares na arteríola aferente, e não pelas células do ducto coletor.',
            'A bomba basolateral mantém sua orientação estequiométrica habitual de 3 Na+ para fora e 2 K+ para dentro.'
          ],
          tip: 'ADH = Receptor V2 -> AMP cíclico -> Põe Aquaporina-2 na parede do túbulo -> Água é reabsorvida e salva do vaso sanitário!'
        },
        {
          id: 'w5_q11',
          type: 'single',
          topic: 'Contracorrente e ADH',
          difficulty: 'medium',
          xp: 20,
          title: 'Em um paciente portador de Diabetes Insipidus central completo pós-trauma craniano, o que se observa no exame de urina?',
          options: [
            'Glicosúria maciça acompanhada de cetonúria intensa e proteinúria de sobrecarga.',
            'Poliúria extrema de urina marcadamente diluída e hipo-osmolar (< 100 mOsm/kg).',
            'Oligúria severa com urina escura concentrada no limite biológico de 1.200 mOsm/kg.',
            'Presença de cilindros hemáticos difusos com hematúria macroscópica urológica.'
          ],
          correctIndex: 1,
          explanation: 'Sem ADH, os ductos coletores permanecem completamente impermeáveis à água. O fluido diluído que sai da alça de Henle não consegue ser reabsorvido, resultando em perda de até 15 a 20 litros diários de urina extremamente diluída (< 100 mOsm/kg).',
          whyWrong: [
            'Glicosúria ocorre no diabetes mellitus (por hiperglicemia), não no diabetes insipidus (deficiência de ADH).',
            'Alternativa correta: falta de ADH = urina muito diluída (<100 mOsm/kg) e em volume gigante (poliúria hipotônica).',
            'Oligúria com urina concentrada é o oposto: decorre de excesso de ADH (SIADH) ou hipovolemia extrema.',
            'Cilindros hemáticos indicam glomerulonefrite ativa, sem correlação com deficiência hormonal de vasopressina.'
          ],
          tip: 'Diabetes Insipidus: falta ADH -> o rim não segura água -> mictório cheio de urina parecendo água pura (< 100 mOsm/kg).'
        },
        {
          id: 'w5_q12',
          type: 'single',
          topic: 'Contracorrente e ADH',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual é o papel biofísico fundamental exercido pelos Vasos Retos (vasa recta) na medula renal?',
          options: [
            'Bombear ativamente íons sódio contra o gradiente químico medular utilizando quebra direta de ATP.',
            'Atuar como trocadores por contracorrente passivos, nutrindo a medula sem dissipar a hiperosmolaridade.',
            'Sintetizar aldosterona e angiotensina II diretamente no espaço peritubular justamedular.',
            'Filtrar proteínas plasmáticas de alto peso molecular para nutrir as alças de Henle curtas.'
          ],
          correctIndex: 1,
          explanation: 'Os vasos retos formam alças em "U" paralelas às alças de Henle com fluxo sanguíneo muito lento. Por serem altamente permeáveis, o sangue que desce ganha solutos e perde água, e o sangue que sobe devolve solutos ao interstício e capta água, funcionando como trocadores passivos por contracorrente que preservam o gradiente medular.',
          whyWrong: [
            'Os vasos retos são capilares endoteliais passivos e não possuem bombas de transporte ativo.',
            'Alternativa correta: funcionam como trocadores passivos por contracorrente, retirando água sem lavar o sal medular.',
            'Aldosterona é sintetizada na adrenal e angiotensina II é clivada no endotélio pela ECA.',
            'Capilares da vasa recta não realizam ultrafiltração de proteínas plasmáticas.'
          ],
          tip: 'Vasa Recta = Trocador por contracorrente. Lava a água reabsorvida sem lavar o sal que mantém a medula hipertônica!'
        }
      ]
    },

    // Nível 28: w5_p4
    {
      id: 'w5_p4',
      title: 'Equilíbrio Ácido-Base & Compensação',
      topic: 'Equilíbrio Ácido-Base',
      level: 28,
      order: 4,
      nextPhaseId: 'w5_p5',
      lesson: {
        title: 'Equilíbrio Ácido-Base: Sistema Bicarbonato e Respostas Compensatórias',
        concept: 'O pH do líquido extracelular é mantido em uma faixa estreita e rigorosa entre 7,35 e 7,45 (concentração de H⁺ entre 35 e 45 nmol/L) para assegurar a conformação e atividade enzimática de todas as proteínas corporais.',
        mechanism: 'Equação de Henderson-Hasselbalch: pH = 6,1 + log([HCO₃⁻] / (0,03 × PCO₂)). O componente metabólico é regulado pelos RINS ([HCO₃⁻] normal ≈ 24 mEq/L) e o componente respiratório é regulado pelos PULMÕES (PCO₂ normal ≈ 40 mmHg).',
        examPoint: 'Mecanismos de Compensação Fisiológica: 1) Resposta Respiratória (Rápida - minutos a horas): Em acidose metabólica (queda de HCO₃⁻), os quimiorreceptores detectam o excesso de H⁺ e estimulam hiperventilação compensatória (respiração de Kussmaul), baixando a PCO₂ para tentar trazer o pH de volta a 7,40 (Fórmula de Winter: PCO₂ esperada = 1,5 × [HCO₃⁻] + 8 ± 2); 2) Resposta Renal (Lenta - 3 a 5 dias): Em distúrbios respiratórios crônicos, os rins ajustam a reabsorção tubular de bicarbonato e a secreção líquida de ácido (na forma de acidez titulável e amônio - NH₄⁺).',
        example: 'Um paciente com cetoacidose diabética apresenta gasometria arterial: pH = 7,15 (acidemia grave), HCO₃⁻ = 8 mEq/L (acidose metabólica primária), PCO₂ = 20 mmHg (compensação respiratória por hiperventilação de Kussmaul). Pela fórmula de Winter: PCO₂ esperada = 1,5 × 8 + 8 = 20 mmHg. Compensação respiratória pura e adequada!',
        quickChallenge: 'Por que o sistema tampão bicarbonato/CO₂ é o mais poderoso do organismo humano se o seu pKa (6,1) é tão distante do pH fisiológico (7,40)?',
        researchTopic: 'Equilíbrio Ácido-Base, Gasometria Arterial e Fórmula de Winter'
      },
      questions: [
        {
          id: 'w5_q13',
          type: 'single',
          topic: 'Equilíbrio Ácido-Base',
          difficulty: 'easy',
          xp: 20,
          title: 'Quais são os valores de referência normais em uma gasometria arterial de um indivíduo sadio em repouso ao nível do mar?',
          options: [
            'pH: 7,00 a 7,10 | PCO₂: 20 a 25 mmHg | HCO₃⁻: 10 a 14 mEq/L.',
            'pH: 7,35 a 7,45 | PCO₂: 35 a 45 mmHg | HCO₃⁻: 22 a 26 mEq/L.',
            'pH: 7,55 a 7,65 | PCO₂: 50 a 60 mmHg | HCO₃⁻: 35 a 40 mEq/L.',
            'pH: 6,80 a 7,00 | PCO₂: 80 a 90 mmHg | HCO₃⁻: 5 a 8 mEq/L.'
          ],
          correctIndex: 1,
          explanation: 'O pH arterial normal varia entre 7,35 e 7,45; a pressão parcial de dióxido de carbono (PCO2) normal situa-se entre 35 e 45 mmHg; e a concentração plasmática de bicarbonato (HCO3-) situa-se entre 22 e 26 mEq/L (média de 24 mEq/L).',
          whyWrong: [
            'Valores compatíveis com acidose metabólica grave descompensada.',
            'Alternativa correta: pH 7,35-7,45; PCO2 35-45 mmHg; HCO3- 22-26 mEq/L.',
            'Valores compatíveis com alcalose metabólica severa associada a retenção de CO2.',
            'Valores incompatíveis com a vida celular humana prolongada (acidose extrema fatal).'
          ],
          tip: 'Valores sagrados da gasometria: pH 7,35-7,45 | PCO2 35-45 | HCO3 22-26.'
        },
        {
          id: 'w5_q14',
          type: 'cause_effect',
          topic: 'Equilíbrio Ácido-Base',
          difficulty: 'hard',
          xp: 25,
          title: 'Em um paciente com acidose metabólica aguda (queda primária de HCO₃⁻), qual é a resposta compensatória fisiológica imediata dos pulmões?',
          options: [
            'Hipoventilação alveolar reflexa para reter dióxido de carbono e poupar bases voláteis.',
            'Hiperventilação compensatória (aumento de volume e frequência) para eliminar CO₂ e atenuar a queda do pH.',
            'Secreção imediata de surfactante pelos pneumócitos tipo I para dissolver o ácido lático circulante.',
            'Bloqueio completo da hematose por vasoconstrição generalizada na circulação brônquica.'
          ],
          correctIndex: 1,
          explanation: 'O excesso de H+ estimula os quimiorreceptores periféricos (corpúsculos carotídeos) e centrais, gerando hiperventilação (respiração rápida e profunda / padrão de Kussmaul). Ao eliminar CO2 (ácido volátil), a razão [HCO3-] / PCO2 se aproxima do normal, amenizando a acidemia.',
          whyWrong: [
            'Hipoventilar reteria mais CO2 e agravaria a acidemia de forma fatal.',
            'Alternativa correta: hiperventilação compensatória elimina CO2 (ácido volátil) para subir o pH.',
            'Surfactante é sintetizado por pneumócitos tipo II e atua na mecânica alveolar, não no tamponamento ácido-base sistêmico.',
            'A hematose é preservada e acelerada para garantir o intercâmbio de CO2.'
          ],
          tip: 'Acidose Metabólica: o sangue está ácido -> o pulmão hiperventila para assoprar o CO2 para fora e subir o pH!'
        },
        {
          id: 'w5_q15',
          type: 'single',
          topic: 'Equilíbrio Ácido-Base',
          difficulty: 'hard',
          xp: 25,
          title: 'Como os rins respondem a longo prazo (3 a 5 dias) para compensar uma Acidose Respiratória Crônica em um paciente com DPOC avançada?',
          options: [
            'Excretando massivamente bicarbonato na urina para reduzir a alcalose intersticial.',
            'Reabsorvendo praticamente todo o bicarbonato filtrado e sintetizando novo HCO₃⁻ acoplado à secreção de H⁺ como amônio.',
            'Paralisando a filtração glomerular através de vasoconstrição permanente das arteríolas aferentes renais.',
            'Destruindo as células justaglomerulares para evitar a ativação do sistema renina-angiotensina-aldosterona.'
          ],
          correctIndex: 1,
          explanation: 'Diante de PCO2 cronicamente alta, as células tubulares renais aumentam a secreção de H+ via trocador NHE3 e bombas H+-ATPase. A secreção ácida reabsorve 100% do HCO3- filtrado e gera novo bicarbonato sérico acoplado à excreção de amônio (NH4+) e acidez titulável, normalizando o pH.',
          whyWrong: [
            'Excretar bicarbonato agravaria a acidemia; o rim retém e sintetiza bicarbonato.',
            'Alternativa correta: os rins reabsorvem e geram novo bicarbonato sérico para contrabalançar a retenção de CO2.',
            'A filtração glomerular permanece funcional; a compensação é estritamente de transporte tubular.',
            'O aparelho justaglomerular permanece intacto e funcional.'
          ],
          tip: 'Acidose Respiratória Crônica: pulmão não consegue jogar CO2 fora -> rim retém e fabrica bicarbonato para normalizar o pH!'
        },
        {
          id: 'w5_q16',
          type: 'single',
          topic: 'Equilíbrio Ácido-Base',
          difficulty: 'hard',
          xp: 25,
          title: 'Um paciente em crise de ansiedade apresenta hiperventilação severa. Sua gasometria revela: pH = 7,55; PCO₂ = 22 mmHg; HCO₃⁻ = 20 mEq/L. Qual é o diagnóstico?',
          options: [
            'Acidose metabólica com compensação pulmonar.',
            'Alcalose respiratória aguda com início de resposta compensatória.',
            'Acidose respiratória crônica descompensada.',
            'Alcalose metabólica pura associada a hipocalemia.'
          ],
          correctIndex: 1,
          explanation: 'pH > 7,45 indica alcalemia. PCO2 < 35 mmHg aponta distúrbio primário respiratório (eliminação excessiva de CO2 pela hiperventilação psicogênica). O bicarbonato está discretamente reduzido por tamponamento intracelular agudo. Trata-se de Alcalose Respiratória Aguda.',
          whyWrong: [
            'O pH está acima de 7,45 (alcalose), não abaixo (acidose).',
            'Alternativa correta: Alcalose Respiratória Aguda induzida por hiperventilação.',
            'Acidose respiratória cursa com PCO2 elevada (> 45) e pH baixo (< 7,35).',
            'A alteração primária é a queda de PCO2 pulmonar, não elevação primária de bicarbonato renal.'
          ],
          tip: 'Hiperventilar = lavar CO2 demais -> PCO2 despenca -> pH sobe acima de 7,45 = Alcalose Respiratória!'
        }
      ]
    },

    // Nível 29: w5_p5
    {
      id: 'w5_p5',
      title: 'Integração Cardio-Respiratória no Exercício Intenso',
      topic: 'Fisiologia Integrada do Exercício',
      level: 29,
      order: 5,
      nextPhaseId: 'w5_p6',
      lesson: {
        title: 'Fisiologia Integrada do Exercício Físico Aeróbio e Anaeróbio',
        concept: 'O exercício físico exige integração instantânea entre os sistemas cardiovascular, respiratório, muscular e autonômico para elevar a oferta de O₂ e a remoção de CO₂ e calor.',
        mechanism: 'Ajustes Integrados: 1) Débito Cardíaco: Pode subir de 5 L/min para até 25-35 L/min em atletas, por taquicardia (retirada vagal inicial seguida de ativação simpática intensa) e aumento do volume sistólico (Frank-Starling e inotropismo beta-1); 2) Redistribuição do Fluxo: Vasodilatação metabólica maciça nos músculos esqueléticos em atividade (que recebem até 85% do débito) concomitante à vasoconstrição simpática esplâncnica e renal; 3) Ventilação Pulmonar: Pode subir de 6 L/min para mais de 100-150 L/min; 4) Consumo de Oxigênio (VO₂): Calculado pela Equação de Fick: VO₂ = DC × (CaO₂ - CvO₂). A diferença arteriovenosa de O₂ se alarga dramaticamente porque os músculos extraem quase todo o O₂ do sangue.',
        examPoint: 'Limiar de Lactato e Ponto de Compensação Respiratória: Em intensidades crescentes, a produção de ácido láctico pela glicólise anaeróbia supera a taxa de clareamento hepático. O acúmulo de H⁺ estimula os quimiorreceptores carotídeos, deflagrando hiperventilação desproporcional ao consumo de O₂ (hiperventilação isocápnica seguida de hiperventilação de compensação com queda da PCO₂ arterial).',
        example: 'O Efeito Bohr opera no músculo em exercício: O calor local, a acidose láctica e a alta PCO₂ desviam a curva de dissociação da hemoglobina para a direita, permitindo que a saturação da Hb venosa caia de 75% para menos de 15-20% no leito muscular ativo.',
        quickChallenge: 'Por que a Pressão Arterial Média (PAM) sobe apenas moderadamente durante o exercício aeróbio se o Débito Cardíaco aumenta até 5 vezes?',
        researchTopic: 'Fisiologia Integrada do Exercício e Limiar de Lactato'
      },
      questions: [
        {
          id: 'w5_q17',
          type: 'single',
          topic: 'Fisiologia Integrada do Exercício',
          difficulty: 'hard',
          xp: 25,
          title: 'Durante o exercício físico aeróbio intenso, o Débito Cardíaco pode aumentar até 5 vezes (de 5 para 25 L/min), mas a Pressão Arterial Média (PAM) sobe apenas moderadamente (~20-30 mmHg). Qual mecanismo hemodinâmico explica essa discrepância?',
          options: [
            'Ocorre insuficiência aórtica funcional com refluxo de metade do sangue ejetado de volta ao ventrículo.',
            'A vasodilatação metabólica maciça no leito muscular ativo reduz dramaticamente a Resistência Vascular Periférica (RVP) total.',
            'O sistema nervoso parassimpático induz paralisia tônica dos centros vasomotores simpáticos da medula espinhal.',
            'Os pulmões sequestram todo o excesso de débito cardíaco sem permitir sua passagem para a aorta descendente.'
          ],
          correctIndex: 1,
          explanation: 'Pela fórmula PAM ≈ DC × RVP, se o DC sobe 5 vezes e a PAM subisse proporcionalmente, o indivíduo teria crise hipertensiva fatal (> 400 mmHg). Contudo, a vasodilatação arteriolar nos músculos ativos reduz drasticamente a RVP global, amortecendo a elevação da PAM.',
          whyWrong: [
            'As valvas aórticas sadias mantêm competência mecânica absoluta durante o exercício.',
            'Alternativa correta: PAM = DC × RVP. A RVP cai violentamente pela vasodilatação muscular, impedindo que a PAM suba descontroladamente.',
            'O tônus simpático atinge níveis máximos no exercício intenso; o que dilata os músculos são metabólitos locais (adenosina, K+, lactato).',
            'O débito cardíaco atravessa a circulação pulmonar e atinge os leitos sistêmicos integralmente.'
          ],
          tip: 'No exercício aeróbio: Débito sobe muito, mas os músculos dilatam tanto que a Resistência Vascular (RVP) cai -> a pressão sobe só um pouco!'
        },
        {
          id: 'w5_q18',
          type: 'single',
          topic: 'Fisiologia Integrada do Exercício',
          difficulty: 'hard',
          xp: 25,
          title: 'O que caracteriza o "Limiar de Lactato" (Limiar Anaeróbio) durante um teste de esforço cardiopulmonar progressivo?',
          options: [
            'O instante exato em que o miocárdio esgota completamente suas reservas de glicogênio e sofre isquemia difusa.',
            'A intensidade de esforço na qual a taxa de produção de lactato muscular supera a capacidade tecidual de metabolização, acumulando-se no sangue.',
            'O momento em que os pulmões atingem a Capacidade Pulmonar Total e cessam as trocas gasosas alvéolo-capilares.',
            'A frequência cardíaca limite na qual as valvas atrioventriculares não mais se abrem durante a diástole ventricular.'
          ],
          correctIndex: 1,
          explanation: 'Abaixo do limiar de lactato, o lactato produzido é facilmente removido pelo fígado (ciclo de Cori) e coração. Acima do limiar, o recrutamento de fibras musculares glicolíticas rápidas eleva a produção além da taxa de clareamento, gerando acidose metabólica e estímulo ventilatório desproporcional.',
          whyWrong: [
            'O miocárdio não esgota glicogênio nem sofre isquemia no limiar de lactato; ele inclusive consome lactato como combustível!',
            'Alternativa correta: produção > depuração de lactato = acúmulo sérico e acidose láctica progressiva.',
            'A capacidade pulmonar total não é atingida; a respiração atua na faixa de reserva ventilatória.',
            'O enchimento ventricular é mantido em frequências submáximas, sem parada de abertura valvar.'
          ],
          tip: 'Limiar de Lactato: o músculo produz mais ácido láctico do que o corpo consegue queimar -> começa o acúmulo no sangue e o cansaço acelera!'
        },
        {
          id: 'w5_q19',
          type: 'single',
          topic: 'Fisiologia Integrada do Exercício',
          difficulty: 'hard',
          xp: 25,
          title: 'Segundo a Equação de Fick para o consumo de oxigênio (VO₂ = DC × [CaO₂ - CvO₂]), por que a diferença arteriovenosa de oxigênio (CaO₂ - CvO₂) se amplia consideravelmente durante o esforço físico exaustivo?',
          options: [
            'Porque a concentração de oxigênio no sangue arterial aumenta espontaneamente para o triplo do normal.',
            'Porque os músculos esqueléticos ativos aumentam enormemente a extração tecidual de O₂, reduzindo a saturação venosa de 75% para menos de 20%.',
            'Porque a hemoglobina sofre inativação térmica no interior dos eritrócitos e perde todo o oxigênio para a linfa.',
            'Porque o fluxo sanguíneo coronariano cessa durante toda a sístole ventricular isométrica do exercício.'
          ],
          correctIndex: 1,
          explanation: 'Em repouso, o sangue chega com ~20 mL O2/dL e sai na veia com ~15 mL O2/dL (diferença de 5 mL/dL). No exercício intenso, pelo efeito Bohr e pelo altíssimo consumo tecidual, os miócitos extraem quase todo o O2 disponível; o sangue venoso sai com apenas ~3 a 5 mL O2/dL, ampliando a diferença (CaO2 - CvO2) para até 15-17 mL/dL.',
          whyWrong: [
            'O conteúdo arterial (CaO2) é limitado pela hemoglobina e PO2 alveolar (~20 mL O2/dL), não triplicando.',
            'Alternativa correta: os músculos ativos consomem e extraem avidamente o oxigênio, derrubando o oxigênio no sangue venoso.',
            'A hemoglobina não se inativa termicamente na temperatura do exercício (~38-39°C); o Efeito Bohr facilita sua liberação fisiológica.',
            'O fluxo coronariano aumenta expressivamente no exercício para suprir o miocárdio hiperativo.'
          ],
          tip: 'Diferença A-V de O2 amplia no exercício: o músculo "espreme" a hemoglobina e extrai quase todo o oxigênio dela!'
        },
        {
          id: 'w5_q20',
          type: 'single',
          topic: 'Fisiologia Integrada do Exercício',
          difficulty: 'hard',
          xp: 25,
          title: 'Como a redistribuição regional do fluxo sanguíneo tecidual é orquestrada durante o exercício físico extenuante?',
          options: [
            'Vasoconstrição mediada pelo simpático nos territórios renal e esplâncnico associada à vasodilatação metabólica nos músculos ativos.',
            'Vasodilatação generalizada e uniforme em todos os órgãos do corpo, incluindo rins e cérebro, duplicando o fluxo de todos os tecidos.',
            'Fechamento reflexo das coronárias e artérias carótidas para desviar a quase totalidade do débito para os membros inferiores.',
            'Constrição mecânica ativa da aorta abdominal para impedir o fluxo sanguíneo em direção à pelve.'
          ],
          correctIndex: 0,
          explanation: 'O sistema simpático deflagra vasoconstrição alfa-1 nos órgãos abdominais (rins, trato gastrointestinal) e pele, liberando fluxo. Nos músculos esqueléticos, metabólitos locais (adenosina, H+, lactato, K+, NO) sobrepujam a vasoconstrição simpática (simpaticólise funcional), canalizando até 85% do débito para os músculos esqueléticos.',
          whyWrong: [
            'Alternativa correta: Rins e trato gastrointestinal sofrem vasoconstrição simpática; músculos ativos sofrem vasodilatação metabólica local.',
            'Se todos os leitos dilatassem simultaneamente, ocorreria choque hemodinâmico distributivo imediato por falta de volemia.',
            'O cérebro e o coração têm seu fluxo rigorosamente preservado ou ampliado no exercício, sem fechamento arterial.',
            'A aorta é um vaso de grande calibre de condução e não sofre constrição oclusiva no exercício.'
          ],
          tip: 'No exercício: o corpo "fecha a torneira" da digestão e dos rins e abre totalmente o fluxo para os músculos que estão correndo!'
        }
      ]
    },

    // Nível 30: w5_p6
    {
      id: 'w5_p6',
      title: 'Choque Circulatório, Hemorragia & Grandes Altitudes',
      topic: 'Choque e Fisiologia Extrema',
      level: 30,
      order: 6,
      nextPhaseId: null,
      lesson: {
        title: 'Fisiologia em Situações Críticas: Choque Circulatório e Hipóxia de Altitude',
        concept: 'O choque circulatório é a falência aguda generalizada da perfusão tecidual, resultando em entrega inadequada de oxigênio e nutrientes para atender às demandas metabólicas celulares.',
        mechanism: 'Classificação Fisiopatológica do Choque: 1) Hipovolêmico (perda de volume: hemorragia aguda, desidratação severa); 2) Cardiogênico (falência intrínseca da bomba miocárdica: infarto extenso do VE); 3) Distributivo (vasodilatação periférica extrema: choque séptico, anafilático, neurogênico); 4) Obstrutivo (impedimento mecânico ao enchimento ou esvaziamento: tamponamento cardíaco, TEP maciço, pneumotórax hipertensivo).',
        examPoint: 'Mecanismos Compensatórios na Hemorragia Aguda (Choque Hipovolêmico): 1) Resposta Imediata (Segundos): Barorreflexo -> aumento dramático do tônus simpático -> taquicardia, vasoconstrição periférica arteriolar intensa (pele fria e sudoreica) e venoconstrição para aumentar o retorno venoso; 2) Resposta Intermediária (Minutos a Horas): Autotransfusão capilar (queda da pressão hidrostática capilar permite que o fluido intersticial seja absorvido para o intravascular por força oncótica) + ativação do Sistema Renina-Angiotensina-Aldosterona (SRAA) e secreção de ADH para reter Na⁺ e água; 3) Resposta Tardia (Dias): Secreção de EPO restaurando a massa de eritrócitos.',
        example: 'Grandes Altitudes (ex: 4.500 metros): A fração de O₂ no ar é a mesma (21%), mas a pressão barométrica cai pela metade (~380 mmHg). A PO₂ inspirada e alveolar desaba (hipóxia hipobárica). Respostas adaptativas: 1) Aguda: Hiperventilação imediata disparada pelos quimiorreceptores carotídeos (gera alcalose respiratória com queda de PCO₂); 2) Subaguda: Os rins compensam excretando bicarbonato na urina; 3) Crônica (semanas): Hipóxia renal sustentada induz secreção maciça de EPO, elevando o hematócrito (poliglobulia de altitude).',
        quickChallenge: 'Por que no Choque Séptico inicial (distributivo) o paciente apresenta pele quente e extremidades aquecidas, ao contrário do Choque Hipovolêmico onde a pele é fria e pegajosa?',
        researchTopic: 'Fisiopatologia do Choque Circulatório e Respostas Compensatórias'
      },
      questions: [
        {
          id: 'w5_q21',
          type: 'single',
          topic: 'Choque e Fisiologia Extrema',
          difficulty: 'hard',
          xp: 30,
          title: 'Um paciente vítima de ferimento por arma de fogo apresenta perda estimada de 1.500 mL de sangue (Choque Hipovolêmico Classe III). Quais respostas neuro-humorais compensatórias imediatas são deflagradas para sustentar a perfusão dos órgãos vitais (cérebro e coração)?',
          options: [
            'Descarga parassimpática vagal massiva provocando bradicardia extrema associada à inibição da secreção de aldosterona.',
            'Descarga adrenérgica intensa provocando taquicardia, vasoconstrição arteriolar esplâncnica e cutânea, venoconstrição e ativação do SRAA e ADH.',
            'Paralisia completa do tônus vasomotor periférico para desviar o sangue remanescente para as extremidades dos membros.',
            'Supressão aguda da síntese de renina e vasopressina promovendo diurese maciça para desintoxicar o plasma sanguíneo residual.'
          ],
          correctIndex: 1,
          explanation: 'A perda volêmica derruba a PA -> os barorreceptores descarregam menos -> o bulbo dispara estímulo simpático máximo (taquicardia, vasoconstrição seletiva em pele e vísceras para preservar cérebro e coronárias). Concomitantemente, a isquemia renal ativa o SRAA (angiotensina II causa vasoconstrição e aldosterona retém sal) e a neuro-hipófise secreta ADH para reter água livre.',
          whyWrong: [
            'A resposta vagal bradicardizante levaria ao colapso imediato; a resposta vital é taquicardia simpática compensatória.',
            'Alternativa correta: simpático potente (taquicardia e vasoconstrição periférica) + ativação do SRAA e ADH para salvar a perfusão central.',
            'Vasodilatação periférica agravaria o choque (choque distributivo); o organismo responde com intensa vasoconstrição periférica.',
            'O rim cessa a diurese (oligúria reflexa) para reter o máximo de volume intravascular, ativando renina e ADH.'
          ],
          tip: 'Choque Hipovolêmico: o corpo fecha a torneira de tudo (pele fria, sem urina) para mandar o sangue que sobrou para o coração e o cérebro!'
        },
        {
          id: 'w5_q22',
          type: 'single',
          topic: 'Choque e Fisiologia Extrema',
          difficulty: 'hard',
          xp: 30,
          title: 'Em um quadro de Choque Séptico (choque distributivo por infecção bacteriana grave), qual alteração hemodinâmica primária o diferencia do Choque Hipovolêmico?',
          options: [
            'Aumento extremo da resistência vascular periférica sistêmica mediado pelo excesso de trombina.',
            'Vasodilatação arteriolar generalizada e perda do tônus vascular induzidas por mediadores inflamatórios (como óxido nítrico e citocinas).',
            'Bloqueio completo da passagem do sangue do átrio esquerdo para o ventrículo por calcificação valvar aguda.',
            'Paralisia mecânica do diafragma impedindo a expansão torácica durante todo o ciclo ventilatório.'
          ],
          correctIndex: 1,
          explanation: 'No choque séptico, toxinas bacterianas e citocinas inflamatórias (TNF, IL-1) estimulam a síntese maciça de Óxido Nítrico sintase induzível (iNOS) no endotélio vascular. Isso causa vasodilatação profunda e refratária com colapso da Resistência Vascular Periférica (RVP baixa, pele inicialmente quente), ao contrário do choque hipovolêmico (RVP alta, pele fria).',
          whyWrong: [
            'No choque séptico a RVP está marcadamente reduzida (vasodilatação sistêmica), e não aumentada.',
            'Alternativa correta: citocinas e óxido nítrico provocam vasodilatação periférica generalizada (RVP baixa).',
            'O choque séptico é distributivo vascular, não estenose valvar mecânica aguda.',
            'A musculatura diafragmática não é paralisada na sepse precoce; o paciente geralmente apresenta taquipneia compensatória.'
          ],
          tip: 'Choque Hipovolêmico: vaso contraído, pele fria, RVP alta. Choque Séptico: vaso dilatado por óxido nítrico, pele quente, RVP baixa!'
        },
        {
          id: 'w5_q23',
          type: 'single',
          topic: 'Choque e Fisiologia Extrema',
          difficulty: 'hard',
          xp: 30,
          title: 'Ao viajar repentinamente para uma cidade a 4.500 metros de altitude, por que uma pessoa experimenta hiperventilação imediata e qual distúrbio ácido-base inicial isso acarreta?',
          options: [
            'A fração de O₂ do ar cai para 5%, estimulando os centros gástricos a produzir acidose metabólica pura com hiato aniônico elevado.',
            'A baixa PO₂ alveolar decorrente da hipóxia hipobárica estimula os quimiorreceptores carotídeos, deflagrando hiperventilação que gera Alcalose Respiratória aguda.',
            'A pressão atmosférica reduzida induz dilatação passiva das veias pulmonares, promovendo acidose respiratória grave com retenção alveolar de CO₂.',
            'O ar rarefeito congela os bronquíolos respiratórios terminais, impedindo qualquer eliminação de dióxido de carbono pela respiração.'
          ],
          correctIndex: 1,
          explanation: 'A 4.500 m, a pressão barométrica cai para ~430 mmHg (contra 760 mmHg ao nível do mar). A fração de O2 permanece 21%, mas a PO2 alveolar cai para ~45-50 mmHg. Essa hipoxemia arterial grave estimula os quimiorreceptores carotídeos, disparando hiperventilação reflexa. A eliminação excessiva de CO2 reduz a PCO2 e eleva o pH, gerando Alcalose Respiratória Aguda.',
          whyWrong: [
            'A fração de O2 do ar é sempre 20,9% (constante em qualquer altitude); o que cai é a pressão barométrica total.',
            'Alternativa correta: hipóxia hipobárica -> quimiorreceptores carotídeos -> hiperventilação -> lava CO2 -> Alcalose Respiratória.',
            'A hiperventilação elimina CO2 (baixa a PCO2), gerando alcalose e não acidose respiratória.',
            'As vias aéreas umidificam e aquecem o ar inspirado normalmente; não há congelamento bronquiolar.'
          ],
          tip: 'Altitude: ar rarefeito (pressão baixa) -> falta O2 -> você hiperventila -> lava CO2 -> Alcalose Respiratória!'
        },
        {
          id: 'w5_q24',
          type: 'single',
          topic: 'Choque e Fisiologia Extrema',
          difficulty: 'hard',
          xp: 30,
          title: 'Após três semanas de aclimatação contínua a 4.500 metros de altitude, qual alteração hematológica adaptativa essencial é promovida pelos rins para restabelecer o conteúdo arterial de oxigênio (CaO₂)?',
          options: [
            'Diminuição da síntese de hemoglobina com destruição esplênica de eritrócitos para reduzir a viscosidade vascular pulmonar.',
            'A hipóxia tecidual renal crônica estimula a secreção contínua de eritropoietina (EPO), elevando o hematócrito e a massa total de hemoglobina (poliglobulia de altitude).',
            'Bloqueio completo da absorção duodenal de ferro pela síntese excessiva de hepcidina hepática decorrente da alcalose sistêmica.',
            'Conversão das hemácias em células nucleadas dotadas de mitocôndrias ativas para consumir oxigênio diretamente no plasma venoso.'
          ],
          correctIndex: 1,
          explanation: 'A hipóxia tecidual crônica estabiliza o fator de transcrição HIF-2alpha nas células intersticiais peritubulares renais, sustentando a transcrição e secreção de EPO. A medula óssea aumenta a eritropoiese, elevando o hematócrito (poliglobulia/eritrocitose secundária de altitude) para ~55-60%, restaurando o conteúdo arterial de O2 (CaO2).',
          whyWrong: [
            'O organismo eleva a hemoglobina para transportar mais O2, não a reduz.',
            'Alternativa correta: hipóxia renal crônica -> secreção de EPO -> policitemia/eritrocitose secundária que aumenta a capacidade de transporte de O2.',
            'A absorção de ferro é aumentada (a hepcidina é suprimida pela eritropoiese ativa) para fornecer substrato à síntese de nova hemoglobina.',
            'Eritrócitos humanos maduros permanecem anucleados e desprovidos de mitocôndrias.'
          ],
          tip: 'Aclimatação à altitude: o rim sente a hipóxia por semanas -> secreta muita EPO -> hematócrito sobe (poliglobulia) para carregar mais oxigênio!'
        }
      ]
    }
  ]
};

const output = `// World 5: Fisiologia Renal, Ácido-Base e Integração Sistêmica (6 Níveis, 24 Questões)
const WORLD_5_DATA = ${JSON.stringify(world5, null, 2)};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.WORLD_5_DATA = WORLD_5_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORLD_5_DATA };
}
`;

fs.writeFileSync('js/data/world5_integrado.js', output, 'utf8');
console.log('✓ world5_integrado.js gerado com sucesso!');
