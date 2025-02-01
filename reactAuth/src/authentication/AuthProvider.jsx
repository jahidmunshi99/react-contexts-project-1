import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase-config'




export const UserAuth = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(null)
    const [sucess, setSucess] = useState(null)
    const [error, setError] = useState(false)

    const userSignUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password )
    }

    useEffect(()=>{
        const currentUser = onAuthStateChanged(auth, (user) =>{
            setUser(user)
            setLoading(false)
        })
        return ()=>{
            currentUser()
        }
    }, [])

    const userData = {
        user,
        loading, 
        setLoading,
        sucess, 
        setSucess,
        error, 
        setError,
        userSignUp,
        userLogIn

    }

  return (
    <UserAuth.Provider value={userData}>
        {children}
    </UserAuth.Provider>

  )
}

export default AuthProvider