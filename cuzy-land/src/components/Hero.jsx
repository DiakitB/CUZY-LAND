import React from "react";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-hero-gradient bg-cover bg-center flex items-center justify-center text-brown-dark text-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Hero section with candle background"
    >
      <div className="bg-black/60 p-8 rounded-lg max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif italic animate-slide-in">
          Welcome to <span className="text-blush-dark">Ember & Essence</span>
        </h1>
        <h4 className="text-xl text-ivory mb-6 font-sans">
          Your scent. Your story.<br />
          Handcrafted candles with custom scents and labels, made with love.
        </h4>
        <a
          href="/customize"
          className="inline-block bg-blush hover:bg-blush-dark transition transform hover:scale-105 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Customize Your Candle
        </a>
      </div>

      {/* Downward scroll indicator */}
      <div className="absolute bottom-6 animate-bounce">
        <a href="/about" aria-label="Scroll to About section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-ivory"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
