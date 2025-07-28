import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../features/slicer'
import './header.css'
import { toast } from 'react-toastify'

function header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const navigate = useNavigate()
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

  const handleMyBooks = () => {
    if (!token) {
      toast.error('Log in for bookings', { autoClose: 1000, position: "top-center" })
    }else{
      navigate('/my-books')
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
          <button className='myBooks' onClick={handleMyBooks}>My Bookings</button>
          <div className='search-bar'><input type="text" placeholder='Search' /><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <Link to="/list-cars" className='nav-link'>List Cars</Link>
          <button className={`login-button ${token ? 'hidden' : ''}`} onClick={handleLoginClick}>Login</button>
          <button onClick={() => navigate('/profile')} className={`profil-button ${token ? '' : 'hidden'}`}>
            <FontAwesomeIcon icon={faUser} /> Profile
          </button>
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
