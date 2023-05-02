import React from 'react'
import doc from '../../assets/doc.png'
import {motion} from 'framer-motion'
const Best = () => {
  return (
    <div className='h-[25rem]  flex justify-around mt-20 '>
        <div className=' relative'>
        <motion.div
                      initial={{ opacity: 0 }}
                      transition={{delay : 0.5}}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    > 
               <img className=' w h-[20rem] rounded-2xl shadow-xl' src={doc} />
             
               <div className=' grid place-content-center shadow-md absolute top-10 left-[80%] rounded-2xl text-center  bg-white h-[7rem] w-[10rem]'>
                    <h1 className='text-green-600 font-semibold text-[1.5rem]' >
                            2030
                    </h1>
                    <p className='text-[0.7rem] font-medium '>
                        Insurewow will be  the <br/>
                         best insurance in the <br/> world
                    </p>
               </div>
               </motion.div>
            </div>
            <div className=''>
                   <h1 className=' font-semi bold text-6xl'>
                    The <span className='text-green-600'>
                    greatest
                        </span>  Insurance<br/>in North Africa
                   </h1>
                   <p className='text-md mt-3 font-light '>
                    Insurewow exists to help find peace in their lives<br/> and to help reduce their worries about the future . Insurewow <br/> is present as people's hope in this uncerttain era  
                   </p>
                   <button className='mt-10 bg-gradient-to-r text-sm font-medium from-green-400 to-green-500 p-3  rounded-3xl hover:cursor-pointer  hover:scale-[1.04] sha active:scale-[0.99] w-[9rem]'>
                    Get Started
                   </button>
            </div>
    </div>
  )
}

export default Best