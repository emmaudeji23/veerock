import React from 'react'
import ImageCard from '../Cards/ImageCard'
import StraightCard from '../Cards/StraightCard'
import { howitworks } from '@/data/howitworks'

const HowItWorks = () => {
  return (
    <div className=' grid sm:grid-cols-2 gap-6 lg:gap-32'>
        <ImageCard 
            imgUrl={''}
            component={<h3 className='text-4xl font-semibold'>
                We have Lorem ipsum dolor sit.
            </h3 >}
        
        />
        <div className="flex items-center">
        <div className="grid gap-6">
            {
                howitworks?.map(({icon,title,link}) => (
                    <div key={title} className="">
                        <StraightCard
                            text={title}
                            icon={<div className='text-6xl'>
                                {icon}
                            </div>}
                        />
                    </div>
                ))
            }
        </div>
        </div>
        
    </div>
  )
}

export default HowItWorks