import Link from "next/link"
import { FiAlignJustify, FiMenu,  FiX } from "react-icons/fi"
import { navLinks } from "@/data/navlinks";
import { useGlobalState } from "@/context/GlobalStateContext";

const DesktopNav = () => {

  const {showSidebar, setShowSidebar} = useGlobalState();


  return (
    <div className=' bg-light200 text-dark200 '>
        <div className="section-padding flex justify-between items-center py-2">
        <div className="flex space-x-3">
            <div className="text-2xl cursor-pointer" onClick={()=>setShowSidebar(prev=>!prev)}>
              {
                !showSidebar ? (<FiMenu/>) : (<FiX/>)
              }
            </div>
            <div className="text-lg ">Supplier Category</div>
        </div> 
        <div className="flex space-x-4">
          {
            navLinks?.map(({title, href} )=> (
                <Link key={title} href={href}>
                    {title}
                </Link>
            ))
          }  
        </div>
        </div>
    </div>
  )
}

export default DesktopNav