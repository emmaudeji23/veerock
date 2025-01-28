import BlogLayout from '@/components/Layout/BlogLayout';
import Empty from '@/components/Loader/Empty';
import Loading from '@/components/Loader/Loading';
import BlogList from '@/components/Section/BlogList';
import { blogPage } from '@/data/blogPageData';
import { redirect,  } from 'next/navigation'
import { Suspense } from 'react';

const page = () => {
  const {blogs} =  blogPage();

  const categoryBlogs = {
    category:  '',
    blogs:   blogs.blogs,
  };

  return (
    <Suspense fallback={<Loading/>}>
      <BlogLayout>
        {!categoryBlogs.blogs.length ? 
          <Empty/> 
          :
          <BlogList filteredBlogs={categoryBlogs}/>
          }
      </BlogLayout>
    </Suspense>
  )
 }
export default page;