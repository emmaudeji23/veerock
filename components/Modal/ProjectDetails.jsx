import { useEffect, useState } from 'react'
import ImageContainer from '../Cards/ImageContainer'
import ModalCentral from './ModalCentral'


const ProjectDetails = ({isOpen, item, onClose}) => {
    const [show, setShow] = useState(item?.imageUrl[0])
    useEffect(() => {
      setShow(item?.imageUrl[0])
    
    }, [item])
    
  return (
    <ModalCentral isOpen={isOpen} onClose={onClose}>
        <div className="m-auto h-[90vh] bg-light200 max-w-8xl gap-2 flex flex-col">
            <div className="w-full h-[86%] gap-2 flex flex-col lg:flex-row">
                <div className="w-full h-full lg:w-4/5 overflow-hidden relative ">
                    <ImageContainer img={show} alt={item.name} />
                    <button onClick={onClose} className="w-8 h-8 flex justify-center items-center hover-yellow absolute top-4 left-4">X</button>
                </div>
                <div className=" w-full lg:w-1/5 gap-2 flex lg:flex-col overflow-auto">
                    {
                        item.imageUrl?.map((url, i)=>(
                            <div className="overflow-hidden w-20 h-20 hover:ring hover:ring-yellow-600 duration-300 flex-shrink-0 mb-3 lg:mb-0 lg:w-full lg:h-40" key={i} onClick={()=>setShow(url)}>
                                <ImageContainer img={url} />
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="p-4">
                <h3 className="text-3xl font-semibold">
                    {item.name}
                </h3>
                {item.description}
            </div>
        </div>
    </ModalCentral>
  )
}

export default ProjectDetails