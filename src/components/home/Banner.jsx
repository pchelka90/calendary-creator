import React from 'react';
import Helmet from 'react-helmet';

const Banner = () => {
  return (
    <>
      <Helmet>
        <script type='application/ld+json'>{JSON.stringify(howToData)}</script>
      </Helmet>
      <div className='banner'>
        <h2 className='bannerH1'>Trzy proste kroki</h2>
        <div className='columns'>
          <div className='column'>
            <p className='bannerP'>1</p>
            <h2 className='bannerH4'>
              Skomponuj projekt
              <br /> swojego kalendarza
            </h2>
          </div>
          <div className='column'>
            <p className='bannerP'>2</p>
            <h2 className='bannerH4'>
              Prześlij nam go
              <br /> za pomocą formularza
            </h2>
          </div>
          <div className='column'>
            <p className='bannerP'>3</p>
            <h2 className='bannerH4'>
              Otrzymasz kalendarz
              <br /> z własnym projektem
            </h2>
          </div>
        </div>
      </div>
      <div
        id='instrukcja'
        className='columns'
        style={{
          width: '100%',
          padding: '0px',
          marginTop: '-48px',
          alignItems: 'self-start',
        }}
      >
        <div className='column'>
          <figure>
            <img
              src='/assets/images/mockup-kreator.jpg'
              alt='Darmowy kreator kalendarza online'
              title='Darmowy kreator kalendarza online'
            />
            <figcaption style={{ textAlign: 'center' }}>
              Darmowy kreator kalendarza{' '}
            </figcaption>
          </figure>
          <br />
          <h3 style={{ textAlign: 'center' }}>Dostępne formaty:</h3>
          <br />
          <div className='columns' style={{ justifyContent: 'center' }}>
            <ul
              className='column'
              style={{ listStyle: 'disc', marginLeft: '5%' }}
            >
              <li> 501D = Format zbliżony do A4 (200x280mm)</li>
              <li> 502T = format zbliżony do B5 (208x260mm)</li>
              <li> 503D = format zbliżony do A5 (143x203mm)</li>
              <li> 504T = (84x151mm)</li>
              <li> 506D = (110x160mm)</li>
              <li> 507T = (167x240mm)</li>
              <li> 508D = (162x240mm)</li>
              <li> 509T = (149x203mm)</li>
              <li> 510D = (143x203mm)</li>
            </ul>
            <ul
              className='column'
              style={{ listStyle: 'disc', marginLeft: '5%' }}
            >
              <li> 511T = (208x260mm)</li>
              <li> 512T = (167x240mm)</li>
              <li> 514T = (167x240mm)</li>
              <li> 516 = (167x240mm)</li>
              <li> Notes A4</li>
              <li> Notes B5</li>
              <li> Notes A5</li>
              <li> Notes A6</li>
            </ul>
          </div>
        </div>
        <div className='column' style={{ paddingTop: '50px' }}>
          <h2>
            <strong>Jak stworzyć własny kalendarz?</strong>
          </h2>
          <br />
          <h3>
            <span className='green'>1.</span> Ustaw własny{' '}
            <b>rozmiar okładki</b>
          </h3>
          <p>
            Rozmiar kalendarza możesz ustawić wybierając z rozwijanej listy. Po
            prawej stronie znajdziesz legendę z dokładnymi wymiarami dostępnych
            formatów.
          </p>

          <h3>
            <span className='green'>2.</span> Wybierz <b>przeszycia</b>
          </h3>
          <p>
            Po lewej stronie najedź na przeszycia i wybierz interesujący Cię
            wzór okładki kalendarza klikając w niego. Do Twojej dyspozycji
            stworzyliśmy 26 gotowych wzorów.
          </p>

          <h3>
            <span className='green'>3.</span> Wybierz <b>oprawę</b> kalendarza
          </h3>
          <p>
            Aby wybrać interesująca Cię oprawę – złap myszką i przeciągnij na
            kalendarz. Możesz zmienić każdy kolor z wybranego przeszycia na
            okładce łapiąc nowy kolor i przeciągając myszką na okładkę w miejscu
            innego koloru.
          </p>

          <h3>
            <span className='green'>4.</span> Dodaj <b>aktualny rok</b>
          </h3>
          <p>
            Wybierz interesujący Cię wygląd roku i kliknij w niego a pojawi się
            na Twoje okładce. Następnie ustaw go w dowolnym miejscu na okładce
            kalendarza.
          </p>

          <h3>
            <span className='green'>5.</span> Dobierz <b>dodatki</b>
          </h3>
          <p>
            To elementy dodatkowe, stanowiące wyjątkowo ciekawe elementy
            wyróżniające Twój projekt. W przypadku wyboru obszycia kalendarza
            nicią, szlufkę czy gumkę masz do wyboru całą paletę kolorów (górny
            lewy róg konkretnego dodatku). Zmieniaj kolory tak aby pasowały do
            Twojej koncepcji graficznej okładki kalendarza.
          </p>

          <h3>
            <span className='green'>6.</span> Skorzystaj z <b>personalizacji</b>
          </h3>
          <p>
            Jest to możliwość dodania Imienia i Nazwiska na kalendarzu oraz
            dodania logo na wybranej oprawie. Baw się wielkością logotypu i
            personalizacją.
          </p>

          <h3>
            <span className='green'>7.</span> Wyeksportuj <b>plik PDF</b>
          </h3>
          <p>
            Naciśnij przycisk z napisem EKSPORT. Cała oprawa zostanie pobrana i
            zapisana na Twoim komputerze wraz ze wszystkimi opcjami jakie
            stworzyłeś.
          </p>

          <h3>
            <span className='green'>8.</span> <b>Prześlij projekt</b> kalendarza
          </h3>
          <p>
            Prześlij zapytanie za pomocą formularza wpisując swoje IMIE I
            NAZWISKO, adres email, numer telefonu do kontaktu z Tobą i załącz
            pobrany plik PDF ze swojego komputera. Napisz w treści wiadomości
            jaka ilość kalendarzy Cię interesuje i kliknij WYŚLIJ. Teraz
            odpocznij i delektuj się oglądając nasze realizacje a my
            skontaktujemy się z Tobą, podamy ceny i termin realizacji.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Banner;
