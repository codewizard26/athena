import Image from "next/image";
import { Button } from "./ui/button";

export default function NewsletterSection() {
  return (
    <div className=" sm:grid-cols-2 bg-black text-white flex flex-wrap md:flex-nowrap py-12 px-6 md:px-12 rounded-lg">
      <div className="flex-1">
        <h2 className="text-6xl gradient-text font-[550] mb-4">
          Amped up, Augmented and Awe-inspiring
        </h2>
        <p className="text-xl mb-4">
          Athena &apos; s Regularly Updated Newsletter
        </p>
        <p className="mb-8">
          Keep up with us and our interesting bits via our newsletter.
        </p>
        <Button className="">Join Newsletter</Button>
      </div>
      <div className="flex-1 hidden md:block">
        <Image
          src="window.svg"
          alt="window"
          height="400"
          width="400"
          //   className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
