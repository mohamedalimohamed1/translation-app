import React, { useState } from 'react';
import './Contacts.css';
import postImg from '../../../assets/postImg.png';

const Contacts = () => {
  const [result, setResult] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Gönderiliyor....');
    const formData = new FormData(event.target);

    formData.append('access_key', '5d93a268-04ea-461b-a121-244ffc9fc58c');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        'Mesajınız Alındı, En Kısa Sürede E-posta ile Dönüş Yapacağız!'
      );
      event.target.reset();
      setTimeout(() => {
        setResult('');
      }, 5000);
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  const handleChange = (e) => {
    const email = e.target.value;
    const inputEmail = e.target;

    const isValidHtml5 = inputEmail.checkValidity();

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidPattern = pattern.test(email);

    const isValidEmail = isValidHtml5 && isValidPattern;
    setIsValidEmail(isValidEmail);
  };

  return (
    <div id='Contacts' className='contacts'>
      <div className='contacts-top-sec'>
        <h2>İletişim</h2>
        <p>Her türlü soru veya görüşünüz için bizimle iletişime geçmekten çekinmeyin</p>
      </div>
      <div className='contacts-bottom-sec'>
        <div className='contacts-left-sec'>
          <div className='form-head-sec'>
            <h3>Bize Ulaşın</h3>
          </div>
          <div className='form-sec'>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                name='Ad'
                placeholder='Adınızı Girin'
                required
              />
              <input
                type='email'
                name='E-post'
                placeholder='E-postanızı Girin'
                required
                onChange={handleChange} 
                className={!isValidEmail ? 'invalid-email' : ''} 
              />
              {!isValidEmail && (
                <span className='error-message'>Geçersiz email adresi</span>
              )}
              <input
                type='tel'
                name='Telefon Numara'
                placeholder='Telefon Numaranızı Girin'
                required
              />
              <textarea
                name='Mesaj'
                placeholder='Mesajınızı buraya girin'
                required
              ></textarea>
              <button type='submit'>Form Gönder</button>
              <span>{result}</span>
            </form>
          </div>
        </div>
        <div className='contacts-right-sec'>
          <img src={postImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
