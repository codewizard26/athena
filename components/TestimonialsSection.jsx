export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Best team I've worked with in a while.", author: "Client Name" },
    { quote: "They really know their stuff.", author: "Client Name" },
    { quote: "I'm so happy with the results.", author: "Client Name" },
    { quote: "I would recommend them to anyone.", author: "Client Name" },
    { quote: "They made the process so easy.", author: "Client Name" },
    { quote: "I'm so happy with the results.", author: "Client Name" },
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="text-center text-4xl mb-10">Hear from our clients.</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-none w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow bg-white text-black rounded-lg p-6">
              <p className="text-xl">“</p>
              <p className="mb-4">{testimonial.quote}</p>
              <p className="text-right">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
