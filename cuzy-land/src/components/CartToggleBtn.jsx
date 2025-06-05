import React from 'react';
import { useCart } from '../context/cartContext';

export default function CartToggleButton() {
  const { cartItems, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="bg-pink-200 hover:bg-rose-700 text-red-700 px-4 py-2 rounded-lg shadow-md transition-all duration-300 text-sm md:text-base"
    >
      🛒 Cart ({cartItems.length})
    </button>
  );
}