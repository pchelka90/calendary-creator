import './Kreator';
import { Link, animateScroll } from 'react-scroll';
import React from 'react';
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
          <h1 style={{fontWeight:'600'}}>Kreator Kalendarzy
          </h1>
          <h2 style={{ textAlign: 'left' }}>
            Zaprojektuj swój własny
            <br /> kalendarz za darmo.<br /><sub> Sprawdź nasz kreator kalendarzy!</sub>
          </h2>
          <button className='button is-info'>
            <Link
              to='instrukcja'
              className='hero-item'
              href="#instrukcja"
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
              href="#kreator"
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
          modules={[EffectFade, Navigation, Pagination]}
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          loop={true}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
        >
          <SwiperSlide>
            <img
              src='/assets/images/fortum-desktop.webp'
              alt='firmowy kalendarz firmy Fortum'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/assets/images/magtrans-desktop.webp'
              alt='firmowy kalendarz firmy Magtrans'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/assets/images/Orlen-desktop.webp'
              alt='firmowy kalendarz firmy Orlen'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
