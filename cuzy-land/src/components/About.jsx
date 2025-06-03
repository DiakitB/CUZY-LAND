import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero.jpg";
import candleImage1 from "../assets/c-1.jpg";
import candleImage2 from "../assets/c-2.jpg";

const About = () => {
  const images = [heroImage, candleImage1, candleImage2];
  const overlayTexts = [
    "Every candle tells a story.",
    "Hand-poured with heart.",
    "Your scent. Your story.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 1000); // duration of fade transition
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="font-serif text-brown-dark">
      {/* Image Section */}
      <div className="relative h-screen flex items-center justify-center bg-about-gradient overflow-hidden">
        {/* Image Layer */}
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

        {/* Text Overlay */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ivory drop-shadow-md mb-4 transition-opacity duration-1000 ease-in-out">
            {overlayTexts[currentIndex]}
          </h2>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="bg-white py-12 px-6 md:px-12">
        <p className="text-lg md:text-xl text-gray-800 font-sans max-w-2xl mx-auto leading-relaxed">
          At <span className="font-semibold text-pink-600">Ember & Essence</span>, we believe
          that every scent captures a memory. Our candles are hand-poured in small batches, made with
          natural ingredients, and customized just for you.
        </p>
      </div>
    </section>
  );
};

export default About;