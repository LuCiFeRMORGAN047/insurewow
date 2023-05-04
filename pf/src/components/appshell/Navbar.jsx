import React, { useEffect, useState } from 'react';
import { BiShieldPlus } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [clas, setClas] = useState('');

  useEffect(() => {
    if (pathname === '/contact-us') {
      setClas('flex cursor-pointer items-center pl-12 text-3xl bg-gradient-to-r bg-clip-text text-transparent from-green-600 to-green-800');
    } else {
      setClas('pl-12 text-3xl items-center text-white font-semibold flex cursor-pointer');
    }
  }, [pathname]);

  return (
    <div className="absolute flex justify-between h-fit items-center z-10 inset-0 p-3">
      <Link to={'/'}>
        <div id="logo" className={clas}>
          <BiShieldPlus color={pathname === '/contact-us' ? 'green' : "white"} size={40} />
          <span>Insurewow</span>
        </div>
      </Link>

      <ul className="flex gap-x-7 items-center text-md font-semibold">
        <Link to={'/'}>
       
        <li className="hover:text-green-500 cursor-pointer transition-all delay-40 hover:border-b-2 border-green-400">Home</li>
        </Link>
        <li className="hover:text-green-500 cursor-pointer transition-all delay-40 hover:border-b-2 border-green-400">About Us</li>
        <li className="hover:text-green-500 cursor-pointer transition-all delay-40 hover:border-b-2 border-green-400">Services</li>
       <Link to={'/contact-us'}>
      
        <li className="hover:text-green-500 cursor-pointer transition-all delay-40 hover:border-b-2 border-green-400">Contact Us</li>
        </Link>
        <li>
           
          <Link to={'/signin'}>
            <button className="bg-gradient-to-r text-sm font-medium from-green-400 to-green-500 p-3 rounded-3xl hover:cursor-pointer text-neutral-700 hover:scale-[1.04] active:scale-[0.99] w-[6rem]">
              Sign in
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
