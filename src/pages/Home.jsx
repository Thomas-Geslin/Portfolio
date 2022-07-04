import HomePresentation from "../components/Home/HomePresentation"
import HomeTechStack from "../components/Home/HomeTechStack"
import HomeProjects from "../components/Home/HomeProjects"
import Footer from "../components/Footer"

export default function Home() {
    return(<div>
                <HomePresentation />
                <HomeTechStack />
                <HomeProjects />
                <Footer />
            </div>)
}