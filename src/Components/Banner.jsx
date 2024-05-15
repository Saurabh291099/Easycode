import React from 'react'
import photo from '../Images/photo.jpg'
const Banner = () => {
    return (
        <>

            <div className='coman-bnr w-100' style={{ border: "2px solid red" }}>
                <h1 className='bnr-heading'>Blog</h1>

                <img src={photo} alt="banner image" />

            </div>

        </>
    )
}

export default Banner
