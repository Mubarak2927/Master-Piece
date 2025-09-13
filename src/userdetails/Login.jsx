import React, { useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

      if (name === "name") {
  if (/^[A-Za-z]+(?: [A-Za-z]+)?$/.test(value) || value === "") {
    setFormData({ ...formData, [name]: value });
  }
    } else if (name === "email") {
      if (!/\s/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "password") {
      const noSpaceValue = value.replace(/\s/g, "");
      setFormData({ ...formData, [name]: noSpaceValue });
    }
  };

  const handleKeyDown = (e) => {
    if ((e.target.name === "email" || e.target.name === "password") && e.key === " ") {
      e.preventDefault();
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

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
    <div className="text-white w-full flex justify-center items-center min-h-screen px-4">
      <div className="text-white bg-gradient-to-tl to-blue-700 via-blue-900 from-blue-700 backdrop-blur-lg shadow-lg/50 rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
          <div>
            <input
              name="name"
              value={formData.name}
              className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <div className="h-4">
              {error.name && (
                <p className="text-red-600 text-end text-xs">{error.name}</p>
              )}
            </div>
          </div>

          <div>
            <input
              name="email"
              value={formData.email}
              className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <div className="h-4">
              {error.email && (
                <p className="text-red-600 text-end text-xs">{error.email}</p>
              )}
            </div>
          </div>

          <div>
            <input
              name="password"
              value={formData.password}
              className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Password"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              maxLength={10}
            />
            <div className="h-4">
              {error.password && (
                <p className="text-red-600 text-end text-xs">{error.password}</p>
              )}
            </div>
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
          <div className="flex justify-center">
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
            <a
              href="/Sign"
              className="text-white px-1 hover:underline hover:text-black"
            >
              Signup here
            </a>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
};
