import React from 'react';
import KreatorCard from './KreatorCard';

const Kreator = () => {
  <KreatorCard />;

  return (
    <div data-aos='zoom-in' id='kreator'>
      <div className='title'>
        <h1 className='kreatorH1'>
          Teraz twoja kolej
          <img className='kreatorImage' src='/assets/images/Zarowka.svg' />
          <br />
          <strong>POKAŻ NA CO CIĘ STAĆ</strong>
        </h1>
        <img className='strzalka' src='/assets/images/strzalka.png' />
        <br />
      </div>
      <div className='kreator-card'>{<KreatorCard />}</div>
    </div>
  );
};

export default Kreator;
