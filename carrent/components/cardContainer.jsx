import React from 'react'
import './cardContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './card'
import { useSelector } from 'react-redux'

function cardContainer() {
  const [cars, setCars] = useState([])
  const searchQuery=useSelector((state)=>state.login.searchQuery);

  useEffect(() => {
    let url = 'http://localhost:3000/getProducts';
    if (searchQuery !== '') {
      url += `/?model=${encodeURIComponent(searchQuery)}`;
    }
    axios.get(url)
      .then(res => {
        console.log(res.data.cars, 'res.data')
        setCars(res.data.cars)
      })
      .catch(err => console.log(err))
  }, [searchQuery])

  return (
    <div className='cardContainer'>
      <div className="container">
        <div className='card-title-container' data-aos="fade-up">
          <h1 className='card-title'>Featured Vehicles</h1>
          <p className='card-description'>Explore our selection of premium vehicles available for your next adventure.</p>
        </div>
        <div className='card-wrapper' data-aos="fade-up" data-aos-delay="100">
          {cars.map((car) => (
            <Card key={car._id} car={car} />
          ))}
        </div>
        <div className='card-button-container'>
          <button className='card-button'>View All Cars<FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
  )
}

export default cardContainer
