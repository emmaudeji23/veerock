
import React from 'react'
import Button from '../Buttons/Button'

const CTAServices = ({children}) => {
  return (
    <div className='section-padding w-full py-20'>
        <div className="max-w-2xl mx-auto space-y-6">
            <h4 className='text-xl italize '>{children} </h4>
            {/* <div className="flex-justify-center-gap-4">
                <Button link={'/#'} > Get Our Services</Button>
                <Button link={'/#'} > Chat with us</Button>
            </div> */}

        </div>
        
    </div>
  )
}

export default CTAServices