import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Collaborate() {
  return (
    <div className="px-0 sm:px-3 md:px-4 lg:px-6 xl:px-16">
      <div className="flex flex-col items-center mt-16 ">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text font-semibold mt-12 md:mt-24 text-center">
          Interested in collaborating?
        </div>
        <div className="text-lg md:text-xl heading-sub mt-8 text-center">
          Athena’s always looking for a way to make your life easier.
        </div>
        <div className="text-sm md:text-md heading-sub mt-4 text-center">
          Get in touch with us to discuss your project together!
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full mt-10">
          <div className="w-full md:flex-1 md:mt-10">
            <div className="space-y-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="text" placeholder="Tell us about it" />
              <Button className="mt-12 w-full md:w-96">Send Message</Button>
            </div>
          </div>
          <div className="w-full md:flex-1 mt-10 md:mt-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-56 m-4 md:m-12 ">
                <div className="text-gray-400 mb-3">Opening Hours</div>
                <div>Monday - Friday 9am - 5pm Closed on weekends</div>
                <div className="text-gray-400 mt-4 mb-3">Address</div>
                <div>
                  city, state, country street name bldg. name number and floor
                </div>
              </div>
              <div className="w-full md:w-56 m-4 md:m-12 ">
                <div className="text-gray-400 mb-3">Support</div>
                <div>
                  <div>hello@athena.com</div>
                  <div>+961 00 000 000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
