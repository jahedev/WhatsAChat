import { useState } from "react"
import { createContext } from "react"
import ContactsList from "./components/contacts/ContactsList"
import ContactsTop from "./components/contacts/ContactsTop"

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
        <div className="contacts-area">
          <ContactsTop />
          <ContactsList />
        </div>
        <div className="chat-area">
          
          <div className="chat-display">
            <div className="chat-display__message"></div>
            <div className="chat-display__message user-message"></div>
            <div className="chat-display__message"></div>
            <div className="chat-display__message user-message"></div>
          </div>
          <div className="chat-bottom">
            <div className="chat-bottom__attach"></div>
            <div className="chat-bottom__textarea"></div>
            <div className="chat-bottom__buttons">
              <div className="chat-bottom__buttons__emoji"></div>
              <div className="chat-bottom__buttons__voice"></div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App

/*

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

*/
