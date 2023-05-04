import React from 'react'
import google from '../../assets/google.png'
import tesla from '../../assets/tesla.png'
import paypal from '../../assets/paypal.png'
import meta from '../../assets/meta.png'
import riot from '../../assets/riot.png'
import {motion} from 'framer-motion'
const TopComp = () => {
  return (
    <div className='h-[20rem] flex flex-col items-center bg-slate-100 '>
            <h1 className='mt-12 font-semibold text-5xl bg-gradient-to-r  from-green-500 to-green-700  h-[4.5rem] bg-clip-text text-transparent'>Trusted By Top Companies</h1>
            <div className='flex mt-12 gap-x-10'>
                {
                    comps.map((e,i)=>{
                      return <motion.div
                      initial={{ opacity: 0 }}
                      transition={{delay : 0.2*i}}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    > 
                      
                      <img className='w-[9rem] transition-all delay-100  h-[6rem] object-contain hover:grayscale-0 hover:cursor-pointer grayscale ' src={e} key={i}  />
                    </motion.div>
                    })
                }

            </div>
    </div>
  )
}
const comps = [
            riot,
            tesla,
            paypal,
            google,
            meta
]
export default TopComp