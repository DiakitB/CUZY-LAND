import express from 'express';

const router = express.Router();

// Commented out routes for debugging

import upload from '../s3Upload.js'; // Handles file uploads
import {
  createCustomizedCandle,
  createNewCandle,
  getAllCandles,
} from '../controllers/candleController.js';
import { getCustomizedOrder } from '../controllers/custimizedOrder.js';

// Route to create a customized candle
router.post('/customized-candle', upload.single('image'), async (req, res, next) => {
  try {
    await createCustomizedCandle(req, res);
  } catch (error) {
    console.error('Error in /customized-candle:', error);
    next(error);
  }
});

// Route to create a new candle
router.post('/new-candle', upload.single('image'), async (req, res, next) => {
  try {
    await createNewCandle(req, res);
  } catch (error) {
    console.error('Error in /new-candle:', error);
    next(error);
  }
});

// Route to get all candles
router.get('/gett-candles', async (req, res, next) => {
  try {
    await getAllCandles(req, res);
  } catch (error) {
    console.error('Error in /gett-candles:', error);
    next(error);
  }
});

// Route to get all customized orders
router.get('/customized-orders', async (req, res, next) => {
  try {
    await getCustomizedOrder(req, res);
  } catch (error) {
    console.error('Error in /customized-orders:', error);
    next(error);
  }
});

// Example route with dynamic parameter
router.get('/api/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error('Missing parameter: id');
    }
    res.send(`ID: ${id}`);
  } catch (error) {
    console.error('Error in /api/:id:', error);
    next(error);
  }
});


// Test route for debugging
// router.get('/test', (req, res) => {
//   res.send('Test route is working!');
// });

export default router;