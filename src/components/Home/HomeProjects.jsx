import ProjectCard from "../ProjectCard"
import background from '../../assets/project_background.png'
import booki from '../../assets/Booki.png'
import ohmyfood from '../../assets/ohmyfood.jpg'
import car from '../../assets/car-background.png'
import groupomania from '../../assets/groupomania.png'

import { useTheme } from '../../utils/hooks/hooks'

import styled from 'styled-components'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


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


const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`

const StyledSubtitle = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#A7A7A7')};
`


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
        picture: background,
        title: 'Shiny',
        description: "Site permettant de trouver des freelances en fonction de réponses à un questionnaire.   ",
        techStack:'React, Sass',
        githubLink: 'https://github.com/Thomas-Geslin/Shiny-Agence'
    },
    {
        picture: background,
        title: 'Hot Takes',
        description: "Création d'une API REST complète pour un site de notation, ainsi que de la BDD liée. Réalisé avec le framework Express et MongoDB.",
        techStack:'NodeJS, Express, MongoDB',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN5-HotTakes'
    },
    {
        picture: groupomania,
        title: 'Groupomania',
        description: "Forum interne d'entreprise, réalisé en entièreté (Front-end + Back-end) avec le framework VueJS ainsi que NodeJS pour le back-end.",
        techStack:'VueJS, NodeJS, MySQL',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN6-Groupomania'
    }
]

export default function HomeProjects() {
    const { theme } = useTheme();

    return(<div className="homeProjects" id="projects">
                <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledTitle theme={theme} className="homeProjects__title">Projets</StyledTitle></Reveal>
                <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledSubtitle theme={theme} className="homeProjects__text">Projets que j'ai réalisé jusqu'à présent</StyledSubtitle></Reveal>

                <div className="homeProjects__grid">
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