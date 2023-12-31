
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

        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="sm:col-span-2 lg:col-span-1 w-full">
                <div className="w-full  h-80 overflow-hidden">
                    <img src={content.imgUrl} alt="section" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="sm:col-span-2  lg:col-span-3  grid gap-6 sm:grid-cols-2  lg:grid-cols-3  h-full w-full">
            {
                content.list.slice(4)?.map(({icon, title, link, description})=>(
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