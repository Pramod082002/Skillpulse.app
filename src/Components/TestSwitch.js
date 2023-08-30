import React, { useEffect } from 'react'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function TestSwitch({changeTestAnalysisModuleCallback}) {

    const [currentTest, changeTestAnalysis] = React.useState({test:'entryTest',onoff:true}); // Default state is 'on'

    useEffect(()=>{
        console.log(currentTest)
        changeTestAnalysisModuleCallback(currentTest)
    },[currentTest])

    const handleChange = () => {
        if(currentTest.onoff) changeTestAnalysis({test:'exitTest',onoff:false});
        else changeTestAnalysis({test:'entryTest',onoff:true});
    };

    return (
        <div>
            <Switch {...label} checked={currentTest.onoff} onChange={handleChange} />
            <p>{currentTest.test.toUpperCase()}</p>
        </div>
    )
}

export default TestSwitch