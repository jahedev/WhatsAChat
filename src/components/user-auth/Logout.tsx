import React from 'react'
// TODO: create logout functionality, redirect to Login page.
export default function Logout() {
  localStorage.removeItem('token')
  return <div></div>
}
