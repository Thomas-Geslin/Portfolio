/** Division between HomeTechStack/HomeProjects */
import { ParallaxBanner } from 'react-scroll-parallax';

export default function SecondDivide() {
    return(<ParallaxBanner layers={[{ image: 'https://www.slidebackground.com/uploads/desk/cool-black-desk-desktop-wallpaper-backgrounds.jpg', speed: -20 }]} className="divide divide--second" style={{ aspectRatio: '8 / 1' }}>
                <div>
                    <p className="divide__text">"Développement de sites réactifs !"</p>
                </div>
            </ParallaxBanner>)
}