import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const initialTestimonials = [
  {
    name: 'Sophia M.',
    quote: "Absolutely in love with my custom candle! The scent fills the room and the jar is gorgeous.",
    rating: 5,
    image: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Liam R.',
    quote: "It was so fun customizing my candle. Everything arrived quickly and smelled divine!",
    rating: 4,
    image: 'https://i.pravatar.cc/100?img=15',
  },
  {
    name: 'Ava T.',
    quote: "I gave this as a gift and they loved it! Will be ordering again for sure.",
    rating: 5,
    image: 'https://i.pravatar.cc/100?img=25',
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [form, setForm] = useState({ name: '', quote: '', rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.quote || !form.rating) return;

    const newTestimonial = {
      ...form,
      image: `https://i.pravatar.cc/100?u=${form.name + form.quote}`, // Unique avatar
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setForm({ name: '', quote: '', rating: 5 }); // Reset form
  };

  return (
    <section className="bg-amber-50 py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
        <p className="text-lg mb-12 text-gray-600">Real reviews from candle lovers like you.</p>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-amber-400 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="inline-block mr-1" />
                ))}
              </div>
              <FaQuoteLeft className="text-2xl text-amber-300 mb-4" />
              <p className="italic mb-6 text-gray-700">"{t.quote}"</p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-300"
                />
                <span className="font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Share Your Experience</h3>
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 mb-4 rounded"
            required
          />
          <textarea
            placeholder="Your testimonial"
            value={form.quote}
            onChange={(e) => setForm({ ...form, quote: e.target.value })}
            className="w-full border p-2 mb-4 rounded"
            required
          ></textarea>
          <label className="block text-left mb-2">Rating:</label>
          <select
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
            className="w-full border p-2 mb-4 rounded"
          >
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 && 's'}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 w-full"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
