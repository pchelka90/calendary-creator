import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer
        className='footer'
        style={{
          alignItems: 'bottom',
          paddingBottom: '30px',
          paddingLeft: '10%',
          paddingRight: '10%',
          height: '150%',
        }}
      >
        <div>
          <div
            className='kontakt columns'
            id='kontaktowe'
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <div
              style={{ lineHeight: '40px', textAlign: 'left' }}
              className='column'
            >
              <h2
                style={{
                  textAlign: 'left',
                  fontWeight: '800',
                  marginBottom: '100px',
                }}
              >
                Kontakt
              </h2>
              <p style={{ marginBottom: '30px', textAlign: 'left' }}>
                <img
                  loading='lazy'
                  className='kontaktowe'
                  alt='godziny otwarcia'
                  src='/assets/images/clock.svg'
                  style={{ width: '30px' }}
                />
                Pon. - Czw.: 8:00 - 16:30
                <br />
                <span style={{ marginLeft: '30px' }}>Pt.: 8:00 - 14:00</span>
              </p>

              <p>
                <img
                  loading='lazy'
                  className='kontaktowe'
                  alt='ulica'
                  src='/assets/images/map-marker-alt.svg'
                  style={{ width: '30px' }}
                />
                ul. Piotra Ignuta 87
              </p>

              <p>
                <img
                  loading='lazy'
                  className='kontaktowe'
                  alt='miasto'
                  src='/assets/images/city.svg'
                  style={{ width: '30px', verticalAlign: 'middle' }}
                />
                54-151 Wrocław
              </p>

              <div style={{ marginBottom: '20px', width: '126%' }}>
                <a
                  href='mailto:biuro@artopen.pl'
                  className='link-green'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white' }}
                >
                  <img
                    loading='lazy'
                    className='kontaktowe'
                    alt='email'
                    src='/assets/images/envelope-alt.svg'
                    style={{ width: '30px' }}
                  />
                  biuro@artopen.pl
                </a>
              </div>

              <div style={{ marginBottom: '20px', width: '126%' }}>
                <a
                  href='tel:+48 71 728 29 13'
                  className='link-green'
                  style={{ color: 'white' }}
                >
                  <img
                    loading='lazy'
                    className='kontaktowe'
                    alt='numer telefonu'
                    src='/assets/images/phone.svg'
                    style={{ width: '30px' }}
                  />
                  Tel: +48 71 728 29 13
                </a>
              </div>

              <div style={{ marginBottom: '20px', width: '126%' }}>
                <a
                  href='tel:+48 535 000 881'
                  className='link-green'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'white' }}
                >
                  <img
                    loading='lazy'
                    className='kontaktowe'
                    alt='numer komórkowy'
                    src='/assets/images/mobile.svg'
                    style={{ width: '30px' }}
                  />
                  Kom: +48 535 000 881
                </a>
              </div>
            </div>
            <div className='obrazek column' style={{ textAlign: 'center' }}>
              <img
                loading='lazy'
                src='/assets/images/kontakt-center.svg'
                alt='obrazek kontaktowy'
                style={{ maxWidth: '200px' }}
              />
              <br />
              <br />
              <p style={{ fontSize: '13px' }}>
                <b>Zostaw nam opinię</b>
              </p>
              <a
                href='https://g.page/artopenreklama/review?rc'
                target='_blank'
                rel='noopener noreferrer'
                className='link-green tooltip'
                style={{ color: 'white' }}
              >
                {' '}
                <img
                  loading='lazy'
                  className='kontaktowe btn'
                  alt='adres'
                  src='/assets/images/address-card.svg'
                  style={{ width: '30px' }}
                />
                opinie Google
                <span className='tooltiptextup'>
                  Napisz opinię o naszej firmie w serwisie Google.
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className='has-text-centered'>
          <a
            rel='noopener noreferrer'
            href='https://facebook.com/artopenstudioreklamy/'
            target='_blank'
          >
            <img
              loading='lazy'
              className='icon-sociale'
              alt='facebook'
              src='/assets/images/facebook-square.svg'
            />
          </a>
          <a
            rel='noopener noreferrer'
            href='https://www.youtube.com/channel/UCR45VIn9iEmnQo7JU_FL2uQ/'
            target='_blank'
          >
            <img
              loading='lazy'
              className='icon-sociale'
              alt='youtube'
              src='/assets/images/youtube-square.svg'
            />
          </a>
          <a
            rel='noopener noreferrer'
            href='https://www.linkedin.com/company/art-open-studio-reklamy/'
            target='_blank'
          >
            <img
              loading='lazy'
              className='icon-sociale'
              alt='linkedin'
              src='/assets/images/linkedin.svg'
            />
          </a>
          <a
            rel='noopener noreferrer'
            href='https://twitter.com/AReklamy/'
            target='_blank'
          >
            <img
              loading='lazy'
              className='icon-sociale'
              alt='tweeter'
              src='/assets/images/twitter-square.svg'
            />
          </a>
          <a
            rel='noopener noreferrer'
            href='https://www.instagram.com/artopen.pl/'
            target='_blank'
          >
            <img
              loading='lazy'
              className='icon-sociale'
              alt='instagram'
              src='/assets/images/instagram-square.svg'
            />
          </a>
          <a
            rel='noopener noreferrer'
            href='https://www.behance.net/ArtOpenStudioReklamy/'
            target='_blank'
          >
            <img
              loading='lazy'
              className='icon-sociale'
              alt='behance'
              src='/assets/images/behance-square.svg'
            />
          </a>

          <br />
          <br />
          <p style={{ color: 'white', fontSize: '12px' }}>
            <a
              className='link-green'
              style={{ color: 'white' }}
              href='https://artopen.pl'
              target='_blank'
              rel='noopener noreferrer'
            >
              {new Date().getFullYear()} © Art Open
            </a>{' '}
            |{' '}
            <a
              className='link-green'
              style={{ color: 'white' }}
              href='https://artopen.pl/polityka-prywatnosci/'
            >
              {' '}
              Polityka prywatności{' '}
            </a>
            |{' '}
            <a
              className='link-green'
              style={{ color: 'white' }}
              href='https://artopen.pl/polityka-prywatnosci/#cookies'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Pliki Cookies{' '}
            </a>
            |{' '}
            <a
              className='link-green'
              target='_blank'
              href='https://artopen.pl/sitemap.xml/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'white' }}
            >
              {' '}
              Mapa strony{' '}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
