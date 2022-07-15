/** Presentation Page */

// Import Pictures
import background from '../../assets/background-home.png'
import backgroundLight from '../../assets/background-home-light.svg'
import presentation from '../../assets/presentation-background.png'

import { useTheme } from '../../utils/hooks/hooks'
import { useEffect } from 'react';

// Import Libraries
import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


// Styled components
const StyledText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#D9D9D9')};
`


// Function making the text of the Presentation page appear like if someone typing it
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


// JSX of the page
export default function HomePresentation() {
  const { theme } = useTheme()

  useEffect(() => {
    autotext();
  }, [])

  return(<Reveal keyframes={reveal} duration={2500} triggerOnce>
         <div className='homePresentation' id='home'>
              <StyledText theme={theme} className='homePresentation__text' id='autotext'></StyledText>
              {theme === 'dark' 
                ? <img src={background} alt='profil' className='homePresentation__background' /> 
                : <img src={backgroundLight} alt='profil' className='homePresentation__background homePresentation__background--light' />
              }
              <img src={presentation} alt='zz' className='homePresentation__picture' />
          </div>
          </Reveal>)
}