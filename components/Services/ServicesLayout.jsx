import React from 'react'
import Button from '../Buttons/Button'
import ImageCard from '../Cards/ImageCard'

const ServicesLayout = ({heading, subheading, description1, description2,  cta, btnText, btnlink, imgurl, }) => {
  return (
    <section className='section-padding py-20'>
        <h3 className="text-3xl font-semibold pb-10">
            {heading}
        </h3>
        <div className=' flex sm:items-center flex-col sm:flex-row gap-14 sm:gap-6 lg:gap-14 w-full'>
            <div className='flex-1 '>
                <ImageCard imgUrl={imgurl}/>
            </div>

            <div className='flex-1 space-y-6'>
                <h4 className="w-96 text-2xl font-semibold pb-">
                    {subheading}
                </h4>
                
                <p>{description1}</p>
                <p>{description2}</p>
                {/* <p>{cta}</p> */}
            
                {/* <div className="btn">
                    <Button link={btnlink}>{btnText}</Button>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default ServicesLayout