import React from 'react';

function Contact() {
  return (
    <div>
      <div className='kontakt' id='kontaktowe'>
        <div style={{ lineHeight: '40px', textAlign: 'left' }}>
          <h3 className='subtitle'>
            <b>Biuro obsługi klienta</b>
          </h3>
          <h4 style={{ marginBottom: '30px', textAlign: 'left' }}>
            <img
              className='kontaktowe'
              alt='godziny otwarcia'
              src='/assets/images/clock.svg'
            />
            pon. - pt: 8:00 - 16:00
          </h4>

          <p>
            <img
              className='kontaktowe'
              alt='ulica'
              src='/assets/images/map-marker-alt.svg'
            />
            ul. Piotra Ignuta 87
          </p>

          <p>
            <img
              className='kontaktowe'
              style={{ verticalAlign: 'middle' }}
              alt='miasto'
              src='/assets/images/city.svg'
            />
            54-151 Wrocław
          </p>

          <br />

          <h4
            style={{
              marginBottom: '20px',
            }}
          >
            {' '}
            Kontakt mailowy lub telefoniczny:{' '}
          </h4>
          <div style={{ marginBottom: '20px' }}>
            <a href='mailto:biuro@artopen.pl' className='button-green'>
              <img
                className='kontaktowe'
                alt='email'
                src='/assets/images/envelope-alt.svg'
              />
              biuro@artopen.pl
            </a>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <a href='tel:+48 71 728 29 13' className='button-green'>
              <img
                className='kontaktowe'
                alt='numer telefonu'
                src='/assets/images/phone.svg'
              />
              Tel: +48 71 728 29 13
            </a>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <a href='tel:+48 535 000 881' className='button-green'>
              <img
                className='kontaktowe'
                alt='numer komórkowy'
                src='/assets/images/mobile.svg'
              />
              Kom: +48 535 000 881
            </a>
          </div>
        </div>
        <div className='obrazek'>
          <img
            className='kontaktowy'
            src='/assets/images/kontakt-center.svg'
            alt='obrazek kontaktowy'
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
