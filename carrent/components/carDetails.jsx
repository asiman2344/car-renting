import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPerson, faGasPump, faCarSide, faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons'
import Car from '../assets/carImage.webp'
import './carDetails.css'

function carDetails() {
    return (
        <div className='car-details-head'>
            <div className='car-details-container'>
                <Link className='car-details-link' to="/"><FontAwesomeIcon icon={faArrowLeft} />Back to Home</Link>
                <div className='car-details-wrapper'>
                    <div className='car-details-content'>
                        <div className='car-details-image'>
                            <img src={Car} alt="car" />
                        </div>
                        <div className='car-details-info'>
                            <div className='car-details-info-title'>
                                <h1>Toyota Camry</h1>
                                <p>SUV 2016</p>
                            </div>
                            <div className='car-details-info-description'>
                                <div className='car-details-info-description-wrapper'>
                                    <div className='car-details-info-description-item'>
                                        <FontAwesomeIcon icon={faPerson} />
                                        <p>4 seats</p>
                                    </div>
                                    <div className='car-details-info-description-item'>
                                        <FontAwesomeIcon icon={faGasPump} />
                                        <p>Hybrid</p>
                                    </div>
                                    <div className='car-details-info-description-item'>
                                        <FontAwesomeIcon icon={faCarSide} />
                                        <p>Automatic</p>
                                    </div>
                                    <div className='car-details-info-description-item'>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <p>4 seats</p>
                                    </div>
                                </div>
                                <div className='car-details-info-description-text'>
                                    <h2>Description</h2>
                                    <p>The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.</p>
                                </div>
                                <div className='car-details-info-features'>
                                    <h2>Features</h2>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCheck} />360 camera</li>
                                        <li><FontAwesomeIcon icon={faCheck} />360 camera</li>
                                        <li><FontAwesomeIcon icon={faCheck} />360 camera</li>   
                                        <li><FontAwesomeIcon icon={faCheck} />360 camera</li>
                                        <li><FontAwesomeIcon icon={faCheck} />360 camera</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='car-details-info-right'>
                        <div className='car-details-price'>
                            <div className='car-details-price-item'>
                                <p>$1000</p>
                                <span>per day</span>
                            </div>
                            <div className='car-details-date'>
                                <div className='car-details-date-title'>
                                    <p>Pickup Date</p>
                                </div>
                                <input type="date" />
                            </div>
                            <div className='car-details-date'>
                                <div className='car-details-date-title'>
                                    <p>Return Date</p>
                                </div>
                                <input type="date" />
                            </div>
                            <div className='car-details-button'>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default carDetails
