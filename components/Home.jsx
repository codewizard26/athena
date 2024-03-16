import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Home() {
  return (
    <div>
      <div
        className="flex sm:hidden justify-center  -mb-16 "
        style={{
          zIndex: 1,
          position: "relative",
        }}
      >
        <div className="border-black border-[16px] rounded-full   ">
          <img src="/moon.png" className="w-24" />
        </div>
      </div>
      <div className="grid bg-black sm:h-auto rounded-md h-screen sm:grid-cols-2 ">
        <div className="h-full  space-y-6 sm:space-x-0 w-full sm:space-y-6 flex flex-col justify-center">
          <div className="text-3xl md:text-4xl sm:text-left text-center lg:text-6xl xl:text-7xl  font-[550]">
            <div className="gradient-text">Where Ideas</div>
            <div className="gradient-text">Become Reality</div>
          </div>
          <div className="flex sm:justify-start justify-center">
            <Button>Free Consultation</Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            height="500"
            width="500"
            className="moorti-1"
            src="moorti.svg"
            alt="moorti"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
