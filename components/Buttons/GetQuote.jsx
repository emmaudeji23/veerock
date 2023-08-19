import Link from "next/link"
import { PiArrowSquareInBold, PiArrowArcRightBold } from "react-icons/pi"

const GetQuote = () => {
  return (
    <Link href={'/quotes'} className="bg-yellow-400 hover:bg-yellow-500 duration-300 py-4 px-4 text-center rounded flex gap-2 items-center text-black">
                Get Quote <PiArrowSquareInBold size={20}/>
              </Link>
  )
}

export default GetQuote