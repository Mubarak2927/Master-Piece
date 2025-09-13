import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose, MdOutlineShoppingCart } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import logoo from "../assets/logoo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-blue-500 via-blue-800 to-blue-500 sticky top-0 w-full z-50 shadow-md">
      <div className="flex justify-between md:justify-around items-center px-3 sm:px-6 md:px-8 py-3">
        <header className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif">
          <a href="/" className="flex items-center gap-2">
            <img src={logoo} alt="logo" className="w-8 sm:w-10 md:w-12" />
            <p className="bg-gradient-to-r from-red-500 to-black bg-clip-text md:text-2xl text-sm text-transparent">
              MASTER PIECE
            </p>
          </a>
        </header>
        <div className="hidden lg:flex items-center border rounded w-60 xl:w-72 bg-white">
          <FiSearch className="text-black ml-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 p-2 outline-none text-black rounded-r"
          />
        </div>
        <ul className="hidden md:flex md:gap-6 gap-3 font-medium">
          {["About", "Categories", "Contact Us"].map((item, i) => (
            <li
              key={i}
              className="hover:text-black text-white hover:scale-110 transition"
            >
              <a href={`/${item.replace(" ", "")}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-4 items-center text-white">
          <a
            href="/Add-to-cart"
            className="relative text-2xl lg:text-3xl p-2 rounded hover:scale-125 transition">
            <MdOutlineShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </a>
          <a
            href="/Login"
            className="text-2xl lg:text-3xl p-2 rounded hover:scale-125 transition"
          >
            <GoPersonFill />
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="text-2xl p-2 text-white border-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose /> : <TiThMenuOutline />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-[#1f2937] text-white px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="flex items-center border rounded p-2 bg-white text-black">
          <FiSearch className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none"
          />
        </div>
        <ul className="space-y-4 mt-6 text-lg font-medium">
          {["About", "Categories", "Contact Us"].map((item, i) => (
            <li
              key={i}
              className="hover:text-[#2dd4bf] transition"
            >
              <a href={`/${item.replace(" ", "")}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-6 pt-6 text-2xl relative">
          <a
            href="/Add-to-cart"
            className="p-2 rounded hover:bg-gray-700 hover:scale-110 transition relative"
          >
            <MdOutlineShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </a>
          <a
            href="/Login"
            className="p-2 rounded hover:bg-gray-700 hover:scale-110 transition"
          >
            <GoPersonFill />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
