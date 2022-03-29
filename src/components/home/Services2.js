import React from 'react';
import { Link } from 'react-router-dom';

function Services2() {
  return (
    <div
      class='content-section bg-primary text-white text-center'
      id='services'
    >
      <h1 className='dowiedz'>Ofert ciąg dalszy...</h1>
      <div className='columns'>
        <div className='offert'>
          <div className='column'>
            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='Projektowanie graficzne'
                src='/assets/images/camera-retro.svg'
              />
              <h2 className='dowiedz'>
                <strong>Foto</strong>
              </h2>
              <p class='text-faded mb-0'>
                Wykonujemy profesjonalne sesje fotograficzne produktów
                firmowych, obiektów, eventów oraz ludzi, oferujemy obróbkę
                graficzną zdjęć oraz ujęcia z drona.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='opakowania'
                src='/assets/images/box-open.svg'
              />
              <h2 className='dowiedz'>
                <strong>Opakowania</strong>
              </h2>
              <p class='text-faded mb-0'>
                Opakowania produkowane z wykrojnika o indywidualnych
                parametrach, z uszlachetnieniami oraz znakowaniem nowoczesnymi
                technikami. Oferujemy niepowtarzalny projekt graficzny oraz
                ekologiczne materiały.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='Kalendarze firmowe'
                src='/assets/images/pencil-ruler.svg'
              />
              <h2 className='dowiedz'>
                <strong>Branding</strong>
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
                src='/assets/images/cubes.svg'
              />
              <h2 className='dowiedz'>
                <strong>Systemy Wystawiennicze</strong>
              </h2>
              <p class='text-faded mb-0'>
                Realizujemy całościowe systemy targowe, m.in. ścianki, rollup'y,
                lady, stoiska multimedialne, systemy wystawiennicze, firmowe
                flagi oraz przenośnie stoiska targowe.
              </p>
            </div>
          </div>

          <div className='column'>
            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='Strony internetowe'
                src='/assets/images/vr-cardboard.svg'
              />
              <h2 className='dowiedz'>
                <strong>VR</strong>
              </h2>
              <p class='text-faded mb-0'>
                Kreujemy wirtualną rzeczywistość dla biznesu, instytucji kultury
                i marek. Projekty na okulary VR zapewnią twoim klientom
                niezapomniane przeżycie zarazem kreując nowoczesny wizerunek dla
                Twojego biznesu.
              </p>
            </div>

            <div className='offer'>
              <img
                className='service-icon rounded-circle'
                alt='gadżety'
                src='/assets/images/object-ungroup.svg'
              />
              <h2 className='dowiedz'>
                <strong>Reklama outdoor</strong>
              </h2>
              <p class='text-faded mb-0'>
                Projektujemy i montujemy reklamy wielkoformatowe - banery,
                tablice, siatki mesh, billboardy reklamowe i inne. Zadbamy o
                odpowiednią lokalizację oraz przygotowanie.
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
                src='/assets/images/viruses.svg'
              />
              <h2 className='dowiedz'>
                <strong>Covid-19</strong>
              </h2>
              <p class='text-faded mb-0'>
                Maski chirurgiczne, maski z logo, przyłbice, produkty do
                dezynfekcji i żele do rąk - te i inne przydatne artykuły do
                ochrony zdrowia znajdziecie Państwo w naszej ofercie przeciwko
                Covid-19.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services2;
