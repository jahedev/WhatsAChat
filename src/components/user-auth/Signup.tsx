import React from "react"

export default function Signup() {
  return (
    <div className="user-auth-container signup">
      <form className="login-form" action="#" method="post">
        <div className="form-section">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="signup-name" />
        </div>
        <div className="form-section">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="signup-email" />
        </div>
        <div className="form-section">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="signup-password" />
        </div>
        <div className="form-section">
          <button>Signup</button>
        </div>
      </form>
    </div>
  )
}
