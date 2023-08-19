'use client'

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaQuoteLeft, FaQuoteRight, FaChevronRight } from 'react-icons/fa'; 
// components/Slider.js

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];


const Carousel = ({list}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

    const {content, name, title, imageUrl} = list[currentIndex];

  return (
    <div className="pt-8 pb-2 relative flex items-center ">
      
        <div className=' min-h-80 text-lg w-full px-8 '>        
            <div className='text-yellow-500 pb-8'>
              <FaQuoteLeft size={60} />
            </div>
              <div className="">{content}</div>
              <div className="mt-8 flex gap-4">
                <div className="h-24 w-24 overflow-hidden">
                  <img src={imageUrl} alt={name} />
                </div>
                <div className="">
                  <h1 className='text-xl font-semibold'>{name}</h1>
                  <h4 className='text-zinc-500'>{title}</h4>
                </div>
              </div>
        </div>

       <div className='flex w-full justify-between absolute top-1/2'>
        <button  onClick={handlePrev}><FaChevronLeft/>
          </button>
       <button onClick={handleNext}><FaChevronRight/></button>
       </div>

    </div>
  );
};

export default Carousel;
