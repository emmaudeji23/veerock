import Button from "../Buttons/Button"
import Heading from "./Heading"
import ImageCard from "../Cards/ImageCard"
import { FiArrowRightCircle } from 'react-icons/fi';


const AboutSection = ({content}) => {
  return (
    <div className=' grid sm:grid-cols-2 gap-16 lg:gap-32'>

        <div className="block space-y-4">
            <Heading title={content.title} heading={content.heading} styled={``}/>

            <p className="text-lg">
                {content.description}
            </p>
            <div className="grid gap-4 ">
               
               {
                    content.strength?.map((item, i)=>(
                        <div key={i} className="flex items-center text-xl gap-4">
                            <FiArrowRightCircle size={24} color=""/>
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
            imgUrl={''}
            component={<h3 className='text-4xl font-semibold'>
                We have Lorem ipsum dolor sit.
            </h3 >}
        />

    </div>
  )
}

export default AboutSection