# FisioDengo — Jogo Web Educacional de Fisiologia Humana

Um jogo web educacional completo, progressivo e com rigor acadêmico para estudo de **Fisiologia Humana**, inspirado na dinâmica de plataformas como Duolingo, mas com identidade visual médica profissional, ausência total de emojis (ícones vetoriais SVG de alta precisão) e foco na compreensão profunda dos mecanismos ("ensinar primeiro, testar depois").

---

## Como Executar o Jogo

Existem três formas simples de abrir o jogo:

1. **Dois cliques no arquivo `iniciar_jogo.bat`** (Recomendado): inicia o servidor local e abre o navegador automaticamente na porta 8000.
2. **Abrir diretamente o arquivo `index.html`** no seu navegador favorito (Google Chrome, Edge, Firefox, etc.).
3. **No VS Code**: clique com o botão direito em `index.html` e selecione *Open with Live Server*.

---

## Estrutura Curricular dos 5 Mundos

### Mundo 1 — Homeostase e Fisiologia Celular
- **Homeostase e Meio Interno**: alça de controle (sensor, centro integrador e efetor), feedback negativo vs. positivo.
- **Membrana e Transporte Passivo**: permeabilidade seletiva, difusão simples, difusão facilitada (cinética de saturação $V_{max}$) e Lei de Fick.
- **Osmose, Tonicidade e Hemácias**: soluções hipotônicas (lise osmótica/hemólise), isotônicas e hipertônicas (crenação).
- **Transporte Ativo e Bomba $Na^+/K^+$**: transporte ativo primário vs. secundário (simporte glicose/Na+), estequiometria 3 $Na^+$ para fora / 2 $K^+$ para dentro.
- **Potenciais Bioelétricos**: potencial de repouso (-70 mV, permeabilidade do $K^+$), potencial de ação (despolarização por $Na^+$, repolarização por $K^+$, hiperpolarização e períodos refratários).

### Mundo 2 — Sangue e Hemostasia
- **Composição do Sangue e Plasma**: fração líquida, proteínas (albumina e pressão oncótica/Starling), eletrólitos e hematócrito.
- **Eritrócitos e Hemoglobina**: formato bicôncavo, átomo de ferro ($Fe^{2+}$) no grupo heme, ligação cooperativa do $O_2$ e eritropoiese renal via EPO.
- **Leucócitos e Plaquetas**: defesa imune e fragmentos megacariocíticos.
- **Hemostasia e Coagulação**: vasoconstrição imediata, tampão plaquetário primário e coagulação secundária com trombina e malha de fibrina insolúvel.

### Mundo 3 — Fluxo Sanguíneo e Sistema Cardiovascular
- **Hemodinâmica e Lei de Poiseuille**: relação entre fluxo, gradiente de pressão ($\Delta P$) e resistência ($R \propto 1/r^4$ — o raio elevado à 4ª potência).
- **Sistema de Condução Cardíaca**: nó SA, tratos atriais, retardo fisiológico no nó AV (~0,10 s para enchimento ventricular), feixe de His e fibras de Purkinje.
- **Ciclo Cardíaco e Valvas**: contração isovolumétrica, ejeção, relaxamento isovolumétrico e enchimento, com sincronia das valvas AV e semilunares e bulhas cardíacas (B1 e B2).
- **Débito Cardíaco e Barorreflexo**: fórmulas $DC = FC \times VS$ e $PA = DC \times RVP$. Resposta simpático-vagal rápida do seio carotídeo e arco aórtico à queda de pressão.

### Mundo 4 — Sistema Respiratório
- **Mecânica Ventilatória e Lei de Boyle**: músculos da inspiração e expiração em repouso e forçada, gradiente de pressão alveolar.
- **Pressões Pulmonares e Surfactante**: pressão intrapleural subatmosférica (-5 a -8 $cmH_2O$), complacência vs. elastância, pneumócitos tipo II e prevenção de atelectasias pela Lei de Laplace.
- **Trocas Gasosas (Hematose)**: difusão alvéolo-capilar, gradientes de $P_{O2}$ (104 vs 40 mmHg) e $P_{CO2}$ (45 vs 40 mmHg), solubilidade dos gases.
- **Transporte de Gases e Relação V/Q**: 98,5% do $O_2$ ligado à hemoglobina; 70% do $CO_2$ como bicarbonato ($HCO_3^-$). Relação V/Q normal (0,8), espaço morto ($V/Q \rightarrow \infty$) e shunt ($V/Q \rightarrow 0$).

### Mundo 5 — Desafio Integrado / Casos Clínico-Fisiológicos
- Integração de múltiplos sistemas: Célula $\rightarrow$ Sangue $\rightarrow$ Hemodinâmica $\rightarrow$ Coração $\rightarrow$ Pulmão $\rightarrow$ Tecidos.
- Adaptações ao exercício físico aeróbio e Efeito Bohr (desvio para a direita com temperatura, $CO_2$ e $H^+$).
- Choque hipovolêmico e ativação compensatória adrenérgica e neuro-humoral.
- DPOC descompensada com hipoxemia, policitemia secundária por EPO, aumento da viscosidade sanguínea e sobrecarga do ventrículo direito.

---

## Funcionalidades Principais do Jogo

1. **Mini-Aulas Estruturadas**: Toda fase inicia com 5 seções didáticas: *Conceito*, *Como Funciona*, *Importante para a Prova*, *Exemplo Fisiológico* e *Desafio Rápido*.
2. **Diversidade de Questões**:
   - Múltipla Escolha com 4 alternativas plausíveis
   - Verdadeiro ou Falso justificado
   - Relacione os Conceitos (matching interativo de colunas)
   - Ordene as Etapas (reordenação sequencial)
   - Associação Causa $\rightarrow$ Consequência
   - Casos Clínico-Fisiológicos integrados
3. **Feedback Imediato e Pedagógico**:
   - Em acertos: "CORRETO", conceito-chave e ganho de XP.
   - Em erros: "QUASE", indicação do gabarito, explicação completa do conceito, por que a opção escolhida estava incorreta e a "Dica para a Prova".
   - Detecção de erros repetidos acionando aviso de revisão necessária.
4. **Sistema de Vidas e XP**:
   - 3 vidas (corações) por sessão. Ao zerar as vidas, uma tela de recuperação diagnostica os tópicos fracos e permite reiniciar com vidas recarregadas.
   - Progressão de Patente: *Iniciante* $\rightarrow$ *Aprendiz* $\rightarrow$ *Estudante* $\rightarrow$ *Avançado* $\rightarrow$ *Mestre da Fisiologia*.
5. **Modo Revisão Inteligente**: Analisa o histórico de erros e os tópicos com menor percentual de domínio gerando treinos focados com repetição espaçada.
6. **Modo Simulado Oficial**: 20 questões mistas de toda a matéria com cronômetro em tempo real, navegação livre sem feedback imediato e geração de boletim analítico com nota de 0 a 10 e aproveitamento por assunto.
7. **Painel de Domínio por Assunto**: Acompanhamento percentual dinâmico do nível de domínio em cada disciplina de fisiologia.
8. **Persistência Completa**: Todo o progresso, XP, vidas, histórico de simulados e erros são salvos localmente via `localStorage`.
9. **Fontes Reais e Aprofundamento Acadêmico**:
   - **Guyton & Hall — Textbook of Medical Physiology (15ª ed., Elsevier)** como Fonte Principal, com links oficiais para Elsevier Shop e Evolve.
   - **OpenStax — Anatomy and Physiology 2e (Rice University)** como Fonte Aberta universitária.
   - **Merck Manual (MSD Corp.)** como Referência Médica Complementar.
   - Botão **"Pesquisar no PubMed"** para cada assunto da aula e da bibliografia geral.
   - Mapeamento capítulo a capítulo para cada um dos tópicos dos 5 mundos.
   - Seção de fontes de aprofundamento na revisão questão a questão do Simulado.
   - Página dedicada "Fontes & Referências" no menu principal e cartões de fontes ao final de cada mundo.
