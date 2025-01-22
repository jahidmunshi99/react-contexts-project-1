import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'


const useAuth = () => {
    const { isLoggedIn, handleSignOut, handleSignIn } = useContext(AuthContext)
  return { isLoggedIn, handleSignOut, handleSignIn }
}

export default useAuth;
