import React, { useState } from 'react';
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className='navbar is-fixed-top'
      id='bignav'
      aria-label='main navigation'
    >
      <div className='nav__logo navbar-brand'>
        <Link
          to='home'
          href="#"
          className='navbar-item'
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          <img
            id='logomain'
            width={'100px'}
            src='/assets/images/ao_ukraina.svg'
            alt='Art Open agencja reklamowa'
            style={{ transform: 'scale(1.3)' }}
          />
        </Link>
      </div>
      <div
        className='nav__menu nav__list nav__item'
        style={{ top: !toggle ? '' : '94px' }}
      >
      <Link
        className='navbar-item nav__link active-link'
        to='instrukcja'
        smooth={true}
        duration={300}
        exact='true'
        offset={-155}
        spy={true}
        href="#instrukcja"
      >
        Instrukcja
      </Link>
        <Link
          className='navbar-item nav__link active-link'
          to='kreator'
          smooth={true}
          duration={300}
          exact='true'
          offset={-155}
          spy={true}
          href="#kreator"
        >
          Kreator
        </Link>
        <Link
          className='navbar-item nav__link active-link'
          to='contact'
          smooth={true}
          duration={300}
          exact='true'
          offset={-155}
          spy={true}
          href="#contact"
        >
          Zamów
        </Link>
        <Link
          className='navbar-item nav__link active-link'
          to='kalendarze'
          smooth={true}
          duration={300}
          exact='true'
          offset={-155}
          spy={true}
          href="#kalendarze"
        >
          Realizacje
        </Link>
        <Link
          className='navbar-item nav__link active-link'
          to='oferta'
          smooth={true}
          duration={300}
          exact='true'
          offset={-155}
          spy={true}
          href="#oferta"
        >
          Oferta
        </Link>
        <Link
          className='navbar-item nav__link active-link'
          to='kontaktowe'
          smooth={true}
          duration={300}
          exact='true'
          offset={-155}
          spy={true}
          href="#kontaktowe"
        >
          Kontakt
        </Link>
      </div>
      <div className='nav__toggle' id='nav-toggle'>
        {!toggle ? (
          <div onClick={() => setToggle(true)}>Menu</div>
        ) : (
          <div onClick={() => setToggle(false)}>Menu</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
