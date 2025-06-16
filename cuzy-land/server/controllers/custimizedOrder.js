import CustomizedCandle from '../models/CustomizedCandle.js';

// Controller to get all customized orders
export const getCustomizedOrder = async (req, res) => {
  try {
    const orders = await CustomizedCandle.find(); // Assuming orders are stored in the CustomizedCandle model
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching customized orders:', error);
    res.status(500).json({ message: 'Failed to fetch customized orders.' });
  }
};

