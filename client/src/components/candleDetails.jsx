import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CandleDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const candle = state?.candle;

  if (!candle) {
    return (
      <div className="text-center mt-20">
        <p className="text-lg text-gray-600">No candle data available.</p>
        <button
          onClick={() => navigate('/customize')}
          className="mt-4 px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
        >
          Create a Candle
        </button>
      </div>
    );
  }

  const formattedDate = new Date(candle.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-pink-50 p-8 rounded-lg shadow-md mt-10 mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-serif text-rose-700 mb-6 text-center">🕯️ Your Custom Candle</h2>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={candle.image}
          alt="Candle Preview"
          className="w-full md:w-64 h-64 object-cover rounded shadow border border-rose-200"
        />

        <div className="flex-1 space-y-4 text-gray-700">
          <p><span className="font-semibold">Label:</span> {candle.label}</p>
          <p><span className="font-semibold">Fragrance:</span> {candle.fragrance}</p>
          <p><span className="font-semibold">Size:</span> {candle.size}</p>
          <p><span className="font-semibold">Jar Style:</span> {candle.jar}</p>
          <p className="flex items-center">
            <span className="font-semibold mr-2">Color:</span>
            <span
              className="inline-block w-6 h-6 rounded-full border"
              style={{ backgroundColor: candle.color }}
              title={candle.color}
            ></span>
            <span className="ml-2 text-sm text-gray-500">{candle.color}</span>
          </p>
          <p><span className="text-sm italic text-gray-500">Created on: {formattedDate}</span></p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-rose-600 text-black rounded-lg shadow hover:bg-rose-700 transition"
        >
          Back to Home
        </button>
      </div>
    </motion.div>
  );
}
