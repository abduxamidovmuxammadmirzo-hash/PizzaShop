'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface PizzaProps {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

export const PizzaCard: React.FC<PizzaProps> = ({ title, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className="w-[280px] text-center mb-10 group">
      <Image 
        src={imageUrl} 
        alt={title} 
        width={260} 
        height={260} 
        className="mx-auto group-hover:translate-y-2 transition-transform duration-300" 
      />
      
      <h4 className="text-xl font-extrabold mt-3 mb-5">{title}</h4>
      
      <div className="bg-[#f3f3f3] rounded-xl p-1 flex flex-col gap-1">
        <ul className="flex">
          {typeNames.map((name, i) => (
            <li
              key={name}
              onClick={() => types.includes(i) && setActiveType(i)}
              className={`flex-1 p-2 rounded-md text-sm font-bold cursor-pointer transition-all ${
                activeType === i ? 'bg-white shadow-sm' : 'text-[#595959] opacity-50'
              } ${!types.includes(i) ? 'cursor-not-allowed opacity-20' : ''}`}
            >
              {name}
            </li>
          ))}
        </ul>
        <ul className="flex">
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={`flex-1 p-2 rounded-md text-sm font-bold cursor-pointer transition-all ${
                activeSize === i ? 'bg-white shadow-sm' : 'text-[#595959]'
              }`}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="font-bold text-2xl">от {price} ₽</div>
        <button className="flex items-center gap-2 border border-[#fe5f1e] text-[#fe5f1e] px-4 py-2 rounded-3xl font-bold hover:bg-[#fe5f1e] hover:text-white transition-all active:scale-95">
          <span className="text-xl">+</span>
          Добавить
        </button>
      </div>
    </div>
  );
};