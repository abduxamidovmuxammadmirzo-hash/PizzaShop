'use client';

import React, { useEffect } from 'react';
import { useCategoryStore } from '../store/useCategoryStore';

 const CategoryCard = () => {
  const { categories, activeId, setActiveId, fetchCategories, isLoading } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (isLoading) {
    return (
      <div className="flex gap-2 px-6 py-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-24 h-10 bg-gray-100 animate-pulse rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white">
      <ul className="flex gap-2">
        {categories.map((cat, index) => (
          <li
            key={cat.id || index}
            onClick={() => setActiveId(index)}
            className={`
              cursor-pointer px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-200 select-none
              ${activeId === index 
                ? 'bg-[#282828] text-white shadow-md' 
                : 'bg-[#f9f9f9] text-[#2c2c2c] hover:bg-[#f3f3f3]'
              }
            `}
          >
            {cat.name}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1 cursor-pointer group">
        <b className="text-sm text-[#2c2c2c]">Сортировка по:</b>
        <span className="text-[#fe5f1e] text-sm border-b border-dashed border-[#fe5f1e] ml-1">
          популярности
        </span>
        <svg 
          width="10" height="6" viewBox="0 0 10 6" fill="none" 
          className="text-[#fe5f1e] ml-1 transition-transform group-hover:translate-y-0.5"
        >
          <path d="M10 5L5 0L0 5H10Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};

export default CategoryCard