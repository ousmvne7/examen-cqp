function initializeQuizApp() {
const targetQuestion = "Le respect des conditions pour être recruté dans une entreprise privée de sécurité est garanti par la détention :";
const exactOptions = [
  "D'un badge au nom de la société qui emploie",
  "Aucune des autres réponses",
  "D'une attestation de l'employeur",
  "D'un contrat de travail",
  "D'une carte professionnelle dématérialisée délivrée par la C.L.A.C"
];

function questionKey(text) {
  return text
    .replace("guaranteed", "garanti")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function deduplicateQuestions(source) {
  if (!Array.isArray(source)) return [];

  const seen = new Set();
  return source.reduce((uniqueQuestions, question) => {
    const key = questionKey(question.question);
    if (!key || seen.has(key)) return uniqueQuestions;

    seen.add(key);
    uniqueQuestions.push({
      ...question,
      options: [...question.options]
    });
    return uniqueQuestions;
  }, []);
}

function shuffleQuestions(source) {
  const shuffled = [...source];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function prepareUv2Questions() {
  const questions = deduplicateQuestions(uv2Questions);
  const matchingIndex = questions.findIndex(q =>
    q.question.replace("guaranteed", "garanti") === targetQuestion
  );

  if (matchingIndex >= 0) {
    const featured = questions.splice(matchingIndex, 1)[0];
    featured.question = targetQuestion;
    featured.options = exactOptions;
    questions.unshift(featured);
  }

  return questions;
}

const exams = {
  uv2: {
    title: "UV02 - JURIDIQUE",
    questions: shuffleQuestions(prepareUv2Questions())
  },
  uv3: {
    title: "UV03 - GESTION DES CONFLITS",
    questions: shuffleQuestions(deduplicateQuestions(uv3Questions))
  },
  uv4: {
    title: "UV04 - MODULE STRATÉGIQUE",
    questions: shuffleQuestions(deduplicateQuestions(uv4Questions))
  },
  uv5: {
    title: "UV05 - INCENDIE",
    questions: shuffleQuestions(deduplicateQuestions(uv5Questions))
  }
};

let activeUv = "uv2";
let quizData = exams[activeUv].questions;

const state = {
  current: 0,
  answers: new Map(),
  score: 0,
  elapsedSeconds: 0
};

const $ = id => document.getElementById(id);
const els = {
  brandMark: $("brandMark"),
  quizSection: $("quizSection"),
  resultSection: $("resultSection"),
  questionText: $("questionText"),
  options: $("optionsContainer"),
  feedbackBox: $("feedbackBox"),
  feedbackText: $("feedbackText"),
  currentTop: $("currentTop"),
  totalTop: $("totalTop"),
  counterCurrent: $("counterCurrent"),
  counterTotal: $("counterTotal"),
  examTitle: $("examTitle"),
  sidebarTotals: {
    uv2: $("sidebarTotalUv2"),
    uv3: $("sidebarTotalUv3"),
    uv4: $("sidebarTotalUv4"),
    uv5: $("sidebarTotalUv5")
  },
  uvCards: document.querySelectorAll(".uv-card[data-uv]"),
  sidebar: document.querySelector(".sidebar"),
  sidebarToggle: $("sidebarToggle"),
  sidebarClose: $("sidebarClose"),
  sidebarBackdrop: $("sidebarBackdrop"),
  progress: $("progressBar"),
  pagination: $("pagination"),
  prev: $("prevBtn"),
  next: $("nextBtn"),
  pagePrev: $("pagePrev"),
  pageNext: $("pageNext"),
  timer: $("timer"),
  quit: $("quitBtn"),
  finalScore: $("finalScore"),
  restart: $("restartBtn")
};

Object.entries(exams).forEach(([uvKey, exam]) => {
  if (els.sidebarTotals[uvKey]) {
    els.sidebarTotals[uvKey].textContent = exam.questions.length;
  }
});

function mountBrandLogo() {
  if (!els.brandMark || els.brandMark.childElementCount) return;

  els.brandMark.innerHTML = `
    <svg viewBox="0 0 48 56" width="40" height="47" aria-hidden="true">
      <path d="M24 1 44 8v17c0 14-8.1 24.2-20 30C12.1 49.2 4 39 4 25V8L24 1Z" fill="currentColor"/>
      <path d="m24 13 11 4v8.8c0 7.2-4.5 12.7-11 16.4-6.5-3.7-11-9.2-11-16.4V17l11-4Z" fill="#fff"/>
      <path d="m18.5 25.5 4 4 7.5-8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

if (document.readyState === "complete") {
  requestAnimationFrame(mountBrandLogo);
} else {
  window.addEventListener("load", () => requestAnimationFrame(mountBrandLogo), { once: true });
}

function normalize(text) {
  return text.trim().replace(/\s+/g, " ");
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map(value => String(value).padStart(2, "0")).join(":");
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 850px)").matches;
}

function scrollToCurrentQuestion(behavior = "smooth") {
  if (isMobileLayout()) {
    els.quizSection.scrollIntoView({ behavior, block: "start" });
  } else {
    window.scrollTo({ top: 0, behavior });
  }
}

function restoreScrollPosition(position) {
  const restore = () => window.scrollTo({ top: position, behavior: "auto" });
  restore();
  requestAnimationFrame(() => {
    restore();
    requestAnimationFrame(restore);
  });
  window.setTimeout(restore, 80);
}

function setSidebarOpen(isOpen) {
  document.body.classList.toggle("sidebar-open", isOpen);
  els.sidebarToggle.setAttribute("aria-expanded", String(isOpen));
}

function renderQuestion() {
  const question = quizData[state.current];
  if (!question) return showResults();

  const total = quizData.length;
  const number = state.current + 1;
  const savedAnswer = state.answers.get(state.current);
  const isWrongAnswer = savedAnswer &&
    normalize(savedAnswer) !== normalize(question.correctText);

  els.questionText.textContent = question.question.replace("guaranteed", "garanti");
  els.currentTop.textContent = number;
  els.counterCurrent.textContent = number;
  els.totalTop.textContent = total;
  els.counterTotal.textContent = total;
  els.progress.style.width = `${Math.max(number / total * 100, 1.3)}%`;
  els.feedbackBox.hidden = !isWrongAnswer;
  els.feedbackText.textContent = isWrongAnswer
    ? `${question.tip || "Revoyez cette notion."} Bonne réponse : ${question.correctText}.`
    : "";
  els.prev.disabled = false;
  els.pagePrev.disabled = false;
  els.next.querySelector("span").textContent = number === total ? "Terminer l'examen" : "Question suivante";

  els.options.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const isSelected = savedAnswer === option;
    const isCorrect = normalize(option) === normalize(question.correctText);

    button.type = "button";
    button.className = "option-card";
    if (savedAnswer) {
      button.classList.add("locked");
      if (isCorrect) button.classList.add("correct");
      if (isSelected && !isCorrect) button.classList.add("wrong");
    }

    button.innerHTML = `
      <span class="radio" aria-hidden="true"></span>
      <span class="option-text"></span>
    `;
    button.querySelector(".option-text").textContent = option;
    button.addEventListener("pointerdown", event => {
      button.dataset.scrollPosition = String(window.scrollY);
      if (isMobileLayout()) event.preventDefault();
    });
    button.addEventListener("click", () => {
      const savedScrollPosition = Number(button.dataset.scrollPosition);
      answerQuestion(
        option,
        Number.isFinite(savedScrollPosition) ? savedScrollPosition : window.scrollY
      );
    });
    els.options.appendChild(button);
  });

  renderPagination();
}

function answerQuestion(option, scrollPosition = window.scrollY) {
  if (state.answers.has(state.current)) return;

  const question = quizData[state.current];
  state.answers.set(state.current, option);
  if (normalize(option) === normalize(question.correctText)) state.score += 1;

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  renderQuestion();
  restoreScrollPosition(scrollPosition);
}

function goTo(index) {
  if (index < 0 || index >= quizData.length) return;
  state.current = index;
  renderQuestion();
  requestAnimationFrame(() => scrollToCurrentQuestion());
}

function paginationItems() {
  const total = quizData.length;
  const current = state.current + 1;

  if (total <= 9) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 5) return [1, 2, 3, 4, 5, "…", total - 3, total - 2, total - 1, total];
  if (current >= total - 4) return [1, 2, "…", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "…", current - 1, current, current + 1, "…", total];
}

function renderPagination() {
  els.pagination.replaceChildren();

  paginationItems().forEach(item => {
    if (item === "…") {
      const ellipsis = document.createElement("span");
      ellipsis.className = "ellipsis";
      ellipsis.textContent = "•••";
      els.pagination.appendChild(ellipsis);
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = `page-btn${item === state.current + 1 ? " active" : ""}`;
    button.textContent = item;
    button.setAttribute("aria-label", `Aller à la question ${item}`);
    button.addEventListener("click", () => goTo(item - 1));
    els.pagination.appendChild(button);
  });

  els.pageNext.disabled = state.current === quizData.length - 1;
}

function showResults() {
  els.quizSection.hidden = true;
  document.querySelector(".pagination-panel").hidden = true;
  els.resultSection.hidden = false;
  const percent = quizData.length ? Math.round(state.score / quizData.length * 100) : 0;
  els.finalScore.textContent = `${state.score} / ${quizData.length} — ${percent}% de réussite`;
}

function restartQuiz() {
  exams[activeUv].questions = shuffleQuestions(exams[activeUv].questions);
  quizData = exams[activeUv].questions;
  state.current = 0;
  state.answers.clear();
  state.score = 0;
  state.elapsedSeconds = 0;
  els.timer.textContent = formatTime(state.elapsedSeconds);
  els.quizSection.hidden = false;
  document.querySelector(".pagination-panel").hidden = false;
  els.resultSection.hidden = true;
  renderQuestion();
  requestAnimationFrame(() => scrollToCurrentQuestion());
}

function switchExam(uvKey) {
  if (!exams[uvKey] || uvKey === activeUv) return;

  activeUv = uvKey;
  quizData = exams[activeUv].questions;
  state.current = 0;
  state.answers.clear();
  state.score = 0;
  state.elapsedSeconds = 0;

  els.examTitle.textContent = exams[activeUv].title;
  els.timer.textContent = formatTime(0);
  els.quizSection.hidden = false;
  document.querySelector(".pagination-panel").hidden = false;
  els.resultSection.hidden = true;

  els.uvCards.forEach(card => {
    card.classList.toggle("active", card.dataset.uv === activeUv);
  });

  setSidebarOpen(false);
  renderQuestion();
  requestAnimationFrame(() => scrollToCurrentQuestion());
}

els.prev.addEventListener("click", () => goTo(state.current - 1));
els.pagePrev.addEventListener("click", () => goTo(state.current - 1));
els.pageNext.addEventListener("click", () => goTo(state.current + 1));
els.next.addEventListener("click", () => {
  if (state.current === quizData.length - 1) showResults();
  else goTo(state.current + 1);
});
els.restart.addEventListener("click", restartQuiz);
els.uvCards.forEach(card => {
  card.addEventListener("click", () => switchExam(card.dataset.uv));
});
els.sidebarToggle.addEventListener("click", () => setSidebarOpen(true));
els.sidebarClose.addEventListener("click", () => setSidebarOpen(false));
els.sidebarBackdrop.addEventListener("click", () => setSidebarOpen(false));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") setSidebarOpen(false);
});

els.quit.addEventListener("click", () => {
  if (window.confirm("Voulez-vous vraiment quitter l'examen ?")) showResults();
});

setInterval(() => {
  state.elapsedSeconds += 1;
  els.timer.textContent = formatTime(state.elapsedSeconds);
}, 1000);

els.timer.textContent = formatTime(state.elapsedSeconds);
renderQuestion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeQuizApp, { once: true });
} else {
  initializeQuizApp();
}
