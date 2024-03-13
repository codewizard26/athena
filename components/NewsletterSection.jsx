import { Button } from "./ui/button";

export default function NewsletterSection() {
  return (
    <div className="bg-black text-white flex flex-wrap md:flex-nowrap py-12 px-6 md:px-12">
      <div className="flex-1">
        <h2 className="text-5xl font-bold mb-4">
          Amped up,
          <br />
          Augmented and
          <br />
          Awe-inspiring
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
        <img
          src="window.svg"
          alt="window"
          //   className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
