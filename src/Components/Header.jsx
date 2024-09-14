
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { MdDarkMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import '../Style/NavFoot.css'
import { Nav } from 'react-bootstrap';
const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

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

    return (
        < >
            <Nav className={isSticky ? 'sticky-navbar' : 'navbar'}>
                <div className="container navbar_main">
                    {/* Logo */}
                    <Link className='logo'>CodeWithSharmaJi</Link>

                    {/* Hamburger Icon (visible only on small screens) */}
                    <button onClick={() => setIsOpen(!isOpen)} className='fs-2 d-lg-none text-light border-0 bg-transparent'>
                        {isOpen ? 'X' : '☰'}
                    </button>

                    {/* Navigation Menu */}
                    <div className={`${isOpen ? 'd-flex' : 'd-none'} d-lg-flex col-12 col-lg-9 justify-content-end`}>
                        <div className="nav_Link">
                            <NavLink exact to='/' activeClassName='active' onClick={() => setIsOpen(false)}>Home</NavLink>
                            <NavLink exact to='/projects' activeClassName='active' onClick={() => setIsOpen(false)}>Projects</NavLink>
                            <NavLink exact to='/templates' activeClassName='active' onClick={() => setIsOpen(false)}>Templates</NavLink>
                            <NavLink exact to='/practice' activeClassName='active' onClick={() => setIsOpen(false)}>Practice</NavLink>
                            <NavLink exact to='/blog' activeClassName='active' onClick={() => setIsOpen(false)}>Blog</NavLink>
                            <NavLink exact to='/contact' activeClassName='active' onClick={() => setIsOpen(false)}>Contact</NavLink>
                        </div>

                        {/* Hire Us Button */}
                        {/* <Link className='strbtn' to='/contact' onClick={() => setIsOpen(false)}>Hire Us</Link> */}
                    </div>
                </div>
            </Nav>



        </>



    )
}

export default Header
