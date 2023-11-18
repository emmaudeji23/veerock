import React from 'react'
import Heading from '../Section/Heading'
import GetQuote from '../Buttons/GetQuote'
import Button from '../Buttons/Button'
import ImageCard from '../Cards/ImageCard'
import { FaQuoteLeft } from 'react-icons/fa'

const Banner1 = ({content}) => {
  return (
    <section className='grid md:grid-cols-2 gap-10 xl:gap-16'>

        <div className="space-y-10">

            <Heading type={'flex'} white={false} title={content?.heading} heading={content?.title} styled={content?.styled}/>

            <div className="space-y-6">
                <p className="text-lg">{content?.description}</p>
                <p className="text-lg">{content?.description2}</p>
                <p className="text-lg">{content?.description3}</p>
            </div>



            <div className="flex gap-4">
                <GetQuote/>
                <Button link={'#'} variant={'primary'}>Contact Us</Button>
            </div>


        </div>

        <div>
            <ImageCard imgUrl={'/veerock/biulding.jpeg'} component = {
                <div className='text-2xl italic  py-3 text-zinc-600  font-semibold flex justify-end relative w-full gap-2'>
                    <p className="text-6xl text-zinc-300 relative -top-6   font-bold"> <FaQuoteLeft/> </p>
                    <p className="w-[70%] text-end">
                    Each project is a unique expression of your aspirations
                    </p>
                </div>
            }/>

        </div>


        
    </section>
  )
}

export default Banner1