import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './myBooks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faGasPump, faCarSide, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function myBooks() {
    const userId = localStorage.getItem('userId')
    const [myBooks, setMyBooks] = useState([])
    const [cars, setCars] = useState([])
    const [carImage, setCarImage] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const fetchMyBooks = async () => {
            const response = await axios.get(`http://localhost:3000/getMyBooks/${userId}`)
            response.data.myBooks.map((book) => {
                setMyBooks(prev => [...prev, book.product])
            })
        }
        fetchMyBooks()
    }, [])

    useEffect(() => {
        const fetchCars = () => {
            const carPromises = myBooks.map(book => {
                axios.get(`http://localhost:3000/getProductById/${book}`).then(response => {
                    setCars(prev => [...prev, response.data.car])
                    setCarImage(prev => [...prev, response.data.car.images[0].slice(8)])
                })
            })
        }
        fetchCars()
    }, [myBooks])

    return (
        <div className='my-books'>
            <div className='my-books-container'>
                <h1 className='my-books-title'>My Books</h1>
                <div className='my-books-list'>
                    {
                        cars.map((car, index) => (
                            <div className="my-books-card" onClick={() => navigate(`/car-details/${car._id}`)}>
                                <div className="my-books-card-image">
                                    <img src={`http://localhost:3000/uploads/${carImage[index]}`} alt="car" />
                                </div>
                                <div className="my-books-card-content">
                                    <div className="my-books-card-title">
                                        <p>{car?.model}</p>
                                        <p>SUV {car?.year}</p>
                                    </div>
                                    <div className="my-books-card-info1">
                                        <div className='my-books-card-info1-item'>
                                            <div><FontAwesomeIcon icon={faPerson} /> <p>{car?.seat} seats</p></div>
                                        </div>
                                        <div className='my-books-card-info1-item'>
                                            <div><FontAwesomeIcon icon={faGasPump} /> <p>{car?.fuel}</p></div>
                                        </div>
                                    </div>
                                    <div className="my-books-card-info2">
                                        <div className='my-books-card-info2-item'>
                                            <div><FontAwesomeIcon icon={faCarSide} /> <p>{car?.transmission}</p></div>
                                        </div>
                                        <div className='my-books-card-info2-item'>
                                            <div><FontAwesomeIcon icon={faLocationDot} /> <p>{car?.location}</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-books-card-price'>
                                    <p>${car?.price} <span>/ month</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default myBooks
