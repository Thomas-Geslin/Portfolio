/** Division between About/Contact */
import { ParallaxBanner } from 'react-scroll-parallax';
import { useLanguage } from '../../utils/hooks/hooks';

export default function FirstDivide() {
    const { language } = useLanguage();

    return(<ParallaxBanner layers={[{ image: 'https://wallpaperbat.com/img/219347-web-developer-wallpaper.jpg', speed: -20 }]} className="divide divide--fourth">
            <div>
                {language==='french' 
                    ? <p className="divide__text">"Disponible pour tous vos projets !"</p> 
                    : <p className="divide__text">"Available for all your projects !"</p>
                }
            </div>
           </ParallaxBanner>)
}