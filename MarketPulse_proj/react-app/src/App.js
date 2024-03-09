import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
// import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Cards from "./components/Cards"
const App = () => {
  return (
    <>
    <Cards />
    <Login/>
    <Register/>

    {/* <Router>
      <Routes>
        <Route path= "/login" element={<Login />}/>
        <Route path= "/register" element={<Register />}/>
      </Routes>
    </Router> */}
    
    </>
  )
}

export default App