import { useContext } from 'react'
import { ThemeContext } from '../utils/context/context'

import styled from 'styled-components'
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';

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



const StyledButton = styled.button`
  background-color: ${({ theme }) => (theme === 'light' ? '#191919' : 'white')};
`

const StyledContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#191919' : 'white')};
`

const StyledTitle = styled.p`
  color: ${({ theme }) => (theme === 'light' ? 'white' : 'black')};
`

const StyledText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? 'white' : 'black')};
  border: ${({ theme }) => (theme === 'light' ? '1px solid white' : '1px solid black')};

&:hover { background-color: ${({ theme }) => (theme === 'light' ? 'white' : 'black')};
          color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
        };
`


function selectorAppearence() {
    const containerTranslate = () => {
        const container = document.getElementById('selectorContainer');
    
        if(container.classList.contains('containerAppear')) {
            container.classList.remove('containerAppear');
        } else {
            container.classList.add('containerAppear');
        }
    }

    const buttonTranslate = () => {
        const button = document.getElementById('selectorButton');
    
        if(button.classList.contains('buttonAppear')) {
            button.classList.remove('buttonAppear');
        } else {
            button.classList.add('buttonAppear');
        }
    }
    containerTranslate();
    buttonTranslate();
}


export default function DarkModeButton() {
    const { theme, setTheme } = useContext(ThemeContext)

    return(<div>
                <StyledButton onClick={selectorAppearence} theme={theme} className='darkButton' id='selectorButton'>{theme === 'light' ? <Reveal keyframes={reveal} duration={2500} triggerOnce><FiSun color='white' fontSize={25} /></Reveal> : <Reveal keyframes={reveal} duration={2500} triggerOnce><FiMoon color='dark' fontSize={25} /></Reveal>}</StyledButton>

                <StyledContainer theme={theme} className='modeSelector' id='selectorContainer'>
                    <StyledTitle theme={theme} className='modeSelector__title'>Select Mode</StyledTitle>

                    <div className='modeSelector__switch'>
                        <StyledText theme={theme} className='modeSelector__switch__mode' onClick={() => setTheme('light')}>Light Mode</StyledText>
                        <StyledText theme={theme} className='modeSelector__switch__mode' onClick={() => setTheme('dark')}>Dark Mode</StyledText>
                    </div>
                </StyledContainer>
            </div>)
}