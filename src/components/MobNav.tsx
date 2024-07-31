import React from 'react'
import { FiMenu } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const MobNav = () => {
  return (
    <div className="container">
      <div className="md:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[450px] lg:w-[500px] h-[50px] bg-white flex z-50 justify-around items-center">
        <FiMenu className="text-[30px] cursor-pointer" />
        <div className="relative">
          <HiOutlineShoppingBag className="cursor-pointer text-[30px]" />
          <div className="absolute top-[2px] right-[-3px] bg-red-600 w-[18px] h-[18px] text-white grid place-items-center rounded-full translate-x-1 -translate-y-1 text-[12px]">
            0
          </div>
        </div>
        <IoHomeOutline className="text-[30px] cursor-pointer" />
        <div className="relative">
          <FaRegHeart className="cursor-pointer text-[30px] font-bold" />
          <div className="absolute top-[1px] right-[-3px] bg-red-600 w-[18px] h-[18px] text-white grid place-items-center rounded-full translate-x-1 -translate-y-1 text-[12px]">
            0
          </div>
        </div>
        <HiOutlineSquares2X2 className="text-[30px] cursor-pointer" />
      </div>
    </div>
  );
}

export default MobNav