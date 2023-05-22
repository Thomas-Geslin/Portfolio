import React, { useState } from "react";
import { Link } from 'react-scroll'

import logo from '../assets/logo.png'



export default function Header() {
    let [activeSidenav, setActiveSidenav] = useState(false);

    // Function managing the changement between icons of the sidebar for mobile devices
    function toggleSidebarIcon() {
        if(activeSidenav === false) {   
            let number = 1;
            let bars = document.getElementsByClassName('header__side__icon');
            for (let i = bars.length - 1; i >= 0; i--){
                bars.item(i).className = `header__side__icon header__side__icon--0${number}`;
                number++;
            }
            setActiveSidenav(true);
        } else {
            let bars = document.getElementsByClassName('header__side__icon');
            for (let i = bars.length - 1; i >= 0; i--){
                bars.item(i).className = 'header__side__icon';
            }
            setActiveSidenav(false);
        }
    }

    // Function making the navigation appear on icon click for mobile devices
    function setSidebarNavigation() {
        document.getElementById('navigation').classList.toggle('header__nav--active');
        document.getElementById('sidenav').classList.toggle('header__side--active');
        document.getElementById('background').classList.toggle('header__background--active');
    }

    function changeSidebarStyle() {
        toggleSidebarIcon();
        setSidebarNavigation();
    }

    // Reset the style of everything when clicking on a nav link in mobile device header
    function resetSidebarStyle() {
        console.log('yes')
        document.getElementById('navigation').className = 'header__nav';
        document.getElementById('sidenav').className = 'header__side';
        document.getElementById('background').className = 'header__background';
    }


    return(
        <>
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt='logo' className="header__logo__asset" />
                    <p className="header__logo__name">Thomas<br></br>Geslin</p>
                </div>


                <nav className="header__nav" id="navigation">
                    <ul className="header__nav__list">
                        <Link to="about" duration={1300} smooth={true} offset={-100} onClick={() => resetSidebarStyle()} className="header__nav__list__link">About</Link>
                        <Link to="portfolio" duration={2000} smooth={true} offset={150} onClick={() => resetSidebarStyle()} className="header__nav__list__link">Work</Link>
                        <Link to="contact" duration={2500} smooth={true} offset={170} onClick={() => resetSidebarStyle()} className="header__nav__list__link--last">Contact Me</Link>
                    </ul>
                </nav>

                <div className="header__side" id="sidenav" onClick={() => changeSidebarStyle()}>
                    <div className="header__side__icon"></div>
                    <div className="header__side__icon"></div>
                    <div className="header__side__icon"></div>
                </div>
            </header>

            <div className="header__background" id="background"></div>
        </>
        
    )
}