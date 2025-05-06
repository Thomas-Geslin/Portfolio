import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { PuffLoader } from "react-spinners";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import axios from 'axios';


export default function Contact() {
    // Toggle doesn't work instead of classList add/remove ??
    /* Function changing the style when we arrive on the form */
    function enterContact() {
        // Changing background style
        const background = document.getElementById('contact');
        background.classList.add('contactActive');
        // Changing title style
        const title = document.getElementById('contactTitle');
        title.classList.add('contact__title--active');
        // Changing form's text style
        const form  = document.getElementById('contactObserver');
        form.classList.add('contact__form--active');
        // Changing inputs style
        const inputs = document.querySelectorAll('.contact__form__info__field__input');
        for(let input of inputs) {
            input.classList.add('contact__form__info__field__input--active');
        }
        const message = document.querySelector('.contact__form__message__input');
        message.classList.add('contact__form__message__input--active');
        // Changing submit style
        const submit = document.querySelector('.contact__form__submit');
        submit.classList.add('contact__form__submit--active');
        const submitText = document.querySelector('.contact__form__submit__text');
        submitText.classList.add('contact__form__submit__text--active');
        // Changing footer background style
        const footer = document.getElementById('footer');
        footer.classList.add('footer--active')
    }

    /* Function changing the style when we leave the form */
    function exitContact() {
        const background = document.getElementById('contact');
        background.classList.remove('contactActive');
        const title = document.getElementById('contactTitle');
        title.classList.remove('contact__title--active');
        const form  = document.getElementById('contactObserver');
        form.classList.remove('contact__form--active');
        const inputs = document.querySelectorAll('.contact__form__info__field__input');
        for(let input of inputs) {
            input.classList.remove('contact__form__info__field__input--active');
        }
        const message = document.querySelector('.contact__form__message__input');
        message.classList.remove('contact__form__message__input--active');
        const submit = document.querySelector('.contact__form__submit');
        submit.classList.remove('contact__form__submit--active');
        const submitText = document.querySelector('.contact__form__submit__text');
        submitText.classList.remove('contact__form__submit__text--active');
        const footer = document.getElementById('footer');
        footer.classList.remove('footer--active')
    }


    useEffect(() => {
        // Intersection Obeserver for pages's postion compared with contact container
        const target = document.getElementById('contactObserver');

        const options = {
            root: document.getElementById('#contact'),
            rootMargin: '250px 0px',
            threshold: .6
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if(!entry.isIntersecting) exitContact();
                if(entry.isIntersecting) enterContact();
            })
        }, options);
        observer.observe(target);
    }, [])


    // Form handlers
    const [requestLoading, setRequestLoading] = useState(false);
    const [requestSent, setRequestSent] = useState(false);
    const [requestError, setRequestError] = useState(false);

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSubmit = async () => {
        try {
            setRequestLoading(true);

            await axios.post('https://portfolioback-sv4z.onrender.com/api/send-email', {
              first_name: getValues('firstName'),
              last_name: getValues('lastName'),
              email: getValues('email'),
              phone_number: getValues('phoneNumber'),
              message: getValues('message')
            });

            setRequestLoading(false);
            setRequestSent(true);
        } catch (error) {
            setRequestLoading(false);
            setRequestError(true);
        }
    }

    return(
        <div id="contact" className="contact">
            <h2 id="contactTitle" className="contact__title">CONTACT</h2>
            
            <form id="contactObserver" className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="contact__form__info">
                    <div className="contact__form__info__field">
                        <label className="contact__form__info__field__label">Last Name*</label>
                        <input type="text" className="contact__form__info__field__input" 
                            {...register('lastName', {
                                required: 'Veuillez rentrer votre nom.', 
                                pattern: { 
                                    value: /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/, 
                                    message: "Veuillez rentrer uniquement des lettres." 
                                }
                            })} 
                        />
                        <span className="contact__form__error">{errors.lastName?.message}</span>
                    </div>

                    <div className="contact__form__info__field">
                        <label className="contact__form__info__field__label">First Name*</label>
                        <input type="text" className="contact__form__info__field__input"
                            {...register('firstName', {
                                required: 'Veuillez rentrer votre prénom.', 
                                pattern: { 
                                    value: /^[a-zA-ZÀ-ž]+([a-zA-ZÀ-ž\s-',])+$/, 
                                    message: "Veuillez rentrer uniquement des lettres." 
                                }
                            })} 
                        />
                        <span className="contact__form__error">{errors.firstName?.message}</span>
                    </div>
                </div>


                <div className="contact__form__info">
                    <div className="contact__form__info__field">
                        <label className="contact__form__info__field__label">Email*</label>
                        <input type="text" className="contact__form__info__field__input"
                            {...register('email', {
                                required: 'Veuillez rentrer votre email.', 
                                pattern: { 
                                    // eslint-disable-next-line
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                                    message: "Veuillez rentrer une adresse mail valide." 
                                }
                            })}
                        />
                        <span className="contact__form__error">{errors.email?.message}</span>
                    </div>


                    <div className="contact__form__info__field">
                        <label className="contact__form__info__field__label">Phone Number</label>
                        <input type="text" className="contact__form__info__field__input"
                            {...register('phoneNumber', {
                                pattern: { 
                                    value: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/, 
                                    message: "Veuillez rentrer un numéro de téléphone valide." 
                                }
                            })}
                        />
                        <span className="contact__form__error">{errors.phoneNumber?.message}</span>
                    </div>
                </div>


                <div className="contact__form__message">
                    <label className="contact__form__message__label">Message*</label>
                    <textarea maxLength={240} className="contact__form__message__input"
                        {...register('message', {
                            required: 'Veuillez rentrer votre message', 
                        })}
                    />
                    <span className="contact__form__error">{errors.message?.message}</span>
                </div>


                <button type="submit" disabled={requestSent || requestError} className={`contact__form__submit ${requestLoading ? 'loading' : ''} ${requestSent ? 'sent' : ''}`}>
                        <p className="contact__form__submit__text">
                            {((!requestLoading && !requestSent && !requestError)) && 'SEND'}
                        </p>

                        <PuffLoader
                            loading={requestLoading}
                            size={18}
                            className="contact__form__submit__loader"
                        />
                        
                        {requestSent === true
                            && <DotLottieReact
                                src="https://lottie.host/cc66b4d8-aef1-4d54-a552-3d6eefb824fd/FRzb8GHdma.lottie"
                                autoplay
                                style={{ width: 300, height: 80 }}
                            />
                        }

                        {requestError === true
                            && <DotLottieReact
                                src="https://lottie.host/a120397f-5301-48f1-9cb8-2c8b7f7153e2/fbEnvFblog.lottie"
                                autoplay
                                style={{ width: 200, height: 200 }}
                            />
                        }
                </button>

                {requestLoading && <p className="contact__form__notice">Your message can take some time to be sent. <br />Please don't refresh the page</p>}

                {requestSent && <p className="contact__form__confirmation">Request delivered !</p>}

                {requestError && <p className="contact__form__error" style={{ marginBottom: 5 }}>Their has been a problem sending your request.</p>}
                {requestError && <p className="contact__form__notice" style={{ marginTop: 5 }}>Retry in a few minutes, or send me you request directly to this email : <a href="mailto:thomas.geslin31@gmail.com">thomas.geslin31@gmail.com</a></p>}

            </form>
        </div>
    )
}