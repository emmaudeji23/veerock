import { contactlinks } from '@/data/contactlinks';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Link from 'next/link';

import {FaFacebookF, FaInstagram, FaRegEnvelope, FaLinkedinIn, FaPhone, FaMapMarkerAlt, } from 'react-icons/fa'

const Navigation = ({themeBtn}) => {
  return (
    <>
        <section className='w-full bg-blue-900 text-white md:block hidden'>
            <div className="section-padding text-sm w-full flex  items-center justify-between space-x-4">
               <div className="">
                  <div className=" flex gap-4 items-center ">
                      <p className='flex items-center gap-2'>
                        <FaMapMarkerAlt/> {contactlinks?.address}
                      </p>
                      <a href={`mailto:${contactlinks?.email}`}className='flex gap-2 items-center'>
                        <FaRegEnvelope/> {contactlinks?.email}
                      </a>
                  </div>
               </div>
               <div className="flex gap-4 items-center">
                  <div className="h-6 w-6 flex justify-center items-center rounded-full bg-yellow-5 text-xl">{themeBtn}</div>
                  <div className='w-full flex '>
                      <Link href={contactlinks?.facebook} className='flex bg-blue-700 items-center px-4'> <FaFacebookF/></Link>
                      <Link href={contactlinks?.instagram}  className='flex bg-red-600 items-center px-4'> <FaInstagram/></Link>
                      <Link href={contactlinks?.linkedIn}  className='flex bg-blue-800 items-center px-4'> <FaLinkedinIn/></Link>
                      <a href="tel:+2348032787601" className='flex gap-2 py-2 px-4 bg-yellow-500 text-black ' > <FaPhone/> {contactlinks?.phonenumber}</a>
                  </div>
               </div>
            </div>
        </section>

        <div className="hidden md:block">
          <DesktopNav themeBtn={themeBtn}/>
        </div>
        <div className="block md:hidden">
          <MobileNav themeBtn={themeBtn}/>
        </div>
    
    </>
   
  );
};

export default Navigation;


