import React from "react";

export default function EndPage() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen">
      {/* Section */}
      <section className="end" id="end">
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-2">
          <div className="w-full md:w-1/2 flex justify-center md:justify-self-center md:pr-4 mb-4 md:mb-0">
            <img src="./assets/rin3.png" className="w-64 md:w-96" alt="Character Image" />
          </div>
          <div className="w-full md:w-1/2 text-center justify-self-center md:text-center mt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Wow! Congratulations for Completing All the Challenges!!!</h1>
            <p className="text-lg md:text-xl mb-4 text-white text-center">
              Rin very thankful that you help her to learn about data literacy. Now, she's can analyze the Crunchyroll dataset that she had been waiting it for long. She hopes that you can continue to learn more about data literacy and help
              others to learn about data too. Rin wants you to learn more with the button below!
            </p>
            <a href="https://www.kaggle.com/" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center">
              Learn More in Kaggle!!!
            </a>
            <a href="https://www.datacamp.com/" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center mt-4">
              Learn More in DataCamp!!!
            </a>
            <a href="/home" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center mt-4">
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
      {/* End of Section */}
    </div>
  );
}
