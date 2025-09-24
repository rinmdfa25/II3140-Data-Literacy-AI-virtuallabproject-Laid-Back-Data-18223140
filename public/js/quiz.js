const questions = [
  {
    question: "Rin hoped that she will work in data science field. What is the main purpose of data science?",
    options: ["To make sense of data", "To build a data model", "To collect data", "To visualize data"],
    answers: [
      { text: "To build a data model", correct: false },
      { text: "To collect data", correct: false },
      { text: "To visualize data", correct: false },
      { text: "To make sense of data", correct: true },
    ],
  },
  {
    question: "Rin is interested in a field that combines computer science and statistics to analyze and interpret complex data. What field is it?",
    options: ["Deep learning", "Natural Language Processing", "Machine Learning", "Artificial Intelligence"],
    answers: [
      { text: "Deep learning", correct: false },
      { text: "Natural Language Processing", correct: false },
      { text: "Machine Learning", correct: true },
      { text: "Artificial Intelligence", correct: false },
    ],
  },
  {
    question: "Rin has a dataset in CSV format. What function that she should use to read the dataset?",
    options: ["pd.read_csv()", "pd.read_excel()", "pd.read_json()", "pd.read_sql()"],
    answers: [
      { text: "pd.read_csv()", correct: true },
      { text: "pd.read_excel()", correct: false },
      { text: "pd.read_json()", correct: false },
      { text: "pd.read_sql()", correct: false },
    ],
  },
  {
    question: "Rin wanted to read the dataset, but she confused what module that she wanted to use. What module that she should use?",
    options: ["Matplotlib", "Pandas", "Scikit-Learn", "Numpy"],
    answers: [
      { text: "Matplotlib", correct: false },
      { text: "Pandas", correct: true },
      { text: "Scikit-Learn", correct: false },
      { text: "Numpy", correct: false },
    ],
  },
  {
    question: "Rin wants to see the first 5 rows of the dataset. What function that she should use?",
    options: ["head()", "tail()", "sample()", "value_counts()"],
    answers: [
      { text: "head()", correct: true },
      { text: "tail()", correct: false },
      { text: "sample()", correct: false },
      { text: "value_counts()", correct: false },
    ],
  },
  {
    question: "Rin wants to create a bar chart to visualize the number of users for each anime. What function that she should use?",
    options: ["plt.plot()", "plt.bar()", "plt.hist()", "plt.scatter()"],
    answers: [
      { text: "plt.plot()", correct: false },
      { text: "plt.hist()", correct: false },
      { text: "plt.bar()", correct: true },
      { text: "plt.scatter()", correct: false },
    ],
  },
  {
    question: "Rin wants to filter the dataset to only include anime with more than 1 million users. What function that she should use?",
    options: ["groupby()", "filter()", "loc[]", "sort_values()"],
    answers: [
      { text: "loc[]", correct: true },
      { text: "groupby()", correct: false },
      { text: "filter()", correct: false },
      { text: "sort_values()", correct: false },
    ],
  },
  {
    question: "Rin wants to save her visualization as an image file. What function that she should use?",
    options: ["plt.show()", "plt.savefig()", "plt.close()", "plt.clf()"],
    answers: [
      { text: "plt.show()", correct: false },
      { text: "plt.savefig()", correct: true },
      { text: "plt.close()", correct: false },
      { text: "plt.clf()", correct: false },
    ],
  },
  {
    question: "Rin wants to calculate the average number of users for all anime in the dataset. What function that she should use?",
    options: ["mean()", "sum()", "median()", "mode()"],
    answers: [
      { text: "sum()", correct: false },
      { text: "median()", correct: false },
      { text: "mean()", correct: true },
      { text: "mode()", correct: false },
    ],
  },
  {
    question: "Rin wants to show her visualization in a Jupyter Notebook. What module that she should use?",
    options: ["Keras", "Plotly", "Matplotlib", "Bokeh"],
    answers: [
      { text: "Keras", correct: false },
      { text: "Plotly", correct: false },
      { text: "Matplotlib", correct: true },
      { text: "Bokeh", correct: false },
    ],
  },
  {
    question: "Rin wants to group the dataset by genre and calculate the total number of users for each genre. What function that she should use?",
    options: ["groupby()", "filter()", "loc[]", "sort_values()"],
    answers: [
      { text: "filter()", correct: false },
      { text: "loc[]", correct: false },
      { text: "sort_values()", correct: false },
      { text: "groupby()", correct: true },
    ],
  },
  {
    question: "Rin spotted of a column of rating in the dataset. What type of data that the column is?",
    options: ["Categorical Data", "Numerical Data", "Ordinal Data", "Time Series Data"],
    answers: [
      { text: "Categorical Data", correct: false },
      { text: "Numerical Data", correct: true },
      { text: "Ordinal Data", correct: false },
      { text: "Time Series Data", correct: false },
    ],
  },
  {
    question: "Rin wants to look of the summary statistics of the dataset. What function that she should use?",
    options: ["info()", "describe()", "summary()", "stats()"],
    answers: [
      { text: "info()", correct: false },
      { text: "describe()", correct: true },
      { text: "summary()", correct: false },
      { text: "stats()", correct: false },
    ],
  },
  {
    question: "Rin wants to look the data types of each column in the dataset. What function that she should use?",
    options: ["info()", "dtypes", "types()", "data_types()"],
    answers: [
      { text: "info()", correct: false },
      { text: "types()", correct: false },
      { text: "dtypes", correct: true },
      { text: "data_types()", correct: false },
    ],
  },
  {
    question: "Rin wants to look the all information each atributes of the dataset. What function that she should use?",
    options: ["info()", "count()", "non_null()", "duplicates()"],
    answers: [
      { text: "count()", correct: false },
      { text: "non_null()", correct: false },
      { text: "duplicates()", correct: false },
      { text: "info()", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizContent = document.getElementById("quiz-content");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hidden");
  quizContent.classList.remove("hidden");
  nextButton.innerHTML = "Next";
  nextButton.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "w-full p-4 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors text-left";
    button.innerHTML = answer.text;
    button.addEventListener("click", function () {
      Array.from(answerButtons.children).forEach((btn) => {
        btn.classList.remove("selected-answer", "answered", "bg-green-200");
      });
      button.classList.add("answered", "bg-green-200");
      button.classList.add("selected-answer");
    });
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }

  Array.from(answerButtons.children).forEach((btn) => {
    btn.classList.remove("bg-green-500", "bg-red-500", "ring-4", "ring-blue-500", "selected-answer");
    btn.classList.add("bg-slate-600");
    btn.disabled = false;
  });
  questionElement.classList.remove("answered");
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.remove("bg-slate-600");
    selectedBtn.classList.add("bg-green-500");
    score++;
  } else {
    selectedBtn.classList.remove("bg-slate-600");
    selectedBtn.classList.add("bg-red-500");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button === selectedBtn) {
      button.classList.add("ring-4", "ring-blue-500");
    }
    if (button.dataset.correct === "true") {
      button.classList.remove("bg-slate-600");
      if (button !== selectedBtn) {
        button.classList.add("bg-green-500");
      }
    }
    button.disabled = true;
  });
  nextButton.classList.remove("hidden");
}

function showScore() {
  resetState();
  quizContent.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  updateScoreUI(score, questions.length);
  nextButton.innerHTML = "Finish";
  nextButton.classList.add("hidden");
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function handleRestartButton() {
  startQuiz();
}

function updateScoreUI(score, total) {
  document.getElementById("score").textContent = score;
  document.getElementById("total-questions").textContent = total;
  const grade = Math.round((score / total) * 100);
  document.getElementById("grade").textContent = grade;
  document.getElementById("score-container").classList.remove("hidden");
  if (grade >= 60) {
    document.getElementById("pass-actions").classList.remove("hidden");
    document.getElementById("fail-actions").classList.add("hidden");
  } else {
    document.getElementById("fail-actions").classList.remove("hidden");
    document.getElementById("pass-actions").classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const retryBtn = document.getElementById("retry-btn");
  if (retryBtn) {
    retryBtn.onclick = function () {
      location.reload();
    };
  }
  const learnBtn = document.getElementById("learn-btn");
  if (learnBtn) {
    learnBtn.onclick = function () {
      alert("Learn bar opened! (implement your own logic)");
    };
  }
  const continueBtn = document.getElementById("continue-btn");
  if (continueBtn) {
    continueBtn.onclick = function () {
      window.location.href = "nextgame.html";
    };
  }
});

nextButton.addEventListener("click", handleNextButton);
restartButton.addEventListener("click", handleRestartButton);

startQuiz();
