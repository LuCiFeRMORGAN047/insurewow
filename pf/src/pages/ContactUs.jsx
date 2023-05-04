import React from "react";
import va from '../assets/va.png'
const Contactus = () => {
    const HandleSubmit= (e)=>{
        e.preventDefault()
    }
    return ( 
        <div className=" flex mb-[8rem] ml-[1rem] mr-[2rem] ">
            
            <div className="flex-1  pl-[6rem]">
              <h2 className="mt-[3rem] pl-[7rem]  font-bold text-blue-950 tracking-widest text-3xl ">GET IN TOUCH</h2>  
              <p className=' tracking-wide font-medium pl-[3.2rem] mt-2  text-gray-600 text-md  '>
                 24/7 we will answer your questions and problems
             </p>
            <form onSubmit={HandleSubmit}>
                <div className="flex">
                <span className="flex flex-col mt-7  ">
                <label className='text-md text-gray-700'>First Name</label>
                <input type='text' name='firstname' className='  bg-gray-100 focus:outline-none w-[15rem]   rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1  ring-inset ring-neutral-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm  sm:leading-6' placeholder='foulen'/> 
                </span>
                <span className="flex flex-col mt-7  m-3 ">
                <label className='text-md text-gray-700'>Last  Name</label>
                <input type='text' name='firstname' className=' bg-gray-100 focus:outline-none w-[15rem]   rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1  ring-inset ring-neutral-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6' placeholder='foulen'/> 
                </span>
                </div>
                <span className="flex flex-col mt-2">
                <label className='text-md text-gray-700'>Email</label>
                <input type='email' name='email' className=' bg-gray-100 focus:outline-none w-[30.8rem]   rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1  ring-inset ring-neutral-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6' placeholder='Enter Email'/>
                </span>
                <span className="flex flex-col mt-4">
                <label className='text-md text-gray-700'>Subject</label>
                <input type='text' name='subject' className=' bg-gray-100 focus:outline-none w-[30.8rem]   rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1  ring-inset ring-neutral-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6' placeholder='Subject'/>
                </span>
                <span className="flex flex-col mt-4">
                <label className='text-md text-gray-700'>Content</label>
                <textarea name='subject' className=' bg-gray-100 focus:outline-none w-[30.8rem]   rounded-md border-0 px-3.5 min-h-[6rem] max-h-[11rem] py-2 text-neutral-900 shadow-sm ring-1  ring-inset ring-neutral-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 ' placeholder='Describe your probleme...'/>
                
                </span>
                <button type="submit" className=' active:scale-[0.99] font-light tracking-wide text-white bg-emerald-500 rounded-xl   p-2 w-[30.8rem] mt-[1rem]'>
                 Send
                </button>
            </form>
            </div>
            <div className="flex-1 self-center ">
                <img src={va} className="" alt="virtual assistant" />
            </div>
        </div>
     );
}
 
export default Contactus;