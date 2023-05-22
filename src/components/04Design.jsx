import React, { useEffect, useState, useRef } from "react";

// Pictures
import trackizer from '../assets/design01.webp'
import colorSelection from '../assets/design02.png'
import layers from '../assets/design03.png'
import colorsStyle from '../assets/design04.png'



export default function Design() {
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
    const parralaxBottom = `translateY(${offset * 0.03}px)`;
    const parralaxTop = `translateY(-${offset * 0.03}px)`;

    
    useEffect(() => {
        // Intersection Obeserver for parallax effect
        const target = document.getElementById('designParallax');

        const options = {
            root: null,
            rootMargin: '40px 0px'
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
        <div ref={ref} className="skills skills--design" id="designParallax">
            <div className="skills__illustration">
                <img src={trackizer} alt='Espace de travail de Figma' className="skills__illustration__part skills__illustration__part--trackizer" />
                <img src={colorSelection} style={{ transform: parralaxBottom, transition: 'transform 2s cubic-bezier(.17,.75,.67,.93)' }} alt='Selecteur de couleur de Figma' className="skills__illustration__part skills__illustration__part--colorSelect" />
                <img src={layers} style={{ transform: parralaxTop, transition: 'transform 1s cubic-bezier(.17,.75,.67,.93)' }} alt='Selection de layer Figma' className="skills__illustration__part skills__illustration__part--layers" />
                <img src={colorsStyle} style={{ transform: parralaxBottom, transition: 'transform .5s cubic-bezier(.17,.75,.67,.93)' }} alt='Changement de couleur de Figma' className="skills__illustration__part skills__illustration__part--colorStyle" />
            </div>


            <div className="skills__content">
                <h2 className="skills__content__title">Design</h2>
                <p className="skills__content__subtitle">The Design is also important in my work, and I always try to take the best in the ideas that are brought to me, and develop them with my inspirations to achieve the best possible result.</p>
            
                <div className="skills__content__list">
                    <span className="skills__content__list__line"></span>
                        <p className="skills__content__list__text">UX Design</p>
                    <span className="skills__content__list__line"></span>
                        <p className="skills__content__list__text">UI Design</p>
                    <span className="skills__content__list__line"></span>
                        <p className="skills__content__list__text">3D Modeling</p>
                    <span className="skills__content__list__line"></span>
                        <p className="skills__content__list__text">Branding Development</p>
                    <span className="skills__content__list__line"></span>
                </div>
            </div>
        </div>
    )
}