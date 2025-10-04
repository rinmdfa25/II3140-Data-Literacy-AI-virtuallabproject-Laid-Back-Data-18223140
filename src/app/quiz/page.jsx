"use client";
import React, { useState } from "react";

const questions = [
  {
    question: "Rin hoped that she will work in data science field. What is the main purpose of data science?",
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

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  function handleAnswer(idx) {
    setSelected(idx);
    if (currentQuestion.answers[idx].correct) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    setSelected(null);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((i) => i + 1);
    } else {
      setShowScore(true);
    }
  }

  function handleRestart() {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelected(null);
  }

  const grade = Math.round((score / questions.length) * 100);

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen flex flex-col">
      {/* Main Quiz Section */}
      <main className="flex items-center justify-center flex-1 pt-20 px-4">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-black shadow-2xl rounded-lg p-6 max-w-md w-full mb-6">
          {!showScore ? (
            <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
              <div className="text-lg font-semibold mb-4">
                {currentQuestionIndex + 1}. {currentQuestion.question}
              </div>
              <div className="space-y-2 mb-4">
                {currentQuestion.answers.map((answer, idx) => (
                  <button
                    key={idx}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      selected === idx
                        ? answer.correct
                          ? "bg-green-500 ring-4 ring-blue-500 text-white"
                          : "bg-red-500 ring-4 ring-blue-500 text-white"
                        : selected !== null && answer.correct
                        ? "bg-green-400 ring-4 ring-blue-500 text-white"
                        : "bg-slate-600 text-white hover:bg-slate-500"
                    }`}
                    disabled={selected !== null}
                    onClick={() => handleAnswer(idx)}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
              {selected !== null && (
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 rounded-lg" onClick={handleNext}>
                  {currentQuestionIndex + 1 === questions.length ? "Finish" : "Next"}
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
                  <p className="text-lg mb-4">
                    Your Score: <span>{score}</span>/<span>{questions.length}</span>
                  </p>
                  <p className="text-lg mb-4">
                    Grade: <span>{grade}</span>
                  </p>
                  {grade >= 60 ? (
                    <div>
                      <p className="text-sm text-gray-700">Congrats, you made it through the first game! Press the button below to continue your journey.</p>
                      <a href="/game2">
                        <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 rounded-lg">Continue</button>
                      </a>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm text-red-700 mb-2">You need at least 60 to pass. Please review the material and try again.</p>
                      <a href="/learn">
                        <button className="mt-2 w-full bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white py-2 rounded-lg">Learn again!</button>
                      </a>
                      <button className="mt-2 w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 rounded-lg" onClick={handleRestart}>
                        Retake Quiz
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 rounded-lg" onClick={handleRestart}>
            Restart
          </button>
        </div>
      </main>
    </div>
  );
}
