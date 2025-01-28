'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {


  const pathname = usePathname();

//   console.log('router==', pathname)

  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    // Extract the path segments from the location
    const pathSegments = pathname.split('/').filter(segment => segment !== '');

    // Create breadcrumb items from the path segments
    const breadcrumbItems = pathSegments.map((segment, index) => ({
      id: index,
      label: segment, // You can customize this label if needed
    }));

    setBreadcrumb(breadcrumbItems);
  }, [pathname]);

  return (
    <div className="flex items-center text-base ">
      {breadcrumb.map((item, index) => (
        <div key={item.id} className="text-sm md:text-lg z-10 text-white">
          {index !== 0 && <span className="mx-1">{`>`}</span>}
          <span className='capitalize'>{decodeURIComponent(item.label)}</span>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
