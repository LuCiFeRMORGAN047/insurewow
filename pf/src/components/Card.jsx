import React from 'react'
import {SiReadme} from 'react-icons/si'
const Card = ({pic,title}) => {
  return (
    <div className='relative flex flex-col w-[17rem] h-[15rem] rounded-b-xl   shadow-lg'>
            
        <img className='w-[20rem] h-[10rem] object-fill rounded-t-3xl  ' src={pic} />
        <div className=' flex  bg-white rounded-b-xl h-full '>
           <span className='p-2 text-lg h-[5rem] font-normal flex flex-col flex-[2.5] '>
            <h1>
                {title}
            </h1>
            <h2 className=' text-[0.9rem] font-light'>
            Read more
            </h2>
           </span>
           <span className='flex-[1] grid place-content-center'>
            <span className=' cursor-pointer bg-green-200 w-10 h-10  rounded-full grid place-content-center'>
                 <SiReadme fill='green'   size={25}/>
            </span>
           
           </span>
            </div>
    </div>
  )
}

export default Card