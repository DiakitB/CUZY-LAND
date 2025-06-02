import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper to add active class
  const isActive = (path) =>
    location.pathname === path
      ? "text-pink-600 font-semibold"
      : "text-gray-700";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-pink-600"> Ember&Essence</h1>

        {/* Menu Toggle Button */}
        <button
          className="text-2xl md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md md:static md:flex md:space-x-6 md:shadow-none`}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-6 py-4 hover:text-pink-500 md:inline-block ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`block px-6 py-4 hover:text-pink-500 md:inline-block ${isActive("/about")}`}
          >
            About
          </Link>
          <Link
            to="/testimonials"
            onClick={closeMenu}
            className={`block px-6 py-4 hover:text-pink-500 md:inline-block ${isActive("/testimonials")}`}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`block px-6 py-4 hover:text-pink-500 md:inline-block ${isActive("/contact")}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
