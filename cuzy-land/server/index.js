// Load environment variables
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

import candleRoutes from './routes/candleRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';

const app = express();

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  optionsSuccessStatus: 200,
};


app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../../client/dist')));

// For any route, serve index.html from frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Your API routes
app.use('/api/candles', require('./routes/candleRoutes'));
app.use('/api/gallery', require('./routes/galleryRoutes'));



// Middleware
app.use(express.json());

// Debugging Middleware
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/candles', candleRoutes);
app.use('/api/gallery', galleryRoutes);

// Serve frontend in production
// if (process.env.NODE_ENV === 'production') {
//   const clientBuildPath = path.resolve(__dirname, '../client/dist');
//   app.use(express.static(clientBuildPath));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(clientBuildPath, 'index.html'));
//   });
// }

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'An unexpected error occurred.',
    error: err.message,
  });
});

// Database Connection
const DB = process.env.MONGODB_URI || process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at port: ${PORT}`);
});
