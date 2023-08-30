import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, TextField, Button } from '@mui/material';
import TestTitleCard from './TestTitleCard';

import { cnEntryTest,dbmsEntryTest,osEntryTest } from '../Data/QNA Entry Tests/ALL_ENTRY_TEST';
import { cnExitTest,dbmsExitTest,osExitTest } from '../Data/QNA Entry Tests/ALL_EXIT_TEST'; 
import { useParams } from 'react-router-dom';
import { TestTotalMarks } from '../Data/TestHistory'
import { useNavigate } from 'react-router-dom';

const getQuestionSet = (moduleName,subjectName,testType) =>{


  if(testType === 'entryTest'){

    var finalans = [];

    switch(subjectName) {
      case 'cn':
        finalans = cnEntryTest; 
        break;
      case 'dbms':
        finalans = dbmsEntryTest; 
        break;
      case 'os':
        finalans = osEntryTest; 
        break;
      default:
        finalans = [];
    }
  }
  
  if(testType === 'exitTest'){
    switch(subjectName) {
      case 'cn':
        finalans = cnExitTest; 
        break;
      case 'dbms':
        finalans = dbmsExitTest; 
        break;
      case 'os':
        finalans = osExitTest; 
        break;
      default:
        finalans = [];
    }
  }

  return finalans;
}


function makeReqObject(questions,subjectName){
  
  var userAnswerObject = {}, tempUserAnswerObject = {}

  var questionNumber = 1;

  for (const entry of questions) {
    const { user_answer } = entry;
    tempUserAnswerObject[questionNumber++] = user_answer;
  }

  console.log(subjectName)

  userAnswerObject = {
    ["UserAnswer"] : {
      [subjectName] : tempUserAnswerObject
    }
  }

  return userAnswerObject;
}

const TestQNA = () => {

  const { moduleName, subjectName, testType } = useParams();

  const [questions,setAnswers] = useState([]);

  const navigate = useNavigate();

  function updateTheGraphData(data){
    var subject = Object.keys(data.scores)[0];

    var sumFinalScores = 0;
    Object.values(data.scores.final_score).forEach((val)=>{
      sumFinalScores += val
    })

    var retFinalSum = parseInt((((sumFinalScores/5)/100)*10))
  
    // assuming m2 only uses backend
    TestTotalMarks[testType].m2[subject].totalMarks = retFinalSum;
    console.log('finalllllllll sum',retFinalSum)
    handleNavigate();
  }
  
  function hitServer(reqObj){
  
    async function fetchData() {
      try {
        navigate('/loading');

        const response = await fetch('http://127.0.0.1:8000/api/GetRating/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reqObj)
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:');
        return null;
      }
    }
    
    async function mainReq() {
      const data = await fetchData();
      if (data) {
        console.log('Fetched data Yo :', data);
        updateTheGraphData(data);
        //navigate('/dashboard');
      }
    }
    
    mainReq();
    
  }

  const handleNavigate = () => {
    // Use the navigate function to navigate to a specific route
    navigate('/dashboard');
  };

  useEffect(()=>{
    console.log('params passed : ',moduleName,subjectName,testType);
    //update the questions set
    setAnswers(getQuestionSet(moduleName,subjectName,testType));
  },[])


  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...questions];
    updatedAnswers[index].user_answer = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    //send the request here, loading bar and update in dashboard, connect react chart

    //create a request object
    var reqObj = makeReqObject(questions,subjectName);

    //major part, hitting the backend endpoint
    var response = hitServer(reqObj);
    console.log('YAYYYY GOT RESPONSE',response)
  };

  return (
    <>
      { questions.length > 0 ? ( 
        <div style={{background:"#F0EBF8", padding: '20px'}}>
          <Container maxWidth="md">
            <TestTitleCard moduleName={moduleName} subjectName={subjectName} testType={testType} />
              {questions.map((question, index) => (
                <Card key={index} style={{ marginBottom: '20px', padding: '10px' }}>
                  <CardContent>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{`Question ${index + 1}: ${question.question}`}</p>
                    <TextField
                      id={`answer-${index}`}
                      label="Your Answer"
                      variant="outlined"
                      fullWidth
                      multiline
                      value={questions[index].user_answer}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      style={{ marginTop: '10px' }}
                    />
                  </CardContent>
                </Card>
              ))}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Container>
        </div>
      ) : 
      (
        <h3>QUESTION SET NOT UPLOADED YET</h3>
      )
    
      }
    </>
  );
};

export default TestQNA;
