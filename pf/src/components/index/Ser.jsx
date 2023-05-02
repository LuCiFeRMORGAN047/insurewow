import React from 'react'
import {HiArrowLongRight} from 'react-icons/hi2'
import life from '../../assets/life.jpg'
import car from '../../assets/car.jpg'
import heart from '../../assets/heart.jpg'
import Card from '../Card'
const Ser = () => {
  return (
    <div className='bg-slate-100 pl-[5rem] mt-10 flex h-[20rem]   '>
            <div className='flex-[2] flex flex-col gap-y-5'>
                <h1 className=' text-6xl font-semibold'>Insurance<span className='text-green-600 '> for your future</span> </h1>
                <p className=' font-normal'>
                    We provide servral insurance services ,namely , health insurance , life insurance , property insurance  and visnis insurance 
                </p>
                <span className='flex items-center pl-5'>
                
                <HiArrowLongRight className=' hover:cursor-pointer transform rotate-180'   size={30}/>
                <HiArrowLongRight className=' hover:cursor-pointer text-green-400'   size={50}/>
                </span>
              
                </div>
    <div className=' flex-[3] flex gap-6 p-5  '>
    {
      tiltes.map((e,i)=>{
      return  <Card title={e.title} pic={e.card} key={i}/>
     
      })
    }
    
    </div>
    </div>
  )
}
const tiltes =[
  {
    title : "Life Insurance",
    card : life
  },
  {
    title : "Health Insurance",
    card : heart
  },
  {
    title : "Property Insurance",
    card : car
  },
]
export default Ser