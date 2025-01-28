// components/Layout.js
import { blogPage } from "@/data/blogPageData";
import PageHeroBanner from "../HeroBanner/PageHeroBanner";
import Link from "next/link";

const BlogLayout = ({ children }) => {
    const {blogs} = blogPage()

    const existingCategories = [
        'All Blogs', // Add "All Blogs" to the list
        // 'Construction',
        // 'Energy',
        // 'Project Management',
        // 'Budgeting',
        // 'News',
    ];

  // Extract unique categories from the blogs data
  const uniqueCategories = [...new Set(blogs.blogs.map((blog) => blog.category))];

  // Filter out categories that are already in existingCategories
  const newCategories = uniqueCategories.filter(
    (category) => !existingCategories.includes(category)
  );

  // Merge the existing categories list with the unique categories
  const allCategories = [...existingCategories, ...newCategories];


  return (
    <div className="">
        <PageHeroBanner bannerImg='/woman-eng-smiling.jpg' title="Blogs " breadcomb='' />
     
      <div className="lg:flex max-w-[1420px] mx-auto px-2">
        <nav className="w-full bg-light200 lg:w-80 lg:py-8  max-lg:overflow-auto ">
            
            <ul  className="flex lg:flex-col lg:gap-4 gap-1 w-full p-4 lg:w-80 ">
            {allCategories.map((category, index) => (
                <Link href={`/blogs/${encodeURI(category)}`} key={index} scroll={false} className="bg-light300 hover:ring hover:ring-yellow-500 duration-300 flex-shrink-0 p-4">
                    {category}
                </Link>
            ))}
            </ul>
        </nav>
        <main className='w-full p-8'>{children}</main>
      </div>
    </div>
  );
};

export default BlogLayout;
