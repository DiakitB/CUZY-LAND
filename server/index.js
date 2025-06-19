// index.js (ES Modules version)
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import candleRoutes from './routes/candleRoutes.js';

// Convert __filename and __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Load environment variables
dotenv.config({ path: '../config.env' });

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Debugging Middleware (optional, remove if not needed)
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/candles', candleRoutes);

// Handle all unmatched routes by serving the frontend's index.html
app.use((req, res) => {
  const filePath = path.resolve(__dirname, '../client/dist/index.html');
  console.log('Serving index.html for unmatched route:', req.url);
  res.sendFile(filePath);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'An unexpected error occurred.',
    ...(process.env.NODE_ENV === 'development' && { error: err.message }),
  });
});

// Database Connection
const DB = process.env.MONGODB_URI || process.env.DATABASE;
const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message || 'Unknown error');
    console.error('Ensure your MongoDB Atlas IP whitelist includes Heroku IPs or 0.0.0.0/0.');
    process.exit(1); // Exit the process if the database connection fails
  }
};
connectDB();

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});