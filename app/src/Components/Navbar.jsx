import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="NavContainer">
            <span className="Logo">VjBooking</span>
            <div className="navItems">
                <button className="NavButton">Register</button>
                <button className="NavButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar