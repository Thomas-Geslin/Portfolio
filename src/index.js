import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './utils/style/GlobalStyle';

import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import DarkModeButton from './components/DarkModeButton';
import Footer from './components/Footer'

import { ThemeProvider } from './utils/context/context';

import './sass/css/style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ThemeProvider >  
      <GlobalStyle />

        <Header />
        <Home />
        <About />
        <Contact />
        <DarkModeButton />
        <Footer />
      
    </ThemeProvider>
  </div>
);