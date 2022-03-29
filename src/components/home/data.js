import { GoogleApiWrapper } from 'google-maps-react';
import React, { lazy, Suspense } from 'react';
import { Link, animateScroll } from 'react-scroll';
export const links = [
  {
    id: 1,
    url: 'Kreator',
    text: 'kreator',
  },
  {
    id: 'kontaktform',
    url: '/kontaktform',
    text: 'zamow',
  },
  {
    id: 3,
    url: '/projects',
    text: 'kalendarze',
  },
  {
    id: 4,
    url: (
      <Link
        className='nav__link active-link'
        to='services'
        smooth={true}
        duration={300}
        exact='true'
        offset={-65}
        spy={true}
      >
        Dowiedz się
      </Link>
    ),
    text: 'dowiedz się',
  },
  {
    id: 5,
    url: '/kontakt',
    text: 'kontakt',
  },
];
