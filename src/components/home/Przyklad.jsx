import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);

const Przyklad = () => {
  const reviewData = [
    {
      image:
        'assets/kalendarze_przykladowe/dodatki_barwione_brzegi_942-100x100.jpg',
      name: 'Barwione brzegi',
      profession: 'możliwość barwienia brzegów bloku kalendarza lub notesu',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_krysztal_779-100x100.jpg',
      name: 'Kryształ Svarovski',
      profession: 'przyklejany do oprawy',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_m1_859-100x100.jpg',
      name: 'M1',
      profession: 'blaszka szczotkowane aluminium pod grawer',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_m2_288-100x100.jpg',
      name: 'M2',
      profession:
        'blaszka szczotkowane aluminium pod grawer z tłoczonym rokiem',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_m3_105-100x100.jpg',
      name: 'M3',
      profession: 'rok finochromowy przyklejany do oprawy',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_m4_724-100x100.jpg',
      name: 'M4',
      profession: 'rok finochromowy przyklejany do oprawy',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_m11_563-100x100.jpg',
      name: 'M11',
      profession:
        'zapinka metalowa (srebrna matowa) mocowana na nit z metalowym zawiasem zamykanym na magnes ',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_m14_116-100x100.jpg',
      name: 'M14',
      profession:
        'blaszka kwadratowa (srebrna błysk) mocowana do okładki z gumką 2 mm',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_m15_967-100x100.jpg',
      name: 'M15',
      profession:
        'blaszka prostokątna (srebrna matowa) mocowana na gumce 10 mm',
    },
    {
      image:
        'assets/kalendarze_przykladowe/dodatki_patka-magnes_660-100x100.jpg',
      name: 'Patka na magnes',
      profession:
        'zamykana na magnes z miejscem na długopis magnes ukryty w oprawie',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_pendrive_112-100x100.jpg',
      name: 'Pendrive 16GB',
      profession: 'wymiar  | 34 x 11 mm, pole graweru  | 28 x 8 mm',
    },
    {
      image:
        'assets/kalendarze_przykladowe/dodatki_personalizacja-grawer_777-100x100.jpg',
      name: 'Personalizacja grawerowana',
      profession: 'personalizacja wg projektu ',
    },
    {
      image:
        'assets/kalendarze_przykladowe/dodatki_personalizacja-tloczenie_186-100x100.jpg',
      name: 'Personalizacja tłoczona',
      profession: '',
    },
    {
      image:
        'assets/kalendarze_przykladowe/dodatki_prostokatna-kieszonka_923-100x100.jpg',
      name: 'Prostokątna kieszeń',
      profession: 'Kieszeń wykonana z folii ',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_rok_tloczony.jpg',
      name: 'Rok tłoczony',
      profession: 'aktualna data wytłoczona na okładce',
    },
    {
      image: 'assets/kalendarze_przykladowe/dodatki_uchwyt_959-100x100.jpg',
      name: 'Uchwyt na długopis',
      profession: 'uchwyt wykonany z ecoskóry ',
    },
  ];

  // media query
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener('resize', handleResize);

  const swiperSlide = reviewData.map((item) => (
    <SwiperSlide>
      <div data-aos='fade-up' class='review__slide__container'>
        <div class='review__user__info__container'>
          <div class='review__user__info'>
            <img src={item.image} alt='przykładowe kalendarze' />
            <h3> {item.name} </h3>
            <p> {item.profession} </p>
          </div>
        </div>
        <p> {item.feedback} </p>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className='review__main__container' id='kalendarze'>
      <div className='title'>
        <h2>Przykładowe kalendarze</h2>
        <p></p>
      </div>
      <Swiper
        slidesPerView={windowWidth <= 720 ? 1 : 5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        className='conta>
>
      </Swiper>
      <div className='portfolio_link'>
        <h6 className='submenu-item' style={{ fontSize: '13px' }}>
          <b>Oferta</b>
        </h6>
        <a
          href='https://artopen.pl/oferta/'
          target='_blank'
          className='button-green tooltip'
        >
          {' '}
          nasze portfolio
          <span className='tooltiptextup'>
            Po kliknięciu zostaną Państwo przekierowani do podstrony
            zawierającej usługi z naszej oferty. Zapraszamy do wysłania zapytań
            odnośnie interesującej ofery.
          </span>
        </a>
      </div>
    </div>
  );
};

export default Przyklad;
