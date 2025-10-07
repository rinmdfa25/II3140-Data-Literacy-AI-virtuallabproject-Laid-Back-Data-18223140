"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left pt-2" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="font-semibold hover:text-teal-200 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-blue-500 rounded-md shadow-lg z-50">
          <div className="py-1">
            <Link href="/learn" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
              Learn
            </Link>
            <Link href="/game1" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
              Games
            </Link>
            <Link href="/profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
              Profile
            </Link>
            <div className="border-t border-gray-200"></div>
            <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
