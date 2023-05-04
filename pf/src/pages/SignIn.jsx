import React from 'react'
import gg from '../assets/gg.gif'
import { Link } from 'react-router-dom'
import {BiShieldPlus} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import ff from '../assets/facebook.png'
const SignIn = () => {
  return (
    <div className=' bg-white flex w-full h-[100vh]'>
    <div className='flex-[1] p-3 pl-10'>
    <Link to={'/'}>
    <div className=' mt-3 pl-8 text-2xl items-center bg-gradient-to-r bg-clip-text text-transparent from-green-600 to-green-800 bg- font-semibold  flex cursor-pointer  '>
        <BiShieldPlus color='green'   size={35}/>
        <span>
        Insurewow
        </span>
        
      </div>
    </Link>
     <h1 className=' mt-[5rem] pl-[7rem]  font-bold text-blue-950 tracking-widest text-3xl'>Welcome Back ! </h1>
    <p className=' tracking-wide font-normal pl-[9rem] mt-2  text-gray-600 text-md  '>
        SigIn in and take control
    </p>
    <div className='flex flex-col pl-[3rem] gap-y-4'>
    <div className='flex flex-col mt-7  '>
         <label className='text-md text-gray-700'>Email</label>
         <input type='email' name='email' className=' bg-gray-100 focus:outline-none w-[25rem]   rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1  ring-inset ring-neutral-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6' placeholder='Enter Email'/>
    </div>
    <div className='flex flex-col   '>
         <label className='text-md text-gray-700'>Password</label>
         <input type='password' name='password' id='password' className=' bg-gray-100 focus:outline-none w-[25rem]   rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1  ring-inset ring-neutral-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6' placeholder='*******'/>
    </div>
    <button className='active:scale-[0.99] font-light tracking-wide text-white bg-emerald-500 rounded-xl   p-2 w-[25rem] '>
        Sign In
    </button>
    <p className='text-sm  '>
        Forget your Password? <span className=' hover:cursor-pointer text-green-700'>
        Reset it now. 
            </span> 
    </p>
    
    </div>
    <span className=' font-semibold pl-[7rem] mt-3 flex items-center gap-x-2'><hr className=' border-1 border-neutral-800 w-[8rem]'/>OR<hr className=' border-1 border-neutral-800 w-[8rem]'/></span>
       <div className='  mt-2 justify-center -ml-[5rem] flex items-center gap-x-2'>
       <div className=' border border-neutral-800 hover:grayscale-0 transition-grayscale delay-250 hover:cursor-pointer  rounded-full p-1 grayscale  '>
        <FcGoogle  size={35}  />
        
        </div>
        <div className='border border-neutral-950 rounded-full p-1 grayscale hover:grayscale-0 hover:cursor-pointer filter  transition-grayscale delay-250'>
            <img  className='w-8' src={ff} />
              </div>
        
        </div> 
    
    </div>
        <img className='mr-[3rem]' src={gg}/>
        </div>
  )
}

export default SignIn