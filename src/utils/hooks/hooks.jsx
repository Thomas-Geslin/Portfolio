import { useContext } from 'react'
import { ThemeContext, LanguageContext } from '../context/context'

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}

export function useLanguage() {
    const { language, toggleLanguage } = useContext(LanguageContext)
    return { language, toggleLanguage }
}