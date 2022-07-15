/** Division between HomeProjects/About */
import { ParallaxBanner } from 'react-scroll-parallax';
import { useLanguage } from '../../utils/hooks/hooks';

export default function ThirdDivide() {
    const { language } = useLanguage();

    return(<ParallaxBanner layers={[{ image: 'https://static.legisocial.fr/site_media/1024/uploads/ordinateur.jpg', speed: -20 }]} className="divide divide--third" style={{ aspectRatio: '8 / 1' }}>
            <div>
                {language==='french' 
                    ? <p className="divide__text">"Du site vitrine, au e-commerce..."</p> 
                    : <p className="divide__text">"From showcase site, to e-commerce..."</p>
                }
            </div>
            </ParallaxBanner>)
}