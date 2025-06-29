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
          {/* <div className="card">
            <div className="card-image">
              <img src={Car} alt="car" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <p>Toyota Fortuner</p>
                <p>SUV 2016</p>
              </div>
              <div className="card-info1">
                <div className='card-info1-item'>
                  <div><FontAwesomeIcon icon={faPerson} /> <p>4 seats</p></div>
                </div>
                <div className='card-info1-item'>
                  <div><FontAwesomeIcon icon={faGasPump} /> <p>Hybrid</p></div>
                </div>
              </div>
              <div className="card-info2">
                <div className='card-info2-item'>
                  <div><FontAwesomeIcon icon={faCarSide} /> <p>Manual</p></div>
                </div>
                <div className='card-info2-item'>
                  <div><FontAwesomeIcon icon={faLocationDot} /> <p>New York</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={Car} alt="car" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <p>Toyota Fortuner</p>
                <p>SUV 2016</p>
              </div>
              <div className="card-info1">
                <div className='card-info1-item'>
                  <div><FontAwesomeIcon icon={faPerson} /> <p>4 seats</p></div>
                </div>
                <div className='card-info1-item'>
                  <div><FontAwesomeIcon icon={faGasPump} /> <p>Hybrid</p></div>
                </div>
              </div>
              <div className="card-info2">
                <div className='card-info2-item'>
                  <div><FontAwesomeIcon icon={faCarSide} /> <p>Manual</p></div>
                </div>
                <div className='card-info2-item'>
                  <div><FontAwesomeIcon icon={faLocationDot} /> <p>New York</p></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default cardContainer
