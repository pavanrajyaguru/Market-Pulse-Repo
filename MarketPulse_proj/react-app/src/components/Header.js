import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div className='container-nav'>
            <NavLink to="/login"><button>Login</button></NavLink>
        
        </div>
    </>
  )
}

export default Header