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
<<<<<<< HEAD
        <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
          <img style={{ width: '33.33%' }} src='/assets/images/Cargounit.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Cermont.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Chemeko.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
          <img
            style={{ width: '33.33%' }}
            src='/assets/images/De_Dietrich.jpg'
          />
          <img style={{ width: '33.33%' }} src='/assets/images/Eltur.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Fortum.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
          <img style={{ width: '33.33%' }} src='/assets/images/Jaxan.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/KACEHAEM.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Marshall.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
          <img style={{ width: '33.33%' }} src='/assets/images/MPL.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Pebeka.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Pgnig.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
          <img style={{ width: '33.33%' }} src='/assets/images/Prodigo.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Rexer.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Viener.jpg' />
        </SwiperSlide>
        <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
          <img style={{ width: '33.33%' }} src='/assets/images/Voss.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Zameh.jpg' />
          <img style={{ width: '33.33%' }} src='/assets/images/Cermont.jpg' />
=======
        <SwiperSlide className='slajdy' style={{display:'flex'}}>
          <img style={{width:'33.33%'}} src='/assets/images/Cargounit.jpg' />
          <img style={{width:'33.33%'}} src='/assets/images/Cermont.jpg' />
          <img style={{width:'33.33%'}} src='/assets/images/Chemeko.jpg' />
>>>>>>> ea2cfef328dc2f0dd840ca8d0b07b71ccee9741e
        </SwiperSlide>

      </Swiper>
    </>
  );
}
