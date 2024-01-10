import React from "react";
import { links } from "../constants";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <motion.div
      className="gradient py-4 text-white flex justify-between px-3 md:px-0 md:justify-around items-center"
      
    >
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <Link to="/">
          <h1 className="text-3xl font-bold">
            CA<span className="text-red-700">X</span>UR
          </h1>
        </Link>
      </motion.div>
      <motion.div
        className="hidden md:flex gap-20"
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1.5,
            staggerChildren: 0.2,
          },
        }}
      >
        {links.map((link) => (
          <Link to={link.href} key={link.id}>
            <motion.span
              whileHover={{ color: "#e5e5e5", opacity: 0.8 }}
              whileTap={{ opacity: 0 }}
              className="font-semibold"
            >
              {link.name}
            </motion.span>
          </Link>
        ))}
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <RiMenu3Fill className="h-8 w-8 cursor-pointer" />
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
