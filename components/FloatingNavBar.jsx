'use client'
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaSun, FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import {PiArrowSquareInBold} from 'react-icons/pi'
import ReactWhatsapp from './ReactWhatsapp';
import { useGlobalState } from '@/context/GlobalStateContext';

const FloatingNavbar = ( {themeBtn}) => {
  const {setModalType}=useGlobalState()

  const [showNavbar, setShowNavbar] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;

    setShowNavbar(scrollY > screenHeight);
    setShowScrollTop(scrollY > screenHeight * 2); // Show scroll-to-top icon when scrolled past 2 screen heights
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
// console.log('scroll===', scrollY, screenTop,)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bg-light300 p-4 shadow-2xl z-50 right-0 bottom-[30%] rounded transform ${showNavbar ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300`}>
      <div className="flex flex-col text-3xl space-y-4 items-center">
       
        {/* <FaWhatsapp className="  text-green-500 hover:text-green-700 cursor-pointer" /> */}

        <div 
        className=" text-yellow-500 hover:text-yellow-700 cursor-pointer" >
        {themeBtn}
        </div>

        <PiArrowSquareInBold onClick={()=>setModalType('quote')} className=" text-blue-500 hover:text-blue-700 cursor-pointer" />

        {showScrollTop && (
          <FaArrowCircleUp
            className=" text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={scrollToTop}
          />
        )}

        <div className=" h-8">
          <ReactWhatsapp/>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;
