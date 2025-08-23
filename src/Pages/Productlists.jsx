import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Shirt from "../assets/Mens Collection/shirts.jpg";
import pant from "../assets/Mens Collection/pants.jpg";
import fpant from "../assets/Mens Collection/formal-pants.jpg";
import cpant from "../assets/Mens Collection/casual-pant.jpg";
import perfume from "../assets/Mens Collection/perfumes.jpg";
import fshoe from "../assets/Mens Collection/formal-shoe.jpg";
import cshoe from "../assets/Mens Collection/casual-shoe.jpg";
import watch from "../assets/Mens Collection/watch.jpg";
import tshirt from "../assets/Mens Collection/t-shirt.jpg";
import fshirt from "../assets/Mens Collection/formal-shirt.jpg";
import cshirt from "../assets/Mens Collection/casual-shirts.jpg";
import ring from "../assets/Mens Collection/ring.jpg";
import { MdCancel } from "react-icons/md";
import kids1 from '../assets/Kids collection/kids1.jpg'
import kids2 from '../assets/Kids collection/kids2.jpg'
import kids3 from '../assets/Kids collection/kids3.jpg'
import kids4 from '../assets/Kids collection/kids4.jpg'
import Women1 from '../assets/Women Collections/Women1.jpg'
import Women2 from '../assets/Women Collections/women2.jpg'
import Women3 from '../assets/Women Collections/women3.jpg'
import Women4 from '../assets/Women Collections/women4.jpg'
import Wedding1 from '../assets/Wedding Collections/wedding1.jpg'
import Wedding2 from '../assets/Wedding Collections/wedding3.png'
import Wedding3 from '../assets/Wedding Collections/wedding4.jpg'
import e1 from '../assets/Electronics collections/e1.jpg'
import e2 from '../assets/Electronics collections/e2.jpg'
import e3 from '../assets/Electronics collections/e3.jpg'
import e4 from '../assets/Electronics collections/e4.jpg'
import s1 from '../assets/sports collections/s1.png'
import s2 from '../assets/sports collections/s2.jpg'
import s3 from '../assets/sports collections/s3.png'
import s4 from '../assets/sports collections/s4.png'
import j1 from '../assets/Jewels collections/j1.jpg'
import j2 from '../assets/Jewels collections/j2.jpg'
import j3 from '../assets/Jewels collections/j3.jpg'
import j4 from '../assets/Jewels collections/j4.jpg'
import p1 from '../assets/perfume collections/p1.jpg'
import p2 from '../assets/perfume collections/p2.jpg'
import p3 from '../assets/perfume collections/p3.jpg'
import p4 from '../assets/perfume collections/p4.jpg'
import c1 from '../assets/Chocolates/c1.jpg'
import c2 from '../assets/Chocolates/c2.jpg'
import c3 from '../assets/Chocolates/c3.jpg'
import c4 from '../assets/Chocolates/c4.png'
import { FaArrowAltCircleLeft } from "react-icons/fa";


const Productlists = () => {
  const location = useLocation();
  const item = location.state;

const navigate=useNavigate();
 

  

  const [selectedProduct, setSelectedProduct] = useState();
  
   
  const data = [
    { id: 1, name: "Shirt", img: Shirt, Price: "799", Description: "Comfortable cotton shirt suitable for office and casual wear.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},
    { id: 1, name: "T-Shirt", img: tshirt, Price: "799", Description: "Soft and stylish T-shirt made with breathable fabric for daily use.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.', },
    { id: 1, name: "Pant", img: pant, Price: "999", Description: "Classic fit pant with durable fabric, perfect for all-day comfort." ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.',},
    { id: 1, name: "Formal Shirt", img: fshirt, Price: "799", Description: "Elegant formal shirt designed for office, meetings, and special occasions.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.' },
    { id: 1, name: "Casual Shirt", img: cshirt, Price: "799", Description: "Trendy casual shirt with modern design for everyday style." ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.',},
    { id: 1, name: "Formal Pant", img: fpant, Price: "899", Description: "Tailored formal pant that enhances your professional look" ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},
    { id: 1, name: "Casual Pant", img: cpant, Price: "599", Description: "Lightweight casual pant made for comfort and relaxed style." ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},
    { id: 1, name: "Formal Shoe", img: fshoe, Price: "1299", Description: "Premium formal shoe with classic design, ideal for office and events.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.' },
    { id: 1, name: "Casual Shoe", img: cshoe, Price: "899", Description: "Comfortable casual shoe with stylish look for daily wear.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.' },
    { id: 1, name: "Perfume", img: perfume, Price: "699", Description: "Refreshing long-lasting fragrance that keeps you confident all day.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.' },
    { id: 1, name: "Mens Watch", img: watch, Price: "999", Description: "Stylish men’s watch with modern design and durable strap" ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},
    { id: 1, name: "Mens Ring", img: ring, Price: "399", Description: "Elegant men’s ring with a classy finish for a stylish look." ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},   
    // -----------------------------------------------Kids --------------------------------------------------------------
    {id: 2 ,name:'Kids1', img:kids1 ,Price:'1220', Description:'Trendy and comfortable wear for kids – perfect for daily use.'},
    {id: 2 ,name:'Kids2', img:kids2 ,Price:'1500', Description:'Bright and colorful kids outfit designed for fun and style.'},
    {id: 2 ,name:'Kids3', img:kids3 ,Price:'2000', Description:'Soft fabric with modern design – keeps kids stylish and cozy.'},
    {id: 2 ,name:'Kids4', img:kids4 ,Price:'2500', Description:'Premium kids fashion wear for special occasions and comfort.'},

    // -------------------------------------------------Women ------------------------------------------------------------
    {id:3,name:'Women1',img:Women1 ,Price:'1800' ,Description:'Elegant women’s outfit crafted for both style and comfort.'},
    {id:3,name:'Women2',img:Women2 ,Price:'2000' ,Description:'Trendy and versatile attire perfect for casual and office wear.'},
    {id:3,name:'Women3',img:Women3 ,Price:'2800' ,Description:'Premium women’s fashion designed for modern lifestyle.'},
    {id:3,name:'Women4',img:Women4 ,Price:'2300' ,Description:'Chic and stylish wear that enhances your everyday look.'},
// ---------------------------------------------------------------------------------------------------------------------
    {id:4,name:'Wedding1',img:Wedding1 ,Price:'2300' ,Description:'Beautifully designed wedding wear for your special moments.'},
    {id:4,name:'Wedding2',img:Wedding2 ,Price:'2300' ,Description:'Traditional and elegant wedding attire with a modern touch.'},
    {id:4,name:'Wedding3',img:Wedding3 ,Price:'2300' ,Description:'Premium wedding collection that defines grace and luxury.'},

     // --------------------------------------------------Electronics------------------------------------------------------------
    {id:5,name:'Electronics1',img:e1 ,Price:'1800' ,Description:'High-quality electronic gadget with durable performance.'},
    {id:5,name:'Electronics2',img:e2 ,Price:'2000' ,Description:'Latest technology device for smarter living.'},
    {id:5,name:'Electronics3',img:e3 ,Price:'2800' ,Description:'Advanced electronics built for efficiency and style.'},
    {id:5,name:'Electronics4',img:e4 ,Price:'2300' ,Description:'Reliable and innovative gadget to match your lifestyle.'},

     // ---------------------------------------------------Sports------------------------------------------------------------
    {id:6,name:'Sports1',img:s1 ,Price:'1800' ,Description:'Durable sports gear designed for peak performance.'},
    {id:6,name:'Sports2',img:s2 ,Price:'2000' ,Description:'Comfortable and stylish sportswear for active lifestyle.'},
    {id:6,name:'Sports3',img:s3 ,Price:'2800' ,Description:'Premium quality sports equipment for all players.'},
    {id:6,name:'Sports4',img:s4 ,Price:'2300' ,Description:'Lightweight and durable gear perfect for training & matches.'},

     // ----------------------------------------------------Jewels------------------------------------------------------------
    {id:7,name:'Jewels1',img:j1 ,Price:'1800' ,Description:'Elegant jewelry piece crafted with fine detailing.'},
    {id:7,name:'Jewels2',img:j2 ,Price:'2000' ,Description:'Stylish and timeless design for every occasion.'},
    {id:7,name:'Jewels3',img:j3 ,Price:'2800' ,Description:'Luxury jewel collection made with premium quality.'},
    {id:7,name:'Jewels4',img:j4 ,Price:'2300' ,Description:'Beautiful jewelry that enhances your personality.'},

     // -----------------------------------------------------Perfumes------------------------------------------------------------
    {id:8,name:'Perfume1',img:p1 ,Price:'1800' ,Description:'Refreshing fragrance that lasts all day long.'},
    {id:8,name:'Perfume2',img:p2 ,Price:'2000' ,Description:'Elegant perfume with a blend of floral & woody notes.'},
    {id:8,name:'Perfume3',img:p3 ,Price:'2800' ,Description:'Premium scent crafted for unforgettable moments.'},
    {id:8,name:'Perfume4',img:p4 ,Price:'2300' ,Description:'Long-lasting fragrance that defines sophistication.'},

     // -----------------------------------------------------Chocolates------------------------------------------------------------
    {id:9,name:'Chocolates1',img:c1 ,Price:'1800' ,Description:'Delicious milk chocolates with a smooth creamy taste.'},
    {id:9,name:'Chocolates2',img:c2 ,Price:'2000' ,Description:'Rich dark chocolates crafted for true chocolate lovers.'},
    {id:9,name:'Chocolates3',img:c3 ,Price:'2800' ,Description:'Premium assorted chocolates perfect for gifting.'},
    {id:9,name:'Chocolates4',img:c4 ,Price:'2300' ,Description:'Sweet and crunchy chocolates that melt in your mouth.'},

  ]
  ;
 
  const filterData = data.filter((d) => d.id === item.id);
  const handleCart=(type)=>{
    console.log(data,"data");
    navigate('/Cartitems',{state: type});
  }
 
  

  return (
   <>
  <Header />
   <button className="text-4xl md:text-4xl  pt-2  fixed hidden md:flex  hover:scale-110 transition duration-200 rounded-full border-none">
    <a href="/Landingpage"> <FaArrowAltCircleLeft /> </a>
  </button>
  <h1 className="text-center text-black md:text-4xl text-2xl font-bold p-4">
    {item.name}
  </h1>
 
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-10">
    {filterData.map((type, index) => (
      <div  key={index}onClick={() => setSelectedProduct(type)} className="cursor-pointer bg-white text-black p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <p className="font-bold text-lg">{type.name}</p>
        <img src={type.img} alt={type.name}  className="mx-auto my-6 rounded-xl h-80 w-full object-cover" />
        <p className="text-lg font-semibold">₹{type.Price}</p>
        <div>
          <button className="bg-blue-600 hover:bg-black shadow-md text-white px-4 py-2 rounded mt-2">
            Details
          </button>
        </div>
      </div>
    ))}
  </div>
  {selectedProduct && (
    <>
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 md:p-10 flex flex-col md:flex-row items-center rounded-2xl w-[90%] md:w-[70%] shadow-lg relative">
        <button onClick={() => setSelectedProduct()}  className="absolute top-2 right-2 text-2xl text-black font-bold cursor-pointer" >
          <MdCancel />
        </button>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full md:w-60 h-60 object-cover rounded"/>
          <div className="flex flex-col text-black justify-center">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="mt-2">{selectedProduct.Description}</p>
            <p>★★★★☆ (4.5)</p>
            <p className="text-xl font-semibold mt-4">
              17% ₹ {selectedProduct.Price}
            </p> 
            <p className="text-black font-semibold mt-2">About</p>
            <p className="text-sm w-full md:w-[75%]">{selectedProduct.About}</p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button onClick={() => handleCart(selectedProduct)}className="bg-blue-600 text-white shadow-md px-4 py-2 rounded-lg hover:bg-black" >
                Add To Cart
              </button>
              <a  href="/Buy" className="bg-blue-600 text-white shadow-md px-4 py-2 rounded-lg hover:bg-black text-center" >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )}
  <br />
  <Footer />
</>

  );
};

export default Productlists;
