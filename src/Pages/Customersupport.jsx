import React, { useEffect } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";

const Customersupport = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31426.881726713324!2d78.76115454283995!3d10.069541862511203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b005d8b08de4f3b%3A0x1f24fc0ab84584f8!2sKaraikudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1755773253103!5m2!1sen!2sin" 
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">You Have Issue ? Let's Talk</h1>
          <p className="mt-2 text-black"> Questions, feedback, or support? We'd love to hear from you.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <section className="bg-white rounded-2xl shadow-lg/50 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Contact us</h2>
            <p className="text-black mb-6"> Reach us via phone or email, or visit our office. We're available
              Monday–Saturday, 10:00 AM – 7:00 PM IST.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl shadow-sm/55 hover:scale-101  bg-gray-50">
                <HiOutlinePhone className="w-5 h-5 mt-1" />

                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919876543210" className="text-gray-500 hover:text-black hover:underline">+91 9876543210</a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:scale-101 shadow-sm/55">
                <MdOutlineMail className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:masterpiece@gmail.com" className="text-gray-500 hover:text-black hover:underline">
                    masterpiece@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl shadow-sm/55 hover:scale-101  bg-gray-50">
                <FaMapMarkerAlt className="w-5 h-5 mt-1"/>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-500">8th, MUTHOORANI E ST, Muthupattinam, Karaikudi, Tamil Nadu 630001</p>
                </div>
              </div>
            </div>
            <div className='pt-5'>
              <button className='p-2 ml-5 bg-blue-600 hover:bg-blue-700 text-white hover:scale-102 rounded-lg  px-5.5 shadow-lg/55 '><a href="mailto:sample@gmail.com">Email</a></button>
              <button className='p-2 ml-5 bg-green-600 hover:bg-green-700 text-black hover:scale-102 rounded-lg px-5 shadow-lg/55 '><a href="mailto:sample@gmail.com">Call Us</a></button>
            </div>
          </section>
          <section className="bg-white rounded-2xl flex items-center  justify-center  shadow-lg/50 overflow-hidden">
            <div className=" p-10 w-full   sm:h-96">
              <iframe
                title="Store Location Map"
                src={map}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}




export default Customersupport