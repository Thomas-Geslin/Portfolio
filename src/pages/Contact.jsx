/** Contact Page */

import { useTheme, useLanguage } from '../utils/hooks/hooks'

// Import Libraries
import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useForm } from "react-hook-form"


// Keyframe for smooth reveal
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


// Styled Components
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

const StyledMessage = styled.textarea`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  &::placeholder { 
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  };
`


// JSX of the page
export default function Contact() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('https://fierce-dawn-52329.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
      .then(alert('Votre mail a bien été envoyé !'))
      .catch(err => console.log(err));
  }
    

    return (<Reveal keyframes={reveal} triggerOnce duration={2500}>
            <div className='contact' id='contact'>
                {language==='french' ? <StyledText theme={theme} className='contact__text'>N'hésitez pas à me contacter pour toute question : <br/><span className='contact__text contact__text--gradient'>contact.thomasgsl@gmail.com</span></StyledText>
                                     : <StyledText theme={theme} className='contact__text'>Feel free to contact me for any question : <br/><span className='contact__text contact__text--gradient'>contact.thomasgsl@gmail.com</span></StyledText>}

                {/* Contact Form */}
                <form className='contact__form' onSubmit={handleSubmit(onSubmit)}>

                  <div className='contact__form__name'>
                    <div className='contact__form__name__div'>
                      {language==='french' 
                        ? <StyledInput theme={theme} type='text' placeholder='Votre nom' className='contact__form__name__div__input' id='lastName'
                            {...register('lastName', {
                              required: 'Veuillez rentrer votre nom.', 
                              pattern: { 
                                value: /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/, 
                                message: "Veuillez rentrer uniquement des lettres." 
                              }
                            })} 
                          />
                        : <StyledInput theme={theme} type='text' placeholder='Your last name' className='contact__form__name__div__input' id='lastName'
                            {...register('lastName', {
                              required: 'Veuillez rentrer votre nom.', 
                              pattern: { 
                                value: /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/, 
                                message: "Veuillez rentrer uniquement des lettres." 
                              }
                            })} 
                          />
                      }
                      <span className='contact__form__name__div__error' id='lastNameError'>{errors.lastName?.message}</span>
                    </div>

                    <div className='contact__form__name__div'>
                      {language==='french'
                        ? <StyledInput theme={theme} type='text' name='name' placeholder='Votre prénom' className='contact__form__name__div__input' id='firstName'
                            {...register('firstName', {
                              required: 'Veuillez rentrer votre prénom.', 
                              pattern: { 
                                value: /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/, 
                                message: "Veuillez rentrer uniquement des lettres." 
                              }
                            })}
                          />
                        : <StyledInput theme={theme} type='text' name='name' placeholder='Your first name' className='contact__form__name__div__input' id='firstName'
                            {...register('firstName', {
                              required: 'Veuillez rentrer votre prénom.', 
                              pattern: { 
                                value: /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/, 
                                message: "Veuillez rentrer uniquement des lettres." 
                              }
                            })}
                          />
                      }
                      <span className='contact__form__name__div__error' id='firstNameError'>{errors.firstName?.message}</span>
                    </div>
                  </div>

                  <div className='contact__form__email'>
                    {language==='french' 
                      ? <StyledInput theme={theme} type='email' name='email' placeholder='Votre email' className='contact__form__email__input' id='email'
                          {...register('email', {
                            required: 'Veuillez rentrer votre email.', 
                            pattern: { 
                                // eslint-disable-next-line
                              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                              message: "Veuillez rentrer une adresse mail valide." 
                            }
                          })}
                        />
                      : <StyledInput theme={theme} type='email' name='email' placeholder='Your email' className='contact__form__email__input' id='email'
                          {...register('email', {
                            required: 'Veuillez rentrer votre email.', 
                            pattern: { 
                                // eslint-disable-next-line
                              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                              message: "Veuillez rentrer une adresse mail valide." 
                            }
                          })}
                        />
                    }
                    <span className='contact__form__email__error' id='emailError'>{errors.email?.message}</span>
                  </div>

                  <div className='contact__form__message'>
                    {language==='french'
                      ? <StyledMessage {...register('message')} theme={theme} name='message' maxLength={240} rows={8} required placeholder='Votre message' className='contact__form__message__input' id='message'/>
                      : <StyledMessage {...register('message')} theme={theme} name='message' maxLength={240} rows={8} required placeholder='Your message' className='contact__form__message__input' id='message'/>
                    }
                    <p className='contact__form__message__advert'>Limité à 240 car.</p>
                  </div>

                  {language==='french'
                    ? <input type='submit' value='Envoyer' className='contact__form__submit' />
                    : <input type='submit' value='Send' className='contact__form__submit' />
                  }

                </form>
            </div>
            </Reveal>)
}