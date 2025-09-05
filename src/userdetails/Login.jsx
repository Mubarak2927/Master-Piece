import React, { useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className=" text-white w-full flex justify-center items-center min-h-screen px-4">
      <div className="bg-blue-500 backdrop-blur-lg shadow-lg/50 rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <input
              name="email"
              value={formData.email}
              id="email"
              className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
            {error.email && (
              <p className="text-red-600 text-end text-xs mt-1">{error.email}</p>
            )}
          </div>

          <div>
            <input
              name="password"
              value={formData.password}
              className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              inputMode="numeric"
              placeholder="Password"
              onChange={handleChange}
              maxLength={10}
            />
            {error.password && (
              <p className="text-red-600 text-end text-xs mt-1">{error.password}</p>
            )}
          </div>

          <div className="text-right">
            <a href="" className="text-sm text-black hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full border hover:bg-white hover:text-black hover:border-none p-3 rounded-lg hover:cursor-pointer hover:scale-105 text-white font-semibold transition transform"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center pt-5">
          <button className="w-fit px-6 sm:px-12 py-2 flex items-center justify-center border hover:scale-105 hover:bg-white hover:border-none rounded-lg hover:text-black transition">
            <img
              src="https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png"
              alt="google"
              width="20px"
              className="mr-2"
            />
            <span className="text-sm font-medium">Sign in with Google</span>
          </button>
        </div>

        <div className="gap-2">
          <p className="text-center text-black mt-6 text-sm sm:text-base">
            Don’t have an account?
            <a href="/Sign" className="text-white px-1 hover:underline hover:text-black" >
              Signup here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
