import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import pic from '../Images/photo.jpg'
// import { Button } from 'react-bootstrap';
import Card from './Card';
import TempFilterApi from './TempFilterApi';

// Import CSS
import '../Style/Landing.css'
import Contact from './Contact';
// import TemplateFilter from '../Pages/Template/TemplateFilter';
// import bannerimg from '../Images/banner.png'


const Landingpage = () => {

    const [templateData, settemplateData] = useState(TempFilterApi)

    return (

        <>

            <div className="banner">
                {/* <img className='bannerimg' src={bannerimg} alt="banner img" /> */}
                <div className="container banner_text">
                    <h1>Design Made Easy!</h1>
                    <h2>Get Inspired and Customize with Our Beautiful Templates!</h2>
                    <p>Welcome to CodeWithSharmaJi, your ultimate destination for stunning templates! Discover a world of creativity with our professionally designed templates that cater to all your needs. Whether you're a business owner, a student, or a creative professional, we've got the perfect template for you.</p>
                </div>
            </div>
            <div className="container">
                <div className="my-4 py-4">
                    <Container>
                        <h3 className='text-center my-4'>Unleash Your Creative Vision with Our Stunning Templates!</h3>
                        <p className='text-center my-4'>Welcome to our template paradise, where creativity knows no bounds. Elevate your projects with our meticulously crafted templates that effortlessly transform your ideas into stunning realities. Whether you're a seasoned designer or just starting your creative journey, our diverse collection promises to inspire and empower, making your design process a breeze.</p>
                        <Row className='pt-4'>
                            <Col className='lnd-col'>

                                {/* <TemplateFilter /> */}
                                <Card templateData={templateData} settemplateData={settemplateData} />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Contact />
            </div>
        </>

    )
}

export default Landingpage
