export default function ClientsSection() {
  const clients = [
    { name: "ATOM Accelerator", logo: "/path-to-logo/atom.png" },
    { name: "DIFINITY", logo: "/path-to-logo/seraphim.png" },
    { name: "Seraphim Labs", logo: "/path-to-logo/eulimet.png" },
    { name: "Lunarspace", logo: "/path-to-logo/virtuoso.png" },
    { name: "Eumlet", logo: "/path-to-logo/mint.png" },
    { name: "Concordium", logo: "/path-to-logo/cerebro.png" },
    { name: "Gains Associates", logo: "/path-to-logo/cerebro.png" },
    { name: "Shade Protocol", logo: "/path-to-logo/cerebro.png" },
    { name: "SwitcheoLabs", logo: "/path-to-logo/cerebro.png" },
    { name: "BG Trade", logo: "/path-to-logo/cerebro.png" },
  ];

  return (
    <div className="text-white bg-black rounded-md mb-10 py-1 sm:space-y-16">
      <div className=" text-center gradient-text text-5xl md:text-7xl font-[550] mb-8">
        Meet some of our clients.
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-8">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex flex-col  items-center   basis-1/3 sm:basis-1/4 lg:basis-1/6"
          >
            <div className="w-24 h-24 bg-white rounded-full mb-4">
              {/* If you have logo images, use <img> instead of <div> */}
              {/* <img src={client.logo} alt={client.name} className="w-24 h-24 rounded-full mb-4" /> */}
            </div>
            <div className="text-center">{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
