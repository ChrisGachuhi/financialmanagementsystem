import React from 'react'
import NavbarDashboard from '../../components/NavbarDashboard'

function Reports() {
  return (
    <div className='reports'>
      <NavbarDashboard />
      <div className='viewplane'>
        <h1>Account Report</h1>
        <div className="tiles">
          <div className="accountBalance"></div>
          <div className="accountTrend"></div>
          <div className="accountTransaction"></div>
        </div>
      </div>
    </div>
  )
}

export default Reports