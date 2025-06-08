import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartToggleButton from "../components/TempCartToggleBtn.jsx";
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
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
          <CartToggleButton />
        </div>

        {/* Desktop Navigation and Cart */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <nav className="flex space-x-6">
            <Link
              to="/"
              onClick={closeMenu}
              className={`transition-colors duration-200 ${isActive("/")}`}
            >
              Home
            </Link>
            {/* <Link
              to="/about"
              onClick={closeMenu}
              className={`transition-colors duration-200 ${isActive("/about")}`}
            >
              About
            </Link> */}
            {/* <Link
              to="/testimonials"
              onClick={closeMenu}
              className={`transition-colors duration-200 ${isActive("/testimonials")}`}
            >
              Testimonials
            </Link> */}
            <Link
              to="/gallery"
              onClick={closeMenu}
              className={`transition-colors duration-200 ${isActive("/gallery")}`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`transition-colors duration-200 ${isActive("/contact")}`}
            >
              Contact
            </Link>
            <Link
              to="/upload"
              onClick={closeMenu}
              className={`transition-colors duration-200 ${isActive("/upload")}`}
            >
              Add New Candle
            </Link>
          </nav>
          <CartToggleButton />
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-ivory shadow-lg md:hidden transition-all duration-300`}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-6 py-4 transition-colors duration-200 ${isActive("/")}`}
          >
            Home
          </Link>
          {/* <Link
            to="/about"
            onClick={closeMenu}
            className={`block px-6 py-4 transition-colors duration-200 ${isActive("/about")}`}
          >
            About
          </Link> */}
          {/* <Link
            to="/testimonials"
            onClick={closeMenu}
            className={`block px-6 py-4 transition-colors duration-200 ${isActive("/testimonials")}`}
          >
            Testimonials
          </Link> */}
          <Link
            to="/gallery"
            onClick={closeMenu}
            className={`block px-6 py-4 transition-colors duration-200 ${isActive("/gallery")}`}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`block px-6 py-4 transition-colors duration-200 ${isActive("/contact")}`}
          >
            Contact
          </Link>
          <Link
            to="/upload"
            onClick={closeMenu}
            className={`block px-6 py-4 transition-colors duration-200 ${isActive("/upload")}`}
          >
            Add New Candle
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
