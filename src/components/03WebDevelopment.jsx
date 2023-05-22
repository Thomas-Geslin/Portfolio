import React, { useEffect, useState, useRef } from "react";

// Pictures
import coding from '../assets/development01.webp'
import phone from '../assets/development02.png'
import terminal from '../assets/development03.png'



export default function WebDevlopment() {
    /* Whole code handling the parallax effect on scroll */
    const ref = useRef();
    let [offset, setOffset] = useState(0);

    const handleScroll = () => {
        // Save the current element's position compared to the page's top
        const posY = ref.current.getBoundingClientRect().top;
        // Calculate the difference beetween the top of the page and the element's position
        const offsetY = window.scrollY - posY;
        // Save the value
        setOffset(offsetY);
    };

    // Move the Element when we call the function
    const parralaxBottom = `translateY(${offset * 0.04}px)`;
    const parralaxTop = `translateY(-${offset * 0.03}px)`;

    
    useEffect(() => {
        // Intersection Obeserver for parallax effect
        const target = document.getElementById('webParallax');

        const options = {
            root: null,
            threshold: .25,
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if(!entry.isIntersecting) window.removeEventListener('scroll', handleScroll);
                if(entry.isIntersecting) window.addEventListener('scroll', handleScroll);
            })
        }, options);
        observer.observe(target);
    }, [])
    /* */
    


    return(
        <div ref={ref} className="skills" id="webParallax">
            <div id="about" className="skills__content">
                <h2 className="skills__content__title">Development</h2>
                <p className="skills__content__subtitle">Web Development is the biggest part of my work, whether it is a simple website, or a more complex mobile application, my priority is always the satisfaction of my clients.</p>
            
                <div className="skills__content__list">
                    <span className="skills__content__list__line"></span>
                        <p className="skills__content__list__text">Web Development</p>
                    <span className="skills__content__list__line"></span>
                    <p className="skills__content__list__text">Mobile Development</p>
                    <span className="skills__content__list__line"></span>
                    <p className="skills__content__list__text">Website Build</p>
                    <span className="skills__content__list__line"></span>
                        <p className="skills__content__list__text">CMS Integration</p>
                    <span className="skills__content__list__line"></span>
                        <p className="skills__content__list__text">SEO Optimization</p>
                    <span className="skills__content__list__line"></span>
                </div>
            </div>


            <div className="skills__illustration">
                <img src={coding} alt='Espace de travail de Visual Studio' className="skills__illustration__part skills__illustration__part--coding" />
                <img src={phone} style={{ transform: parralaxBottom, transition: 'transform 1s cubic-bezier(.17,.75,.67,.93)' }} alt='Ecran de téléphone' className="skills__illustration__part skills__illustration__part--phone" />
                <img src={terminal} style={{ transform: parralaxTop, transition: 'transform 1s cubic-bezier(.17,.75,.67,.93)' }} alt='Terminal Windows' className="skills__illustration__part skills__illustration__part--terminal" />
            </div>
        </div>
    )
}