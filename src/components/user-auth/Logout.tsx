import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()
  localStorage.removeItem('token')

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 250)
  }, [])
  return (
    <div>
      <h1>You are being logged out...</h1>
    </div>
  )
}
