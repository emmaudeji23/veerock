import Heading from "./Heading"
import Button from "../Buttons/Button"
import ImageCard from "../Cards/ImageCard"

const ProjectSection = () => {
  return (
    <div >
        <div className=" pb-14  sm:flex justify-between items-center">
            <div className="w-full pb-6 sm:pb-0 h-full ">
                <Heading title={'ABOUT PROJECTS'} heading={`Our Recent `} styled={'Projects'} />
            </div>
            <div className=" flex flex-wrap sm:justify-end w-full h-full gap-6 items-center overflow-hidden">
                <Button link='/projects' variant={'secondary'}>All Projects</Button>
                <Button link='/projects' variant={'secondary'}>Buildings</Button>

                <Button link='/projects' variant={'secondary'}>Interiors</Button>

                <Button link='/projects' variant={'secondary'}>Construction</Button>

            </div>
        </div>
        <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                [1,2,3,4,5,6].map((item, i) => (
                    <ImageCard component={<p>Lorem ipsum dolor sit amet</p>}/>
                    // <div className="text-6xl">a</div>
                ))
            }
        </div>
        
    </div>
  )
}

export default ProjectSection