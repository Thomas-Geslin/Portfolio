/** Division between HomeProjects/About */
import { ParallaxBanner } from 'react-scroll-parallax';

export default function ThirdDivide() {
    return(<ParallaxBanner layers={[{ image: 'https://static.legisocial.fr/site_media/1024/uploads/ordinateur.jpg', speed: -20 }]} className="divide divide--third" style={{ aspectRatio: '8 / 1' }}>
                <div>
                    <p className="divide__text">"Du site vitrine, au e-commerce..."</p>
                </div>
            </ParallaxBanner>)
}