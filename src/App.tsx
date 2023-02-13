import { useState } from "react"
import { createContext } from "react"

// type ThemeContextType = "light" | "dark"
type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme?: () => void
}

const defaultTheme: ThemeContextType = { theme: "dark" }

export const ThemeContext = createContext<ThemeContextType>(defaultTheme)

function App() {
  const [theme, setTheme] = useState(defaultTheme.theme)

  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id="theme"></div>
    </ThemeContext.Provider>
  )
}

export default App
