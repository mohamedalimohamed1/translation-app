import React from 'react';
import './customer.css';
import custOneImg from '../../../assets/custOneImg.png';
import custTwoImg from '../../../assets/custTwoImg.png';
import leftArrow from '../../../assets/leftArrow.png';
import rightArrow from '../../../assets/rightArrow.png';

const Customer = () => {
  return (
    <div id='Testimonials' className='customer'>
        <div className='cust-top-sec'>
            <h6 className='cust-rev-title'>KULLANICILARIMIZIN YORUMLARI</h6>
            <p className='cust-rev-sub-title'>Müşterilerimizin bizim hakkımızda söylediklerini okuyun.</p>
        </div>
        <div className='cust-middle-sec'>
            <div className='left-arrow'>
                <img src={leftArrow} alt="Sol Ok" />
            </div>
            <div className='cust-cards'>
            <div className='cust-card'>
                <div className='cust-head'>
                    <div className='cust-head-img'>
                        <img src={custOneImg} alt="Birinci Müşteri" />
                    </div>
                    <div className='cust-content'>
                        <h1 className='cust-name'>Ayşe Y.</h1>
                        <h2 className='cust-title'>Web Geliştirici</h2>
                    </div>
                </div>
                <div className='cust-description'>
                    <p>"Bu projeyi kullanarak dil öğrenme sürecim inanılmaz hızlandı!
                         Hem eğlenceli hem de öğretici, herkese tavsiye ederim."
                    </p>
                </div>
            </div>
            <div className='cust-card'>
                <div className='cust-head'>
                    <div className='cust-head-img'>
                        <img src={custOneImg} alt="Birinci Müşteri" />
                    </div>
                    <div className='cust-content'>
                        <h1 className='cust-name'>Mehmet K.</h1>
                        <h2 className='cust-title'>Backend Geliştirici</h2>
                    </div>
                </div>
                <div className='cust-description'>
                    <p>"Dil öğrenirken pratik yapmak hiç bu kadar kolay ve keyifli olmamıştı. Proje,
                         öğrendiğim her yeni kelimeyle daha da ilginç hale geliyor."
                    </p>
                </div>
            </div>
            <div className='cust-card'>
                <div className='cust-head'>
                    <div className='cust-head-img'>
                        <img src={custOneImg} alt="Birinci Müşteri" />
                    </div>
                    <div className='cust-content'>
                        <h1 className='cust-name'>Elif D.</h1>
                        <h2 className='cust-title'>Frontend Geliştirici</h2>
                    </div>
                </div>
                <div className='cust-description'>
                    <p>"Bu projeyi kullanmak, dil öğrenme konusunda motivasyonumu artırdı.
                         Farklı dillerde pratik yapmak gerçekten çok faydalı oldu."
                    </p>
                </div>
            </div>
            <div className='cust-card'>
                <div className='cust-head'>
                    <div className='cust-head-img'>
                        <img src={custOneImg} alt="Birinci Müşteri" />
                    </div>
                    <div className='cust-content'>
                        <h1 className='cust-name'>Fatma A.</h1>
                        <h2 className='cust-title'>Full Stack Geliştirici</h2>
                    </div>
                </div>
                <div className='cust-description'>
                    <p>"Harika bir proje! Kullanımı çok kolay ve etkili. Dil 
                        öğrenmek isteyen herkesin denemesi gereken bir araç."
                    </p>
                </div>
            </div>
            </div>
            <div className='right-arrow'>
            <img src={rightArrow} alt="Sağ Ok" />
        </div>
        </div>
    </div>
  );
}

export default Customer;
