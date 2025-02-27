import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import Image from 'next/image';
import tailwindConfig from "../../tailwind.config";

import 'swiper/css';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { useRef } from 'react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper/modules";

export default function BannerSlider(){

    

            const prevRef = useRef(null);
            const nextRef = useRef(null);
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    onInit={(swiper) => {
        
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    className="w-full"
  >
<button
        ref={prevRef}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white text-white p-3 rounded-full hover:bg-gray-600 transition"
      >
        <FaChevronLeft size={24} className='bg-white text-white' />
      </button>

      <button
        ref={nextRef}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white text-white p-3 rounded-full hover:bg-gray-600 transition"
      >
        <FaChevronRight size={24} className='bg-white text-white'/>
      </button>    
    <SwiperSlide>
      <section className="relative w-full h-[500px] flex items-center justify-center text-white bg-cover bg-center sm:items-center " style={{ backgroundImage: "url('/background.jpeg')" }}>
   
      <div className="absolute inset-0 bg-black opacity-20"></div>

   
      <div className="relative text-center max-w-[1400px] mx-auto p-2">
      
        <h1 className="font-bold sm:text-[32px] text-[24px]">Welcome to Our Website</h1>
        
        
      
        
      </div>
    </section>
    </SwiperSlide>
    <SwiperSlide>
   

    <section className="relative w-full h-[500px] flex items-center justify-center text-white bg-cover bg-center sm:items-center " style={{ backgroundImage: "url('/background2.jpg')" }}>
   
   <div className="absolute inset-0 bg-black opacity-20"></div>


   <div className="relative text-center max-w-[1400px] mx-auto p-2">
   
   <p className="sm:text-[24px] text-[20px]">Discover our amazing services and products.</p>
     
     
   
     
   </div>
 </section>
      
     
    </SwiperSlide>
    <SwiperSlide> 
<section className="relative w-full h-[500px] flex items-center justify-center text-white bg-cover bg-center sm:items-center " style={{ backgroundImage: "url('/background3.jpg')" }}>
   
   <div className="absolute inset-0 bg-black opacity-20"></div>


   <div className="relative text-center max-w-[1400px] mx-auto p-2">
   
   <span className="sm:text-[24px] text-[20px]">
  Join us and explore endless possibilities!
</span>
     
     
   
     
   </div>
 </section>
</SwiperSlide>

    
    
     
        </Swiper>  

        
  );
};