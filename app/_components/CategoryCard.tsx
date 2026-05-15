'use client';

import React, { useEffect } from 'react';
import { useCategoryStore } from '../store/useCategoryStore';

interface CategoryCardProps {
  items?: { id: string | number; name: string }[];
  activeId?: number;
  onSelectCategory?: (id?: number) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  items, 
  activeId: propsActiveId, 
  onSelectCategory 
}) => {
  const { categories, activeId: storeActiveId, setActiveId, fetchCategories, isLoading } = useCategoryStore();

  useEffect(() => {
    
    if (!items) {
      fetchCategories();
    }
  }, [fetchCategories, items]);

  
  const list = items || categories;
  const currentActiveId = propsActiveId !== undefined ? propsActiveId : storeActiveId;

  const handleSelect = (index: number, categoryId: string | number) => {
    if (onSelectCategory) {
      onSelectCategory(typeof categoryId === 'number' ? categoryId : undefined);
    }

    setActiveId(index); 
  };

  if (isLoading && !items) {
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
        {list.map((cat, index) => (
          <li
            key={cat.id || index}
            onClick={() => handleSelect(index, cat.id)}
            className={`
              cursor-pointer px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-200 select-none
              ${currentActiveId === index 
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

export default CategoryCard;