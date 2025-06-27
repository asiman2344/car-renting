import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './header.css'

function header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='right-side'>
          <Link className='nav-link'>Home</Link>
          <Link className='nav-link'>Cars</Link>
          <Link className='nav-link'>My Bookings</Link>
          <div className='search-bar'><input type="text" placeholder='Search' /><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <Link className='nav-link'>List Cars</Link>
          <button className='login-button'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default header
