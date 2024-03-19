import React, { useState ,useEffect} from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Overview from './components/Overview'
import MainApp from './components/MainApp'
import axios from 'axios'
import { login } from './components/redux/actions/Actions'

import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  localStorage.getItem("authUser")
  
  const getUser = async() =>{

    try{
      const response = await axios.get('/is_login')
        console.log(response)
        dispatch(login(response.data.data))
    }
    catch(error){
        console.log(error)
    }
}
useEffect(()=>{
    getUser();
},[])

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

