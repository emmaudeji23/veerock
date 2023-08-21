import Button from "../Buttons/Button"
import Heading from "./Heading"
import ImageCard from "../Cards/ImageCard"
import { FiArrowRightCircle } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa'


const AboutSection = ({content}) => {
  return (
    <div className=' grid md:grid-cols-2 gap-16 lg:gap-32'>

        <div className="block space-y-4">
            <Heading title={content.title} heading={content.heading} styled={``}/>

            <p className="text-lg">
                {content.description}
            </p>
            <div className="grid gap-4 ">
               
               {
                    content.strength?.map((item, i)=>(
                        <div key={i} className="flex items-center text-xl gap-4">
                            <FiArrowRightCircle size={20} color=""/>
                            <p className="">{item}</p>
                        </div>
                    ))
                }

            </div>

            <div className="flex gap-6">
               <Button variant={'primary'} link={'/about'}>Contact us</Button>
               <Button variant={'secondary'} link={'/about'}>Learn more</Button>
            </div>
        </div>

        <ImageCard 
            imgUrl={content.imgUrl}
            component={<h3 className='text-xl flex items-end gap-3 pb-3 font-semibold  justify-end'>
               <p className="text-5xl font-bold text-zinc-400 "><FaQuoteLeft/></p> <p> Experienced Engineers & Partners </p>
            </h3 >}
        />

    </div>
  )
}

export default AboutSection