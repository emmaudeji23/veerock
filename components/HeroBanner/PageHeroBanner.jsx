import React from 'react'

const PageHeroBanner = ({title, breadcomb}) => {
  return (
    <div className='w-full text-white h-80 bg-blue-600 flex justify-center items-center'>
        <div>
            {title}
        </div>
    </div>
  )
}

export default PageHeroBanner