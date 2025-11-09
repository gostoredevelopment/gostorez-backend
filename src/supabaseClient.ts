import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

console.log('Supabase URL:', process.env.SUPABASE_URL ? 'Loaded' : 'Missing');
console.log('Service Key:', process.env.SUPABASE_SERVICE_KEY ? 'Loaded' : 'Missing');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(`
    Missing Supabase environment variables!
    SUPABASE_URL: ${supabaseUrl ? 'Loaded' : 'Missing'}
    SUPABASE_SERVICE_KEY: ${supabaseServiceKey ? 'Loaded' : 'Missing'}
  `);
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey);