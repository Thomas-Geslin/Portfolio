/** Projects Page */

// Import Pictures
import ProjectCard from "../ProjectCard"
import booki from '../../assets/booki-project.png'
import ohmyfood from '../../assets/ohmyfood-project.png'
import car from '../../assets/encar-project.png'
import shiny from '../../assets/shiny-project.png'
import kanap from '../../assets/kanap-project.png'
import groupomania from '../../assets/groupomania-project.png'

import { useTheme, useLanguage } from '../../utils/hooks/hooks'

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
        description: "Front-end d'un site de réservation de logements et de planification d'activités pour les vacances. Réalisé seulement en HTML et CSS.",
        techStack:'HTML, CSS',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN1-Booki'
    },
    {
        picture: ohmyfood,
        title: 'Ohmyfood',
        description: "Réalisation du front-end dynamique d'un site de réservation de plats chez des restaurants. Avec des animations réalisées en CSS.",
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
        description: "Réalisation du lien entre le front-end et l'API d'un site e-commerce. Pour intégrer de manière dynamique des élements dans les différentes pages.",
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

const projectsListEnglish = [
    {
        picture: booki,
        title: 'Booki',
        description: "Front-end of a website for booking accommodation and planning activities for the holidays. Done only in HTML and CSS.",
        techStack:'HTML, CSS',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN1-Booki'
    },
    {
        picture: ohmyfood,
        title: 'Ohmyfood',
        description: "Realization of the dynamic front-end of a website for reservate dishes at partners restaurants. With animations realized in CSS.",
        techStack:'HTML, CSS, Sass',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN2-Ohmyfood'
    },
    {
        picture: car,
        title: 'Encar',
        description: "Responsive and dynamic website of a luxury car dealership. With many animations made using JavaScript and CSS.",
        techStack:'HTML, CSS, JavaScript',
        githubLink: 'https://github.com/Thomas-Geslin/Car-Responsive-Website'
    },
    {
        picture: shiny,
        title: 'Shiny',
        description: "Website allowing you to find the best freelancers that you need based on answers to a questionnaire. Made using ReactJS.",
        techStack:'React, Sass',
        githubLink: 'https://github.com/Thomas-Geslin/Shiny-Agence'
    },
    {
        picture: kanap,
        title: 'Kanap',
        description: "Realization of the link between the front-end and the API of an e-commerce site. To dynamically insert elements into the different pages.",
        techStack:'JavaScript',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN4-Kanap'
    },
    {
        picture: groupomania,
        title: 'Groupomania',
        description: "Internal company forum, created entirely (Front-end + Back-end) with the VueJS framework as well as NodeJS for the back-end.",
        techStack:'VueJS, NodeJS, MySQL',
        githubLink: 'https://github.com/Thomas-Geslin/OC-ProjetN6-Groupomania'
    }
]


// JSX of the page
export default function HomeProjects() {
    const { theme } = useTheme();
    const { language } = useLanguage();

    return(<div className="homeProjects" id="projects">
                {language==='french'
                    ? <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledTitle theme={theme} className="homeProjects__title">Projets</StyledTitle></Reveal>
                    : <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledTitle theme={theme} className="homeProjects__title">Projects</StyledTitle></Reveal>
                }
                {language==='french'
                    ? <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledSubtitle theme={theme} className="homeProjects__text">Quelques-uns des projets que j'ai réalisé jusqu'à présent</StyledSubtitle></Reveal>
                    : <Reveal keyframes={reveal} triggerOnce duration={2500}><StyledSubtitle theme={theme} className="homeProjects__text">Some of the projects I have done so far</StyledSubtitle></Reveal>
                }

                {language==='french'
                  ? <div className="homeProjects__grid">
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
                  : <div className="homeProjects__grid">
                  {/* Create a card for each project */}
                  {projectsListEnglish.map((project, index) => (
                      <Reveal keyframes={reveal} triggerOnce duration={2500}><ProjectCard 
                          key={`${project}-${index}`}
                          picture={project.picture}
                          title={project.title}
                          description={project.description}
                          techStack={project.techStack}
                          githubLink={project.githubLink}
                      /></Reveal>
                    ))}
                </div>}
            </div>)
}