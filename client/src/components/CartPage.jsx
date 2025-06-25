import React, { useEffect } from 'react';
import { useCart } from '../context/TempCartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // 🔼 Scroll to top when cart is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-serif text-rose-700 mb-6 text-center">
          🛒 Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is empty.</p>
            <Link to="/gallery" className="text-rose-600 hover:underline mt-4 block">
              ← Back to Gallery
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id || item._id} className="flex flex-col md:flex-row items-center gap-6 border-b pb-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full md:w-32 h-32 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-rose-700 font-semibold mt-1">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id || item._id)}
                  className="bg-rose-100 text-rose-600 hover:bg-rose-200 px-3 py-1 rounded text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4 border-t mt-6">
              <p className="text-xl font-semibold">Subtotal:</p>
              <p className="text-xl font-semibold text-rose-700">${subtotal.toFixed(2)}</p>
            </div>

            <button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => navigate('/guest-checkout')}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
