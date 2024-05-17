import React, { useContext, useEffect, useState } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// import cartcontext
import { CartContext } from '../contexts/CartContext';
// import icons
import { BsBag,BsSearch } from 'react-icons/bs';
// import logo
import Logo from '../img/logo.svg';
// import link
import { Link } from 'react-router-dom';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`${isActive ? 'bg-white py-6 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`} >
      <div className='container mx-auto flex items-center justify-between h-full px-4'>
        <div className='flex items-center'>
          <Link to={'/'}>
            <div className='flex items-center'>
              <img className='w-[40px]' src={Logo} alt='' />
              <div className='text-lg ml-4'>UrbanThreads</div>
            </div>
          </Link>
        </div>
        <div className='flex items-center flex-grow-0'>
          <div className='flex items-center mr-4'>
            <div className='relative'>
              <BsSearch className='absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-500' />
              <input type='text' placeholder='Search' className='px-4 py-2 border rounded-full border-gray-300 focus:outline-none focus:border-gray-500 w-full pl-12' />
            </div>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]' >
            <BsBag className='text-2xl' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center' >
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;