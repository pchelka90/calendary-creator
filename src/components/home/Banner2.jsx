import React from 'react';
import Helmet from 'react-helmet'

const Banner2 = () => {
  return (
    <>
    <Helmet>
    <script type='application/ld+json'>
      {JSON.stringify(faqData)}
    </script>
    </Helmet>
    <div className="container">
    <h2>Często zadawane pytania</h2>


    <div class="card">
      <header class="card-header" onClick={() => showCard(0)}>
        <p class="card-header-title">
          Jak stworzyć kalendarz?
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <img className="icon-card" style={{transform:'rotate(90deg)'}} src="assets/images/angle-right.svg" />
          </span>
        </button>
      </header>
      <div class="card-content" style={{display:'none'}}>
        <div class="content">
          <p>Lorem ipsum dolorum sit amet</p>
        </div>
      </div>
    </div>

    <div class="card">
      <header class="card-header" onClick={() => showCard(1)}>
        <p class="card-header-title">
          Jak spersonalizować kalendarz?
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <img className="icon-card" style={{transform:'rotate(90deg)'}} src="assets/images/angle-right.svg" />
          </span>
        </button>
      </header>
      <div class="card-content" style={{display:'none'}}>
        <div class="content">
          <p>Lorem ipsum dolorum sit amet</p>
        </div>
      </div>
    </div>



    <div class="card">
      <header class="card-header" onClick={() => showCard(2)}>
        <p class="card-header-title">
          Jak wysłać zapytanie?
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <img className="icon-card" style={{transform:'rotate(90deg)'}} src="assets/images/angle-right.svg" />
          </span>
        </button>
      </header>
      <div class="card-content" style={{display:'none'}}>
        <div class="content">
          <p>Lorem ipsum dolorum sit amet</p>
        </div>
      </div>
    </div>

    <div class="card">
      <header class="card-header" onClick={() => showCard(3)}>
        <p class="card-header-title">
          Jak wyeksportować plik?
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <img className="icon-card" style={{transform:'rotate(90deg)'}} src="assets/images/angle-right.svg" />
          </span>
        </button>
      </header>
      <div class="card-content" style={{display:'none'}}>
        <div class="content">
          <p>Lorem ipsum dolorum sit amet</p>
        </div>
      </div>
    </div>


    <div class="card">
      <header class="card-header" onClick={() => showCard(4)}>
        <p class="card-header-title">
          Jaki format wybrać?
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <img className="icon-card" style={{transform:'rotate(90deg)'}} src="assets/images/angle-right.svg" />
          </span>
        </button>
      </header>
      <div class="card-content" style={{display:'none'}}>
        <div class="content">
          <p>Lorem ipsum dolorum sit amet</p>
        </div>
      </div>
    </div>


    </div>

    <br />
    <br />
    <br />

    <div className='banner2'>
      <h1 className='banner2H1'>Zobacz nasze realizacje</h1>
    </div>
    </>
  );
};

export default Banner2;


function showCard(x){

if (document.getElementsByClassName('card-content')[x].style.display == 'none'){
document.getElementsByClassName('card-content')[x].style.display = 'block'
} else {
  document.getElementsByClassName('card-content')[x].style.display = 'none'
}

if (document.getElementsByClassName('icon-card')[x].style.transform == 'rotate(90deg)'){
document.getElementsByClassName('icon-card')[x].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName('icon-card')[x].style.transform = 'rotate(90deg)'
}

}



const faqData =  {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is the return policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "<p>Most unopened items in new condition and returned within <b>90 days</b> will receive a refund or exchange. Some items have a modified return policy noted on the receipt or packing slip. Items that are opened or damaged or do not have a receipt may be denied a refund or exchange. Items purchased online or in-store may be returned to any store.</p><p>Online purchases may be returned via a major parcel carrier. <a href=http://example.com/returns> Click here </a> to initiate a return.</p>"
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to process a refund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We will reimburse you for returned items in the same way you paid for them. For example, any amounts deducted from a gift card will be credited back to a gift card. For returns by mail, once we receive your return, we will process it within 4–5 business days. It may take up to 7 days after we process the return to reflect in your account, depending on your financial institution's processing time."
        }
      }, {
        "@type": "Question",
        "name": "What is the policy for late/non-delivery of items ordered online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "<p>Our local teams work diligently to make sure that your order arrives on time, within our normaldelivery hours of 9AM to 8PM in the recipient's time zone. During  busy holiday periods like Christmas, Valentine's and Mother's Day, we may extend our delivery hours before 9AM and after 8PM to ensure that all gifts are delivered on time. If for any reason your gift does not arrive on time, our dedicated Customer Service agents will do everything they can to help successfully resolve your issue.</p><p><a href=https://example.com/orders/>Click here</a> to complete the form with your order-related question(s).</p>"
        }
      }, {
        "@type": "Question",
        "name": "When will my credit card be charged?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We'll attempt to securely charge your credit card at the point of purchase online. If there's a problem, you'll be notified on the spot and prompted to use another card. Once we receive verification of sufficient funds, your payment will be completed and transferred securely to us. Your account will be charged in 24 to 48 hours."
        }
      }, {
        "@type": "Question",
        "name": "Will I be charged sales tax for online orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":"Local and State sales tax will be collected if your recipient's mailing address is in: <ul><li>Arizona</li><li>California</li><li>Colorado</li></ul>"}
        }]
    }
