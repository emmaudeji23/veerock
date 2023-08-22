'use client'

import usePagination from "@/utils/usePagination";
import BlogCard from "../Cards/BlogCard";

const BlogList = ({filteredBlogs}) => {

  // return <div></div>

    // Handle error if the category does not exist
    if (!filteredBlogs?.blogs) {
      return <div>Loading...</div>; // You can replace this with a proper loading component
    }
  
    const itemsPerPage = 6;
    const { currentPage, paginate, currentItems } = usePagination(itemsPerPage);
    const paginatedBlogs = currentItems(filteredBlogs?.blogs);

  return (
    <div>
      <div className="">
        {/* {!filteredBlogs.category && <p className="text-red-400 pb-2" >Category does not exist</p>} */}
      <h1 className="text-2xl font-semibold mb-4">
          {filteredBlogs.category ? `Blogs in ${filteredBlogs.category}` : 'All Blogs'}
          </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {!filteredBlogs?.blogs.length ? (<p className="flex justify-center items-center w-full h-full text-xl font-medium">No blog post listed</p>) :
        paginatedBlogs?.map(({title, imageUrl, category, introduction, slug}, index) => (
          <div key={index} className='h-full'>
                            <BlogCard title={title} imageUrl={imageUrl} category={category} introduction={introduction} slug={slug} />
                        </div>
        ))}
      </div>
      {/* Add pagination links */}
      <div className="mt-8">
        {Array.from({ length: Math.ceil(filteredBlogs.blogs.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 px-2 py-1 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BlogList