import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function NewsletterSection({ isActive, isMobileView }) {
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <div className="sm:grid-cols-2 bg-black text-white flex flex-wrap md:flex-nowrap py-12 px-6 md:px-12 rounded-lg">
      <motion.div
        className="flex-1"
        variants={textVariants}
        initial="hidden"
        animate={isMobileView || isActive ? "visible" : "hidden"}
      >
        <h2 className="text-6xl gradient-text font-[550] mb-4">
          Amped up, Augmented and Awe-inspiring
        </h2>
        <p className="text-xl mb-4">
          Athena &apos; s Regularly Updated Newsletter
        </p>
        <p className="mb-8">
          Keep up with us and our interesting bits via our newsletter.
        </p>
        <motion.div variants={buttonVariants}>
          <Button className="button-hover-fill">Join Newsletter</Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 hidden md:block"
        variants={imageVariants}
        initial="hidden"
        animate={isMobileView || isActive ? "visible" : "hidden"}
      >
        <Image
          src="window.svg"
          alt="window"
          height="400"
          width="400"
          //   className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
