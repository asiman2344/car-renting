import React from 'react'
import { useRef, useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../features/slicer'
import './header.css'

function header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLoginClick = () => {
    if (isLogin) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  }

  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='right-side'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link className='nav-link'>Cars</Link>
          <Link className='nav-link'>My Bookings</Link>
          <div className='search-bar'><input type="text" placeholder='Search' /><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <Link className='nav-link'>List Cars</Link>
          <button className='login-button' onClick={handleLoginClick}>Login</button>
        </div>

        {/* mobile menu */}
        <button className='header-mobile-menu hidden' onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`header-mobile-menu-content hidden ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link className='nav-link'>Home</Link>
          <Link className='nav-link'>Cars</Link>
          <Link className='nav-link'>My Bookings</Link>
          <Link className='nav-link'>List Cars</Link>
          <button className='login-button' onClick={handleLoginClick}>
            {isLogin ? 'Logout' : 'Login'}
          </button>
        </div>
        {/* mobile menu */}
      </div>
    </div>
  )
}

export default header
