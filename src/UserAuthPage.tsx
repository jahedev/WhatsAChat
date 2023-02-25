import React, { useState } from "react"
import Login from "./components/user-auth/Login"
import Signup from "./components/user-auth/Signup"
import "./assets/styles/reset.scss"
import "./assets/styles/login.scss"

export default function UserAuthPage() {
  const [loginActive, setLoginActive] = useState(true)

  const pageProps = {
    header: "User Login",
    loginBtnClassList: `user-auth-switch-btn login ${
      loginActive ? "selected" : ""
    }`,
    signupBtnClassList: `user-auth-switch-btn signup ${
      loginActive ? "" : "selected"
    }`,
    shownForm: loginActive ? <Login /> : <Signup />,
    submitBtnText: "Login",
  }

  return (
    <div className="user-auth">
      <div className="user-auth-dialog">
        <h2>{pageProps.header}</h2>
        <div className="user-auth-switch">
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
    </div>
  )
}
