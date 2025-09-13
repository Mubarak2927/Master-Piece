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
    { category: "mens", name: "Mens Collections", img: Mens, button: "Shop Now", Path: "/Mens" },
    { category: "kids", name: "Kids Collections", img: kids, button: "Shop Now", Path: "/Kids" },
    { category: "womens", name: "Womens Collections", img: Women, button: "Shop Now", Path: "/Womens" },
    { category: "wedding", name: "Wedding Collections", img: wed, button: "Shop Now", Path: "/Wedding" },
    { category: "electronics", name: "Electronics", img: elect, button: "Shop Now", Path: "/Electronics" },
    { category: "sports", name: "Sports", img: sports, button: "Shop Now", Path: "/Sports" },
    { category: "jewels", name: "Jewels", img: jewels, button: "Shop Now", Path: "/Jewels" },
    { category: "perfume", name: "Perfume", img: perfume, button: "Shop Now", Path: "/Perfume" },
    { category: "chocolates", name: "Chocolates", img: choco, button: "Shop Now", Path: "/Choco" },
  ];

  const handleClick = (item) => {
    navigate("/Product_lists", { state: item });
  };

  return (
    <>
      <div className="text-xs sm:text-sm md:text-lg font-bold bg-yellow-300 text-black p-2 sm:p-3 overflow-hidden">
        <marquee>
          🚨 Mega Sale! 70-80% OFF on Top Brands & Best Quality! 50% OFF on Kids &
          Ladies! Limited Time Offer! 🚨
        </marquee>
      </div>
      <div className="w-full">
        <img
          className="w-full  object-cover pt-10 sm:pt-12 md:pt-16"
          src={Banner}
          alt="banner"
        />
      </div>
      <div className="text-xs sm:text-sm md:text-lg font-bold bg-yellow-300 text-black p-2 sm:p-3 overflow-hidden">
        <marquee>
          🚨 Mega Sale! 70-80% OFF on Top Brands & Best Quality! 50% OFF on Kids &
          Ladies! Limited Time Offer! 🚨
        </marquee>
      </div>
      <div className="text-center mt-6 sm:mt-8 px-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">Categories</h1>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
          Explore our wide range of collections – Fashion, Electronics, Jewels,
          Perfumes, and more!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:p-10 lg:p-12">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 sm:p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <p className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
              {item.name}
            </p>
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto my-3 sm:my-4 rounded-xl w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover"
            />
            <button
              onClick={() => handleClick(item)}
              className="cursor-pointer bg-blue-600 text-white font-semibold text-sm sm:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 hover:bg-black rounded-lg transition"
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Landingpage;
