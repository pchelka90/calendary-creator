import React from 'react';
import Helmet from 'react-helmet';

const Banner2 = () => {
  return (
    <>
      <Helmet>
        <script type='application/ld+json'>{JSON.stringify(faqData)}</script>
      </Helmet>
      <div className='container'>
        <h2>Często zadawane pytania</h2>

        <div className='card'>
          <header className='card-header' onClick={() => showCard(0)}>
            <p className='card-header-title'>Jak stworzyć kalendarz?</p>
            <button className='card-header-icon' aria-label='more options'>
              <span className='icon'>
                <img
                  loading='lazy'
                  className='icon-card'
                  style={{ transform: 'rotate(270deg)' }}
                  src='assets/images/angle-right.svg'
                  alt='strzałka wskazująca górę'
                />
              </span>
            </button>
          </header>
          <div className='card-content' style={{ display: 'block' }}>
            <div className='content'>
              <p>
                Sam zaprojektuj własny spersonalizowany kalendarz korzystając z
                naszego bezpłatnego kreatora kalendarzy w taki sposób jaki
                odpowiada Twoim potrzebom. Może to być kalendarz dzienny,
                tygodniowy lun notes z linię, kratkę bądź czysty o różnych
                wielkościach okładki. Dokładną instrukcję masz podaną w 8
                punktach powyżej kreatora!
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <header className='card-header' onClick={() => showCard(1)}>
            <p className='card-header-title'>Jak spersonalizować kalendarz?</p>
            <button className='card-header-icon' aria-label='more options'>
              <span className='icon'>
                <img
                  loading='lazy'
                  className='icon-card'
                  style={{ transform: 'rotate(90deg)' }}
                  src='assets/images/angle-right.svg'
                  alt='strzałka wskazująca dół'
                />
              </span>
            </button>
          </header>
          <div className='card-content' style={{ display: 'none' }}>
            <div className='content'>
              <p>
                Nasz bezpłatny kreator umożliwia Ci pełną personalizacją okładki
                kalendarza bądź notesu. Zacznij od wyboru formatu kalendarza a
                następnie wybierz odpowiadające Ci przeszycie najeżdżając myszką
                na słowo PRZESZYCIE i kliknij to, które najbardziej spełnia
                Twoje oczekiwania. Nie śpiesz się. Pobaw się przeszyciami, pokaż
                znajomym i podejmij ostateczną decyzję. Okładkę już masz to
                wybierz odpowiadający Ci materiał najeżdżając na OPRAWY. Tu
                każdy znajdzie coś dla siebie. Polecamy oprawy EKO. Następnie
                dodaj właściwy model ROKU klikając na nie i ustaw ROK w miejscu
                na kalendarzu, w którym będzie prezentował się najlepiej. Teraz
                wybierz interesujące Cię DODATKI a na koniec swoje Imię i
                Nazwisko oraz LOGO jeśli chcesz.
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <header className='card-header' onClick={() => showCard(2)}>
            <p className='card-header-title'>Jak wysłać zapytanie?</p>
            <button className='card-header-icon' aria-label='more options'>
              <span className='icon'>
                <img
                  loading='lazy'
                  className='icon-card'
                  style={{ transform: 'rotate(90deg)' }}
                  src='assets/images/angle-right.svg'
                  alt='strzałka wskazująca dół'
                />
              </span>
            </button>
          </header>
          <div className='card-content' style={{ display: 'none' }}>
            <div className='content'>
              <p>
                Jeśli masz jakiekolwiek pytania podaj nam swoje dane Imię i
                Nazwisko, koniecznie adres email i telefon, wpisz pytanie w
                wiadomości a my w przeciągu maksymalnie 24 godzin odpowiemy na
                Twoje pytania drogą mailową lub zadzwonimy do Ciebie możliwie
                najszybciej jak się da.
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <header className='card-header' onClick={() => showCard(3)}>
            <p className='card-header-title'>Jak wyeksportować plik?</p>
            <button className='card-header-icon' aria-label='more options'>
              <span className='icon'>
                <img
                  loading='lazy'
                  className='icon-card'
                  style={{ transform: 'rotate(90deg)' }}
                  src='assets/images/angle-right.svg'
                  alt='strzałka wskazująca dół'
                />
              </span>
            </button>
          </header>
          <div className='card-content' style={{ display: 'none' }}>
            <div className='content'>
              <p>
                Jak stworzysz indywidualną oprawę kalendarza lub notesu najedź
                na przycisk EKSPORT i wybierz całą oprawę. Wyeksportowany plik
                zapisz na swoim komputerze a następnie załącz plik z dysku i
                wyślij do nas podając interesującą Cię ilość.
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <header className='card-header' onClick={() => showCard(4)}>
            <p className='card-header-title'>Jaki format wybrać?</p>
            <button className='card-header-icon' aria-label='more options'>
              <span className='icon'>
                <img
                  loading='lazy'
                  className='icon-card'
                  style={{ transform: 'rotate(90deg)' }}
                  src='assets/images/angle-right.svg'
                  alt='strzałka wskazująca dół'
                />
              </span>
            </button>
          </header>
          <div className='card-content' style={{ display: 'none' }}>
            <div className='content'>
              <p>
                Nasz kreator kalendarzy umożliwia wybór właściwego formatu
                dopasowanego do Twoich potrzeb. Projektując własny kalendarz
                wybierz właściwy format który na starcie ma format 501D, co
                odpowiada formatowi A4. Nad naszym kreatorem znajdziesz
                wszystkie dostępne formaty. Ustaw właściwy na początku a potem
                tylko twórz i kreuj swój własny kalendarz lub notes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div
        className='container'
        style={{ paddingBottom: '75px', padding: '20px' }}
      >
        <h2 style={{ textAlign: 'left' }}>
          Kalendarz kreator online bez opłat
        </h2>
        <p>
          Początek nowego roku (również akademickiego!) to doskonała okazja do
          stworzenia kalendarza, jednak tak naprawdę nie ma złego czasu na
          zamówienie tego istotnego elementu codziennego życia - zarówno w
          domach prywatnych, jak i biurach. W końcu możliwość zanotowania
          informacji o istotnych spotkaniach, a także opcja szybkiego
          sprawdzenia, jaki właściwie mamy dzień tygodnia, to coś, z czego warto
          korzystać. Sprawdź nasz kreator kalendarza za darmo i stwórz
          rozwiązanie, które w pełni odpowiada Twoim potrzebom! Zwykłe
          kalendarze dostępne w sklepie to dobre rozwiązanie w sprzedaży
          detalicznej, gdy osoba, która chce go zakupić, nie ma szczególnych
          potrzeb i wymagań gdy idzie o to, jak wygląda kalendarz. Jeśli jednak
          zależy Ci na indywidualnym projekcie dopasowanym do potrzeb Twojej
          rodziny lub firmy - sprawdź nasz darmowy kreator kalendarza online.
          Całość jest bardzo prosta: Ty przygotowujesz projekt w naszym w pełni
          darmowym kreatorze, a my wyceniamy go i dopiero wtedy podejmujesz
          decyzję co do jego zakupu. Wiemy że trudno jest podjąć decyzję o
          ewentualnym kupnie określonego przedmiotu tylko i wyłącznie na
          podstawie własnego wyobrażenia i nieokreślonej bliżej ceny, dlatego
          też zanim złożysz faktyczne zamówienie, uzyskasz od nas wycenę
          projektu. To sprawia, że możesz ocenić, czy chcesz zapłacić określoną
          kwotę za kalendarz, czy może chcesz poszukać nieco tańszego
          rozwiązania - a może wręcz przeciwnie, nasza cena zaskoczy Cię
          pozytywnie i postanowisz skorzystać z dodatkowych rozwiązań!
        </p>
        <h2 style={{ textAlign: 'left' }}>
          Jesteśmy diamentowym dystrybutorem marki Pier Luigi, co w praktyce
          oznacza, że mamy ceny producenta!
        </h2>
        <p>
          Zależy Ci na najwyższej jakości wykonania? Zrób swój kalendarz online
          od początku do końca i skorzystaj z wysokiej jakości, jaką oferuje
          znana i ceniona marka Pier Luigi. Tak jest: wszystkie projekty
          tworzymy właśnie na bazie kalendarzy tej firmy, która istnieje na
          rynku od 2002 roku. Wieloletnia tradycja, doświadczenie, popularność
          tych wysokiej jakości kalendarzy, jak również sam fakt, że ta marka
          istnieje od ponad dwóch dekad sprawia, że możesz jej zaufać. Jesteśmy
          diamentowym dystrybutorem kalendarzy tej marki (a warto nieskromnie
          wspomnieć, że jest to wyróżnienie, które Pier Luigi przyznał tylko
          nielicznym firmom na polskim rynku), zatem jeśli chcesz skorzystać z
          najwyższej jakości i wytrzymałości, jaką oferuje ta marka - nie
          znajdziesz lepszego miejsca. Sprawdź nasz kreator kalendarzy
          (darmowy!) i przez cały rok korzystaj z modelu książkowego dokładnie
          dopasowanego do Twoich preferencji.
        </p>
        <h2 style={{ textAlign: 'left' }}>Zaprojektuj swój kalendarz u nas!</h2>
        <p>
          Zrób swój własny kalendarz na podstawie prostego, intuicyjnego
          kreatora. Oferujemy możliwość przygotowania różnego rodzaju
          kalendarzy, które możesz wykorzystać do różnych zastosowań zarówno w
          życiu prywatnym, jak i zawodowym. Wśród dostępnych opcji znajdują się
          kalendarze książkowe o różnych wymiarach. Nasz kreator notesów pozwoli
          Ci przygotować model kalendarza, w którym zapiszesz wszystkie istotne
          informacje: poczynając od kontaktów biznesowych, poprzez prywatne
          plany, aż po istotne konsultacje lekarskie czy wizyty w urzędach.
          Dzięki temu że możesz dopasować wszelkie parametry związane z Twoim
          kalendarzem książkowym, będzie on dokładnie taki, jak tego oczekujesz:
          nie za duży, dzięki czemu zmieścisz go w torbie czy plecaku, ale
          również nie zbyt mały, co pozwoli Ci na umieszczenie istotnych
          informacji dotyczących wszelkich aspektów Twojego życia prywatnego lub
          działalności biznesowej.
        </p>
      </div>

      <br />

      <div className='banner2'>
        <h2 className='banner2H1'>Zobacz nasze realizacje</h2>
      </div>
    </>
  );
};

export default Banner2;

function showCard(x) {
  if (
    document.getElementsByClassName('card-content')[x].style.display == 'none'
  ) {
    document.getElementsByClassName('card-content')[x].style.display = 'block';
  } else {
    document.getElementsByClassName('card-content')[x].style.display = 'none';
  }

  if (
    document.getElementsByClassName('icon-card')[x].style.transform ==
    'rotate(90deg)'
  ) {
    document.getElementsByClassName('icon-card')[x].style.transform =
      'rotate(270deg)';
  } else {
    document.getElementsByClassName('icon-card')[x].style.transform =
      'rotate(90deg)';
  }
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Jak stworzyć kalendarz za pomocą kreatora kalendarzy?',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Jak stworzyć kalendarz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Sam zaprojektuj własny spersonalizowany kalendarz korzystając z naszego bezpłatnego kreatora kalendarzy w taki sposób jaki odpowiada Twoim potrzebom. Może to być kalendarz dzienny, tygodniowy lub notes w linię, kratkę bądź czysty o różnych wielkościach okładki. Dokładną instrukcję masz podaną w 8 punktach powyżej kreatora!</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak spersonalizować kalendarz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Nasz bezpłatny kreator umożliwia Ci pełną personalizacją okładki kalendarza bądź notesu. Zacznij od wyboru formatu kalendarza a następnie wybierz odpowiadające Ci przeszycie najeżdżając myszką na słowo PRZESZYCIE i kliknij to, które najbardziej spełnia Twoje oczekiwania. Nie śpiesz się. Pobaw się przeszyciami, pokaż znajomym i podejmij ostateczną decyzję. Okładkę już masz to wybierz odpowiadający Ci materiał najeżdżając na OPRAWY. Tu każdy znajdzie coś dla siebie. Polecamy oprawy EKO. Następnie dodaj właściwy model ROKU klikając na nie i ustaw ROK w miejscu na kalendarzu, w którym będzie prezentował się najlepiej. Teraz wybierz interesujące Cię DODATKI a na koniec swoje Imię i Nazwisko oraz LOGO jeśli chcesz.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak wysłać zapytanie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Jeśli masz jakiekolwiek pytania podaj nam swoje dane Imię i Nazwisko, koniecznie adres email i telefon, wpisz pytanie w wiadomości a my w przeciągu maksymalnie 24 godzin odpowiemy na Twoje pytania drogą mailową lub zadzwonimy do Ciebie możliwie najszybciej jak się da.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak wyeksportować plik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Jak stworzysz indywidualną oprawę kalendarza lub notesu najedź na przycisk EKSPORT i wybierz całą oprawę. Wyeksportowany plik zapisz na swoim komputerze a następnie załącz plik z dysku i wyślij do nas podając interesującą Cię ilość.</p>',
      },
    },
    {
      '@type': 'Question',
      name: 'Jaki format wybrać?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<p>Nasz kreator kalendarzy umożliwia wybór właściwego formatu dopasowanego do Twoich potrzeb. Projektując własny kalendarz wybierz właściwy format który na starcie ma format 501D, co odpowiada formatowi A4. Nad naszym kreatorem znajdziesz wszystkie dostępne formaty. Ustaw właściwy na początku a potem tylko twórz i kreuj swój własny kalendarz lub notes.</p>',
      },
    },
  ],
};
