import { Services } from "@/data/services"
import { SectionHeading } from "./Heading"
import SimpleCard from "../Cards/SimpleCard"
import Link from "next/link"
import Image from "next/image"


export const PlainCard = ({icon, link, heading, details}) => (
    <div className="flex px-4 justify-center items-center h-80  text-center  text-white bg-blue-900 hover:shadow-2xl duration-300">
        <div className="space-y-6">
            <div className="flex text-[40px] justify-center text-yellow-500">
                {icon}
            </div>
            <div className="space-y-3">
                <h4 className="font-semibold text-3xl">{heading}</h4>
                <p>{details}</p>
                <Link href={link} className="text-yellow-500 font-semibold text-lg">{'Learn More'}</Link>
            </div>
        </div>
    </div>
)


const ServicesSection = () => {
  return (
    <div className="section-padding space-y-6">
        <SectionHeading white={true} title={'BEST SERVICES'} heading={'Unvarying Quality'} styled={'Services'}/>
        <div className="pt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                Services.slice(0, 4)?.map(({icon, label, link, details})=>(
                    <div key={label} className="h-80">
                        <PlainCard icon={icon} heading={label} link={link} details={details}/>
                    </div>
                ))
            }
        </div>
        <div className="w-full grid lg:flex gap-6">
            <div className="lg:cols-span-2  w-full">
                <div className="w-full  h-80 overflow-hidden">
                    <img src={'/fake2.jpg'} alt="section" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:cols-span-2 h-full w-full">
            {
                Services.slice(4,6)?.map(({icon, label, link, details})=>(
                    <div key={label} className="h-80">
                        <PlainCard icon={icon} heading={label} link={link} details={details}/>
                    </div>
                ))
            }

            </div>
        </div>
        
    </div>
  )
}

export default ServicesSection