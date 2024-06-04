import React from 'react';
import './LangSupport.css';
import transImg from '../../../assets/benifits.png';
import comingSoonIcon from '../../../assets/comingSoonIcon.png';
import availableIcon from '../../../assets/availableIcon.png';

export const LangSupport = () => {
  return (
    <div id='Languages' className='LangSupport'>
        <div className='lang-supp-top-sec'>
            <h2>DİLLER</h2>
            <p>Çeviri hizmetlerimiz, sınırları aşarak etkili bir şekilde iletişim kurmanıza yardımcı olmak için geniş bir dil yelpazesini kapsar. Desteklediğimiz dillerden bazıları aşağıdadır:</p>
        </div>
        <div className='lang-supp-bottom-sec'>
            <div className='lang-supp-left-sec'>
                <div className='benefits'>
                <p>İster seyahat ediyor olun, ister başkalarıyla bağlantı kuruyor olun, ister ufkunuzu genişletiyor olun, yeni bir dil öğrenmek mutluluk ve tatmin getiren paha biçilmez bir beceridir.</p>
                </div>
                <div className='lang-supp-left-sec-img'>
                    <img src={transImg} alt="Çeviri Resmi" />
                </div>
            </div>
            <div className='lang-supp-right-sec'>
                <div className='lang-supp-english-card'>
                    <h3>İngilizce</h3>
                    <p>İş, bilim ve teknolojinin evrensel dili olan İngilizce, küresel fırsatların kapısını açar ve dünya çapında iletişimi kolaylaştırır.</p>
                    <div className='lang-supp-card-icon'>
                        <img src={availableIcon} alt="Mevcut" />
                    </div>
                </div>
                <div className='lang-supp-Turkish-card'>
                    <h3>Türkçe</h3>
                    <p>Türkiye ve Avrupa'nın bazı bölgelerinde konuşulan canlı ve kültürel açıdan zengin bir dil olarak Türkçe, dinamik ve çeşitli bir kitleyle bağlantı kurmanıza olanak tanır.</p>
                    <div className='lang-supp-card-icon'>
                        <img src={availableIcon} alt="Mevcut" />
                    </div>
                </div>
                <div className='lang-supp-french-card'>
                    <h3>Fransızca</h3>
                    <p>Diplomasi, sanat ve mutfak alanındaki zarafeti ve etkisi ile tanınan Fransızca, çeşitli kültürlere ve prestijli uluslararası topluluklara açılan bir kapıdır.</p>
                    <div className='lang-supp-card-icon'>
                        <img src={comingSoonIcon} alt="Yakında" />
                    </div>
                </div>
                <div className='lang-supp-Spanish-card'>
                    <h3>İspanyolca</h3>
                    <p>Amerikalar, İspanya ve ötesinde yaygın kullanımıyla İspanyolca, canlı kültürlere ve genişleyen pazarlara erişim sunar, bu da onu küresel etkileşim için önemli kılar.</p>
                    <div className='lang-supp-card-icon'>
                        <img src={comingSoonIcon} alt="Yakında" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LangSupport;
