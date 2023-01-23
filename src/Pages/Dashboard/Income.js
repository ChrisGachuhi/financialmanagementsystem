import React from 'react'
import NavbarDashboard from '../../components/NavbarDashboard'

function Income() {
  return (
    <div className='income'>
      <NavbarDashboard />
      <div className='viewplane'>
        <h1>Income Summary</h1>
        <div className="tiles">
          <div className="accountBalance"></div>
          <div className="accountTrend"></div>
          <div className="accountTransaction"></div>
        </div>
      </div>
    </div>
  )
}

export default Income