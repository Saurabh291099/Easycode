import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {

    // const sidebarData = [
    //     { name: 'Accordian', link: '/components/accordians'},
    //     { name: 'Buttons', link: '/components/buttons'},
    //     { name: 'Card', link: '/'},
    //     { name: 'Carousel', link: '/'},
    //     { name: 'Forms', link: '/'},
    //     { name: 'Toggle switches', link: '/'},
    //     { name: 'Loaders', link: '/'},
    //     { name: 'Inputs', link: '/'},

    // ]
    return (
        <>
            <aside>
                {/* {sidebarData.map((data)=>{ */}
                {/* return( */}
                <Link to={props.link}>{props.name}</Link>
                {/* ) */}
                {/* })} */}
            </aside>
        </>
    )
}

export default Sidebar
