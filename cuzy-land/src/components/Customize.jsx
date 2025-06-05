import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Optional for smooth animations
import CandlePreview3D from './CandlePreview3D';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const fragrances = ['Vanilla Blossom', 'Lavender Fields', 'Citrus Dream', 'Rose Petals', 'Coconut Breeze'];
const colors = [
  { hex: '#FFF5F5', name: 'Blush' },
  { hex: '#FDE2E4', name: 'Rose' },
  { hex: '#E0F7FA', name: 'Aqua' },
  { hex: '#FFF9C4', name: 'Lemon' },
  { hex: '#E1F5FE', name: 'Sky' },
];
const sizes = ['Small', 'Medium', 'Large'];
const jars = ['Glass Jar', 'Ceramic Pot', 'Tin Can'];

export default function CustomizeYourCandle() {
  
  const [form, setForm] = useState({
    fragrance: '',
    color: '',
    size: '',
    jar: '',
    label: '',
  });
  const navigate = useNavigate(); // For navigation after submission
  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    // Validate form fields
    if (!form.fragrance || !form.color || !form.size || !form.jar || !form.label) {
      toast.error('❌ Please fill out all fields.');
      return;
    }
  
    try {
      console.log('Form data:', form);
  
      // Make POST request to save the candle
      const response = await axios.post('http://localhost:3000/api/candles', form);
      console.log('Candle saved:', response.data);
  
      // Show success message and navigate to thank-you page
      toast.success('🕯 Your candle has been saved successfully!');
      setTimeout(() => navigate('/thank-you'), 2000);
    } catch (error) {
      // Enhanced error handling
      console.error('Error saving candle:', error);
  
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        console.error('Server error response:', error.response.data);
        toast.error(`❌ Failed to save your candle: ${error.response.data.message || 'Server error.'}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
        toast.error('❌ Failed to save your candle: No response from server.');
      } else {
        // Something else happened during the request setup
        console.error('Error message:', error.message);
        toast.error(`❌ Failed to save your candle: ${error.message}`);
      }
    }
  };
  return (
    <motion.section
      className="max-w-3xl mx-auto bg-pink-50 p-8 rounded-lg shadow-lg mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-serif text-center text-rose-700 mb-6">
        ✨ Customize Your Candle
      </h2>

      {/* Fragrance */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">Fragrance</label>
        <select
          className="w-full border border-rose-200 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400"
          value={form.fragrance}
          onChange={(e) => handleChange('fragrance', e.target.value)}
        >
          <option value="">Choose a scent</option>
          {fragrances.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* Color */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
        <div className="flex gap-3">
          {colors.map((c) => (
            <div
              key={c.hex}
              className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
                form.color === c.hex ? 'border-rose-500' : 'border-gray-200'
              }`}
              style={{ backgroundColor: c.hex }}
              onClick={() => handleChange('color', c.hex)}
              title={c.name}
            ></div>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
        <div className="flex gap-4">
          {sizes.map((size) => (
            <label key={size} className="inline-flex items-center gap-2 text-gray-600">
              <input
                type="radio"
                name="size"
                value={size}
                checked={form.size === size}
                onChange={(e) => handleChange('size', e.target.value)}
                className="accent-rose-500"
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* Jar */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Jar Style</label>
        <select
          className="w-full border border-rose-200 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400"
          value={form.jar}
          onChange={(e) => handleChange('jar', e.target.value)}
        >
          <option value="">Choose a jar</option>
          {jars.map((j) => (
            <option key={j}>{j}</option>
          ))}
        </select>
      </div>

      {/* Label Text */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Personalized Label</label>
        <input
          type="text"
          value={form.label}
          onChange={(e) => handleChange('label', e.target.value)}
          placeholder="e.g. Love You Always ❤️"
          className="w-full border border-rose-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
      </div>

        {/* 3D Candle Preview */}
        <div className="mb-8 text-center">
        <CandlePreview3D color={form.color || '#ffffff'} label={form.label || 'Your Label Here'} />
        <p className="mt-3 text-lg font-serif text-rose-700">{form.label || 'Your Label Here'}</p>
        <p className="text-sm text-gray-500 mt-1 italic">
            {form.fragrance || 'Fragrance'} • {form.size || 'Size'} • {form.jar || 'Jar Style'}
        </p>
        </div>



      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-rose-600  font-semibold rounded-md shadow hover:bg-rose-700 transition"
      >
        💕 Create My Candle
      </button>
    </motion.section>
  );
}
