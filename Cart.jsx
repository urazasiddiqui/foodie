import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-[#FFF8E7] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🛒 My Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left - Items */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
          {cart.length === 0 ? (
            <div>
              <p>Your cart is empty 🍽️</p>
              <Link
                to="/"
                className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Go to Menu
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    Price: Rs {item.price.toFixed(2)}
                  </p>
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    className="mt-2 border rounded px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="w-20 font-bold">
                  Rs {(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {/* Continue Shopping button if cart not empty */}
          {cart.length > 0 && (
            <Link
              to="/"
              className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              ← Continue Shopping
            </Link>
          )}
        </div>

        {/* Right - Summary */}
        {cart.length > 0 && (
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-3">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Rs 0.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>Rs 0.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
