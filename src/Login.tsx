import React from 'react'
import './assets/styles/reset.scss'
import './assets/styles/login.scss'

export default function Login() {
  return (
    <div className='login-page'>
      <div className='signup'>
        <form action='#' method='post'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' name='name' id='signup-name' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='signup-email' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='signup-password' />
        </form>
      </div>
      <div className='login'>
        <form action='#' method='post'>
          <div className='login-section'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='login-email' />
          </div>
          <div className='login-section'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='login-password' />
          </div>
        </form>
      </div>
    </div>
  )
}
