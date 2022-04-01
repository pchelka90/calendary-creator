import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='header scrolheader'>
      <nav className='nav bd-container'>
        <div
          className='nav__logo'
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          <Link to='home' className='nav__logo'>
            <img
              src='/assets/images/ao_ukraina.svg'
              alt='Art Open agencja reklamowa'
              style={{ transform: 'scale(1.3)' }}
            />
          </Link>
        </div>
        <div
          className='nav__menu nav__list nav__item'
          style={{ top: !toggle ? '' : '10%' }}
        >
          <Link
            className='nav__link active-link'
            to='kreator'
            smooth={true}
            duration={300}
            exact='true'
            offset={-65}
            spy={true}
          >
            Kreator
          </Link>
          <Link
            className='nav__link active-link'
            to='kontakt'
            smooth={true}
            duration={300}
            exact='true'
            offset={-65}
            spy={true}
          >
            Zamów
          </Link>
          <Link
            className='nav__link active-link'
            to='kalendarze'
            smooth={true}
            duration={300}
            exact='true'
            offset={-65}
            spy={true}
          >
            Realizacje
          </Link>
          <Link
            className='nav__link active-link'
            to='services'
            smooth={true}
            duration={300}
            exact='true'
            offset={-65}
            spy={true}
          >
            Oferta
          </Link>
          <Link
            className='nav__link active-link'
            to='formularz_kontaktowy'
            smooth={true}
            duration={300}
            exact='true'
            offset={-65}
            spy={true}
          >
            Kontakt
          </Link>
        </div>
        <div className='nav__toggle' id='nav-toggle'>
          {!toggle ? (
            <div onClick={() => setToggle(true)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          ) : (
            <div onClick={() => setToggle(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
