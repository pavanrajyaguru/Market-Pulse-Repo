import React, { useState ,useEffect} from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Overview from './components/Overview'
import MainApp from './components/MainApp'
const App = () => {
  

  return (
    <>
    <div className='container-fluid'>

    <Router>
      <Routes>
        <Route path='*' element={<MainApp />}/>
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App

