import Button from "../Buttons/Button"
import Heading from "./Heading"
import ImageCard from "../Cards/ImageCard"

const AboutSection = () => {
  return (
    <div className=' grid sm:grid-cols-2 gap-16 lg:gap-32'>

        <div className="block space-y-4">
            <Heading title={'ABOUT US'} heading={`We're Leading Company For Urban `} styled={`Lifestyle.`}/>

            <p className="text-lg">
                BuildTab has provided a hassle-free, home-building solutions with its unique sustainable development projects & environment-friendly practices. It has a large scale presence in international.
            </p>

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