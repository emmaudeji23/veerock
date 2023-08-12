
import Heading from "./Heading"
import LearnMore from "../Buttons/LearnMore"
import TestimonialSlider from "../TestimonialSlider"

const TestimonialSection = () => {
  return (

    <div className="grid md:flex gap-6 justify-between ">
        <div className="w-full h-full flex flex-col justify-between ">
            <Heading title={'CUSTOMER TESTIMONIALS'} heading={`What Are They Saying About Our `} styled={'Services'} />

            <div className="">
                <TestimonialSlider/>
            </div>
        </div>

        <div className="w-full text-white h-full grid gap-4 md:grid-cols-2">
            <div className="h-80 sm:h-96 p-8 flex items-center  gap-4 w-full bg-yellow-600 ">
                <div className="">
                <p className="text-3xl font-semibold pb-2">
                Let's Renovate Incomplete Dreams, That Must Be Fulfilled!
                </p>
                <LearnMore link={'/about'} />
                </div>
            </div>
            <div className="h-80 sm:h-96 w-full relative ">
                <div className="bg-red-500 h-80 w-full md:absolute bottom-0 left-0"></div>

            </div>
            <div className="h-80 sm:h-96 w-full relative ">
                <div className="bg-red-500 h-80 w-full md:absolute top-0 right-0"></div>

            </div>
            <div className="h-80 sm:h-96 p-8 flex items-center  gap-4 w-full bg-blue-900 ">
                <div className="">
                <p className="text-3xl font-semibold pb-2">
                Let's Renovate Incomplete Dreams, That Must Be Fulfilled!
                </p>
                <LearnMore link={'/about'} />
                </div>
            </div>
        </div>
    </div>
        

  )
}

export default TestimonialSection