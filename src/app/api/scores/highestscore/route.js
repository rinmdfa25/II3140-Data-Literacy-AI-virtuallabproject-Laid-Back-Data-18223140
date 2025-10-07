import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const game_type = searchParams.get("game_type");
  const cookieStore = cookies();
  if (!game_type) {
    return NextResponse.json({ error: "No game type were defined." });
  }

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
      set(name, value, options) {
        cookieStore.set({ name, value, ...options });
      },
      remove(name, options) {
        cookieStore.set({ name, value: "", ...options });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "User Undefined" }, { status: 401 });
  }

  const { data, error } = await supabase.from("scores").select("score").eq("user_id", user.id).eq("game_type", game_type).order("score", { ascending: false }).limit(1).single();

  if (error && error.code != "PGRST116") {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ highestScore: data ? data.score : 0 });
}
