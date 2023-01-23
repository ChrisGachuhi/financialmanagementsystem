import React from 'react'
import NavbarDashboard from '../../components/NavbarDashboard'

function Expenses() {
  return (
    <div className='expenses'>
      <NavbarDashboard />
      <div className='viewplane'>
        <h1>Expense Summary</h1>
        <div className="tiles">
          <div className="accountBalance"></div>
          <div className="accountTrend"></div>
          <div className="accountTransaction"></div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Expenses