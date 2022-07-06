/** Page About */

import languages from '../assets/languages.png'

import { useTheme } from '../utils/hooks/hooks'
import styled from 'styled-components'


// Styled components
const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`


// JSX of the page
export default function About() {
    const { theme } = useTheme();

    return(<div className='about' id='about'>
                <StyledTitle theme={theme} className='about__title'>À propos :</StyledTitle>
                <div className='about__container'>
                  <div className='about__container__description'>
                    <h3 className='about__container__description__title'>Un travail qui me passionne !</h3>
                    <p className='about__container__description__text'>Passioné depuis toujours par tout ce qui touche aux nouvelles technologies, j'ai décidé de me lancer dans le monde du développement et d'en faire mon métier.<br/>Ayant une préference certaine pour travaillé sur le front-end des sites web, je me suis tourné vers le framework React, et c'est maintenant la technologie que j'utilise le plus pour réalisé mes différents projets.</p>
                  </div>
                    
                  <img src={languages} alt='Illustration de la partie About' className='about__container__picture'/>

                  <div className='about__container__description'>
                    <h3 className='about__container__description__title'>Mon expérience !</h3>
                    <p className='about__container__description__text'>Développeur Web diplômé depuis peu, </p>
                  </div>
                </div>
            </div>)
}