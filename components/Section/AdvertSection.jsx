import React from 'react'

const AdvertSection = ({ backgroundImage, title, description, buttons }) => {
  return (
    <div
      className=" bg-cover bg-center py-32 md:py-48 text-white "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
      }}
    >
     <div className="section-padding">
     <div className="  sm:max-w-[800px]">
        <h1 className="text-3xl sm:text-6xl font-semibold mb-4">{title}</h1>
        <p className="text-lg mb-8">{description}</p>
        <div className="flex space-x-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
     </div>
    </div>
  )
}

export default AdvertSection