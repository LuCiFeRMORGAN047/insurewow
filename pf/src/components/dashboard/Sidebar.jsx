import React from 'react'
import {BiShieldPlus} from 'react-icons/bi'
import {BiLogOut} from 'react-icons/bi'
import {MdDashboard ,MdLiveHelp} from 'react-icons/md'
import {IoPieChartSharp} from 'react-icons/io5'
import {FaFileContract ,FaDoorClosed ,FaUsers} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className=' fixed w-[15rem] p-2 left-0 top-0 bg-green-400  h-full '>
      <Link to={'/'}>
      <div className=' text-3xl   mt-3    text-white font-semibold  flex cursor-pointer   '>
        <BiShieldPlus   size={40}/>
        <span>
        Insurewow
        </span>
        
      </div>  
      </Link>
             
      <div className='pl-2 mt-10'>
        <h1 className='text-sm font-normal mt-3'>Main Menu</h1>
        <ul className='flex flex-col gap-y-1 mt-3 '>
            <li className=' hover:bg-white hover:cursor-pointer  flex items-center rounded-2xl p-2 gap-x-2 text-lg'><span><MdDashboard size={25}/></span>Home</li>
            <li className=' hover:bg-white hover:cursor-pointer  flex items-center rounded-2xl p-2 gap-x-2 text-lg'><span><IoPieChartSharp size={25}/></span>Charts</li>
            <li className=' hover:bg-white hover:cursor-pointer  flex items-center rounded-2xl p-2 gap-x-2 text-lg'><span><FaUsers size={25}/></span>Users</li>
            <li className=' hover:bg-white hover:cursor-pointer  flex items-center rounded-2xl p-2 gap-x-2 text-lg'><span><FaFileContract size={25}/></span>Conracts</li>
            <li className=' hover:bg-white hover:cursor-pointer  flex items-center rounded-2xl p-2 gap-x-2 text-lg'><span><FaDoorClosed size={25}/></span>Closed Cases</li>
        </ul>
            <hr  className=' border-gray-300 w-[11rem] mt-3 h-1  ' />
        <h1 className='text-sm font-normal mt-3'>Preferences</h1>
        <ul className='flex flex-col gap-y-1 mt-3 '>
            <li className=' hover:bg-white hover:cursor-pointer  flex items-center rounded-2xl p-2 gap-x-2 text-lg'><span><AiFillSetting size={25}/></span>Settings</li>
            <li className=' hover:bg-white hover:cursor-pointer  flex items-center rounded-2xl p-2 gap-x-2 text-lg'><span><MdLiveHelp size={25}/></span>Help Center</li>
           
        </ul>
        <h1 className='mt-[6rem] hover:bg-white hover:cursor-pointer  text-center rounded-2xl p-2 flex items-center text-lg gap-x-2 '> <BiLogOut size={30} />Sign out</h1>
        </div> 
    </div>
  )
}

export default Sidebar