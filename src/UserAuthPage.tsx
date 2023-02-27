import React, { useEffect, useState } from 'react'
import Login from './components/user-auth/Login'
import Signup from './components/user-auth/Signup'
import './assets/styles/reset.scss'
import './assets/styles/login.scss'
import { UserAuthContext } from './components/user-auth/UserAuthContext'

export default function UserAuthPage({ loginPage }: { loginPage: boolean }) {
  const [loginActive, setLoginActivePrivate] = useState(true)
  const [user, setUser] = useState({ email: '', password: '', fullname: '' })
  const useContextValue = { user, setUser }

  const setLoginActive = (loginStatus: boolean = true) => {
    // change URL without saving to browser history or reloading
    if (loginStatus) {
      window.history.replaceState(null, 'Login', '/login')
    } else {
      window.history.replaceState(null, 'Login', '/signup')
    }
    setLoginActivePrivate(loginStatus)
  }

  useEffect(() => {
    setLoginActive(loginPage)
  }, [])

  const pageProps = {
    header: loginActive ? 'ChatTxt Login' : 'Signup for ChatTxt',
    loginBtnClassList: `user-auth-switch-btn login ${
      loginActive ? 'selected' : ''
    }`,
    signupBtnClassList: `user-auth-switch-btn signup ${
      loginActive ? '' : 'selected'
    }`,
    shownForm: loginActive ? <Login /> : <Signup />,
  }

  return (
    <div className='user-auth'>
      <UserAuthContext.Provider value={useContextValue}>
        <div className='user-auth-dialog'>
          <h2>{pageProps.header}</h2>
          <div className='user-auth-switch'>
            <button
              className={pageProps.loginBtnClassList}
              onClick={() => setLoginActive(true)}
            >
              Login
            </button>
            <button
              className={pageProps.signupBtnClassList}
              onClick={() => setLoginActive(false)}
            >
              Signup
            </button>
          </div>
          {pageProps.shownForm}
        </div>
      </UserAuthContext.Provider>
    </div>
  )
}
