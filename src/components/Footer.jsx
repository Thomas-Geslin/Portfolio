/** Footer */

// Import Pictures
import logo from '../assets/logo.png'
import logoWhite from '../assets/logo-white.png'
import twitter from '../assets/twitter.png'
import github from '../assets/small-github.png'
import linkedin from '../assets/linkedin.png'

import { useTheme } from '../utils/hooks/hooks'

// Import Libraries
import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


// Styled Components
const StyledText = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`


// JSX of the page
export default function Footer() {
  const { theme } = useTheme();

    return(<Reveal keyframes={reveal} duration={2500} triggerOnce>
           <footer className="footer">
                {/* Color of the Logo depend on the mode */}
                {theme === 'light' ? <img src={logo} alt='logo du portfolio' className='footer__picture' />
                                   : <img src={logoWhite} alt='logo du portfolio' className='footer__picture' />}

                <div className='footer__contact'>
                    <StyledText theme={theme} className='footer__contact__text'>+33 7 78 90 23 86</StyledText>
                    <StyledText theme={theme} className='footer__contact__text'>thomas.geslin31@gmail.com</StyledText>
                    
                    <div className='footer__contact__logo'>
                        <img src={twitter} alt="logo de twitter" className='footer__contact__logo__part' />
                        <img src={github} alt="logo de github" className='footer__contact__logo__part' />
                        <img src={linkedin} alt="logo de linkedin" className='footer__contact__logo__part' />
                    </div>
                </div>
            </footer>
            </Reveal>) 
}