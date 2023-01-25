import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from 'react-router';

import swal from 'sweetalert';

function Register() {
    <Navbar />

    const firstNameRef = useRef();
    const secondNameRef = useRef();
    const emailAddressRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

  const navigate = useNavigate();

    
    function signUp() {
      const firstName = firstNameRef.current.value;
      const secondName = secondNameRef.current.value;
      const emailAddress = emailAddressRef.current.value;
      const password = passwordRef.current.value;
      const passwordConfirm = passwordConfirmRef.current.value;

  
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal("Try Again!", errorMessage, "warning");
        // ..
        console.log(errorMessage);
      });

    console.log(firstName);
    console.log(secondName);
    console.log(emailAddress);
    console.log(password);
    console.log(passwordConfirm);
    
  }

  return (
    <div className='userRegistration'>
      
      <div>
        <Form.Group className="mb-3" >
          <Form.Label>First Name</Form.Label>
          <Form.Control ref={firstNameRef} type="text" placeholder="Enter First Name" />
          
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Last Name</Form.Label>
          <Form.Control ref={secondNameRef}  type="text" placeholder="Enter Surname" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailAddressRef}  type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control ref={passwordRef}  type="password" placeholder="Password MUST be 8 characters" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control ref={passwordConfirmRef} type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={signUp}>
          Submit
        </Button>
      </div>
      

    </div>
  )
}

export default Register