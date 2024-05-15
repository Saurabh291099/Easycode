import React from 'react'
import Card from 'react-bootstrap/Card';
import photo from '../../Images/photo.jpg'
import { Link } from 'react-router-dom';
const BlogCard = () => {
    const BlogData = [{
        heading: 'html course',
        text: 'lorem 50',
        link: '/blog/blogname'
    }, {
        heading: 'html course1',
        text: 'lorem 50',
        link: '/blog/blogname'
    }, {
        heading: 'html course2',
        text: 'lorem 50',
        link: '/blog/blogname'
    }, {
        heading: 'html course3',
        text: 'lorem 50',
        link: '/blog/blogname'
    }, {
        heading: 'html course4',
        text: 'lorem 50',
        link: '/blog/blogname'
    }, {
        heading: 'html course5',
        text: 'lorem 50',
        link: '/blog/blogname'
    }, {
        heading: 'html course6',
        text: 'lorem 50',
        link: '/blog/blogname'
    }, {
        heading: 'html course7',
        text: 'lorem 50',
        link: '/blog/blogname'
    },
    ]
    return (
        <div>
            <div className="blog-div d-flex flex-wrap gap-5">

                {BlogData.map((data, i) => {
                    return (
                        <>
                            <Link to={data.link}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={photo} />
                                    <Card.Body>
                                        <Card.Title>{data.heading}</Card.Title>
                                        <Card.Text>
                                            {data.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </>

                    )
                })}

            </div>
        </div>
    )
}

export default BlogCard
