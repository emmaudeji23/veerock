'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../Buttons/Button';
import GetQuote from '../Buttons/GetQuote';

const HeroBanner = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Auto slide every 8 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  return (
    
        <div className="relative h-[350px] sm:h-[400px] md:h-screen  w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-full w-full relative">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute left-0 top-0 section-padding inset-0 px-4 pt-20 flex justify-start items-center  text-white">
              <div className="w-full border-l-8 pl-3 sm:pl-6 border-yellow">

              <h2 className="text-base font-semibold mb-2">{slide.heading}</h2>
              <p className=" mb-4 md:max-w-4xl  font-bold text-3xl sm:text-5xl md:text-7xl  ">{slide.description}</p>
              <div className="flex md: items-center space-x-4">
                <Button link={slide.link1} variant={'primary'}>{slide.button1Text}</Button >
                {!slide.button2Text ? <GetQuote/> : <Button link={slide.link2} variant={'secondary'}>{slide.button2Text}</Button>}
              </div>

              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="section-padding text-3xl text-white  absolute bottom-[0%] left-0 right-0 flex justify-between w-full">
        <div className="bg-yellow bg-opacity-[50%] px-4">
          <button className='' onClick={prevSlide}>&#8249;</button>
        </div>
        <div className="bg-yellow bg-opacity-[50%] px-4">
          <button onClick={nextSlide}>&#8250;</button>
        </div>
      </div>
    </div>
  
  );
};

export default HeroBanner;
