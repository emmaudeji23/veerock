import { servicesPageData } from "@/data/servicesPageData"
import PageHeroBanner from "../HeroBanner/PageHeroBanner"
import ServicesLayout from "./ServicesLayout"
import Button from "../Buttons/Button"
import GetQuote from "../Buttons/GetQuote"


const Services = () => {
    const {list, description}=servicesPageData()

  return (
    <div>
      <PageHeroBanner bannerImg={`/woman-engineer-explaining.jpg`} title='Explore our offerings' /> 

      <div className="pt-20 w-full px-4 max-w-4xl mx-auto lg:text-center font-extralight text-xl">
          {description}
      </div>

        {
          list.slice(0,3)?.map(({heading, subheading,description1, description2, ctaText, btnText, btnUrl,imgurl}, i)=> (
            <ServicesLayout
            key={i}
            heading={heading}
            subheading={subheading}
            description1={description1}
            description2={description2}
            cta={ctaText}
            btnText={btnText}
            btnlink={btnUrl}
            imgurl={imgurl}
            />
          ))
        }

        <div className="py-20 px-4 max-w-2xl mx-auto space-y-6 ">
           <h4 className="lg:text-center font-extralight text-xl"> Trust us to manage your projects
           </h4>
            <div className="flex lg:justify-center"><GetQuote/></div>
        </div>

        {
          list.slice(3)?.map(({heading, subheading,description1, description2, ctaText, btnText, btnUrl, imgurl}, i)=> (
            <ServicesLayout
            key={i}
            heading={heading}
            subheading={subheading}
            description1={description1}
            description2={description2}
            cta={ctaText}
            btnText={btnText}
            btnlink={btnUrl}
            imgurl={imgurl}
            />
          ))
        }
      
    </div>
  )
}

export default Services