import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogCard from './BlogCard';


import { Link } from 'react-router-dom';


const BlogPreview = () => {
  return (
    <>
      <Container>
        <Row className='blog-prev'>
          <Col lg={9}>
            <main className='py-4'>
              <h2>"Unlock the Power of HTML: 8 Must-Know Topics for Every Developer!"</h2>
              <p>Tuesday, September 10, 2024 8 min read 62 views</p>

              <div className='w-100 h-auto my-4'>
                <img className='w-100 h-100 object-fit-cover' src="https://www.angularminds.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fangularminds.com%2Fblog%2Fcover%2FPreact%2520vs%2520React%2520%25C3%25A2%25C2%2580%25C2%2593%2520A%2520Detailed%2520Comparative%2520Guide-20240910121312466.jpg&w=1920&q=75" alt="BLOG" />
              </div>

              <p>Preact is a lightweight JavaScript library for creating intuitive UI, designed as a more performant and streamlined alternative to React. It offers a similar component-based architecture and API, making it a seamless transition for developers familiar with the existing React ecosystem.</p>

              <p>Preact's primary focus is on delivering high-performance web applications, particularly in scenarios where size and speed are critical factors. This makes it an excellent choice for creating progressive web apps (PWAs) and single-page applications (SPAs), where fast load times and efficient resource utilization are essential for a positive user experience. Preact is a lightweight alternative to React providing better performance in your web application.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore ea repellendus nobis dolorem iusto voluptatibus! Veniam quod debitis non eos adipisci est sapiente illum incidunt? Officiis, consectetur ea eveniet eos corporis itaque voluptate, cumque error, necessitatibus perferendis laudantium repellendus. Quam, numquam dolorum est alias laborum dicta molestias. Nihil labore fugit iusto eaque perspiciatis aliquam excepturi error voluptatibus minus praesentium, commodi asperiores, inventore amet, obcaecati magni molestiae quos quae nisi. Et, ducimus cupiditate ea magnam rem exercitationem, sint blanditiis voluptatibus totam nobis voluptatum minima. Obcaecati vel, voluptas soluta earum veniam ad deleniti dignissimos modi facere molestiae adipisci recusandae rerum beatae. Quae provident aspernatur quis voluptates eveniet modi at totam, nobis repudiandae ducimus, ea, fugiat voluptatem sint. Consequuntur dolor at consequatur laborum saepe. Dolorem, soluta expedita sequi exercitationem, magni numquam fuga illo at molestias aspernatur quibusdam quod saepe? Repudiandae, quidem dolorem? Nemo quaerat, quisquam consectetur sunt vitae dolores doloribus facilis repellendus aliquid, minus accusantium omnis vel perferendis enim provident nesciunt hic adipisci? Similique ea eaque aliquam quas quisquam eligendi esse consectetur officiis alias numquam obcaecati accusamus delectus animi, ad, molestiae iste architecto rem soluta, blanditiis iusto maiores eius quasi suscipit. Rerum veniam assumenda fuga magnam et eligendi tenetur dolorum tempora suscipit corrupti voluptatum recusandae repellat minus quidem distinctio, at enim obcaecati officiis! Rem dolore, ut nisi maiores corrupti id quod aperiam, aut porro esse inventore distinctio, sequi beatae in ex? Quas sapiente, et dignissimos animi nihil ratione nam soluta eum quae nisi sit perferendis veniam porro fuga officiis explicabo fugiat esse!

              </p>



              <p>Preact is a lightweight JavaScript library for creating intuitive UI, designed as a more performant and streamlined alternative to React. It offers a similar component-based architecture and API, making it a seamless transition for developers familiar with the existing React ecosystem.</p>

              <p>Preact's primary focus is on delivering high-performance web applications, particularly in scenarios where size and speed are critical factors. This makes it an excellent choice for creating progressive web apps (PWAs) and single-page applications (SPAs), where fast load times and efficient resource utilization are essential for a positive user experience. Preact is a lightweight alternative to React providing better performance in your web application.</p>
            </main>
          </Col>

          <Col lg={3} className='border rounded-3 my-3' style={{ maxHeight:'90vh' }} >
            <aside className='p-2 d-flex flex-column gap-2'>

              <h3>Popular articles</h3>

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
            </aside>
            </Col>
        </Row>

      </Container>


      <Container>

        <div className=' py-4'>
          <h3 className='my-4'>Related Articles</h3>
          <BlogCard />
        </div>

      </Container>
    </>
  )
}

export default BlogPreview
