import { useContext } from 'react'
import { ThemeContext } from '../utils/context/context'

export default function DarkModeButton() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    return(<div>
                <button onClick={() => toggleTheme()} className='darkButton'>{theme === 'light' ? '🌙' : '☀️'}</button>
            </div>)
}