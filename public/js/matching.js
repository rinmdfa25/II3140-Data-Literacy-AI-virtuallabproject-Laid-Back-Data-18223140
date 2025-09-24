const questions = [
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "./assets/game1.png",
    answers: [
      { text: "info", correct: true, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "./assets/game2.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: true, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "./assets/game3.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: true, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "./assets/game4.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: true, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "./assets/game5.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: true, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "./assets/game6.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: true, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "./assets/game7.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: true, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used for: ",
    image: "./assets/game8.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: true, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used for: ",
    image: "./assets/game9.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: true, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: false, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used for: ",
    image: "./assets/game10.png",
    answers: [
      { text: "info", correct: false, draggable: true },
      { text: "hist", correct: false, draggable: true },
      { text: "describe", correct: false, draggable: true },
      { text: "pie", correct: true, draggable: true },
      { text: "value counts", correct: false, draggable: true },
      { text: "line", correct: false, draggable: true },
      { text: "corr", correct: false, draggable: true },
      { text: "scatter", correct: false, draggable: true },
      { text: "loc", correct: false, draggable: true },
      { text: "isnull", correct: false, draggable: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const imageContainer = document.getElementById("image-container");
const answerButtonsContainer = document.getElementById("answer-buttons");
const questionContainer = document.getElementById("question-container");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const quizContent = document.getElementById("quiz-content") || document.getElementById("question-container");
const totalQuestionsElement = document.getElementById("total-questions");

let dropZone = document.createElement("div");
dropZone.id = "drop-zone";
dropZone.className = "bg-grey-500 border-2 border-dashed border-gray-400 rounded-lg min-h-[48px] flex items-center justify-center mb-4 bg-gray-50";
if (feedbackElement) {
  questionContainer.insertBefore(dropZone, feedbackElement);
} else {
  questionContainer.appendChild(dropZone);
}

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];
  if (!dropZone.querySelector(".bg-pink-200")) {
    dropZone.innerHTML = '<span class="text-gray-400 select-none "></span>';
  }
  dropZone.style.minHeight = "64px";
  dropZone.style.minWidth = "128px";
  dropZone.style.display = "flex";
  dropZone.style.alignItems = "center";
  dropZone.style.justifyContent = "center";
  dropZone.style.marginBottom = "1rem";
  dropZone.classList.add("bg-blue-500", "border-2", "border-dashed", "border-gray-400", "rounded-lg");

  answerButtonsContainer.classList.add("flex", "flex-col", "gap-2");
  answerButtonsContainer.style.display = "flex";
  questionElement.textContent = currentQuestion.question;

  const img = document.createElement("img");
  img.src = currentQuestion.image;
  img.alt = "Question Image";
  img.className = "max-w-xs rounded-lg shadow-md";
  imageContainer.appendChild(img);

  currentQuestion.answers.forEach((answer, index) => {
    if (!dropZone.querySelector(`#answer-${index}`)) {
      const answerWrapper = document.createElement("div");
      answerWrapper.className = "answer-wrapper mb-2 flex justify-center";
      answerWrapper.style.width = "100%";

      const answerDiv = document.createElement("div");
      answerDiv.id = "answer-" + index;
      answerDiv.textContent = answer.text;
      answerDiv.draggable = true;
      answerDiv.dataset.correct = answer.correct;
      answerDiv.className = "bg-pink-200 text-pink-800 font-semibold p-3 px-5 rounded-full cursor-grab transition-all gap-2 flex items-center border-2 border-dashed border-gray-400";
      answerDiv.classList.remove("border-green-500", "border-red-500", "border-green-400", "border-2", "border-dashed", "border-gray-400");
      answerDiv.style.marginBottom = "0.5rem";

      answerDiv.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", answerDiv.id);
      });

      answerWrapper.appendChild(answerDiv);
      answerButtonsContainer.appendChild(answerWrapper);
    }
  });
}

function resetState() {
  questionElement.textContent = "";
  imageContainer.innerHTML = "";
  answerButtonsContainer.innerHTML = "";
  feedbackElement.textContent = "";
  if (dropZone) {
    dropZone.classList.remove("border-green-500", "border-red-500", "border-green-400");
    dropZone.classList.add("border-2", "border-dashed", "border-gray-400");
  }
  dropZone.classList.remove("border-green-500", "border-red-500", "border-green-400");

  dropZone.innerHTML = "";
  dropZone.classList.remove("border-green-500", "border-red-500", "border-green-400");
  dropZone.classList.add("border-2", "border-dashed", "border-gray-400");

  dropZone.classList.remove("border-green-500", "border-red-500", "border-green-400");
}

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("border-green-400");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("border-green-400");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("border-green-400");

  if (dropZone.querySelector(".bg-pink-200")) {
    return;
  }

  const draggedElementId = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(draggedElementId);

  if (draggedElement) {
    if (draggedElement.parentNode) {
      draggedElement.parentNode.removeChild(draggedElement);
    }
    dropZone.appendChild(draggedElement);
    checkAnswer(draggedElement);
  }
});

function checkAnswer(droppedElement) {
  const isCorrect = droppedElement.dataset.correct === "true";

  if (isCorrect) {
    score++;
    feedbackElement.textContent = "Yeay! You're right!";
    feedbackElement.className = "text-xl font-bold h-8 mb-4 text-green-500";
    dropZone.classList.add("border-green-500");
    const rightAnswerElem = document.getElementById("right-answer");
    if (rightAnswerElem) {
      rightAnswerElem.textContent = "";
    }
  } else {
    feedbackElement.textContent = "Nooo! You're almost right!";
    feedbackElement.className = "text-xl font-bold h-8 mb-4 text-red-500";
    dropZone.classList.add("border-red-500");
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find((a) => a.correct);
    if (correctAnswer) {
      const rightAnswerElem = document.getElementById("right-answer");
      if (rightAnswerElem) {
        rightAnswerElem.textContent = `The correct answer is: ${correctAnswer.text}`;
        nextButton.addEventListener("click", function hideRightAnswer() {
          rightAnswerElem.textContent = "";
          nextButton.removeEventListener("click", hideRightAnswer);
        });
      }
    }
  }

  document.querySelectorAll('[draggable="true"]').forEach((el) => (el.draggable = false));
  nextButton.classList.remove("hidden");
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.classList.add("hidden");
    questionContainer.classList.remove("border-green-500", "border-red-500");
  } else {
    const grade = Math.round((score / questions.length) * 100);
    alert(`Quiz completed! Your score: (${grade}%)`);
    window.location.href = "end.html";
  }
}

function handleRestartButton() {
  startQuiz();
}

nextButton.addEventListener("click", handleNextButton);
if (restartButton) {
  restartButton.addEventListener("click", handleRestartButton);
}
startQuiz();
if (restartButton) {
  restartButton.addEventListener("click", () => {
    restartButton.classList.add("hidden");
    nextButton.classList.add("hidden");
    scoreContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    startQuiz();
  });
}
startQuiz();
