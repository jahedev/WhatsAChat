import { useState } from 'react'
import { createContext } from 'react'
import ChatBottom from './components/chat/ChatBottom'
import ChatDisplay from './components/chat/ChatDisplay'
import ChatDisplayMessage from './components/chat/ChatDisplayMessage'
import ChatTop from './components/chat/ChatTop'
import ContactsList from './components/contacts/ContactsList'
import ContactsTop from './components/contacts/ContactsTop'
import './assets/styles/reset.scss'
import './assets/styles/style.scss'
import MaterialButton, {
  ButtonType as BT,
} from './components/common/MaterialButton'

type ThemeType = 'light-theme' | 'dark-theme'

interface ThemeContextType {
  theme: ThemeType
  toggleTheme?: () => void
}

const defaultTheme: ThemeContextType = { theme: 'dark-theme' }

export const ThemeContext = createContext<ThemeContextType>(defaultTheme)

function App() {
  const [theme, setTheme] = useState(defaultTheme.theme)

  const toggleTheme = () => {
    setTheme(theme == 'dark-theme' ? 'light-theme' : 'dark-theme')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <div className='contacts'>
          <ContactsTop />
          <ContactsList />
        </div>
        <div className='chat'>
          <ChatTop
            recipientName='Firstname Lastname'
            activityStatus='last seen 8 minutes ago'
          />
          <ChatDisplay>
            <ChatDisplayMessage message='Hey' />
            <ChatDisplayMessage message="What's up?" isUser={true} />
            <ChatDisplayMessage message='I think I left my phone at your place...' />
            <ChatDisplayMessage
              message="No worries, I'll go check"
              isUser={true}
            />
            <ChatDisplayMessage message="I didn't find it." isUser={true} />
          </ChatDisplay>
          <ChatBottom>
            <div className='chat-bottom__attach'>
              <MaterialButton buttonType={BT.ATTACH} />
            </div>
            <div className='chat-bottom__textarea'>
              <input
                type='text'
                name='message-input'
                placeholder='Type a message...'
                id='message-input'
              />
            </div>
            <div className='chat-bottom__buttons'>
              <div className='chat-bottom__buttons__emoji'>
                <MaterialButton buttonType={BT.EMOJI} />
              </div>
              <div className='chat-bottom__buttons__voice'>
                <MaterialButton buttonType={BT.VOICE} />
              </div>
            </div>
          </ChatBottom>
        </div>
        {/* <button onClick={() => toggleTheme()}>Change Theme</button> */}
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
