import BlogLayout from '@/components/Layout/BlogLayout';
import Empty from '@/components/Loader/Empty';
import Loading from '@/components/Loader/Loading';
import BlogList from '@/components/Section/BlogList';
import { blogPage } from '@/data/blogPageData'; 
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

const Blogs = async ({params}) => {
  
  const {blogs} =  blogPage();
  const category  = params.category;
  const decodedCategory = decodeURIComponent(category);

  // Check if the category is valid and not null, a number, or any non-string value
  const isValidCategory = blogs.blogs.some((blog) => blog.category.toLowerCase() === decodedCategory.toLowerCase());
  // console.log({category,decodedCategory,isValidCategory})
  
  const filteredPosts = blogs.blogs.filter((blog) => blog.category.toLowerCase() === decodedCategory.toLowerCase())

  const categoryBlogs = {
    category:  decodedCategory,
    blogs: isValidCategory ? filteredPosts : blogs.blogs,
  };

  return (
    <Suspense fallback={<Loading />}>
      <BlogLayout>
        {!categoryBlogs.blogs.length ? 
          <Empty/> 
          :
          <BlogList filteredBlogs={categoryBlogs}/>
          }
      </BlogLayout>
    </Suspense>
  );
};


export default Blogs;
