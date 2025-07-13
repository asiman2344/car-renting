import React, { useEffect } from 'react'
import './login.css'

function login() {
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='login-container'>
      <div className='login-form'>
        <form>
            <h1>Login</h1>
            <input type="text" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'>Login</button>
            <p>Don't have an account? <span>Sign up</span></p>
        </form>
      </div>
    </div>
  )
}

export default login
