import React from "react";
import burgerImg from "../assets/burger.webp";
import pizzaImg from "../assets/pizza.jpg";
import pastaImg from "../assets/pasta.jpg";
import sushiImg from "../assets/sushi.webp";
import saladImg from "../assets/salad.webp";
import friesImg from "../assets/fries.jpg";
import dessertImg from "../assets/dessert.webp";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

function FoodCards({ searchQuery = "" }) {
  const { addToCart } = useCart();

  const foodItems = [
    { id: 1, name: "Cheese Burger", price: 8.99, image: burgerImg },
    { id: 2, name: "Veggie Pizza", price: 12.5, image: pizzaImg },
    { id: 3, name: "Pasta Alfredo", price: 9.75, image: pastaImg },
    { id: 4, name: "Sushi Platter", price: 15.0, image: sushiImg },
    { id: 5, name: "Caesar Salad", price: 7.5, image: saladImg },
    { id: 6, name: "Crispy Fries", price: 4.99, image: friesImg },
    { id: 7, name: "Chocolate Cake", price: 6.5, image: dessertImg },
  ];

  // Filter items based on search query (case-insensitive)
  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOrderNow = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart ✅`);
  };

  return (
    <div className="px-6 py-10 bg-[#FFF8E7]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Dishes</h2>

      {filteredItems.length === 0 ? (
        <p className="text-gray-500">No items match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-orange-500 font-bold text-lg">
                  Rs {item.price.toFixed(2)}
                </p>

                <button
                  onClick={() => handleOrderNow(item)}
                  className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodCards;
