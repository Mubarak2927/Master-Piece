import React from 'react'

const Viewdetails = () => {
    const location = useLocation();
  const item = location.state;  
  const data = [
      { id: 1, name: "Shirt",           img :Shirt ,   Price:"799" ,Description:'Comfortable cotton shirt suitable for office and casual wear.' },
       { id: 1, name: "T-Shirt",        img :tshirt ,  Price:"799" ,Description:'Soft and stylish T-shirt made with breathable fabric for daily use.' },
      { id: 1, name: "Pant",            img : pant,    Price:"999" ,Description:'Classic fit pant with durable fabric, perfect for all-day comfort.' },
      { id: 1, name: "Formal Shirt",    img :fshirt ,  Price:"799" ,Description:'Elegant formal shirt designed for office, meetings, and special occasions.' },
      { id: 1, name: "Casual Shirt ",   img :cshirt,   Price:"799" ,Description:'Trendy casual shirt with modern design for everyday style.' },
      { id: 1, name: "Formal Pant",     img : fpant,   Price:"899" ,Description:'Tailored formal pant that enhances your professional look.' },
      { id: 1, name: "Casual Pant ",    img : cpant,   Price:"599" ,Description:'Lightweight casual pant made for comfort and relaxed style.' },
      { id: 1, name: "Formal Shoe",     img : fshoe,   Price:"1299" ,Description:'Premium formal shoe with classic design, ideal for office and events.' },
      { id: 1, name: "Casual Shoe",     img : cshoe,   Price:"899" ,Description:'Comfortable casual shoe with stylish look for daily wear.' },
      { id: 1, name: "Perfume",         img : perfume, Price:"699" ,Description:'Refreshing long-lasting fragrance that keeps you confident all day.' },
      { id: 1, name: "Mens Watch",      img :watch,    Price:"999" ,Description:'Stylish men’s watch with modern design and durable strap.' },
      { id: 1, name: "Mens Ring",      img :ring,    Price:"399" ,Description:'Elegant men’s ring with a classy finish for a stylish look.' },
    ];
  return (
    <div>Viewdetails</div>
  )
}

export default Viewdetails