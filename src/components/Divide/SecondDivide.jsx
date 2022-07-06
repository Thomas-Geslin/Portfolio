/** Division between HomeTechStack/HomeProjects */
import { ParallaxBanner } from 'react-scroll-parallax';

export default function SecondDivide() {
    return(<ParallaxBanner layers={[{ image: 'https://wallpaperbat.com/img/219347-web-developer-wallpaper.jpg', speed: -20 }]} className="divide" style={{ aspectRatio: '8 / 1' }}>
                <div>
                    <p className="divide__text">"Seconde Séparation !"</p>
                </div>
            </ParallaxBanner>)
}