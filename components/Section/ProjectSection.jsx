import Heading from "./Heading"
import Button from "../Buttons/Button"
import ImageCard from "../Cards/ImageCard"

const ProjectSection = ({content}) => {
  return (
    <div >
        <div className=" pb-14  sm:flex justify-between items-center">
            <div className="w-full pb-6 sm:pb-0 h-full ">
                <Heading type={'flex'} title={content.title} heading={content.heading} />
            </div>
            
        </div>
        <div className="pb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                content.items.map(({name, category, imageUrl, description}, i) => (
                    <ImageCard component={<p>{name}</p>}/>
                    // <div className="text-6xl">a</div>
                ))
            }
        </div>
        <Button link='/projects' variant={'primary'}>Vew All Projects</Button>
        
    </div>
  )
}

export default ProjectSection