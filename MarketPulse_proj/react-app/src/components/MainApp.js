import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import Overview from './Overview'
import Register from './Register'
import Login from './Login'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'
import { ToastContainer } from 'react-toastify'
import axios  from 'axios'
const MainApp = () => {
    
    return (

        <div className="container-fluid">
    <ToastContainer />

            <Header />
            <Routes>
                <Route element={<AuthRoute />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/overview/:symbol' element={<Overview />} />
                </Route>
                <Route path='*' element={<Navigate to="/login" />} />
            </Routes>
            </div>

        
    )
}

export default MainApp