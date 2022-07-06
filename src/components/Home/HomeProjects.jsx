/** Projects Page */

// Import Pictures
import ProjectCard from "../ProjectCard"
import booki from '../../assets/booki-project.png'
import ohmyfood from '../../assets/ohmyfood-project.png'
import car from '../../assets/encar-project.png'
import shiny from '../../assets/shiny-project.png'
import kanap from '../../assets/kanap-project.png'
import groupomania from '../../assets/groupomania-project.png'

import { useTheme } from '../../utils/hooks/hooks'

// Import Libraries
import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


// Styled components
const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`

const StyledSubtitle = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#A7A7A7')};
`


// List of Projects
const projectsList = [
    {
        picture: booki,
        title: 'Booki',
        description: "Front-end d'un site de réservation de logements et de planification d'activités pour les vacances. Réalisé seulement en HTML ET CSS.",
        techStack:'HTML, CSS',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN1-Booki'
    },
    {
        picture: ohmyfood,
        title: 'Ohmyfood',
        description: "Réalisation du front-end d'un site de réservation de plats chez des restaurants. Avec des animations réalisées en CSS.",
        techStack:'HTML, CSS, Sass',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN2-Ohmyfood'
    },
    {
        picture: car,
        title: 'Encar',
        description: "Site responsive d'un concessionnaire de voitures de luxes. Avec de nombreuses animation réalisées à l'aide de JavaScript.",
        techStack:'HTML, CSS, JavaScript',
        githubLink: 'https://github.com/Thomas-Geslin/Car-Responsive-Website'
    },
    {
        picture: shiny,
        title: 'Shiny',
        description: "Site permettant de trouver des freelances en fonction de réponses à un questionnaire. Réalisé grâce au framework React.   ",
        techStack:'React, Sass',
        githubLink: 'https://github.com/Thomas-Geslin/Shiny-Agence'
    },
    {
        picture: kanap,
        title: 'Kanap',
        description: "Réalisation du lien entre le front-end et le back-end d'un site e-commerce, à l'aide de JavaScript pur (sans framework).",
        techStack:'JavaScript',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN4-Kanap'
    },
    {
        picture: groupomania,
        title: 'Groupomania',
        description: "Forum interne d'entreprise, réalisé en entièreté (Front-end + Back-end) avec le framework VueJS ainsi que NodeJS pour le back-end.",
        techStack:'VueJS, NodeJS, MySQL',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN6-Groupomania'
    }
]


// JSX of the page
export default function HomeProjects() {
    const { theme } = useTheme();

    return(<div className="homeProjects" id="projects">
                <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledTitle theme={theme} className="homeProjects__title">Projets</StyledTitle></Reveal>
                <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledSubtitle theme={theme} className="homeProjects__text">Quelques-uns des projets que j'ai réalisé jusqu'à présent</StyledSubtitle></Reveal>

                <div className="homeProjects__grid">
                    {/* Create a card for each project */}
                    {projectsList.map((project, index) => (
                        <Reveal keyframes={reveal} triggerOnce duration={2500}><ProjectCard 
                            key={`${project}-${index}`}
                            picture={project.picture}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            githubLink={project.githubLink}
                        /></Reveal>
                    ))}
                </div>
            </div>)
}