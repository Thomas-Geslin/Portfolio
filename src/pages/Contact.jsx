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

const StyledInput = styled.input`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  border-bottom: ${({ theme }) => (theme === 'light' ? '1px solid black' : '1px solid white')};
  &::placeholder { 
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  };
`

const StyledEmail = styled.textarea`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  &::placeholder { 
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  };
`


export default function Contact() {
  const { theme } = useTheme();

    return (<Reveal keyframes={reveal} triggerOnce duration={2500}>
            <div className='contact' id='contact'>
                <StyledText theme={theme} className='contact__text'>N'hésitez pas à me contacter pour toute question : <br/><span className='contact__text contact__text--gradient'>thomas.geslin31@gmail.com</span></StyledText>

                <form className='contact__form'>
                  <div className='contact__form__name'>
                    <div className='contact__form__name'>
                      <StyledInput theme={theme} type='text' name='name' placeholder='Votre nom' className='contact__form__name__input' />
                      <span id='nameError'></span>
                    </div>

                    <div className='contact__form__name'>
                      <StyledInput theme={theme} type='text' name='name' placeholder='Votre prénom' className='contact__form__name__input' />
                      <span id='nameError'></span>
                    </div>
                  </div>

                  <div className='contact__form__email'>
                    <StyledInput theme={theme} type='email' name='email' placeholder='Votre email' className='contact__form__email__input' />
                    <span id='emailError'></span>
                  </div>

                  <div className='contact__form__message'>
                    <StyledEmail theme={theme} name='message' maxLength={240} rows={8} required placeholder='Votre message' className='contact__form__message__input'></StyledEmail>
                  </div>

                  <input type='submit' value='Envoyer' className='contact__form__submit' />
                </form>
            </div>
            </Reveal>)
}