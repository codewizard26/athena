import Image from "next/image";
import { Button } from "./ui/button";

export default function FounderStatement() {
  return (
    <div className=" text-white flex flex-wrap md:flex-nowrap md:mb-8 md:py-12  md:px-12">
      <div className="flex-1 hidden md:block">
        <Image
          src="window.svg"
          alt="window"
          height="400"
          width="400"
          //   className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 m-8">
        <div className="text-6xl gradient-text font-[550]  mt-4 mb-4">
          Founder&apos;s Statement
        </div>
        <div className="text-2xl mt-4 mb-2 ">
          Hear from Athena’s Founder and CEO
        </div>
        <div className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}
