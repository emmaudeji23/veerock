'use client'

import  { useState } from 'react';
import TestimonialCard from './Cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div className="flex flex-col items-center p-8">
    <button
      className="mb-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={prevTestimonial}
    >
      Previous
    </button>
    <div className="w-full overflow-hidden">
      <div className="flex  w-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div className="flex-shrink- w-full">
            <TestimonialCard
            key={index}
            name={testimonial.name}
            imageUrl={testimonial.imageUrl}
            testimony={testimonial.testimony}
            title={testimonial.title}
          />
          </div>
        ))}
      </div>
    </div>
    <button
      className="mt-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={nextTestimonial}
    >
      Next
    </button>
  </div>
  );
};

export default TestimonialSlider;
