import React, { useState } from 'react';
import axios from 'axios';
import './translationPage.css';

const TranslationPage = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('tr');

  const handleTranslate = async () => {
    console.log(`Translating from ${sourceLanguage} to ${targetLanguage}`);
    console.log(`Text to translate: ${text}`);

    try {
      const response = await axios.post('http://localhost:8080/https://libretranslate.de/translate', {
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text'
      }, {
        headers: { 
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      });

      console.log('API Response:', response.data);
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  return (
    <div className="translation-page">
      <div className='comingsoon'>
        <div className='Sohbet'>
          <p>Sohbet Yap</p>
        </div>
        <div className='Kelimeler'>
          <p>Yeni Kelimeler Oğren</p>
        </div>
      </div>
      <div className="language-selection">
        <div className="language-area">
          <select
            id="source-language"
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="tr">Turkish</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            {/* Add more languages as needed */}
          </select>
          <textarea
            className="input-text"
            rows="10"
            cols="50"
            placeholder="Enter text to translate"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button className="swap-button" onClick={handleSwapLanguages}>⇄</button>
        <div className="language-area">
          <select
            id="target-language"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="tr">Turkish</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            {/* Add more languages as needed */}
          </select>
          <textarea
            className="output-text"
            rows="10"
            cols="50"
            placeholder="Translated text will appear here"
            value={translatedText}
            readOnly
          ></textarea>
        </div>
      </div>
      <button className="translate-button" onClick={handleTranslate}>Translate</button>
    </div>
  );
};

export default TranslationPage;
