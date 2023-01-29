import React from 'react'
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'


function Header(props) {
    return (
        <div className='head-wrapper'>
            <div className='head-logo'>LOGO</div>
            <div className='head-navbar'>
                <Navbar />
            </div>
            <div className='head-searchbar'>
                <Search handleChange={props.handleChange} />
            </div>
            <div className='head-profile'>
                User Profile
            </div>
        </div>
    )
}

export default Header