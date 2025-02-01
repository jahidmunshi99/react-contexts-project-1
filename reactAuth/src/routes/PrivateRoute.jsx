import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router";
import { UserAuth } from '../authentication/AuthProvider'



const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const { user } = useContext(UserAuth)
    

    useEffect(()=>{
        if( !user ){
            navigate('/signin');
        }
    }, [user, navigate])

  return user ? children : null 
}

export default PrivateRoute