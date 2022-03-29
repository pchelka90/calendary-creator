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
      <div id='kontakt'>
        <form
          name='kontakt'
          id='kontaktform'
          method='post'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={this.handleSubmit}
          className='boxshadow'
          style={{ padding: '20px', backgroundColor: '#23C495' }}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type='hidden' name='form-name' value='aplikacja' />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name='bot-field' onChange={this.handleChange} />
            </label>
          </div>
          <div className='columns'>
            <div className='column'>
              <label className='label' htmlFor={'name'}>
                Imię<sup>*</sup>:
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
              <div className='field'>
                <label className='label' htmlFor={'name'}>
                  Nazwisko<sup>*</sup>:
                </label>
                <div className='control'>
                  <input
                    className='input'
                    type={'text'}
                    name={'nazwisko'}
                    onChange={this.handleChange}
                    id={'nazwiskonew'}
                    required={true}
                  />
                </div>
              </div>
            </div>
            <div className='column'>
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
            </div>

            <div className='column'>
              <div className='control'>
                <label className='label is-size-10'>Załącz plik:</label>
                {/*załącz logo*/}

                <div className='file'>
                  <label className='file-label' style={{ cursor: 'pointer' }}>
                    {/*onInput ={(o) => handleInput(o)}*/}
                    <input
                      className='custom-file-input'
                      type='file'
                      name='plik'
                      style={{ cursor: 'pointer' }}
                      onChange={this.handleAttachment}
                      id='fileinputnew'
                    />
                  </label>
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
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <label className='label' htmlFor={'message'}>
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
                <div className='column'>
                  <button
                    className='button is-primary'
                    style={{ border: '1px solid white' }}
                    type='submit'
                    onSubmit={this.handleSubmit}
                    onClick={showFileSize}
                  >
                    Zamów
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function showFileSize() {
  let fileinput = document.getElementById('fileinput');

  let file = fileinput.files[0];

  if (file !== undefined) {
    console.log(file.size);
  }
}

export default Form;
