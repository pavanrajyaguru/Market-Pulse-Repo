 import React from 'react'
 import { Navigate,Outlet } from 'react-router-dom'
 import { useSelector } from 'react-redux'
 const ProtectedRoute = () => {
  const user = localStorage.getItem("authUser")
  // const user = useSelector(state => state.auth.user)
  console.log(user,"state.auth.user.protected")
    return user ? <Outlet /> : <Navigate to="/login" />
  
 }
 
 export default ProtectedRoute