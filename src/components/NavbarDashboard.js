import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarDashboard() {
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