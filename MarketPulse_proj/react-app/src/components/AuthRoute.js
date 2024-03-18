import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const AuthRoute = () => {
  const user = localStorage.getItem("authUser")
  return !user ? <Outlet /> : <Navigate to='/login' />
}

export default AuthRoute