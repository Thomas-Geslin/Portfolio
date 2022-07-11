/** Header */

// Import Pictures
import logo from '../assets/logo.png'
import logoWhite from '../assets/logo-white.png'
import { useTheme } from '../utils/hooks/hooks'
import { useState } from 'react'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// Import Libraries
import { Link } from 'react-scroll'
import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// Keyframe for smooth reveal
const revealTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;


// Styled Components
const StyledText = styled(Link)`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : 'white')};
`

const StyledHeader = styled.header`
  background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#191919')};
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
`


// JSX of the page  
export default function Header() {
  const { theme } = useTheme()

  // Function making the Header able to stay top of the page on scroll
  function fixedHeader() {
    const header = document.getElementById('header');

    // Box-shadow Color depend of the mode
    if(theme === 'light') {
      if(document.documentElement.scrollTop > 0) {
        header.classList.add('onscroll');
      } else {
        header.classList.remove('onscroll');
      }
    } else {
      if(document.documentElement.scrollTop > 0) {
        header.classList.add('onscrollDark');
      } else {
        header.classList.remove('onscrollDark');
      }
    }
  }
  window.onscroll = fixedHeader;


  let [menuClose, setMenuClose] = useState(true)

  function menuAppearence() {
    const navLinks = document.getElementById('headerNav');

    if(menuClose) {
      navLinks.classList.add('menuAppear');
      setMenuClose(false);
      console.log(menuClose);
    } else if(!menuClose) {
      navLinks.classList.remove('menuAppear');
      setMenuClose(true);
      console.log(menuClose);
    }
  }


  return(<StyledHeader theme={theme} className='header' id='header'>
              {/* Color of the Logo depend on the mode */}
              <Reveal keyframes={revealTop} duration={2500} triggerOnce className='header__picture'>{theme === 'dark' ? <img src={logoWhite} alt='Logo du Portfolio' className='header__picture' />
                                                                                                                      : <img src={logo} alt='Logo du Portfolio' className='header__picture' />}</Reveal>                                                                                                                    
              <div id='headerNav' className='header__nav'><Reveal keyframes={revealTop} duration={2500} triggerOnce>
                  <StyledText to='home' duration={2000} smooth={true} offset={-335} theme={theme} className='header__nav__part'>Home</StyledText>
                  <StyledText to='stacks' duration={2000} smooth={true} offset={-200} theme={theme} className='header__nav__part'>Tech Stack</StyledText>
                  <StyledText to='projects' duration={2000} smooth={true} offset={-200} theme={theme} className='header__nav__part'>Projets</StyledText>
                  <StyledText to='about' duration={2000} smooth={true} offset={-200} theme={theme} className='header__nav__part'>À propos</StyledText>
                  <StyledText to='contact' duration={2000} smooth={true} offset={-200} theme={theme} className='header__nav__part'>Contact</StyledText>
              </Reveal></div>

              <div onClick={menuAppearence} className='header__menu' id='menu'>{menuClose ? <StyledIcon theme={theme} icon={faBars} className='header__menu__icon'/> : <StyledIcon theme={theme} icon={faXmark} className='header__menu__icon'/>}</div>
          </StyledHeader>)
}