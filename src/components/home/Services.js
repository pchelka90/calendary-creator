import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div
      className='content-section bg-primary text-white text-center'
      id='services'
    >
      <h1 className='dowiedz'>Dowiedz się więcej...</h1>
      <div className='columns'>
        <div className='offert'>
          <div className='column'>
            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='Projektowanie graficzne'
                src='/assets/images/pencil-alt.svg'
              />
              <h2 className='dowiedz'>
                <strong>Projektowanie graficzne</strong>
              </h2>
              <p class='text-faded mb-0'>
                Projektowanie graficzne to nasza pasja. Wykonujemy unikatowe
                projekty graficzne w tym, logotypy, strony internetowe,
                identyfikacje wizualne, reklamy wielkoformatowe, grafiki 3D oraz
                wektorowe.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='Kalendarze firmowe'
                src='/assets/images/calendar-alt.svg'
              />
              <h2 className='dowiedz'>
                <strong>Kalendarze firmowe</strong>
              </h2>
              <p class='text-faded mb-0'>
                Realizujemy indywidualne kalendarze ścienne, trójdzielne,
                biurkowe, oparte o unikalne projekty graficzne, drukowane na
                ekologicznym papierze z uszlachetnieniami.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='Kalendarze firmowe'
                src='/assets/images/book.svg'
              />
              <h2 className='dowiedz'>
                <strong>Kalendarze książkowe</strong>
              </h2>
              <p class='text-faded mb-0'>
                Spersonalizowane kalendarze książkowe i notesy, wykonane z
                ekologicznych materiałów z innowacyjnymi dodatkami. Odporne na
                wodę i rozdarcia z naturalnie białym środkiem.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='Kalendarze firmowe'
                src='/assets/images/leaf.svg'
              />
              <h2 className='dowiedz'>
                <strong>Ekologia</strong>
              </h2>
              <p class='text-faded mb-0'>
                Ekologiczne produkty reklamowe oraz gadżety. W ofercie
                znajdziecie Państwo produkty wykonane z bambusa, łusek kawy,
                papieru z kamienia, papieru z trawy, kukurydzianego PLA, słomy
                pszenicznej czy organicznej bawełny.
              </p>
            </div>
          </div>

          <div className='column'>
            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='Strony internetowe'
                src='/assets/images/laptop-code.svg'
              />
              <h2 className='dowiedz'>
                <strong>Strony internetowe</strong>
              </h2>
              <p class='text-faded mb-0'>
                Tworzymy dedykowane strony, sklepy i aplikacje internetowe,
                wykorzystujemy nowoczesne technologie, dostosowujemy projekty
                pod każdą rozdzielczość, zadbamy również o pozycjonowanie (SEO),
                backupy, wsparcie techniczne oraz serwer.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='gadżety'
                src='/assets/images/lightbulb.svg'
              />
              <h2 className='dowiedz'>
                <strong>Gadżety</strong>
              </h2>
              <p class='text-faded mb-0'>
                Produkujemy ekologiczne gadżety z firmowymi grafikami przy
                użyciu nowoczesnych technik znakowania oraz inspirujące karty
                MAGIC, ładowarki indukcyjne, głośniki, pendrive'y i wiele
                innych.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='mapka'
                src='/assets/images/map.svg'
              />
              <h2 className='dowiedz'>
                <strong>Wydruki</strong>
              </h2>
              <p class='text-faded mb-0'>
                Drukujemy foldery, ulotki, wizytówki, teczki, kalendarze,
                plakaty, publikacje, katalogi i inne produkty wykorzystując
                ekologiczny papier oraz farby.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='kamera'
                src='/assets/images/film.svg'
              />
              <h2 className='dowiedz'>
                <strong>Filmy reklamowe</strong>
              </h2>
              <p class='text-faded mb-0'>
                Kręcimy filmy oraz spoty reklamowe według określonego
                scenariusza, zajmiemy się storyboardem, montażem, postprodukcją
                oraz efektami specjalnymi. Wykonujemy również szeroki zakres
                animacji takich jak animacje 2D, 3D, SVG, CSS czy fotograficzne
                lub rysowane poklatkowe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
