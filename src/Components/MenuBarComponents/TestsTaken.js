import React, { useEffect } from 'react'

function TestsTaken() {

  useEffect(()=>{
    console.log('yo')
  },[])

  return (
    <div style={{height:'100vh',backgroundColor:'red'}}>TestsTaken</div>
  )
}

export default TestsTaken