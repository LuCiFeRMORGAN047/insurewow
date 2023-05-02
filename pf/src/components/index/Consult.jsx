import React from 'react'
import {RxDotFilled} from 'react-icons/rx'
import {FiPhoneCall} from 'react-icons/fi'
const Consult = () => {
  return (
    <div className='grid place-content-center gap-y-10'>
            <h1 className='text-5xl text-center'>Call us so we will take care <br/> of <span className='text-green-600'> all your worries</span></h1>
    <div className='flex gap-x-8 flex-wrap sm:gap-y-2 '>
        <div className='w-[30rem] flex justify-between p-3 rounded-2xl bg-white h-[8rem]'>
           <div>
           <h1 className='flex items-center font-medium text-lg'>  <RxDotFilled color='#1ed760'   size={40}/> <span>Customer Service</span></h1>
            <p className='text-sm pl-3 font-light'>
                talk to our costumer service  if you need to<br/> know more
            </p>
           </div>
           <div className='flex gap-y-1 flex-col items-center'>
           <p className=' font-normal text-sm text-gray-600 '>
                call us now
           </p>
           <span className='bg-green-500 h-[3rem] hover:cursor-pointer mt-2 p-3 rounded-2xl w-[3rem] grid
            place-content-center'>
           <FiPhoneCall  fill='white' color='white' size={20}/>
           </span>
           </div>
        </div>
        <div className='w-[30rem] flex justify-between p-3 rounded-2xl bg-white h-[8rem]'>
           <div>
           <h1 className='flex items-center font-medium text-lg'>  <RxDotFilled color='#1ed760'  size={40}/> <span>Conatct Us</span></h1>
            <p className='text-sm pl-3 font-light'>
                talk to our costumer service  if you need to <br/> know more
            </p>
           </div>
           <div className='flex gap-y-1 flex-col items-center'>
           <p className=' font-normal  text-sm text-gray-600'>
                call us now
           </p>
           <span className='bg-green-500 h-[3rem] hover:cursor-pointer mt-2 p-3 rounded-2xl w-[3rem] grid
            place-content-center'>
           <FiPhoneCall  fill='white' color='white' size={20}/>
           </span>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Consult