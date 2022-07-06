/** ModeSelector Component */

import { useContext } from 'react'
import { ThemeContext } from '../utils/context/context'

// Import Icons
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';

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


// Styled Components
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


// Function making the ModeSelector appear when clicking on the Icon
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


// JSX of the page
export default function DarkModeButton() {
    const { theme, setTheme } = useContext(ThemeContext)

    return(<div>
                {/* Icon change depend on the mode */}
                <StyledButton onClick={selectorAppearence} theme={theme} className='darkButton' id='selectorButton'>{theme === 'light' ? <Reveal keyframes={reveal} duration={2500} triggerOnce><FiSun color='white' fontSize={25} className='darkButton--sun' /></Reveal> : <Reveal keyframes={reveal} duration={2500} triggerOnce><FiMoon color='dark' fontSize={25} className='darkButton--moon' /></Reveal>}</StyledButton>

                {/* ModeSelector */}
                <StyledContainer theme={theme} className='modeSelector' id='selectorContainer'>
                    <StyledTitle theme={theme} className='modeSelector__title'>Select Mode</StyledTitle>

                    <div className='modeSelector__switch'>
                        <StyledText theme={theme} className='modeSelector__switch__mode' onClick={() => setTheme('light')}>Light Mode</StyledText>
                        <StyledText theme={theme} className='modeSelector__switch__mode' onClick={() => setTheme('dark')}>Dark Mode</StyledText>
                    </div>
                </StyledContainer>
            </div>)
}