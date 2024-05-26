// utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Ganti dengan URL Supabase Anda
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Ganti dengan Key Anon Anda

export const supabase = createClient(supabaseUrl, supabaseKey);
