import React from 'react';
import KreatorCard from './KreatorCard';

const Kreator = () => {
  <KreatorCard />;

  return (
    <div data-aos='zoom-in' id='kreator' style={{ paddingTop: '50px' }}>
      <div className='title'>
        <h2 className='kreatorH1'>
          Teraz twoja kolej
          <img loading="lazy"
            className='kreatorImage'
            src='/assets/images/Zarowka.svg'
            alt='ikona palącej się żarówki'
          />
          <br />
          <strong>POKAŻ NA CO CIĘ STAĆ</strong>
          <img loading="lazy"
            className='strzalkaImage'
            src='/assets/images/strzalka.png'
            alt='ikona strzałki wskazującej'
          />
        </h2>
        <br />
      </div>
      <div className='kreator-card'>{<KreatorCard />}</div>
    </div>
  );
};

export default Kreator;
