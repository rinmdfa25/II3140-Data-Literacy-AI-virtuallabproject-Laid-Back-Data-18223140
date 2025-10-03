"use client";
import React from "react";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-r from-green-400 to-teal-800 min-h-screen">
          {/* Header */}
          <header>
            <nav className="bg-teal-600 p-2 fixed w-full top-0 flex items-center justify-between">
              <div className="flex flex-wrap">
                <a href="/" className="bg-white text-teal-600 ml-12 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-block text-center">
                  Back
                </a>
              </div>
              <div className="md:flex items-center space-x-6">
                <img src="./assets/laidbackdatalogo.png" alt="Laid-Back Data Logo" className="h-9" />
              </div>
            </nav>
          </header>
          {/* End of Header */}
          {children}
          {/* Footer */}
          <footer>
            <div className="bg-teal-600 p-4 text-center text-white">
              <p>&copy; 2025 Laid-Back Data. All Right Reserved. Created by 18223140 - Raihan Muhammad Daffa</p>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
      </body>
    </html>
  );
}
