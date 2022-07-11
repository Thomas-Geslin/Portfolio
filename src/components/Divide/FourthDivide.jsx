/** Division between About/Contact */
import { ParallaxBanner } from 'react-scroll-parallax';

export default function FirstDivide() {
    return(<ParallaxBanner layers={[{ image: 'https://wallpaperbat.com/img/219347-web-developer-wallpaper.jpg', speed: -20 }]} className="divide divide--fourth">
            <div>
                <p className="divide__text">"Disponible pour tous vos projets !"</p>
            </div>
           </ParallaxBanner>)
}