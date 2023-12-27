import React, { useState, useEffect } from 'react';
import { url } from "@/data/url"
import PortfolioCard from './Cards/PortfolioCard';
import { FaSearch } from 'react-icons/fa';
import Heading from './Section/Heading';
import { projectCategories } from "@/data/portfolio"
import { useRouter, useSearchParams } from 'next/navigation';


const Search = ({ data, card,  }) => {
  const router = useRouter()
  const [active, setActive] = useState('all')
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = ['All', ...new Set(data.map((item) => item.category))];

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setFilteredData(filterData(searchQuery, selectedCategory));
      setLoading(false);
    }, 1000);
  }, [searchQuery, selectedCategory]);

  const filterData = (query, category) => {
    return data.filter((item) => {
      const categoryMatch = category === 'All' || item.category === category;
      const queryMatch =
        query === '' ||
        Object.values(item).some(
          (value) =>
            typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
        );
      return categoryMatch && queryMatch;
    });
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSearchQuery('')
  };



  return (
    <>
        {/* <nav className=" flex justfify-center items-center text-center gap-4 overflow-auto w-full pb-4">
            {
                projectCategories?.map(({id,slug,title,icon}, i)=>(
                    <ol key={id}
                    onClick={()=> {
                        router.push(`${url.localhost}projects?slug=${slug}`)
                        setActive(searchParams)
                    }}
                    className={`${active===slug ? 'border-yellow-500' : ''}  hover:border-yellow-500 duration-300 cursor-pointer text-center flex flex-col justify-center items-center  shrink-0 p-3 h-24 w-28 text-sm  bg-light200 rounded gap-`}>
                        <p className="text-2xl">{icon}</p>
                        <p>{title}</p> 
                    </ol>
                ))
            }
        </nav> */}
        <div className="flex items-center gap-10 flex-wrap pb-10">
            <div className="flex gap-2 justify-end items-center p-3 bg-light200 border border-gray-300 rounded-md">
                <input
                type="text"
                placeholder="Search..."
                className="w-80 bg-transparent "
                value={searchQuery}
                onChange={handleInputChange}
                />
                <FaSearch/>
            </div>

            <select
                className="p-3 bg-light200 border w-80 border-gray-300 rounded-md"
                value={selectedCategory}
                onChange={handleCategoryChange}
                >
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                    {category}
                    </option>
                ))}
            </select>
        </div>

        {/* <Heading type={'flex'} title={selectedCategory==='All' ? 'All items' : searchQuery || selectedCategory ? `Result for ${searchQuery || selectedCategory}` : `All items`} /> */}
        
      {loading ? (
        <p className="h-96">Loading...</p>
      ) : searchQuery || selectedCategory && !filteredData.length ? (
        <div className="h-96 w-full flex justify-center items-center">
            No match found
        </div>
      )
      : (
        <div className="py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                filteredData?.map((item, i) => (
                    <div key={i}>
                        <PortfolioCard item={item}/>
                    </div>
                ))
            }
        </div>
      )}
    </>
  );
};

export default Search;
