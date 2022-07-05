import background from '../../assets/background-home.png'
import presentation from '../../assets/presentation-background.png'

import { useTheme } from '../../utils/hooks/hooks'

import styled from 'styled-components'
import { useEffect } from 'react';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


const StyledText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#D9D9D9')};
`


function autotext() {
  const target = document.getElementById('autotext');
  const text = "Hey,\nI'm Thomas,\nWeb Developer ";

  let index = 0;

  const randomSpeed = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min); 
  }
  
  const play = () => {
    if(index < text.length) {
      target.innerText = text.slice(0, index);
    
      index++;
    
      clearInterval(timer);
      timer = setInterval(play, randomSpeed(40, 150));
    }
  }
  let timer = setInterval(play, 300);
}


export default function HomePresentation() {
  const { theme } = useTheme()

  useEffect(() => {
    autotext();
  }, [])

  return(<Reveal keyframes={reveal} duration={2500} triggerOnce>
         <div className='homePresentation' id='home'>
              <StyledText theme={theme} className='homePresentation__text' id='autotext'></StyledText>
              <img src={background} alt='profil' className='homePresentation__background' />
              <img src={presentation} alt='zz' className='homePresentation__picture' />
          </div>
          </Reveal>)
}