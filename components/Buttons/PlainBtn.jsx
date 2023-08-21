import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa"

const PlainBtn = ({text, link, style}) => {
  return (
    <Link href={link}
    className={`font-medium text-base hover:font-semibold duration-300 ${style ? style : ' text-white'} flex gap-2 items-center`}
  >
   {text}  <FaLongArrowAltRight size={20}/>
  </Link>
  )
}

export default PlainBtn