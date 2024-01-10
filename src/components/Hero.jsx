import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full gradient text-white flex flex-wrap md:p-40 items-center gap-10 ">
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-6 md:gap-16 items-center md:items-start "
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-center md:text-left">
          Drive Home With Your <span className="text-red-600">Perfect Car</span>
        </h1>
        <p className="text-lg text-center md:text-left">
          Explore our extensive inventory to find the car of your dreams and
          take the first step toward your next adventure. Get behind the wheel
          and turn your automotive aspirations into reality. Our diverse
          selection ensures you'll discover the perfect vehicle to suit your
          preferences. Take the journey towards your dream car today.
        </p>
        <div>
          <motion.button
            className="px-8 py-3 bg-red-600  shadow-md shadow-red-500"
            whileTap={{ scale: 0.9 }}
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/3 flex items-center justify-center "
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
      >
        <img src="/herocar.png" alt="herocar" />
      </motion.div>
    </div>
  );
};

export default Hero;
