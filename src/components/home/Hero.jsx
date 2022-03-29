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
      subHeader: 'Zaprojektuj swój własny kalendarz już dziś...',
      header: 'Darmowy kreator kalendarza',
      image: 'assets/images/Kalendarz_przd_ty.png',
    },
    {
      subHeader: 'Zaprojektuj swój własny kalendarz już dziś...',
      header: 'Darmowy kreator kalendarza',
      image: 'assets/images/kalendarz-artopen.png',
    },
    {
      subHeader: 'Zaprojektuj swój własny kalendarz już dziś...',
      header: 'Darmowy kreator kalendarza',
      image: 'assets/images/kreator-kalendarz.jpg',
    },
  ];

  const slider = data.map((item) => (
    <SwiperSlide>
      <div className='container'>
        <div className='columns'>
          <div
            data-aos='fade-right'
            className='column hero__content__container'
          >
            <h1> {item.header} </h1>
            <h2> {item.subHeader} </h2>
            <p> {item.paragraph} </p>
            <button className='button is-primary'>
              <Link
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
                to='https://artopen.pl/zamowienie-art-open/'
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
          <div
            data-aos='fade-left'
            className='column hero__slider__img__container'
          >
            <img src={item.image} className='hero__slider__img' alt='slider' />
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className='hero__main__container' id='home'>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className='hero__swiper__container'
      >
        {slider}
      </Swiper>
    </div>
  );
};

export default Hero;
