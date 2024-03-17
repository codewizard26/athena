import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderStatement({ isActive }) {
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
    <div className="rounded-lg sm:grid-cols-2 bg-black text-white flex my-12 flex-wrap md:flex-nowrap md:mb-8 md:py-12 md:px-12">
      <motion.div
        className="flex-1 hidden md:block"
        variants={imageVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <Image
          src="window.svg"
          alt="window"
          height="400"
          width="400"
          //   className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="flex-1 m-8"
        variants={textVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <div className="text-6xl gradient-text font-[550] mt-4 mb-4">
          Founder&apos;s Statement
        </div>
        <div className="text-2xl mt-4 mb-2">
          Hear from Athena’s Founder and CEO
        </div>
        <div className="mb-8">
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
