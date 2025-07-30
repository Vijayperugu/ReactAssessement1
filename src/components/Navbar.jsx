import React from 'react'
import logo from "../assets/download.jpeg"

const Navbar = () => {
  return (
    <>
    <nav className='navbar-section'>
        <div className='navbar-container container'>
            <img src={logo} alt="Logo" />
            <ul className='nav-links'>
                <li>Home</li>
                <li>Models</li>
                <li>Racing</li>
                <li>Technology</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar