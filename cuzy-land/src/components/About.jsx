import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero.jpg";
import candleImage1 from "../assets/c-1.jpg";
import candleImage2 from "../assets/c-2.jpg";
import candleImage3 from "../assets/c-3.png";
const About = () => {
  const images = [heroImage, candleImage1, candleImage2, candleImage3];
  const overlayTexts = [
    "Every candle tells a story.",
    "Hand-poured with heart.",
    "Your scent. Your story.",
    "Light up your moments.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="font-serif text-brown-dark">
      {/* Hero Banner with Rotating Images */}
      <div className="relative h-screen flex items-center justify-center bg-about-gradient overflow-hidden">
        <div className="absolute inset-0">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Candle ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        <div className="relative z-10 text-center px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ivory drop-shadow-md mb-4 transition-opacity duration-1000 ease-in-out">
            {overlayTexts[currentIndex]}
          </h2>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-20 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={candleImage2}
            alt="About Candle"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-rose-800 mb-4">Our Story</h3>
          <p className="text-lg md:text-xl text-gray-800 font-sans leading-relaxed">
            At <span className="font-semibold text-pink-600">Ember & Essence</span>, we don’t just make candles — we craft sensory experiences. Inspired by the poetry of scent, each candle is hand-poured with care, using natural waxes and botanicals. Whether you're celebrating love, peace, or memory, your candle is a reflection of you.
          </p>

          <p className="mt-6 text-base text-gray-600">
            Founded by a dreamer who believes every glow tells a story, we invite you to make space for stillness, ritual, and light.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
