import ThemeContext from "./ThemeContext"
import { useState, ReactNode } from "react"

interface ThemeProviderProps {
  children: ReactNode;
} 
const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<'light'|'dark'>('light')

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

  return (
    <div>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
