import React from 'react'
import ImageCard from '../Cards/ImageCard'

import Link from 'next/link'
import SimpleCard from '../Cards/SimpleCard'
import Heading from './Heading'

const HowItWorks = ({content}) => {
  return (
    <div className=' space-y-6 '>
       
        
            <div className="">
            <Heading type={'flex'} title={content.title} heading={content.heading} styled={``}/>
            </div>
            
                <div className="grid md:grid-cols-3 gap-1  ">
                    {
                        content.steps?.map(({icon,title,description}) => (
                            <div key={title} className="">
                               
                                    <SimpleCard icon={icon} text={description} title={title}/>
                        
                            </div>
                        ))
                    }
                </div>
            
       
        
    </div>
  )
}

export default HowItWorks