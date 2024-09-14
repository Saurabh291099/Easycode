import React from 'react'
import './blog.css'
import Banner from '../../Components/Banner';
import BlogCard from './BlogCard';

const Blog = () => {

    return (
        <>
            <Banner bannerHeading='Blog Heading' />

            <div className='container my-4'>
                <BlogCard />
            </div>
        </>
    )
}

export default Blog
