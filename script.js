function initializeQuizApp() {
const targetQuestion = "Le respect des conditions pour être recruté dans une entreprise privée de sécurité est garanti par la détention :";
const exactOptions = [
  "D'un badge au nom de la société qui emploie",
  "Aucune des autres réponses",
  "D'une attestation de l'employeur",
  "D'un contrat de travail",
  "D'une carte professionnelle dématérialisée délivrée par la C.L.A.C"
];

function normalizeQuestionPart(text) {
  return text
    .replace("guaranteed", "garanti")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function questionKey(question) {
  const normalizedOptions = question.options
    .map(normalizeQuestionPart)
    .sort();

  return [
    normalizeQuestionPart(question.question),
    ...normalizedOptions
  ].join("||");
}

function deduplicateQuestions(source) {
  if (!Array.isArray(source)) return [];

  const seen = new Set();
  return source.reduce((uniqueQuestions, question) => {
    const key = questionKey(question);
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
  },
  uv6: {
    title: "UV06 - ARTICLE 73 CPP",
    questions: shuffleQuestions(deduplicateQuestions(uv6Questions))
  },
  uv7: {
    title: "UV07 - TERRORISME",
    questions: shuffleQuestions(deduplicateQuestions(uv7Questions))
  },
  uv8: {
    title: "UV08 - PROFESSIONNEL",
    questions: shuffleQuestions(deduplicateQuestions(uv8Questions))
  },
  uv9: {
    title: "UV09 - PALPATION",
    questions: shuffleQuestions(deduplicateQuestions(uv9Questions))
  },
  uv10: {
    title: "UV10 - SURVEILLANCE ÉLECTRONIQUE",
    questions: shuffleQuestions(deduplicateQuestions(uv10Questions))
  },
  uv11: {
    title: "UV11 - GESTION DES RISQUES",
    questions: shuffleQuestions(deduplicateQuestions(uv11Questions))
  },
  uv12: {
    title: "UV12 - ÉVÉNEMENTIEL",
    questions: shuffleQuestions(deduplicateQuestions(uv12Questions))
  },
  uv14: {
    title: "UV14 - INDUSTRIEL",
    questions: shuffleQuestions(deduplicateQuestions(uv14Questions))
  }
};

const EXAM_MODE_KEY = "exam";
const EXAM_SECONDS_PER_QUESTION = 45;
const PROGRESS_STORAGE_KEY = "cqpApsProgressV1";
const officialExamModules = [
  { uvKey: "uv2", quota: 15 },
  { uvKey: "uv3", quota: 10 },
  { uvKey: "uv4", quota: 5 },
  { uvKey: "uv5", quota: 5 },
  { uvKey: "uv6", quota: 8 },
  { uvKey: "uv7", quota: 10 },
  { uvKey: "uv8", quota: 15 },
  { uvKey: "uv9", quota: 8 },
  { uvKeys: ["uv10", "uv12", "uv14"], quota: 15 },
  { uvKey: "uv11", quota: 8 }
];

const miniExamQuotas = {
  uv2: 15,
  uv3: 10,
  uv4: 5,
  uv5: 5,
  uv6: 8,
  uv7: 10,
  uv8: 15,
  uv9: 8,
  uv10: 15,
  uv11: 8,
  uv12: 15,
  uv14: 15
};

exams[EXAM_MODE_KEY] = {
  title: "MODE EXAMEN - SIMULATION",
  questions: []
};

function isExamMode() {
  return activeUv === EXAM_MODE_KEY || state.sessionMode === "mini-exam";
}

function isMiniExamMode() {
  return state.sessionMode === "mini-exam";
}

function isReviewMode() {
  return state.sessionMode === "review-mistakes";
}

function allocateExamQuestions() {
  return officialExamModules
    .map(module => {
      const uvKeys = module.uvKeys || [module.uvKey];
      const available = uvKeys.reduce((sum, uvKey) => {
        return sum + (exams[uvKey]?.questions.length || 0);
      }, 0);

      return {
        ...module,
        uvKeys,
        available,
        count: Math.min(module.quota, available)
      };
    })
    .filter(module => module.count > 0);
}

function getExamTargetTotal() {
  return allocateExamQuestions().reduce((sum, module) => sum + module.count, 0);
}

function buildExamSimulation() {
  const selectedQuestions = [];

  allocateExamQuestions().forEach(module => {
    const questionPool = module.uvKeys.flatMap(uvKey =>
      (exams[uvKey]?.questions || []).map(question => ({
        ...question,
        sourceUv: uvKey.toUpperCase()
      }))
    );

    const moduleQuestions = shuffleQuestions(questionPool)
      .slice(0, module.count)
      .map((question, index) => ({
        ...question,
        moduleIndex: index + 1,
        moduleTotal: module.count
      }));

    selectedQuestions.push(...moduleQuestions);
  });

  return selectedQuestions;
}

function buildMiniExamSimulation(uvKey) {
  const quota = miniExamQuotas[uvKey];
  const sourceQuestions = exams[uvKey]?.questions || [];
  const count = Math.min(quota || sourceQuestions.length, sourceQuestions.length);

  return shuffleQuestions(sourceQuestions)
    .slice(0, count)
    .map((question, index) => ({
      ...question,
      sourceUv: uvKey.toUpperCase(),
      moduleIndex: index + 1,
      moduleTotal: count
    }));
}

let activeUv = "uv2";
let quizData = exams[activeUv].questions;

const state = {
  sessionMode: "revision",
  revisionQuestions: new Map(),
  resultSaved: false,
  current: 0,
  answers: new Map(),
  score: 0,
  elapsedSeconds: 0,
  remainingSeconds: 0,
  questionSecondsLeft: EXAM_SECONDS_PER_QUESTION,
  questionStartedAt: Date.now(),
  examFeedback: new Map()
};

const $ = id => document.getElementById(id);
const els = {
  brandMark: $("brandMark"),
  quizSection: $("quizSection"),
  resultSection: $("resultSection"),
  resultTitle: $("resultTitle"),
  questionText: $("questionText"),
  questionUvLabel: $("questionUvLabel"),
  questionTimer: $("questionTimer"),
  qcuCorrectionBox: $("qcuCorrectionBox"),
  qcuAnswerStatus: $("qcuAnswerStatus"),
  qcuNote: $("qcuNote"),
  options: $("optionsContainer"),
  feedbackBox: $("feedbackBox"),
  feedbackText: $("feedbackText"),
  currentTop: $("currentTop"),
  totalTop: $("totalTop"),
  counterCurrent: $("counterCurrent"),
  counterSep: $("counterSep"),
  counterTotal: $("counterTotal"),
  examTitle: $("examTitle"),
  sidebarTotals: {
    exam: $("sidebarTotalExam"),
    uv2: $("sidebarTotalUv2"),
    uv3: $("sidebarTotalUv3"),
    uv4: $("sidebarTotalUv4"),
    uv5: $("sidebarTotalUv5"),
    uv6: $("sidebarTotalUv6"),
    uv7: $("sidebarTotalUv7"),
    uv8: $("sidebarTotalUv8"),
    uv9: $("sidebarTotalUv9"),
    uv10: $("sidebarTotalUv10"),
    uv11: $("sidebarTotalUv11"),
    uv12: $("sidebarTotalUv12"),
    uv14: $("sidebarTotalUv14")
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
  resultBreakdown: $("resultBreakdown"),
  restart: $("restartBtn"),
  miniExam: $("miniExamBtn"),
  reviewMistakes: $("reviewMistakesBtn"),
  mistakesRemainingBadge: $("mistakesRemainingBadge"),
  progressSummary: $("progressSummary"),
  weakUvList: $("weakUvList"),
  historyList: $("historyList")
};

let progressData = loadProgress();

Object.entries(exams).forEach(([uvKey, exam]) => {
  if (els.sidebarTotals[uvKey]) {
    els.sidebarTotals[uvKey].textContent = uvKey === EXAM_MODE_KEY
      ? getExamTargetTotal()
      : exam.questions.length;
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

function setExamHeading(title, badgeText = "") {
  if (!els.examTitle) return;
  els.examTitle.replaceChildren(document.createTextNode(title));
  if (!badgeText) return;

  const badge = document.createElement("span");
  badge.className = "exam-title-badge";
  badge.textContent = badgeText;
  els.examTitle.append(" ", badge);
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) || "{}");
    return {
      history: Array.isArray(saved.history) ? saved.history : [],
      mistakes: saved.mistakes && typeof saved.mistakes === "object" ? saved.mistakes : {},
      favorites: saved.favorites && typeof saved.favorites === "object" ? saved.favorites : {}
    };
  } catch {
    return { history: [], mistakes: {}, favorites: {} };
  }
}

function saveProgress() {
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progressData));
}

function uvKeyFromQuestion(question) {
  return String(question?.sourceUv || activeUv || "")
    .toLowerCase()
    .replace(/^uv0/, "uv");
}

function uvLabelFromKey(uvKey) {
  return uvKey === EXAM_MODE_KEY ? "Examen" : (exams[uvKey]?.title || uvKey.toUpperCase()).replace(" - ", " ");
}

function serializeQuestion(question) {
  return {
    question: question.question,
    options: [...question.options],
    correctText: question.correctText,
    tip: question.tip || "",
    sourceUv: uvKeyFromQuestion(question).toUpperCase()
  };
}

function currentQuestionKey(question = quizData[state.current]) {
  return question ? questionKey(question) : "";
}

function saveMistake(question) {
  if (!question) return;
  const key = currentQuestionKey(question);
  const previous = progressData.mistakes[key] || {};
  progressData.mistakes[key] = {
    ...serializeQuestion(question),
    misses: (previous.misses || 0) + 1,
    lastMissedAt: Date.now()
  };
  saveProgress();
  renderProgressDashboard();
}

function removeMistake(question) {
  const key = currentQuestionKey(question);
  if (progressData.mistakes[key]) {
    delete progressData.mistakes[key];
    saveProgress();
    renderProgressDashboard();
  }
}

function getSessionLabel() {
  if (activeUv === EXAM_MODE_KEY) return "Examen 99";
  if (state.sessionMode === "mini-exam") return `Mini ${activeUv.toUpperCase()}`;
  if (state.sessionMode === "review-mistakes") return "Erreurs";
  return `Révision ${activeUv.toUpperCase()}`;
}

function recordSessionResult(percent, byUv) {
  if (state.resultSaved) return;
  state.resultSaved = true;

  progressData.history.unshift({
    date: Date.now(),
    label: getSessionLabel(),
    mode: state.sessionMode,
    score: state.score,
    total: quizData.length,
    percent,
    byUv
  });
  progressData.history = progressData.history.slice(0, 30);
  saveProgress();
  renderProgressDashboard();
}

function renderProgressDashboard() {
  if (!els.progressSummary || !els.weakUvList || !els.historyList) return;

  const last = progressData.history[0];
  els.progressSummary.textContent = last
    ? `${last.percent}% dernier score`
    : "Aucune session";

  const uvStats = {};
  progressData.history.slice(0, 20).forEach(session => {
    Object.entries(session.byUv || {}).forEach(([uv, result]) => {
      const uvKey = uv.toLowerCase().replace(/^uv0/, "uv");
      uvStats[uvKey] ||= { score: 0, total: 0 };
      uvStats[uvKey].score += result.score;
      uvStats[uvKey].total += result.total;
    });
  });

  const weakUvs = Object.entries(uvStats)
    .map(([uvKey, result]) => ({
      uvKey,
      percent: result.total ? Math.round(result.score / result.total * 100) : 0
    }))
    .filter(item => item.percent < 80)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 4);

  els.weakUvList.innerHTML = weakUvs.length
    ? weakUvs.map(item => `<span class="danger">${item.uvKey.toUpperCase()} ${item.percent}%</span>`).join("")
    : "<span>Rien d'inquiétant</span>";

  els.historyList.innerHTML = progressData.history.length
    ? progressData.history.slice(0, 4).map(item => `<span>${item.label} ${item.percent}%</span>`).join("")
    : "<span>Pas encore d'historique</span>";
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map(value => String(value).padStart(2, "0")).join(":");
}

function formatClock(timestamp) {
  return new Date(timestamp).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function resetTimer() {
  state.elapsedSeconds = 0;
  state.remainingSeconds = 0;
  state.questionSecondsLeft = EXAM_SECONDS_PER_QUESTION;
  state.questionStartedAt = Date.now();
  els.timer.textContent = isExamMode() ? `00:${String(EXAM_SECONDS_PER_QUESTION).padStart(2, "0")}` : formatTime(0);
  if (els.questionTimer) {
    els.questionTimer.textContent = isExamMode() ? "1 / 1" : "";
    els.questionTimer.hidden = !isExamMode();
  }
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

function renderQcuCorrection(question, savedAnswer) {
  if (!els.qcuCorrectionBox) return;

  const feedback = state.examFeedback.get(state.current);
  const shouldShow = isExamMode() && feedback;
  els.qcuCorrectionBox.hidden = !shouldShow;
  if (!shouldShow) return;

  const isCorrect = savedAnswer &&
    normalize(savedAnswer) === normalize(question.correctText);

  els.qcuAnswerStatus.textContent = feedback.expired ? "TEMPS ÉCOULÉ" : "BONNE RÉPONSE";
  els.qcuAnswerStatus.classList.toggle("expired", Boolean(feedback.expired));
  els.qcuNote.textContent = `NOTE : ${isCorrect ? 1 : 0} point`;
}

function buildRevisionTip(question) {
  const tip = String(question.tip || "").trim();
  if (tip) return tip.length > 170 ? `${tip.slice(0, 167).trim()}...` : tip;

  const correctText = String(question.correctText || "").trim();
  if (!correctText) return "Relis la règle associée : c'est une question piège.";
  return `Retenir la formule exacte : ${correctText}.`;
}

function renderQuestion() {
  const question = quizData[state.current];
  if (!question) return showResults();

  const total = quizData.length;
  const number = state.current + 1;
  const savedAnswer = state.answers.get(state.current);
  const hasAnswered = state.answers.has(state.current);
  const examMode = isExamMode();
  const examFeedback = state.examFeedback.get(state.current);
  const isWrongAnswer = savedAnswer &&
    normalize(savedAnswer) !== normalize(question.correctText);

  document.body.classList.toggle("exam-mode", examMode);

  const uvLabel = isExamMode()
    ? getQuestionUvTitle(question)
    : exams[activeUv].title;

  if (els.miniExam) {
    const isAvailableUv = activeUv !== EXAM_MODE_KEY && Boolean(exams[activeUv]?.questions.length);
    const miniCount = Math.min(miniExamQuotas[activeUv] || 0, exams[activeUv]?.questions.length || 0);
    const mistakeCount = Object.values(progressData.mistakes)
      .filter(item => String(item.sourceUv || "").toLowerCase() === activeUv).length;

    els.miniExam.hidden = !isAvailableUv || isReviewMode();
    if (els.reviewMistakes) {
      els.reviewMistakes.hidden = !isAvailableUv || (!isReviewMode() && mistakeCount === 0);
      els.reviewMistakes.classList.toggle("return-mode", isReviewMode());
      els.reviewMistakes.textContent = isReviewMode() ? "Retour révision complète" : `Revoir mes erreurs (${mistakeCount})`;
    }
    if (els.mistakesRemainingBadge) {
      els.mistakesRemainingBadge.hidden = !isReviewMode();
    }
    if (els.miniExam.parentElement) {
      const hasTool = [els.miniExam, els.reviewMistakes, els.mistakesRemainingBadge]
        .some(button => button && !button.hidden);
      els.miniExam.parentElement.hidden = !hasTool;
    }
    els.miniExam.disabled = isAvailableUv && miniCount === 0;
    els.miniExam.textContent = isMiniExamMode()
      ? "Retour révision complète"
      : `Lancer mini examen UV (${miniCount} q.)`;
  }

  if (els.questionUvLabel) els.questionUvLabel.textContent = uvLabel;
  if (els.questionTimer) {
    els.questionTimer.hidden = !examMode;
    els.questionTimer.textContent = examMode
      ? `${question.moduleIndex || number} / ${question.moduleTotal || total}`
      : "";
    els.questionTimer.classList.toggle("danger", examMode && state.questionSecondsLeft <= 10);
  }

  els.questionText.textContent = question.question.replace("guaranteed", "garanti");
  if (isReviewMode()) {
    const resolved = hasAnswered && normalize(savedAnswer) === normalize(question.correctText);
    const remaining = Math.max(total - (resolved ? 1 : 0), 0);
    if (els.mistakesRemainingBadge) {
      els.mistakesRemainingBadge.textContent = `${remaining} ${remaining > 1 ? "restantes" : "restante"}`;
    }
    els.currentTop.parentElement.hidden = true;
    els.counterCurrent.parentElement.hidden = true;
    els.progress.parentElement.hidden = true;
    if (els.counterSep) els.counterSep.hidden = true;
  } else {
    if (els.mistakesRemainingBadge) els.mistakesRemainingBadge.hidden = true;
    els.currentTop.parentElement.hidden = false;
    els.counterCurrent.parentElement.hidden = false;
    els.progress.parentElement.hidden = false;
    els.currentTop.parentElement.firstChild.textContent = "Question ";
    els.currentTop.textContent = number;
    els.totalTop.textContent = total;
    els.counterCurrent.textContent = number;
    if (els.counterSep) els.counterSep.hidden = false;
    els.counterTotal.textContent = total;
  }
  els.progress.style.width = `${Math.max(number / total * 100, 1.3)}%`;
  const shouldShowRevisionTip = !examMode && isWrongAnswer;
  els.feedbackBox.hidden = !shouldShowRevisionTip;
  els.feedbackText.textContent = shouldShowRevisionTip ? buildRevisionTip(question) : "";
  els.prev.disabled = examMode || state.current === 0;
  els.pagePrev.disabled = examMode || state.current === 0;
  els.next.disabled = (examMode && !state.examFeedback.has(state.current)) || (isReviewMode() && !hasAnswered);
  els.next.querySelector("span").textContent = isReviewMode()
    ? "Erreur suivante"
    : number === total ? "Terminer l'examen" : "Question suivante";

  els.options.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const isSelected = savedAnswer === option;
    const isCorrect = normalize(option) === normalize(question.correctText);

    button.type = "button";
    button.className = "option-card";
    if (hasAnswered) {
      button.classList.add("locked");
      if (examMode && examFeedback) {
        if (isCorrect) button.classList.add("correct");
        if (isSelected && !isCorrect) button.classList.add("wrong");
      } else if (examMode && isSelected) {
        button.classList.add("chosen");
      } else if (!examMode) {
        if (isCorrect) button.classList.add("correct");
        if (isSelected && !isCorrect) button.classList.add("wrong");
      }
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

  renderQcuCorrection(question, savedAnswer);
  renderPagination();
}

function getQuestionUvTitle(question) {
  const uvKey = (question.sourceUv || activeUv).toLowerCase();
  return exams[uvKey]?.title || (question.sourceUv || exams[activeUv].title);
}

function answerQuestion(option, scrollPosition = window.scrollY) {
  if (state.answers.has(state.current)) return;

  const question = quizData[state.current];
  state.answers.set(state.current, option);
  const isCorrect = normalize(option) === normalize(question.correctText);
  if (isCorrect) {
    state.score += 1;
    if (state.sessionMode === "review-mistakes") {
      renderQuestion();
      restoreScrollPosition(scrollPosition);
      return;
    }
  } else {
    saveMistake(question);
  }

  if (isExamMode()) {
    const finishedAt = Date.now();
    state.examFeedback.set(state.current, {
      startedAt: state.questionStartedAt,
      finishedAt,
      duration: Math.max(1, Math.round((finishedAt - state.questionStartedAt) / 1000)),
      expired: false
    });
  }

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  renderQuestion();
  restoreScrollPosition(scrollPosition);

}

function goTo(index) {
  if (isExamMode() && index < state.current) return;
  if (index < 0 || index >= quizData.length) return;
  state.current = index;
  if (isExamMode()) resetQuestionTimer();
  renderQuestion();
  requestAnimationFrame(() => scrollToCurrentQuestion());
}

function resetQuestionTimer() {
  state.questionSecondsLeft = EXAM_SECONDS_PER_QUESTION;
  state.questionStartedAt = Date.now();
  if (els.questionTimer) {
    const question = quizData[state.current];
    els.questionTimer.textContent = `${question?.moduleIndex || state.current + 1} / ${question?.moduleTotal || quizData.length}`;
    els.questionTimer.classList.remove("danger");
  }
  els.timer.textContent = `00:${String(EXAM_SECONDS_PER_QUESTION).padStart(2, "0")}`;
}

function advanceExamQuestion() {
  if (!isExamMode() || els.quizSection.hidden) return;
  if (state.current >= quizData.length - 1) {
    showResults();
    return;
  }

  state.current += 1;
  resetQuestionTimer();
  renderQuestion();
  requestAnimationFrame(() => scrollToCurrentQuestion());
}

function expireCurrentQuestion() {
  if (!isExamMode() || els.quizSection.hidden) return;
  if (!state.answers.has(state.current)) {
    const question = quizData[state.current];
    state.answers.set(state.current, null);
    saveMistake(question);
    const finishedAt = Date.now();
    state.examFeedback.set(state.current, {
      startedAt: state.questionStartedAt,
      finishedAt,
      duration: EXAM_SECONDS_PER_QUESTION,
      expired: true
    });
    renderQuestion();
  }
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
    button.disabled = isExamMode() && item !== state.current + 1;
    button.setAttribute("aria-label", `Aller à la question ${item}`);
    button.addEventListener("click", () => goTo(item - 1));
    els.pagination.appendChild(button);
  });

  els.pageNext.disabled = isExamMode() || state.current === quizData.length - 1;
}

function showResults() {
  els.quizSection.hidden = true;
  document.body.classList.toggle("exam-mode", false);
  document.querySelector(".pagination-panel").hidden = true;
  els.resultSection.hidden = false;
  if (els.resultTitle) els.resultTitle.textContent = "Session terminée";
  els.restart.textContent = "Recommencer";
  const percent = quizData.length ? Math.round(state.score / quizData.length * 100) : 0;
  els.finalScore.textContent = `${state.score} / ${quizData.length} — ${percent}% de réussite`;

  const byUv = quizData.reduce((acc, question, index) => {
    const uv = question.sourceUv || activeUv.toUpperCase();
    const answer = state.answers.get(index);
    acc[uv] ||= { total: 0, score: 0 };
    acc[uv].total += 1;
    if (answer && normalize(answer) === normalize(question.correctText)) {
      acc[uv].score += 1;
    }
    return acc;
  }, {});

  recordSessionResult(percent, byUv);

  if (isExamMode() && els.resultBreakdown) {
    els.resultBreakdown.innerHTML = Object.entries(byUv)
      .sort(([a], [b]) => a.localeCompare(b, "fr", { numeric: true }))
      .map(([uv, result]) => `<span>${uv} : ${result.score}/${result.total}</span>`)
      .join("");
  } else if (els.resultBreakdown) {
    els.resultBreakdown.replaceChildren();
  }
}

function showNoMistakesLeft() {
  state.sessionMode = "revision";
  quizData = exams[activeUv].questions;
  setExamHeading(exams[activeUv].title);
  state.current = 0;
  state.answers.clear();
  state.examFeedback.clear();
  state.resultSaved = false;
  resetTimer();
  document.body.classList.toggle("exam-mode", false);
  els.quizSection.hidden = true;
  document.querySelector(".pagination-panel").hidden = true;
  els.resultSection.hidden = false;
  if (els.resultTitle) els.resultTitle.textContent = "Plus aucune erreur 🎯";
  els.finalScore.textContent = "Bien joué, tu as nettoyé toutes tes erreurs sur cette UV.";
  if (els.resultBreakdown) els.resultBreakdown.replaceChildren();
  els.restart.textContent = "Retour à la révision";
}

function advanceReviewMistake() {
  if (!isReviewMode()) return;

  const question = quizData[state.current];
  const answer = state.answers.get(state.current);
  const resolved = answer && normalize(answer) === normalize(question.correctText);

  if (resolved) {
    removeMistake(question);
    quizData.splice(state.current, 1);
    state.answers.clear();
    state.examFeedback.clear();
    if (!quizData.length) {
      showNoMistakesLeft();
      return;
    }
    if (state.current >= quizData.length) state.current = quizData.length - 1;
    renderQuestion();
    requestAnimationFrame(() => scrollToCurrentQuestion());
    return;
  }

  if (state.current >= quizData.length - 1) {
    showResults();
    return;
  }
  goTo(state.current + 1);
}

function restartQuiz() {
  if (activeUv === EXAM_MODE_KEY) {
    exams[EXAM_MODE_KEY].questions = buildExamSimulation();
    quizData = exams[EXAM_MODE_KEY].questions;
  } else if (isMiniExamMode()) {
    quizData = buildMiniExamSimulation(activeUv);
  } else if (state.sessionMode === "review-mistakes") {
    quizData = buildStoredQuestionSet(progressData.mistakes, activeUv);
  } else {
    exams[activeUv].questions = shuffleQuestions(exams[activeUv].questions);
    quizData = exams[activeUv].questions;
  }
  state.current = 0;
  state.answers.clear();
  state.examFeedback.clear();
  state.resultSaved = false;
  state.score = 0;
  resetTimer();
  els.quizSection.hidden = false;
  document.querySelector(".pagination-panel").hidden = false;
  els.resultSection.hidden = true;
  renderQuestion();
  requestAnimationFrame(() => scrollToCurrentQuestion());
}

function switchExam(uvKey) {
  if (!exams[uvKey] || (uvKey === activeUv && !isReviewMode())) return;

  activeUv = uvKey;
  state.sessionMode = uvKey === EXAM_MODE_KEY ? "full-exam" : "revision";
  if (activeUv === EXAM_MODE_KEY) {
    exams[EXAM_MODE_KEY].questions = buildExamSimulation();
  }
  quizData = exams[activeUv].questions;
  state.current = 0;
  state.answers.clear();
  state.examFeedback.clear();
  state.resultSaved = false;
  state.score = 0;
  resetTimer();

  setExamHeading(exams[activeUv].title);
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

function resetCurrentSession() {
  state.current = 0;
  state.answers.clear();
  state.examFeedback.clear();
  state.resultSaved = false;
  state.score = 0;
  resetTimer();
  els.quizSection.hidden = false;
  document.querySelector(".pagination-panel").hidden = false;
  els.resultSection.hidden = true;
  renderQuestion();
  requestAnimationFrame(() => scrollToCurrentQuestion());
}

function toggleMiniExam() {
  if (activeUv === EXAM_MODE_KEY) return;

  if (isMiniExamMode()) {
    state.sessionMode = "revision";
    quizData = exams[activeUv].questions;
    setExamHeading(exams[activeUv].title);
    resetCurrentSession();
    return;
  }

  const miniQuestions = buildMiniExamSimulation(activeUv);
  if (!miniQuestions.length) return;

  state.sessionMode = "mini-exam";
  quizData = miniQuestions;
  setExamHeading(`${exams[activeUv].title} - MINI EXAMEN`);
  resetCurrentSession();
}

function buildStoredQuestionSet(collection, uvKey) {
  return Object.values(collection)
    .filter(item => String(item.sourceUv || "").toLowerCase() === uvKey)
    .sort((a, b) => (b.lastMissedAt || b.savedAt || 0) - (a.lastMissedAt || a.savedAt || 0))
    .map(item => ({
      question: item.question,
      options: [...item.options],
      correctText: item.correctText,
      tip: item.tip || "",
      sourceUv: uvKey.toUpperCase()
    }));
}

function startStoredQuestionMode(mode) {
  if (activeUv === EXAM_MODE_KEY) return;

  if (isReviewMode()) {
    state.sessionMode = "revision";
    quizData = exams[activeUv].questions;
    setExamHeading(exams[activeUv].title);
    resetCurrentSession();
    return;
  }

  const questions = buildStoredQuestionSet(progressData.mistakes, activeUv);
  if (!questions.length) return;

  state.sessionMode = "review-mistakes";
  quizData = questions;
  setExamHeading(exams[activeUv].title, "Carnet d’erreurs");
  resetCurrentSession();
}

els.prev.addEventListener("click", () => goTo(state.current - 1));
els.pagePrev.addEventListener("click", () => goTo(state.current - 1));
els.pageNext.addEventListener("click", () => goTo(state.current + 1));
els.next.addEventListener("click", () => {
  if (isExamMode()) {
    if (!state.examFeedback.has(state.current)) return;
    advanceExamQuestion();
    return;
  }

  if (isReviewMode()) {
    advanceReviewMistake();
    return;
  }

  if (state.current === quizData.length - 1) showResults();
  else goTo(state.current + 1);
});
els.restart.addEventListener("click", restartQuiz);
if (els.miniExam) els.miniExam.addEventListener("click", toggleMiniExam);
if (els.reviewMistakes) els.reviewMistakes.addEventListener("click", () => startStoredQuestionMode("review-mistakes"));
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
  if (isExamMode()) {
    if (els.quizSection.hidden) return;
    if (state.examFeedback.has(state.current)) return;
    state.questionSecondsLeft = Math.max(0, state.questionSecondsLeft - 1);
    els.timer.textContent = `00:${String(state.questionSecondsLeft).padStart(2, "0")}`;
    if (els.questionTimer) {
      els.questionTimer.classList.toggle("danger", state.questionSecondsLeft <= 10);
    }
    if (state.questionSecondsLeft === 0) {
      expireCurrentQuestion();
    }
    return;
  }

  state.elapsedSeconds += 1;
  els.timer.textContent = formatTime(state.elapsedSeconds);
}, 1000);

els.timer.textContent = formatTime(state.elapsedSeconds);
renderProgressDashboard();
renderQuestion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeQuizApp, { once: true });
} else {
  initializeQuizApp();
}
