
import NewCandle from '../models/NewCandle.js';

import CustomizedCandle from '../models/CustomizedCandle.js';

// Create a customized candle
export const createCustomizedCandle = async (req, res) => {
  console.log('Received request to create customized candle:', req.body);
  console.log('Uploaded file:', req.file); // Debugging line

  const { fragrance, color, size, jar, label } = req.body;
  const imageUrl = req.file?.location;

  // Validate required fields
  if (!fragrance || !color || !size || !jar || !label || !imageUrl) {
    return res.status(400).json({ message: 'All fields including image are required.' });
  }

  try {
    const newCandle = new CustomizedCandle({ fragrance, color, size, jar, label, image: imageUrl });
    await newCandle.save();

    res.status(201).json({
      message: 'Customized candle created and saved!',
      candle: newCandle,
    });
  } catch (error) {
    console.error('Error saving customized candle:', error);
    res.status(500).json({ message: 'Server error while saving customized candle' });
  }
};

// Create a new candle
export const createNewCandle = async (req, res) => {
  console.log('Received request to create new candle:', req.body);

  try {
    const { title, description, price } = req.body;
    const imageUrl = req.file?.location; // S3 file URL

    // Validate required fields
    if (!title || !description || !imageUrl || !price) {
      return res.status(400).send({ message: 'Title, description, image URL, and price are required.' });
    }

    // Create a new candle in the database
    const createdCandle = await NewCandle.create({
      title,
      description,
      imageUrl,
      price,
    });

    console.log('New candle created successfully:', createdCandle);
    res.status(201).send({
      message: 'New candle created successfully!',
      candle: createdCandle,
    });
  } catch (error) {
    console.error('Error creating new candle:', error);
    res.status(500).send({
      message: 'Failed to create new candle.',
      error: error.message,
    });
  }
};

// Get all candles
export const getAllCandles = async (req, res) => {
  console.log('Received request to fetch all candles');
  console.log(req.body); // Debugging line

  try {
    const candles = await NewCandle.find(); // Corrected to use `NewCandle`
    console.log('Candles fetched successfully:', candles.length, 'candles found');
    res.status(200).send(candles);
  } catch (error) {
    console.error('Error fetching candles:', error);
    res.status(500).send({
      message: 'Failed to fetch candles.',
      error: error.message,
    });
  }
};