
import {useState} from 'react'
import Link from 'next/link'
import { FiMenu,  FiX } from "react-icons/fi"
import { navLinks } from '@/data/navlinks'
import { useGlobalState } from "@/context/GlobalStateContext"



const MobileNav = () => {
    const [show, setShow] = useState(false)
    const {showSidebar, setShowSidebar} = useGlobalState();



  return (
    <div className=' bg-light200 text-dark200 section-padding py-8 '>
        
        <div className=" flex justify-between">
            <div className="flex space-x-3">
            <div className="text-2xl cursor-pointer" onClick={()=>setShowSidebar(prev=>!prev)}>
              {
                !showSidebar ? (<FiMenu/>) : (<FiX/>)
              }
            </div>
                <div className="text-lg ">Supplier Category</div>
            </div> 

            <div className='text-2xl' onClick={()=>setShow(prev=>!prev)}>
            {
                show ? (<FiX/>): (<FiMenu/>)
            }
            </div>
        </div>


        {/* menu */}
       { show && <nav className="w-full grid gap-6 px-4 py-6 shadow-lg rounded-lg">
                {
                    navLinks?.map(({title, href}) => (
                        <Link key={title} href={href}
                        className=''
                        >{title}</Link>                  
                    ))
                }
        </nav>
        }
    </div>
  )
}

export default MobileNav