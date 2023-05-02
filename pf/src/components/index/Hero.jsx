import React from 'react'
import {FaPlayCircle} from 'react-icons/fa'
import family from '../../assets/family.jpg'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
const Hero = () => {
  return (
    <div className='flex h-[100vh] bg-slate-100 relative'>
    <div className=' justify-items-center  flex-[1] bg-gradient-to-tr from-green-600 to-green-700 rounded-br-[15rem]'>
    </div>
    <div className="absolute top-[15%] flex flex-col left-[10%] w-[25rem] z-[100] ">
     <img className=" object-fill  rounded-t-[20rem]" src={family}/>
   <div  className=" flex  bg-white w-full rounded-b-2xl"> 
        <span className=" text-md  p-3">
          What is happy family like ? watch this video to hear their answers
        </span>
        <span className=" bg-green-400 w-[10rem] grid place-content-center rounded-br-2xl  ">
          <FaPlayCircle className='cursor-pointer '  fill='white' radius={20} size={40}/>
        </span>
   </div>
    </div>
    <div className='flex-[3] relative  '>
    <div className='absolute top-[25%] left-[32%] flex
      flex-col gap-y-6
    '>
    <h1 className=' text-6xl font-semibold'>Protect everthing <br/>With <span className=' bg-gradient-to-r from-green-500 to-green-700  bg-clip-text text-transparent'>
     Insurewow
      </span></h1>
      <p className=' font-medium'>
        Together with Insurewow , insure yourself and yoour lovd ones . <br/>
        preventive action is needed to minimize what happens
      </p>
      <div className='flex gap-x-4 mt-10  '>
       <div className='flex items-center ml-2'>
          {
            users.map((e,i)=>{
              return <img key={i} className='w-9 rounded-full shadow-lg  border-green-600 border-2 -m-2' src={e} />
                      
             
            })
          }
       </div>
       <div className=' font-light'>
            7000+ people have<br/>
            chosen their insurance
       </div>
      </div>
    </div>
    </div>
  </div>
  )
}
const users = [
    pic1,
    pic2,
    pic3

]
export default Hero