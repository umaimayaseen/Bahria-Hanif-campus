import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://betknfztnrovplikekbh.supabase.co';
const myApiKey = 'sb_publishable_MPROKrQiD9sd9qkIBvpc5A_yTk-bdtj';

export const myDatabase = createClient(supabaseUrl,myApiKey);