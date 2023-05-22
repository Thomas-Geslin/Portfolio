import React from "react";

// Link logo
import linkedin from '../assets/logo_linkedin.png'
import github from '../assets/logo_github.png'


export default function Footer() {
    return(
        <footer className="footer" id="footer">
            <p className="footer__name">© 2023 Geslin Thomas</p>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/thomas-geslin-4329a2237/" target="_blank" rel="noreferrer"><img src={linkedin} alt='Logo de Linkedin' className="footer__social__logo" /></a>
                <a href="https://github.com/Thomas-Geslin" target="_blank" rel="noreferrer"><img src={github} alt='Logo de Github' className="footer__social__logo" /></a>
            </div>
        </footer>
    )
}