/** Index of the Project */

import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './utils/style/GlobalStyle';

// Import of Pages and Components
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FirstDivide from './components/Divide/FirstDivide';
import About from './pages/About';
import Footer from './components/Footer';
import DarkModeButton from './components/DarkModeButton';

// Context for DarkMode/Parallax Effect
import { ThemeProvider } from './utils/context/context';
import { ParallaxProvider } from 'react-scroll-parallax';

// CSS Style
import './sass/css/style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ThemeProvider> 
    <ParallaxProvider>
      <GlobalStyle />

        <Header />
        <Home />
        <About />
        <FirstDivide />
        <Contact />
        <Footer />
        <DarkModeButton />
      
    </ParallaxProvider> 
    </ThemeProvider>
  </div>
);