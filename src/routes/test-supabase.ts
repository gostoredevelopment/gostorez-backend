import express from 'express';
import { supabase } from '../supabaseClient';

const router = express.Router();

router.get('/test-supabase', async (req, res) => {
  try {
    // Test query - get first user from users table
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(1);

    if (error) {
      return res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }

    res.json({ 
      success: true, 
      message: 'Supabase connection successful!',
      data: data 
    });
  } catch (error) {
    // FIX: Handle the 'unknown' type error
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ 
      success: false, 
      error: errorMessage 
    });
  }
});



export default router;