/** ProjectCard Component */

import github from '../assets/github.png'

import { useTheme } from '../utils/hooks/hooks'

// Import Libraries
import styled from 'styled-components'
import PropTypes from 'prop-types'


// Styled Components
const StyledContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#363636')};
  box-shadow: ${({ theme }) => (theme === 'light' ? '1px 8px 29px 0px grey' : 'none')};
`

const ProjectTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#CCCCCC')};
`

const ProjectDescription = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#666666' : '#CCCCCC')};
`

const ProjectStack = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#42446E' : '#CCCCCC')};
`


// JXS of the Cards
export default function ProjectCard({ picture, title, description, techStack, githubLink }) {
    const { theme } = useTheme();

    return(<StyledContainer theme={theme} className= 'projectCard'>
                <div className='projectCard__container'><img src={picture} alt='présentation du projet' className='projectCard__container__picture' /></div>
                <ProjectTitle theme={theme} className='projectCard__title'>{title}</ProjectTitle>
                <ProjectDescription theme={theme} className='projectCard__description'>{description}</ProjectDescription>
                <ProjectStack theme={theme} className='projectCard__stack'>Tech Stack : <span className='projectCard__stack--lighter'>{techStack}</span></ProjectStack>

                <div className='projectCard__links'>
                    <div className='projectCard__links__part'>
                        <img src={github} alt='logo de Github' className='projectCard__links__part__picture' />
                        <a href={githubLink} target='_blank' rel="noreferrer" className='projectCard__links__part__text'>View Code</a>
                    </div>
                </div>
            </StyledContainer>)
}

// Prop Types
ProjectCard.propTypes = {
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
}