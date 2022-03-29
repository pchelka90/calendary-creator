import React from 'react';
import ContactForm from './forms/ContactForm';

function ContactPageTemplate() {
  return (
    <div>
      <div className='formKontakt'>
        <h2>Formularz kontaktowy</h2>
        <h4>Wyślij nam wiadomość!</h4>
      </div>
      <div className='columns' id='formularz_kontaktowy'>
        <div className='column' style={{ lineHeight: '40px' }}>
          <h3 className='subtitle'>
            <b>Biuro obsługi klienta</b>
          </h3>
          <h4 style={{ marginBottom: '30px' }}>
            <img
              width='20px'
              alt='godziny otwarcia'
              src='assets/images/clock.svg'
            />
            pon. - pt: 8:00 - 16:00
          </h4>

          <p>
            <img
              width='20px'
              alt='ulica'
              src='assets/images/map-marker-alt.svg'
            />
            ul. Piotra Ignuta 87
          </p>

          <p>
            <img
              width='20px'
              style={{ verticalAlign: 'middle' }}
              alt='miasto'
              src='assets/images/city.svg'
            />
            54-151 Wrocław
          </p>

          <br />

          <h4 style={{ marginBottom: '20px' }}>
            {' '}
            Kontakt mailowy lub telefoniczny:{' '}
          </h4>
          <div style={{ marginBottom: '20px' }}>
            <a href='mailto:biuro@artopen.pl' className='button-green'>
              <img
                width='20px'
                alt='email'
                src='/assets/images/envelope-alt.svg'
              />
              biuro@artopen.pl
            </a>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <a href='tel:+48 71 728 29 13' className='button-green'>
              <img
                width='20px'
                alt='numer telefonu'
                src='/assets/images/phone.svg'
              />
              Tel: +48 71 728 29 13
            </a>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <a href='tel:+48 535 000 881' className='button-green'>
              <img
                width='20px'
                alt='numer komórkowy'
                src='/assets/images/mobile.svg'
              />
              Kom: +48 535 000 881
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPageTemplate;
