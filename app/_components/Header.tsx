import Image from 'next/image';
import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi'; 
import { RiUserAddLine } from 'react-icons/ri';       

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 ml-[100px]">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
                <Image
                    src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" 
                    alt="React Pizza Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                />
                <div className="flex flex-col">
                    <h1 className="text-xl font-black uppercase tracking-tight leading-tight text-[#181818]">
                        React Pizza
                    </h1>
                    <p className="text-gray-400 text-xs leading-tight">
                        самая вкусная пицца во вселенной
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="bg-[#61dafb] cursor-pointer hover:bg-[#4bc3e4] text-white text-sm font-bold py-2 px-5 rounded-full transition-all active:scale-95">
                     <RiUserAddLine size={18} />
                </button>

                <button className="bg-[#fe5f1e] cursor-pointer hover:bg-[#e24e13] text-white text-sm font-bold py-2 px-5 rounded-full flex items-center gap-3 transition-all active:scale-95 shadow-sm">
                    <span>540 ₽</span>
                    <span className="w-[1px] h-4 bg-white/40" />
                    <div className="flex items-center gap-1.5">
                        <HiOutlineShoppingCart size={18} />
                        <span>3</span>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;