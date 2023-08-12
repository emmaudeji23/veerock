import Link from "next/link"
import { useState } from "react";

import { FiSearch, FiMenu,  FiX } from "react-icons/fi"
import { navLinks } from "@/data/navlinks";
import { useGlobalState } from "@/context/GlobalStateContext";
import ModalSearchBox from '../Modal/ModalSearchBox';
import Image from "next/image";
import {PiArrowSquareInBold} from 'react-icons/pi'


const DesktopNav = ({themeBtn}) => {

  const{isModalOpen, active, setActive, closeModal, openModal, modalType} = useGlobalState()


  return (
    <div className=' bg-light200 text-dark200 '>
        <div className="section-padding flex justify-between items-center ">

            <Link href={'/'} className=" flex  flex-shrink-0 ">
                <Image
                    width={90} height={45}
                    src="/logo.png"
                    alt="Logo"
                  />
            </Link> 

            <div className="flex items-center space-x-10">
              {
                navLinks?.map(({title, href} )=> (
                    <Link key={title} href={href}
                    onClick={()=>setActive(title)}
                      className={`py-6 border-b-4 hover:border-b-4 hover:border-yellow-400 duration-300 ${active===title ? 'border-b-4 border-yellow-400' : null}`}
                    >
                        {title}
                    </Link>
                ))
              }  
              <Link href={'/quotes'} className="bg-yellow-400 hover:bg-yellow-500 duration-300 py-6 px-4 text-center flex gap-2 items-center ">
                Get Quote <PiArrowSquareInBold size={20}/>
              </Link>
            </div>

     
            <ul className="flex justify-end items-center space-x-3 text-2xl">
              
                {/* <div className="flex items-center hover:scale-110 duration-300 cursor-pointer">
                  {themeBtn}
                </div> */}

                <li className="hover:scale-110 duration-300 cursor-pointer">
                  {!isModalOpen ? <FiSearch width={20} onClick={()=>openModal('searchboxSm')}/> : 
                  <FiX width={20} onClick={closeModal}/> }
                </li>
                <ModalSearchBox isOpen={isModalOpen} onClose={closeModal} modalType={modalType}></ModalSearchBox>
            </ul>
          
        </div>
    </div>
  )
}

export default DesktopNav