import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import Mens from "../assets/cover.png";
import kids from "../assets/kids.png";
import Women from "../assets/womens.png";
import sports from "../assets/sports.png";
import elect from "../assets/electronics.png";
import jewels from "../assets/jewels.jpg";
import choco from "../assets/chocolates.jpg";
import perfume from "../assets/perfume.png";
import wed from "../assets/wedding.png";
import { useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Landingpage = () => {
  const navigate = useNavigate();
  const list = [
    {category:'mens', name: "Mens Collections", img: Mens, button: "Shop Now", Path: "/Mens" },
    {category:'kids', name: "Kids Collections", img: kids, button: "Shop Now", Path: "/Kids" },
    {category:'womens', name: "Womens Collections", img: Women, button: "Shop Now", Path: "/Womens" },
    {category:'wedding', name: "Wedding Collections", img: wed, button: "Shop Now", Path: "/Wedding" },
    {category:'electronics', name: "Electronics", img: elect, button: "Shop Now", Path: "/Electronics" },
    {category:'sports', name: "Sports", img: sports, button: "Shop Now", Path: "/Sports" },
    {category:'jewels', name: "Jewels", img: jewels, button: "Shop Now", Path: "/Jewels" },
    {category:'perfume', name: "Perfume", img: perfume, button: "Shop Now", Path: "/Perfume" },
    {category:'chocolates', name: "Chocolates", img: choco, button: "Shop Now", Path: "/Choco" },
  ];

  const handleClick = (item) => {
    navigate("/Product_lists", { state: item });  
  };

  return (
    
    <>
  <div className="text-center mt-6 flex flex-col items-center px-4">
    <h1 className="text-4xl font-bold text-blue-600">Categories</h1>
    <p className="text-center font-bold justify-center flex md:w-3/6 pt-6 text-base md:text-lg capitalize">
      ✨"Discover a wide range of collections from fashion to electronics,
      jewels to perfumes, and more. Shop the latest trends, explore premium
      products, and find everything you need in one place. Quality, style,
      and comfort — all categories designed to match your lifestyle."✨
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pt-10 px-6 md:px-20">
    {list.map((item, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-blue-500 via-blue-950 to-blue-500  text-white p-6 rounded-2xl shadow-lg/50 text-center transform transition duration-300 hover:scale-102 hover:shadow-2xl"
      >
        <p className="font-bold text-lg p-2 mb-3">{item.name}</p>
        <div className="flex justify-end">
          <button
            onClick={() => handleClick(item)}
            className="cursor-pointer text-white font-semibold hover:scale-110 hover:text-black flex items-center"
          >
            {item.button}
            <FaAngleDoubleRight className="ml-1 text-2xl hover:text-black" />
          </button>
        </div>
      </div>
    ))}
  </div><br />
  
</>

  ); 
};

export default Landingpage;
