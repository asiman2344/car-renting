import React from 'react'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import './footer.css'

function footer() {
    return (
        <div className='footer' data-aos="fade-up" data-aos-duration="1000">
            <div className='footer-container'>
                <div className='footer-container-left'>
                    <div className='footer-container-left-logo'>
                        <img src={Logo} alt="logo" />
                        <p>Premium car rental service with a wide selection of</p>
                        <p>luxury and everyday vehicles for all your driving</p>
                        <p>needs.</p>
                        <div className='footer-container-left-logo-social'>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>

                <div className='footer-container-right'>
                    <div className='footer-right-first'>
                        <h3>Quick Links</h3>
                        <Link to='/'>Home</Link>
                        <Link to='/browse'>Browse Cars</Link>
                        <Link to='/list'>List Your Car</Link>
                        <Link to='/about'>About Us</Link>
                    </div>
                    <div className='footer-right-second'>
                        <h3>RESOURCES</h3>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms & Conditions</Link>
                    </div>
                    <div className='footer-right-third'>
                        <h3>CONTACT US</h3>
                        <p>123 Main St, Anytown, USA</p>
                        <p>info@carrent.com</p>
                        <p>+123 456 7890</p>
                        <p>+123 456 7890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
