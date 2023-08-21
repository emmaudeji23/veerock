import React from 'react'
import Heading from './Heading'
import ImageContainer from '../Cards/ImageContainer'
import Button from '../Buttons/Button'

const AdverSection2 = ({content}) => {
  return (
    <div className='md:grid grid-cols-2 w-full h-full '>
        <div className="w-full min-h-80 md:h-[450px] overflow-hidden">
          <ImageContainer img={content.imgUrl} alt={'veerock_skyscraper'}/>
        </div>

        <div className="w-full h-full relative px-4 ">
            <div className="py-20 md:absolute md:p-20 md:shadow-xl top-20 right-0 -left-20 h-full bg-light100 space-y-4">
              <Heading type={''} title={content.title} heading={content.heading}/>
              <p className='pb-10'>{content.details}</p>
              <Button variant={'primary'} link={'/contact'}>
                Contact us
              </Button>
            </div>
        </div>
    </div>
  )
}

export default AdverSection2