import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserAuthPage from './UserAuthPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Logout from './components/user-auth/Logout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<UserAuthPage loginPage={true} />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/signup' element={<UserAuthPage loginPage={false} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
