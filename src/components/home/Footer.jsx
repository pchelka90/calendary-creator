import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer
        className='footer'
        style={{ alignItems: 'bottom', paddingBottom: '30px' }}
      >
        <div className='container'>
          <div style={{ textAlign: 'center' }}>
            <Link to='/'>
              <img
                width='200px'
                src='/assets/images/ao_ukraina-w.svg'
                id='logo-footer'
                alt='Agencja reklamowa Art Open'
              />
            </Link>
            <br></br>
          </div>
          <br></br>
          <div className='section columns'>
            <div
              className='column'
              style={{ padding: '20px', marginTop: '30px' }}
            >
              <h5>
                <b>
                  <Link style={{ color: 'white' }} to='/oferta/'>
                    Oferta
                  </Link>
                </b>
              </h5>
              <br />
              <Link className='submenu-item' to='/oferta/covid-19/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='covid-19'
                  src='/assets/images/viruses.svg'
                />
                Covid-19
              </Link>

              <Link className='submenu-item' to='/oferta/ekologia/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='ekologia'
                  src='/assets/images/leaf.svg'
                />
                Ekologia
              </Link>

              <Link className='submenu-item' to='/oferta/branding/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='branding'
                  src='/assets/images/pencil-ruler.svg'
                />
                Branding
              </Link>

              <ul className='fmenu'>
                <Link
                  className='submenu-item'
                  to='/oferta/projektowanie-graficzne/'
                >
                  <img
                    width='10px'
                    className='icon-green'
                    alt='branding'
                    src='/assets/images/pencil-alt.svg'
                  />
                  Projektowanie graficzne
                </Link>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/projektowanie-graficzne/logotypy/'
                  >
                    Logotypy
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/projektowanie-graficzne/siw-identyfikacja-wizualna/'
                  >
                    Identyfikacja wizualna
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/projektowanie-graficzne/grafika-wektorowa/'
                  >
                    Grafika wektorowa
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/projektowanie-graficzne/projektowanie-stron-internetowych/'
                  >
                    Projektowanie stron internetowych
                  </Link>
                </li>
              </ul>

              <ul className='fmenu'>
                <Link className='submenu-item' to='/oferta/strony-internetowe/'>
                  <img
                    width='10px'
                    className='icon-green'
                    alt='strony internetowe'
                    src='/assets/images/code.svg'
                  />
                  Strony internetowe
                </Link>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/strony-internetowe/tworzenie-stron-internetowych/'
                  >
                    Tworzenie stron internetowych
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/strony-internetowe/tworzenie-sklepow-internetowych/'
                  >
                    Tworzenie sklepów internetowych
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/strony-internetowe/aplikacje-webowe/'
                  >
                    Aplikacje webowe
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/strony-internetowe/pozycjonowanie-stron-internetowych-seo/'
                  >
                    Pozycjonowanie stron internetowych
                  </Link>
                </li>
              </ul>

              <Link className='submenu-item' to='/oferta/kalendarze-ksiazkowe/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='kalendarze książkowe'
                  src='/assets/images/book.svg'
                />
                Kalendarze książkowe
              </Link>

              <Link className='submenu-item' to='/oferta/kalendarze-firmowe/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='kalendarze firmowe'
                  src='/assets/images/calendar-alt.svg'
                />
                Kalendarze firmowe
              </Link>

              <Link className='submenu-item' to='/oferta/gadzety/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='gadżety'
                  src='/assets/images/lightbulb.svg'
                />
                Gadżety reklamowe
              </Link>
            </div>

            <div
              className='column removespace'
              style={{ padding: '20px', marginTop: '30px', marginRight: '10%' }}
            >
              <br />
              <br />

              <Link className='submenu-item' to='/oferta/wydruki/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='wydruki'
                  src='/assets/images/map.svg'
                />
                Wydruki reklamowe
              </Link>

              <Link className='submenu-item' to='/oferta/reklama-zewnetrzna/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='reklama zewnętrzna'
                  src='/assets/images/object-ungroup.svg'
                />
                Reklamy outdoor
              </Link>

              <Link className='submenu-item' to='/oferta/fotografia/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='fotografia'
                  src='/assets/images/camera-retro.svg'
                />
                Fotografie produktowe
              </Link>

              <Link className='submenu-item' to='/oferta/wystawiennictwo/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='wystawiennictwo'
                  src='/assets/images/cubes.svg'
                />
                Systemy wystawiennicze
              </Link>

              <ul className='fmenu'>
                <Link className='submenu-item' to='/oferta/filmowanie/'>
                  <img
                    width='10px'
                    className='icon-green'
                    alt='filmowanie'
                    src='/assets/images/film.svg'
                  />
                  Filmy reklamowe
                </Link>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/filmowanie/filmy-animowane/'
                  >
                    Filmy animowane
                  </Link>
                </li>
                <li>
                  <Link className='submenu-item' to='/oferta/filmowanie/video/'>
                    Video filmowanie
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/filmowanie/storyboard/'
                  >
                    Storyboard
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/filmowanie/montowanie-filmow/'
                  >
                    Montowanie filmów
                  </Link>
                </li>
              </ul>

              <ul className='fmenu'>
                <Link className='submenu-item' to='/oferta/opakowania/'>
                  <img
                    width='10px'
                    className='icon-green'
                    alt='opakowania'
                    src='/assets/images/box-open.svg'
                  />
                  Opakowania
                </Link>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/opakowania/pudelka-kartonowe/'
                  >
                    Pudełka kartonowe
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/opakowania/pudelka-ozdobne/'
                  >
                    Pudełka ozdobne
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/opakowania/pudelka-do-przechowywania/'
                  >
                    Pudełka do przechowywania
                  </Link>
                </li>
                <li>
                  <Link
                    className='submenu-item'
                    to='/oferta/opakowania/pudelka-na-prezenty/'
                  >
                    Pudełka na prezenty
                  </Link>
                </li>
              </ul>

              <Link className='submenu-item' to='/oferta/vr/'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='VR'
                  src='/assets/images/vr-cardboard.svg'
                />
                Wirtualna rzeczywistość
              </Link>
            </div>

            <div
              className='column'
              style={{ marginRight: '15%', padding: '20px', marginTop: '25px' }}
            >
              <h5>
                <b>
                  <Link style={{ color: 'white' }} to='/kontakt/'>
                    Kontakt
                  </Link>
                </b>
              </h5>
              <br />
              <p className='submenu-item'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='adres'
                  src='/assets/images/map-marker-alt.svg'
                />
                ul. Piotra Ignuta 87
              </p>
              <p className='submenu-item'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='adres'
                  src='/assets/images/city.svg'
                />
                54-151 Wrocław
              </p>
              <br />

              <a
                href='tel:+48 71 728 29 13'
                className='submenu-item'
                style={{ textDecoration: 'underline' }}
              >
                <img
                  width='10px'
                  className='icon-green'
                  alt='telefon'
                  src='/assets/images/phone.svg'
                />
                Tel: +48 71 728 29 13
              </a>

              <a
                href='mailto:bok@artopen.pl'
                className='submenu-item'
                style={{ textDecoration: 'underline' }}
              >
                <img
                  width='10px'
                  className='icon-green'
                  alt='email'
                  src='/assets/images/paper-plane.svg'
                />
                bok@artopen.pl
              </a>

              <br />
              <p className='submenu-item'>
                <img
                  width='10px'
                  className='icon-green'
                  alt='godziny otwarcia'
                  src='/assets/images/clock.svg'
                />
                pon. - pt: 8:00 - 16:00
              </p>
              <br />

              <p className='submenu-item'>NIP: 8943133919</p>

              <p className='submenu-item'>REGON: 381593714</p>

              <p className='submenu-item'>KRS: 0000751913</p>

              <br />
            </div>

            <div className='column' style={{ marginTop: '20px' }}>
              <h5>
                <b>
                  <Link
                    style={{ color: 'white' }}
                    to='https://artopen.pl/kontakt/'
                  >
                    Art Open Sp. z o.o.
                  </Link>
                </b>
              </h5>
              <br />
              <h6 className='submenu-item' style={{ fontSize: '13px' }}>
                <b>Newsletter</b>
              </h6>

              <a
                className='button-green tooltip'
                href='https://artopen.pl/kontakt/'
                target='_blank'
                className='button-green tooltip'
              >
                {' '}
                <img
                  width='10px'
                  className='icon-green'
                  alt='adres'
                  src='/assets/images/address-card.svg'
                />
                zapisz się
                <span className='tooltiptextup'>
                  Po kliknięciu będą mogli Państwo zapisać się do newslettera,
                  dzięki któremu będziecie na bieżąco z nowościami.
                </span>
              </a>
              <br />
              <br />
              <h6 className='submenu-item' style={{ fontSize: '13px' }}>
                <b>Formularz</b>
              </h6>
              <a
                href='/zamowienie-art-open/'
                target='_blank'
                className='button-green tooltip'
              >
                {' '}
                <img
                  width='10px'
                  className='icon-green'
                  alt='adres'
                  src='/assets/images/envelope-alt.svg'
                />
                zamówienie online
                <span className='tooltiptextup'>
                  Po kliknięciu zostaną Państwo przekierowani do podstrony z
                  formularzami zawierającymi usługi z naszej oferty. Zapraszamy
                  do odpowiedzenia na pytania i wysłanie zapytania.
                </span>
              </a>
              <br />
              <br />
              <h6 className='submenu-item' style={{ fontSize: '13px' }}>
                <b>Zostaw nam opinię</b>
              </h6>
              <a
                href='https://g.page/artopenreklama/review?rc'
                target='_blank'
                rel='noopener noreferrer'
                className='button-green tooltip'
              >
                {' '}
                <img
                  width='10px'
                  className='icon-green'
                  alt='adres'
                  src='/assets/images/address-card.svg'
                />
                opinie Google
                <span className='tooltiptextup'>
                  Napisz opinię o naszej firmie w serwisie Google.
                </span>
              </a>

              {/*}//TODO: Google play badge
          <br /><h5 style={{marginTop:'20px'}}><b>Aplikacja</b></h5>
          <Link to='http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="oimg" alt='pobierz z Google Play' style={{maxWidth:'150px'}} src='https://play.google.com/intl/en_us/badges/static/images/badges/pl_badge_web_generic.png'/></Link>
          */}
            </div>
          </div>
          <div className='has-text-centered'>
            <a
              rel='noreferrer'
              href='https://facebook.com/artopenstudioreklamy/'
              target='_blank'
            >
              <img
                width='25px'
                className='icon-green'
                alt='facebook'
                src='/assets/images/facebook-square.svg'
              />
            </a>
            <a
              rel='noreferrer'
              href='https://www.youtube.com/channel/UCR45VIn9iEmnQo7JU_FL2uQ/'
              target='_blank'
            >
              <img
                width='25px'
                className='icon-green'
                alt='youtube'
                src='/assets/images/youtube-square.svg'
              />
            </a>
            <a
              rel='noreferrer'
              href='https://www.linkedin.com/company/art-open-studio-reklamy/'
              target='_blank'
            >
              <img
                width='25px'
                className='icon-green'
                alt='linkedin'
                src='/assets/images/linkedin.svg'
              />
            </a>
            <a
              rel='noreferrer'
              href='https://twitter.com/AReklamy/'
              target='_blank'
            >
              <img
                width='25px'
                className='icon-green'
                alt='tweeter'
                src='/assets/images/twitter-square.svg'
              />
            </a>
            <a
              rel='noreferrer'
              href='https://www.instagram.com/artopen.pl/'
              target='_blank'
            >
              <img
                width='25px'
                className='icon-green'
                alt='instagram'
                src='/assets/images/instagram-square.svg'
              />
            </a>
            <a
              rel='noreferrer'
              href='https://www.behance.net/ArtOpenStudioReklamy/'
              target='_blank'
            >
              <img
                width='25px'
                className='icon-green'
                alt='behance'
                src='/assets/images/behance-square.svg'
              />
            </a>

            <br />
            <br />
            <p style={{ color: 'white', fontSize: '12px' }}>
              <Link className='link-green' style={{ color: 'white' }} to='/'>
                {new Date().getFullYear()} © Art Open
              </Link>{' '}
              |{' '}
              <Link className='link-green' to='/polityka-prywatnosci/'>
                {' '}
                Polityka prywatności{' '}
              </Link>
              |{' '}
              <Link className='link-green' to='/polityka-prywatnosci/#cookies'>
                {' '}
                Pliki Cookies{' '}
              </Link>
              |{' '}
              <a
                className='link-green'
                target='_blank'
                href='https://artopen.pl/sitemap.xml/'
              >
                {' '}
                Mapa strony{' '}
              </a>
            </p>
          </div>
        </div>

        <div
          id='backtotop'
          style={{
            display: 'none',
            position: 'fixed',
            right: '2px',
            bottom: '4px',
            padding: '4px',
            width: '27px',
            textAlign: 'center',
            height: '27px',
            backgroundColor: '#111111',
            borderRadius: '5px',
          }}
        >
          <Link to='#'>
            <img
              width='20px'
              alt='backtotop'
              src='/assets/images/angle-up.svg'
            />
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
