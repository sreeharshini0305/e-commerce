import React, { useContext, useEffect, useState } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// import cartcontext
import { CartContext } from '../contexts/CartContext';
// import icons
import { BsBag } from 'react-icons/bs';
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
    <header
      className={`${isActive ? 'bg-white py-6 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full px-4'>
        <Link to={'/'}>
          <div className='flex items-center'>
            <img className='w-[40px]' src={Logo} alt='' />
            <div className='text-lg ml-4'>UrbanThreads</div>
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative max-w-[50px] mr-4'
        >
          <BsBag className='text-2xl' />
          <div
            className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;