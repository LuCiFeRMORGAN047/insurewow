import React from 'react'
import {BiShieldPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='absolute flex justify-between h-fit items-center  z-10 inset-0 p-3'>
    <Link to={'/'}>
    <div className='pl-12 text-3xl items-center text-white font-semibold  flex cursor-pointer  '>
        <BiShieldPlus   size={40}/>
        <span>
        Insurewow
        </span>
        
      </div>
    </Link>
      
     
          <ul className='flex gap-x-7 items-center text-md  font-semibold'>
            <li className='hover:text-green-500 cursor-pointer transition-all delay-40 hover:border-b-2 border-green-400   '>Home</li>
            <li className='hover:text-green-500 cursor-pointer transition-all delay-40 hover:border-b-2 border-green-400  '>About Us</li>
            <li className='hover:text-green-500 cursor-pointer transition-all delay-40 hover:border-b-2 border-green-400  '>Services</li>
            <li className='hover:text-green-500 cursor-pointer transition-all delay-40 hover:border-b-2 border-green-400  '>Contact Us</li>
            <li className=''>
              <button className='bg-gradient-to-r text-sm font-medium  from-green-400 to-green-500 p-3  rounded-3xl hover:cursor-pointer text-neutral-700  hover:scale-[1.04] active:scale-[0.99] w-[6rem] '>
                Sign in
              </button>
            </li>
            </ul>    
    
    </div>
  )
}

export default Navbar