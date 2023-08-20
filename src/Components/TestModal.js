import React, { useEffect, useState } from 'react';
import { Paper, IconButton, Container, Grid, Typography  } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CarousalModules from './CarousalComponents/CarousalModules';
import CarousalSubjects from './CarousalComponents/CarousalSubjects';
import CarousalTests from './CarousalComponents/CarousalTests'


export default function TextCarousel({getCombinedChoices}) {

  const [userChoiceModule,changeChoiceModule] = useState("");
  const [userChoiceSubject,changeChoiceSubject] = useState("");
  const [userChoiceTest,changeChoiceTest] = useState("");

  //this call back goes inside "carousal modules" and gets user input
  //.. then whenever the state of "userChoiceModule" is prints it
  const changeChoiceModuleCallback = (newchoice) =>{
    changeChoiceModule(newchoice);
  }

  //this call back goes inside "carousal subject" and gets user input
  //.. then whenever the state of "userChoiceSubject" is prints it
  const changeChoiceSubjectCallback = (newchoice) =>{
    changeChoiceSubject(newchoice);
  }

  //this call back goes inside "carousal test" and gets user input
  //.. then whenever the state of "userChoicetest" is prints it
  const changeChoiceTestCallback = (newchoice) =>{
    changeChoiceTest(newchoice);
  }

  //whenever update happens, update the input
  useEffect(()=>{
    console.log(`updated vals : Module : ${userChoiceModule}, Subject : ${userChoiceSubject}, Test Chosen : ${userChoiceTest}`)
  
    getCombinedChoices(userChoiceModule,userChoiceSubject,userChoiceTest);
    //get the right choices on click
  },[userChoiceModule,userChoiceSubject,userChoiceTest])

  return (
    <Container style={{marginTop:'20px',marginBottom:'20px'}}>

      <Paper elevation={3} style={{ padding: '20px' }}>

        <Typography variant="p" style={{ color: '#6b6b6b' }}>
          ROUTE :
          {userChoiceModule && ` ${userChoiceModule.toUpperCase()}`}
          {userChoiceSubject && ` / ${userChoiceSubject.toUpperCase()}`}
          {userChoiceTest && ` / ${userChoiceTest.toUpperCase()}`}
        </Typography>

        {/* change choice of test if module is selected */}
        <CarousalModules changeChoiceModuleCallback={changeChoiceModuleCallback} changeChoiceSubjectCallback={changeChoiceSubjectCallback} changeChoiceTestCallback={changeChoiceTestCallback} />
        <CarousalSubjects userChoiceModule={userChoiceModule} changeChoiceSubjectCallback={changeChoiceSubjectCallback} />
        <CarousalTests userChoiceSubject={userChoiceSubject} changeChoiceTestCallback={changeChoiceTestCallback} userChoiceModule={userChoiceModule} />

      </Paper>
      
    </Container>
  );
}
