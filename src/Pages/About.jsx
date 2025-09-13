import React, { useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const About = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
 
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 pt-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            About Us
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Welcome to our shopping website! We aim to make your online shopping
            journey easy, affordable, and enjoyable.  
            Our small but dedicated team works every day to bring the best deals
            and quality products to your doorstep.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-xl transition-all p-6 rounded-2xl hover:scale-[1.03] duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              To provide a seamless shopping experience with trusted products,
              affordable prices, and fast delivery — making everyday purchases
              simple & worry-free.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-xl transition-all p-6 rounded-2xl hover:scale-[1.03] duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              To become a go-to shopping destination where technology meets
              convenience, connecting customers with products that truly improve
              their lifestyle.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-xl transition-all p-6 rounded-2xl hover:scale-[1.03] duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Values</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              We stand by trust, honesty, and customer happiness. Every product,
              service, and interaction is built on our promise to put you first.
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-16 px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Thank you for trusting us.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mt-3">
            We’re excited to serve you and make your shopping simple & fun! 
          </p>

          <div className="pt-10">
            <p className="text-lg sm:text-2xl font-bold pb-2 text-gray-700">
              Click to Shop
            </p>
            <button className="text-4xl sm:text-5xl shadow-lg rounded-full border hover:scale-110 transition-transform duration-300 text-blue-600 hover:text-black">
              <a href="/Categories">
                <FaArrowAltCircleRight />
              </a>
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
