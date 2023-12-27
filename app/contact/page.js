import PageHeroBanner from '@/components/HeroBanner/PageHeroBanner'
import { imgSrc } from '@/data/imgsrc'


const Contact = () => {
  return (
    <>
      <PageHeroBanner bannerImg={imgSrc.contactushero} title='Contact Us' /> 
      <div className="h-screen "></div>
    </>
  )
}

export default Contact