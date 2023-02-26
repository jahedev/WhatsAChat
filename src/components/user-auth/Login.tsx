import React, { useContext } from 'react'
import { UserAuthContext } from './UserAuthContext'

export default function Login() {
  // const [user, setUser] = useState({ email: '', password: '' })
  const auth = useContext(UserAuthContext)

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
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}
