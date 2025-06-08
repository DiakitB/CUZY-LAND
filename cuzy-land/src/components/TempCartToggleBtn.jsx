import React from 'react';
import { useCart } from '../context/TempCartContext';
import { useNavigate } from 'react-router-dom';

export default function CartToggleButton() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart'); // 🚀 Navigate to full cart page
  };

  return (
    <button
      onClick={handleClick}
      className="bg-pink-200 hover:bg-rose-700 text-red-700 px-4 py-2 rounded-lg shadow-md transition-all duration-300 text-sm md:text-base"
    >
      🛒 Cart ({cartItems.length})
    </button>
  );
}
