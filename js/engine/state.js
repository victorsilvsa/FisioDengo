// Game State & Persistence Manager
const STORAGE_KEY = 'fisiodengo_save_v1';
const LEGACY_STORAGE_KEY = 'fisioquest_save_v1';

const RANKS = [
  { level: 1, name: 'Iniciante', minXp: 0 },
  { level: 2, name: 'Aprendiz', minXp: 300 },
  { level: 3, name: 'Estudante Clínico', minXp: 900 },
  { level: 4, name: 'Monitor de Fisiologia', minXp: 2000 },
  { level: 5, name: 'Pesquisador Fisiológico', minXp: 3800 },
  { level: 6, name: 'Especialista em Mecanismos', minXp: 6000 },
  { level: 7, name: 'Mestre da Fisiologia Médica', minXp: 9000 }
];

const INITIAL_DOMAINS = {
  // Mundo 1: Celular e Homeostase
  'Homeostase e Feedback': 0,
  'Membrana e Transporte Passivo': 0,
  'Tonicidade e Osmose': 0,
  'Transporte Ativo e Bomba Na+/K+': 0,
  'Potenciais Bioelétricos e Canais Iônicos': 0,
  'Potencial de Ação e Período Refratário': 0,

  // Mundo 2: Sangue e Hemostasia
  'Composição do Sangue e Pressão Oncótica': 0,
  'Eritrócitos, Hematócrito e Metabolismo do Ferro': 0,
  'Hemoglobina e Transporte de O2': 0,
  'Hemostasia Primária e Plaquetas': 0,
  'Cascata de Coagulação e Fibrinólise': 0,
  'Grupos Sanguíneos e Imunidade': 0,

  // Mundo 3: Hemodinâmica e Cardiovascular
  'Hemodinâmica e Resistência Vascular': 0,
  'Condução Cardíaca e Atraso AV': 0,
  'Eletrocardiograma (ECG)': 0,
  'Ciclo Cardíaco e Valvas': 0,
  'Débito Cardíaco e Frank-Starling': 0,
  'Barorreflexo e Regulação da Pressão': 0,

  // Mundo 4: Sistema Respiratório
  'Mecânica Ventilatória e Lei de Boyle': 0,
  'Pressão Intrapleural e Surfactante': 0,
  'Espirometria e Volumes Pulmonares': 0,
  'Trocas Gasosas e Difusão': 0,
  'Transporte de Gases Sanguíneos': 0,
  'Relação V/Q e Controle da Respiração': 0,

  // Mundo 5: Renal, Ácido-Base e Casos Integrados
  'Filtração Glomerular e TFG': 0,
  'Reabsorção e Secreção Tubular': 0,
  'Mecanismo de Contracorrente e ADH': 0,
  'Equilíbrio Ácido-Base Fisiológico': 0,
  'Fisiologia Integrada do Exercício': 0,
  'Choque Circulatório e Desafios Extremos': 0
};

class GameStateManager {
  constructor() {
    this.data = this.load();
    this.checkDailyStreak();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Merge missing domains if any
        parsed.topicDomain = { ...INITIAL_DOMAINS, ...(parsed.topicDomain || {}) };
        return parsed;
      }
    } catch (e) {
      console.warn('Could not load saved state:', e);
    }

    return {
      xp: 0,
      lives: 3,
      maxLives: 3,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      unlockedNodes: ['w1_p1'],
      completedNodes: [],
      currentWorldIndex: 0,
      topicDomain: { ...INITIAL_DOMAINS },
      mistakes: [], // { questionId, topic, timestamp, failCount }
      answeredCount: 0,
      correctCount: 0,
      examHistory: []
    };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      this.notifyListeners();
    } catch (e) {
      console.error('Could not save state:', e);
    }
  }

  checkDailyStreak() {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = this.data.lastActiveDate;

    if (!lastDate) {
      this.data.lastActiveDate = today;
      this.data.streak = 1;
      this.save();
      return;
    }

    if (lastDate !== today) {
      const last = new Date(lastDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        this.data.streak += 1;
      } else if (diffDays > 1) {
        this.data.streak = 1;
      }
      this.data.lastActiveDate = today;
      this.save();
    }
  }

  getPlayerRank() {
    const xp = this.data.xp;
    let current = RANKS[0];
    let next = RANKS[1];

    for (let i = 0; i < RANKS.length; i++) {
      if (xp >= RANKS[i].minXp) {
        current = RANKS[i];
        next = RANKS[i + 1] || null;
      }
    }

    let progressToNext = 100;
    if (next) {
      const range = next.minXp - current.minXp;
      const earned = xp - current.minXp;
      progressToNext = Math.min(100, Math.round((earned / range) * 100));
    }

    return { ...current, next, progressToNext };
  }

  addXP(points) {
    this.data.xp += points;
    this.save();
    return this.data.xp;
  }

  loseLife() {
    if (this.data.lives > 0) {
      this.data.lives -= 1;
      this.save();
    }
    return this.data.lives;
  }

  restoreLives() {
    this.data.lives = this.data.maxLives;
    this.save();
  }

  recordAnswer(question, isCorrect, options = {}) {
    if (!question || !question.id) return;
    this.data.answeredCount += 1;

    if (isCorrect) {
      this.data.correctCount += 1;
      // If answered correctly during an explicit Review Session, mark the mistake as resolved!
      if (options && options.isReview) {
        this.resolveMistake(question.id);
      }
    } else {
      // Record mistake persistently
      if (!Array.isArray(this.data.mistakes)) {
        this.data.mistakes = [];
      }
      let existing = this.data.mistakes.find(m => m.id === question.id);
      if (existing) {
        existing.failCount = (existing.failCount || 1) + 1;
        existing.resolved = false;
        existing.lastFailedAt = Date.now();
        if (options.userAnswer !== undefined) existing.lastUserAnswer = options.userAnswer;
        if (options.whyWrong) existing.whyWrong = options.whyWrong;
      } else {
        this.data.mistakes.push({
          id: question.id,
          topic: question.topic || 'Geral',
          failCount: 1,
          resolved: false,
          firstFailedAt: Date.now(),
          lastFailedAt: Date.now(),
          lastUserAnswer: options.userAnswer,
          whyWrong: options.whyWrong || '',
          source: options.source || 'campaign',
          questionData: {
            id: question.id,
            title: question.title,
            options: question.options,
            correctIndex: question.correctIndex,
            explanation: question.explanation,
            whyWrong: question.whyWrong,
            tip: question.tip,
            topic: question.topic,
            examPrompt: question.examPrompt || null,
            scenario: question.scenario || null,
            xp: question.xp || 15
          }
        });
      }
    }

    // Update topic domain
    if (question.topic) {
      this.updateDomain(question.topic, isCorrect);
    }
    this.save();
  }

  resolveMistake(questionId) {
    if (!Array.isArray(this.data.mistakes)) return;
    const m = this.data.mistakes.find(item => item.id === questionId);
    if (m) {
      m.resolved = true;
      m.resolvedAt = Date.now();
      this.save();
    }
  }

  unresolveMistake(questionId) {
    if (!Array.isArray(this.data.mistakes)) return;
    const m = this.data.mistakes.find(item => item.id === questionId);
    if (m) {
      m.resolved = false;
      this.save();
    }
  }

  getActiveMistakes() {
    if (!Array.isArray(this.data.mistakes)) return [];
    return this.data.mistakes.filter(m => !m.resolved);
  }

  getAllMistakes() {
    if (!Array.isArray(this.data.mistakes)) return [];
    return this.data.mistakes;
  }

  getMistakeById(questionId) {
    if (!Array.isArray(this.data.mistakes)) return null;
    return this.data.mistakes.find(m => m.id === questionId) || null;
  }

  clearResolvedMistakes() {
    if (!Array.isArray(this.data.mistakes)) return;
    this.data.mistakes = this.data.mistakes.filter(m => !m.resolved);
    this.save();
  }

  updateDomain(topic, isCorrect) {
    if (this.data.topicDomain[topic] === undefined) {
      this.data.topicDomain[topic] = 0;
    }

    let current = this.data.topicDomain[topic];
    if (isCorrect) {
      current = Math.min(100, current + 8);
    } else {
      current = Math.max(0, current - 5);
    }

    this.data.topicDomain[topic] = current;
  }

  getDomain(topic) {
    if (!topic || this.data.topicDomain[topic] === undefined) return 0;
    return this.data.topicDomain[topic];
  }

  completePhase(phaseId, nextPhaseId) {
    if (!this.data.completedNodes.includes(phaseId)) {
      this.data.completedNodes.push(phaseId);
    }
    if (nextPhaseId && !this.data.unlockedNodes.includes(nextPhaseId)) {
      this.data.unlockedNodes.push(nextPhaseId);
    }
    this.save();
  }

  isNodeUnlocked(phaseId) {
    return this.data.unlockedNodes.includes(phaseId);
  }

  isNodeCompleted(phaseId) {
    return this.data.completedNodes.includes(phaseId);
  }

  getOverallAccuracy() {
    if (this.data.answeredCount === 0) return 0;
    return Math.round((this.data.correctCount / this.data.answeredCount) * 100);
  }

  getAverageDomain() {
    const values = Object.values(this.data.topicDomain);
    if (values.length === 0) return 0;
    const sum = values.reduce((a, b) => a + b, 0);
    return Math.round(sum / values.length);
  }

  getWeakestTopics(limit = 4) {
    const list = Object.entries(this.data.topicDomain).map(([topic, domain]) => ({
      topic,
      domain
    }));
    list.sort((a, b) => a.domain - b.domain);
    return list.slice(0, limit);
  }

  recordExamResult(result) {
    this.data.examHistory.push({
      date: new Date().toISOString(),
      score: result.score,
      total: result.total,
      percentage: result.percentage,
      timeSeconds: result.timeSeconds,
      breakdown: result.breakdown
    });
    this.save();
  }

  resetAllProgress() {
    localStorage.removeItem(STORAGE_KEY);
    this.data = this.load();
    this.save();
  }

  // Event listener system to update UI when state changes
  listeners = [];
  subscribe(fn) {
    this.listeners.push(fn);
  }
  notifyListeners() {
    this.listeners.forEach(fn => fn(this.data));
  }
}

const State = new GameStateManager();
if (typeof window !== 'undefined') {
  window.State = State;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GameStateManager, State };
}
