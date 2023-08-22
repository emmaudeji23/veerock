

// pages/blog/[category].js
import BlogLayout from '@/components/Layout/BlogLayout';
import Loading from '@/components/Loader/Loading';
import BlogList from '@/components/Section/BlogList';
import { blogPage } from '@/data/blogPageData';// Assuming you've defined your blog data here


const Blogs = async ({params}) => {
  
  const {blogs} =  blogPage();
  const category  = params.category;

  // Check if the category is valid and not null, a number, or any non-string value
  const isValidCategory = blogs.blogs.some((blog) => blog.category.toLowerCase() === category.toLowerCase());


  // console.log('pp==', params.category, '====', isValidCategory)


  const categoryBlogs = {
    category: isValidCategory ? category : null,
    blogs: isValidCategory 
        ? blogs.blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase())
        : blogs.blogs, // Show all blogs
  };
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <BlogLayout>

      {!categoryBlogs.blogs ? <Loading/> :
      <BlogList filteredBlogs={categoryBlogs}/>}
      
    </BlogLayout>
  );
};


export default Blogs;
