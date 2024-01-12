import React from "react";
import { motion } from "framer-motion";
const variants = {
  initial: { y: 50, 
    opacity: 0 
},
  animate: { 
    y: 0, opacity: 1, 
    transition: { duration: 1, 
        staggerChildren:0.2 } },
};

const Logos = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-10 justify-around items-center mb-20 w-full"
      initial="initial"
      whileInView="animate"
      variants={variants}
    >
      <motion.div
        className="w-[350px] h-[200px] border shadow-md p-10 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        variants={variants}
      >
        <img src="/Toyota.svg" alt="" className=" w-full h-full" />
      </motion.div>
      <motion.div
        className="w-[350px] h-[200px] border shadow-md p-10 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        variants={variants}
      >
        <img src="/mercedes.png" alt="" className=" w-full h-full" />
      </motion.div>
      <motion.div
        className="w-[350px] h-[200px] border shadow-md p-10 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        variants={variants}
      >
        <img src="/Volkswagen.png" alt="" className="w-full h-full" />
      </motion.div>
      <motion.div
        className="w-[350px] h-[200px] border shadow-md p-10 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        variants={variants}
      >
        <img src="/BMW.svg" alt="" className=" w-full h-full" />
      </motion.div>
    </motion.div>
  );
};

export default Logos;
