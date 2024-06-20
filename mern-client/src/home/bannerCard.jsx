// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const BannerCard = () => {
  return (
    <div className='banner '>
        <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-1' ></SwiperSlide>
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-2'></SwiperSlide>
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-3'></SwiperSlide>
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-4'></SwiperSlide>
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-5'></SwiperSlide>
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-6'></SwiperSlide>
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-7'></SwiperSlide>
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-8'></SwiperSlide>
        <SwiperSlide className='bg-center bg-cover h-64 w-64 image-9'></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard