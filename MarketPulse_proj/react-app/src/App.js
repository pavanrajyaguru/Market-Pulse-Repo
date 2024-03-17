import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Overview from './components/Overview'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {
  
  return (
    <>
    <div className='container-fluid'>


    <Router>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        
        <Route path='/' element={<Dashboard />}/>
        <Route path='/overview/:symbol' element={<Overview />}/>

      </Routes>
    </Router>
    </div>
    
   
    </>
  )
}

export default App

