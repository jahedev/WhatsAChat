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
        <div className="contacts-area">
          <div className="contacts-top">
            <div className="contacts-top__menu-button"></div>
            <div className="contacts-top__searchbar"></div>
          </div>
          <div className="contacts-list">
            <div className="contacts-list__item"></div>
            <div className="contacts-list__item contacts-selected"></div>
            <div className="contacts-list__item"></div>
          </div>
        </div>
        <div className="chat-area">
          <div className="chat-top">
            <div className="chat-top__info"></div>
            <div className="chat-top__buttons">
              <div className="chat-top__buttons__search"></div>
              <div className="chat-top__buttons__call"></div>
              <div className="chat-top__buttons__info"></div>
              <div className="chat-top__buttons__menu"></div>
            </div>
          </div>
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
