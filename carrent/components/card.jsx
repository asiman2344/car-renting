import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faGasPump, faCarSide, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Car from '../assets/carImage.webp'
import { useNavigate } from 'react-router-dom'

function card({car}) {
    const navigate = useNavigate()
    const carImage = car.images[0].slice(8);
    console.log(carImage, 'carImage')
    return (
        <div onClick={() => navigate(`/car-details/${car._id}`)} className="card">
            <div className="card-image">
                <img src={`http://localhost:3000/uploads/${carImage}`} alt="car" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <p>{car.model}</p>
                    <p>SUV {car.year}</p>
                </div>
                <div className="card-info1">
                    <div className='card-info1-item'>
                        <div><FontAwesomeIcon icon={faPerson} /> <p>{car.seat} seats</p></div>
                    </div>
                    <div className='card-info1-item'>
                        <div><FontAwesomeIcon icon={faGasPump} /> <p>{car.fuel}</p></div>
                    </div>
                </div>
                <div className="card-info2">
                    <div className='card-info2-item'>
                        <div><FontAwesomeIcon icon={faCarSide} /> <p>{car.transmission}</p></div>
                    </div>
                    <div className='card-info2-item'>
                        <div><FontAwesomeIcon icon={faLocationDot} /> <p>{car.location}</p></div>
                    </div>
                </div>
                <div className='add-to-book'>
                    <button>Add to Book</button>
                </div>
            </div>
            <div className='card-price'>
                <p>${car.price} <span>/ month</span></p>
            </div>

            <p className='available'>Available Now</p>
        </div>
    )
}

export default card
