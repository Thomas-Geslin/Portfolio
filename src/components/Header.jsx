/** Header */

// Import Pictures
import logo from '../assets/logo.png'
import logoWhite from '../assets/logo-white.png'
import { useTheme } from '../utils/hooks/hooks'

// Import Libraries
import { Link } from 'react-scroll'
import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


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


// JSX of the page  
export default function Header() {
  const { theme } = useTheme()

  // Function making the Header able to stay top of the page on scroll
  function fixedHeader() {
    const header = document.getElementById('header');

    // Box-shadow Color depend of the mode
    if(theme === 'light') {
      if (document.documentElement.scrollTop > 0) {
        header.classList.add('onscroll');
      } else {
        header.classList.remove('onscroll');
      }
    } else {
      if (document.documentElement.scrollTop > 0) {
        header.classList.add('onscrollDark');
      } else {
        header.classList.remove('onscrollDark');
      }
    }
  }
  window.onscroll = fixedHeader;


  return(<StyledHeader theme={theme} className='header' id='header'>
              {/* Color of the Logo depend on the mode */}
              <Reveal keyframes={revealTop} duration={2500} triggerOnce className='header__picture'>{theme === 'dark' ? <img src={logoWhite} alt='Logo du Portfolio' className='header__picture' />
                                                                                                                      : <img src={logo} alt='Logo du Portfolio' className='header__picture' />}</Reveal>                                                                                                                    
              <Reveal keyframes={revealTop} duration={2500} triggerOnce className='header__nav' id='header'>
                  <StyledText to='home' smooth={true} offset={-335} theme={theme} className='header__nav__part'>Home</StyledText>
                  <StyledText to='stacks' smooth={true} offset={-130} theme={theme} className='header__nav__part'>Tech Stack</StyledText>
                  <StyledText to='projects' smooth={true} offset={-130} theme={theme} className='header__nav__part'>Projets</StyledText>
                  <StyledText to='about' smooth={true} offset={-130} theme={theme} className='header__nav__part'>À propos</StyledText>
                  <StyledText to='contact' smooth={true} offset={-130} theme={theme} className='header__nav__part'>Contact</StyledText>
              </Reveal>
          </StyledHeader>)
}