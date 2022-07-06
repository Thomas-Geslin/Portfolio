/** GlobalStyle changing on the mode */

import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context/context'


// Styled Components
const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#191919' : 'white')};
        margin: 0;  
    }
`

export default function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}