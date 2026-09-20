const fs = require('fs');

const world1 = {
  id: 'w1',
  title: 'Homeostase e Fisiologia Celular',
  subtitle: 'Meio interno, transporte de membrana, tonicidade, potenciais bioelétricos e potencial de ação',
  icon: 'cell',
  phases: [
    // ----------------------------------------------------
    // NÍVEL 1 (w1_p1): Homeostase & Alça de Controle
    // ----------------------------------------------------
    {
      id: 'w1_p1',
      title: 'Homeostase & Alça de Controle',
      topic: 'Homeostase e Feedback',
      level: 1,
      order: 1,
      nextPhaseId: 'w1_p2',
      lesson: {
        title: 'Homeostase e Mecanismos de Controle',
        concept: 'Homeostase é a capacidade do organismo vivo de manter a estabilidade dinâmica do meio interno (líquido extracelular - LEC), apesar das constantes variações do ambiente externo.',
        mechanism: 'O controle homeostático opera por alças de retroalimentação compostas por três elementos essenciais: 1) Sensor/Receptor (detecta desvios da variável monitorada); 2) Centro Integrador (compara o estímulo ao ponto de ajuste ou "set-point" e decide a resposta); 3) Efetor (órgão ou tecido que executa a alteração fisiológica necessária).',
        examPoint: 'Feedback Negativo vs. Positivo: O feedback negativo é o principal mecanismo homeostático porque inverte o sentido da alteração inicial (ex: se a pressão cai, ele atua para elevá-la). Já o feedback positivo amplifica o estímulo inicial, afastando o sistema do equilíbrio até um desfecho específico (ex: contrações uterinas no parto via ocitocina e cascata de coagulação).',
        example: 'Regulação da glicemia: Ao se alimentar, a glicemia sobe (estímulo). Células beta pancreáticas detectam (sensor/integrador) e secretam insulina (sinal efetor). Fígado e músculos captam glicose, normalizando a glicemia (resposta que encerra a secreção).',
        quickChallenge: 'Por que o feedback negativo é a regra geral na fisiologia humana e o feedback positivo é reservado para eventos específicos?'
      },
      questions: [
        {
          id: 'w1_q1',
          type: 'single',
          topic: 'Homeostase e Feedback',
          difficulty: 'easy',
          xp: 15,
          title: 'Em fisiologia humana, qual é o conceito fundamental de homeostase?',
          options: [
            'Um estado de equilíbrio físico-químico estático e imutável no qual todas as oscilações metabólicas celulares cessam por completo.',
            'A manutenção de condições internas relativamente estáveis e dinâmicas no líquido extracelular através de mecanismos regulatórios integrados.',
            'A capacidade autônoma do sistema nervoso central de controlar a temperatura corporal sem qualquer participação do sistema endócrino.',
            'A equalização contínua e absoluta entre as pressões osmóticas dos compartimentos corporais e a pressão barométrica do meio ambiente.'
          ],
          correctIndex: 1,
          explanation: 'Homeostase não é um estado estático ou rígido, mas sim uma estabilidade dinâmica do meio interno (líquido extracelular), que oscila dentro de limites fisiológicos compatíveis com a vida celular.',
          whyWrong: [
            'Homeostase não é estática nem envolve cessação metabólica; é um equilíbrio dinâmico contínuo.',
            'Alternativa correta.',
            'A homeostase envolve múltiplos sistemas integrados (endócrino, renal, cardiovascular), e não o sistema nervoso isoladamente.',
            'A osmolaridade interna não se iguala à pressão barométrica externa; o meio interno é protegido por barreiras seletivas.'
          ],
          tip: 'Lembre-se: meio interno = Líquido Extracelular (LEC), conceito concebido por Claude Bernard e batizado de homeostase por Walter Cannon.'
        },
        {
          id: 'w1_q2',
          type: 'single',
          topic: 'Homeostase e Feedback',
          difficulty: 'medium',
          xp: 15,
          title: 'Como o feedback negativo atua para preservar o equilíbrio fisiológico do meio interno?',
          options: [
            'Amplifica a perturbação inicial em uma variável biológica para acelerar o alcance de um novo limiar funcional metabólico tecidual.',
            'Inibe permanentemente os efetores periféricos assim que uma oscilação é registrada, cessando a resposta adaptativa subsequente.',
            'Detecta uma alteração em uma variável e produz uma resposta que se opõe ao estímulo inicial, trazendo a variável de volta ao ponto de ajuste.',
            'Estimula a liberação contínua e cumulativa de mediadores hormonais até a ocorrência de um evento de ruptura mecânica ou parto.'
          ],
          correctIndex: 2,
          explanation: 'No feedback negativo, a resposta do efetor contrabalança ou inverte a direção da mudança inicial da variável monitorada, retornando-a à sua faixa de referência fisiológica.',
          whyWrong: [
            'Amplificar a perturbação é característico do feedback positivo (desestabilizador temporário), não do negativo.',
            'Não há inibição permanente; os efetores continuam modulando a resposta dinamicamente conforme a variável oscila.',
            'Alternativa correta.',
            'A liberação cumulativa até um desfecho mecânico (como ocitocina no parto) é o exemplo clássico de feedback positivo.'
          ],
          tip: 'Negativo = "Sentido oposto". Se a variável subiu, o mecanismo trabalha para baixar; se desceu, trabalha para subir.'
        },
        {
          id: 'w1_q3',
          type: 'single',
          topic: 'Homeostase e Feedback',
          difficulty: 'medium',
          xp: 20,
          title: 'Quais são os três componentes essenciais de uma alça clássica de controle homeostático e suas respectivas funções?',
          options: [
            'Receptor sensorial (monitora a variável), Centro integrador (compara ao set-point e decide) e Efetor tecidual (executa a resposta corretiva).',
            'Transdutor químico (inicia síntese proteica), Centro autonômico hipotalâmico (amplifica a oscilação) e Efetor sérico (elimina o desvio celular).',
            'Canal iônico de voltagem (mede o gradiente), Neurotransmissor pré-sináptico (compara a voltagem) e Bomba iônica primária (corrige o potencial).',
            'Efetor periférico (mede a alteração ambiental), Ponto de ajuste medular (elimina o estímulo) e Receptor eferente (neutraliza a retroalimentação).'
          ],
          correctIndex: 0,
          explanation: 'Toda alça de controle homeostático depende de: 1) Receptor/sensor que afere a variável; 2) Centro integrador que compara a informação com o set-point; e 3) Efetor que executa a alteração compensatória.',
          whyWrong: [
            'Alternativa correta.',
            'Transdutores e anticorpos são mediadores específicos, não a tríade funcional canônica da alça reflexa.',
            'Canais e bombas são mecanismos biofísicos de transporte membranar, não as etapas organizacionais de uma alça reflexa sistêmica.',
            'Inverte as funções conceituais: o efetor executa a ação corretiva, enquanto o receptor detecta a alteração.'
          ],
          tip: 'A tríade clássica do controle: Sensor -> Centro de Comando/Integrador -> Efetor.'
        },
        {
          id: 'w1_q4',
          type: 'single',
          topic: 'Homeostase e Feedback',
          difficulty: 'hard',
          xp: 20,
          title: 'Em qual das situações clínicas abaixo ocorre um exemplo fisiológico de feedback POSITIVO benéfico?',
          options: [
            'Descarga adrenérgica dos barorreceptores carotídeos elevando a resistência vascular sistêmica durante a hipotensão ortostática aguda.',
            'Sudorese profusa e vasodilatação cutânea mediadas pelo hipotálamo anterior durante o esforço físico intenso para dissipar o calor.',
            'Aumento exponencial das contrações uterinas pela liberação progressiva de ocitocina estimulada pela distensão mecânica cervical no parto.',
            'Supressão da secreção de TSH na adeno-hipófise pelas concentrações plasmáticas elevadas de hormônios tireoidianos livres circulantes.'
          ],
          correctIndex: 2,
          explanation: 'O reflexo de Ferguson no parto é o exemplo clássico de feedback positivo: a descida fetal distende o colo uterino, o que estimula a hipófise posterior a secretar ocitocina, que aumenta as contrações uterinas, gerando ainda mais distensão até o nascimento.',
          whyWrong: [
            'O barorreflexo é um exemplo clássico de feedback negativo, atuando contra a queda pressórica.',
            'A sudorese e vasodilatação térmicas visam retornar a temperatura ao set-point (feedback negativo).',
            'Alternativa correta.',
            'O eixo tireoidiano hipotálamo-hipófise-tireoide é regulado por retroalimentação negativa clássica (feedback negativo).'
          ],
          tip: 'Feedback positivo na fisiologia normal: parto (ocitocina), coagulação sanguínea (cascata da trombina) e fase ascendente do potencial de ação (abertura de canais de Na+).'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 2 (w1_p2): Membrana Plasmática & Transporte Passivo
    // ----------------------------------------------------
    {
      id: 'w1_p2',
      title: 'Membrana & Transporte Passivo',
      topic: 'Membrana e Transporte Passivo',
      level: 2,
      order: 2,
      nextPhaseId: 'w1_p3',
      lesson: {
        title: 'Estrutura da Membrana e Transporte Passivo',
        concept: 'A membrana celular é uma bicamada lipídica anfipática com permeabilidade seletiva. Moléculas pequenas e apolares atravessam livremente, enquanto íons e moléculas polares exigem proteínas carreadoras ou canais.',
        mechanism: 'Transporte Passivo: Ocorre sempre A FAVOR do gradiente de concentração ou eletroquímico, sem gasto direto de energia metabólica (ATP). 1) Difusão Simples: passagem direta pela bicamada lipídica (ex: gases O2 e CO2, esteroides); 2) Difusão Facilitada: passagem mediada por proteínas carreadoras específicas (ex: transportador GLUT de glicose) ou canais iônicos.',
        examPoint: 'Cinética de Saturação: A difusão simples tem taxa linear com o gradiente (não satura). A difusão facilitada atinge uma taxa máxima (Vmax) devido à saturação dos sítios de ligação dos carreadores de membrana.',
        example: 'Entrada de glicose nas hemácias e neurônios via transportadores GLUT-1 e GLUT-3 por difusão facilitada a favor do gradiente plasmático.',
        quickChallenge: 'Qual a diferença essencial entre a cinética da difusão simples e da difusão facilitada quando o gradiente de concentração aumenta indefinidamente?'
      },
      questions: [
        {
          id: 'w1_q5',
          type: 'single',
          topic: 'Membrana e Transporte Passivo',
          difficulty: 'easy',
          xp: 15,
          title: 'Qual das seguintes características define com precisão o transporte passivo através da membrana celular?',
          options: [
            'Ocorre exclusivamente contra o gradiente químico de concentração e requer hidrólise direta de trifosfato de adenosina (ATP).',
            'Ocorre a favor do gradiente eletroquímico ou de concentração, sem consumo de energia metabólica derivada de nucleotídeos celulares.',
            'Depende obrigatoriamente da formação de vesículas de endocitose para englobar macromoléculas hidrofílicas extracelulares.',
            'É mediado exclusivamente por bombas eletrogênicas que transportam cátions divalentes acoplados a carreadores transmembrana.'
          ],
          correctIndex: 1,
          explanation: 'O transporte passivo aproveita a energia potencial do próprio gradiente de concentração ou eletroquímico já existente, movendo o soluto de onde está mais concentrado para onde está menos concentrado, sem hidrólise de ATP.',
          whyWrong: [
            'Movimento contra o gradiente com hidrólise direta de ATP define o transporte ativo primário.',
            'Alternativa correta.',
            'Endocitose é transporte em massa vesicular com gasto expressivo de energia, não transporte passivo.',
            'Bombas eletrogênicas consomem ATP para mover íons contra o gradiente (transporte ativo primário).'
          ],
          tip: 'A favor do gradiente = descida termodinâmica espontânea = transporte passivo (sem gasto de ATP).'
        },
        {
          id: 'w1_q6',
          type: 'single',
          topic: 'Membrana e Transporte Passivo',
          difficulty: 'medium',
          xp: 15,
          title: 'Gases respiratórios como oxigênio (O₂) e dióxido de carbono (CO₂) atravessam a membrana celular por qual mecanismo biofísico?',
          options: [
            'Transporte ativo primário mediado por carreadores transmembranares que hidrolisam ATP citosólico.',
            'Difusão facilitada com cinética de saturação máxima por canais protéicos da família das aquaporinas.',
            'Difusão simples diretamente através da bicamada lipídica hidrofóbica a favor do gradiente de pressão.',
            'Pinocitose contínua regulada por vesículas recobertas por clatrina nas junções comunicantes teciduais.'
          ],
          correctIndex: 2,
          explanation: 'O2 e CO2 são moléculas pequenas, apolares e altamente lipossolúveis, atravessando livremente a bicamada lipídica por difusão simples a favor de seus gradientes de pressão parcial.',
          whyWrong: [
            'Não existem bombas dependentes de ATP para gases na membrana plasmática humana.',
            'Aquaporinas transportam seletivamente moléculas de água (H2O), não gases apolares como O2 e CO2.',
            'Alternativa correta.',
            'Gases não dependem de tráfego vesicular ou pinocitose mediada por clatrina.'
          ],
          tip: 'Moléculas apolares pequenas (O2, CO2, ácidos graxos, anestésicos inalatórios) atravessam a membrana por difusão simples.'
        },
        {
          id: 'w1_q7',
          type: 'single',
          topic: 'Membrana e Transporte Passivo',
          difficulty: 'medium',
          xp: 20,
          title: 'Por que o transporte de glicose mediado por carreadores GLUT atinge uma velocidade máxima (Vmáx) enquanto a difusão de O₂ não apresenta saturação?',
          options: [
            'Porque a glicose intracelular é consumida de imediato pela via glicolítica mitocondrial, parando a difusão.',
            'Porque os carreadores proteicos possuem um número finito de sítios de ligação conformacionais que se saturam em altas concentrações.',
            'Porque a bicamada fosfolipídica polariza negativamente a glicose, impedindo o fluxo estérico quando o gradiente químico aumenta.',
            'Porque o transportador GLUT consome todo o pool energético de ATP citosólico quando as concentrações de monossacarídeos se elevam.'
          ],
          correctIndex: 1,
          explanation: 'A difusão facilitada depende de proteínas carreadoras transmembrana. Como o número de carreadores na membrana é limitado, em concentrações elevadas de soluto todos os sítios ficam ocupados, atingindo-se a saturação (Vmáx). Na difusão simples não há carreadores.',
          whyWrong: [
            'O consumo intracelular de glicose favorece o gradiente de entrada, mas não define a Vmáx do carreador de membrana.',
            'Alternativa correta.',
            'A glicose é uma molécula neutra e não é repelida por cargas elétricas da membrana.',
            'Transportadores GLUT operam por difusão facilitada passiva e NÃO consomem ATP sob nenhuma concentração.'
          ],
          tip: 'Difusão facilitada = carreador proteico = possui especificidade, competição e saturação (Vmáx).'
        },
        {
          id: 'w1_q8',
          type: 'single',
          topic: 'Membrana e Transporte Passivo',
          difficulty: 'hard',
          xp: 20,
          title: 'De acordo com a Lei de Fick para difusão simples através de membranas biológicas, a taxa líquida de difusão de uma substância AUMENTARÁ quando houver:',
          options: [
            'Aumento expressivo da espessura da membrana plasmática e do raio hidrodinâmico das partículas em solução.',
            'Diminuição da área de superfície disponível para troca transmembrana e redução da temperatura do meio.',
            'Aumento da solubilidade lipídica da substância e maior diferença de concentração através da bicamada.',
            'Elevação da viscosidade do solvente extracelular e aumento do peso molecular do soluto em difusão passiva.'
          ],
          correctIndex: 2,
          explanation: 'A Lei de Fick estabelece que o fluxo de difusão é diretamente proporcional à área da membrana, à diferença de concentração e ao coeficiente de partição lipídica, e inversamente proporcional à espessura da membrana.',
          whyWrong: [
            'Maior espessura e maior raio aumentam a resistência e diminuem a taxa líquida de difusão.',
            'Menor área reduz a superfície de troca e reduz a taxa de difusão transmembrana.',
            'Alternativa correta.',
            'Maior viscosidade e maior peso molecular reduzem o coeficiente de difusão (D), lentificando o transporte.'
          ],
          tip: 'Lei de Fick: Difusão = (Área × Gradiente × Solubilidade) ÷ (Espessura × Peso Molecular).'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 3 (w1_p3): Tonicidade, Osmose & Hemácias
    // ----------------------------------------------------
    {
      id: 'w1_p3',
      title: 'Osmose, Tonicidade & Hemácias',
      topic: 'Tonicidade e Osmose',
      level: 3,
      order: 3,
      nextPhaseId: 'w1_p4',
      lesson: {
        title: 'Osmose, Osmolaridade e Tonicidade',
        concept: 'Osmose é o movimento líquido de água através de uma membrana semipermeável, movendo-se da região de menor concentração de soluto (maior potencial hídrico) para a de maior concentração de soluto.',
        mechanism: 'Osmolaridade vs. Tonicidade: A osmolaridade considera o número total de partículas de soluto por litro de solução (mOsm/L). A tonicidade refere-se exclusivamente ao efeito fisiológico da solução sobre o volume celular, dependendo apenas dos solutos NÃO-PENETRANTES (que não atravessam a membrana).',
        examPoint: 'Comportamento Eritrocitário: Em solução isotônica (~290 mOsm/L, ex: NaCl 0,9%), a hemácia mantém o volume; em solução hipotônica (ex: água destilada), a água entra na hemácia por osmose, gerando turgência e lise osmótica (hemólise); em solução hipertônica (ex: NaCl 3%), a água sai da célula, gerando retração e crenação.',
        example: 'Uso clínico de soro fisiológico a 0,9%: É uma solução isotônica em relação ao plasma humano, permitindo expansão volêmica sem induzir edema celular ou hemólise intravascular.',
        quickChallenge: 'Por que uma solução de ureia a 300 mOsm/L é isosmótica, porém hipotônica em relação às hemácias humanas?'
      },
      questions: [
        {
          id: 'w1_q9',
          type: 'single',
          topic: 'Tonicidade e Osmose',
          difficulty: 'easy',
          xp: 15,
          title: 'O que descreve com precisão o fenômeno biofísico da osmose em sistemas biológicos?',
          options: [
            'Movimento ativo de eletrólitos impulsionado pela quebra de fosfatos de alta energia em bombas carreadoras basolaterais.',
            'Movimento passivo de moléculas de água através de uma membrana semipermeável em direção à maior concentração de solutos não penetrantes.',
            'Transporte facilitado de macromoléculas através de canais de sódio voltagem-dependentes durante o potencial de repouso.',
            'Filtração mecânica unidirecional de proteínas plasmáticas contra gradientes hidrostáticos nos capilares teciduais fenestrados.'
          ],
          correctIndex: 1,
          explanation: 'Osmose é a difusão líquida de solvente (água) através de membrana semipermeável impulsionada pela diferença de potencial químico da água (atraída por solutos não permeantes).',
          whyWrong: [
            'Osmose é movimento passivo de solvente (água), não transporte ativo de íons ou quebra de ATP.',
            'Alternativa correta.',
            'Canais de sódio não transportam macromoléculas nem regem o equilíbrio osmótico da água.',
            'Filtração capilar envolve pressão hidrostática e filtração de fluido, o que não define o fenômeno molecular da osmose.'
          ],
          tip: 'A água sempre se move para "diluir" o lado onde os solutos estão mais concentrados.'
        },
        {
          id: 'w1_q10',
          type: 'single',
          topic: 'Tonicidade e Osmose',
          difficulty: 'medium',
          xp: 15,
          title: 'O que acontece com as hemácias quando são colocadas em uma solução HIPERTÔNICA (como NaCl a 3,0%)?',
          options: [
            'Permanecem inalteradas, pois os íons cloreto e sódio penetram livremente pelas aquaporinas e dissipam a pressão osmótica.',
            'Absorvem grande volume de água por osmose, expandem seu citoesqueleto até a ruptura da membrana e sofrem hemólise.',
            'Perdem água para o meio externo por osmose, sofrendo encolhimento morfológico característico denominado crenação celular.',
            'Sintetizam ativamente hemoglobina adicional para elevar a osmolaridade citoplasmática e igualar o gradiente iônico externo.'
          ],
          correctIndex: 2,
          explanation: 'Em meio hipertônico, a concentração externa de solutos não penetrantes é superior à do citosol. A água sai da hemácia a favor do gradiente osmótico, fazendo-a murchar e apresentar aspecto espiculado (crenação).',
          whyWrong: [
            'O NaCl dissocia-se em íons não penetrantes que exercem potente pressão osmótica efetiva, puxando água da célula.',
            'Ganho de água e hemólise ocorrem quando as hemácias são imersas em meio HIPOTÔNICO (ex: água pura).',
            'Alternativa correta.',
            'Eritrócitos humanos maduros são anucleados e desprovidos de ribossomos, sendo incapazes de sintetizar novas proteínas.'
          ],
          tip: 'Hipertônico = a célula perde água e murcha (crenação). Hipotônico = a célula ganha água e estoura (lise).'
        },
        {
          id: 'w1_q11',
          type: 'single',
          topic: 'Tonicidade e Osmose',
          difficulty: 'hard',
          xp: 20,
          title: 'Qual é a diferença fundamental entre osmolaridade e tonicidade na análise de soluções biológicas?',
          options: [
            'A osmolaridade quantifica a pressão de vapor de uma solução, enquanto a tonicidade mede exclusivamente a condutância iônica plasmática.',
            'A osmolaridade considera todos os solutos presentes, enquanto a tonicidade depende exclusivamente da concentração de solutos NÃO-PENETRANTES que afetam o volume celular.',
            'Não existe nenhuma distinção biofísica; ambos os termos são estritamente sinônimos e intercambiáveis na prática médica e laboratorial.',
            'A osmolaridade é uma propriedade exclusiva de fluidos intracelulares e a tonicidade aplica-se exclusivamente a soluções artificiais sintéticas.'
          ],
          correctIndex: 1,
          explanation: 'Solutos penetrantes (como a ureia) atravessam a membrana e igualam suas concentrações intra e extracelulares, não sustentando gradiente osmótico permanente. A tonicidade é definida apenas pelos solutos que não conseguem atravessar a membrana (não penetrantes).',
          whyWrong: [
            'Osmolaridade mede número de partículas osmoticamente ativas por litro, e não pressão de vapor.',
            'Alternativa correta.',
            'Não são sinônimos: uma solução de ureia 300 mOsm/L é isosmótica (mesmo número de partículas), mas hipotônica (provoca lise celular).',
            'Tanto osmolaridade quanto tonicidade são grandezas físico-químicas aplicáveis a quaisquer compartimentos ou soluções.'
          ],
          tip: 'Regra de ouro de Guyton: a tonicidade dita o destino do volume da célula; a osmolaridade apenas conta partículas totais.'
        },
        {
          id: 'w1_q12',
          type: 'single',
          topic: 'Tonicidade e Osmose',
          difficulty: 'hard',
          xp: 20,
          title: 'Um paciente em cetoacidose diabética apresenta glicemia de 600 mg/dL e osmolaridade plasmática de 330 mOsm/kg. Qual é a consequência direta para o volume dos neurônios cerebrais?',
          options: [
            'Edema neuronal agudo e hipertensão intracraniana resultante do influxo passivo descontrolado de glicose livre pelo endotélio.',
            'Desidratação celular neuronal (retração osmótica) decorrente do efluxo de água para o compartimento extracelular hiperosmolar.',
            'Intumescimento celular volumoso provocado pela retenção intracelular imediata de corpos cetônicos osmoticamente ativos.',
            'Nenhuma alteração no volume celular, pois a barreira hematoencefálica isola completamente o encéfalo de gradientes osmóticos.'
          ],
          correctIndex: 1,
          explanation: 'O excesso de glicose no plasma torna o líquido extracelular hipertônico em relação ao meio intracelular. Como a glicose penetra lentamente nas células sem ativação máxima, a água é drenada por osmose para fora dos neurônios, gerando desidratação cerebral.',
          whyWrong: [
            'A hiperosmolaridade plasmática extrai água dos neurônios, causando desidratação e retração, não edema.',
            'Alternativa correta.',
            'O efeito predominante é a perda de água livre pelo gradiente hiperglicêmico do LEC, resultando em desidratação celular.',
            'A barreira hematoencefálica é altamente permeável à água através de aquaporinas (AQP4), respondendo de imediato a gradientes osmóticos.'
          ],
          tip: 'Hiperosmolaridade plasmática drena água das células -> desidratação intracelular (coma hiperosmolar).'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 4 (w1_p4): Transporte Ativo & Bomba Na+/K+
    // ----------------------------------------------------
    {
      id: 'w1_p4',
      title: 'Transporte Ativo & Bomba Na+/K+',
      topic: 'Transporte Ativo e Bomba Na+/K+',
      level: 4,
      order: 4,
      nextPhaseId: 'w1_p5',
      lesson: {
        title: 'Transporte Ativo Primário e Secundário',
        concept: 'Transporte ativo é o movimento de solutos CONTRA seu gradiente de concentração ou eletroquímico, exigindo fornecimento de energia metabólica.',
        mechanism: '1) Transporte Ativo Primário: A energia provém diretamente da hidrólise de ATP pela própria proteína carreadora (ATPase). O exemplo fundamental é a Na+/K+ ATPase, que transporta 3 Na+ para o meio extracelular e 2 K+ para o citosol a cada ATP hidrolisado; 2) Transporte Ativo Secundário: Aproveita a energia potencial do gradiente iônico previamente estabelecido por uma bomba primária (ex: simporte SGLT Na+/glicose no túbulo renal e antiporte Na+/Ca2+ no miocárdio).',
        examPoint: 'Natureza Eletrogênica: Por transportar 3 cargas positivas para fora e apenas 2 para dentro, a bomba Na+/K+ é eletrogênica, gerando uma pequena corrente líquida hiperpolarizante (~ -5 mV) e mantendo os gradientes químicos cruciais para a excitabilidade celular.',
        example: 'Glicosídeos cardíacos (digitálicos como digoxina) inibem a Na+/K+ ATPase no coração, elevando o Na+ intracelular, o que reduz o antiporte Na+/Ca2+ e acumula Ca2+ citosólico, aumentando a força de contração miocárdica (inotropismo positivo).',
        quickChallenge: 'Como a bomba de sódio e potássio garante a viabilidade e previne o intumescimento osmótico de todas as células humanas?'
      },
      questions: [
        {
          id: 'w1_q13',
          type: 'single',
          topic: 'Transporte Ativo e Bomba Na+/K+',
          difficulty: 'easy',
          xp: 15,
          title: 'Qual é a estequiometria, direção do transporte e consumo energético da Na+/K+ ATPase?',
          options: [
            'Transporta 2 Na+ para o meio extracelular e 2 K+ para o meio intracelular com gasto de uma ligação fosfato de GTP.',
            'Transporta 3 Na+ para fora da célula e 2 K+ para dentro da célula acoplado à hidrólise direta de uma molécula de ATP.',
            'Transporta 3 K+ para o meio extracelular e 2 Na+ para o citoplasma celular aproveitando gradientes eletroquímicos espontâneos.',
            'Transporta 1 cálcio para fora e 2 magnésios para dentro da célula utilizando a força próton-motriz mitocondrial residual.'
          ],
          correctIndex: 1,
          explanation: 'A Na+/K+ ATPase bombeia ativamente 3 íons de sódio (Na+) para o líquido extracelular e 2 íons de potássio (K+) para o líquido intracelular por molécula de ATP clivada.',
          whyWrong: [
            'A bomba é estequiometricamente assimétrica (3 Na+ para 2 K+) e consome ATP, não GTP.',
            'Alternativa correta.',
            'O sódio sai (LEC) e o potássio entra (LIC); além disso, requer hidrólise ativa de ATP contra os gradientes.',
            'A Na+/K+ ATPase é altamente seletiva para sódio e potássio, não transportando cálcio ou magnésio.'
          ],
          tip: 'Mnemônico clássico: "Sai Três Na+ (Sódio fora), Entra Dois K+ (Potássio dentro)" - S-O-D-I-O (5 letras, sai) / K (entra).'
        },
        {
          id: 'w1_q14',
          type: 'single',
          topic: 'Transporte Ativo e Bomba Na+/K+',
          difficulty: 'medium',
          xp: 15,
          title: 'O cotransporte de glicose acoplado ao sódio (transportador SGLT-1 no epitélio intestinal) é classificado como:',
          options: [
            'Difusão simples a favor do gradiente hidrofóbico da membrana lipídica sem interação com carreadores proteicos.',
            'Transporte ativo primário que quebra diretamente moléculas de ATP no próprio sítio catalítico do transportador SGLT.',
            'Transporte ativo secundário (simporte), impulsionado pela energia do gradiente eletroquímico de Na+ gerado pela Na+/K+ ATPase.',
            'Osmose facilitada mediada exclusivamente por canais de aquaporina tipo 2 acoplados à via intracelular do AMP cíclico.'
          ],
          correctIndex: 2,
          explanation: 'O SGLT transporta glicose contra seu gradiente de concentração aproveitando a entrada favorável do Na+, cujo gradiente foi gerado previamente pela bomba primária Na+/K+ basolateral.',
          whyWrong: [
            'A glicose está se movendo contra seu gradiente de concentração mediada por proteína carreadora, não por difusão simples.',
            'O SGLT não possui domínio com atividade ATPase intrínseca; a hidrólise de ATP ocorre na Na+/K+ ATPase basolateral.',
            'Alternativa correta.',
            'Aquaporinas são canais seletivos para água e não transportam monossacarídeos acoplados a íons.'
          ],
          tip: 'Transporte Ativo Secundário = "pega carona" no gradiente de sódio gerado pela bomba primária.'
        },
        {
          id: 'w1_q15',
          type: 'single',
          topic: 'Transporte Ativo e Bomba Na+/K+',
          difficulty: 'hard',
          xp: 20,
          title: 'Por que a inibição farmacológica da Na+/K+ ATPase por substâncias como a ouabaína leva ao intumescimento (edema) celular e eventual lise?',
          options: [
            'Porque a célula passa a secretar ativamente lipídios anfipáticos na membrana, aumentando a permeabilidade hídrica desregulada.',
            'Porque o acúmulo intracelular de Na+ eleva a osmolaridade citosólica efetiva, atraindo água por osmose para o interior celular.',
            'Porque os canais de potássio se fecham de forma irreversível, impedindo o efluxo fisiológico de nucleotídeos de trifosfato.',
            'Porque o pH extracelular sofre alcalinização severa que dissolve enzimaticamente a parede de peptidoglicano da célula humana.'
          ],
          correctIndex: 1,
          explanation: 'A bomba Na+/K+ mantém o volume celular ao ejetar soluto osmoticamente ativo (3 Na+ saem para 2 K+ que entram). Se a bomba parar, o Na+ se acumula no interior da célula, atraindo água por osmose e levando ao inchaço citoplasmático.',
          whyWrong: [
            'A inibição da bomba não induz secreção de lipídios de membrana.',
            'Alternativa correta.',
            'O ATP é um intermediário metabólico citoplasmático e não é ejetado pelos canais de potássio.',
            'Células animais humanas não possuem parede celular de peptidoglicano (estrutura exclusiva de bactérias).'
          ],
          tip: 'Função vital da Na+/K+ ATPase: regulação do volume celular osmótico e manutenção dos gradientes de excitabilidade.'
        },
        {
          id: 'w1_q16',
          type: 'single',
          topic: 'Transporte Ativo e Bomba Na+/K+',
          difficulty: 'hard',
          xp: 25,
          title: 'Como a digoxina (fármaco inotrópico positivo) aumenta a força contrátil miocárdica segundo os mecanismos de transporte da membrana?',
          options: [
            'Ativa constitutivamente a SERCA2a no retículo sarcoplasmático, acelerando a captação de cálcio e prolongando a diástole ventricular.',
            'Inibe a Na+/K+ ATPase sarcolemar, elevando o Na+ citosólico e dissipando o gradiente que movimenta o antiporte Na+/Ca2+, acumulando Ca2+.',
            'Bloqueia seletivamente os canais de cálcio tipo L nos túbulos T, impedindo a corrente despolarizante e aumentando o tônus basal.',
            'Fosforila diretamente as cabeças pesadas de miosina cardíaca sem alterar as concentrações iônicas de cálcio ou sódio no miócito.'
          ],
          correctIndex: 1,
          explanation: 'Ao inibir a Na+/K+ ATPase no sarcolema, o gradiente de sódio diminui. O trocador secundário 3Na+/Ca2+ (que expulsava cálcio usando o gradiente de sódio) reduz sua atividade. Mais Ca2+ fica disponível para ser captado pelo retículo e disparado na sístole, aumentando a contratilidade.',
          whyWrong: [
            'A digoxina não estimula a SERCA2a; seu efeito primordial é mediado pelo acúmulo de cálcio no citosol.',
            'Alternativa correta.',
            'Bloquear canais de cálcio tipo L reduziria a entrada de cálcio e diminuiria a força contrátil (efeito inotrópico negativo).',
            'O fármaco não atua diretamente sobre as cabeças de miosina; seu efeito é estritamente iônico e dependente do cálcio.'
          ],
          tip: 'Mecanismo farmacológico clássico em cardiologia: Digoxina -> inibe Na+/K+ ATPase -> sobe Na+ intracelular -> diminui saída de Ca2+ pelo trocador Na+/Ca2+ -> sobe Ca2+ citosólico -> maior força de contração.'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 5 (w1_p5): Potenciais Bioelétricos & Canais Iônicos
    // ----------------------------------------------------
    {
      id: 'w1_p5',
      title: 'Potenciais Bioelétricos & Canais Iônicos',
      topic: 'Potenciais Bioelétricos e Canais Iônicos',
      level: 5,
      order: 5,
      nextPhaseId: 'w1_p6',
      lesson: {
        title: 'Bases Físicas do Potencial de Membrana',
        concept: 'O potencial de repouso da membrana (geralmente entre -70 mV e -90 mV nas células excitáveis) decorre da permeabilidade seletiva aos íons e dos gradientes de concentração mantidos pela Na+/K+ ATPase.',
        mechanism: 'Equação de Nernst e Potencial de Equilíbrio: O potencial de Nernst calcula o potencial elétrico que equilibra exatamente a força química gerada pela diferença de concentração de um único íon através da membrana. Para o potássio (K+), o potencial de equilíbrio (Ek) é de cerca de -90 mV. Para o sódio (Na+), o potencial de equilíbrio (Ena) é de cerca de +60 mV.',
        examPoint: 'Equação de Goldman-Hodgkin-Katz (GHK): O potencial de repouso global é determinado pela contribuição ponderada de todos os íons permeantes. Como em repouso a membrana é 25 a 30 vezes mais permeável ao K+ (devido aos canais de vazamento constitutivos K2P) do que ao Na+, o potencial de repouso (-70 mV a -85 mV) fica muito próximo do potencial de equilíbrio do K+.',
        example: 'Hipercalemia (aumento de K+ no plasma extracelular): Reduz o gradiente de concentração de K+ para fora da célula, tornando o potencial de repouso menos negativo (despolarizado), o que inicialmente aumenta a excitabilidade, mas a longo prazo inativa canais de Na+ e pode causar arritmias fatais e parada cardíaca.',
        quickChallenge: 'O que ocorreria com o potencial de repouso de um neurônio se a permeabilidade de repouso ao sódio aumentasse subitamente para se igualar à do potássio?'
      },
      questions: [
        {
          id: 'w1_q17',
          type: 'single',
          topic: 'Potenciais Bioelétricos e Canais Iônicos',
          difficulty: 'medium',
          xp: 15,
          title: 'Por que o potencial de repouso de uma célula neuronal típica (-70 mV) é muito mais próximo do potencial de equilíbrio do K⁺ (-90 mV) do que do Na⁺ (+60 mV)?',
          options: [
            'Porque em repouso a condutância e permeabilidade da membrana ao K⁺ via canais de vazamento é cerca de 25 a 30 vezes maior que ao Na⁺.',
            'Porque o sódio extracelular é consumido integralmente pelas mitocôndrias axoplasmáticas para sintetizar trifosfato de adenosina.',
            'Porque os íons potássio comportam-se como partículas desprovidas de carga elétrica líquida no solvente aquoso intracelular.',
            'Porque a membrana lipídica é totalmente impermeável a qualquer cátion monovalente até a deflagração do estímulo sináptico.'
          ],
          correctIndex: 0,
          explanation: 'De acordo com a equação de Goldman-Hodgkin-Katz, o íon com maior permeabilidade relativa dita o potencial de membrana. A abundância de canais de vazamento de K+ abertos em repouso puxa o potencial elétrico para próximo do equilíbrio do potássio.',
          whyWrong: [
            'Alternativa correta.',
            'O sódio não é consumido na síntese de ATP; seu gradiente químico é sustentado ativamente pela Na+/K+ ATPase.',
            'O potássio é um cátion monovalente (K+) com carga positiva unitária essencial para os potenciais bioelétricos.',
            'A membrana possui permeabilidade seletiva expressiva em repouso graças aos canais de vazamento constitutivos.'
          ],
          tip: 'Equação GHK: quem tem maior permeabilidade em repouso dita o potencial elétrico (o Potássio).'
        },
        {
          id: 'w1_q18',
          type: 'single',
          topic: 'Potenciais Bioelétricos e Canais Iônicos',
          difficulty: 'medium',
          xp: 20,
          title: 'Se a concentração de potássio no líquido extracelular (LEC) aumentar expressivamente (hipercalemia severa), o que ocorrerá com o potencial de repouso da membrana?',
          options: [
            'Tornar-se-á significativamente mais negativo (hiperpolarização da membrana por aumento da força próton-motriz).',
            'Tornar-se-á menos negativo (despolarização parcial da membrana por redução do gradiente químico de efluxo do K⁺).',
            'Permanecerá rigorosamente inalterado, pois apenas a concentração intracelular de potássio influencia a equação de Nernst.',
            'Deslocar-se-á instantaneamente para valores altamente positivos idênticos ao potencial de equilíbrio do cálcio (+130 mV).'
          ],
          correctIndex: 1,
          explanation: 'A equação de Nernst para o K+ depende da razão [K+]ext / [K+]int. Se [K+]ext aumenta, o gradiente de concentração para saída de K+ diminui. Menos K+ sai, e o interior celular torna-se menos negativo (despolarização de repouso).',
          whyWrong: [
            'Hiperpolarização (membrana mais negativa) ocorreria se o potássio extracelular diminuísse (hipocalemia).',
            'Alternativa correta.',
            'A concentração externa de K+ é uma variável direta no numerador da equação de Nernst, alterando imediatamente o potencial.',
            'O potencial de repouso não assume o valor do equilíbrio do cálcio porque a permeabilidade ao cálcio em repouso é mínima.'
          ],
          tip: 'Hipercalemia = potencial de repouso despolariza (fica menos negativo), o que no coração pode inativar canais de sódio e causar assistolia.'
        },
        {
          id: 'w1_q19',
          type: 'single',
          topic: 'Potenciais Bioelétricos e Canais Iônicos',
          difficulty: 'hard',
          xp: 20,
          title: 'Qual é a função fisiológica primordial dos canais iônicos de vazamento de potássio (leak channels / família K2P) na membrana neuronal?',
          options: [
            'Bombear ativamente cátions sódio contra o gradiente eletroquímico acoplando a quebra enzimática de trifosfato de guanosina.',
            'Assegurar a permeabilidade seletiva basal ao K⁺ em repouso, sendo o principal determinante da negatividade interna da membrana.',
            'Desencadear a fusão vesicular e liberação quântica de neurotransmissores por descarregar cálcio armazenado nos lisossomos.',
            'Bloquear completamente o fluxo de água livre através das aquaporinas para evitar qualquer oscilação no volume celular.'
          ],
          correctIndex: 1,
          explanation: 'Os canais de vazamento de K+ (família K2P) permanecem constitutivamente abertos no repouso celular, permitindo o efluxo contínuo de K+ a favor do gradiente químico, estabelecendo a eletronegatividade interna.',
          whyWrong: [
            'Canais de vazamento são transportadores passivos e não realizam hidrólise de nucleotídeos de energia.',
            'Alternativa correta.',
            'A fusão de vesículas sinápticas depende do influxo de cálcio via canais de Ca2+ voltagem-dependentes, não de canais K2P.',
            'Aquaporinas conduzem água independentemente da atividade dos canais de potássio de vazamento.'
          ],
          tip: 'Canais de vazamento = sempre abertos em repouso = conferem a permeabilidade basal ao potássio.'
        },
        {
          id: 'w1_q20',
          type: 'single',
          topic: 'Potenciais Bioelétricos e Canais Iônicos',
          difficulty: 'hard',
          xp: 25,
          title: 'O que estabelece o Conceito de Potencial de Equilíbrio de Nernst para uma espécie iônica permeável?',
          options: [
            'É a voltagem transmembrana na qual o gradiente elétrico se iguala em magnitude e se opõe ao gradiente químico de concentração.',
            'É o limiar de pressão hidrostática máxima atingido pelo compartimento intravascular durante a sístole isovolumétrica ventricular.',
            'É o momento biofísico crítico em que a bicamada fosfolipídica sofre lise mecânica por intumescimento osmótico descompensado.',
            'É a temperatura corporal específica na qual as proteínas integrais de transporte transmembrana sofrem desnaturação térmica total.'
          ],
          correctIndex: 0,
          explanation: 'No potencial de Nernst, a tendência do íon de difundir a favor de seu gradiente químico é perfeitamente balanceada pela força elétrica que o repele, resultando em fluxo iônico líquido igual a zero através da membrana.',
          whyWrong: [
            'Alternativa correta.',
            'O potencial de Nernst é uma propriedade eletroquímica celular transmembrana, não uma grandeza macrovascular hemodinâmica.',
            'O equilíbrio de Nernst trata do fluxo de íons e potenciais elétricos, não da tensão de ruptura osmótica da membrana.',
            'A equação de Nernst quantifica equilíbrios bioelétricos termodinâmicos, não limites de estabilidade térmica de proteínas.'
          ],
          tip: 'Equilíbrio de Nernst: Força Química = Força Elétrica. Fluxo líquido de íons = 0.'
        }
      ]
    },

    // ----------------------------------------------------
    // NÍVEL 6 (w1_p6): Potencial de Ação & Período Refratário
    // ----------------------------------------------------
    {
      id: 'w1_p6',
      title: 'Potencial de Ação & Período Refratário',
      topic: 'Potencial de Ação e Período Refratário',
      level: 6,
      order: 6,
      nextPhaseId: 'w2_p1',
      lesson: {
        title: 'Geração e Propagação do Potencial de Ação',
        concept: 'O potencial de ação (PA) é uma variação rápida, regenerativa e do tipo "tudo-ou-nada" na voltagem da membrana, propagada ao longo de axônios e fibras musculares sem perda de amplitude.',
        mechanism: 'Fases Biofísicas: 1) Estímulo Limiar (~ -55 mV): Atinge o limiar de abertura dos canais de Na+ dependentes de voltagem (Nav); 2) Despolarização Rápida: Influxo explosivo de Na+ (alça de feedback positivo de Hodgkin) desloca o potencial até +30 mV; 3) Repolarização: Os canais de Na+ fecham suas comportas de inativação (inativação dependente de tempo e voltagem) e os canais de K+ dependentes de voltagem se abrem lentamente, gerando efluxo de K+ que restaura a negatividade; 4) Hiperpolarização pós-potencial: O fechamento lento dos canais de K+ leva o potencial temporariamente próximo a -90 mV.',
        examPoint: 'Período Refratário: 1) Absoluto: Nenhum estímulo, por mais intenso que seja, pode deflagrar novo PA, pois os canais de Na+ estão inativados. Isso assegura a propagação unidirecional do impulso; 2) Relativo: Um estímulo supra-limiar pode disparar novo PA, pois alguns canais de Na+ já saíram do estado inativado, mas os canais de K+ ainda abertos exigem maior corrente despolarizante.',
        example: 'Condução Saltatória: Em fibras mielinizadas, os canais de Na+ e K+ estão concentrados nos Nódulos de Ranvier. O potencial de ação "salta" de um nódulo a outro, aumentando a velocidade de condução em até 50 vezes (até 120 m/s) com menor gasto energético.',
        quickChallenge: 'Por que a lidocaína (anestésico local) impede a sensação dolorosa sem alterar a síntese de proteínas neuronais?'
      },
      questions: [
        {
          id: 'w1_q21',
          type: 'single',
          topic: 'Potencial de Ação e Período Refratário',
          difficulty: 'medium',
          xp: 20,
          title: 'Qual evento biofísico é diretamente responsável pela fase ascendente rápida (despolarização) do potencial de ação neuronal?',
          options: [
            'Efluxo maciço e acelerado de íons potássio através dos canais de vazamento constitutivos da membrana axônica.',
            'Abertura rápida e síncrona de canais de Na⁺ voltagem-dependentes promovendo um influxo regenerativo de íons sódio.',
            'Inibição completa da atividade enzimática da Na+/K+ ATPase desencadeada pelo estímulo elétrico pré-sináptico.',
            'Influxo de ânions cloreto (Cl⁻) atraídos pelas cargas positivas acumuladas nas histonas do núcleo celular neuronal.'
          ],
          correctIndex: 1,
          explanation: 'Ao atingir o potencial limiar (~ -55 mV), os canais de Na+ dependentes de voltagem abrem suas comportas de ativação, e o influxo favorável de Na+ (atraído por gradiente químico e elétrico) despolariza a membrana até valores positivos (+30 mV).',
          whyWrong: [
            'Efluxo de potássio remove cargas positivas e causa repolarização (retorno à negatividade), não despolarização.',
            'Alternativa correta.',
            'A bomba Na+/K+ permanece em funcionamento, mas a corrente despolarizante é mediada por canais de sódio voltagem-dependentes.',
            'Entrada de ânions cloreto carrega cargas negativas para o interior celular, gerando hiperpolarização inibitória.'
          ],
          tip: 'Despolarização = entrada maciça de cargas positivas de Na+.'
        },
        {
          id: 'w1_q22',
          type: 'single',
          topic: 'Potencial de Ação e Período Refratário',
          difficulty: 'hard',
          xp: 20,
          title: 'O Período Refratário Absoluto em um axônio neuronal decorre fundamentalmente de qual evento biofísico molecular?',
          options: [
            'Depleção aguda e esgotamento integral de todo o pool de ATP e fosfocreatina disponíveis no terminal citoplasmático.',
            'Inativação dos canais de Na⁺ voltagem-dependentes pelo fechamento de suas comportas de inativação sensíveis à voltagem.',
            'Fechamento mecânico irreversível dos canais de potássio voltagem-dependentes impedindo a redistribuição de cargas elétricas.',
            'Ruptura eletrolítica transitória da bainha de mielina com dispersão lateral descontrolada das linhas de campo elétrico.'
          ],
          correctIndex: 1,
          explanation: 'Durante o período refratário absoluto, os canais de Na+ estão inativados. Enquanto a membrana não se repolarizar até valores próximos ao repouso, as comportas de inativação não se reabrem, impossibilitando qualquer novo disparo independente da força do estímulo.',
          whyWrong: [
            'O período refratário absoluto não depende da depleção de ATP, mas da conformação estrutural das comportas de inativação dos canais iônicos.',
            'Alternativa correta.',
            'Os canais de potássio estão abertos durante a repolarização e não impedem a repolarização; o fator crítico é a inativação do sódio.',
            'A bainha de mielina mantém sua integridade estrutural perfeitamente preservada durante o ciclo de excitação neuronal.'
          ],
          tip: 'Período Refratário Absoluto = canais de Na+ inativados. Garante que o impulso siga apenas para a frente!'
        },
        {
          id: 'w1_q23',
          type: 'order',
          topic: 'Potencial de Ação e Período Refratário',
          difficulty: 'hard',
          xp: 25,
          title: 'Ordene cronologicamente as etapas do potencial de ação neuronal típico:',
          examPrompt: `
            <p style="font-weight: 700; margin-bottom: 8px;">Considere as etapas biofísicas de um potencial de ação neuronal clássico:</p>
            <ol style="padding-left: 20px; line-height: 1.6; margin-bottom: 12px;">
              <li>Estímulo despolarizante atinge o potencial limiar de disparo (~ -55 mV).</li>
              <li>Abertura rápida de canais de Na+ voltagem-dependentes com influxo iônico explosivo (despolarização).</li>
              <li>Inativação dos canais de Na+ e abertura lenta de canais de K+ voltagem-dependentes.</li>
              <li>Efluxo acelerado de íons K+ restaurando o interior negativo da membrana (repolarização).</li>
              <li>Hiperpolarização pós-potencial transitória seguida de restauração do potencial de repouso (-70 mV).</li>
            </ol>
            <p style="font-weight: 700;">A sequência cronológica correta dos eventos bioelétricos é:</p>
          `,
          options: [
            '1 → 2 → 3 → 4 → 5',
            '2 → 1 → 4 → 3 → 5',
            '1 → 3 → 2 → 5 → 4',
            '3 → 2 → 1 → 4 → 5'
          ],
          correctIndex: 0,
          steps: [
            'Estímulo despolarizante atinge o potencial limiar de disparo (~ -55 mV)',
            'Abertura rápida de canais de Na+ voltagem-dependentes com influxo iônico explosivo (despolarização)',
            'Inativação dos canais de Na+ e abertura lenta de canais de K+ voltagem-dependentes',
            'Efluxo acelerado de íons K+ restaurando o interior negativo da membrana (repolarização)',
            'Hiperpolarização pós-potencial transitória seguida de restauração do potencial de repouso (-70 mV)'
          ],
          explanation: 'O potencial de ação segue rigorosamente a sequência: despolarização limiar -> ativação de Na+ -> pico com inativação de Na+ e ativação de K+ -> efluxo de K+ (repolarização) -> hiperpolarização tardia.',
          whyWrong: [
            'Alternativa correta com a ordem biológica sequencial normal.',
            'A despolarização por Na+ não ocorre antes do estímulo atingir o potencial limiar.',
            'A inativação de Na+ ocorre no pico e não antes da despolarização.',
            'A abertura de canais de K+ ocorre tardiamente, e não no início do potencial de ação.'
          ],
          tip: 'Lembre-se: o sódio abre primeiro e entra rápido (despolariza); o potássio abre depois e sai (repolariza).'
        },
        {
          id: 'w1_q24',
          type: 'single',
          topic: 'Potencial de Ação e Período Refratário',
          difficulty: 'hard',
          xp: 25,
          title: 'Qual mecanismo biofísico explica a elevada velocidade de condução observada nos axônios mielinizados (condução saltatória)?',
          options: [
            'A mielina atua como isolante de alta resistência e baixa capacitância, forçando a corrente a despolarizar apenas os Nódulos de Ranvier.',
            'A mielina promove a abertura tônica de canais de cloreto ao longo dos internódulos, acelerando a propagação eletrotônica da corrente axial.',
            'A bainha mielínica sintetiza canais de sódio voltagem-dependentes distribuídos uniformemente em toda a extensão internodal da fibra.',
            'A condução saltatória decorre da elevação abrupta da capacitância membranar internodal, retendo cargas elétricas até o botão terminal.'
          ],
          correctIndex: 0,
          explanation: 'A bainha de mielina reduz drasticamente a capacitância de membrana e aumenta a resistência transmembrana. As correntes elétricas locais fluem sem se dissipar pelo meio extracelular até o próximo Nódulo de Ranvier, onde estão agrupados os canais Nav, gerando condução saltatória ultrarrápida.',
          whyWrong: [
            'Alternativa correta.',
            'Abertura de canais de cloreto hiperpolarizaria a membrana e extinguiria o impulso nervoso.',
            'Os canais de sódio Nav não estão espalhados nos internódulos, mas densamente agregados nos Nódulos de Ranvier.',
            'A mielina DIMINUI a capacitância de membrana (não a eleva); capacitância reduzida permite que a voltagem mude muito mais rapidamente.'
          ],
          tip: 'Mielina = isolante elétrico (alta resistência, baixa capacitância) -> corrente salta de nódulo em nódulo de Ranvier.'
        }
      ]
    }
  ]
};

const output = `// World 1: Homeostase e Fisiologia Celular (6 Níveis / Fases)
// Total de 24 questões completas com gabarito, feedback pedagógico e suporte a embaralhamento

const WORLD_1_DATA = ${JSON.stringify(world1, null, 2)};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.WORLD_1_DATA = WORLD_1_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORLD_1_DATA };
}
`;

fs.writeFileSync('js/data/world1_celular.js', output, 'utf8');
console.log('✓ world1_celular.js gerado com sucesso!');
