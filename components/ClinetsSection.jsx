export default function ClientsSection() {
  const clients = [
    { name: "ATOM Accelerator", logo: "/path-to-logo/atom.png" },
    { name: "Seraphim Labs", logo: "/path-to-logo/seraphim.png" },
    { name: "Eulimet", logo: "/path-to-logo/eulimet.png" },
    { name: "Virtuoso", logo: "/path-to-logo/virtuoso.png" },
    { name: "Mint", logo: "/path-to-logo/mint.png" },
    { name: "Cerebro", logo: "/path-to-logo/cerebro.png" },
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="text-center text-4xl mb-8">Meet some of our clients.</div>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {clients.map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full mb-4">
              {/* If you have logo images, use <img> instead of <div> */}
              {/* <img src={client.logo} alt={client.name} className="w-24 h-24 rounded-full mb-4" /> */}
            </div>
            <div>{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
