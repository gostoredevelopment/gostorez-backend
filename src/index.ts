import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Add this health check route (you already have this)
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Add a root route to fix "Cannot GET /"
app.get('/', (_req, res) => res.send('GoStore Backend API is running!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
