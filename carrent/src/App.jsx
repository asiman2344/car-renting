import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Login from '../components/login'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease'
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <Login />
    </div>
  )
}

export default App
