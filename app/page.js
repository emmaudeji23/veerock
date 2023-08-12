import HeroBanner from "@/components/HeroBanner/HeroBanner";
import AboutSection from "@/components/Section/AboutSection";
import AdverSection2 from "@/components/Section/AdverSection2";
import AdvertSection from "@/components/Section/AdvertSection";
import Credibility from "@/components/Section/Credibility";
import HowItWorks from "@/components/Section/HowItWorks";
import ProjectSection from "@/components/Section/ProjectSection";
import ServicesSection from "@/components/Section/ServicesSection";
import TestimonialSection from "@/components/Section/TestimonialSection";
import { clients } from "@/data/clients";
import ClienteleSection from "@/components/Section/ClienteleSection";
import { homepageData } from "@/data/homepageData";

export default function Home() {
  const { headline, credibility, aboutSection, servicesSection, howItWorks, projectsPortfolio, testimonialsData,   } = homepageData()
  return (
    <div className=''>
      <div className="">
        <HeroBanner slides={headline} />
        <div className="section-padding py-20 sm:py-0 sm:relative  -top-20">
          <Credibility content={credibility}/>
        </div>
      </div>
      <div className="section-padding py-20">
        <AboutSection  content={aboutSection}/>
      </div>
      <div className="section-padding py-20">
        <HowItWorks/>
      </div>
      <div className=" py-20 bg-blue-950">
        <ServicesSection/>
      </div>
      <div className="section-padding py-20">
        <ProjectSection/>
      </div>
      <div className="section-padding py-20">
        <TestimonialSection/>
      </div>
      <div>
        <AdvertSection
          
          backgroundImage="/fake1.jpg"
          title="We Offer The Most Complete
          House Renovating Services."
          description="Constructor explains how you can enjoy high end flooring trends like textured wood and with new
          laminate flooring. As the general contractor."
          buttons={[
            { text: 'Learn More' },
            { text: 'Get Started' },
          ]}
        />
      </div>
      <div className="py-20 md:py-0">
        <AdverSection2/>
      </div>
      <div className="section-padding py-20">
        <ClienteleSection clients={clients} />
      </div>
      
    </div>
  )
}
