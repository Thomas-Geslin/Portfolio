import React, { useEffect, useState, useRef } from "react";


export default function Separation() {
    /* Whole code handling the parallax effect on scroll */
    const ref = useRef();
    let [offset, setOffset] = useState(0);

    const handleScroll = () => {
        // Save the current element's position compared to the page's top
        const posY = ref.current.getBoundingClientRect().top;
        // Calculate the difference beetween the top of the page and the element's position
        const offsetY = window.scrollY - posY + 2000;
        // Save the value
        setOffset(offsetY);
    };

    // Move the Element when we call the function
    const parralaxRight = `translateX(${offset * 0.07}px)`;
    const parralaxLeft = `translateX(-${offset * 0.07}px)`;

    
    useEffect(() => {
        // Intersection Obeserver for parallax effect
        const target = document.getElementById('separationParallax');

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
        <div ref={ref} className="separation" id='separationParallax'>
            <div style={{ transform: parralaxRight, transition: 'transform 1s cubic-bezier(.17,.75,.67,.93)' }} className="separation__line separation__line--first">
                <p className="separation__line__text">SEO  __  UI/UX  __  FullStack  __  Design  __  SEO  __  Web Developement  __  UI/UX  __  <span className="separation__line__text--green">FullStack</span>  __  Design  __  SEO  __  Web Devlopment  __  UI/UX  __  FullStack  __  Design  __  SEO</p>
            </div>

            <div style={{ transform: parralaxLeft, transition: 'transform 1s cubic-bezier(.17,.75,.67,.93)' }} className="separation__line separation__line--second">
                <p className="separation__line__text">Sass  __  Gatsby  __NodeJS  __  JavaScript  __  <span className="separation__line__text--red">React</span>  __  Redux  __  HTML/CSS  __  Sass  __  Gatsby  __  NodeJS  __  JavaScript  __  React  __  Redux  __  HTML/CSS</p>
            </div>

            <div style={{ transform: parralaxRight, transition: 'transform 1s cubic-bezier(.17,.75,.67,.93)' }} className="separation__line separation__line--third">
                <p className="separation__line__text">Compagny Tools  __  E-Commerce  __  Compagny Tools  __  <span className="separation__line__text--purple">Showcase Website</span>  __  Branding Development  __  E-Commerce  __  Compagny Tools</p>
            </div>
        </div>
    )
}