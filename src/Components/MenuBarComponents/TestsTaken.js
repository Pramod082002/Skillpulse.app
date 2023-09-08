import React, { useState, useEffect } from 'react'
import { TestModulesHistory } from '../../Data/TestHistory';
import Loading from '../Spinner'
import ErrorLoader from '../ErrorLoader'
import '../../App.css'
import {
  Divider,
} from '@mui/material';

const apiEndpoint = "https://jsonplaceholder.typicode.com/todos/1";


function TestsTaken() {

  const [testModulesHistory, changeTestModulesHistory] = useState(TestModulesHistory);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError,setFetchError] = useState(false);

  useEffect(()=>{

    async function fetchData(){

      try{

        const response = await fetch(apiEndpoint,{
          method : "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + sessionStorage.getItem('myToken'),
          },
        });

        if (!response.ok) {
          const statusCode = response.status; 
          throw new Error(statusCode);
        }
    
        const data = await response.json();
        changeTestModulesHistory(data);

      }
      catch(error){
        console.log("Error fetching",error.message)
        setFetchError(true)
      }
      finally{
        if(!fetchError) setIsLoading(false)
      }

    }

    fetchData()


    //now calculate and display the test history cards
    //get for module1 and module2 

  },[])

  return (
    <div style={{marginTop:'50px'}}>
      {
        fetchError && <ErrorLoader />
      }
      {
        !isLoading && !fetchError ? (
          <div>
              <h1 id="headingFont" style={{ textAlign: 'center', margin:'10px' }}>Test History</h1>
              <Divider></Divider>
          </div>
        ) : (
          <Loading />
        )
      }
    </div>
  )
}

export default TestsTaken