import React from 'react'
import './cardContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faGasPump, faCarSide, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Car from '../assets/carImage.webp'
import Card from './card'

function cardContainer() {
  return (
    <div className='cardContainer'>
      <div className="container">
        <div className='card-title-container'>
          <h1 className='card-title'>Featured Vehicles</h1>
          <p className='card-description'>Explore our selection of premium vehicles available for your next adventure.</p>
        </div>
        <div className='card-wrapper'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default cardContainer
