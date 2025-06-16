import mongoose from 'mongoose';

const customizedCandleSchema = new mongoose.Schema(
  {
    fragrance: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    jar: { type: String, required: true },
    label: { type: String, required: true },
    image: { type: String }, // Path or URL to the uploaded image
  },
  { timestamps: true }
);

const CustomizedCandle = mongoose.model('CustomizedCandle', customizedCandleSchema);
export default CustomizedCandle;