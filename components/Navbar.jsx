import { useState } from "react";

const OverlayNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const nav_fields = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Clients", link: "#" },
    { name: "Testimonials", link: "#" },
    { name: "Newsletter", link: "#" },
    { name: "Statement", link: "#" },
    { name: "Contact", link: "#" },
  ];
  return (
    <div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={closeNav}
          className="absolute top-5 left-10 text-4xl text-white"
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {nav_fields.map((field, index) => (
            <a
              key={index}
              href={field.link}
              className="text-4xl text-white hover-underline-animation"
              onClick={closeNav}
            >
              {field.name}
            </a>
          ))}
        </div>
      </div>

      <div
        onClick={openNav}
        className="flex items-center text-white bg-transparent"
      >
        <svg
          width="31"
          height="14"
          viewBox="0 0 31 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.893555 0.68457H30.067" stroke="white" />
          <path d="M0.893555 6.8916H20.4445" stroke="white" />
          <path d="M0.893555 13.0601H30.067" stroke="white" />
        </svg>
        <div className="mx-2"> MENU</div>
      </div>
    </div>
  );
};

export default OverlayNav;
