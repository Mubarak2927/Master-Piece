import React from "react";
import {  FaFacebookF,FaInstagram,FaLinkedinIn, FaPhoneAlt,} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import logoo from "../assets/logoo.png";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-tr from-blue-500 via-blue-800 to-blue-500 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-10">
          <div>
            <h1 className="text-lg font-semibold pb-3">Company</h1>
            <img src={logoo} alt="logo" width={"70px"} className="mb-3" />
            <p className="text-sm leading-relaxed">
              Welcome to <span className="font-bold">MASTER PIECE</span>, your
              one-stop destination for fashion, electronics, lifestyle, and
              more. We value trust, customer satisfaction, and timely delivery,
              making sure your shopping journey is simple, safe, and enjoyable.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold pb-3">Navigations</h1>
            <ul className="space-y-2">
              <li className="hover:text-black transition">
                <a href="/About">About</a>
              </li>
              <li className="hover:text-black transition">
                <a href="/Categories">Categories</a>
              </li>
              <li className="hover:text-black transition">
                <a href="/Contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold pb-3">Contact</h1>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:text-black cursor-pointer">
                <FaPhoneAlt /> +91-6345678912
              </li>
              <li className="flex items-center gap-3 hover:text-black cursor-pointer">
                <IoLogoWhatsapp /> +91-9876543210
              </li>
              <li className="flex items-center gap-3 hover:text-black cursor-pointer">
                <MdEmail /> sample@gmail.com
              </li>
              <li className="flex items-center gap-3 hover:text-black cursor-pointer">
                <IoLocationSharp /> Karaikudi
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold pb-3">Email</h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter Your Email..."
                required
                className="border-2 p-2 w-full rounded outline-none text-black"
              />
              <button className="bg-black px-4 py-2 hover:bg-white hover:text-black text-white rounded hover:scale-105 transition">
                <a href="/Login">Send</a>
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/login.php/"className="p-2 bg-black rounded-full hover:bg-white hover:text-black transition" >
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/" className="p-2 bg-black rounded-full hover:bg-white hover:text-black transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/login"className="p-2 bg-black rounded-full hover:bg-white hover:text-black transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-300 py-4 text-sm">
        &#169; MASTER PIECE. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
