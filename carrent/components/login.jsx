import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout, login } from '../features/slicer'
import axios from 'axios'
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await axios.post('http://localhost:3000/login', { email, password });
    console.log(response.data.token);
    localStorage.setItem('token', response.data.token);
    if (response.status === 200) {
      dispatch(logout());
      window.location.reload();
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await axios.post('http://localhost:3000/signup', { name, email, password });
    console.log(response);
    if (response.status === 201) {
      setIsSignup(false);
    }
  }

  return (
    <div className={`login-container ${isLogin ? 'block' : 'hidden'}`} onClick={handleContainerClick}>
      <div className={`login-form ${isSignup ? 'z-2' : 'z-3'}`}>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input name='email' type="text" placeholder='Email' />
          <input name='password' type="password" placeholder='Password' />
          <button type='submit'>Login</button>
          <p>Don't have an account? <span onClick={()=>setIsSignup(true)}>Sign up</span></p>
        </form>
      </div>
      <div className='login-form signup-form z-2'>
        <form onSubmit={handleSignup}>
          <h1>Sign up</h1>
          <input name='name' type="text" placeholder='Name' />
          <input name='email' type="email" placeholder='Email' />
          <input name='password' type="password" placeholder='Password' />
          <button type='submit'>Sign up</button>
          <p>Already have an account? <span onClick={()=>setIsSignup(false)}>Login</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login
