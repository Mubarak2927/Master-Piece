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

    if (name === "fname") {
      if (/^[A-Za-z]*$/.test(value)) {
        setformData({ ...formData, [name]: value });
      }
    } else if (name === "email") {
      if (!/\s/.test(value)) {
        setformData({ ...formData, [name]: value });
      }
    } else if (name === "number") {
      if (/^\d*$/.test(value)) {
        setformData({ ...formData, [name]: value });
      }
    } else if (name === "password" || name === "confirm_password") {
      if (/^[A-Za-z0-9]*$/.test(value)) {
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
    } else if (!/^[6-9]\d{9}$/.test(formData.number)) {
      newError.number = "Enter Valid Number";
    }

    if (!formData.country.trim()) newError.country = "Select Your Country";
    if (!formData.state.trim()) newError.state = "Select Your State";

    if (!formData.password.trim()) {
      newError.password = "Enter Your Password";
    } else if (formData.password.length < 4 || formData.password.length > 10) {
      newError.password = "Password must be 4-10 characters";
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

  const ErrorText = ({ msg }) => (
    <p className="text-red-500 text-end text-[10px] sm:text-xs mt-1 min-h-[18px]">
      {msg || ""}
    </p>
  );

  return (
    <div className="text-white w-full flex justify-center items-center min-h-screen px-4 sm:px-6 ">
      <div
        className="text-white bg-gradient-to-tl to-blue-700 via-blue-900 from-blue-700 backdrop-blur-lg 
        p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl"
      >
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Create Your Account
        </h1>

        <form
          onSubmit={formSubmit}
          className="space-y-3 sm:space-y-4"
          noValidate
        >
          <div>
            <input
              className="border w-full p-2 sm:p-3 rounded-lg text-black outline-none text-sm sm:text-base"
              name="fname"
              type="text"
              placeholder="Full Name"
              value={formData.fname}
              onChange={handleChange}
            />
            <ErrorText msg={error.fname} />
          </div>
          <div>
            <input
              className="border w-full p-2 sm:p-3 rounded-lg text-black outline-none text-sm sm:text-base"
              name="email"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <ErrorText msg={error.email} />
          </div>
          <div>
            <input
              className="border w-full p-2 sm:p-3 rounded-lg text-black outline-none text-sm sm:text-base"
              type="tel"
              maxLength={10}
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
            />
            <ErrorText msg={error.number} />
          </div>
          <div>
            <input
              className="border w-full p-2 sm:p-3 rounded-lg text-black outline-none text-sm sm:text-base"
              value={formData.password}
              name="password"
              minLength={4}
              maxLength={10}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <ErrorText msg={error.password} />
          </div>
          <div>
            <input
              className="border w-full p-2 sm:p-3 rounded-lg text-black outline-none text-sm sm:text-base"
              name="confirm_password"
              minLength={4}
              maxLength={10}
              type="password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
            <ErrorText msg={error.confirm_password} />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full border hover:bg-white hover:text-black hover:border-none px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:cursor-pointer hover:scale-105 text-white font-semibold transition transform"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center">
            <button className="w-full p-2 sm:px-20 flex items-center justify-center gap-3 border hover:scale-105 hover:bg-white hover:border-none rounded-lg hover:text-black transition">
              <img
                src="https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png"
                alt="google"
                width="20px"
              />
              <span className="text-sm sm:text-base font-medium">
                Sign up with Google
              </span>
            </button>
          </div>
          <div className="flex gap-1 justify-center text-xs sm:text-sm md:text-base text-black mt-3">
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
