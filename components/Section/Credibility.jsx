

import Link from "next/link";
import SimpleCard from "../Cards/SimpleCard";
import {FaLongArrowAltRight} from 'react-icons/fa'
import PlainBtn from "../Buttons/PlainBtn";


const Credibility = ({content}) => {
  return (
    <div className="grid md:grid-cols-2 ">
      
      <div className=" pt-12 px-12 bg-blue-900 text-white grid justify-between h-full">
            <div className="h-full mb-4 space-y-2">
              <h2 className="text-3xl sm:text-4xl font-medium mb-2">{content[0].heading}</h2>
              <p className="">{content[0].description}</p>
              
          
              <PlainBtn text='Learn More' style={'text-yellow'} link={'/about'}/>
            </div>
            <div className="w-full h-60">
                <img src={content[0].imgUrl} alt={content[0].imgAlt} className="w-full h-full object-cover" />
            </div>
      </div>

      <div className=" w-full grid sm:grid-cols-2 gap-1">
            {content[1]?.map(({heading, icon, description, slug})=> (
                <Link href={`#`} key={slug}>
                  <SimpleCard icon={icon} text={description} title={heading}/>
                </Link>
            ))}
      </div>
    </div>
  );
};

export default Credibility;
