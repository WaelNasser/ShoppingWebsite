import React from 'react'

const NavBar = () => {
  return (
    <div className='hidden lg:block py-2'>
      <div className="container py-3">
        <div className='container w-[70%] flex items-center justify-around'>
          <div>
            <h3 className="nav-bar uppercase text-[16px] cursor-pointer transition-all relative">Home</h3>
          </div>
          <div>
            <h3 className="nav-bar uppercase text-[16px] cursor-pointer transition-all relative">categoris</h3>
          </div>
          <div>
            <h3 className="nav-bar uppercase text-[16px] cursor-pointer transition-all relative">mens</h3>
          </div>
          <div>
            <h3 className="nav-bar uppercase text-[16px] cursor-pointer transition-all relative">womens</h3>
          </div>
          <div>
            <h3 className="nav-bar uppercase text-[16px] cursor-pointer transition-all relative">jewelry</h3>
          </div>
          <div>
            <h3 className="nav-bar uppercase text-[16px] cursor-pointer transition-all relative">perfume</h3>
          </div>
          <div>
            <h3 className="nav-bar uppercase text-[16px] cursor-pointer transition-all relative">Blog</h3>
          </div>
          <div>
            <h3 className="nav-bar uppercase text-[16px] cursor-pointer transition-all relative">hot offers</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar