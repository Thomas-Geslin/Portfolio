import { useTheme } from '../utils/hooks/hooks'

import styled from 'styled-components'


const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`


export default function About() {
    const { theme } = useTheme();

    return(<div className='about' id='about'>
                <StyledTitle theme={theme} className='about__text'>À propos :</StyledTitle>
                <div>
                  <div>
                    <h3>Un travail qui me passionne !</h3>
                  </div>
                    
                  <div>
                    <h3>Mon expérience à votre service !</h3>
                  </div>
                </div>
            </div>)
}