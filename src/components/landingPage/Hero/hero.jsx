import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';
import Heroimg from '../../../assets/female.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/translate');
  };

  return (
    <div id="Home" className="hero">
      <div className="text-sec">
        <h1 className="hero-title">Kesintisiz Çeviri Deneyimi</h1>
        <h2 className="hero-sub-title">Çok Dilli İletişiminiz İçin Geçit</h2>
        <p className="hero-description">
          Dünya ile zahmetsizce bağlantı kurun. Uygulamamız, dil engellerini ortadan kaldırarak sınırlar ötesinde sorunsuz iletişim sağlar.
        </p>
        <button className="cta-button" onClick={handleGetStartedClick}>Başlayın</button>
      </div>
      <div className="image-sec">
        <img src={Heroimg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
