import React, { Fragment } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Image from "../images/logo.png"
export default function Navbar() {
  const location = useLocation();
  return (
    <Fragment>
      <div className='nav'>
        <div className='image'>
          <div className='logo'>
            <img src={Image}/>
          </div>
          <div className='heading'>
            <h1>AptiLogic Pro</h1>
          </div>
        </div>
        <div className='theme1'><i class="fa-regular fa-moon"></i></div>
        <div className = 'options'>
          <ul>

           {location.pathname === '/signup' ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          )}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}
