
const newCandle = require('../models/NewCandle'); // Adjust the path as necessary


exports.createNewCandle = async (req, res) => {
    console.log('Received request to create candle:', req.body);
    try {
      const { title, description, price} = req.body;
      const imageUrl = req.file.location; // S3 file URL
  
      // Validate required fields
      if (!title || !description || !imageUrl || !price) {
        return res.status(400).send({ message: 'Title, description, and image URL are required.' });
      }
  
      // Create a new candle in the database
      const createdCandle = await newCandle.create({
        title,
        description,
        imageUrl,
        price,

      });
      console.log('Candle created successfully:', createdCandle);
      res.status(201).send({
        message: 'Candle created successfully!',
        candle: createdCandle,
      });
    } catch (error) {
      console.error('Error creating candle:', error);
      res.status(500).send({
        message: 'Failed to create candle.',
        error: error.message,
      });
    }
  };


  // get all candles

exports.getAllCandles = async (req, res) => {

    console.log('Received request to fetch all candles');
    try {
        const candles = await newCandle.find();
        res.status(200).send(candles);
    } catch (error) {
        console.error('Error fetching candles:', error);
        res.status(500).send({
            message: 'Failed to fetch candles.',
            error: error.message,
        });
    }
}