import React, { useEffect, useState } from "react";

const CartContent = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  },[]);

  const handleRemove = (id) => {
    let updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    window.dispatchEvent(new Event("storage"));
  };
  if (cart.length === 0) {
    return <p className="text-center mt-10 text-lg">🛒 Your cart is empty</p>;
  }
  return (
    <div className="p-6 max-w-4xl  mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="flex items-center gap-4">
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"/>
            <div>
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-600">{item.Description}</p>
              <p className="text-green-600 font-bold">
                ₹{item.Price}<span className="text-lg text-black"> × </span>{item.quantity} = ₹
                {item.Price * item.quantity}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleRemove(item.id)}
            className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-black">
            Remove
          </button>
        </div>
      ))}
      <div className="text-right mt-6 text-xl font-bold">
        Total: ₹
        {cart.reduce((total, item) => total + item.Price * item.quantity, 0)}
      </div>
    </div>
  );
};
export default CartContent;
