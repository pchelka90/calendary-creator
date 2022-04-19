import React from 'react';

const Banner2 = () => {
  return (
    <>
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
