const mongoose = require('mongoose');

const candleSchema = new mongoose.Schema(
  {
    fragrance: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    jar: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Candle = mongoose.model('Candle', candleSchema);
module.exports = Candle;
