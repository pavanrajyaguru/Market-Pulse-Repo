import React, { useEffect, useState } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const userData = localStorage.getItem("authUser")
  // console.log(userData,"userData")
  
  const parsedUserData = JSON.parse(userData)
  const [user,setuser] = useState(parsedUserData);
  // setuser(parsedUserData)
  // useEffect(()=>{
  // if (userData) {
  //   // console.log(parsedUserData.name,"name")
  // }
  // },[userData,user])
  return (
    <>
      <div className='col-lg-12 mt-3'>
        <div className='row'>
          <div className='col-lg-6'>
          </div>
          <div className='col-lg-6'>
            {user ?
              <p style={{ float: 'right' }}>{user.name}</p> :
              <NavLink to="/login"><button className='btn btn-primary m-1' style={{ float: 'right' }}>Login</button></NavLink>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header