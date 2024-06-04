import React from 'react'
import { Link } from 'react-scroll';
import './FooterSec.css'
import footerLogo from '../../../assets/erenAzedLogo.png'
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import whatsapp from '../../../assets/whatsapp.png'

export const FooterSec = () => {
  return (
    <div className='footer-sec'>
      <div className='footer-up-sec'>
        <div className='footer-logo-sec'>
          <img src={footerLogo} alt="" />
        </div>
        <div className='usefull-links'>
          <div className='usefull-links-title'>
            <h2>Li̇nkler</h2>
          </div>
            <ul>
              <li><Link to="Home" smooth={true} duration={500} offset={-50}>Anasayfa</Link></li>
              <li><Link to="Languages" smooth={true} duration={500} offset={-100}>Diller</Link></li>
              <li><Link to="Testimonials" smooth={true} duration={500} offset={-100}>Yorumlar</Link></li>
              <li><Link to="Contacts" smooth={true} duration={500} offset={-100}>İletişim</Link></li>
            </ul>
        </div>

        <div className='social-media-acc'>
          <div className='social-media-acc-title'>
            <h2>Hesaplarımız</h2>
          </div>
          <ul>
            <li><img src={instagram} alt="" /><a href="">Instagram</a></li>
            <li><img src={facebook} alt="" /><a href="">Facebook</a></li>
            <li><img src={whatsapp} alt=""/><a href="" >Whatsapp</a></li>
          </ul>
        </div>
      </div>
      
      <div className='footer-copyright-sec'>
        <p>&copy; 2024 Eren Azed. Tüm hakları saklıdır.</p>
      </div>
    </div>
  )
}

export default FooterSec
