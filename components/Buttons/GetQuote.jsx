'use client'

import Link from "next/link"
import { PiArrowSquareInBold, PiArrowArcRightBold } from "react-icons/pi"
import { useGlobalState } from "@/context/GlobalStateContext";
import QuoteModal from "../Modal/QuoteModal";
import { useState } from "react";

const GetQuote = () => {
  const {setModalType}=useGlobalState()
  return (
    <>
      <button onClick={()=>setModalType('quote')} className="bg-yellow-400 hover:bg-yellow-500 duration-300 py-3 px-4 text-center rounded flex gap-2 items-center text-black">
          Get Quote <PiArrowSquareInBold size={20}/>
      </button>
      {/* <QuoteModal isOpen={open} onClose={()=>setOpen(0)}/> */}
    </>
  )
}

export default GetQuote