import React from 'react';
import Helmet from 'react-helmet';


function SuccessPage() {
  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex,nofollow" />
    </Helmet>
      <section className='hero is-dark is-bold is-large'>
        <div className='hero-body has-text-centered'>
          <img
            loading='lazy'
            src='/assets/images/newsletter.svg'
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
            src='/assets/images/check.svg'
          />
          <br />
          <h1 className='title' style={{marginLeft:'0px'}} >Wiadomość została wysłana.</h1>
          <br />
          <h2 className='subtitle' style={{textAlign:'center'}}>Nasz zespół niedługo się z Państwem skontaktuje.</h2>
          <br />
          <div style={{display:'flex',justifyContent:'center'}}>
          <a className='button btn is-primary' style={{maxWidth:'350px', border:'1px solid white',borderRadius:'10px'}} href='/'>
            wróć na stronę główną
          </a>
          </div>
          <br />
        </div>
      </section>
    </>
  );
}

export default SuccessPage;
