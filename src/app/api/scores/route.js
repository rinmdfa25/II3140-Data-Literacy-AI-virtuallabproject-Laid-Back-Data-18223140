import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { environment } from "../../../../configs/environment";

export async function POST(request) {
  const { score, game_type } = await request.json();
  const cookieStore = cookies();

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
    return NextResponse.json({ error: "You must be logged in to save a score." }, { status: 401 });
  }

  const { error } = await supabase.from("scores").insert([{ user_id: user.id, score: score, game_type: game_type }]);

  if (error) {
    console.error("Supabase error: ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Score saved successfully" });
}
