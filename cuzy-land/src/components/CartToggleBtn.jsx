import React from 'react';
import { useCart } from '../context/cartContext'

export default function CartToggleButton() {
  const { cartItems, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="fixed top-4 right-4 z-50 bg-rose-600 hover:bg-rose-700 text-blue px-4 py-2 rounded-full shadow-lg"
    >
      🛒 Cart ({cartItems.length})
    </button>
  );
}


