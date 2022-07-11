/** Division between HomePresentation/HomeTechStack */
import { ParallaxBanner } from 'react-scroll-parallax';

export default function FirstDivide() {
    return(<ParallaxBanner layers={[{ image: 'https://wallpaperbat.com/img/219347-web-developer-wallpaper.jpg', speed: -20 }]} className="divide">
            <div>
                <p className="divide__text">"Choissisez la solution la mieux adaptée à votre projet !"</p>
            </div>
           </ParallaxBanner>)
}
