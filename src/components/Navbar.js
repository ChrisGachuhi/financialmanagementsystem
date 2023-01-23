import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
        <h1 className="logo">FMS Logo</h1>
        <ul>
            <li className='nav-item'><Link to='/'>Home</Link></li>
            <li className='nav-item'><Link to='/about'>About Us</Link></li>
            <li className='nav-item'><Link to='/contact'>Contact Us</Link></li>
            <li className='nav-item'><Link to='/signup'>SignUp</Link></li>
            <li className='nav-item'><Link to='/login'>Login</Link></li>
        </ul>
    </div>
  )
  
}

export default Navbar