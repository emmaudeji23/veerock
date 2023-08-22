import { navLinks } from '@/data/navlinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    
    <footer className="bg-light200 text-dark200" aria-labelledby="footer-heading ">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className=" py-12 section-padding ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="text-white xl:col-span-1">
                <Image src={'/logo.png'} width={80} height={50} alt='logo'/>
            <p className="w-1/2 mt-2 text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider text-blue-500 uppercase">About Veerock</h3>
                <ul role="list" className="mt-4 space-y-2 grid">
                {navLinks.map(({title, href}, i)=>(
                  <Link href={href} key={i}>{title}
                  </Link>

                ))}            
                  
                </ul>
              </div>
              
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold tracking-wider text-blue-500 uppercase">Stay Connected</h3>
                <ul role="list" className="mt-4 space-y-2 grid">
                {navLinks.map(({title, href}, i)=>(
                  <Link href={href} key={i}>{title}
                  </Link>

                ))}            
                  
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider text-blue-500 uppercase">Customer Service</h3>
                <ul role="list" className="mt-4 space-y-2 grid">
                {navLinks.map(({title, href}, i)=>(
                  <Link href={href} key={i}>{title}
                  </Link>

                ))}            
                  
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold tracking-wider text-blue-500 uppercase">Payment Method</h3>
                <ul role="list" className="mt-4 space-y-2 grid">
                {navLinks.map(({title, href}, i)=>(
                  <Link href={href} key={i}>{title}
                  </Link>

                ))}            
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 mx-auto  max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-wrap items-baseline">
          <span className="mt-2 mx-auto text-sm font-light text-gray-500">
            Copyright © 2023 @Veerock. Developed by Gogrene.
          </span>
        </div>
      </div>
</footer>

  )
}

export default Footer