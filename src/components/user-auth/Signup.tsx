import React, { useContext } from 'react'
import { UserAuthContext } from './UserAuthContext'

export default function Signup() {
  const auth = useContext(UserAuthContext)

  const registerUser = async (e) => {
    const { email, password, fullname } = auth!.user

    e.preventDefault()
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        fullname,
      }),
    })

    const data = await res.json()
  }

  return (
    <div className='user-auth-container signup'>
      <form className='login-form' action='#' method='post'>
        <div className='form-section'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            name='name'
            id='signup-name'
            value={auth!.user.fullname}
            onChange={(e) =>
              auth!.setUser((auth) => ({ ...auth, fullname: e.target.value }))
            }
          />
        </div>
        <div className='form-section'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='signup-email'
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
            id='signup-password'
            value={auth!.user.password}
            onChange={(e) =>
              auth!.setUser((auth) => ({ ...auth, password: e.target.value }))
            }
          />
        </div>
        <div className='form-section'>
          <button onClick={registerUser}>Signup</button>
        </div>
      </form>
    </div>
  )
}
