import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

function Home({ isActive, isMobileView }) {
  const textVariant = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const buttonVariant = {
    hover: { scale: 1.0, transition: { duration: 0.3 } },
  };

  const imageVariant = {
    offscreen: { scale: 0.95 },
    onscreen: { scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className="mb-16 sm:mb-0 relative">
      <div
        className="flex lg:hidden justify-center -mb-16"
        style={{ zIndex: 1 }}
      >
        <div className="border-black border-[16px] rounded-full">
          <img src="/moon.png" className="w-24" alt="moon" />
        </div>
      </div>
      <div className="sm:flex h-auto space-y-4 sm:space-y-0 bg-black rounded-md">
        <motion.div
          className="h-full space-y-6 w-full flex flex-col  justify-center px-4"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          animate={isMobileView || isActive ? "visible" : "hidden"}
        >
          <motion.div
            animate={isMobileView || isActive ? "visible" : "hidden"}
            variants={textVariant}
            className="text-3xl mt-20 sm:mt-0 md:text-4xl lg:text-6xl xl:text-7xl font-[550] text-center sm:text-left gradient-text"
          >
            <div>Where Ideas</div>
            <div>Become Reality</div>
          </motion.div>
          <motion.div
            variants={buttonVariant}
            animate={isMobileView || isActive ? "visible" : "hidden"}
            whileHover="hover"
            className="flex sm:justify-start justify-center w-full"
          >
            <Button className="mt-4 sm:mt-0">Free Consultation</Button>
          </motion.div>
        </motion.div>
        <motion.div
          animate={isMobileView || isActive ? "visible" : "hidden"}
          className="flex w-full justify-center items-center"
          variants={imageVariant}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Image height="500" width="500" src="/moorti.svg" alt="moorti" />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
