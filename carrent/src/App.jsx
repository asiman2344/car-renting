import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
// import Home from './Home'
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
    </div>
  )
}

export default App
