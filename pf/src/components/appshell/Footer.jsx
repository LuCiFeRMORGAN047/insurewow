import React from 'react'
import {BiShieldPlus} from 'react-icons/bi'
const Footer = () => {
  return (
    <div className='  text-black bg-gradient-to-tr from-green-800 to-green-500 h-[25rem] -mt-[3rem]'>
      <div className=' text-4xl   pt-[8rem] pl-[10rem]  text-white font-semibold  flex cursor-pointer   '>
        <BiShieldPlus   size={45}/>
        <span>
        Insurewow
        </span>
        
      </div>
      <div className='pl-10 mt-8 flex justify-evenly'>
        <div className=' flex flex-col'>
              <h1 className=' text-zinc-700 font-medium  text-lg  '>
                Get Connected
              </h1>
              <ul className='flex flex-col  text-neutral-900'>
                <li>
                About Us


                </li>
                <li>
                Contact Us

                </li>
                <li>
                Privacy Policy

                </li>
                <li>
                Terms and Conditions

                </li>
                <li>
                Careers

                </li>
              </ul>
        </div>
        <div className=' flex flex-col'>
              <h1 className=' text-zinc-700 font-medium  text-lg  '>
                Costumers
              </h1>
              <ul className='flex flex-col  text-neutral-900'>
                <li>
                Blog



                </li>
                <li>
                Claims


                </li>
                <li>
                Customer Service


                </li>
                <li>
                FAQs


                </li>
                <li>
                Insurance Glossary


                </li>
              </ul>
        </div>
        <div className=' flex flex-col'>
              <h1 className=' text-zinc-700 font-medium  text-lg  '>
                More
              </h1>
              <ul className='flex flex-col  text-neutral-900'>
                <li>
                Testimonials


                </li>
                <li>
                News and Media



                </li>
                <li>
                Partnerships

                </li>
                <li>
                Agent Locator


                </li>
                <li>
                Social Media

                </li>
              </ul>
        </div>
        <div className=' flex flex-col'>
              <h1 className=' text-zinc-700 font-medium  text-lg  '>
                Social Media
              </h1>
              <ul className='flex flex-col  text-neutral-900'>
                <li>
                Facebook


                </li>
                <li>
               Twitter

                </li>
                <li>
                Github

                </li>
                <li>
                instagram

                </li>
                <li>
                snapchat

                </li>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer