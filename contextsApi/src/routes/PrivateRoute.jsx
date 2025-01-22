import React from 'react'
import useAuth from '../hooks/useAuth'
import Dashboard from '../pages/Dashboard'
import { useNavigate } from 'react-router'

const PrivateRoute = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  
  return isLoggedIn ? (<Dashboard/>) : navigate("/signin")
}

export default PrivateRoute
