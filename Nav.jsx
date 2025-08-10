import React from 'react';
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Nav({ searchQuery, setSearchQuery }) {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="w-full h-16 bg-orange-400 flex items-center gap-x-4 px-6 shadow-md">
      
      {/* Left - Food Icon */}
      <div className="h-12 w-12 bg-white text-orange-400 rounded-full flex justify-center items-center shadow hover:scale-105 transition-transform duration-200">
        <IoFastFoodSharp className="text-3xl text-orange-400" />
      </div>

      {/* Center - Search Bar */}
      <form onSubmit={(e) => e.preventDefault()}
        className="flex items-center bg-white rounded-full shadow px-4 py-2 mx-auto w-full max-w-lg">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="outline-none w-full text-gray-700"
        />
      </form>

      {/* Right - Shopping Bag with Counter */}
      <div className="relative ml-6">
        <Link to="/cart">
          <FiShoppingBag className="text-3xl text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
