import React from 'react'
import EmploymentDetails from '../Employment/EmploymentDetails'
import { Divider } from '@mui/material'

function EmploymentDB() {
  return (
    <div  style={{marginTop:'60px'}}>
      <div>
          <h1 id="headingFont" style={{ textAlign: 'center', margin:'10px' }}>Employment Database</h1>
          <Divider></Divider>
      </div>
      <EmploymentDetails average={100} />
    </div>
  )
}

export default EmploymentDB