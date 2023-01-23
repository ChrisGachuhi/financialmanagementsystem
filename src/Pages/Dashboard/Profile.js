import React from 'react'
import NavbarDashboard from '../../components/NavbarDashboard'

function Profile() {
  return (
    <div className='profile'>
      <NavbarDashboard />
      <div className='viewplane'>
        <h1>Account Details</h1>
        <div className="tiles">
          <div className="accountBalance"></div>
          <div className="accountTrend"></div>
          <div className="accountTransaction"></div>
        </div>
      </div>
    </div>
  )
}

export default Profile