import React from 'react'
import Button from '../Buttons/Button'
import GetQuote from '../Buttons/GetQuote'
import { FaLongArrowAltRight } from 'react-icons/fa'

const AdvertSection = ({ content }) => {
  return (
    <div
      className=" bg-cover bg-center py-32 md:py-48 text-white "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${content.imgUrl})`,
      }}
    >
     <div className="section-padding">
     <div className="  sm:max-w-[800px]">
        <h1 className="text-3xl sm:text-6xl font-semibold mb-4">{content.heading}</h1>
        <p className="text-lg mb-8">{content.description}</p>
        <div className="flex space-x-4">
          <Button variant={'primary'} link={'/blogs/construction/complete-house-renovating-services'} >
            <div className="flex gap-3 w-full items-center">
            <p>Learn More</p> <FaLongArrowAltRight size={20}/>
            </div>
          </Button>
          <GetQuote/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default AdvertSection