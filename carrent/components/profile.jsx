import React from 'react'
import Image from '../assets/customer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import './profile.css'
import { useNavigate } from 'react-router-dom';//ececeb
function profile() {
  const navigate=useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className='profile-container'>
      <div className="profile-card">
        <div className='profile-card-image'>
          <div className='profile-card-image-container'>
            <img src={Image} alt='profile' />
          </div>
          <div className='profile-card-image-overlay'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
        <div className='profile-card-content'>
          <h1><span>Name: </span>John Doe</h1>
          <p><span>Mail: </span>john.doe@example.com</p>
          <p><span>IsAdmin:</span> isAdmin</p>
          <p><span>User created at: </span>120512</p>
        </div>
        <div className='logout-button'>
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default profile
