import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './sass/css/style.css'

import Header from './components/Header';
import Home from './components/01Home';
import Separation from './components/02Separation'
import WebDevelopment from './components/03WebDevelopment';
import Design from './components/04Design';
import Portfolio from './components/05Portfolio';
import Contact from './components/06Contact';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />

      <main>
        <Home />
        <Separation />
        <WebDevelopment />
        <Design />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
