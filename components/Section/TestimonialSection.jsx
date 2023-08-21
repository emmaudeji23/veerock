
import Heading from "./Heading"
import PlainBtn from "../Buttons/PlainBtn"
import TestimonialSlider from "../TestimonialSlider"
import Carousel from "@/utils/useCarousel"
import { contactlinks } from "@/data/contactlinks"
import Button from "../Buttons/Button"
import GetQuote from "../Buttons/GetQuote"
import ImageContainer from "../Cards/ImageContainer"

const TestimonialSection = ({content}) => {
  return (

    <div className="grid lg:grid-cols-2 gap-6  items-cente">
        <div className="w-full h-ful space-y-6">
            <Heading title={content.title} heading={content.heading} />

            <div className="bg-light200 rounded-xl pb-4 text-lg p-4 sm:p-10 ">
                    <div className="border-b-2 border-zinc-500">
                        <Carousel list={content.items}/>
                    </div>
                    <p className="py-4">{content.getQoute}</p>
                   <div className="flex "><GetQuote/></div>
            </div>
        </div>

        <div className="w-full text-white  grid gap-4 sm:grid-cols-2">
            <div className="h-80  p-8 flex items-center  gap-4 w-full bg-yellow ">
                <div className="">
                <p className="text-3xl font-semibold pb-2">
                 {content.ads1}
                </p>
                <PlainBtn text={'View Projects'} link={'/projects'} />
                </div>
            </div>
            <div className="h-80 w-full relative ">
                <div className=" h-80 w-full md:absolute bottom-0 left-0 overflow-hidden">
                    <ImageContainer img={content.imgUrl1} alt='veerock_palace'/>
                </div>

            </div>
            <div className="h-80  w-full relative ">
                <div className="h-80 w-full md:absolute top-0 right-0">
                    <ImageContainer img={content.imgUrl2} alt='mural_floor'/>
                </div>

            </div>
            <div className="h-80  p-8 flex items-center  gap-4 w-full bg-blue-900 ">
                <div className="">
                <p className="text-3xl font-semibold pb-2">
                    {content.ads2}
                </p>
                <PlainBtn text={'View Projects'} link={'/about'} />
                </div>
            </div>
        </div>
    </div>
        

  )
}

export default TestimonialSection