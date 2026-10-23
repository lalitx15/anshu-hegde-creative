import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const isSupabaseConfigured =
  Boolean(supabaseUrl) &&
  Boolean(supabaseAnonKey) &&
  !supabaseUrl.includes("placeholder-project");

// Client for public reads/inserts if enabled
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Admin client for server-side API routes using Service Role Key
export const supabaseAdmin =
  isSupabaseConfigured && Boolean(supabaseServiceKey) && !supabaseServiceKey.includes("placeholder-service-key")
    ? createClient(supabaseUrl, supabaseServiceKey)
    : (supabase || null);
