'use client'

import Heading from "./Heading"
import Button from "../Buttons/Button"
import ImageCard from "../Cards/ImageCard"
import ProjectDetails from "../Modal/ProjectDetails"
import { useState , useEffect} from "react"
import { MdPhotoLibrary } from "react-icons/md"

const ProjectSection = ({content}) => {
    const [showProjectDetails, setShowProjectDetails] = useState(false)
    const [items, setItems] = useState('')
    const handleClick = (item) =>{
        setItems(item)
        setShowProjectDetails(true)
    }

    useEffect(() => {
     setShowProjectDetails(false)
    }, [])
    
    
    console.log(showProjectDetails)
  return (
    <div >
        <div className=" pb-14  sm:flex justify-between items-center">
            <div className="w-full pb-6 sm:pb-0 h-full ">
                <Heading type={'flex'} title={content.title} heading={content.heading} />
            </div>
            
        </div>
        <div className="pb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                content.items.map((item, i) => (
                    <>
                        <div key={i} onClick={()=>handleClick(item)}>
                            <ImageCard imgUrl={item.imageUrl[0]} component={
                            <p className="flex justify-between items-center">
                                <p>{item.name}</p>
                                <p className="flex gap-1 items-center">{item.imageUrl.length} <MdPhotoLibrary size={20}/></p>
                            
                            </p>}/>
                        </div>
                       
                </>
                ))
            }
        </div>
        <Button link='/projects' variant={'primary'}>Vew All Projects</Button>
    
            
        {showProjectDetails && <ProjectDetails item={items}  isOpen={showProjectDetails} onClose={()=>setShowProjectDetails(false)}/>}
    </div>
  )
}

export default ProjectSection