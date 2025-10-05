"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        },
      },
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Registration successful! Please check your email to confirm your account.");
      router.push("/login");
    }
  };

  return (
    <div className="relative flex flex-col  md:flex-row">
      <section className="register-section flex flex-1 flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-[70%] flex items-center justify-center bg-transparent">
          <div className="w-full h-full">
            <img src="/assets/campingground2.jpg" alt="Camping Ground" className="object-cover w-full h-full" style={{ minHeight: "100%" }} />
          </div>
        </div>
        {/* Right Side - Login Form */}
        <div className="relative z-10 w-full flex md:w-[30%] ml-auto bg-sky-600  items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-4 mt-10 text-white text-center">Register</h2>
            <p className="text-lg text-white mb-6 text-center">Hello New User! Please create your credentials.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-white font-semibold mb-2">
                  Username
                </label>
                <input type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Password
                </label>
                <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-white font-semibold mb-2">
                  Confirm Password
                </label>
                <input type="password" id="confirm-password" required className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 font-semibold mb-6">
                Register
              </button>

              <p className="text-center text-white mb-2">Already have an account?</p>
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
