import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './SuccessPage';

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAttachment = (event) => {
    this.setState({ [event.target.name]: event.target.files[0] });
  };

  handleClick = (event) => {
    event.preventDefault();
    let fileinput = document.getElementById('fileinput');
    let file = fileinput.files[0];

    if (file !== undefined) {
      console.log(encode({ 'form-name': 'fileForm', ...this.state }));
      if (file.size < 1048576) {
        fetch('https://kreator-kalendarzy.pl', {
          method: 'POST',
          body: encode({
            'form-name': 'fileForm',
            ...this.state,
          }),
        })
          .then(() => {
            redirectUser();
          })
          .catch((error) => {
            alert(`Failed: ${error}`);
          });
      } else {
        alert(
          'Plik jest zbyt duży. Maksymalna wielkość to 1MB, spróbuj ponownie z mniejszym plikiem'
        );
      }
    }
  };

  render() {
    return (
      <div className='contact-box' id='contact'>
        <div className='columns'>
          <div className='column'>
            <h2 className='formH1'>
              <img
                loading='lazy'
                className='formIMG'
                src='/assets/images/list.svg'
                alt='ikona koperty mailowej'
              />
              <strong>Prześlij swój projekt</strong>
              <br />
              za pomocą formularza
            </h2>
            <img
              loading='lazy'
              className='strzaleczka'
              src='/assets/images/strzaleczka.png'
              alt='ikona strzałki'
            />
            <form
              name='fileForm'
              encType='multipart-form/data'
              method='POST'
              data-netlify='true'
              className='boxshadow'
              onSubmit={this.handleClick}
              style={{ backgroundColor: '#23C495', height: '750px' }}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type='hidden' name='form-name' value='fileForm' />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name='bot-field' onChange={this.handleChange} />
                </label>
              </div>
              <label className='label' htmlFor={'imienew'}>
                Imię i nazwisko<sup>*</sup>:
              </label>
              <div className='control'>
                <input
                  className='input'
                  type={'text'}
                  name={'imie'}
                  onChange={this.handleChange}
                  id={'imienew'}
                  required={true}
                />
              </div>
              <label className='label' htmlFor={'emailnew'}>
                Adres E-mail<sup>*</sup>:
              </label>
              <div className='control'>
                <input
                  className='input'
                  type={'email'}
                  name={'adres-email'}
                  onChange={this.handleChange}
                  id={'emailnew'}
                  required={true}
                />
              </div>

              <div className='control'>
                <label className='label' htmlFor={'numertelnew'}>
                  Numer telefonu:
                </label>
                <input
                  className='input'
                  type={'tel'}
                  name={'numer-telefonu'}
                  onChange={this.handleChange}
                  id={'numertelnew'}
                  required={false}
                />
              </div>
              <div className='field '>
                <div className='control'>
                  <label className='label' htmlFor='fileinput'>
                    Załącz plik z kreatora:
                  </label>

                  <div className='file-label' style={{ cursor: 'pointer' }}>
                      <input
                        className='button is-primary'
                        style={{
                          fontSize: '20px',
                          border: '1px solid white',
                          width: '100%',
                        }}
                        type='file'
                        name='plik'
                        id='fileinput'
                        accept='application/pdf'
                        onChange={this.handleAttachment}
                      />
                    {/*<button
                        style={{
                          fontSize: '22px',
                          border: '1px solid white',
                          width: '100%',
                        }}
                        className='button is-primary'
                        onClick={selectFile}
                      >Załącz projekt z kreatora</button>*/}
                  </div>
                  <p
                    align='center'
                    style={{
                      color: 'white',
                      padding: '2px',
                      fontSize: '12px',
                    }}
                  >
                    Maksymalna wielkość pliku to <b>1MB</b>.{' '}
                  </p>
                </div>
              </div>

              <div className='field column'>
                <label className='label' htmlFor={'wiadomoscnew'}>
                  Wiadomość<sup>*</sup>:
                </label>
                <div className='control'>
                  <textarea
                    className='textarea'
                    type={'text'}
                    name={'wiadomosc'}
                    onChange={this.handleChange}
                    id={'wiadomoscnew'}
                    required={true}
                    rows='5'
                    style={{ padding: '5px' }}
                  ></textarea>
                </div>

                <div className='control'>
                  <label
                    style={{ fontSize: '12px' }}
                    className='main'
                    htmlFor='privacycv'
                  >
                    {' '}
                    <input
                      required={true}
                      onChange={this.handleChange}
                      type='checkbox'
                      id='privacycv'
                      name='privacy'
                      defaultChecked='true'
                      value='true'
                      style={{ fontSize: '11px', textAlign: 'left' }}
                    />
                    &nbsp;&nbsp;Wyrażam zgodę na przetwarzanie moich danych
                    zgodnie z naszą{' '}
                    <a
                      className='link-green'
                      style={{ color: 'white' }}
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://artopen.pl/polityka-prywatnosci/'
                    >
                      polityką prywatności
                    </a>
                    <sup>*</sup>.<span className='check'></span>
                  </label>
                </div>

                <div className='field'>
                  <button
                    className='button is-primary'
                    style={{
                      border: '1px solid white',
                      fontSize: '22px',
                      width: '100%',
                    }}
                    type='submit'
                    onSubmit={this.handleClick}
                    onClick={showFileSize}
                  >
                    Wyślij
                  </button>
                </div>
              </div>
            </form>
            <div className='rest'>
              <h2 className='restH1'>
                <strong>Teraz odpocznij</strong>
                <p className='filizanka'>
                  <img
                    loading='lazy'
                    className='restIMG'
                    src='/assets/images/kawa.svg'
                    alt='ikona parzącej się kawy'
                  />
                </p>
                <br />
                my zajmiemy się resztą
              </h2>
            </div>
          </div>
          <div className='column obrazek-kreator'>
            <img
              loading='lazy'
              src='/assets/images/kreator.svg'
              alt='obrazek kreatora kalendarzy'
            />
          </div>
        </div>
      </div>
    );
  }
}
function redirectUser() {
  window.location.href = 'https://artopen.pl/kontakt/sukces/';
}
function selectFile() {
  document.getElementById('fileinput').click();
}

function showFileSize() {
  let fileinput = document.getElementById('fileinput');

  let file = fileinput.files[0];

  if (file !== undefined) {
    console.log(file.size);
  }
}

export default Form;
