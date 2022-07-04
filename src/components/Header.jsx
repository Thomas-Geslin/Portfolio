import logo from '../assets/logo.png'
import DarkModeButton from './DarkModeButton';

import { useTheme } from '../utils/hooks/hooks'

import { Link as scroll} from 'react-scroll'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const StyledText = styled(scroll)`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#A7A7A7')};
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#A7A7A7')};
`


export default function Header() {
  const { theme } = useTheme()

  return(<Reveal keyframes={reveal} triggerOnce duration={2500}><div className='header'>
              <img src={logo} alt='Logo du Portfolio' className='header__picture' />

              <div className='header__nav'>
                  <StyledLink theme={theme} to='/' className='header__nav__part'>Home</StyledLink>
                  <StyledText to='stacks' smooth={true} theme={theme} className='header__nav__part'>Tech Stack</StyledText>
                  <StyledText to='projects' smooth={true} theme={theme} className='header__nav__part'>Projets</StyledText>
                  <StyledLink theme={theme} to='/about' className='header__nav__part'>À propos</StyledLink>
                  <StyledLink theme={theme} to='/contact' className='header__nav__part'>Contact</StyledLink>
                  <DarkModeButton />
              </div>

          </div></Reveal>)
}