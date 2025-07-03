import React from 'react'
import './customer.css'
import Customer from '../assets/customer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function customer() {
    return (
        <div className='customer'>
            <div className='customer-container'>
                <div className='customer-title'>
                    <h1>What Our Customer Say</h1>
                    <p>Discover why discerning travelers choose StayVenture for their luxury accommodations</p>
                    <p>around the world.</p>
                </div>
                <div className='customer-card'>
                    <div className='customer-card-item' data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                        <div className='customer-card-item-content'>
                            <div className='customer-card-item-img'>
                                <img src={Customer} alt="customer" />
                            </div>
                            <div className='customer-card-item-name'>
                                <h3>John Doe</h3>
                                <p>New York, USA</p>
                            </div>
                        </div>
                        <div className='customer-card-item-text'>
                            <div className='text-icon'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>"I've rented cars from various companies, but the experience with CarRental was exceptional."</p>
                        </div>
                    </div>

                    <div className='customer-card-item' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <div className='customer-card-item-content'>
                            <div className='customer-card-item-img'>
                                <img src={Customer} alt="customer" />
                            </div>
                            <div className='customer-card-item-name'>
                                <h3>John Doe</h3>
                                <p>New York, USA</p>
                            </div>
                        </div>
                        <div className='customer-card-item-text'>
                            <div className='text-icon'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>"I've rented cars from various companies, but the experience with CarRental was exceptional."</p>
                        </div>
                    </div>

                    <div className='customer-card-item' data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                        <div className='customer-card-item-content'>
                            <div className='customer-card-item-img'>
                                <img src={Customer} alt="customer" />
                            </div>
                            <div className='customer-card-item-name'>
                                <h3>John Doe</h3>
                                <p>New York, USA</p>
                            </div>
                        </div>
                        <div className='customer-card-item-text'>
                            <div className='text-icon'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>"I've rented cars from various companies, but the experience with CarRental was exceptional."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default customer
