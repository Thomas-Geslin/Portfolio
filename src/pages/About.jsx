/** Page About */

import languages from '../assets/languages.png'

import { useTheme, useLanguage } from '../utils/hooks/hooks'

import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Styled components
const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`

const StyledSubtitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`

const StyledText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#666666' : '#CCCCCC')};
`


// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const revealTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const revealRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const revealLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


// JSX of the page
export default function About() {
    const { theme } = useTheme();
    const { language } = useLanguage();

    return(<div className='about' id='about'>
                {language==='french' 
                  ? <Reveal keyframes={revealTop} duration={2500} triggerOnce><StyledTitle theme={theme} className='about__title'>À propos :</StyledTitle></Reveal>
                  : <Reveal keyframes={revealTop} duration={2500} triggerOnce><StyledTitle theme={theme} className='about__title'>About :</StyledTitle></Reveal>
                }

                <div className='about__container'>
                  <Reveal keyframes={revealLeft} duration={2500} triggerOnce>
                  <div className='about__container__description'>
                    {language==='french' 
                      ? <StyledSubtitle theme={theme} className='about__container__description__title'>Un travail qui me passionne !</StyledSubtitle>
                      : <StyledSubtitle theme={theme} className='about__container__description__title'>A passion before a job !</StyledSubtitle>
                    }
                    {language==='french' 
                      ? <StyledText theme={theme} className='about__container__description__text'>Passioné depuis toujours par tout ce qui touche aux nouvelles technologies, j'ai décidé de me lancer dans le monde du développement et d'en faire mon métier.<br/>Ayant une préference certaine pour travailler sur le front-end des sites web, je me suis tourné vers le framework React, et c'est maintenant la technologie que j'utilise le plus pour réalisé mes différents projets.</StyledText>
                      : <StyledText theme={theme} className='about__container__description__text'>Always fascinated by everything related to new technologies, I decided to get into the world of development and make it my job.<br/>Having a definite preference for working on the front-end of websites, I turned to the React framework, and it is now the technology I use the most to carry out my various projects.</StyledText>
                    }
                  </div>
                  </Reveal>


                  <Reveal keyframes={reveal} duration={2500} triggerOnce className='about__container__picture'><img src={languages} alt='Illustration de la partie About' className='about__container__picture'/></Reveal>

                  <Reveal keyframes={revealRight} duration={2500} triggerOnce className='about__container__description--second'>
                  <div className='about__container__description'>
                    {language==='french'
                      ? <StyledSubtitle theme={theme} className='about__container__description__title'>Mon expérience !</StyledSubtitle>
                      : <StyledSubtitle theme={theme} className='about__container__description__title'>My experience !</StyledSubtitle>
                    }
                    {language==='french' 
                      ? <StyledText theme={theme} className='about__container__description__text'>Développeur Web diplômé depuis peu, je saurais mettre à profit mes compétences pour réaliser votre site internet, et répondre à vos besoins de la meilleure façon possible.</StyledText>
                      : <StyledText theme={theme} className='about__container__description__text'>Recently graduated web developer, I would know how to use my skills to create your website, and meet your needs in the best possible way.</StyledText>
                    }
                  </div>
                  </Reveal>
                </div>
            </div>)
}