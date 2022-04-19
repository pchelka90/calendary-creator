import React from 'react';
import Helmet from 'react-helmet'

const Banner = () => {
  return (
    <>
    <Helmet>
    <script type='application/ld+json'>
      {JSON.stringify(howToData)}
    </script>
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

    <div className='columns' style={{width:'100%',padding:'0px',marginTop:'-48px',alignItems:'self-start'}}>
      <div className="column">
        <figure>
          <img src="/assets/images/mockup-kreator.jpg" alt="Darmowy kreator kalendarza online" title="Darmowy kreator kalendarza online"  />
          <figcaption style={{textAlign:'center'}}>Darmowy kreator kalendarza </figcaption>
        </figure>
        <br />
        <h3 style={{textAlign:'center'}}>Dostępne formaty:</h3>
        <br />
        <div className="columns" style={{justifyContent:'center'}}>
        <ul className="column" style={{listStyle:'disc',marginLeft:'5%'}}>
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
        <ul className="column" style={{listStyle:'disc',marginLeft:'5%'}}>
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
      <div className="column" style={{paddingTop:'50px'}}>
      <h2><strong>Jak stworzyć własny kalendarz?</strong></h2>
      <br />
        <h3><span className="green">1.</span> Ustaw własny <b>rozmiar okładki</b></h3>
        <p>Rozmiar kalendarza możesz ustawić wybierając z rozwijanej listy. Po prawej stronie znajdziesz legendę z dokładnymi wymiarami dostępnych formatów.</p>

        <h3><span className="green">2.</span> Wybierz <b>przeszycia</b></h3>
        <p>Po lewej stronie najedź na przeszycia i wybierz interesujący Cię wzór okładki kalendarza klikając w niego. Do Twojej dyspozycji stworzyliśmy 26 gotowych wzorów.</p>

        <h3><span className="green">3.</span> Wybierz <b>oprawę</b> kalendarza</h3>
        <p>Aby wybrać interesująca Cię oprawę – złap myszką i przeciągnij na kalendarz. Możesz zmienić każdy kolor z wybranego przeszycia na okładce łapiąc nowy kolor i przeciągając myszką na okładkę w miejscu innego koloru.</p>

        <h3><span className="green">4.</span> Dodaj <b>aktualny rok</b></h3>
        <p>Wybierz interesujący Cię wygląd roku i kliknij w niego a pojawi się na Twoje okładce. Następnie ustaw go w dowolnym miejscu na okładce kalendarza.</p>

        <h3><span className="green">5.</span> Dobierz <b>dodatki</b></h3>
        <p>To elementy dodatkowe, stanowiące wyjątkowo ciekawe elementy wyróżniające Twój projekt. W przypadku wyboru obszycia kalendarza nicią, szlufkę czy gumkę masz do wyboru całą paletę kolorów (górny lewy róg konkretnego dodatku). Zmieniaj kolory tak aby pasowały do Twojej koncepcji graficznej okładki kalendarza.</p>

        <h3><span className="green">6.</span> Skorzystaj z <b>personalizacji</b></h3>
        <p>Jest to możliwość dodania Imienia i Nazwiska na kalendarzu oraz dodania logo na wybranej oprawie. Baw się wielkością logotypu i personalizacją.</p>

        <h3><span className="green">7.</span> Wyeksportuj <b>plik PDF</b></h3>
        <p>Naciśnij przycisk z napisem EKSPORT. Cała oprawa zostanie pobrana i zapisana na Twoim komputerze wraz ze wszystkimi opcjami jakie stworzyłeś.</p>

        <h3><span className="green">8.</span> <b>Prześlij projekt</b> kalendarza</h3>
        <p>Prześlij zapytanie za pomocą formularza wpisując swoje IMIE I NAZWISKO, adres email, numer telefonu do kontaktu z Tobą i załącz pobrany plik PDF ze swojego komputera. Napisz w treści wiadomości jaka ilość kalendarzy Cię interesuje i kliknij WYŚLIJ. Teraz odpocznij i delektuj się oglądając nasze realizacje a my skontaktujemy się z Tobą, podamy ceny i termin realizacji.</p>

      </div>
    </div>
    <hr />
    </>
  );
};

export default Banner;


const howToData = {
	"@context": "https://schema.org",
	"@type": "HowTo",
	"name": "How to create How-to Structured Data for Google",
	"description": "Google supports showing How-to information in its search results. This guide will show you how to use this tool to generate the required structured data to get your How-to guide featured in search.",
	"totalTime": "PT1H",
	"image": "https://classyschema.org/images/howto-search-result2.png",
	"supply": [
		{
			"@type": "HowToSupply",
			"name": "Giant lobster",
			"image": "https://classyschema.org/images/giant-lobster.jpg",
			"url": "https://en.wikipedia.org/wiki/Big_Lobster"
		},
		{
			"@type": "HowToSupply",
			"name": "Beans on toast",
			"image": "https://classyschema.org/images/beans-on-toast.jpg",
			"url": "https://en.wikipedia.org/wiki/Beans_On_Toast_(musician)"
		},
		{
			"@type": "HowToSupply",
			"name": "Phone off the hook",
			"image": "https://classyschema.org/images/old-phone.jpg",
			"url": "https://www.donotcall.gov.au/"
		}
	],
	"tool": [
		{
			"@type": "HowToTool",
			"name": "Classy Schema How-to Generator",
			"url": "https://classyschema.org/HowTo"
		},
		{
			"@type": "HowToTool",
			"name": "Google Rich Results Testing Tool",
			"image": "https://classyschema.org/images/howto-editor-richresultstext.png",
			"url": "https://search.google.com/test/rich-results"
		}
	],
	"step": [
		{
			"@type": "HowToStep",
			"name": "Setting up the basics",
			"image": "https://classyschema.org/images/howto-editor-recommended.png",
			"url": "https://classyschema.org/HowTo#step1",
			"itemListElement": [
				{
					"@type": "HowToDirection",
					"text": "The top section of the editor contains information about the How-to under tabs for Required, Recommended and Advanced. Fill in as much as you can."
				},
				{
					"@type": "HowToTip",
					"text": "Only Name is required, but the more you fill in, the more features you can get."
				},
				{
					"@type": "HowToTip",
					"text": "Video ID (Advanced) can be used to reference a marked up video on the How-to. This website also has a generator for Videos."
				},
				{
					"@type": "HowToTip",
					"text": "Id (Advanced) can be used to let other structured data reference this How-to."
				}
			]
		},
		{
			"@type": "HowToStep",
			"name": "Adding Steps",
			"text": "A How-to needs at least one step. Each step needs some Instructions or a series of Sub Steps. Your currently looking at the instructions for the second step of this How-to.",
			"image": "https://classyschema.org/images/howto-editor-step.png",
			"url": "https://classyschema.org/HowTo#step2",
			"itemListElement": [
				{
					"@type": "HowToDirection",
					"text": "Click on the \"Add a Step\" button at the bottom of the steps to add a new step."
				},
				{
					"@type": "HowToDirection",
					"text": "Click on the Step or the edit icon to edit a step."
				},
				{
					"@type": "HowToDirection",
					"text": "Sub Steps can be directions or tips. This is a direction."
				},
				{
					"@type": "HowToTip",
					"text": "Video ID for a Step (Advanced) can be set to the ID of a video or even a point in a video (clip)."
				}
			]
		},
		{
			"@type": "HowToStep",
			"name": "Adding Sections",
			"text": "Steps can optionaly be grouped into sections. Click \"Add a section\" to create a new section and drag the sections and steps around to put them in the order you want. If you use sections, all steps have to be in a section. So there is always a section at the top.",
			"image": "https://classyschema.org/images/howto-editor-sections.png",
			"url": "https://classyschema.org/HowTo#step3"
		},
		{
			"@type": "HowToStep",
			"name": "Getting the structured data",
			"text": "Below the editor is the code section which provides you with the structured data based on what you enter. You can chose between several structured data formats.",
			"image": "https://classyschema.org/images/howto-editor-code.png",
			"url": "https://classyschema.org/HowTo#step4",
			"itemListElement": [
				{
					"@type": "HowToTip",
					"text": "Google recommends JSON-LD. It's hidden code placed in the head section of a page. You need to also add a visible HTML version of the content to your page."
				},
				{
					"@type": "HowToTip",
					"text": "Many HTML editors will remove or mess up JSON-LD. You typicaly have to add it directly to your theme files."
				},
				{
					"@type": "HowToTip",
					"text": "Microdata is placed in your HTML content. Many HTML editors will also remove your Microdata markup!"
				},
				{
					"@type": "HowToTip",
					"text": "The Classy Schema format uses classes in HTML, making it easier to style your content. It does not get removed by HTML editors."
				},
				{
					"@type": "HowToTip",
					"text": "The Classy Schema format combined with our Classy Schema JavaScript library can dynamically add JSON-LD to a page while avoiding the issues with HTML editors."
				}
			]
		},
		{
			"@type": "HowToStep",
			"name": "Testing",
			"text": "To the right of the code section is a button to test the current structured data in Googles Rich Results Testing Tool.",
			"image": "https://classyschema.org/images/howto-editor-richresultstext.png",
			"url": "https://classyschema.org/HowTo#step5",
			"itemListElement": [
				{
					"@type": "HowToTip",
					"text": "Try and avoid any errors and warnings. However don't panic about them. A warning typically means you may miss out on one type of feature."
				},
				{
					"@type": "HowToTip",
					"text": "The Code option for 'Html with Classy Schema generating JSON-LD' lets you test the JSON-LD that our Classy Schema JavaScript library produces. "
				}
			]
		}
	]
}
