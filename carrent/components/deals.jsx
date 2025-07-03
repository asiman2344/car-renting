import React from 'react'
import './deals.css'

function deals() {
  return (
    <div className='deals'>
      <div className='deals-container'>
        <div className='deals-title'>
          <h1>Never Miss a Deal!</h1>
          <p>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
        </div>
        <div className='deals-form'>
            <div className='deals-form-input'>
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className='deals-form-button'>
                <button>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default deals
