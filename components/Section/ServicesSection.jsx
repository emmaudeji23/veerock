
import Heading from "./Heading"
import {PlainCard} from "../Cards/PlainCard"


const ServicesSection = ({content}) => {
  return (
    <div className="section-padding space-y-6">
        <Heading type={'flex'} white={true} title={'BEST SERVICES'} heading={'Unvarying Quality'} styled={'Services'}/>
        <div className="pt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                content.list.slice(0, 4)?.map(({icon, title, link, description})=>(
                    <div key={title} className="h-80">
                        <PlainCard icon={icon} heading={title} link={link} details={description}/>

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
                content.list.slice(4,6)?.map(({icon, title, link, description})=>(
                    <div key={title} className="h-80">
                        <PlainCard icon={icon} heading={title} link={link} details={description}/>
                    </div>
                ))
            }

            </div>
        </div>
        
    </div>
  )
}

export default ServicesSection