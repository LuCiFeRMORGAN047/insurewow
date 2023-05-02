import React from 'react'
import Sidebar from './Sidebar'

const Dashlayout = ({children}) => {
  return ( 
        <div className='flex h-[100vh]'> 
           <div className='flex-[1] relative    '>
           <Sidebar/>
           </div>
            
                <div className='flex-[4] mt-7'>
                    {children}
                </div>
        </div>
   
  )
}

export default Dashlayout