import React from 'react'
import Heading from './Heading'
import Button from '../Buttons/Button'

const BlogSection = ({content}) => {
  return (
    <div className='space-y-10'>
        <Heading type={'f'} title={content.title} heading={content.heading}/>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {
                    content.blogs.slice(0,3).map((item, index)=>(
                        <div className='h-96 w-full bg-red-500'>

                        </div>
                    ))
                }
            </div>

        <div className="flex justify-center ">
            <Button link={'/blogs'} >Go to Blogs</Button>
        </div>
    </div>
  )
}

export default BlogSection