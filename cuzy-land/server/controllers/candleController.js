const Candle = require('../models/Candle'); // Adjust the path as necessary

exports.createCandle = async (req, res) => {
  console.log('Received request to create candle:', req.body);
  console.log('Uploaded file:', req.file); // Debugging line

  const { fragrance, color, size, jar, label } = req.body;
  const imageUrl = req.file?.location; // Ensure this is populated

  if (!fragrance || !color || !size || !jar || !label || !imageUrl) {
    return res.status(400).json({ message: 'All fields including image are required.' });
  }

  try {
    const newCandle = new Candle({ fragrance, color, size, jar, label, image: imageUrl });
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