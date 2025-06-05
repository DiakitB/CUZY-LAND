// src/components/CartSidebar.jsx
import React from 'react';
import { useCart } from '../context/CartContext.jsx' // Adjust the import path as necessary
export default function CartSidebar() {
  const { cartItems, isCartOpen, removeFromCart, toggleCart } = useCart();

  const totalItems = cartItems.length;

  // Calculate subtotal based on item prices (assuming item.price exists)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">🛒 Your Cart</h2>
        <button onClick={toggleCart} className="text-rose-600 hover:text-rose-800 text-xl">×</button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 150px)' }}>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id || item._id} className="border rounded p-2">
              <img src={item.imageUrl} alt={item.title} className="w-full h-32 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm font-semibold mt-1">Price: ${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id || item._id)} // Ensure unique identifier is passed
                className="mt-2 bg-rose-100 text-rose-600 hover:bg-rose-200 px-2 py-1 rounded text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {totalItems > 0 && (
        <div className="p-4 border-t">
          <p className="font-semibold mb-2">Subtotal: ${subtotal.toFixed(2)}</p>
          <button
            className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded"
            onClick={() => alert('Proceeding to checkout...')}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}