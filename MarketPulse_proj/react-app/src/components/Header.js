import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className='col-lg-12 mt-3'>
        <div className='row'>
          <div className='col-lg-6'>

          </div>
          <div className='col-lg-6'>
            <NavLink to="/login"><button className='btn btn-primary m-1' style={{float:'right'}}>Login</button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header