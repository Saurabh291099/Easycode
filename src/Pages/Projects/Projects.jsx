import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './projects.css'
import { Link } from 'react-router-dom'
import photo from '../../Images/photo.jpg'
import Banner from '../../Components/Banner'
function Projects() {
  const projectData = [
    {
      previewLink: '/projects',
      githublink: '/projects',
      heading: 'project1',
      text: 'desc'
    },
    {
      previewLink: '/projects',
      githublink: '/projects',
      heading: 'project2',
      text: 'desc'
    },
    {
      previewLink: '/projects',
      githublink: '/projects',
      heading: 'project3',
      text: 'desc'
    },
    {
      previewLink: '/projects',
      githublink: '/projects',
      heading: 'project4',
      text: 'desc'
    },
    {
      previewLink: '/projects',
      githublink: '/projects',
      heading: 'project5',
      text: 'desc'
    },
    {
      previewLink: '/projects',
      githublink: '/projects',
      heading: 'project6',
      text: 'desc'
    },
    {
      previewLink: '/projects',
      githublink: '/projects',
      heading: 'project7',
      text: 'desc'
    },


  ]
  return (

    <>

      <Banner bannerHeading='Project Heading' />

      <Container className='project_main py-4' style={{ minHeight: '100vh' }}>
        <h3>All Projects</h3>

        <div className="blog-div d-flex flex-wrap gap-5 my-4">

          {projectData.map((data, index) => {
            return (
              <>

                <Card key={index} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={photo} />
                  <Card.Body>
                    <Card.Title>{data.heading}</Card.Title>
                    <Card.Text>
                      {data.text}
                    </Card.Text>

                    <div className='d-flex justify-content-between'>
                      <Link exact to={data.previewLink} className='btn btn-primary'>Preview</Link>
                      <Link exact to={data.githublink} className='btn btn-primary'>GitHub</Link>
                    </div>
                  </Card.Body>
                </Card>
              </>

            )
          })}

        </div>
      </Container>

    </>

  )
}

export default Projects
