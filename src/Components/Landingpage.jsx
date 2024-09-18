import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import pic from '../Images/photo.jpg'
// import { Button } from 'react-bootstrap';
import Card from '.././Pages/Template/Card';
import TempFilterApi from './TempFilterApi';

// Import CSS
import '../Style/Landing.css'
import Contact from './Contact';
// import TemplateFilter from '../Pages/Template/TemplateFilter';
import bannerimg from '../Images/svg/banner shape.svg'
import BlogCard from '../Pages/Blogs/BlogCard'

const Landingpage = () => {

    const [templateData, settemplateData] = useState(TempFilterApi)

    return (

        <>

            <div className="banner">
                <img className='bannerimg' src={bannerimg} alt="banner img" />
                <div className="container banner_text">
                    <h1>Design Made Easy!</h1>
                    <h1>Get Inspired and Customize with Our Beautiful Templates!</h1>
                    <p>Welcome to CodeWithSharmaJi, your ultimate destination for stunning templates! Discover a world of creativity with our professionally designed templates that cater to all your needs. Whether you're a business owner, a student, or a creative professional, we've got the perfect template for you.</p>
                </div>
            </div>
            <Container>
                <div className="my-4 py-4">

                    <h3 className='text-center my-4'>Unleash Your Creative Vision with Our Stunning Templates!</h3>
                    <p className='text-center my-4'>Welcome to our template paradise, where creativity knows no bounds. Elevate your projects with our meticulously crafted templates that effortlessly transform your ideas into stunning realities. Whether you're a seasoned designer or just starting your creative journey, our diverse collection promises to inspire and empower, making your design process a breeze.</p>
                    <Row className='pt-4'>
                        <Col className='lnd-col'>

                            {/* <TemplateFilter /> */}
                            <Card templateData={templateData} settemplateData={settemplateData} />
                        </Col>
                    </Row>




                </div>

                {/* <div className="container"> */}

                <h3 className='text-center  mt-4'>Recent Blogs</h3>
                <p className='text-center mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, aperiam?</p>


                {/* <svg width="238" height="531" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="422.819" y="-70.8145" width="196" height="541.607" rx="2" transform="rotate(51.2997 422.819 -70.8145)" fill="url(#paint0_linear_83:2)"></rect><rect opacity="0.3" x="426.568" y="144.886" width="59.7544" height="541.607" rx="2" transform="rotate(51.2997 426.568 144.886)" fill="url(#paint1_linear_83:2)"></rect><defs><linearGradient id="paint0_linear_83:2" x1="517.152" y1="-251.373" x2="517.152" y2="459.865" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_83:2" x1="455.327" y1="-35.673" x2="455.327" y2="675.565" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient></defs>
                </svg>



                <svg width="279" height="106" viewBox="0 0 279 106" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373" stroke="url(#paint0_linear_72:302)"></path><path d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373" stroke="url(#paint1_linear_72:302)"></path><path d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373" stroke="url(#paint2_linear_72:302)"></path><path d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373" stroke="url(#paint3_linear_72:302)"></path></g><defs><linearGradient id="paint0_linear_72:302" x1="256.267" y1="53.6717" x2="-40.8688" y2="8.15715" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7"></stop></linearGradient><linearGradient id="paint1_linear_72:302" x1="256.267" y1="42.6717" x2="-40.8688" y2="-2.84285" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7"></stop></linearGradient><linearGradient id="paint2_linear_72:302" x1="256.267" y1="64.6717" x2="-40.8688" y2="19.1572" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7"></stop></linearGradient><linearGradient id="paint3_linear_72:302" x1="256.267" y1="76.6717" x2="-40.8688" y2="31.1572" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7"></stop></linearGradient></defs>
                </svg> */}

                {/* <svg width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" fill="url(#paint0_linear_94:889)"></rect><rect x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" stroke="url(#paint1_linear_94:889)" stroke-width="0.7"></rect><path opacity="0.3" d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z" fill="url(#paint2_linear_94:889)"></path><path d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z" stroke="url(#paint3_linear_94:889)" stroke-width="0.7"></path><path opacity="0.3" d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z" fill="url(#paint4_linear_94:889)"></path><path d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z" stroke="url(#paint5_linear_94:889)" stroke-width="0.7"></path><defs><linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient><linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient><linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient></defs></svg> */}

                <BlogCard />

                <Contact />
                {/* </div> */}

            </Container>
        </>

    )
}

export default Landingpage
