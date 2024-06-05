// src\components\landingPage\NavbarSec\navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../../assets/erenAzedLogo.png';
import './navbar.css';

const Navbar = () => {
  const [showMessage, setShowMessage] = useState(false);
  const girisRef = useRef(null);

  useEffect(() => {
    // Access the element with the id 'giris'
    const girisElement = girisRef.current;
    console.log(girisElement); // Perform any action with the element
  }, []);

  const handleGirisClick = () => {
    setShowMessage(true);
    alert('Bu hizmet en yakında size sunulacak');
  };

  return (
    <div className='navbar'>
      <div className='logo-sec'>
        <a href=""><img src={Logo} alt="Eren AZed logo" /></a>
      </div>
      <div className='nav-sec'>
        <ul>
          <li><Link to="Home" smooth={true} duration={500} offset={-120}>ANASAYFA</Link></li>
          <li><Link to="Languages" smooth={true} duration={500} offset={-80}>DİLLER</Link></li>
          <li><Link to="Testimonials" smooth={true} duration={500} offset={-100}>YORUMLAR</Link></li>
          <li><Link to="Contacts" smooth={true} duration={500} offset={-70}>İLETİŞİM</Link></li>
          <li id='giris' className='login' ref={girisRef} onClick={handleGirisClick}>GİRİŞ YAP</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
