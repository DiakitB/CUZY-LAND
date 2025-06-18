import express from 'express';
import upload from '../s3Upload.js'; // Assuming this handles file uploads
import {
  createCustomizedCandle,
  createNewCandle,
  getAllCandles,
} from '../controllers/candleController.js';
import {  getCustomizedOrder} from '../controllers/custimizedOrder.js';

const router = express.Router();

// Route to create a customized candle
router.post('/customized-candle', upload.single('image'), createCustomizedCandle);

// Route to create a new candle
router.post('/new-candle', upload.single('image'), createNewCandle);

// Route to get all candles
router.get('/gett-candles', getAllCandles);

// Route to get all customized orders
router.get('/customized-orders', getCustomizedOrder);

router.get('/api/:id', (req, res) => {
  console.log('Request received:', req.params);
  res.send(`ID: ${req.params.id}`);
});

export default router;