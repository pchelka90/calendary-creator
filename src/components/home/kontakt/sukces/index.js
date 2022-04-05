import React from 'react';
import Layout from '../../components/Layout';

const SuccessPage = () => {
  return (
    <Layout>
      <section className='hero is-primary is-bold is-large'>
        <div className='hero-body has-text-centered'>
          <img
            loading='lazy'
            src='/img/newsletter.svg'
            style={{ width: '150px', marginTop: '20px', marginBottom: '30px' }}
            alt='newsletter'
          />
          <br />
          <br />
          <img
            width='50px'
            style={{
              verticalAlign: 'middle',
              filter: 'invert(1)',
              marginTop: '-50px',
              marginBottom: '15px',
            }}
            alt='check'
            src='/img/check.svg'
          />
          <h1 className='title'>Wiadomość została wysłana.</h1>
          <br />
          <a className='button-white' href='/'>
            {' '}
            wróć na stronę główną{' '}
          </a>
          <br />
        </div>
      </section>
    </Layout>
  );
};

export default SuccessPage;
