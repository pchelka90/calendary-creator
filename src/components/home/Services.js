import React from 'react';
import { a } from 'react-router-dom';

const Services = () => {
  return (
    <div
      className='content-section bg-primary text-white text-center'
      id='services'
    >
      <div className='offert'>
        <div className='columns'>
          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/covid-19/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='COVID-19'
                src='/assets/images/viruses.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>COVID-19</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Maski chirurgiczne, maski z logo, przyłbice, produkty do
                dezynfekcji i żele do rąk - te i inne przydatne artykuły do
                ochrony zdrowia znajdziecie Państwo w naszej ofercie przeciwko
                Covid-19.
              </p>
            </a>
          </div>
          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/kalendarze-firmowe/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='Ekologia'
                src='/assets/images/leaf.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Ekologia</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Ekologiczne produkty reklamowe oraz gadżety. W ofercie
                znajdziecie Państwo produkty wykonane z bambusa, łusek kawy,
                papieru z kamienia, papieru z trawy, kukurydzianego PLA, słomy
                pszenicznej czy organicznej bawełny.
              </p>
            </a>
          </div>
          <div className='column'>
            <a
              className='offer'
              target='_blank'
              href='https://artopen.pl/portfolio/projektowanie-graficzne-koleje-dolnoslaskie/'
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  className='obrazki'
                  alt='Projektowanie graficzne'
                  src='/assets/images/pencil-alt.svg'
                />
              </div>
              <div style={{ alignItems: 'left' }}>
                <h3
                  className='is-title'
                  style={{
                    textAlign: 'center',
                    marginBottom: '5px',
                    fontSize: '13px',
                    color: 'rgb(0, 209, 178)',
                  }}
                >
                  <strong>Projektowanie graficzne</strong>
                </h3>
                <p className='offp' style={{ fontSize: '12px' }}>
                  Projektowanie graficzne to nasza pasja. Wykonujemy unikatowe
                  projekty graficzne w tym, logotypy, strony internetowe,
                  identyfikacje wizualne, reklamy wielkoformatowe, grafiki 3D
                  oraz wektorowe.
                </p>
              </div>
            </a>
          </div>

          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/strony-internetowe/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='Strony internetowe'
                src='/assets/images/laptop-code.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Strony internetowe</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Tworzymy dedykowane strony, sklepy i aplikacje internetowe,
                wykorzystujemy nowoczesne technologie, dostosowujemy projekty
                pod każdą rozdzielczość, zadbamy również o pozycjonowanie (SEO),
                backupy, wsparcie techniczne oraz serwer.
              </p>
            </a>
          </div>

          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/branding/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='Kalendarze firmowe'
                src='/assets/images/pencil-ruler.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Branding</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Wykonujemy pełne systemy służące kreowaniu wizerunku firmy bądź
                marki charakteryzujące się dopracowanymi znakami graficznymi,
                starannie dobranymi fontami oraz kolorystyką.
              </p>
            </a>
          </div>
        </div>

        <div className='columns'>
          <div className='column'>
            <a
              className='offer'
              target='_blank'
              href='https://artopen.pl/oferta/kalendarze-ksiazkowe/'
            >
              <img
                className='obrazki'
                alt='Kalendarze firmowe'
                src='/assets/images/book.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Kalendarze książkowe</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Spersonalizowane kalendarze książkowe i notesy, wykonane z
                ekologicznych materiałów z innowacyjnymi dodatkami. Odporne na
                wodę i rozdarcia z naturalnie białym środkiem.
              </p>
            </a>
          </div>

          <div className='column'>
            <a
              className='offer'
              target='_blank'
              href='https://artopen.pl/portfolio/kalendarze-ksiazkowe-kghm/'
            >
              <img
                className='obrazki'
                alt='Kalendarze firmowe'
                src='/assets/images/calendar-alt.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Kalendarze firmowe</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Realizujemy indywidualne kalendarze ścienne, trójdzielne,
                biurkowe, oparte o unikalne projekty graficzne, drukowane na
                ekologicznym papierze z uszlachetnieniami.
              </p>
            </a>
          </div>

          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/gadzety/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='gadżety'
                src='/assets/images/lightbulb.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Gadżety</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Produkujemy ekologiczne gadżety z firmowymi grafikami przy
                użyciu nowoczesnych technik znakowania oraz inspirujące karty
                MAGIC, ładowarki indukcyjne, głośniki, pendrive'y i wiele
                innych.
              </p>
            </a>
          </div>

          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/reklama-zewnetrzna/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='Reklama zewnętrzna'
                src='/assets/images/object-ungroup.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Reklama outdoor</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Projektujemy i montujemy reklamy wielkoformatowe - banery,
                tablice, siatki mesh, billboardy reklamowe i inne. Zadbamy o
                odpowiednią lokalizację oraz przygotowanie.
              </p>
            </a>
          </div>

          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/wydruki/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='Wydruki'
                src='/assets/images/map.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Wydruki</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Drukujemy foldery, ulotki, wizytówki, teczki, kalendarze,
                plakaty, publikacje, katalogi i inne produkty wykorzystując
                ekologiczny papier oraz farby.
              </p>
            </a>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/fotografia/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='Projektowanie graficzne'
                src='/assets/images/camera-retro.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Fotografia produktowa</strong>
              </h3>
              <p className='offp'>
                Opakowania produkowane z wykrojnika o indywidualnych
                parametrach, z uszlachetnieniami oraz znakowaniem nowoczesnymi
                technikami. Oferujemy niepowtarzalny projekt graficzny oraz
                ekologiczne materiały.
              </p>
            </a>
          </div>
          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/filmowanie/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='kamera'
                src='/assets/images/film.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Filmy reklamowe</strong>
              </h3>
              <p className='offp' style={{ fontSize: '12px' }}>
                Kręcimy filmy oraz spoty reklamowe według określonego
                scenariusza, zajmiemy się storyboardem, montażem, postprodukcją
                oraz efektami specjalnymi. Wykonujemy również szeroki zakres
                animacji takich jak animacje 2D, 3D, SVG, CSS czy fotograficzne
                lub rysowane poklatkowe.
              </p>
            </a>
          </div>
          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/opakowania/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='opakowania'
                src='/assets/images/box-open.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Opakowania</strong>
              </h3>
              <p className='offp'>
                Opakowania produkowane z wykrojnika o indywidualnych
                parametrach, z uszlachetnieniami oraz znakowaniem nowoczesnymi
                technikami. Oferujemy niepowtarzalny projekt graficzny oraz
                ekologiczne materiały.
              </p>
            </a>
          </div>
          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/wystawiennictwo/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='Kalendarze firmowe'
                src='/assets/images/cubes.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>Systemy wydawnicze</strong>
              </h3>
              <p className='offp'>
                Realizujemy całościowe systemy targowe, m.in. ścianki, rollup'y,
                lady, stoiska multimedialne, systemy wystawiennicze, firmowe
                flagi oraz przenośnie stoiska targowe.
              </p>
            </a>
          </div>
          <div className='column'>
            <a
              className='offer'
              href='https://artopen.pl/oferta/vr/'
              target='_blank'
            >
              <img
                className='obrazki'
                alt='VR'
                src='/assets/images/vr-cardboard.svg'
              />
              <h3
                className='is-title'
                style={{
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '13px',
                  color: 'rgb(0, 209, 178)',
                }}
              >
                <strong>VR</strong>
              </h3>
              <p className='offp'>
                Kreujemy wirtualną rzeczywistość dla biznesu, instytucji kultury
                i marek. Projekty na okulary VR zapewnią twoim klientom
                niezapomniane przeżycie zarazem kreując nowoczesny wizerunek dla
                Twojego biznesu.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
