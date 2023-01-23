import React from 'react'
import NavbarDashboard from '../../components/NavbarDashboard'

function Dashboard() {
  return (
    <div className='dashboard'>
      <NavbarDashboard />
      <div className='viewplane'>
        <h1>Account Summary</h1>
        <div className="tiles">
          <div className="accountBalance"></div>
          <div className="accountTrend"></div>
          <div className="accountTransaction"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard