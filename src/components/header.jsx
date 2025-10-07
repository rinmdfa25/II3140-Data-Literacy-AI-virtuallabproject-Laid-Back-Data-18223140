"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import DropdownMenu from "./dropdown";

export default function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isHomePage = pathname === "/home";
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <header>
      <nav className="bg-teal-600 p-2 fixed w-full top-0 z-50 flex items-center justify-between">
        {/* Left Side: "Back" Button Logic */}
        <div className="ml-4 md:ml-12 w-28">
          {!isLandingPage && !isHomePage && (
            <Link href={isAuthPage ? "/" : "/home"} className="bg-white text-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
              Back
            </Link>
          )}
        </div>

        {/* Center Logo */}
        <div>
          <Image src="/assets/laidbackdatalogo.png" alt="Laid-Back Data Logo" width={36} height={36} />
        </div>

        {/* Right Side: "Log Out" Button Logic */}
        <div className="mr-4 md:mr-12 w-28 text-right">{!isLandingPage && !isAuthPage && <DropdownMenu />}</div>
      </nav>
    </header>
  );
}
