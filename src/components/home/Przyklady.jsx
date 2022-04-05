import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from '../utilities/Photos';

/* popout the browser and maximize to see more rows! -> */
const Przyklady = () => {
  return (
    <div className='przyklady' id='kalendarze'>
      <Gallery className='przyklady' photos={photos} />
      <div className='columns more_projects'>
        <div className='column'>
          <h1 className='projectsH1'>
            Zobacz więcej
            <br />
            <strong>naszych projektów</strong>
          </h1>
        </div>
        <p className='control'>
          <a
            href='https://artopen.pl/portfolio/'
            className='button is-warning tooltip'
            target='_blank'
          >
            PORTFOLIO {'>'}
            <span className='tooltiptextdown'>Odwiedź portfolio Art-Open.</span>
          </a>
        </p>
      </div>
    </div>
  );
};
export default Przyklady;
