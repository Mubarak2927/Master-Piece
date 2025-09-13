import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p className="text-center mt-10">No product selected</p>;
  }

  const totalPrice = quantity * product.Price;

  const addClick = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));

    alert("✅ Item added to cart!");
    navigate("/Add-to-cart");
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-2xl sm:text-3xl text-blue-600 cursor-pointer hover:text-black mb-4 sm:mb-6 flex items-center gap-2">
        <FaArrowAltCircleLeft /> Back
      </button>

      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <img
          src={product.img}
          alt={product.name}
          className="rounded-xl w-full sm:w-72 md:w-80 h-100 md:h-80 object-cover shadow-md hover:scale-105 transition" />
        <div className="text-center md:text-left w-full">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            {product.Description}
            <p className="text-green-600 font-medium mt-1">
              <span className="text-[10px] px-1">🟢</span>In Stock
            </p>
          </p>

          <p className="text-lg sm:text-xl font-semibold text-green-600 mb-4">
            <span className="text-black">Price :</span> ₹{product.Price} <br />
            <span className="text-sm line-through text-gray-400">₹1200</span>
            <p className="text-yellow-500 text-lg">★★★★☆ (4.5)</p>
          </p>

          {product.About && (
            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
              {product.About}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
            <div className="bg-gray-200 rounded-lg p-2 flex items-center">
              <label className="mr-2 font-semibold text-sm sm:text-base">
                Quantity:
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="rounded-md px-2 py-1 text-sm sm:text-base"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-lg sm:text-xl font-bold text-red-600">
              Total : ₹{totalPrice}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => addClick(product)}
              className="bg-blue-600 hover:bg-black text-white px-5 sm:px-6 py-2 rounded-lg shadow-md w-full sm:w-auto">
              Add to Cart
            </button>
            <button className="bg-green-600 hover:bg-black text-white px-5 sm:px-6 py-2 rounded-lg shadow-md w-full sm:w-auto">
              <a href="/Buy"> Buy Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
