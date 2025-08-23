import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import logoo from "../assets/logoo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-tr from-blue-500 via-blue-800 to-blue-500 sticky p-2 top-0 w-full z-50 shadow-md">
      <div className="flex justify-between md:justify-around items-center px-4 md:px-8 py-4">
        <header className="flex items-center gap-2 text-2xl md:text-4xl bg-gradient-to-r to-black from-red-500 font-bold font-serif text-transparent bg-clip-text">
          <a href="/">
            <img src={logoo} alt="logo" width={"45px"} />
          </a>
          <h1>
            <a href="/">MASTER PIECE</a>
          </h1>
        </header>
        <div className="hidden md:flex items-center border text-white rounded w-72 bg-white">
          <FiSearch className="text-black ml-2" />
          <input type="text"placeholder="Search..."className="flex-1 p-2 outline-none text-black rounded-r"/>
        </div>
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="hover:text-black text-white hover:scale-110 transition">
            <a href="/About">About</a>
          </li>
          <li className="hover:text-black text-white hover:scale-110 transition">
            <a href="/Categories">Categories</a>
          </li>
          <li className="hover:text-black text-white hover:scale-110 transition">
            <a href="/Contact">Contact Us</a>
          </li>
        </ul>
        <div className="hidden md:flex gap-4 items-center text-white">
          <button className="text-2xl p-2 rounded  hover:scale-130 transition">
            <FaRegHeart />
          </button>
          <a href="/" className="text-3xl p-2 rounded  hover:scale-130 transition">
            <MdOutlineShoppingCart />
          </a>
          <a href="/Login"className="text-3xl p-2 rounded  hover:scale-130 transition"><GoPersonFill /></a>
        </div>
        <div className="md:hidden">
          <button className="text-2xl p-2 text-white border-2 rounded"onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <MdClose /> : <TiThMenuOutline />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-[#1f2937] text-white px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen py-6" : "max-h-0 py-0"
        }`}>
        <div className="flex items-center border rounded p-2 bg-white text-black">
          <FiSearch className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none"
          />
        </div>
        <ul className="space-y-4 mt-6 text-lg font-medium">
          <li className="hover:text-[#2dd4bf] transition">
            <a href="/About">About</a>
          </li>
          <li className="hover:text-[#2dd4bf] transition">
            <a href="/Categories">Categories</a>
          </li>
          <li className="hover:text-[#2dd4bf] transition">
            <a href="/Contact">Contact Us</a>
          </li>
        </ul>
        <div className="flex justify-center gap-6 pt-6 text-2xl">
          <button className="p-2 rounded hover:bg-gray-700 hover:scale-110 transition">
            <FaRegHeart />
          </button>
          <a href="/Cartitems" className="p-2 rounded hover:bg-gray-700 hover:scale-110 transition">
            <MdOutlineShoppingCart /></a>
          <a href="/Login"className="p-2 rounded hover:bg-gray-700 hover:scale-110 transition"><GoPersonFill /></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
