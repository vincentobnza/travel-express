import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase URL and/or Anon Key are missing. Make sure you have a .env.local file in the root of your project with VITE_APP_SUPABASE_URL and VITE_APP_SUPABASE_ANON_KEY, and that you have restarted the development server."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
