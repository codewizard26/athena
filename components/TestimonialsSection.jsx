export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Best team I've worked with in a while.", author: "Client Name" },
    { quote: "They really know their stuff.", author: "Client Name" },
    { quote: "I'm so happy with the results.", author: "Client Name" },
    { quote: "I would recommend them to anyone.", author: "Client Name" },
  ];

  return (
    <div className="  ">
      <div className="text-center gradient-text mb-10 mt-16 text-7xl font-[550] ">
        Hear from our clients.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-grow flex space-x-4 justify-around items-center h-full bg-white md:bg-opacity-100 bg-opacity-25 border border-opacity-25 border-gray-300 text-black rounded-lg p-6">
              <div className="flex-none w-16 h-16 bg-gray-200 rounded-full" />
              <div className="w-[80%] ">
                <p className="mb-4 text-md font-[550]">{testimonial.quote}</p>
                <p className="text-right">- {testimonial.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
