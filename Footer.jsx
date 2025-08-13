import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-orange-400 text-white pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center mb-3">
            <IoFastFoodSharp className="text-3xl mr-2" />
            <span className="text-xl font-bold">Foodie</span>
          </div>
          <p className="text-sm">
            Delicious meals delivered to your doorstep. Fresh, fast, and full of flavor.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="text-sm">📍 123 Food Street, Flavor Town</p>
          <p className="text-sm">📞 03175788066</p>
          <p className="text-sm">📧 uraza5423@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Complaint</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-300 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Foodie by Umair Raza. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
