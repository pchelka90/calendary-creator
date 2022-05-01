import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper';

export default function Przyklady() {
  return (
    <>
      <div id='kalendarze'>
        <Swiper
          className='przyklady'
          grabCursor={true}
          loop={true}
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
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Cargounit.webp'
              alt='firmowy kalendarz firmy Cargounit'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Cermont.webp'
              alt='firmowy kalendarz firmy Cermont'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Chemeko.webp'
              alt='firmowy kalendarz firmy Chemeko'
            />
          </SwiperSlide>
          <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/De_Dietrich.webp'
              alt='firmowy kalendarz firmy De Dietrich'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Eltur.webp'
              alt='firmowy kalendarz firmy Eltur'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Fortum.webp'
              alt='firmowy kalendarz firmy Fortum'
            />
          </SwiperSlide>
          <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Jaxan.webp'
              alt='firmowy kalendarz firmy Jaxan'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/KACEHAEM.webp'
              alt='firmowy kalendarz firmy KACEHAEM'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Marshall.webp'
              alt='firmowy kalendarz firmy Marshall'
            />
          </SwiperSlide>
          <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/MPL.webp'
              alt='firmowy kalendarz firmy MPL'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Pebeka.webp'
              alt='firmowy kalendarz firmy Pebeka'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Pgnig.webp'
              alt='firmowy kalendarz firmy Pgnig'
            />
          </SwiperSlide>
          <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Prodigo.webp'
              alt='firmowy kalendarz firmy Prodigo'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Rexer.webp'
              alt='firmowy kalendarz firmy Rexer'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Viener.webp'
              alt='firmowy kalendarz firmy Viener'
            />
          </SwiperSlide>
          <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Voss.webp'
              alt='firmowy kalendarz firmy Voss'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Zameh.webp'
              alt='firmowy kalendarz firmy Zameh'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Cermont.webp'
              alt='firmowy kalendarz firmy Cermont'
            />
          </SwiperSlide>
          <SwiperSlide className='slajdy' style={{ display: 'flex' }}>
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Chemeko.webp'
              alt='firmowy kalendarz firmy Chemeko'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Cermont.webp'
              alt='firmowy kalendarz firmy Cermont'
            />
            <img
              loading='lazy'
              style={{ width: '39.9rem' }}
              src='/assets/images/Cargounit.webp'
              alt='firmowy kalendarz firmy Cargounit'
            />
          </SwiperSlide>
        </Swiper>
        <div className='more_projects'>
          <h2 className='projectsH1'>
            Zobacz więcej
            <br />
            <strong>naszych projektów</strong>
          </h2>
          <div className='control'>
            <a
              href='https://artopen.pl/portfolio/'
              className='button is-warning tooltip'
              rel='noopener noreferrer'
              target='_blank'
            >
              PORTFOLIO {'>'}
              <span className='tooltiptextdown'>
                Odwiedź portfolio Art-Open.
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
