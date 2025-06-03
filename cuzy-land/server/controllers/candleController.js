const Candle = require('../models/Candle');

exports.createCandle = async (req, res) => {
  const { fragrance, color, size, jar, label } = req.body;

  if (!fragrance || !color || !size || !jar || !label) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newCandle = new Candle({ fragrance, color, size, jar, label });
    await newCandle.save();

    res.status(201).json({
      message: 'Candle created and saved!',
      candle: newCandle,
    });
  } catch (error) {
    console.error('Error saving candle:', error);
    res.status(500).json({ message: 'Server error while saving candle' });
  }
};
