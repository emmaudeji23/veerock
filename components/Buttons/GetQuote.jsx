'use client'

import Link from "next/link"
import { PiArrowSquareInBold, PiArrowArcRightBold } from "react-icons/pi"
import { useGlobalState } from "@/context/GlobalStateContext";

const GetQuote = () => {
  const {
    openModal,
    closeModal,
    isModalOpen,
    modalType,} = useGlobalState();

  return (
    <button onClick={()=>openModal('central')} className="bg-yellow-400 hover:bg-yellow-500 duration-300 py-4 px-4 text-center rounded flex gap-2 items-center text-black">
                Get Quote <PiArrowSquareInBold size={20}/>
              </button>
  )
}

export default GetQuote