import React from 'react';

const TestimonialCard = ({ name, imageUrl, testimony, title }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
      {/* <img
        className="w-16 h-16 rounded-full mb-4"
        src={imageUrl}
        alt={`Avatar of ${name}`}
      /> */}
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <h4 className="text-zinc-500">{title}</h4>
      <p className="text-center mt-2">{testimony}</p>
    </div>
  );
};

export default TestimonialCard;
