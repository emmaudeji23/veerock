import { useEffect, useState } from 'react'
import ImageContainer from '../Cards/ImageContainer'
import { FaTimes } from 'react-icons/fa'


const ProjectDetails = ({isOpen, item, onClose}) => {
    const [show, setShow] = useState(item?.imageUrl?.length ? item?.imageUrl[0] : '')
    
    useEffect(() => {
        if (item && item.imageUrl && item.imageUrl.length > 0) {
            setShow(item.imageUrl[0]);
          } else {
            setShow(''); 
          }
    }, [item])
    
  return (
    <div className={`${isOpen ? ' scale-100' : 'scale-0'} fixed transform transition-transform duration-500 inset-0 z-50 flex items-center bg-black bg-opacity-70`} onClick={onClose}>
        <div onClick={e=>e.stopPropagation()} className="mx-auto max-w-[1000px] h-[90vh] bg-light200 ">
            <div className="w-full h-[86%] gap-2 flex flex-col lg:flex-row">
                <div className="w-full h-full lg:w-4/5 overflow-hidden relative ">
                    <ImageContainer img={show} alt={item?.name} />
                    <button onClick={onClose} className="w-8 h-8 flex justify-center items-center hover-yellow absolute top-4 left-4"><FaTimes/></button>
                </div>
                <div className=" w-full lg:w-1/5 gap-2 flex lg:flex-col overflow-auto">
                    {
                        item?.imageUrl?.map((url, i)=>(
                            <div className="overflow-hidden w-20 h-20 hover:ring hover:ring-yellow-600 duration-300 flex-shrink-0 mb-3 lg:mb-0 lg:w-full lg:h-40" key={i} onClick={()=>setShow(url)}>
                                <ImageContainer img={url} />
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="p-4">
                <h3 className="text-3xl font-semibold">
                    {item?.name}
                </h3>
                {item?.description}
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails