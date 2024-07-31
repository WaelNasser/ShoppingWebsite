import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="hidden sm:block border-b border-gray-300 py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center justify-between">
            <div className="iconsStyle">
              <FaFacebook />
            </div>
            <div className="iconsStyle">
              <FaInstagram />
            </div>
            <div className="iconsStyle">
              <FaTwitter />
            </div>
            <div className="iconsStyle">
              <FaLinkedin />
            </div>
          </div>

          <div>
            <p className="text-[12px] font-normal text-gray-400 uppercase">
              <b className="text-blackish">free Shopping</b> this week ordered
              over - $55
            </p>
          </div>

          <div className="flex gap-4">
            <select
              name="payment"
              id="payment"
              className="text-gray-400 text-[12px] w-[70px] cursor-pointer">
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="INR">INR</option>
            </select>

            <select
              name="language"
              id="languages"
              className="text-gray-400 text-[12px] w-[70px] cursor-pointer">
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop