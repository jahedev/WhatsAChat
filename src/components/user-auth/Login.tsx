import React from "react"

export default function Login() {
  return (
    <div className="user-auth-container login">
      <form className="login-form" action="#" method="post">
      <div className="form-section">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="login-email" />
        </div>
        <div className="form-section">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="login-password" />
        </div>
        <div className="form-section">
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}
