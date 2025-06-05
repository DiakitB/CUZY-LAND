import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useCart } from '../context/TempCartContext'; // 🛒 Import cart context

// ✅ Use relative URL for production & mobile compatibility
const API_URL = '/api/gallery/getAll';

export default function Gallery() {
  const [candles, setCandles] = useState([]);
  const [selectedCandle, setSelectedCandle] = useState(null);
  const { addToCart } = useCart(); // 🛒 Access cart function

  const getAllCandles = async () => {
    try {
      const response = await axios.get(API_URL);
      const fetchedCandles = response.data;
      const sortedCandles = fetchedCandles.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setCandles(sortedCandles);
      console.log('Fetched candles:', sortedCandles); // Debugging log
    } catch (error) {
      console.error('Error fetching candles:', error);
    }
  };

  useEffect(() => {
    getAllCandles();
  }, []);

  if (selectedCandle) {
    return (
      <div className="bg-rose-50 min-h-screen p-6">
        <button
          onClick={() => setSelectedCandle(null)}
          className="flex items-center text-rose-600 hover:text-rose-800 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back to Gallery
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <img
            src={selectedCandle.imageUrl}
            alt={selectedCandle.title}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-serif text-rose-700 mb-4">
              {selectedCandle.title}
            </h2>
            <p className="text-gray-700 text-lg">{selectedCandle.description}</p>
            <button
              onClick={() => addToCart(selectedCandle)}
              className="mt-4 bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded transition"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-rose-700 text-center mb-10">
          Candle Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {candles.map((candle, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white"
            >
              <div
                onClick={() => setSelectedCandle(candle)}
                className="cursor-pointer"
              >
                <img
                  src={candle.imageUrl}
                  alt={candle.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-lg font-semibold text-rose-800">
                    {candle.title}
                  </h3>
                </div>
              </div>
              <div className="px-3 pb-4 text-center">
                <button
                  onClick={() => addToCart(candle)}
                  className="mt-2 bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
