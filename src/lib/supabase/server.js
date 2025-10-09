import { environment } from "../../../configs/environment";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Creates a Supabase client for server-side operations.
 * @param {object} [options] - Configuration options for the client.
 * @param {boolean} [options.isAdmin=false] - If true, creates a client with the service role key.
 */

export async function createClient({ isAdmin = false } = {}) {
  const cookieStore = cookies();
  const { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY } = environment;

  return createServerClient(SUPABASE_URL, isAdmin ? SUPABASE_SERVICE_ROLE_KEY : SUPABASE_ANON_KEY, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
      set(name, value, options) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {}
      },
      remove(name, options) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch (error) {}
      },
    },
  });
}
