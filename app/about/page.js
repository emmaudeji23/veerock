import Banner1 from "@/components/About/Banner1"
import Stats from "@/components/About/Stats"
import Values from "@/components/About/Values"
import Vision from "@/components/About/Vision"
import PageHeroBanner from "@/components/HeroBanner/PageHeroBanner"
import BlogSection from "@/components/Section/BlogSection"
import NewsLetter from "@/components/Section/NewsLetter"
import ServicesSection from "@/components/Section/ServicesSection"
import { about } from "@/data/about"
import { blogPage } from "@/data/blogPageData"
import { homepageData } from "@/data/homepageData"
import { imgSrc } from "@/data/imgsrc"

const About = () => {
  const { headline, credibility, aboutSection, servicesSection, howItWorks, projectsPortfolio, advert1, testimonialsData, advert2  } = homepageData()

  const { heading, vision, mission, policy, promise , values, stats, } = about()

  const {blogs} = blogPage()


  return (
    <>
      <PageHeroBanner bannerImg={imgSrc?.aboutushero} title='About Our Company' /> 

      <div className="section-padding py-20">
        <Banner1 content={heading}/>
      </div>

      <div className="section-padding py-20">
        <Vision content={vision}/>
      </div>

      <div className="section-padding py-20">
        <Values content={values}/>
      </div>

      <div className="section-padding py-20">
        <Stats content={stats}/>
      </div>

      <div className="my-20 py-20 bg-blue-950">
        <ServicesSection content={servicesSection}/>
      </div>

      <div className="section-padding py-20">
        <BlogSection content={blogs}/>
      </div>    
    </>
  )
}

export default About