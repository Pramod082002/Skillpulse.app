import React from 'react'
import { Divider } from '@mui/material'
import Rankings from '../Leaderboard/Rankings'

function Leaderboard() {
  return (
    <div style={{marginTop:'50px'}}>
        <div>
            <h1 id="headingFont" style={{ textAlign: 'center', margin:'10px' }}>Leaderboard</h1>
            <Divider></Divider>
        </div>
        <div>
          <Rankings UserEmail={'yogi@gmail.com'} />
        </div>
    </div>
  )
}

export default Leaderboard