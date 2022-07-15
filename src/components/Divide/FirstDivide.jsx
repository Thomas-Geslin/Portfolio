/** Division between HomePresentation/HomeTechStack */
import { ParallaxBanner } from 'react-scroll-parallax';
import { useLanguage } from '../../utils/hooks/hooks'

export default function FirstDivide() {
    const { language } = useLanguage();

    return(<ParallaxBanner layers={[{ image: 'https://wallpaperbat.com/img/219347-web-developer-wallpaper.jpg', speed: -20 }]} className="divide">
            <div>
                {language==='french' 
                    ? <p className="divide__text">"Choisissez la solution la mieux adaptée à votre projet !"</p> 
                    : <p className="divide__text">"Choose the best solution for your project !"</p>
                }
            </div>
           </ParallaxBanner>)
}
