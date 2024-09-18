import React from 'react'
import '../Style/Footer.css'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
function Footer() {
    return (
        <>
            {/* <div className='foot'>
                <div className="container foot-in">
                    <p>Copyright © 2023 CodeWithSharmaJi.com</p>
                    <div className="f-icons">
                        <FaInstagram className='sf-icon' />
                        <FaFacebook className='sf-icon' />
                        <FaYoutube className='sf-icon' />
                        <FaLinkedin className='sf-icon' />
                    </div>
                </div>
            </div> */}



            <div class="footer__area">
                <div class="container">
                    <div class="row" style={{ padding: '5rem 3rem' }}>
                        <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
                            <div class="footer__area-widget">
                                <div class="footer-about">
                                    <div class="footer__area-widget-about-logo">
                                        {/* <Link to="index.html"><img src="assets/img/logo.png" alt="" /></Link> */}
                                        <h3>About Us</h3>
                                    </div>
                                    <p>Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus</p>
                                    <div class="footer-social">
                                        <ul>
                                            <li><Link to="#"><FaInstagram className='sf-icon' /></Link>
                                            </li>
                                            <li><Link to="#"><FaFacebook className='sf-icon' /></Link>
                                            </li>
                                            <li><Link to="#"><FaYoutube className='sf-icon' /></Link>
                                            </li>
                                            <li><Link to="#"><FaLinkedin className='sf-icon' /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
                            <div class="footer__area-widget">
                                <h5>Information</h5>
                                <div class="footer__area-widget-contact">
                                    <div class="footer__area-widget-contact-item">
                                        <div class="footer__area-widget-contact-item-icon">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div class="footer__area-widget-contact-item-content">
                                            <span><Link to="#">Buddhi Vihar, Moradabad-244001, India</Link></span>
                                        </div>
                                    </div>
                                    <div class="footer__area-widget-contact-item">
                                        <div class="footer__area-widget-contact-item-icon">
                                            <i class="fa-regular fa-envelope"></i>
                                        </div>
                                        <div class="footer__area-widget-contact-item-content">
                                            <span><Link to="mailto:help.info@gamil.com">connectwithsharmaji@gmail.com</Link></span>
                                        </div>
                                    </div>
                                    <div class="footer__area-widget-contact-item">
                                        <div class="footer__area-widget-contact-item-icon">
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div class="footer__area-widget-contact-item-content">
                                            <span><Link to="tel:">+91 97561 437**</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
                            <div class="footer__area-widget">
                                <h5>Top Links</h5>
                                <div class="footer__area-widget-menu">
                                    <ul>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/projects'>Projects</Link></li>
                                        <li><Link to='/templates'>Templates</Link></li>
                                        <li><Link to='/'>Components</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-7 col-sm-8">
                            <div class="footer__area-widget">
                                <h5>Useful Links</h5>
                                <div class="footer__area-widget-information">
                                    <ul>
                                        <li><Link to='/'>Terms & Conditions</Link></li>
                                        <li><Link to='/projects'>Services</Link></li>
                                        <li><Link to='/templates'>Testimonials</Link></li>
                                        <li><Link to='/'>Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__area">

                    <div class="container ">
                        <p>Copyright © 2024 <Link to="/">CodeWithSharmaJi</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
