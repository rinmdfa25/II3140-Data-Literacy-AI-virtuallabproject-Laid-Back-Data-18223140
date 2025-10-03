export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen">
      {/* Hero Section */}
      <section className="introduction" id="introduction">
        <div className="from-green-400 to-teal-800 bg-gradient-to-r min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-6">
          <div className="w-full md:w-1/2 flex justify-center md:justify-self-center md:pr-4 mb-6 md:mb-0">
            <img src="./assets/rin.png" className="w-48 md:w-80" alt="Character Image" />
          </div>
          <div className="w-full md:w-1/2 text-center justify-self-auto md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center md:text-start">Meet Our Character...</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center md:text-start">Rin the Camper!</h2>
            <p className="text-lg md:text-xl mb-4 text-white text-center md:text-start">
              Rin, a camper who wanted to learn data. She just a student who wanted to learn something new. She's know about camping, but she didn't know about data. That's why she needs your help to embark this journey! She's need you to
              learn about data before you teach her on the button right below!
            </p>
            <div className="mt-6 mb-8">
              <a href="/learn" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center">
                Help Rin!
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End of Hero Section */}
    </div>
  );
}
