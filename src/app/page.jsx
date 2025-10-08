"use client";

import React, { useEffect } from "react";
import "./globals.css";
import Carousel from "@/components/carousel";

export default function LandingPage() {
  const startpageImages = [
    { src: "/assets/datacamp.png", alt: "Data Camp" },
    { src: "/assets/data.png", alt: "Data" },
    { src: "/assets/camp.png", alt: "Camp" },
  ];

  const landingpageImages = [
    { src: "/assets/python.png", alt: "Python" },
    { src: "/assets/statistics.png", alt: "Statistics Image" },
    { src: "/assets/ai.png", alt: "AI Image" },
  ];

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 ">
      {/* Hero Section */}
      <section className="hero">
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-6">
          <div className="w-full md:w-1/2 flex justify-center md:justify-self-center md:pr-4 mb-6 md:mb-2">
            <Carousel images={startpageImages} interval={1500} />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Laid-Back Data</h1>
            <p className="text-lg md:text-xl text-white mb-6 justify-self-center">Your Gateway into the Data Literacy World!</p>
            <a href="/login" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center">
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* End of Hero Section */}

      {/* About Section */}
      <section className="content from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex items-center justify-center p-6" id="about">
        <div className=" mx-auto flex flex-col md:flex-row items-center text-center justify-end md:gap-6 w-full">
          <div className="w-full md:w-1/2 text-center md:text-center mb-4 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">Explore the Introduction of Data Science and the World of AI!</h2>
            <p className="text-lg md:text-xl text-white mt-4">Dive in into the data world without anxiety! Cause you're here to learn the basic of data while being chill and having fun!</p>
          </div>
          <div className="w-full flex transition-transform duration-500 ease-in-out md:w-1/2 flex-col items-center relative space-y-6">
            <Carousel images={landingpageImages} interval={1500} />
          </div>
        </div>
      </section>
      {/* End of About Section */}

      {/* Footer*/}
      <footer className="bg-teal-600 text-white p-4 md:p-4 mt-2">
        <h1 className="text-lg md:text-xl font-bold mb-4 text-white text-center">Get in Touch with Me</h1>
        <div className="flex justify-self-center self-center gap-4 mb-1 space-x-4" id="contact">
          <a href="https://github.com/rinmdfa25" target="_blank" className="text-white hover:opacity-80 transition-opacity">
            <img src="/assets/github.png" alt="Github Logo" className="w-12 h-12" />
          </a>
          <a href="https://x.com/rinchann25" target="_blank" className="text-white hover:opacity-80 transition-opacity">
            <img src="/assets/twitter.png" alt="Twitter Logo" className="w-12 h-12" />
          </a>
          <a href="https://www.youtube.com/@dablast9021" target="_blank" className="text-white hover:opacity-80 transition-opacity">
            <img src="/assets/youtube.png" alt="YouTube Logo" className="w-12 h-12" />
          </a>
        </div>
      </footer>
    </div>
  );
}
