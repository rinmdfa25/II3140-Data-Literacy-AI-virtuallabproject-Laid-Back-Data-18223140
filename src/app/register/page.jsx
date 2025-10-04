import "../globals.css";

export default function RegisterPage() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen flex flex-col">
      <section className="login-section flex flex-1 flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-[70%] flex items-center justify-center bg-transparent">
          <div className="w-full h-full">
            <img src="/assets/campingground2.jpg" alt="Camping Ground" className="object-cover w-full h-full" style={{ minHeight: "100%" }} />
          </div>
        </div>
        {/* Right Side - Login Form */}
        <div className="w-full md:w-[30%] max-h-fit flex bg-sky-600 h-full mt-10 items-center justify-center">
          <div className="" id="login">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center pt-10">Register</h2>
            <p className="text-lg md:text-xl text-white mb-6 text-center">Hello New User! Please enter your credentials to create an account.</p>
            <form action="#" method="POST" className="p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="username" className="block text-white font-semibold mb-2">
                  Username
                </label>
                <input type="text" id="username" name="username" required className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" required className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Password
                </label>
                <input type="password" id="password" name="password" required className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-white font-semibold mb-2">
                  Confirm Password
                </label>
                <input type="password" id="confirm-password" name="confirm-password" required className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
              </div>
              <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors font-semibold mb-8">
                Register
              </button>
              <p className="text-center text-white mt-4 mb-2">Already have an account?</p>
              <div className="flex justify-center">
                <a href="/login">
                  <button type="button" className="bg-teal-600 w-64 text-xs justify-center text-white py-2 rounded-md hover:bg-slate-700 transition-colors font-semibold">
                    Click Here for Login!
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
