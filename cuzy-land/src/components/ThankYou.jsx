// src/pages/ThankYou.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <section className="min-h-screen bg-rose-50 flex items-center justify-center px-4 py-20">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-md w-full text-center border border-rose-100">
        <h1 className="text-4xl font-serif text-rose-600 mb-4">✨ Thank You!</h1>
        <p className="text-gray-600 text-lg mb-6">
          Your candle is now being lovingly crafted. We hope it fills your space with warmth and joy. 💕
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/4211/4211654.png"
          alt="Candle icon"
          className="mx-auto w-24 h-24 mb-6 animate-pulse"
        />

        <Link
          to="/"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-6 rounded-lg transition"
        >
          Create Another Candle
        </Link>

        <div className="mt-6 text-sm text-gray-400 italic">
          From our hearts to your home 🕯️💗
        </div>
      </div>
    </section>
  );
}
