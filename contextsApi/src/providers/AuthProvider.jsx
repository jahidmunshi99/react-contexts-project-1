import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router';
// import { Navigate } from 'react-router';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLogIn] = useState(false)

    const handleSignOut = () => {
      setIsLogIn(false)
    }

    const handleSignIn = () => {
      navigate('/signin')
      setIsLogIn(true)   
    }
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleSignOut, handleSignIn }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
