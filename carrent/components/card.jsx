import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faGasPump, faCarSide, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function card({car}) {
    const navigate = useNavigate()
    const carImage = car.images[0].slice(8);

    const addBook = async () => {
        const userId = localStorage.getItem('userId')
        await axios.post(`http://localhost:3000/addCarToMyBooks/${userId}/${car._id}`).then(res=>{
            toast.success('Car added to your books',{autoClose: 1000,position: "top-center"})
        }).catch(err=>{
            console.log(err, 'err')
            toast.error('Car already in your books',{autoClose: 1000,position: "top-center"})
        })
    }
    
    return (
        <div  className="card" onClick={() => navigate(`/car-details/${car._id}`)}>
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
                    <button
                      className='add-to-book-button'
                      onClick={e => {
                        e.stopPropagation();
                        addBook();
                      }}
                    >
                      Add to Book
                    </button>
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
