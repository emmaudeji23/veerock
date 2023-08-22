// components/BlogCard.js

import { FaFolder, FaLongArrowAltRight } from "react-icons/fa";
import Button from "../Buttons/Button";
import ImageContainer from "./ImageContainer";
import Link from "next/link";


const BlogCard = ({ title, imageUrl, category, introduction, slug }) => {

    return (
      <div className="bg-light200 rounded-lg overflow-hidden h-ful">
        <div className="overflow-hidden w-full h-60">
            <ImageContainer img={imageUrl} alt={title}/>
        </div>
        <div className="p-6 flex flex-col h-full justify-between gap-4">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-3">{introduction}</p>
            </div>
            <div className="flex justify-between items-center">
               
                <Link href={`/blogs/${category}`}  className="flex items-center gap-2 text-blue-600">
                    <FaFolder/><p>{category}</p>
                </Link>
                <Link href={`/blogs/${slug}`} className="flex items-center gap-2 text-blue-600">
                    <p>Read more</p><FaLongArrowAltRight/>
                </Link>
            </div>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  