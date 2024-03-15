import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function Home() {
  return (
    <div>
        <div className="moon-container absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="moon-section flex flex-row justify-center">
          <Image
            className="moon-image"
            width="180"
            height="180"
            src="moon.svg"
            alt="moon"
          />
        </div>
      </div>
        <div className="grid grid-cols-2">
          <div className="h-full w-full sm:space-y-6 flex flex-col justify-center">
            <div className=" md:text-7xl font-[550]">
              <div className="gradient-text">Where Ideas</div>
              <div className="gradient-text">Become Reality</div>
            </div>
            <div className="flex justify-start">
              <Button>Free Consultation</Button>
            </div>
          </div>
          <div className="">
            <Image height='600' width="600" className='moorti-1' src="moorti.svg" alt="moorti" />
          </div>
        </div>
    </div>
  )
}

export default Home