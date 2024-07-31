import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";




const HeaderMain = () => {
  return (
    <div className="border-b border-gray-300 py-3">
      <div className="container">
        <div className="sm:flex justify-between items-center">
          <div className="text-4xl font-bold text-center my-2">logo</div>
          <div className="flex justify-between items-center text-center border border-gray-200 rounded-md py-1 w-full sm:w-[70%] md:w-[60%] relative">
            <input
              type="text"
              className="w-[97%] py-1 border border-none outline-none px-2"
              placeholder="Enter Any Product Name..."
            />
            <IoSearchOutline className="absolute right-2 text-[20px] cursor-pointer" />
          </div>
          <div className="hidden md:flex items-center justify-between space-x-4">
            <div>
              <LuUser2 className="cursor-pointer text-[28px] text-gray-600" />
            </div>
            <div className="relative">
              <FiHeart className="cursor-pointer text-[28px] text-gray-600" />
              <div className="absolute top-0 right-[-5px] bg-red-600 w-[18px] h-[18px] text-white grid place-items-center rounded-full translate-x-1 -translate-y-1 text-[12px]">
                0
              </div>
            </div>
            <div className="relative">
              <HiOutlineShoppingBag className="cursor-pointer text-[28px] text-gray-600" />
              <div className="absolute top-0 right-[-5px] bg-red-600 w-[18px] h-[18px] text-white grid place-items-center rounded-full translate-x-1 -translate-y-1 text-[12px]">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain