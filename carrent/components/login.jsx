import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/slicer'
import './login.css'

function Login() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    if (isLogin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLogin]);

  const handleContainerClick = (e) => {
    if (e.target.className.includes('login-container')) {
      dispatch(logout());
    }
  };

  return (
    <div className={`login-container ${isLogin ? 'block' : 'hidden'}`} onClick={handleContainerClick}>
      <div className={`login-form ${isSignup ? 'z-2' : 'z-3'}`}>
        <form>
          <h1>Login</h1>
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button type='submit'>Login</button>
          <p>Don't have an account? <span onClick={()=>setIsSignup(true)}>Sign up</span></p>
        </form>
      </div>
      <div className='login-form signup-form z-2'>
        <form>
          <h1>Sign up</h1>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button type='submit'>Sign up</button>
          <p>Already have an account? <span onClick={()=>setIsSignup(false)}>Login</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login
