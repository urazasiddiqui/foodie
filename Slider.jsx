import React, { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

import burgerImg from "../assets/burger.webp";
import pizzaImg from "../assets/pizza.jpg";
import pastaImg from "../assets/pasta.jpg";
import sushiImg from "../assets/sushi.webp";
import saladImg from "../assets/salad.webp";
import friesImg from "../assets/fries.jpg";
import dessertImg from "../assets/dessert.webp";

const Slider = ({ speed = 20 }) => {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();
  const [isPaused, setIsPaused] = useState(false);

  const dealItems = [
    { id: 1, name: "Cheese Burger", image: burgerImg, oldPrice: 10.99, newPrice: 8.99, desc: "Juicy grilled beef with melted cheese." },
    { id: 2, name: "Veggie Pizza", image: pizzaImg, oldPrice: 14.0, newPrice: 12.5, desc: "Loaded with fresh vegetables and mozzarella." },
    { id: 3, name: "Pasta Alfredo", image: pastaImg, oldPrice: 11.5, newPrice: 9.75, desc: "Creamy Alfredo sauce with parmesan." },
    { id: 4, name: "Sushi Platter", image: sushiImg, oldPrice: 17.5, newPrice: 15.0, desc: "Assorted fresh sushi rolls." },
    { id: 5, name: "Caesar Salad", image: saladImg, oldPrice: 9.0, newPrice: 7.5, desc: "Crisp romaine with creamy dressing." },
    { id: 6, name: "Crispy Fries", image: friesImg, oldPrice: 5.99, newPrice: 4.99, desc: "Golden fries with seasoning." },
    { id: 7, name: "Chocolate Cake", image: dessertImg, oldPrice: 7.5, newPrice: 6.5, desc: "Rich and moist chocolate delight." },
  ];

  const loopedDeals = [...dealItems, ...dealItems];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }, speed);
    };

    if (!isPaused) startScrolling();

    return () => clearInterval(scrollInterval);
  }, [speed, isPaused]);

  const handleOrderNow = (item) => {
    addToCart({ id: item.id, name: item.name, price: item.newPrice, image: item.image });
    toast.success(`${item.name} added to cart ✅`);
  };

  return (
    <div className="w-full overflow-hidden px-6 py-10 bg-[#FFF8E7]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Hot Deals</h2>
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll no-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {loopedDeals.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-64 mr-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 flex-grow">{item.desc}</p>
              <div className="mt-2">
                <span className="text-gray-400 line-through mr-2">
                  Rs {item.oldPrice.toFixed(2)}
                </span>
                <span className="text-orange-500 font-bold">
                  Rs {item.newPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => handleOrderNow(item)}
                className="mt-auto w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
};

export default Slider;
