export default function Game1Page() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen">
      {/* Game Section */}

      {/* Introduction to Problem */}
      <section className="game" id="game">
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-2">
          <div className="w-full md:w-1/2 flex justify-center md:justify-self-center md:pr-4 mb-4 md:mb-0">
            <img src="/assets/crunchyroll.png" className="w-64 md:w-96" alt="Character Image" />
          </div>
          <div className="w-full md:w-1/2 text-center justify-self-center md:text-center mt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Game Begins!</h1>
            <p className="text-lg md:text-xl mb-4 text-white text-center">
              Rin found a dataset of Crunchyroll. She wants to analyze the data and find out which anime is the most popular among users. But first, Rin have to know the basics knowledge about data literacy. Help Rin by answering the
              following questions based on the dataset:
            </p>
            <a href="/quiz" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center">
              Start the Quiz
            </a>
          </div>
        </div>
      </section>
      {/* End of Game Section */}
    </div>
  );
}
