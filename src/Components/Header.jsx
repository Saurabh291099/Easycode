// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { MdDarkMode } from 'react-icons/md';
import '../Style/NavFoot.css'
import { Nav } from 'react-bootstrap';
const Header = () => {
    const [isSticky, setSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (offset > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // const [isNavbarBlurred, setIsNavbarBlurred] = useState(false);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         const threshold = 100;

    //         setIsNavbarBlurred(scrollY > threshold);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        < >
            {/* className="navbar_main" */}
            {/* <div className="container">
                <nav>

                    <div className="rytnav nav_Link">
                    </div>
                </nav>
            </div> */}
            {/* className="navbar"   */}
            <Nav className={isSticky ? 'sticky-navbar' : 'navbar'}>
                <div className="container navbar_main">
                    <Link className='logo'>CodeWithSharmaJi</Link>
                    {/* <div className="wrapper-nav"> */}
                    <div className="midnav nav_Link">
                        <Link exact to='/'>Home</Link>
                        <Link exact to='/projects'>Projects</Link>
                        <Link exact to='/templates'>Templates</Link>
                        <Link exact to='/components'>Components</Link>
                        <Link exact to='/blog'>Blog</Link>
                        <Link exact to='/contact'>Contact</Link>
                    </div>
                    <Link className='strbtn' to='/contact'>Hire Us</Link>
                    {/* </div> */}
                </div>
            </Nav>

        </>



    )
}

export default Header
