import React from 'react'
import '../Style/Contact.css'
function Contact() {
    return (
        // < !-- ======= Contact Section ======= -->
        <section id="contact" class="contact" style={{ minHeight: '100vh', paddingTop:'100px' }}>
            <div class="container contact_main">

                <div class="section-title" >
                    <h3>Contact Us</h3>
                </div>

                <div class="row mt-5">

                    <div class="col-lg-4" >
                        <div class="info">
                            <div class="address">
                                <i class="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>Buddhi Vihar, Moradabad-244001, India </p>
                            </div>

                            <div class="email">
                                <i class="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>conenctwithsharmaji@gmail.com</p>
                            </div>

                            <div class="phone">
                                <i class="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+91 97561437**</p>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-8 mt-5 mt-lg-0">

                        <div class="">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            {/* <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div> */}
                            <div class="text-center my-3"><button className='msgBtn' type="submit">Send Message</button></div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="map">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13979.830798992034!2d78.73628385!3d28.84011935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692811386840!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        // End Contact Section 

    )
}

export default Contact
