
const ImageContainer = ({img, alt, link}) => {
  return (
    <img src={img} alt={alt} className="w-full h-full object-cover" />
  )
}

export default ImageContainer