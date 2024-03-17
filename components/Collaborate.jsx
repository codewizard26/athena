import React from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Collaborate({ isActive, isMobileView }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="bg-black rounded-lg my-20 sm:px-3 md:px-4 lg:px-6 xl:px-16"
      variants={containerVariants}
      initial="hidden"
      animate={isMobileView || isActive ? "visible" : "hidden"}
    >
      <div className="flex flex-col items-center mt-16">
        <motion.div
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text font-semibold mt-12 md:mt-24 text-center"
          variants={itemVariants}
        >
          Interested in collaborating?
        </motion.div>
        <motion.div
          className="text-lg text-white md:text-xl heading-sub mt-8 text-center"
          variants={itemVariants}
        >
          Athena’s always looking for a way to make your life easier.
        </motion.div>
        <motion.div
          className="text-sm text-white md:text-md heading-sub mt-4 text-center"
          variants={itemVariants}
        >
          Get in touch with us to discuss your project together!
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row justify-center w-full mt-10"
          variants={containerVariants}
        >
          <motion.div className="md:flex-1 md:mt-10" variants={itemVariants}>
            <div className="space-y-4 p-8 sm:p-0">
              <form
                action="https://formsubmit.co/195c98732621ce5c599562dc05479f79"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false"></input>
                <Input name="Name" type="text" placeholder="Name" />
                <Input name="Email" type="email" placeholder="Email" />
                <Input
                  name="Message"
                  type="text"
                  placeholder="Tell us about it"
                />
                <Button
                  type="submit"
                  className="mt-14 w-32 justify-center md:w-96 mb-32"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:flex-1 mt-10 p-4 md:p-2 md:mt-0"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-56 m-4 md:m-12">
                <div className="text-gray-400 mb-3">Opening Hours</div>
                <div>Monday - Friday 9am - 5pm Closed on weekends</div>
                <div className="text-gray-400 mt-4 mb-3">Address</div>
                <div>
                  city, state, country street name bldg. name number and floor
                </div>
              </div>
              <div className="w-full md:w-56 m-4 md:m-12">
                <div className="text-gray-400 mb-3">Support</div>
                <div>
                  <div>hello@athena.com</div>
                  <div>+961 00 000 000</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Collaborate;
