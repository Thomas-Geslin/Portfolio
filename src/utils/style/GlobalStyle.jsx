import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context/context'

const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#191919' : 'white')};
        margin: 0 200px 0 200px;  
    }
`

export default function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}