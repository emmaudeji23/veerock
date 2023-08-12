import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa"

const LearnMore = ({link, style}) => {
  return (
    <Link href={link}
    className={`font-semibold text-lg duration-300 ${style ? style : ' text-white'} flex gap-2 items-center`}
  >
    Learn More <FaLongArrowAltRight size={20}/>
  </Link>
  )
}

export default LearnMore