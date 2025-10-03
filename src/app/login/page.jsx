"use client";
import "../globals.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "datalaidback" && password === "laiddataback") {
      alert("Login successful!");
      router.push("/home");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen flex flex-col">
      <section className="login-section flex flex-1 flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-[70%] flex items-center justify-center bg-transparent">
          <div className="w-full h-full">
            <img src="./assets/campingground.jpg" alt="Camping Ground" className="object-cover w-full h-full" style={{ minHeight: "100%" }} />
          </div>
        </div>
        {/* Right Side - Login Form */}
        <div className="w-full md:w-[30%] max-h-fit container mx-auto bg-sky-600 h-full mt-10 items-center justify-center">
          <div className="mt-20" id="login">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center pt-10">Login</h2>
            <p className="text-lg md:text-xl text-white mb-6 text-center">Welcome back! Please enter your credentials to access your account.</p>
            <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="username" className="block text-white font-semibold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors font-semibold mb-8">
                Login
              </button>
              <p className="text-center text-white mt-4 mb-2">Don't have an account?</p>
              <div className="flex justify-center">
                <a href="/register">
                  <button type="button" className="bg-teal-600 w-64 text-xs justify-center text-white py-2 rounded-md hover:bg-slate-700 transition-colors font-semibold">
                    Click Here for Register!
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
