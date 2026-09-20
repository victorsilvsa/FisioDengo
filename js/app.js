// Main App Initialization & Global Namespace
window.App = {
  get Router() { return window.AppRouter; },
  get Navigation() { return window.AppRouter; },
  get State() { return typeof State !== 'undefined' ? State : null; },
  get Feedback() { return typeof FeedbackController !== 'undefined' ? FeedbackController : null; },
  get Exam() { return typeof ExamEngine !== 'undefined' ? ExamEngine : null; },
  get Review() { return typeof ReviewEngine !== 'undefined' ? ReviewEngine : null; },
  get WrittenExam() { return typeof WrittenExamEngine !== 'undefined' ? WrittenExamEngine : null; }
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Inicializando FisioDengo - Fisiologia Humana Interativa...');

  // Initialize Feedback Controller DOM
  if (typeof FeedbackController !== 'undefined') {
    FeedbackController.init();
  }

  // Initialize Router and View System
  if (typeof AppRouter !== 'undefined') {
    AppRouter.init();
  }

  console.log('FisioDengo carregado com sucesso!');
});
