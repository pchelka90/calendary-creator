import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

export default function Przyklady() {
  return (
    <>
      <Swiper
        className='przyklady'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className='slajdy'>
          <img src='/assets/Cargounit.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/Cermont.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/Chemeko.jpg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
