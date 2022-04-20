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
        style={{ top: !toggle ? '' : '15%' }}
      >
        <Link
          className='navbar-item nav__link active-link'
          to='kreator'
          smooth={true}
          duration={300}
          exact='true'
          offset={-65}
          spy={true}
          style={{ paddingTop: '50px' }}
        >
          Kreator
        </Link>
        <Link
          className='navbar-item nav__link active-link'
          to='contact'
          smooth={true}
          duration={300}
          exact='true'
          offset={-65}
          spy={true}
        >
          Zamów
        </Link>
        <Link
          className='navbar-item nav__link active-link'
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
          className='navbar-item nav__link active-link'
          to='oferta'
          smooth={true}
          duration={300}
          exact='true'
          offset={-65}
          spy={true}
        >
          Oferta
        </Link>
        <Link
          className='navbar-item nav__link active-link'
          to='kontaktowe'
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
          <div onClick={() => setToggle(true)}></div>
        ) : (
          <div onClick={() => setToggle(false)}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
