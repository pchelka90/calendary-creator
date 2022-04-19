import React from 'react';
import { Link } from 'react-router-dom';

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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    let fileinput = document.getElementById('fileinput');
    let file = fileinput.files[0];
    //disableEmptyInputs();

    if (file !== undefined) {
      if (file.size < 1048576) {
        e.preventDefault();
        const form = e.target;

        fetch('/', {
          method: 'POST',
          body: encode({
            'form-name': form.getAttribute('name'),
            ...this.state,
          }),
        })
          .then(() => {
            <Link to='/kontakt/sukces/'>Wyślij</Link>;
          })
          .catch((error) => alert(error));
      } else {
        alert(
          'Plik jest zbyt duży. Maksymalna wielkość to 1MB, spróbuj ponownie z mniejszym plikiem'
        );
      }
    } else {
      e.preventDefault();
      const form = e.target;

      fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(() => {
          <Link to='/kontakt/sukces/'>Wyślij</Link>;
        })
        .catch((error) => alert(error));
    }
  };

  render() {
    return (
      <>
        <div className='contact-box' id='kontakt'>
          <div className='columns'>
            <div className='column contact'>
              <h1 className='formH1'>
                <img className='formIMG' src='/assets/images/list.svg' />
                <strong>Prześlij swój projekt</strong>
                <br />
                za pomocą formularza
              </h1>
              <img
                className='strzaleczka'
                src='/assets/images/strzaleczka.png'
              />
              <form
                name='kontakt'
                id='kontaktform'
                method='post'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                onSubmit={this.handleSubmit}
                className='boxshadow'
                style={{ backgroundColor: '#23C495' }}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type='hidden' name='form-name' value='aplikacja' />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name='bot-field' onChange={this.handleChange} />
                  </label>
                </div>
                <label className='label_imie' htmlFor={'name'}>
                  Imię i nazwisko<sup>*</sup>:
                </label>
                <div className='control'>
                  <input
                    className='input'
                    type={'text'}
                    name={'imię'}
                    onChange={this.handleChange}
                    id={'imionew'}
                    required={true}
                  />
                </div>
                <label className='label_email' htmlFor={'email'}>
                  Adres E-mail<sup>*</sup>:
                </label>
                <div className='control'>
                  <input
                    className='input'
                    type={'email'}
                    name={'adres email'}
                    onChange={this.handleChange}
                    id={'adres emailnew'}
                    required={true}
                  />
                </div>
                <div className='field numer_tel'>
                  <label className='label' htmlFor={'name'}>
                    Numer telefonu:
                  </label>
                  <div className='control'>
                    <input
                      className='input'
                      type={'number'}
                      name={'numer telefonu'}
                      onChange={this.handleChange}
                      id={'numertelnew'}
                      required={false}
                    />
                  </div>
                </div>

                <div className='control'>
                  <label className='label is-size-10'>Załącz plik:</label>
                  {/*załącz logo*/}

                  <div className='file'>
                    <label
                      htmlFor={'file'}
                      className='file-label'
                      style={{ cursor: 'pointer' }}
                    >
                      {/*onInput ={(o) => handleInput(o)}*/}
                      <input
                        style={{ display: 'none' }}
                        type='file'
                        id='fileinput'
                        accept='image/*'
                        onChange={this.handleAttachment}
                      />
                    </label>
                    <button
                      style={{ fontSize: '22px' }}
                      className='input-group-text btn btn-danger'
                      onClick={selectFile}
                    >
                      Załącz plik z dysku...
                    </button>
                  </div>
                  <br />
                  <p
                    align='center'
                    style={{
                      backgroundColor: '#111111',
                      color: 'white',
                      padding: '2px',
                      fontSize: '12px',
                    }}
                  >
                    {' '}
                    Maksymalna wielkość pliku to <b>1MB</b>.{' '}
                  </p>
                </div>
                <label className='label_wiadomosc' htmlFor={'message'}>
                  Wiadomość<sup>*</sup>:
                </label>
                <textarea
                  className='textarea'
                  type={'text'}
                  name={'wiadomość'}
                  onChange={this.handleChange}
                  id={'wiadomośćnew'}
                  required={true}
                  rows='7'
                ></textarea>
                <div className='checkbox'>
                  <label
                    style={{ fontSize: '12px' }}
                    className='main'
                    htmlFor='privacynew'
                  >
                    {' '}
                    <input
                      required={true}
                      onChange={this.handleChange}
                      type='checkbox'
                      id='privacynew'
                      name='privacy'
                      defaultChecked='true'
                      value='true'
                    />
                    Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą{' '}
                    <a
                      className='link-green'
                      style={{ color: 'white' }}
                      href='/polityka-prywatnosci/'
                    >
                      polityką prywatności
                    </a>
                  </label>
                  <div className='button-wyslij'>
                    <button
                      className='button is-primary'
                      style={{ border: '2px solid yellow' }}
                      type='submit'
                      onSubmit={this.handleSubmit}
                      onClick={showFileSize}
                    >
                      Wyślij
                    </button>
                  </div>
                </div>
              </form>
              <div className='rest'>
                <h1 className='restH1'>
                  <strong>Teraz odpocznij</strong>
                  <p className='filizanka'>
                    <img className='restIMG' src='/assets/images/kawa.svg' />
                  </p>
                  <br />
                  my zajmiemy się resztą
                </h1>
              </div>
            </div>
            <div className='column obrazek-kreator'>
              <img src='/assets/images/Kreator.svg' />
            </div>
          </div>
        </div>
      </>
    );
  }
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
