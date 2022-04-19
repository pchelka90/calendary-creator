import React from 'react';
import { photos } from '../utilities/Photos';

/* popout the browser and maximize to see more rows! -> */
const Przyklady = () => {
  return (
    <>
    <div>
      <br />
      <div className='przyklady' id='kalendarze'>

        <div className='more_projects'>
          <h2 className='projectsH1'>
            Zobacz więcej
            <br />
            <strong>naszych projektów</strong>
          </h2>
          <div className='control'>
            <a
              href='https://artopen.pl/portfolio/'
              className='button is-warning tooltip'
              target='_blank'
            >
              PORTFOLIO {'>'}
              <span className='tooltiptextdown'>
                Odwiedź portfolio Art-Open.
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Przyklady;
