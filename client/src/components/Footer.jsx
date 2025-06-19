import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-pink-600 mb-3">Ember & Essence</h3>
          <p className="text-sm">
            Hand-poured with love. Customized with care.
            <br />
            Your scent. Your story.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500">Contact</Link></li>
            {/* <li><Link to="/products" className="hover:text-pink-500">Products</Link></li> */}
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaFacebookF size={20} />
            </a>
            <a href="mailto:hello@emberessence.com" className="text-pink-500 hover:text-pink-700">
              <FaEnvelope size={20} />
            </a>
          </div>
          <p className="text-sm">hello@emberessence.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ember & Essence. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
