import ThemeContext from "./ThemeContext"
import { useState } from "react"

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

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
