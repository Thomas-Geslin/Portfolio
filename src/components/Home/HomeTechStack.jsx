import htmlLogo from '../../assets/html.png'
import cssLogo from '../../assets/css.png'
import jsLogo from '../../assets/js.png'
import reactLogo from '../../assets/react.png'
import sassLogo from '../../assets/sass.png'
import gitLogo from '../../assets/git-icon.png'
import githubLogo from '../../assets/github.png'
import vueLogo from '../../assets/vue.png'
import nodeLogo from '../../assets/node.png'
import dockerLogo from '../../assets/docker.png'

import { useTheme } from '../../utils/hooks/hooks'

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


const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`

const StyledSubtitle = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#A7A7A7')};
`


export default function HomeTechStack() {
  const { theme } = useTheme();

    return(<div className='homeTechStack' id='stacks'>
                <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledTitle theme={theme} className='homeTechStack__title'>My Tech Stack</StyledTitle></Reveal>
                <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledSubtitle className='homeTechStack__text'>Technologies avec lesquelles j'ai travaillé récemment</StyledSubtitle></Reveal>

                <div className='homeTechStack__grid'>
                    <Reveal keyframes={reveal} triggerOnce duration={2500}><img src={htmlLogo} alt='Logo HTML' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={100}><img src={cssLogo} alt='Logo CSS' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={200}><img src={jsLogo} alt='Logo JavaScript' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={300}><img src={reactLogo} alt='Logo de Sass' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={400}><img src={vueLogo} alt='Logo de GitHub' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={500}><img src={nodeLogo} alt='Logo de GitHub' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={600}><img src={sassLogo} alt='Logo de Git' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={700}><img src={gitLogo} alt='Logo de Git' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={800}><img src={githubLogo} alt='Logo de GitHub' className='homeTechStack__grid__icon' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={2500} delay={900}><img src={dockerLogo} alt='Logo de GitHub' className='homeTechStack__grid__icon' /></Reveal>
                </div>
            </div>)
}