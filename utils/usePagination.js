"use client"

// hooks/usePagination.js
import { useState } from 'react';

const usePagination = (itemsPerPage, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = (items) => items.slice(indexOfFirstItem, indexOfLastItem);

  return { currentPage, paginate, currentItems };
};

export default usePagination;
