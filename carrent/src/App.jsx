import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/header'
import Banner from '../components/banner'
import CardContainer from '../components/cardContainer.jsx'
import Banner1 from '../components/banner1.jsx'
import Customer from '../components/customer.jsx'
import Deals from '../components/deals.jsx'
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
    <Router>
      <div className="App">
        <Header />
        <Banner />
        <CardContainer />
        <Banner1 />
        <Customer />
        <Deals />
      </div>
    </Router>
  )
}

export default App
