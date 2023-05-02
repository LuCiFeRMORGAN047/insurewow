import React from 'react'
import Dashlayout from '../components/dashboard/Dashlayout'
import {AiOutlineLineChart} from "react-icons/ai"
const Dashboard = () => {
  return (
    <Dashlayout>
       <div className='mt-2'>
        <h1 className='text-3xl font-semibold text-gray-600 tracking-widest'>Welcome Hama,</h1>
<div className='flex flex-wrap justify-evenly mt-10'>
    <div className='bg-white relative  h-[8rem] shadow-xl rounded-2xl w-[16rem]'>
            <h1 className='p-2 mt-3 text-sm text-gray-500 font-medium '>Total Expenses</h1>
            <span className='p-2 tracking-widest text-2xl font-semibold'>$50,000,000</span>
            <br/>
            <h1 className='p-2 mt-1 text-sm tracking-wide'><span className=' text-green-500 mr-1'>40%</span>Compare with last Month</h1>
            <span className='absolute top-5 bg-green-100 rounded-3xl p-1  left-[80%]'>
            <AiOutlineLineChart size={30} color='green'/>
            </span>
    </div>
    <div className='bg-white relative  h-[8rem] shadow-xl rounded-2xl w-[16rem]'>
            <h1 className='p-2 mt-3 text-sm text-gray-500 font-medium '>Total Expenses</h1>
            <span className='p-2 tracking-widest text-2xl font-semibold'>$50,000,000</span>
            <br/>
            <h1 className='p-2 mt-1 text-sm tracking-wide'><span className=' text-red-500 mr-1'>40%</span>Compare with last Month</h1>
            <span className='absolute top-5 bg-red-100 rounded-3xl p-1  left-[80%]'>
            <AiOutlineLineChart size={30} color='red'/>
            </span>
    </div>
    <div className='bg-white relative  h-[8rem] shadow-xl rounded-2xl w-[16rem]'>
            <h1 className='p-2 mt-3 text-sm text-gray-500 font-medium '>Total Expenses</h1>
            <span className='p-2 tracking-widest text-2xl font-semibold'>$50,000,000</span>
            <br/>
            <h1 className='p-2 mt-1 text-sm tracking-wide'><span className=' text-green-500 mr-1'>40%</span>Compare with last Month</h1>
            <span className='absolute top-5 bg-green-100 rounded-3xl p-1  left-[80%]'>
            <AiOutlineLineChart size={30} color='green'/>
            </span>
    </div>
    <div className='bg-white relative  h-[8rem] shadow-xl rounded-2xl w-[16rem]'>
            <h1 className='p-2 mt-3 text-sm text-gray-500 font-medium '>Total Expenses</h1>
            <span className='p-2 tracking-widest text-2xl font-semibold'>$50,000,000</span>
            <br/>
            <h1 className='p-2 mt-1 text-sm tracking-wide'><span className=' text-red-500 mr-1'>40%</span>Compare with last Month</h1>
            <span className='absolute top-5 bg-red-100 rounded-3xl p-1  left-[80%]'>
            <AiOutlineLineChart size={30} color='red'/>
            </span>
    </div>
</div>
       </div>
    </Dashlayout>
  )
}

export default Dashboard