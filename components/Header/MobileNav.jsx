import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'
import { FiMenu,  FiX } from "react-icons/fi"
import { navLinks } from '@/data/navlinks'
import { useGlobalState } from "@/context/GlobalStateContext"

import {FaFacebookF, FaInstagram, FaRegEnvelope, FaLinkedinIn, FaPhone, FaMapMarkerAlt, } from 'react-icons/fa'


const MobileNav = () => {

    const{isModalOpen, showSidebar, setShowSidebar, active, setActive, closeModal, openModal, modalType} = useGlobalState()
    

  return (
    <div className=' relative z-20 text-dark200 '>
        
       { showSidebar && 
       <nav className="fixed animate-slide-in flex -z-10 top-20 bottom-0 left-0 w-full ">
          <div onClick={()=>setShowSidebar(false)} className="empty-space w-full h-full"></div>
          <div className='bg-light200 shadow-2xl '>
            <div className="grid gap-3  pr-4 pl-12 py-6 ">
                    {
                        navLinks?.map(({title, href}) => (
                            <Link key={title} href={href}
                            onClick={()=>setActive(title)}
                            className={`w-full py-3 hover:border-b-4 border-blue-800 duration-300 ${active===title ? 'border-b-4' : ''}`}
                            >{title}</Link>                  
                        ))
                    }
                      
                    <p className='flex items-center gap-2'>
                      <FaMapMarkerAlt/> #5 MCC road, Ikenegbu Layout Owerri
                    </p>
                    <a href="mailto:veerock@gmail.com" className='flex gap-2 items-center'>
                      <FaRegEnvelope/> veerock@gmail.com
                    </a>
                
                  <div className="text-white">
                      <div className='w-full flex '>
                          <Link href="https://facebook.com/veerock" className='flex bg-blue-700 items-center px-4'> <FaFacebookF/></Link>
                          <Link href="https://instagram.com/veerock" className='flex bg-red-600 items-center px-4'> <FaInstagram/></Link>
                          <Link href="https://linkedin.com/in/emmanuel-udeji" className='flex bg-blue-800 items-center px-4'> <FaLinkedinIn/></Link>
                          <a href="tel:+2348032787601" className='flex gap-2 py-2 px-4 bg-yellow-500 text-black ' > <FaPhone/> +2348032787601</a>
                      </div>
                  </div>
            </div>
          </div>
        </nav>
        }
        <div className="bg-light200 shadow-sm z-20 section-padding py-4 flex justify-between">

            <Link href={'/'} className=" flex  flex-shrink-0 ">
                <Image
                    width={90} height={45}
                    src="/logo.png"
                    alt="Logo"
                  />
            </Link> 
            
            <div className='text-2xl flex items-center' onClick={()=>setShowSidebar(prev=>!prev)}>
            {
                showSidebar ? (<FiX/>): (<FiMenu/>)
            }
            </div>
        </div>      
    </div>
  )
}

export default MobileNav