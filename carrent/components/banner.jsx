import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BannerImage from '../assets/main_car-hpkzbezO.png'
import './banner.css'

function banner() {
    return (
        <div className='banner'>
            <div className='banner-container'>
                <div data-aos="fade-up" data-aos-delay="0" className="banner-title">
                    <h1>Luxury cars on Rent</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="250" className='banner-content'>
                    <div className='renting-date'>
                        <div className='renting-date-container'>
                            <div className='renting-date-first'>
                                <select name="" id="">
                                    <option value="">Pickup location</option>
                                    <option value="">New York</option>
                                    <option value="">Los Angeles</option>
                                    <option value="">Houston</option>
                                    <option value="">Chicago</option>
                                </select>
                                <p>Pickup Location</p>
                            </div>
                            <div className='pickup-date'>
                                <p>Pickup date</p>
                                <input type="date" />
                            </div>
                            <div className='return-date'>
                                <p>Return date</p>
                                <input type="date" />
                            </div>
                        </div>
                        <div className='search-button'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
                <img data-aos="fade-up" data-aos-delay="500" src={BannerImage} alt="banner" />
            </div>
        </div>
    )
}

export default banner
