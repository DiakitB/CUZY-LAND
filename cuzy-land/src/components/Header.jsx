import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
        <h1 className="text-3xl font-serif font-bold text-brown-dark tracking-wide">
          Ember<span className="text-blush-dark">&</span>Essence
        </h1>

        {/* Menu Toggle Button */}
        <button
          className="text-3xl md:hidden text-brown-dark focus:outline-none transition-transform duration-200"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

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
            to="/contact"
            onClick={closeMenu}
            className={`block px-6 py-4 md:inline-block transition-colors duration-200 ${isActive("/contact")}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
