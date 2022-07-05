import HomePresentation from "../components/Home/HomePresentation"
import HomeTechStack from "../components/Home/HomeTechStack"
import HomeProjects from "../components/Home/HomeProjects"

export default function Home() {
    return(<div id="home">
                <HomePresentation />
                <HomeTechStack />
                <HomeProjects />
            </div>)
}