import React from "react";
import AboutCard from "./AboutCard";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div className="px-5 mt-32 flex flex-wrap justify-between " >
      <motion.div className="md:w-1/2 flex flex-col gap-10" initial={{x:-200}} whileInView={{x:0, transition:{duration:1}}}>
        <h1 className="font-extrabold text-6xl">
          We Are Dedicated To Provide Quality Service
        </h1>
        <p className="text-base text-center md:text-left">
          Explore our extensive inventory to find the car of your dreams and
          take the first step toward your next adventure. Get behind the wheel
          and turn your automotive aspirations into reality. Our diverse
          selection ensures you'll discover the perfect vehicle to suit your
          preferences. Take the journey towards your dream car today.
        </p>
        <div className="w-[100%] m-auto" initial={{x:-200}} whileInView={{x:0, transition:{duration:2}}}>
          <img src="/carab1.png" alt="aboutcar" className="w-full h-[80%] " />
        </div>
      </motion.div>
      <motion.div className="md:w-1/2 flex flex-col md:flex-row gap-5 justify-center items-center" initial={{x:200}} whileInView={{x:0, transition:{duration:1}}}>
        <div className="flex flex-col gap-5 mt-12">
          <AboutCard
            title="Certified Mechanics"
            desc="Trust in the expertise of our certified mechanics for top-notch service and vehicle care."
          />
          <AboutCard
            title="Reasonable Price"
            desc="Discover affordability without compromising quality — our reasonable prices ensure satisfaction."
          />
        </div>
        <div className="flex flex-col gap-5">
          <AboutCard
            title="Popular Brands"
            desc="Explore a curated selection featuring popular brands, ensuring you have the best options available."
          />
          <AboutCard
            title="Best Quality Cars"
            desc="Experience excellence with our collection of best-quality cars, meticulously chosen for your satisfaction."
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
