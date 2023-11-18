import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const ImageCard = ({imgUrl, component}) => {
  return (
    <div className='h-full relative pt-14'>
      <div className="img h-[370px] w-[94%] absolute left-[6%] right-0 bg-red-400 top-0">
        <Image width={400} height={400} src={imgUrl} alt="veerock-img" className='object-cover w-full h-full'/>

      </div>

      <div className='bg-light300 pt-[340px] pb-4 h-full w-full  '>
        
        <div className="relative">
          {/* <p className="text-6xl font-bold text-yellow-500 pl-40"><FaQuoteLeft/></p> */}
          <div className='px-[6%]' >
          {component}
          
          </div>
          
        </div>
    </div>
    </div>
  )
}

export default ImageCard