// src/pages/GuestCheckout.jsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/TempCartContext';
import { useNavigate } from 'react-router-dom';

export default function GuestCheckout() {
  const { cartItems } = useCart();
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
    } else {
      alert('Please enter your name and email.');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-rose-50 flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full p-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-rose-700 mb-4">🎉 Thank you, {form.name}!</h2>
          <p className="text-gray-700 mb-2">Please send an Interac e-transfer of:</p>
          <p className="text-2xl font-bold text-rose-600 mb-2">${subtotal.toFixed(2)}</p>
          <p className="text-gray-700">
            To: <span className="font-semibold">candles@cuzyland.com</span>
          </p>
          <p className="text-gray-700">Use your email <span className="font-semibold">{form.email}</span> as the message.</p>
          <p className="text-sm text-gray-500 mt-4">Once we receive the payment, your order will be processed 💌</p>

          <button
            onClick={() => navigate('/gallery')}
             className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            ← Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rose-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-serif font-bold text-rose-700 mb-8 text-center">Guest Checkout</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />

          <div className="bg-rose-50 p-6 rounded-lg border border-rose-200 shadow-inner">
            <h3 className="text-xl font-semibold text-rose-700 mb-3">🕯️ Your Order</h3>
            <ul className="space-y-2">
              {cartItems.map((item, idx) => (
                <li key={idx} className="text-gray-800">
                  • {item.title} – <span className="text-rose-700 font-medium">${item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right text-lg font-bold text-rose-800">
              Total: ${subtotal.toFixed(2)}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Confirm & Get E-transfer Instructions
          </button>
        </form>
      </div>
    </div>
  );
}
