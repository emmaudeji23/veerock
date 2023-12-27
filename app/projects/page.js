import PageHeroBanner from "@/components/HeroBanner/PageHeroBanner"
import ProjectPageLayout from "@/components/Projects/ProjectPageLayout"
import CtaSection from "@/components/Section/CtaSection"
import { imgSrc } from "@/data/imgsrc"

const Project = () => {

  return (
    <>
      <PageHeroBanner bannerImg={imgSrc?.portfoliohero} title='Our Project Portfolio' /> 
      
      <ProjectPageLayout />

      <CtaSection heading={'We reduce the cost and time of building with smart technology.'}/>
  
    </>
  )
}

export default Project