import React from 'react';
import KreatorCard from './KreatorCard';

const Kreator = () => {
  <KreatorCard />;

  return (
    <div data-aos='zoom-in' className='container' id='kreator'>
      <div className='container' style={{ textAlign: 'center' }}>
        <div className='title'>
          <h1 className='kreatorH1'>
            Teraz twoja kolej
            <br />
            <img className='kreatorImage' src='/assets/images/Zarowka.svg' />
            <strong>POKAŻ NA CO CIĘ STAĆ</strong>
          </h1>
          <img className='strzalka' src='/assets/images/strzalka.png' />
          <br />
        </div>
        <div className='row g-5'>{<KreatorCard />}</div>
      </div>
    </div>
  );
};

export default Kreator;
