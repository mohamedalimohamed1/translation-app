import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import Logo from '../../../assets/erenAzedLogo.png';

const Navbar = () => {
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
          <li className='login'>GİRİŞ YAP</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
