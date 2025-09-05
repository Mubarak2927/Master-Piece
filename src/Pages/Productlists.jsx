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
 

  

  
   
  const data = [
    { category:'mens',id: 1, name: "Shirt", img: Shirt, Price: "799", Description: "Comfortable cotton shirt suitable for office and casual wear.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},
    { category:'mens',id: 2, name: "T-Shirt", img: tshirt, Price: "799", Description: "Soft and stylish T-shirt made with breathable fabric for daily use.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.', },
    { category:'mens',id: 3, name: "Pant", img: pant, Price: "999", Description: "Classic fit pant with durable fabric, perfect for all-day comfort." ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.',},
    { category:'mens',id: 4, name: "Formal Shirt", img: fshirt, Price: "799", Description: "Elegant formal shirt designed for office, meetings, and special occasions.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.' },
    { category:'mens',id: 5, name: "Casual Shirt", img: cshirt, Price: "799", Description: "Trendy casual shirt with modern design for everyday style." ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.',},
    { category:'mens',id: 6, name: "Formal Pant", img: fpant, Price: "899", Description: "Tailored formal pant that enhances your professional look" ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},
    { category:'mens',id: 7, name: "Casual Pant", img: cpant, Price: "599", Description: "Lightweight casual pant made for comfort and relaxed style." ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},
    { category:'mens',id: 8, name: "Formal Shoe", img: fshoe, Price: "1299", Description: "Premium formal shoe with classic design, category:'mens',ideal for office and events.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.' },
    { category:'mens',id: 9, name: "Casual Shoe", img: cshoe, Price: "899", Description: "Comfortable casual shoe with stylish look for daily wear.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.' },
    { category:'mens',id: 10, name: "Perfume", img: perfume, Price: "699", Description: "Refreshing long-lasting fragrance that keeps you confcategory:'mens',ident all day.",
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.' },
    { category:'mens',id: 11, name: "Mens Watch", img: watch, Price: "999", Description: "Stylish men’s watch with modern design and durable strap" ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},
    { category:'mens',id: 12, name: "Mens Ring", img: ring, Price: "399", Description: "Elegant men’s ring with a classy finish for a stylish look." ,
      About:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis at illum harum fuga placeat, ducimus maxime ad asperiores dignissimos consequatur blanditiis, accusamus tenetur minima quasi iste aut dolores exercitationem.'},   
    // -----------------------------------------------Kids --------------------------------------------------------------
    {category:'kids',id: 13 ,name:'Kids1', img:kids1 ,Price:'1220', Description:'Trendy and comfortable wear for kids – perfect for daily use.'},
    {category:'kids',id: 14 ,name:'Kids2', img:kids2 ,Price:'1500', Description:'Bright and colorful kids outfit designed for fun and style.'},
    {category:'kids',id: 15 ,name:'Kids3', img:kids3 ,Price:'2000', Description:'Soft fabric with modern design – keeps kids stylish and cozy.'},
    {category:'kids',id: 16,name:'Kids4', img:kids4 ,Price:'2500', Description:'Premium kids fashion wear for special occasions and comfort.'},

    // -------------------------------------------------Women ------------------------------------------------------------
    {category:'womens',id:17,name:'Women1',img:Women1 ,Price:'1800' ,Description:'Elegant women’s outfit crafted for both style and comfort.'},
    {category:'womens',id:18,name:'Women2',img:Women2 ,Price:'2000' ,Description:'Trendy and versatile attire perfect for casual and office wear.'},
    {category:'womens',id:19,name:'Women3',img:Women3 ,Price:'2800' ,Description:'Premium women’s fashion designed for modern lifestyle.'},
    {category:'womens',id:20,name:'Women4',img:Women4 ,Price:'2300' ,Description:'Chic and stylish wear that enhances your everyday look.'},
// ---------------------------------------------------------------------------------------------------------------------
    {category:'wedding',id:21,name:'Wedding1',img:Wedding1 ,Price:'2300' ,Description:'Beautifully designed wedding wear for your special moments.'},
    {category:'wedding',id:22,name:'Wedding2',img:Wedding2 ,Price:'2300' ,Description:'Traditional and elegant wedding attire with a modern touch.'},
    {category:'wedding',id:23,name:'Wedding3',img:Wedding3 ,Price:'2300' ,Description:'Premium wedding collection that defines grace and luxury.'},

     // --------------------------------------------------Electronics------------------------------------------------------------
    {category:'electronics',id:24,name:'Electronics1',img:e1 ,Price:'1800' ,Description:'High-quality electronic gadget with durable performance.'},
    {category:'electronics',id:25,name:'Electronics2',img:e2 ,Price:'2000' ,Description:'Latest technology device for smarter living.'},
    {category:'electronics',id:26,name:'Electronics3',img:e3 ,Price:'2800' ,Description:'Advanced electronics built for efficiency and style.'},
    {category:'electronics',id:27,name:'Electronics4',img:e4 ,Price:'2300' ,Description:'Reliable and innovative gadget to match your lifestyle.'},

     // ---------------------------------------------------Sports------------------------------------------------------------
    {category:'sports',id:28,name:'Sports1',img:s1 ,Price:'1800' ,Description:'Durable sports gear designed for peak performance.'},
    {category:'sports',id:29,name:'Sports2',img:s2 ,Price:'2000' ,Description:'Comfortable and stylish sportswear for active lifestyle.'},
    {category:'sports',id:30,name:'Sports3',img:s3 ,Price:'2800' ,Description:'Premium quality sports equipment for all players.'},
    {category:'sports',id:31,name:'Sports4',img:s4 ,Price:'2300' ,Description:'Lightweight and durable gear perfect for training & matches.'},

     // ----------------------------------------------------Jewels------------------------------------------------------------
    {category:'jewels',id:32,name:'Jewels1',img:j1 ,Price:'1800' ,Description:'Elegant jewelry piece crafted with fine detailing.,'},
    {category:'jewels',id:33,name:'Jewels2',img:j2 ,Price:'2000' ,Description:'Stylish and timeless design for every occasion.'},
    {category:'jewels',id:34,name:'Jewels3',img:j3 ,Price:'2800' ,Description:'Luxury jewel collection made with premium quality.'},
    {category:'jewels',id:35,name:'Jewels4',img:j4 ,Price:'2300' ,Description:'Beautiful jewelry that enhances your personality.'},

     // -----------------------------------------------------Perfumes------------------------------------------------------------
    {category:'perfume',id:36,name:'Perfume1',img:p1 ,Price:'1800' ,Description:'Refreshing fragrance that lasts all day long.'},
    {category:'perfume',id:37,name:'Perfume2',img:p2 ,Price:'2000' ,Description:'Elegant perfume with a blend of floral & woody notes.'},
    {category:'perfume',id:38,name:'Perfume3',img:p3 ,Price:'2800' ,Description:'Premium scent crafted for unforgettable moments.'},
    {category:'perfume',id:39,name:'Perfume4',img:p4 ,Price:'2300' ,Description:'Long-lasting fragrance that defines sophistication.'},

     // -----------------------------------------------------Chocolates------------------------------------------------------------
    {category:'chocolates',id:40,name:'Chocolates1',img:c1 ,Price:'1800' ,Description:'Delicious milk chocolates with a smooth creamy taste.'},
    {category:'chocolates',id:41,name:'Chocolates2',img:c2 ,Price:'2000' ,Description:'Rich dark chocolates crafted for true chocolate lovers.'},
    {category:'chocolates',id:42,name:'Chocolates3',img:c3 ,Price:'2800' ,Description:'Premium assorted chocolates perfect for gifting.'},
    {category:'chocolates',id:43,name:'Chocolates4',img:c4 ,Price:'2300' ,Description:'Sweet and crunchy chocolates that melt in your mouth.'},

  ]
  ;
 
  const filterData = data.filter((d) => d.category === item.category);
  const handleClick=(type)=>{
    console.log(data,"data");
    navigate('/Product_Details',{state: type});
  }
  
 
  

  return (
   <>
   <button className="text-4xl md:text-4xl  pt-2  fixed hidden md:flex  hover:scale-110 transition duration-200 rounded-full border-none">
    <a href="/"> <FaArrowAltCircleLeft /> </a>
  </button>
  <h1 className="text-center text-black md:text-4xl text-2xl font-bold p-4">
    {item.name}
  </h1>
 
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-10">
    {filterData.map((type, index) => (
      <div  key={index}onClick={() =>handleClick(type)} className="cursor-pointer bg-white text-black p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <p className="font-bold text-lg">{type.name}</p>
        <img src={type.img} alt={type.name}  className="mx-auto my-6 rounded-xl h-85 w-full object-cover" />
        <p className="text-lg font-semibold">₹{type.Price}</p>
        <div>
          <button className="bg-blue-600 hover:bg-black shadow-md text-white px-4 py-2 rounded mt-2">
            Details
          </button>
        </div>
      </div>
    ))}
  </div>
  
</>

  );
};

export default Productlists;
