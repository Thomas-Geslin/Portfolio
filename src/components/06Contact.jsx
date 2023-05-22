import React, { useEffect } from "react";
import { useForm } from "react-hook-form"


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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://thomas-geslin.com/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(data)
        })
        .then(alert('Your email has been sent !'))
        .then(res => console.log(res))
        .then(() => window.location.reload())
        .catch(err => console.log(err));
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


                <button type="submit" className="contact__form__submit"><p className="contact__form__submit__text">SEND</p></button>
            </form>
        </div>
    )
}