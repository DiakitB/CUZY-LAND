const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const candleRoutes = require('./routes/candleRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

const app = express();

if (!process.env.DATABASE) {
  console.error('DATABASE environment variable is not set');
  process.exit(1);
}

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from your frontend's origin
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'An unexpected error occurred.',
    error: err.message,
  });
});

// Database Connection
const DB = process.env.MONGODB_URI || process.env.DATABASE;
mongoose.connect(DB, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server running at port: ${PORT}`));