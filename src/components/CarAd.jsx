import React from "react";
import {motion} from 'framer-motion'
const CarAd = () => {
  return (
    <div className="gradient w-full text-white p-5 md:p-20 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col gap-10">
        <h1 className="text-4xl text-center md:text-left md:text-7xl font-semibold">
          Worlds Largest Car Brands Marketplace
        </h1>
        <p className="text-gray-300">
          The ultimate hub for car enthusiasts, the World's Largest Car Brands
          Marketplace offers a seamless platform to explore and purchase
          vehicles from the most renowned global manufacturers, providing a
          comprehensive and dynamic automotive shopping experience.
        </p>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-4">
            <img src="/quality1.png" alt="" className="w-8 h-8" /> Premium
            Luxury Car Selection
          </li>
          <li className="flex items-center gap-4">
            <img src="/user.png" alt="" className="w-8 h-8" />
            Seamless High-End Experience
          </li>
          <li className="flex items-center gap-4">
            <img src="/diamond.png" alt="" className="w-8 h-8" />
            Informed Luxury Purchasing Decisions
          </li>
        </ul>
        <motion.button
          className="px-8 py-3 bg-red-600  shadow-md shadow-red-500 w-max"
          whileTap={{ scale: 0.9 }}
        >
          Call Us
        </motion.button>
      </div>
      <div className="hidden  w-full md:w-1/2 md:flex justify-center items-center">
        <img src="abcar1.png" alt="" className="w-[80%]" />
      </div>
    </div>
  );
};

export default CarAd;
