import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderStatement({ isActive, isMobileView }) {
  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div className="rounded-lg  flex flex-wrap space-x-0 sm:space-x-12  justify-between w-full bg-black text-white my-6 px-4 py-8 md:flex-nowrap md:mb-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
      <motion.div
        className="flex w-full md:w-1/3 justify-center items-center  lg:w-auto lg:block"
        variants={imageVariants}
        initial="hidden"
        animate={isMobileView || isActive ? "visible" : "hidden"}
      >
        <Image src="/window.svg" alt="window" height="300" width="300" />
      </motion.div>

      <motion.div
        className="flex w-full  flex-col  sm:justify-between justify-center sm:items-start items-center mt-6 lg:mt-0"
        variants={textVariants}
        initial="hidden"
        animate={isMobileView || isActive ? "visible" : "hidden"}
      >
        <div className="text-4xl md:text-5xl text-center  sm:text-start lg:text-6xl gradient-text font-semibold">
          Founder &apos;s Statement
        </div>
        <div className="text-lg md:text-xl lg:text-2xl mt-4 mb-2">
          Hear from Athena’s Founder and CEO
        </div>
        <div className="text-sm md:text-base lg:text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </motion.div>
    </div>
  );
}
