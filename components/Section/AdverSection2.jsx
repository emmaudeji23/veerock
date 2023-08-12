import React from 'react'

const AdverSection2 = () => {
  return (
    <div className='md:flex w-full h-full'>
        <div className="w-full min-h-80 md:h-[500px] overflow-hidden">
            <img src="/fake2.jpg" alt="advert" className='w-full h-full object-cover' />
        </div>
        <div className="w-full relative px-4 ">
            <div className="md:absolute md:p-20 shadow-2xl top-20 right-0 -left-20 bottom-0 bg-light200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni accusantium, sit qui fuga optio iste eius aliquam tempora quod?
            </div>
        </div>
    </div>
  )
}

export default AdverSection2