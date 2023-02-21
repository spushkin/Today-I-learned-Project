import { createClient } from "@supabase/supabase-js";

const supabaseUrl = ""; // My supabase url goes here;
const supabaseKey = ""; // My supabase key goes here;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
