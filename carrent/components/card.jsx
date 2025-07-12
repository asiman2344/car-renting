import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faGasPump, faCarSide, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Car from '../assets/carImage.webp'
import { useNavigate } from 'react-router-dom'

function card() {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/car-details')} className="card">
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
            <div className='card-price'>
                <p>$1000 <span>/ month</span></p>
            </div>

            <p className='available'>Available Now</p>
        </div>
    )
}

export default card
