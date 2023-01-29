import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <div className='nav-wrapper'>
            <ul>
                <li>
                    <NavLink to={"/"}> Home </NavLink>
                </li>
                <li>
                    <NavLink to={"/allgames"}> All Games </NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}> About Us </NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}> Contact Us </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar