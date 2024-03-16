import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Overview from './components/Overview'
const App = () => {
  
  return (
    <>
    <div className='container-fluid'>


    <Router>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        
        <Route path='/' element={<Dashboard />}/>
        <Route path='/overview' element={<Overview />}/>

      </Routes>
    </Router>
    </div>
    
    {/* <Router>
    <Header />
      <Routes>
        <AuthRoute path="/login" element={<Login/>} isAuthenticated = {isAuthenticated()} fallback="/"/>
        <AuthRoute path="/register" element={<Register/>} isAuthenticated = {isAuthenticated()} fallback="/"/>
        <ProtectedRoute path="/" element={<Cards />} isAuthenticated = {isAuthenticated()} fallback="/login"/>
      </Routes>
    </Router> */}
    
    </>
  )
}

export default App