import { updateSession } from "./lib/supabase/middleware";
import { NextResponse } from "next/server";

/**
 * @param {import('next/server').NextRequest} request
 */
export async function middleware(request) {
  const response = await updateSession(request);
  if (!response) {
    return NextResponse.next();
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
