import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from './utils/style/GlobalStyle';

import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import { ThemeProvider } from './utils/context/context';

import './sass/css/style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider >  
      <GlobalStyle />

        <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>

    </ThemeProvider>
  </BrowserRouter>
);