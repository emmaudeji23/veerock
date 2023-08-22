import React from 'react'
import Heading from './Heading'
import Button from '../Buttons/Button'
import BlogCard from '../Cards/BlogCard'


const BlogSection = ({content}) => {
  return (
    <div className='space-y-10'>
        <Heading type={'f'} title={content.title} heading={content.heading}/>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    content.blogs.slice(0,4).map(({title, imageUrl, category, introduction, slug }, index)=>(
                        <div key={index} className=''>
                            <BlogCard title={title} imageUrl={imageUrl} category={category} introduction={introduction} slug={slug} />
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