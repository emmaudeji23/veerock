'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { url } from "@/data/url"
import { projectCategories } from "@/data/portfolio"
import ProjectSection from "../Section/ProjectSection"
import { homepageData } from "@/data/homepageData"
import Heading from "../Section/Heading"
import ImageCard from "../Cards/ImageCard"
import { MdPhotoLibrary } from "react-icons/md"
import Search from "../SearchList"

const ProjectPageLayout = () => {
    const {projectsPortfolio, } = homepageData()
    return (
        <main className="section-padding py-20">
            <Search data={projectsPortfolio?.items}/>
        </main>
    )
}

export default ProjectPageLayout