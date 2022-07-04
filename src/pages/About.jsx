import CV from '../assets/cv.png'

import Footer from "../components/Footer"

export default function About() {
    return(<div className='about'>
                <p className='about__text'>À propos :</p>
                <img src={CV} alt='Mon CV' className='about__picture' />
                <Footer />
            </div>)
}