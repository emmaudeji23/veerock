import Breadcrumb from "../Layout/BreadCrumb"


const PageHeroBanner = ({title, bannerImg,}) => {
  return (
    <div
    className="flex relative text-white flex-col items-center justify-center h-80 bg-cover bg-center"
    style={{ backgroundImage: `url(${bannerImg})` }}
  >
    <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
    <h1 className="text-2xl md:text-4xl z-10 font-semibold text-white mb-4">{title}</h1>
   <Breadcrumb/>
  </div>
  )
}

export default PageHeroBanner