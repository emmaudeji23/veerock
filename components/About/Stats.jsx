import React from 'react'
import Heading from '../Section/Heading'

const Stats = ({content}) => {
  return (
    <section className='space-y-20 max-w-6xl mx-auto'>

        {/* <Heading type={'flex'} white={false} title={content?.heading} heading={content?.title} styled={content?.styled}/> */}

        <div className="grid grid-cols-2 md:grid-cols-4   gap-10 ">
            {
                content?.stats?.map(({value,slug, title}, i) => (
                    <div key={i} 
                     className="bg-light200 py-20 rounded space-y-   text-center" > 
                        <h2 className='text-5xl font-bold '>{value}</h2>
                        <p>{title}</p>
                    </div>
                ))
            }
        </div>
    </section>

  )
}

export default Stats