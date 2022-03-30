import React from 'react';
import './Navbar.css';
import logo from '../../logo.png'

export default function Navbar() {
    return (
        
            <nav className='navbar'>
                <img src={logo}></img>
                <ul className='lists'>
                <li><a href='#' className='nav-links'>home</a></li>
                <li><a href='#'  className='nav-links'>info</a></li>
                <li><a href='#' className='nav-links'>about</a></li>
                </ul>
            </nav>
        
    )
}
