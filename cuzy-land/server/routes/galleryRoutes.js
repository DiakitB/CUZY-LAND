const express = require('express');
const upload = require('../s3Upload'); // S3 upload middleware
const createCandleController = require('../controllers/createCandleController'); // Candle controller

const router = express.Router();

// Route for uploading an image and creating a candle
router.post('/upload', upload.single('image'), createCandleController.createNewCandle);
// Route for getting all candles

router.get('/getAll', createCandleController.getAllCandles);


module.exports = router;