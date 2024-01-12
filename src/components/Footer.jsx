import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="gradient text-white flex flex-col gap-16 pt-16 w-full">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-3xl md:text-5xl font-bold">Sign Up to Join First Experience</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Type your name here"
            className="h-12 border-white p-2 text-black"
          />
          <motion.button
            className="px-8 py-3 bg-red-600  shadow-md shadow-red-500 w-max"
            whileTap={{ scale: 0.9 }}
          >
            Send
          </motion.button>
        </div>
      </div>
      <div className="flex justify-around flex-col md:flex-row gap-10">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold">
              CA<span className="text-red-700">X</span>UR
            </h1>
          </Link>
        </div>
        <div>
          <h2 className="mb-2 font-bold text-lg">Shop</h2>
          <ul>
            <li>Sports Car</li>
            <li>Luxury Car</li>
            <li>Classic Car</li>
            <li>Old Model Car</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 font-bold text-lg">Support</h2>
          <ul>
            <li>Services</li>
            <li>Product Manual</li>
            <li>Privacy Faq</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 font-bold text-lg">Contact</h2>
          <ul>
            <li>+251 77374409</li>
            <li>hello@gmail.com</li>
            <li>Ethiopia, Addis Ababa</li>
            <li>Bole Road</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />

        <div className=" flex items-center justify-center p-4">
          <h1>Copyright &copy; 2024 CAXUR. All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
