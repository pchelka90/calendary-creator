import React from 'react';
import KreatorCard from './KreatorCard';

const Kreator = () => {
  <KreatorCard />;

  return (
    <div data-aos='zoom-in' className='container' id='kreator'>
      <div className='container' style={{ textAlign: 'center' }}>
        <div className='title'>
          <h2>Kreator kalendarza</h2>
        </div>
        <div className='row g-5'>{<KreatorCard />}</div>
      </div>
    </div>
  );
};

export default Kreator;
