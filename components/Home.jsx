import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="h-full w-full sm:space-y-6 flex flex-col justify-center">
          <div className="text-xl md:text-4xl lg:text-6xl xl:text-7xl  font-[550]">
            <div className="gradient-text">Where Ideas</div>
            <div className="gradient-text">Become Reality</div>
          </div>
          <div className="flex justify-start">
            <Button>Free Consultation</Button>
          </div>
        </div>
        <div className="">
          <Image
            height="600"
            width="600"
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
