const express = require('express');
const router = express.Router();
const { createCandle } = require('../controllers/candleController');
const upload = require('../s3Upload'); // S3 upload middleware


// POST /api/candles

router.post('/', upload.single('image'), createCandle);
module.exports = router;
