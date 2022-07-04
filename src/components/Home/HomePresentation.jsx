import head from '../../assets/head.png'

import { useTheme } from '../../utils/hooks/hooks'

import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


const revealLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(90px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const revealRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-90px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const StyledText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#D9D9D9')};
`


export default function HomePresentation() {
  const { theme } = useTheme()

  return(<div className='homePresentation' id='home'>
              <Reveal keyframes={revealRight} triggerOnce duration={2500}><StyledText theme={theme} className='homePresentation__text'>Hi 👋,<br/>My name is<br/><span className='homePresentation__text--purple'>Thomas Geslin</span><br/>I build things for web</StyledText></Reveal>
              <Reveal keyframes={revealLeft} triggerOnce duration={2500}><img src={head} alt='profil' /></Reveal>
          </div>)
}