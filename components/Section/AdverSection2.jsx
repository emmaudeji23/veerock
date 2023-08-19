import React from 'react'
import Heading from './Heading'

const AdverSection2 = ({content}) => {
  return (
    <div className='md:grid grid-cols-2 w-full h-full '>
        <div className="w-full min-h-80 md:h-[450px] overflow-hidden">
            <img src="/fake2.jpg" alt="advert" className='w-full h-full object-cover' />
        </div>

        <div className="w-full h-full relative px-4 ">
            <div className="py-20 md:absolute md:p-20 md:shadow-xl top-20 right-0 -left-20 h-full bg-light100 space-y-4">
              <Heading type={''} title={content.title} heading={content.heading}/>
              <p className=''>{content.details}</p>
            </div>
        </div>
    </div>
  )
}

export default AdverSection2