import Footer from '../components/Footer'

import { useTheme } from '../utils/hooks/hooks'

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


const StyledText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`


export default function Contact() {
  const { theme } = useTheme();

    return (<Reveal keyframes={reveal} triggerOnce duration={2500}><div className='contact'>

                <StyledText theme={theme} className='contact__text'>N'hésitez pas à me contacter pour toute question : <br/><span className='contact__text contact__text--gradient'>thomas.geslin31@gmail.com</span></StyledText>

                <Footer />
            </div></Reveal>)
}