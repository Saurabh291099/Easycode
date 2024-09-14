import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Practicepreview = () => {

    const practiceData = [
        {
            question: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            options: {
                option1: 'hello',
                option2: 'hello0',
                option3: 'hello00',
                option4: 'hello000',
            }
        },
        {
            question: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            options: {
                option1: 'hello',
                option2: 'hello0',
                option3: 'hello00',
                option4: 'hello000',
            }
        },
        {
            question: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            options: {
                option1: 'hello',
                option2: 'hello0',
                option3: 'hello00',
                option4: 'hello000',
            }
        },
        {
            question: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            options: {
                option1: 'hello',
                option2: 'hello0',
                option3: 'hello00',
                option4: 'hello000',
            }
        },
        {
            question: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            options: {
                option1: 'hello',
                option2: 'hello0',
                option3: 'hello00',
                option4: 'hello000',
            }
        },
    ]
    return (
        <Container className='practice-main py-4' style={{ minHeight: '90vh' }}>


            <h2>JavaScript MCQ</h2>
            <Row>
                <Col lg={9}>
                    <main>
                        {practiceData.map((data, index) => {
                            return (
                                <>
                                    <div key={index} className='my-4'>
                                        <p className='fs-5'><span className='mx-1'>{`${index + 1}.`}</span> {data.question}</p>
                                        <div className='d-flex flex-column gap-3'>
                                            {Object.keys(data.options).map((option, optionIndex) => (
                                                <button key={optionIndex} className='w-100 p-2 text-start d-flex align-items-center text-capitalize gap-2 rounded-2 border'>
                                                    <input type="radio" name="check" id={option} />
                                                    {data.options[option]}
                                                </button>
                                            ))}
                                        </div>
                                    </div >
                                </>
                            )
                        })}

                    </main>
                </Col>
                <Col lg={3}>
                    <aside className='d-flex flex-column gap-2'>
                        <h3>Popular Practice Questions</h3>
                        <Link>Top 10 Features of ReactJS for Web Developers</Link>
                        <Link>Best Free Headless CMS Software - Features and Pricing 2022</Link>
                        <Link>Top 10 Features of ReactJS for Web Developers</Link>
                        <Link>Best Free Headless CMS Software - Features and Pricing 2022</Link>
                        <Link>Top 10 Features of ReactJS for Web Developers</Link>
                        <Link>Best Free Headless CMS Software - Features and Pricing 2022</Link>
                        <Link>Top 10 Features of ReactJS for Web Developers</Link>
                        <Link>Best Free Headless CMS Software - Features and Pricing 2022</Link>
                        <Link>Top 10 Features of ReactJS for Web Developers</Link>
                        <Link>Best Free Headless CMS Software - Features and Pricing 2022</Link>
                    </aside></Col>
            </Row>
        </Container >
    )
}

export default Practicepreview
