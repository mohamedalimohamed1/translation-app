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
                        <h1 className='cust-name'>J*** Doe</h1>
                        <h2 className='cust-title'>Web Geliştirici</h2>
                    </div>
                </div>
                <div className='cust-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nulla nec ex eget dolor lobortis lacinia.
                     Donec blandit ex vel felis tristique, sed elementum enim vestibulum.
                    </p>
                </div>
            </div>
            <div className='cust-card'>
                <div className='cust-head'>
                    <div className='cust-head-img'>
                        <img src={custOneImg} alt="Birinci Müşteri" />
                    </div>
                    <div className='cust-content'>
                        <h1 className='cust-name'>J*** Doe</h1>
                        <h2 className='cust-title'>Web Geliştirici</h2>
                    </div>
                </div>
                <div className='cust-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nulla nec ex eget dolor lobortis lacinia.
                     Donec blandit ex vel felis tristique, sed elementum enim vestibulum.
                    </p>
                </div>
            </div>
            <div className='cust-card'>
                <div className='cust-head'>
                    <div className='cust-head-img'>
                        <img src={custOneImg} alt="Birinci Müşteri" />
                    </div>
                    <div className='cust-content'>
                        <h1 className='cust-name'>J*** Doe</h1>
                        <h2 className='cust-title'>Web Geliştirici</h2>
                    </div>
                </div>
                <div className='cust-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nulla nec ex eget dolor lobortis lacinia.
                     Donec blandit ex vel felis tristique, sed elementum enim vestibulum.
                    </p>
                </div>
            </div>
            <div className='cust-card'>
                <div className='cust-head'>
                    <div className='cust-head-img'>
                        <img src={custOneImg} alt="Birinci Müşteri" />
                    </div>
                    <div className='cust-content'>
                        <h1 className='cust-name'>J*** Doe</h1>
                        <h2 className='cust-title'>Web Geliştirici</h2>
                    </div>
                </div>
                <div className='cust-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nulla nec ex eget dolor lobortis lacinia.
                     Donec blandit ex vel felis tristique, sed elementum enim vestibulum.
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
