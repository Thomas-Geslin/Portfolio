/** Division between HomeTechStack/HomeProjects */
import { ParallaxBanner } from 'react-scroll-parallax';
import { useLanguage } from '../../utils/hooks/hooks';

export default function SecondDivide() {
    const { language } = useLanguage();

    return(<ParallaxBanner layers={[{ image: 'https://www.slidebackground.com/uploads/desk/cool-black-desk-desktop-wallpaper-backgrounds.jpg', speed: -20 }]} className="divide divide--second" style={{ aspectRatio: '8 / 1' }}>
            <div>
                {language==='french' 
                    ? <p className="divide__text">"Développement de sites réactifs !"</p> 
                    : <p className="divide__text">"Responsive site development !"</p>
                }
            </div>
            </ParallaxBanner>)
}