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
      className="bg-black rounded-lg  sm:px-3 md:px-4 lg:px-6 xl:px-16"
      variants={containerVariants}
      initial="hidden"
      animate={isMobileView || isActive ? "visible" : "hidden"}
    >
      <div className="flex flex-col items-center ">
        <motion.div
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text font-semibold mt-12 md:mt-24 text-center"
          variants={itemVariants}
        >
          Interested in collaborating?
        </motion.div>
        <motion.div
          className="text-lg text-white md:text-xl heading-sub mt-2 mx-4 text-center"
          variants={itemVariants}
        >
          Athena’s always looking for a way to make your life easier.
        </motion.div>
        <motion.div
          className="text-sm text-white md:text-md heading-sub mt-2 text-center"
          variants={itemVariants}
        >
          Get in touch with us to discuss your project together!
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row justify-between w-full mt-2"
          variants={containerVariants}
        >
          <motion.div className="md:flex " variants={itemVariants}>
            <div className="space-y-4 p-8 sm:p-0">
              <form
                action="https://formsubmit.co/195c98732621ce5c599562dc05479f79"
                method="POST"
              >
                <input
                  // className="hidden"
                  type="hidden"
                  name="_captcha"
                  value="false"
                ></input>
                <input type="hidden" name="_next" value="https://athenaconsulting.vercel.app/"></input>
                <Input name="Name" type="text" placeholder="Name" />
                <Input name="Email" type="email" placeholder="Email" />
                <Input
                  name="Message"
                  type="text"
                  placeholder="Tell us about it"
                />
                <Button
                  type="submit"
                  className="mt-14 mb-4 w-32 justify-center md:w-96 "
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
          <motion.div
            className="md:flex  p-4 md:p-2 md:mt-0"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row text-white sm:space-x-12 sm:mx-6">
              <div className=" ">
                <div className="text-gray-400 ">Opening Hours</div>
                <div>Monday - Friday 9am - 5pm Closed on weekends</div>
                <div className="text-gray-400 mt-4 ">Address</div>
                <div>
                  city, state, country street name bldg. name number and floor
                </div>
              </div>
              <div className=" ">
                <div className="text-gray-400 ">Support</div>
                <div className="sm:block flex justify-between text-base sm:space-y-4">
                  <div className="underline">
                    <a href="mailto:hello@athena.com">hello@athena.com</a>
                  </div>
                  <div className="underline">
                    <a href="tel:+9610000000">+961 000 00000</a>
                  </div>
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
