import { DB_URL, PUBLIC_KEY } from "./constants.js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = DB_URL;
const supabaseKey: string = PUBLIC_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);