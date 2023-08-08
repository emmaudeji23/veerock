'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../Buttons/Button';

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
    <div className="h-screen">
        <div className="relative h-[50%] sm:h-[70%] md:h-[80%] lg:h-[95%] xl:h-full w-full">
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
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-lg mb-6">{slide.description}</p>
              <div className="flex space-x-4">
                <Button link={'/'} variant={'primary'}>{slide.button1Text}</Button >
                <Button link={'/about'} variant={'secondary'}>{slide.button2Text}</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="section-padding text-[100px] text-white  absolute bottom-[35%] left-4">
        <button onClick={prevSlide}>&#8249;</button>
      </div>
      <div className="section-padding absolute text-[100px] text-white bottom-[35%] right-4">
        <button onClick={nextSlide}>&#8250;</button>
      </div>
    </div>
    </div>
  );
};

export default HeroBanner;
