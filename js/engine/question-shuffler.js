// Question Shuffler & Content/Presentation Separation Engine
// Implements intelligent dynamic Fisher-Yates shuffling with stable option IDs,
// textual variation support, and guaranteed letter re-mapping on retries.

const QuestionShuffler = {
  // Store last shuffle configuration per question to guarantee distinct positions on retry
  lastShuffleMap: new Map(),

  /**
   * Normalizes any question into a consistent structure with rich option objects.
   * Supports both legacy format (string options + correctIndex) and structured format.
   * @param {Object} question
   * @returns {Array<Object>} Normalized options: [{ id, text, correct, whyWrong, variations }]
   */
  normalizeOptions(question) {
    const sourceQ = (question && question.rawQuestion) ? question.rawQuestion : question;
    if (!sourceQ || !sourceQ.options || !Array.isArray(sourceQ.options)) {
      return [];
    }

    const correctIdx = typeof sourceQ.correctIndex === 'number' ? sourceQ.correctIndex : 0;
    const whyWrongList = Array.isArray(sourceQ.whyWrong) ? sourceQ.whyWrong : [];
    const variationsList = Array.isArray(sourceQ.optionVariations) ? sourceQ.optionVariations : [];

    return sourceQ.options.map((opt, idx) => {
      if (typeof opt === 'object' && opt !== null && opt.id && opt.text) {
        // Already structured
        return {
          id: opt.id,
          text: opt.text,
          originalIndex: typeof opt.originalIndex === 'number' ? opt.originalIndex : idx,
          correct: !!opt.correct,
          whyWrong: opt.whyWrong || whyWrongList[idx] || '',
          variations: opt.variations || variationsList[idx] || []
        };
      }

      // Normalized from string
      const optId = `opt_${sourceQ.id || 'q'}_${idx}`;
      return {
        id: optId,
        text: String(opt),
        originalIndex: idx,
        correct: (idx === correctIdx),
        whyWrong: whyWrongList[idx] || '',
        variations: variationsList[idx] || []
      };
    });
  },

  /**
   * Shuffles an array using Fisher-Yates algorithm.
   * @param {Array} arr
   * @returns {Array} Shuffled copy
   */
  fisherYates(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  /**
   * Prepares a question for display with intelligent dynamic shuffling.
   * Guarantees that if this question was previously displayed, the new order/letter
   * of the correct answer will be different when there are >= 2 options.
   * 
   * @param {Object} question - The raw question definition
   * @param {Object} [options] - Configuration options (e.g. forceNewPosition: true)
   * @returns {PresentationInstance} Ready-to-render question presentation instance
   */
  shuffle(question, config = {}) {
    if (!question) return null;

    // Non-multiple-choice question types that shouldn't shuffle standard options (e.g. tf, or matching/order in native interactive mode)
    // Note: If matching/order has options array (for exam mode), it shuffles options.
    const normalizedOptions = this.normalizeOptions(question);

    if (normalizedOptions.length <= 1) {
      return this.createPresentationInstance(question, normalizedOptions, 0);
    }

    const qKey = question.id || question.title;
    const lastConfig = this.lastShuffleMap.get(qKey);

    let shuffled;
    let attempts = 0;
    const maxAttempts = 20;

    do {
      shuffled = this.fisherYates(normalizedOptions);
      attempts++;

      // If we have previous history, guarantee the correct answer moves to a different index
      if (lastConfig && normalizedOptions.length >= 2 && attempts < maxAttempts) {
        const currentCorrectIndex = shuffled.findIndex(o => o.correct);
        if (currentCorrectIndex === lastConfig.correctIndex) {
          continue; // Re-shuffle to move the correct answer to a different position
        }
      }
      break;
    } while (attempts < maxAttempts);

    // Save this configuration for next retry
    const correctIndex = shuffled.findIndex(o => o.correct);
    this.lastShuffleMap.set(qKey, {
      correctIndex,
      optionOrderIds: shuffled.map(o => o.id)
    });

    return this.createPresentationInstance(question, shuffled, correctIndex);
  },

  /**
   * Creates an immutable presentation instance separating presentation from raw content.
   */
  createPresentationInstance(question, shuffledOptions, correctIndex) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    // Assign visual letters and pick textual variations if available
    const displayOptions = shuffledOptions.map((opt, i) => {
      let text = opt.text;
      // If equivalent textual variations exist, randomly pick one or keep canonical
      if (Array.isArray(opt.variations) && opt.variations.length > 0) {
        const choices = [opt.text, ...opt.variations];
        text = choices[Math.floor(Math.random() * choices.length)];
      }

      return {
        letter: letters[i] || String(i + 1),
        id: opt.id,
        text: text,
        correct: !!opt.correct,
        whyWrong: opt.whyWrong || '',
        displayIndex: i,
        originalIndex: opt.originalIndex
      };
    });

    const correctOption = displayOptions[correctIndex] || displayOptions.find(o => o.correct) || displayOptions[0];
    const correctLetter = correctOption ? correctOption.letter : 'A';
    const correctOptionId = correctOption ? correctOption.id : null;

    const instance = {
      // Content references (immutable)
      rawQuestion: question,
      id: question.id,
      type: question.type,
      topic: question.topic,
      difficulty: question.difficulty,
      xp: question.xp || 15,
      title: question.title,
      scenario: question.scenario,
      examPrompt: question.examPrompt,
      tip: question.tip,
      explanation: question.explanation,
      pairs: question.pairs,
      steps: question.steps,

      // Presentation properties
      displayOptions,
      options: displayOptions.map(o => o.text),
      whyWrong: displayOptions.map(o => o.whyWrong),
      correctIndex,
      correctLetter,
      correctOptionId,

      /**
       * Evaluates if user answer is correct based on option ID or display index.
       * @param {string|number} selected
       * @returns {boolean}
       */
      isCorrect(selected) {
        if (typeof selected === 'string') {
          return selected === correctOptionId;
        }
        if (typeof selected === 'number') {
          return selected === correctIndex;
        }
        if (selected && typeof selected === 'object') {
          return selected.id === correctOptionId || !!selected.correct;
        }
        return false;
      },

      /**
       * Retrieves the whyWrong text for the selected option.
       * @param {string|number} selected
       * @returns {string}
       */
      getWhyWrong(selected) {
        const opt = this.getSelectedOption(selected);
        return opt ? (opt.whyWrong || '') : '';
      },

      /**
       * Gets the full text of the correct answer.
       * @returns {string}
       */
      getCorrectAnswerText() {
        return correctOption ? correctOption.text : '';
      },

      /**
       * Resolves the selected option object.
       * @param {string|number} selected
       * @returns {Object|null}
       */
      getSelectedOption(selected) {
        if (typeof selected === 'string') {
          return displayOptions.find(o => o.id === selected) || null;
        }
        if (typeof selected === 'number') {
          return displayOptions[selected] || null;
        }
        if (selected && typeof selected === 'object' && selected.id) {
          return displayOptions.find(o => o.id === selected.id) || null;
        }
        return null;
      }
    };

    return instance;
  }
};

// Global export for browser and Node.js
if (typeof window !== 'undefined') {
  window.QuestionShuffler = QuestionShuffler;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuestionShuffler };
}
