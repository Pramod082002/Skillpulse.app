import React, { useEffect } from 'react'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function TestSwitch({changeTestAnalysisModuleCallback}) {

    const [currentTest, changeTestAnalysis] = React.useState({test:'entryTest',onoff:false}); // Default state is 'on'

    useEffect(()=>{
        console.log(currentTest)
        changeTestAnalysisModuleCallback(currentTest)
    },[currentTest])

    const handleChange = () => {
        if(currentTest.onoff) changeTestAnalysis({test:'entryTest',onoff:false});
        else changeTestAnalysis({test:'exitTest',onoff:true});
    };

    return (
        <div style={{display:'flex', flexDirection:'column', width:'100px', justifyContent:'center', alignItems:'center'}}>
            <Switch {...label} checked={currentTest.onoff} onChange={handleChange} />
            {
                currentTest.test === 'entryTest' ? (
                    <p  style={{ fontFamily:'Tahoma and Roboto', fontWeight:'bold', textAlign: 'center', lineHeight: '1.5' }}>
                    ENTRY<br />TEST
                    </p>
                ) : (
                    <p style={{ fontFamily:'Tahoma and Roboto', fontWeight:'bold', textAlign: 'center', lineHeight: '1.5' }}>
                    EXIT<br />TEST
                    </p>
                )
            }
        </div>
    )
}

export default TestSwitch