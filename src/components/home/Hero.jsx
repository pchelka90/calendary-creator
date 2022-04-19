import './Kreator';
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
          <div className='projektuj'>
            <h1>Darmowy Kreator Kalendarzy</h1>
            <h2>Zaprojektuj swój własny kalendarz już dziś</h2>
            <button className='button is-info'>Instrukcja</button>
            <button className='button is-success'>Kreator</button>
          </div>
          <img src='/assets/images/Fortum.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='projektuj'>
            <h1>Darmowy Kreator Kalendarzy</h1>
            <h2>Zaprojektuj swój własny kalendarz już dziś</h2>
            <button className='button is-info'>Instrukcja</button>
            <button className='button is-success'>Kreator</button>
          </div>
          <img src='/assets/images/Magtrans.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='projektuj'>
            <h1>Darmowy Kreator Kalendarzy</h1>
            <h2>Zaprojektuj swój własny kalendarz już dziś</h2>
            <button className='button is-info'>Instrukcja</button>
            <button className='button is-success'>Kreator</button>
          </div>
          <img src='/assets/images/Orlen.jpg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
