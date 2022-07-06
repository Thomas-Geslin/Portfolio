import HomePresentation from "../components/Home/HomePresentation"
import FirstDivide from "../components/Divide/FirstDivide"
import SecondDivide from "../components/Divide/SecondDivide"
import ThirdDivide from "../components/Divide/ThirdDivide"
import HomeTechStack from "../components/Home/HomeTechStack"
import HomeProjects from "../components/Home/HomeProjects"

export default function Home() {
    return(<div id="home">
                <HomePresentation />
                <FirstDivide />
                <HomeTechStack />
                <SecondDivide />
                <HomeProjects />
                <ThirdDivide />
            </div>)
}