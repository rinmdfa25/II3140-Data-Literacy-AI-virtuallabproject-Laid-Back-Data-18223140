"use client";

import React, { useEffect } from "react";
import Carousel from "@/components/carousel.jsx";

export default function LearnPage() {
  const learnImages = [
    { src: "/assets/datamining.png", alt: "Data Mining" },
    { src: "/assets/machinelearning.png", alt: "Machine Learning" },
    { src: "/assets/visualizationdata.png", alt: "Data Visualization" },
    { src: "/assets/python.png", alt: "Python" },
    { src: "/assets/sql.png", alt: "SQL" },
    { src: "/assets/numpy.png", alt: "NumPy" },
    { src: "/assets/pandas.png", alt: "Pandas" },
    { src: "/assets/matplotlib.svg", alt: "Matplotlib" },
    { src: "/assets/seaborn.svg", alt: "Seaborn" },
  ];

  const videos = [
    { id: "data-intro", src: "https://www.youtube.com/embed/yhO_t-c3yJY", title: "What is Data? | Data Literacy Basics", label: "What is Data?" },
    { id: "data-collect", src: "https://www.youtube.com/embed/zGFuj9tF33Q?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=5", title: "Collect and Understand Data | Data Literacy Basics", label: "Collect and Understand Data" },
    { id: "data-visual", src: "https://www.youtube.com/embed/YDT5ZPcMZWM?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=4", title: "Visualization Data | Data Literacy Basics", label: "Visualization Data" },
    { id: "data-misconcept", src: "https://www.youtube.com/embed/nd_oOOXeN3A?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=3", title: "Data Misconceptions | Data Literacy Basics", label: "Data Misconceptions" },
    { id: "data-mistakes", src: "https://www.youtube.com/embed/HQ4dboRW7tM?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=14", title: "Data Mistakes | Data Literacy Basics", label: "Data Mistakes" },
    { id: "data-context", src: "https://www.youtube.com/embed/oYcG5OxkMZU?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=15", title: "Data Content | Data Literacy Basics", label: "Data Context" },
    { id: "pandas", src: "https://www.youtube.com/embed/4c_mwnYdbhQ", title: "Introduction to Pandas | Data Literacy Basics", label: "Pandas" },
    { id: "numpy", src: "https://www.youtube.com/embed/EhYC02PD_gc", title: "Introduction to NumPy | Data Literacy Basics", label: "NumPy" },
    { id: "matplotlib", src: "https://www.youtube.com/embed/OZOOLe2imFo", title: "Introduction to Matplotlib | Data Literacy Basics", label: "Matplotlib" },
    { id: "seaborn", src: "https://www.youtube.com/embed/ooqXQ37XHMM", title: "Introduction to Seaborn | Data Literacy Basics", label: "Seaborn" },
    { id: "ai-intro", src: "https://www.youtube.com/embed/a0_lo_GDcFw?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b&index=2", title: "What is A.I? | Data Literacy Basics", label: "What is A.I?" },
    { id: "ai-agents", src: "https://www.youtube.com/embed/fXizBc03D7E", title: "What is A.I. Agents | Data Literacy Basics", label: "What is A.I. Agents" },
    { id: "ai-bfs-dfs", src: "https://www.youtube.com/embed/cS-198wtfj0", title: "BFS and DFS Algorithm | Data Literacy Basics", label: "BFS & DFS Algorithms" },
    { id: "ai-kbs", src: "https://www.youtube.com/embed/_Fn5HYfK858", title: "Knowledge-Based Systems Approach | Data Literacy Basics", label: "Knowledge-Based Systems" },
    { id: "ai-rbs", src: "https://www.youtube.com/embed/ZjG5wwV_2U4", title: "Rule-Based Systems Approach | Data Literacy Basics", label: "Rule-Based Systems" },
    { id: "ai-supervised", src: "https://www.youtube.com/embed/4qVRBYAdLAo?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b&index=3", title: "Supervised Learning | Data Literacy Basics", label: "Supervised Learning" },
    { id: "ai-unsupervised", src: "https://www.youtube.com/embed/JnnaDNNb380?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b&index=7", title: "Unsupervised Learning | Data Literacy Basics", label: "Unsupervised Learning" },
    { id: "ai-reinforcement", src: "https://www.youtube.com/embed/nIgIv4IfJ6s?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b&index=10", title: "Reinforcement Learning | Data Literacy Basics", label: "Reinforcement Learning" },
  ];

  const [completedVideos, setCompletedVideos] = React.useState(new Set());

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch("/api/progress");
        if (response.ok) {
          const data = await response.json();
          setCompletedVideos(new Set(data.completedVideos));
        }
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      }
    };
    fetchProgress();
  }, []);

  const handleMarkAsWatched = async (videoId) => {
    if (completedVideos.has(videoId)) return;

    const newCompletedVideos = new Set(completedVideos);
    newCompletedVideos.add(videoId);
    setCompletedVideos(newCompletedVideos);

    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ video_id: videoId }),
      });
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen">
      {/* Introduction Section */}
      <section className="hero">
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-6">
          <div className="w-full flex md:w-1/2 flex-col items-center relative space-y-6 z-0">
            <Carousel images={learnImages} interval={1500} />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">It's Time To Learn!!!</h1>
            <p className="text-lg md:text-xl text-white mb-6 justify-self-center">
              Rin found some great resources for you to learn. She wants you with her to learn the data together by watching videos together. Make sure to watch and understanding all of them before continuing the next journey
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Learning Section</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">Your Learning Progress...</h2>
        <div className="max-w-4xl mx-auto">
          <ProgressBar completed={completedVideos.size} total={videos.length} />
        </div>
      </section>

      {/* Data Literacy Introduction */}
      <section className="videos" id="videos" style={{ marginTop: "3rem" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-5xl">
          {videos.map((video) => (
            <VideoBox key={video.id} videoId={video.id} src={video.src} title={video.title} label={video.label} isCompleted={completedVideos.has(video.id)} onComplete={handleMarkAsWatched} />
          ))}
        </div>
      </section>

      <section className="cheatsheets" id="cheatsheets" style={{ marginTop: "3rem" }}>
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-6">
          <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
            <a href="https://numpy.org/doc/stable/" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center" target="_blank" rel="noopener noreferrer">
              NumPy
            </a>
            <a href="https://pandas.pydata.org/docs/" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center" target="_blank" rel="noopener noreferrer">
              Pandas
            </a>
            <a
              href="https://matplotlib.org/stable/contents.html"
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matplotlib
            </a>
            <a href="https://seaborn.pydata.org/" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center" target="_blank" rel="noopener noreferrer">
              Seaborn
            </a>
          </div>
          <div className="w-full md:w-1/2 text-center justify-self-auto md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-start">Hooray! You've already watched the videos!</h1>
            <p className="text-lg mb-8 md:text-lg text-white justify-normal">
              Now...Rin found something to help your knowledge. She found tools documentation to help you memorize and understand what you have been through. For more information, you can learn more from pandas and matplotlib documentation.
              Using the button on the left side!
            </p>
          </div>
        </div>
      </section>
      {/* Game Time */}
      <section className="game-time" id="game-time" style={{ marginTop: "3rem" }}>
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-6">
          <div className="w-full md:w-1/2 text-center items-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Game Time!</h1>
            <p className="text-lg md:text-xl mb-4 text-white text-center">
              After learning the basics of data literacy and A.I., now it's time to help Rin by playing some games that will challenge your understanding of data concepts and skills. Press the button below for some fun!!!
            </p>
            <a href="/game1" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center">
              Play The Game
            </a>
          </div>
        </div>
      </section>
      {/* Close main container div */}
    </div>
  );
}

function VideoBox({ src, title, label, videoId, isCompleted, onComplete }) {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 text-black shadow-2xl rounded-lg p-4 max-w-xs w-full mb-6 mx-2">
      <div className="bg-white text-gray-900 p-3 rounded-lg shadow-md">
        <iframe className="w-full rounded-lg mb-2" height="160" src={src} title={title} allowFullScreen></iframe>
        <h2 className="text-lg md:text-xl text-center font-bold text-black">{label}</h2>
        <div className="flex justify-center items-center mt-4 h-8">
          {isCompleted ? (
            <span className="text-green-500 font-bold">✓ Watched</span>
          ) : (
            <button onClick={() => onComplete(videoId)} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">
              Mark as Watched
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ completed, total }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="w-full bg-gray-700 rounded-full h-6 border-2 border-slate-400 relative">
      <div className="bg-cyan-300 h-full rounded-full transition-all duration-500 flex items-center justify-center text-sm font-bold text-gray-700" style={{ width: `${percentage}%` }}>
        {percentage > 10 && `${percentage}%`}
      </div>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700 mix-blend-difference">
        {completed} / {total} Videos Watched
      </span>
    </div>
  );
}
