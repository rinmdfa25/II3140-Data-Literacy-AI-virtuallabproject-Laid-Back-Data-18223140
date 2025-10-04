"use client";
import React from "react";
import { useState, useRef } from "react";

const questions = [
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "/assets/game1.png",
    answers: [
      { text: "info", correct: true },
      { text: "hist", correct: false },
      { text: "describe", correct: false },
      { text: "pie", correct: false },
      { text: "value counts", correct: false },
      { text: "line", correct: false },
      { text: "corr", correct: false },
      { text: "scatter", correct: false },
      { text: "loc", correct: false },
      { text: "isnull", correct: false },
    ],
  },
  {
    question: "Rin want to see this output. What the function is used: ",
    image: "/assets/game2.png",
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
    question: "Rin want to see this output. What the function is use: ",
    image: "/assets/game3.png",
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
    question: "Rin want to see this output. What the function is use: ",
    image: "/assets/game4.png",
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
    question: "Rin want to see this output. What the function is use: ",
    image: "/assets/game5.png",
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
    image: "/assets/game6.png",
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
    image: "/assets/game7.png",
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
    question: "Rin want to see this output. What the function is used: ",
    image: "/assets/game8.png",
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
    question: "Rin want to see this output. What the function is used: ",
    image: "/assets/game9.png",
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
    question: "Rin want to see this output. What the function is used: ",
    image: "/assets/game10.png",
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

function splitAnswers(answers) {
  return [answers.slice(0, 5), answers.slice(5)];
}

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [dropped, setDropped] = useState(null);
  const [showRightAnswer, setShowRightAnswer] = useState("");
  const [restartKey, setRestartKey] = useState(0);

  const dropZoneRef = useRef(null);

  const currentQuestion = questions[current];

  function handleDragStart(e, idx) {
    e.dataTransfer.setData("answerIdx", idx);
  }

  function handleDrop(e) {
    e.preventDefault();
    if (dropped !== null) return;
    const idx = parseInt(e.dataTransfer.getData("answerIdx"), 10);
    setDropped(idx);

    const answer = currentQuestion.answers[idx];
    if (answer.correct) {
      setScore((s) => s + 1);
      setFeedback("Yeay! You're right!");
      setShowRightAnswer("");
    } else {
      setFeedback("Nooo! You're almost right!");
      const correct = currentQuestion.answers.find((a) => a.correct);
      setShowRightAnswer(`The correct answer is: ${correct.text}`);
    }
    setShowNext(true);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setFeedback("");
      setShowNext(false);
      setDropped(null);
      setShowRightAnswer("");
    } else {
      alert(`Quiz completed! Your score: (${Math.round((score / questions.length) * 100)}%)`);
      document.location.href = "/end";
    }
  }

  function handleRestart() {
    setCurrent(0);
    setScore(0);
    setFeedback("");
    setShowNext(false);
    setDropped(null);
    setShowRightAnswer("");
    setRestartKey((k) => k + 1);
  }

  const [left, right] = splitAnswers(currentQuestion.answers);

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen" key={restartKey}>
      {/* Game Section*/}
      <section>
        <div className="flex items-center justify-center min-h-screen pt-20 px-4 gap-4">
          <div className="flex flex-row space-x-8 w-full max-w-4xl justify-center">
            <div className="bg-gradient-to-r from-blue-400 to-blue-700 text-black shadow-2xl rounded-lg p-6 max-w-md w-full mb-6 flex items-center justify-center">
              <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full h-full border-2 border-transparent transition-all">
                <div className="text-lg font-semibold mb-4">{currentQuestion.question}</div>
                <div className="justify-center place-items-center mb-4">
                  <img src={currentQuestion.image} alt="Question" className="max-w-xs rounded-lg shadow-md" />
                </div>
                <div
                  ref={dropZoneRef}
                  className={`bg-white border-2 border-dashed border-black rounded-lg min-h-[64px] min-w-[128px] flex items-center justify-center mb-4 ${
                    dropped !== null ? (currentQuestion.answers[dropped].correct ? "border-green-500" : "border-red-500") : ""
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  {dropped !== null ? (
                    <div className="bg-pink-200 text-pink-800 font-semibold p-3 px-5 rounded-full cursor-grab transition-all gap-2 flex items-center border-2 border-dashed border-gray-400" draggable={false}>
                      {currentQuestion.answers[dropped].text}
                    </div>
                  ) : (
                    <span className="text-gray-400 select-none">Drop your answer here</span>
                  )}
                </div>
                <div className={` text-xl font-bold h-8 mb-4 ${feedback.includes("Yeay") ? "text-green-500" : feedback ? "text-red-500" : ""}`}>{feedback}</div>
                <div className="text-lg font-semibold mb-4 text-green-700">{showRightAnswer}</div>
                <button className={`bg-teal-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-teal-700 transition-colors ${showNext ? "" : "hidden"}`} onClick={handleNext}>
                  Next
                </button>
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 rounded-lg" onClick={handleRestart}>
                  Restart
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-8 w-full max-w-4xl justify-center">
            <div className="bg-gradient-to-r from-pink-300 to-pink-500 text-black shadow-2xl rounded-lg p-6 max-w-md w-full mb-6 flex items-center justify-center">
              <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-wrap gap-4 w-full">
                  <div className="flex flex-row w-full">
                    <div className="flex flex-col gap-2 w-1/2 pr-2">
                      {left.map((answer, idx) => {
                        const answerIdx = idx;
                        return (
                          <div key={answer.text} className="answer-wrapper mb-2 flex justify-center" style={{ width: "100%" }}>
                            <div
                              className="bg-pink-200 text-pink-800 font-semibold p-3 px-5 rounded-full cursor-grab transition-all gap-2 flex items-center border-2 border-dashed border-gray-400"
                              draggable={dropped === null}
                              onDragStart={(e) => handleDragStart(e, answerIdx)}
                              style={{ marginBottom: "0.5rem", opacity: dropped === answerIdx ? 0.5 : 1 }}
                            >
                              {answer.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-2 w-1/2 pl-2" style={{ marginLeft: "2rem" }}>
                      {right.map((answer, idx) => {
                        const answerIdx = idx + 5;
                        return (
                          <div key={answer.text} className="answer-wrapper mb-2 flex justify-center" style={{ width: "100%" }}>
                            <div
                              className="bg-pink-200 text-pink-800 font-semibold p-3 px-5 rounded-full cursor-grab transition-all gap-2 flex items-center border-2 border-dashed border-gray-400"
                              draggable={dropped === null}
                              onDragStart={(e) => handleDragStart(e, answerIdx)}
                              style={{ marginBottom: "0.5rem", opacity: dropped === answerIdx ? 0.5 : 1 }}
                            >
                              {answer.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Game Section */}
    </div>
  );
}
