import express from 'express';
import testSupabaseRoute from './routes/test-supabase';


const app = express();
const PORT = process.env.PORT || 3000;

// Add this health check route (you already have this)
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Supabase health check route
app.use('/api', testSupabaseRoute);

// Add a root route to fix "Cannot GET /"
app.get('/', (_req, res) => res.send('GoStore Backend API is running!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
