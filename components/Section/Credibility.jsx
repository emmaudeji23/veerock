
import { credibilityData, aboutData } from "@/data/credibilityData";
import Link from "next/link";
import SimpleCard from "../Cards/SimpleCard";

const Credibility = ({content}) => {
  return (
    <div className="grid md:grid-cols-2 max-w-[1000px] m-auto">
      
      <div className=" pt-12 px-12 bg-blue-900 text-white grid justify-between h-full">
            <div className="h-full mb-4 space-y-2">
              <h2 className="text-4xl font-medium mb-2">{content[0].heading}</h2>
              <p className="">{content[0].description}</p>
              
          
              <Link href={'/about'} className="text-yellow-400 hover:text-yellow-500 duration-300">{'Learn More'} </Link>
            </div>
            <div className="w-full h-60">
                <img src={aboutData[0].imageUrl} alt={aboutData[0].title} className="w-full h-full object-cover" />
            </div>
      </div>

      <div className=" w-full grid sm:grid-cols-2 bg-light300">
            {content[1]?.map(({heading, icon, description, slug})=> (
                <Link href={`/blog/${slug}`}>
                  <SimpleCard icon={icon} text={description} title={heading}/>
                </Link>
            ))}
      </div>
    </div>
  );
};

export default Credibility;
