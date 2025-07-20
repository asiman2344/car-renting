import React from 'react'
import './carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';

function carousel({ car }) {
    const carimages = car.map(el => el.slice(8))

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="mySwiper"
            >
                {
                    carimages.map((el, index) => (
                        <SwiperSlide key={index}>
                            <div className='car-details-image'>
                                <img src={`http://localhost:3000/uploads/${el}`} alt="car" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default carousel
