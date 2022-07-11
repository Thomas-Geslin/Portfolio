/** Contact Page */

import { useTheme } from '../utils/hooks/hooks'

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


/* // Function that verifie if the content of the form is correct
const nameRegex = /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/;
    // eslint-disable-next-line
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkValue(value, regex, errorTagId, errorMessage, verification) {
  if(regex.test(value.value)) {
        document
            .getElementById(errorTagId)
            .innerText = '';
            verification = true;
    } else {
        document
            .getElementById(errorTagId)
            .innerText = errorMessage;
            verification = false;
    }
}

function handleSubmit(e) {
  // Get all inputs
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  let firstNameVerification = false;
  let lastNameVerification = false;
  let emailVerification = false;

  // Prevent the page to reload
  e.preventDefault();

  // Check the input values
  checkValue(firstName, nameRegex, 'firstNameError', 'Veuillez rentrer uniquement des lettres !', firstNameVerification);
  checkValue(lastName, nameRegex, 'lastNameError', 'Veuillez rentrer uniquement des lettres !', lastNameVerification);
  checkValue(email, emailRegex, 'emailError', 'Veuillez rentrer une adresse mail valide !', emailVerification);

  let formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value
  }

  if(firstNameVerification === true && lastNameVerification === true && emailVerification === true) {
    fetch('http://localhost:8000/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
    })
    .then(alert('Message Envoyé !'))
    .then()
    .catch(err => HTMLFormControlsCollection.log(err))
  } else {
    console.log(firstNameVerification, lastNameVerification, emailVerification)
    alert('Certaines des informations que vous avez renseignées ne sont pas bonnes !');
  }
} */


// JSX of the page
export default function Contact() {
  const { theme } = useTheme();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:8000/', {
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
                <StyledText theme={theme} className='contact__text'>N'hésitez pas à me contacter pour toute question : <br/><span className='contact__text contact__text--gradient'>contact.thomasgsl@gmail.com</span></StyledText>

                {/* Contact Form */}
                <form className='contact__form' onSubmit={handleSubmit(onSubmit)}>

                  <div className='contact__form__name'>
                    <div className='contact__form__name__div'>
                      <StyledInput theme={theme} type='text' placeholder='Votre nom' className='contact__form__name__div__input' id='lastName'
                        {...register('lastName', {
                          required: 'Veuillez rentrer votre nom.', 
                          pattern: { 
                            value: /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/, 
                            message: "Veuillez rentrer uniquement des lettres." 
                          }
                        })} 
                      />

                      <span className='contact__form__name__div__error' id='lastNameError'>{errors.lastName?.message}</span>
                    </div>

                    <div className='contact__form__name__div'>
                      <StyledInput theme={theme} type='text' name='name' placeholder='Votre prénom' className='contact__form__name__div__input' id='firstName'
                        {...register('firstName', {
                          required: 'Veuillez rentrer votre prénom.', 
                          pattern: { 
                            value: /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/, 
                            message: "Veuillez rentrer uniquement des lettres." 
                          }
                        })}
                      />

                      <span className='contact__form__name__div__error' id='firstNameError'>{errors.firstName?.message}</span>
                    </div>
                  </div>

                  <div className='contact__form__email'>
                    <StyledInput theme={theme} type='email' name='email' placeholder='Votre email' className='contact__form__email__input' id='email'
                      {...register('email', {
                        required: 'Veuillez rentrer votre email.', 
                        pattern: { 
                            // eslint-disable-next-line
                          value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                          message: "Veuillez rentrer une adresse mail valide." 
                        }
                      })}
                    />

                    <span className='contact__form__email__error' id='emailError'>{errors.email?.message}</span>
                  </div>

                  <div className='contact__form__message'>
                    <StyledMessage {...register('message')} theme={theme} name='message' maxLength={240} rows={8} required placeholder='Votre message' className='contact__form__message__input' id='message'/>
                    <p className='contact__form__message__advert'>Limité à 240 car.</p>
                  </div>

                  <input type='submit' value='Envoyer' className='contact__form__submit' />

                </form>
            </div>
            </Reveal>)
}