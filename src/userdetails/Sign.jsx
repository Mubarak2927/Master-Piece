import React, { useState } from "react";

export const Sign = () => {
  const [formData, setformData] = useState({
    fname: "",
    email: "",
    number: "",
    country: "",
    state: "",
    password: "",
    confirm_password: "",
  });

  const [error, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only digits for password & confirm_password
    if (name === "password" || name === "confirm_password") {
      if (/^\d*$/.test(value)) {
        setformData({ ...formData, [name]: value });
      }
    } else if (name === "number") {
      // Phone number also only digits
      if (/^\d*$/.test(value)) {
        setformData({ ...formData, [name]: value });
      }
    } else {
      setformData({ ...formData, [name]: value });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully");
    }
    console.log(formData);
  };

  const validate = () => {
    let newError = {};
    if (!formData.fname.trim()) newError.fname = "Enter Your Name";
    if (!formData.email.trim()) {
      newError.email = "Enter Your Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email is not Valid";
    }
    if (!formData.number.trim()) {
      newError.number = "Enter Your Number";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newError.number = "Invalid Number";
    }
    if (!formData.country.trim()) newError.country = "Select Your Country";
    if (!formData.state.trim()) newError.state = "Select Your State";
    if (!formData.password.trim()) {
      newError.password = "Enter Your Password";
    } else if (formData.password !== formData.confirm_password) {
      newError.password = "Password not Match";
    }
    if (!formData.confirm_password.trim()) {
      newError.confirm_password = "Re-Enter Your Password";
    } else if (formData.password !== formData.confirm_password) {
      newError.confirm_password = "Password not Match";
    }
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  return (
    <div className=" text-white w-full flex justify-center items-center min-h-screen px-4">
      <div className="bg-blue-600 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg/55 w-full max-w-md">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-5">
          Create Your Account
        </h1>
        <form onSubmit={formSubmit} className="space-y-4">
          <div>
            <input
              className="border w-full p-2 rounded-lg text-black outline-none"
              name="fname"
              type="text"
              placeholder="Full Name"
              value={formData.fname}
              onChange={handleChange}
            />
            {error.fname && <p className="text-red-600 text-end text-sm mt-1">{error.fname}</p>}
          </div>
          <div>
            <input
              className="border w-full p-2 rounded-lg text-black outline-none"
              name="email"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <p className="text-red-600 text-end text-sm mt-1">{error.email}</p>}
          </div>
          <div>
            <input
              className="border w-full p-2 rounded-lg text-black outline-none"
              type="tel"
              maxLength={10}
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
            />
            {error.number && <p className="text-red-600 text-end text-sm mt-1">{error.number}</p>}
          </div>
          <div>
            <input
              className="border w-full p-2 rounded-lg text-black outline-none"
              value={formData.password}
              name="password"
              minLength={4}
              maxLength={10}
              type="password"
              inputMode="numeric"
              placeholder="Password"
              onChange={handleChange}
            />
            {error.password && <p className="text-red-600 text-end text-sm mt-1">{error.password}</p>}
          </div>
          <div>
            <input
              className="border w-full p-2 rounded-lg text-black outline-none"
              name="confirm_password"
              minLength={4}
              maxLength={10}
              type="password"
              inputMode="numeric"
              placeholder="Confirm Password "
              value={formData.confirm_password}
              onChange={handleChange}
            />
            {error.confirm_password && (
              <p className="text-red-600 text-end text-sm mt-1">{error.confirm_password}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full border hover:bg-white hover:text-black hover:border-none p-2  rounded-lg hover:cursor-pointer hover:scale-105 text-white font-semibold transition transform "
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center">
            <button className="w-fit p-2 px-20 flex items-center justify-center gap-3 border hover:scale-105 hover:bg-white hover:border-none rounded-lg hover:text-black transition">
              <img
                src="https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png"
                alt="google"
                width="20px"
              />
              <span className="text-sm font-medium">Sign up with Google</span>
            </button>
          </div>
          <div className="flex gap-1 justify-center text-black text-base mt-4">
            <p>Already have an account?</p>
            <a
              href="/Login"
              className="text-white px-1 hover:text-black hover:underline"
            >
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
