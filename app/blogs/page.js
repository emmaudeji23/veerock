'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
 const page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the default category page when the user enters /blogs
    router.push(`/blogs/all-blogs`)
  }, []);

  return null; // Return null since this page doesn't have any content
};
export default page;