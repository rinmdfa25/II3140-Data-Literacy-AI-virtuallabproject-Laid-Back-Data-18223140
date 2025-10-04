"use client";

import React from "react";

export default function LearnPage() {
  const learnImages = [
    { src: "/assets/data.png", alt: "Data" },
    { src: "/assets/camp.png", alt: "Camp" },
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

  const [current, setCurrent] = React.useState(0);
  const [fade, setFade] = React.useState("fade-in");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade("fade-out");
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % learnImages.length);
        setFade("fade-in");
        setTimeout(() => {
          setFade("");
        }, 300);
      }, 300);
    }, 1000);
    return () => clearInterval(interval);
  }, [learnImages.length]);

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen">
      {/* Introduction Section */}
      <section className="hero">
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-6">
          <div className="w-full flex md:w-1/2 flex-col items-center relative space-y-6 z-0">
            <img src={learnImages[current].src} alt={learnImages[current].alt} className={`w-48 md:w-56 relative mb-4 ${fade}`} />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">It's Time To Learn!!!</h1>
            <p className="text-lg md:text-xl text-white mb-6 justify-self-center">
              Rin found some great resources for you to learn. She wants you with her to learn the data together by watching videos together. Make sure to watch and understanding all of them before continuing the next journey
            </p>
          </div>
        </div>
      </section>
      {/* Data Literacy Introduction */}
      <section className="dataliteracy" id="dataliteracy">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Data Literacy Basics</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-2 mx-auto max-w-5xl">
          {/* Video Box 1 */}
          <VideoBox src="https://www.youtube.com/embed/yhO_t-c3yJY" title="What is Data? | Data Literacy Basics" label="What is Data?" />
          {/* Video Box 2 */}
          <VideoBox src="https://www.youtube.com/embed/zGFuj9tF33Q?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=5" title="Collect and Understand Data | Data Literacy Basics" label="Collect and Understand Data" />
          {/* Video Box 3 */}
          <VideoBox src="https://www.youtube.com/embed/YDT5ZPcMZWM?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=4" title="Visualization Data | Data Literacy Basics" label="Data Visualization" />
        </div>
      </section>
      <section className="dataliteracy" id="dataliteracy">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-2 mx-auto max-w-5xl">
          {/* Video Box 4 */}
          <VideoBox src="https://www.youtube.com/embed/nd_oOOXeN3A?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=3" title="Data Misconceptions | Data Literacy Basics" label="Data Misconceptions" />
          {/* Video Box 5 */}
          <VideoBox src="https://www.youtube.com/embed/HQ4dboRW7tM?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=14" title="Data Mistakes | Data Literacy Basics" label="Data Mistakes" />
          {/* Video Box 6 */}
          <VideoBox src="https://www.youtube.com/embed/oYcG5OxkMZU?list=PLID58IQe16nE-1980HOGDWsvf0skE2jvS&index=15" title="Data Context | Data Literacy Basics" label="Data Context" />
        </div>
      </section>
      {/* Tools */}
      <section className="tools" id="tools" style={{ marginTop: "3rem" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Data Literacy Tools</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-2 mx-auto max-w-5xl">
          {/* Video Box 7 */}
          <VideoBox src="https://www.youtube.com/embed/4c_mwnYdbhQ" title="Introduction to NumPy | Data Literacy Basics" label="Introduction to NumPy" />
          {/* Video Box 8 */}
          <VideoBox src="https://www.youtube.com/embed/EhYC02PD_gc" title="Introduction to Pandas | Data Literacy Basics" label="Introduction to Pandas" />
          {/* Video Box 9 */}
          <VideoBox src="https://www.youtube.com/embed/OZOOLe2imFo" title="Introduction to Matplotlib | Data Literacy Basics" label="Introduction to Matplotlib" />
          {/* Video Box 10 */}
          <VideoBox src="https://www.youtube.com/embed/ooqXQ37XHMM" title="Introduction to Seaborn | Data Literacy Basics" label="Introduction to Seaborn" />
        </div>
      </section>
      {/* AI Section */}
      <section className="ai" id="ai" style={{ marginTop: "3rem" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Artificial Intelligence Basics</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-2 mx-auto max-w-5xl">
          {/* Video Box 11 */}
          <VideoBox src="https://www.youtube.com/embed/a0_lo_GDcFw?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b&index=2" title="What is A.I? | Data Literacy Basics" label="What is A.I?" />
          {/* Video Box 12 */}
          <VideoBox src="https://www.youtube.com/embed/fXizBc03D7E" title="A.I. Agents | Data Literacy Basics" label="A.I. Agents" />
          {/* Video Box 13 */}
          <VideoBox src="https://www.youtube.com/embed/cS-198wtfj0" title="BFS & DFS Algorithms | Data Literacy Basics" label="BFS & DFS Algorithms" />
        </div>
      </section>
      <section className="ai" id="ai">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-2 mx-auto max-w-5xl">
          {/* Video Box 14 */}
          <VideoBox src="https://www.youtube.com/embed/4qVRBYAdLAo?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b&index=3" title="Supervised Learning | Data Literacy Basics" label="Supervised Learning" />
          {/* Video Box 15 */}
          <VideoBox src="https://www.youtube.com/embed/JnnaDNNb380?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b&index=7" title="Unsupervised Learning | Data Literacy Basics" label="Unsupervised Learning" />
          {/* Video Box 16 */}
          <VideoBox src="https://www.youtube.com/embed/nIgIv4IfJ6s?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b&index=10" title="Reinforcement Learning | Data Literacy Basics" label="Reinforcement Learning" />
        </div>
      </section>
      {/* Cheatsheets Section */}
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

function VideoBox({ src, title, label }) {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 text-black shadow-2xl rounded-lg p-4 max-w-xs w-full flex-nowrap mb-6 mx-2">
      <div className="bg-white text-gray-900 p-3 rounded-lg shadow-md">
        <iframe className="w-full rounded-lg mb-2" height="160" src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h2 className="text-lg md:text-xl text-center font-bold text-black">{label}</h2>
      </div>
    </div>
  );
}
