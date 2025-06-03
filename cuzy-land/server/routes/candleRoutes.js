const express = require('express');
const router = express.Router();
const { createCandle } = require('../controllers/candleController');

// POST /api/candles
router.post('/', createCandle);

module.exports = router;
