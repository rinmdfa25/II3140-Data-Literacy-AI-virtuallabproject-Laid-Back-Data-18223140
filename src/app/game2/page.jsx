"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function ProgressBar({ score }) {
  return (
    <div className="w-full bg-gray-700 rounded-full h-4 mt-2 border-2 border-slate-400">
      <div className="bg-pink-400 h-full rounded-full transition-all duration-500" style={{ width: `${score}%` }}></div>
    </div>
  );
}

export default function Game2Page() {
  const [highestScore, setHighestScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchHighestScore() {
      try {
        const response = await fetch("/api/scores/highestscore?game_type=drag-and-drop");
        if (response.ok) {
          const data = await response.json();
          setHighestScore(data.highestScore || 0);
        }
      } catch (error) {
        console.error("Error fetching highest score:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchHighestScore();
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen">
      {/* Game Section */}
      {/* Introduction to Problem */}
      <section className="game" id="game">
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-2">
          <div className="w-full md:w-1/2 flex justify-center md:justify-self-center md:pr-4 mb-4 md:mb-0">
            <img src="/assets/rin2.png" className="w-64 md:w-96" alt="Character Image" />
          </div>
          <div className="w-full md:w-1/2 text-center justify-self-center md:text-center mt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Yippie! You made it through the first game!</h1>
            <p className="text-lg md:text-xl mb-4 text-white text-center">
              Rin very happy that you help her with the basic knowledge about data literacy. Now, she's want to hands on with her dataset. Your next job is to help Rin to analyze the dataset and find out which anime is the most popular
              among users. Help Rin to make hands-on with the dataset:
            </p>
            <a href="/matching" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center">
              Start the Word Matching
            </a>
            <div className="max-w-sm mx-auto bg-slate-800/50 p-4 rounded-lg mt-6 mb-6">
              <h3 className="font-bold text-white">Your Highest Quiz Score: {isLoading ? "Loading..." : `${highestScore}%`}</h3>
              <ProgressBar score={highestScore} />
            </div>
          </div>
        </div>
      </section>
      {/* End of Game Section */}
    </div>
  );
}
