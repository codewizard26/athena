import { motion } from "framer-motion";

export default function TestimonialsSection({ isActive }) {
  const testimonials = [
    { quote: "Best team I've worked with in a while.", author: "Client Name" },
    { quote: "They really know their stuff.", author: "Client Name" },
    { quote: "I'm so happy with the results.", author: "Client Name" },
    { quote: "I would recommend them to anyone.", author: "Client Name" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="bg-black rounded-md pt-1 pb-10"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center gradient-text mb-10 mt-16 text-5xl md:text-7xl sm:px-0 px-10 font-[550] ">
        Hear from our clients.
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8"
        variants={containerVariants}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4"
            variants={itemVariants}
          >
            <div className="flex-grow flex space-x-4 justify-around items-center h-full bg-white text-black rounded-lg p-6">
              <div className="flex-none w-16 h-16 bg-gray-200 rounded-full" />
              <div className="w-[80%]">
                <p className="mb-4 text-md font-[550]">{testimonial.quote}</p>
                <p className="text-right">- {testimonial.author}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
