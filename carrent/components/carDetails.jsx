import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPerson, faGasPump, faCarSide, faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons'
import Car from '../assets/carImage.webp'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './carDetails.css'
import Carousel from './carousel'

function carDetails() {
    const { id } = useParams()
    const [car, setCar] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/getProductById/${id}`)
            .then(res => {
                console.log(res.data.car, 'dataaaaa')
                setCar(res.data.car)
            })
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {car && (
                <div className='car-details-head'>
                    <div className='car-details-container'>
                        <Link className='car-details-link' to="/"><FontAwesomeIcon icon={faArrowLeft} />Back to Home</Link>
                        <div className='car-details-wrapper'>
                            <div className='car-details-content'>
                                <Carousel car={car.images} />
                                <div className='car-details-info'>
                                    <div className='car-details-info-title'>
                                        <h1>{car.model}</h1>
                                        <p>SUV {car.year}</p>
                                    </div>
                                    <div className='car-details-info-description'>
                                        <div className='car-details-info-description-wrapper'>
                                            <div className='car-details-info-description-item'>
                                                <FontAwesomeIcon icon={faPerson} />
                                                <p>{car.seat} seats</p>
                                            </div>
                                            <div className='car-details-info-description-item'>
                                                <FontAwesomeIcon icon={faGasPump} />
                                                <p>{car.fuel}</p>
                                            </div>
                                            <div className='car-details-info-description-item'>
                                                <FontAwesomeIcon icon={faCarSide} />
                                                <p>{car.transmission}</p>
                                            </div>
                                            <div className='car-details-info-description-item'>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                                <p>{car.location}</p>
                                            </div>
                                        </div>
                                        <div className='car-details-info-description-text'>
                                            <h2>Description</h2>
                                            <p>{car.description}</p>
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
                                        <p>${car.price}</p>
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
            )}
        </>
    )
}

export default carDetails
