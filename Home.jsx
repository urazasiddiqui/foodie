import React from 'react';
import Nav from '../Components/Nav';
import Categories from '../Categories';
import FoodCards from '../Components/FoodCards';
import Footer from '../Components/Footer';
import { useState } from 'react';

function Home() {
  // Split categories into two rows
  const firstRow = Categories.slice(0, 4);
  const secondRow = Categories.slice(4, 7);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#FFF8E7] w-full min-h-screen">
      {/* Navbar */}
      <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Categories Section */}
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>

        {/* First Row - 4 Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
          {firstRow.map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="text-4xl text-orange-500 mb-2">{items.icon}</div>
              <p className="text-gray-700 font-medium">{items.name}</p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Boxes Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {secondRow.map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="text-4xl text-orange-500 mb-2">{items.icon}</div>
              <p className="text-gray-700 font-medium">{items.name}</p>
            </div>
          ))}
        </div>
      </div>
      <FoodCards searchQuery={searchQuery} />
      <Footer/>
    </div>
  );
}

export default Home;
