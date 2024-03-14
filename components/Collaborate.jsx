import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Collaborate() {
  return (
    <div>
        <div classNam= "flex mt-16 " >
        <div className='flex text-7xl gradient-text font-[550] mt-24 flex-row justify-center'>
            Interested in collaborating ?
        </div>
        <div className='flex text-xl heading-sub mt-8 flex-row justify-center'>
            Athena’s always looking for a way to make your life easier.
        </div>
        <div className='flex text-md heading-sub mt-4 flex-row justify-center'>
            Get in touch with us to discuss your project together!
        </div>
           <div className='flex flex-row'>
            <div className='flex-1 mt-10'>
                <div className='gap-4 '>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder = "Tell us about it" />
                <Button className="mt-12 w-96">Send Message</Button>

                </div>
            </div>
            <div className='flex-1'>
                <div className='flex flex-row'>
                <div className='flex flex-col w-56 m-12 '>
                    <div className=' text-gray-400 mb-3'>
                        Opening Hours
                    </div>
                    <div>
                        Monday - Friday
                        9am - 5pm
                        Closed on weekends
                    </div>
                    <div className='text-gray-400 mt-4 mb-3'>
                        Address
                    </div>
                    <div>
                        city, state, country
                        street name
                        bldg. name
                        number and floor
                    </div>
                </div>
                <div className='flex flex-col m-12 mb-3 '>
                    <div className='text-gray-400'>
                    Support
                    </div>
                    <div className=''>
                        <div>hello@athena.com</div>
                        <div>+961 00 000 000</div>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
    </div>
  )
}

export default Collaborate