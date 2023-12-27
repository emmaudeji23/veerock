'use client'

import { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import { MdPhotoLibrary } from 'react-icons/md'
import ProjectDetails from '../Modal/ProjectDetails'

const PortfolioCard = ({item}) => {
    const [showProjectDetails, setShowProjectDetails] = useState(false)
    const [items, setItems] = useState('')
    const handleClick = (item) =>{
        setItems(item)
        setShowProjectDetails(true)
    }

    useEffect(() => {
     setShowProjectDetails(false)
    }, [])
    
  return (
    <>
    <ImageCard handleClick={()=>handleClick(item)} imgUrl={item?.imageUrl[0]} component={
        <div className="flex justify-between items-center">
            <p>{item?.name}</p>
            <p className="flex gap-1 items-center">{item?.imageUrl.length} <MdPhotoLibrary size={20}/></p>
        </div>}
    />

    {showProjectDetails && <ProjectDetails item={items}  isOpen={showProjectDetails} onClose={()=>setShowProjectDetails(false)}/>}
    </>
  )
}

export default PortfolioCard