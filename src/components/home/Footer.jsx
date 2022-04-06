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
            <a href='/'>
              <img
                width='200px'
                src='/assets/images/ao_ukraina-w.svg'
                id='logo-footer'
                alt='Agencja reklamowa Art Open'
              />
            </a>
            <br></br>
          </div>
          <br></br>
          <div className='section'>
            <div className='columns'>
              <div
                className='column'
                style={{ padding: '20px', marginTop: '30px' }}
              >
                <h5>
                  <b>
                    <a style={{ color: 'white' }} href='/oferta/'>
                      Oferta
                    </a>
                  </b>
                </h5>
                <br />
                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/covid-19/'
                >
                  <img
                    className='icon-green'
                    alt='covid-19'
                    src='/assets/images/viruses.svg'
                  />
                  Covid-19
                </a>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/ekologia/'
                >
                  <img
                    className='icon-green'
                    alt='ekologia'
                    src='/assets/images/leaf.svg'
                  />
                  Ekologia
                </a>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/branding/'
                >
                  <img
                    className='icon-green'
                    alt='branding'
                    src='/assets/images/pencil-ruler.svg'
                  />
                  Branding
                </a>

                <ul className='fmenu'>
                  <a
                    className='submenu-item'
                    href='https://artopen.pl/oferta/projektowanie-graficzne/'
                  >
                    <img
                      className='icon-green'
                      alt='branding'
                      src='/assets/images/pencil-alt.svg'
                    />
                    Projektowanie graficzne
                  </a>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/projektowanie-graficzne/logotypy/'
                    >
                      Logotypy
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/projektowanie-graficzne/siw-identyfikacja-wizualna/'
                    >
                      Identyfikacja wizualna
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/projektowanie-graficzne/grafika-wektorowa/'
                    >
                      Grafika wektorowa
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/projektowanie-graficzne/projektowanie-stron-internetowych/'
                    >
                      Projektowanie stron internetowych
                    </a>
                  </li>
                </ul>

                <ul className='fmenu'>
                  <a
                    className='submenu-item'
                    href='/oferta/strony-internetowe/'
                  >
                    <img
                      className='icon-green'
                      alt='strony internetowe'
                      src='/assets/images/code.svg'
                    />
                    Strony internetowe
                  </a>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/strony-internetowe/tworzenie-stron-internetowych/'
                    >
                      Tworzenie stron internetowych
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/strony-internetowe/tworzenie-sklepow-internetowych/'
                    >
                      Tworzenie sklepów internetowych
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/strony-internetowe/aplikacje-webowe/'
                    >
                      Aplikacje webowe
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/strony-internetowe/pozycjonowanie-stron-internetowych-seo/'
                    >
                      Pozycjonowanie stron internetowych
                    </a>
                  </li>
                </ul>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/kalendarze-ksiazkowe/'
                >
                  <img
                    width='10px'
                    className='icon-green'
                    alt='kalendarze książkowe'
                    src='/assets/images/book.svg'
                  />
                  Kalendarze książkowe
                </a>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/kalendarze-firmowe/'
                >
                  <img
                    className='icon-green'
                    alt='kalendarze firmowe'
                    src='/assets/images/calendar-alt.svg'
                  />
                  Kalendarze firmowe
                </a>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/gadzety/'
                >
                  <img
                    className='icon-green'
                    alt='gadżety'
                    src='/assets/images/lightbulb.svg'
                  />
                  Gadżety reklamowe
                </a>
              </div>

              <div
                className='column removespace'
                style={{ padding: '20px', marginTop: '30px' }}
              >
                <br />
                <br />

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/wydruki/'
                >
                  <img
                    className='icon-green'
                    alt='wydruki'
                    src='/assets/images/map.svg'
                  />
                  Wydruki reklamowe
                </a>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/reklama-zewnetrzna/'
                >
                  <img
                    className='icon-green'
                    alt='reklama zewnętrzna'
                    src='/assets/images/object-ungroup.svg'
                  />
                  Reklamy outdoor
                </a>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/fotografia/'
                >
                  <img
                    className='icon-green'
                    alt='fotografia'
                    src='/assets/images/camera-retro.svg'
                  />
                  Fotografie produktowe
                </a>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/wystawiennictwo/'
                >
                  <img
                    className='icon-green'
                    alt='wystawiennictwo'
                    src='/assets/images/cubes.svg'
                  />
                  Systemy wystawiennicze
                </a>

                <ul className='fmenu'>
                  <a
                    className='submenu-item'
                    href='https://artopen.pl/oferta/filmowanie/'
                  >
                    <img
                      className='icon-green'
                      alt='filmowanie'
                      src='/assets/images/film.svg'
                    />
                    Filmy reklamowe
                  </a>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/filmowanie/filmy-animowane/'
                    >
                      Filmy animowane
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/filmowanie/video/'
                    >
                      Video filmowanie
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/filmowanie/storyboard/'
                    >
                      Storyboard
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/filmowanie/montowanie-filmow/'
                    >
                      Montowanie filmów
                    </a>
                  </li>
                </ul>

                <ul className='fmenu'>
                  <a
                    className='submenu-item'
                    href='https://artopen.pl/oferta/opakowania/'
                  >
                    <img
                      className='icon-green'
                      alt='opakowania'
                      src='/assets/images/box-open.svg'
                    />
                    Opakowania
                  </a>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/opakowania/pudelka-kartonowe/'
                    >
                      Pudełka kartonowe
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/opakowania/pudelka-ozdobne/'
                    >
                      Pudełka ozdobne
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/opakowania/pudelka-do-przechowywania/'
                    >
                      Pudełka do przechowywania
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/oferta/opakowania/pudelka-na-prezenty/'
                    >
                      Pudełka na prezenty
                    </a>
                  </li>
                </ul>

                <a
                  className='submenu-item'
                  href='https://artopen.pl/oferta/vr/'
                >
                  <img
                    className='icon-green'
                    alt='VR'
                    src='/assets/images/vr-cardboard.svg'
                  />
                  Wirtualna rzeczywistość
                </a>
              </div>
              <div
                className='column'
                style={{ padding: '20px', marginTop: '25px' }}
              >
                <h5>
                  <b>
                    <a
                      style={{ color: 'white' }}
                      href='https://artopen.pl/blog/'
                    >
                      Blog
                    </a>
                  </b>
                </h5>
                <ul className='blog_list'>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/jak-zrobic-logo-dla-firmy-lub-marki/'
                    >
                      Jak zrobić logo dla firmy lub marki?
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/jakie-sluchawki-bezprzewodowe-wybrac/'
                    >
                      Jakie słuchawki bezprzewodowe wybrać?
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/odnawialne-zrodla-energii/'
                    >
                      Odnawialen źródła energii
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/akcesoria-i-gadzety-do-auta/'
                    >
                      Gadżety do auta
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/aktualne-wymiary-grafik-na-facebooku-2022/'
                    >
                      Wymiary grafik na facebooku - 2022
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/wcag-2-1-co-to-jest/'
                    >
                      WCAG 2.1 - co to jest i jak to działa?
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/metody-zarzadzania-przedsiebiorstwem/'
                    >
                      Zarządzanie procesowe - czym jest i jakie są jego zalety?
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/metody-zarzadzania-przedsiebiorstwem/'
                    >
                      Nowoczesna technologia, a energetyka
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/systemy-cms-czym-sa-i-jaki-wybrac/'
                    >
                      Systemy CMS - czym są i jaki wybrać?
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/gadzety-na-prezent-co-wybrac/'
                    >
                      Gadżety na prezent - co wybrać?
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/akcja-sprzatanie-otwarci-na-srodowisko-vol-2/'
                    >
                      Akcja sprzątanie - Otwarci na środowisko - vol.2
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/pier-luigi-nagroda-2021/'
                    >
                      Diamentowy dystrybutor marki Pier Luigi 1993
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/oferta-pracy-jezyk-niemiecki/'
                    >
                      Oferta pracy - język niemiecki
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/eco-friendly-dlaczego-warto-byc/'
                    >
                      Dlaczego warto być ECO friendly
                    </a>
                  </li>
                  <li>
                    <a
                      className='submenu-item'
                      href='https://artopen.pl/blog/zwierzaki-w-potrzebie/'
                    >
                      Wiżyta w schronisku - zwierzaki w potrzebie
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className='column'
                style={{ padding: '20px', marginTop: '25px' }}
              >
                <h5>
                  <b>
                    <a
                      style={{ color: 'white' }}
                      href='https://artopen.pl/kontakt/'
                    >
                      Kontakt
                    </a>
                  </b>
                </h5>
                <br />
                <p className='submenu-item'>
                  <img
                    className='icon-green'
                    alt='adres'
                    src='/assets/images/map-marker-alt.svg'
                  />
                  ul. Piotra Ignuta 87
                </p>
                <p className='submenu-item'>
                  <img
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
                    className='icon-green'
                    alt='email'
                    src='/assets/images/paper-plane.svg'
                  />
                  bok@artopen.pl
                </a>

                <br />
                <p className='submenu-item'>
                  <img
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
                    className='icon-green'
                    alt='adres'
                    src='/assets/images/envelope-alt.svg'
                  />
                  zamówienie online
                  <span className='tooltiptextup'>
                    Po kliknięciu zostaną Państwo przekierowani do podstrony z
                    formularzami zawierającymi usługi z naszej oferty.
                    Zapraszamy do odpowiedzenia na pytania i wysłanie zapytania.
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
          </div>
          <div className='has-text-centered'>
            <a
              rel='noreferrer'
              href='https://facebook.com/artopenstudioreklamy/'
              target='_blank'
            >
              <img
                className='icon-sociale'
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
                className='icon-sociale'
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
                className='icon-sociale'
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
                className='icon-sociale'
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
                className='icon-sociale'
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
                className='icon-sociale'
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
