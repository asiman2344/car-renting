import React from 'react'
import './carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Car from '../assets/carImage.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function carousel() {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='car-details-image'>
                        <img src={Car} alt="car" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='car-details-image'>
                        <img src={Car} alt="car" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='car-details-image'>
                        <img src={Car} alt="car" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default carousel
