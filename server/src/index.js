import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contact.js';
import resumeRoutes from './routes/resume.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Allowed frontend origins come from CLIENT_ORIGIN (comma separated)
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow same-origin / curl requests (no Origin header) and whitelisted origins
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      const err = new Error(`Origin ${origin} not allowed by CORS`);
      err.status = 403;
      return callback(err);
    },
    exposedHeaders: ['Content-Disposition']
  })
);
app.use(express.json({ limit: '20kb' }));
app.set('trust proxy', 1); // Render / Railway sit behind a proxy

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoutes);

app.use(notFound);
app.use(errorHandler);

connectDB().finally(() => {
  app.listen(PORT, () => console.log(`🚀 API running on http://localhost:${PORT}`));
});
