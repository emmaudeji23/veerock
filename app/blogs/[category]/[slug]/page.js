

// pages/blog/[slug].js
import BlogLayout from '@/components/Layout/BlogLayout';
import Loading from '@/components/Loader/Loading';
import BlogPost from '@/components/Section/BlogPost';
import { blogPage } from '@/data/blogPageData';// Assuming you've defined your blog data here


const Blogs = async ({params}) => {
  
  const {blogs} =  blogPage();
  const slug  = params.slug;
  const decodedSlug = decodeURIComponent(slug);

  // Check if the slug is valid and not null, a number, or any non-string value
  const isValidSlug = blogs.blogs.some((blog) => blog.slug.toLowerCase() === decodedSlug.toLowerCase());


  console.log('pp==', params.slug, '---', decodedSlug, '====', isValidSlug)


  const blogPost = isValidSlug ? blogs.blogs.find((blog) => blog.slug.toLowerCase() === decodedSlug.toLowerCase()) : null;
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <BlogLayout>

      {!blogPost ? <p>Blog post not found.</p> :
      <BlogPost blogPost={blogPost}/>}
      
    </BlogLayout>
  );
};


export default Blogs;
