import React, { useContext } from 'react'
import { UserAuthContext } from './UserAuthContext'

export default function Signup() {
  const auth = useContext(UserAuthContext)

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
          <button>Signup</button>
        </div>
      </form>
    </div>
  )
}
