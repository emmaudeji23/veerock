import React from 'react'

const ImageCard = ({imgUrl, component}) => {
  return (
    <div className='bg-light300 w-full mt-[6%]'>
        <div className="img h-96 w-[94%] relative left-[6%] right-0 bg-red-400 -top-[6%]">


        </div>
        <div className="px-[6%] pb-[6%]">
            {component}
        </div>
    </div>
  )
}

export default ImageCard