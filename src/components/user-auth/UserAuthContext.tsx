import React, { createContext } from 'react'

export interface UserAuthContextType {
  user: {
    email: string
    password: string
    fullname: string
  }
  setUser: React.Dispatch<
    React.SetStateAction<{
      email: string
      password: string
      fullname: string
    }>
  >
}

export const UserAuthContext = createContext<UserAuthContextType | null>(null)
