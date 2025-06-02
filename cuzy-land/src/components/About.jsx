import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero.jpg";
import candleImage1 from "../assets/c-1.jpg";
import candleImage2 from "../assets/c-2.jpg";

const About = () => {
  const images = [heroImage, candleImage1, candleImage2];
  const overlayTexts = [
    "Every candle tells a story",
    "Hand-poured with heart",
    "Your scent. Your story."
  ];

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);

      setTimeout(() => {
        setPrev(null);
      }, 2000); // match transition duration
    }, 8000); // full cycle duration

    return () => clearInterval(interval);
  }, [current, images.length]);

  return (
    <section className="w-full px-0 py-20 text-center">
      {/* Image Container with Overlays */}
      <div className="relative w-full h-96 overflow-hidden mb-10">
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-20 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Previous Image (fade out) */}
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={images[prev]}
            alt={`Candle ${prev}`}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-[2000ms] ease-in-out z-10"
          />
        )}

        {/* Current Image (fade in) */}
        <img
          key={`current-${current}`}
          src={images[current]}
          alt={`Candle ${current}`}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-[2000ms] ease-in-out z-20"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg px-4 text-center animate-fade-in">
            {overlayTexts[current]}
          </h2>
        </div>
      </div>

      {/* About Section Text */}
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          Handmade Light, Straight From the Heart
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <br />
          Every candle is poured with care by{" "}
          <span className="font-semibold text-pink-500">Vanessa</span>, who
          brings warmth and heart into every label, fragrance, and flame.
          Whether you're celebrating a birthday, honoring a memory, or just
          brightening someone’s day — we make it personal.
          <br />
          <br />
          💌 Custom scents. Custom labels. Endless love.
          <br />
          <br />
          From calming lavender to sweet vanilla chai, from heartfelt messages
          to minimalist elegance — no two candles are the same, because no two
          people are.
          <br />
          <br />
          This isn’t mass-produced light.
          <br />
          This is your story — in a jar.
        </p>
      </div>
    </section>
  );
};

export default About;
