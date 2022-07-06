/** Division between HomePresentation/HomeTechStack */
import { ParallaxBanner } from 'react-scroll-parallax';

export default function FirstDivide() {
    return(<ParallaxBanner layers={[{ image: 'https://www.slidebackground.com/uploads/desk/cool-black-desk-desktop-wallpaper-backgrounds.jpg', speed: -20 }]} className="divide" style={{ aspectRatio: '8 / 1' }}>
            <div>
                <p className="divide__text">"Première Séparation !"</p>
            </div>
           </ParallaxBanner>)
}