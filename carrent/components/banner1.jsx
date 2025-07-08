import React from 'react'
import './banner1.css'
import Img from '../assets/banner_car_image-B9uXTQkB.png'

function banner1() {
    return (
        <div className='banner1' data-aos="fade-up">
            <div className='banner1-container'>
                <div className='banner1-content'>
                    <h2>Do You Own a Luxury Car?</h2>
                    <p>Monetize your vehicle effortlessly by listing it on CarRental.</p>
                    <p>We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>
                    <div className='banner1-content-button'>
                        <button>List Your Car</button>
                    </div>
                </div>
                <div className='banner1-image' >
                    <img src={Img} alt='banner1' />
                </div>
            </div>
        </div>
    )
}

export default banner1
