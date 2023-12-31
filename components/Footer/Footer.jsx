import { contactlinks } from '@/data/contactlinks'
import { homepageData } from '@/data/homepageData'
import { navLinks } from '@/data/navlinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaPhoneSquareAlt, FaRegEnvelope, FaTelegramPlane } from 'react-icons/fa'
import Newsletter from './Newsletter'

const Footer = () => {
  const {servicesSection} = homepageData()
  
  return (
    <footer className="bg-light200 text-dark200 py-20" aria-labelledby="footer-heading ">

      <div className="mx-auto px-4 pb-20 max-w-2xl text-center">
        <Newsletter/>
      </div>

      <div className="section-padding grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-14 md:gap-12 lg:gap-16 xl:gap-28">
        
          <div className="flex-shrink-0">
            <Link href={'/#'}><Image src={'/logo1.png'} width={200} height={50} alt='logo'/></Link>
            <p className="w- mt-4 text-">
              {contactlinks?.slogan}
            </p>
          </div>
          
          <div className='flex-shrink-0'>
            <h3 className="text- font-semibold tracking-wider text-blue-500 uppercase">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2 grid">
            {navLinks.map(({title, href}, i)=>(
              <Link href={href} key={i}>{title}
              </Link>
            ))}            
            </ul>
          </div>
              
          <div className=" flex-shrink-0">
            <h3 className="text- font-semibold tracking-wider text-blue-500 uppercase">Our Services</h3>
            <ul role="list" className="mt-4 space-y-2 grid">
            {servicesSection?.list.map(({title, link}, i)=>(
              <Link href={link} key={i}>{title}
              </Link>
            ))}            
            </ul>
          </div>

          <div className=" flex-shrink-0">
              <h3 className="text- font-semibold tracking-wider text-blue-500 uppercase">Contact</h3>
              <ul role="list" className="mt-4  grid gap-2">
                <div className="flex gap-4 items-center">
                  <FaMapMarkerAlt/> {contactlinks?.address}
                </div>
                <a href={`mailto:${contactlinks?.email}`}className='flex gap-4 items-center'>
                  <FaRegEnvelope/> {contactlinks?.email}
                </a>
                <a href={`tel:${contactlinks?.phonenumber}  `} className="flex gap-4 items-center" > 
                  <FaPhoneAlt/> {contactlinks?.phonenumber}
                </a>
                <a href={`tel:${contactlinks?.phonenumber2}  `} className="flex gap-4 items-center" > 
                  <FaPhoneAlt/> {contactlinks?.phonenumber2}
                </a>
              </ul>
          </div>
      </div>

      <div className="px-4 pt-14  mx-auto  max-w-7xl sm:px-6 lg:px-16">
        <h4 className='text-center pb-2 text-'>FOLLOW US</h4>
        <div className="pb-4 flex gap-6 items-center justify-center">
            <Link href={contactlinks?.facebook}  className='text-3xl hover-icon'><FaFacebook/></Link>
            <Link href={contactlinks?.instagram}  className='text-3xl hover-icon'><FaInstagram/></Link>
            <Link href={contactlinks?.linkedIn} className='text-3xl hover-icon'><FaLinkedin/></Link>
        </div>
        <div className="flex flex-wrap items-baseline">
          <span className="mt-8 mx-auto text-sm font-light text-gray-500">
            Copyright © 2023 @Veerock. Developed by Gogrene.
          </span>
        </div>
      </div>
</footer>

  )
}

export default Footer