import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";


function NavbarDashboard() {
  
  const auth = getAuth();
  
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });


  return (
    <div className="sidebar">
        
          <Link to='/Dashboard'>Dashboard</Link>
          <Link to='/Expenses'>Expenses</Link>
          <Link to='/Income'>Income</Link>
          <Link to='/Profile'>Profile</Link>
          <Link to='/Reports'>Reports</Link>
          <Button><Link to='/'>Back</Link></Button>
        
    </div>
  )
}

export default NavbarDashboard