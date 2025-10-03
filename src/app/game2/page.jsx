export default function Game2Page() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen">
      {/* Game Section */}
      {/* Introduction to Problem */}
      <section className="game" id="game">
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-2">
          <div className="w-full md:w-1/2 flex justify-center md:justify-self-center md:pr-4 mb-4 md:mb-0">
            <img src="/assets/rin2.PNG" className="w-64 md:w-96" alt="Character Image" />
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
          </div>
        </div>
      </section>
      {/* End of Game Section */}
    </div>
  );
}
