import React, { useContext } from 'react'
import { UserAuthContext } from './UserAuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const auth = useContext(UserAuthContext)
  const navigate = useNavigate()

  const loginUser = async (e: any) => {
    const { email, password } = auth!.user

    e.preventDefault()
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await res.json()
    const errorMsg = document.querySelector<HTMLElement>('.error-msg')

    if (data.user) {
      if (errorMsg) errorMsg.innerText = ''
      localStorage.setItem('token', data.token)
      navigate('/')
    } else {
      if (errorMsg) errorMsg.innerText = 'Your email or password is invalid.'
    }
  }

  return (
    <div className='user-auth-container login'>
      <form className='login-form' action='#' method='post'>
        <div className='form-section'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='login-email'
            value={auth!.user.email}
            onChange={(e) =>
              auth!.setUser((auth) => ({ ...auth, email: e.target.value }))
            }
          />
        </div>
        <div className='form-section'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='login-password'
            value={auth!.user.password}
            onChange={(e) =>
              auth!.setUser((auth) => ({ ...auth, password: e.target.value }))
            }
          />
        </div>
        <div className='form-section'>
          <button onClick={loginUser}>Login</button>
          <p className='error-msg'></p>
        </div>
      </form>
    </div>
  )
}
