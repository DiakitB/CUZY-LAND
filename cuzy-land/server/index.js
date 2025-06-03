const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const candleRoutes = require('./routes/candleRoutes')

const app = express();


if(!process.env.DATABASE) {
  console.error('DATABASE environment variable is not set');
  process.exit(1);
}

app.use(cors())
app.use(express.json());

app.use('/api/candles', candleRoutes);



// Database Connection
const DB = process.env.MONGODB_URI || process.env.DATABASE;
mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server running at port: ${PORT}`));
