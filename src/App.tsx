import { useState } from "react"
import { createContext } from "react"

type ThemeType = "light" | "dark"

interface ThemeContextType {
  theme: ThemeType
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
      <div className="App" id="theme">
        <ContactsArea>
          <ContactsBar>
            <SideMenu />
            <SearchBar />
          </ContactsBar>
          <ContactsList>
            <ContactItem />
            <ContactItem />
            <ContactItem />
          </ContactsList>
        </ContactsArea>
        <ChatArea>
          <ChatMenu>
            <ChatMenuInfo />
            <ChatMenuButtons />
          </ChatMenu>
          <ChatDisplay />
          <ChatMessageArea>
            <ChatMessageAttach />
            <ChatMessageInput />
            <ChatMessageButtons />
          </ChatMessageArea>
        </ChatArea>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
