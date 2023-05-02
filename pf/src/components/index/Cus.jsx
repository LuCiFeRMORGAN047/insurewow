import React from 'react'

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import data from '../../consts.json'
// Import Swiper styles
import 'swiper/css';



const Cus = () => {
    SwiperCore.use([Autoplay]);
  return (
    <div className='text-center h-[30rem] mt-[5rem] '>
                <h1 className='text-6xl bg-gradient-to-r font-semibold  from-green-500 to-green-700  h-[4.5rem] bg-clip-text text-transparent'>What Customers Think About Us</h1>
                <Swiper className=' hover:cursor-pointer mt-7'
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2000, 
        disableOnInteraction: false, 
    }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
   {
    data.map((e,i)=>{
        return <SwiperSlide>
        <section class="text-black">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure class="max-w-screen-md mx-auto">
            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg> 
            <blockquote>
                <p class="text-2xl font-medium text-gray-900 ">"<span>{e.testimonial}</span>"</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 font-medium text-gray-900 ">{e.name}</div>
                    <div class="pl-3 text-sm font-light text-gray-500">{e.occupation}</div>
                </div>
            </figcaption>
        </figure>
    </div>
  </section>
        </SwiperSlide>
    })
   }
    </Swiper>
    </div>
  )
}

export default Cus