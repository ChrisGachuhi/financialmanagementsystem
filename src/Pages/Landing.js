import React from 'react'
import Navbar from '../components/Navbar'

import { Button } from 'react-bootstrap'
import heroImage from '../Images/heroImage.jpeg'

function Landing() {
    return (
    <div className='landing-page'>
        <div className='landing'>

            <h1 className="hero">
                MONEY MANAGEMENT SIMPLIFIED
            </h1>

            <p className="hero-text">
                One stop money management and progress tracking financial software. We dare because you do.
            </p>

            <label>Email Address</label> <br />
            <input className='input' type="text" placeholder='Enter your Email' />
             <br /> <br />
                
            <label>Password</label> <br />
            <input className='input' type="password" placeholder='Enter valid password' />
            <br /> <br />
            
            <Button className='rounded-pill'>Sign In</Button>

        </div>
        
        <div className="hero-image">
            <img src= {heroImage} alt="" />
        </div>
    </div>
  )
}

export default Landing