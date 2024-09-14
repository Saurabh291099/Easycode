import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import photo from '../../Images/photo.jpg'

const Practice = () => {

    const practiceData = [
        {
            previewLink: '/practice/preview',
            heading: 'Project1',
            text: 'desc'
        },
        {
            previewLink: '/practice/preview',
            heading: 'Project2',
            text: 'desc'
        },
        {
            previewLink: '/practice/preview',
            heading: 'Project3',
            text: 'desc'
        },
        {
            previewLink: '/practice/preview',
            heading: 'Project4',
            text: 'desc'
        },
        {
            previewLink: '/practice/preview',
            heading: 'Project5',
            text: 'desc'
        },
        {
            previewLink: '/practice/preview',
            heading: 'Project6',
            text: 'desc'
        },
        {
            previewLink: '/practice/preview',
            heading: 'project7',
            text: 'desc'
        },


    ]
    return (
        <Container className='practice-main py-4' style={{ minHeight: '90vh' }}>
            <div className="blog-div d-flex flex-wrap gap-5 my-4">

                {practiceData.map((data, index) => {
                    return (
                        <>
                            <Link exact to={data.previewLink} key={index}>
                                <Card  style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={photo} />
                                    <Card.Body>
                                        <Card.Title className='text-capitalize'>{data.heading}</Card.Title>
                                        <Card.Text className='text-capitalize'>
                                            {data.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </>

                    )
                })}
            </div>

        </Container>
    )
}

export default Practice
