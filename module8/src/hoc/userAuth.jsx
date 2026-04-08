import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const userAuth = (WrapperComponent) => {
  return (props)=>{
    const navigate = useNavigate()
    const isAuth = true;
    useEffect(()=>{
        console.log("User Authenticateion", isAuth)
        if(!isAuth){
            navigate("/")
        }
    }, [isAuth, navigate])
    return isAuth ? <WrapperComponent {...props} /> : null;
  }
}

export default userAuth
