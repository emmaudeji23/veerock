import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
  const router = useRouter();
  const pathname = usePathname()
  const params = useSearchParams()
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    const pathSegments = pathname.split('/').filter(segment => segment !== '');

    const breadcrumbItems = pathSegments.map((segment, index) => ({
      id: index,
      label: segment,
      path: `/${pathSegments.slice(0, index + 1).join('/')}`,
    }));

    setBreadcrumb(breadcrumbItems);
  }, [pathname]);

  return (
    <div className="flex items-center flex-wrap">
      {breadcrumb.map((item, index) => (
        <div key={item.id} className="capitalize" >
          {index !== 0 && <span className="mx-2">{`>`}</span>}
          {item.path ? (
            <Link href={item.path} as={item.path} passHref className={pathname === item.path ? 'active-link' : 'hover-link'}>
                {item.label.startsWith('[') && item.label.endsWith(']') ? 
                 params[item.label.slice(1, -1)] :
                  item.label
                }
            
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </div>
      ))}
      <style jsx>{`
        .hover-link:hover {
          color: #3182ce; 
          text-decoration: underline;
        }
        .active-link {
          color: #3182ce; 
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Breadcrumb;
