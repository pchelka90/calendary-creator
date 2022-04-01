import React from 'react';
import './Kreator';

const Hero = () => {
  return (
    <div className='columns'>
      <div className='column'>
        <div data-aos='fade-right' className='hero__content__container'>
          <img className='heroIMG' src='/assets/images/Napis.svg' />
        </div>
        <h2 className='subheader'>
          Zaprojektuj swój własny kalendarz już dziś...
        </h2>
      </div>
      <div className='column'>
        <div data-aos='fade-left' className='hero__slider__img__container'>
          <img
            src='/assets/images/Kreator.svg'
            className='hero__slider__img'
            alt='obrazek kreatora'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
