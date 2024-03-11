import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div className='container-nav'>
            <NavLink to="/login">Login</NavLink>
        
        </div>
    </>
  )
}

export default Header