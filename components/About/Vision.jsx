import React from 'react'

const Vision = ({content}) => {
  return (
    <section className='grid text-center text-blue px-4 text-3xl sm:text-5xl font-bold max-w-[700px] mx-auto leading-[40px]'>
        {content?.ourVision}        
    </section>
  )
}

export default Vision