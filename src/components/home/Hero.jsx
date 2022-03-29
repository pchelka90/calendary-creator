import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import './Kreator';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../../sass/swiper.scss';

SwiperCore.use([EffectFade, Navigation, Pagination]);

const Hero = () => {
  const data = [
    {
      image: 'assets/images/Kalendarz_przd_ty.png',
    },
    {
      image: 'assets/images/kalendarz-artopen.png',
    },
    {
      image: 'assets/images/kreator-kalendarz.jpg',
    },
  ];

  const slider = data.map((item) => (
    <SwiperSlide>
      <div
        data-aos='fade-right'
        className='class="swiper-container mySwiper swiper-container-coverflow swiper-container-3d swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events'
      >
        <img className='swiper-slide img' src={item.image} alt='slider' />
      </div>
    </SwiperSlide>
  ));

  return (
    <section className='home' id='home'>
      <div className='home__container bd-container bd-grid'>
        <div data-aos='fade-left' className='home_data'>
          <h1> Darmowy kreator kalendarza </h1>
          <h2> Zaprojektuj swój własny kalendarz już dziś... </h2>
          <br />
          <button className='button is-primary'>
            <Link
              className='nav__link active-link'
              to='kreator'
              smooth={true}
              duration={300}
              exact='true'
              offset={-65}
              spy={true}
            >
              Zaprojektuj kalendarz
            </Link>
          </button>
          <button className='button is-success'>
            <Link
              className='nav__link active-link'
              to='kontakt'
              smooth={true}
              duration={300}
              exact='true'
              offset={-65}
              spy={true}
            >
              Zamów kalendarz
            </Link>
          </button>
        </div>
        <Swiper
          navigation={false}
          pagination={{
            clickable: true,
          }}
          className='swiper-wrapper'
        >
          {slider}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
