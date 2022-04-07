import React from 'react';

const Banner = () => {
  return (
    <div className='banner'>
      <h1 className='bannerH1'>Trzy proste kroki</h1>
      <div className='columns'>
        <div className='column'>
          <p className='bannerP'>1</p>
          <h4 className='bannerH4'>
            Skomponuj projekt
            <br /> swojego kalendarza
          </h4>
        </div>
        <div className='column'>
          <p className='bannerP'>2</p>
          <h4 className='bannerH4'>
            Prześlij nam go
            <br /> za pomocą formularza
          </h4>
        </div>
        <div className='column'>
          <p className='bannerP'>3</p>
          <h4 className='bannerH4'>
            Otrzymasz kalendarz
            <br /> z własnym projektem
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
