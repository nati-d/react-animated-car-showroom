import React from "react";
import { motion } from "framer-motion";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <motion.div
      className="w-[80%] m-auto h-40 bg-white -mt-20 border border-black flex flex-col justify-around px-10 rounded-md"
      initial={{ opacity: 0 ,y:300}}
      animate={{ opacity: 1, y:0, transition: { duration: 1.5 } }}
    >
      <h3 className="font-extrabold text-3xl">Search our 3000 vehicles</h3>
      <div className="flex justify-between w-full">
        <input
          type="text"
          placeholder="Name"
          className="border py-3 rounded-md px-2 outline-none"
        />
        <input
          type="text"
          placeholder="Name"
          className="border py-3 rounded-md px-2 outline-none"
        />
        <input
          type="text"
          placeholder="Name"
          className="border py-3 rounded-md px-2 outline-none"
        />
        <input
          type="text"
          placeholder="Name"
          className="border py-3 rounded-md px-2 outline-none"
        />
        <div className="text-white">
          <motion.button
            className="px-8 py-3 bg-red-600  shadow-md shadow-red-500 flex items-center gap-4 font-bold"
            whileTap={{ scale: 0.9 }}
          >
            <LuSearch className="w-5 h-5" />
            Search
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
