import Image from 'next/image'
import Link from 'next/link'
import { FiMenu,  FiX } from "react-icons/fi"
import { navLinks } from '@/data/navlinks'
import { useGlobalState } from "@/context/GlobalStateContext"

import {FaFacebookF, FaInstagram, FaRegEnvelope, FaLinkedinIn, FaPhone, FaMapMarkerAlt, } from 'react-icons/fa'
import GetQuote from '../Buttons/GetQuote'
import { contactlinks } from '@/data/contactlinks'


const MobileNav = ({themeBtn}) => {

    const{showSidebar, setShowSidebar, active, setActive, closeModal, openModal, modalType} = useGlobalState()

  return (
    <div className=' relative z-20 text-dark200 '>
       <div className="fixed w-full bg-light200 shadow-sm z-50 section-padding py-4 flex justify-between">
          <Link href={'/'} className=" flex  flex-shrink-0 " onClick={()=>setShowSidebar(false)}>
              <Image
                  width={110} height={45}
                  src="/logo1.png"
                  alt="Logo"
                />
          </Link> 
          <div className='text-2xl flex items-center' onClick={()=>setShowSidebar(prev=>!prev)}>
            {
              showSidebar ? (<FiX/>): (<FiMenu/>)
            }
          </div>
        </div> 
        
       { 
       <nav className={`${showSidebar ? 'translate-x-0': 'translate-x-full'} fixed transform transition-transform duration-500 flex -z-10 inset-0  `}>
          <div onClick={()=>setShowSidebar(false)} className="empty-space w-full h-full"></div>
          <div className='bg-light200 flex flex-col justify-between shadow-2xl pt-20'>
            <div className="grid gap-3  pr-4 pl-12 py-6 ">
                    {
                        navLinks?.map(({title, href}) => (
                            <Link key={title} href={href}
                            onClick={()=>setActive(title)}
                            className={`w-full py-3 hover:border-b-4 border-blue-800 duration-300 ${active===title ? 'border-b-4' : ''}`}
                            >{title}</Link>                  
                        ))
                    }    
            </div>

            <div className="space-y-4 pb-12 pr-4 pl-12 py-6">
              <GetQuote/>
              <div className="flex gap-4 text-lg">Toggle theme: {themeBtn}</div>
                <p className='flex items-center gap-2'>
                  <FaMapMarkerAlt/> {contactlinks?.address}
                </p>
                <a href={`mailto:${contactlinks?.email}`} className='flex gap-2 items-center'>
                  <FaRegEnvelope/> {contactlinks?.email}
                </a>
                
                  <div className="text-white">
                      <div className='w-full flex '>
                          <Link href={contactlinks?.facebook}className='flex bg-blue-700 items-center px-4'> <FaFacebookF/></Link>
                          <Link href={contactlinks?.instagram} className='flex bg-red-600 items-center px-4'> <FaInstagram/></Link>
                          <Link href={contactlinks?.linkedIn} className='flex bg-blue-800 items-center px-4'> <FaLinkedinIn/></Link>
                          <a href="tel:+2348032787601" className='flex gap-2 py-2 px-4 bg-yellow-500 text-black ' > <FaPhone/> {contactlinks?.phonenumber}</a>
                      </div>
                  </div>
            </div>
          </div>
        </nav>
        }
            
    </div>
  )
}

export default MobileNav