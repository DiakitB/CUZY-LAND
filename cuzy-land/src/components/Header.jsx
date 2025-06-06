import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartToggleButton from '../components/TempCartToggleBtn.jsx'; // Adjust the import path as necessary
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

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-ivory to-blush-light shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img
            src={logoImage}
            alt="Ember & Essence Logo"
            className="h-8 w-8 md:h-16 md:w-16 object-contain"
          />
          <h1 className="hidden md:block text-2xl md:text-3xl font-serif font-bold text-brown-dark tracking-wide px-1 md:mb-0">
            Ember<span className="text-blush-dark">&</span>Essence
          </h1>
        </div>

        {/* Flex container for Hamburger Icon and Cart Toggle Button */}
        <div className="flex items-center justify-between space-x-8 md:hidden relative">
          {/* Menu Toggle Button */}
          <button
            className="text-3xl text-brown-dark focus:outline-none transition-transform duration-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          {/* Cart Toggle Button */}
          <CartToggleButton />
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-ivory shadow-lg md:shadow-none md:static md:flex md:space-x-8 md:bg-transparent transition-all duration-300`}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-6 py-4 md:inline-block transition-colors duration-200 ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`block px-6 py-4 md:inline-block transition-colors duration-200 ${isActive("/about")}`}
          >
            About
          </Link>
          <Link
            to="/testimonials"
            onClick={closeMenu}
            className={`block px-6 py-4 md:inline-block transition-colors duration-200 ${isActive("/testimonials")}`}
          >
            Testimonials
          </Link>
          <Link
            to="/gallery"
            onClick={closeMenu}
            className={`block px-6 py-4 md:inline-block transition-colors duration-200 ${isActive("/gallery")}`}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`block px-6 py-4 md:inline-block transition-colors duration-200 ${isActive("/contact")}`}
          >
            Contact
          </Link>
          <Link
            to="/upload"
            onClick={closeMenu}
            className={`block px-6 py-4 md:inline-block transition-colors duration-200 ${isActive("/upload")}`}
          >
            Add New Candle
          </Link>
        </nav>

        {/* Cart Toggle Button for larger screens */}
        <div className="hidden md:block">
          <CartToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;