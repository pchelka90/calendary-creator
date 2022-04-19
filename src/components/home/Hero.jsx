import './Kreator';
import { Link, animateScroll } from 'react-scroll';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper';

export default function App() {
  return (
    <>
      <div className='swiper-container'>
        <div className='projektuj'>
          <h1>Darmowy Kreator Kalendarzy</h1>
          <h2>
            Zaprojektuj swój własny
            <br /> kalendarz już dziś
          </h2>
          <button className='button is-info'>
            <Link
              to='instrukcja'
              className='hero-item'
              onClick={() => {
                animateScroll.scrollToTop();
              }}
            >
              Instrukcja
            </Link>
          </button>
          <button className='button is-success'>
            <Link
              to='kreator'
              className='hero-item'
              onClick={() => {
                animateScroll.scrollToTop();
              }}
            >
              Kreator
            </Link>
          </button>
        </div>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src='/assets/images/fortum-desktop.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/assets/images/magtrans-desktop.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/assets/images/Orlen-desktop.jpg' />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
