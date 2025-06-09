const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

// Debug: Log the database URI
console.log('Database URI:', process.env.DATABASE);

// Connect to your MongoDB database
mongoose.connect(process.env.DATABASE, { connectTimeoutMS: 30000 })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

const NewCandle = mongoose.model('NewCandle', new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number, // Ensure the model includes the price field
}));

async function addRandomPriceToOldDocuments() {
  try {
    // Find all documents without the price field
    const documents = await NewCandle.find({ price: { $exists: false } });

    for (const doc of documents) {
      // Generate a random price (e.g., between 10 and 100)
      const randomPrice = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

      // Update the document with the random price
      await NewCandle.updateOne({ _id: doc._id }, { $set: { price: randomPrice } });
    }

    console.log(`Updated ${documents.length} documents with random prices.`);
  } catch (error) {
    console.error('Error updating documents:', error);
  } finally {
    mongoose.connection.close();
  }
}

addRandomPriceToOldDocuments();