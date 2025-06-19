import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartToggleButton from "./TempCartToggleBtn.jsx";
import logoImage from "../assets/candles/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blush-dark font-semibold"
      : "text-brown-dark hover:text-blush-dark";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" }, // For viewing all candles
    { name: "Add New Candle", path: "/new-candle" }, // For creating a new candle
    { name: "Customized Candle", path: "/customized-candle" }, // For creating a customized candle
    { name: "Customized Orders", path: "/customized-orders" }, // For viewing customized orders
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-ivory to-blush-light shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 space-x-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <img
            src={logoImage}
            alt="Ember & Essence Logo"
            className="h-8 w-8 md:h-16 md:w-16 object-contain"
          />
          <h1 className="hidden md:block text-2xl md:text-3xl font-serif font-bold text-brown-dark tracking-wide">
            Ember<span className="text-blush-dark">&</span>Essence
          </h1>
        </div>

        {/* Mobile Menu + Cart */}
        <div className="flex items-center space-x-8 md:hidden relative">
          <button
            className="text-3xl text-brown-dark focus:outline-none transition-transform duration-200"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
          <CartToggleButton />
        </div>

        {/* Desktop Navigation and Cart */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`transition-colors duration-200 ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <CartToggleButton />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-ivory shadow-lg md:hidden transition-all duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-6 py-4 transition-colors duration-200 ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;