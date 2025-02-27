import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import Image from 'next/image';
import tailwindConfig from "../../tailwind.config";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function BannerSlider(){

    

  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}

    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    autoplay={{
      delay: 1000,
      disableOnInteraction: false,
    }}
    className="w-full"
  >

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