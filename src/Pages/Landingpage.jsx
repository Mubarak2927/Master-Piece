import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Banner from "../assets/banner.jpg";
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

const Landingpage = () => {
  const navigate = useNavigate();
  const list = [
    { id: 1, name: "Mens Collections", img: Mens, button: "Shop Now", Path: "/Mens" },
    { id: 2, name: "Kids Collections", img: kids, button: "Shop Now", Path: "/Kids" },
    { id: 3, name: "Womens Collections", img: Women, button: "Shop Now", Path: "/Womens" },
    { id: 4, name: "Wedding Collections", img: wed, button: "Shop Now", Path: "/Wedding" },
    { id: 5, name: "Electronics", img: elect, button: "Shop Now", Path: "/Electronics" },
    { id: 6, name: "Sports", img: sports, button: "Shop Now", Path: "/Sports" },
    { id: 7, name: "Jewels", img: jewels, button: "Shop Now", Path: "/Jewels" },
    { id: 8, name: "Perfume", img: perfume, button: "Shop Now", Path: "/Perfume" },
    { id: 9, name: "Chocolates", img: choco, button: "Shop Now", Path: "/Choco" },
  ];

  const handleClick = (item) => {
    navigate("/Product-lists", { state: item });
  };

  return (
    <>
      <div className="text-sm md:text-lg font-bold bg-yellow-300 text-black p-3 overflow-hidden">
        <marquee>
          🚨 Mega Sale! 70-80% OFF on Top Brands & Best Quality! 50% OFF on Kids &
          Ladies! Limited Time Offer! 🚨
        </marquee>
      </div>
      <div className="w-full">
        <img className="w-full h-52 sm:h-72 md:h-[80vh] object-cover pt-12 md:pt-16"src={Banner}alt="banner" />
      </div>
      <div className="text-sm md:text-lg font-bold bg-yellow-300 text-black p-3 overflow-hidden">
        <marquee>
          🚨 Mega Sale! 70-80% OFF on Top Brands & Best Quality! 50% OFF on Kids &
          Ladies! Limited Time Offer! 🚨
        </marquee>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-2xl md:text-4xl font-bold">Categories</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Explore our wide range of collections – Fashion, Electronics, Jewels,
          Perfumes, and more!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-12">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <p className="font-bold text-lg md:text-xl mb-3">{item.name}</p>
            <img   src={item.img}  alt={item.name}  className="mx-auto my-4 rounded-xl w-32 h-32 md:w-40 md:h-40 object-cover" />
            <button
              onClick={() => handleClick(item)}
              className="cursor-pointer bg-blue-600 text-white font-semibold px-4 py-2 md:px-6 md:py-2 hover:bg-black rounded-lg transition" >
              {item.button}
            </button>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Landingpage;
