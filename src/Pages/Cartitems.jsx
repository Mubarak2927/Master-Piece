import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Shared/Header";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Footer from "../Shared/Footer";

const Cartitems = () => {
  const location = useLocation();
  const item = location.state;
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <Header />
      <button className="text-4xl md:text-5xl ml-4 md:ml-10 mt-4 fixed hover:scale-105 transition">
        <a href="/Landingpage">
          <FaArrowAltCircleLeft />
        </a>
      </button>
      <div className="min-h-screen flex justify-center items-center p-4 md:p-10 bg-gray-100">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            Shopping Cart
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start border-b pb-6 mb-6 gap-6">
            <img
              src={item.img}
              alt={item.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 mt-1">{item.Description}</p>
              <p className="text-yellow-500 mt-2">★★★★☆ (4.5)</p>
              <p className="text-green-600 font-medium mt-1">In Stock</p>
              <div className="flex justify-center md:justify-start mt-4">
                <button className="bg-red-500 px-4 py-2 text-white rounded-lg shadow hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
            <h2 className="text-xl md:text-2xl font-bold">
              Total: <span className="text-black">₹{item.Price}</span>
            </h2>
            <a
              href="/Buy"
              className="bg-blue-600 hover:bg-black text-white px-6 py-2 rounded-lg shadow transition w-full md:w-auto text-center"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cartitems;
