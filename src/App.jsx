import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/landingPage/NavbarSec/navbar.jsx';
import Hero from './components/landingPage/Hero/hero.jsx';
import Customer from './components/landingPage/Customer/customer.jsx';
import Support from './components/landingPage/LangSupport/LangSupport.jsx';
import Contacts from './components/landingPage/Contacts/Contacts.jsx';
import FooterSec from './components/landingPage/FooterSec/FooterSec.jsx';
import TranslationPage from './components/TranslationPage/TranslationPage.jsx';

const App = () => {
  return (
    <Router basename="/translation-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Support />
          <Customer />
          <Contacts />
        </>} />
        <Route path="/translate" element={<TranslationPage />} />
      </Routes>
      <FooterSec />
    </Router>
  );
};

export default App;
