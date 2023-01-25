import React from 'react'
import Navbar from '../components/Navbar'

import { Button } from 'react-bootstrap'
import heroImage from '../Images/heroImage.jpeg'
import { useRef } from 'react'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from 'react-router'

import swal from 'sweetalert'

function Landing() {

    const emailAddressRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    function signin(){
        const emailAddress = emailAddressRef.current.value;
        const password = passwordRef.current.value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/dashboard");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal("Oops!",errorMessage,"success");
            console.log(errorMessage);
        });

        console.log(emailAddress);
        console.log(password);
    }

    return (
        <div className='landing-page'>
            
            <Navbar />
            
            <div className='container'>
                <div className='landing'>

                    <h1 className="hero">
                        MONEY MANAGEMENT SIMPLIFIED
                    </h1>

                    <p className="hero-text">
                        One stop money management and progress tracking financial software. We dare because you do.
                    </p>

                    <label>Email Address</label> <br />
                    <input ref={emailAddressRef} className='input' type="text" placeholder='Enter your Email' />
                    <br /> <br />
                        
                    <label>Password</label> <br />
                    <input ref={passwordRef} className='input' type="password" placeholder='Enter valid password' />
                    <br /> <br />
                    
                    <Button className='rounded-pill' onClick={signin}>Sign In</Button>

                </div>
                
                <div className="hero-image">
                    <img src= {heroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Landing