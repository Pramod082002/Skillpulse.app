import React,{useEffect, useState} from 'react'
import GraphModule from './GraphModule';
import {
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Chip,
  Card,
  CardContent
} from '@mui/material';

import TestModal from '../Components/TestModal'
import TestSwitch from './TestSwitch';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import '../Styles/DashboardStyles.css'
import { TestTotalMarks } from '../Data/TestHistory';


import { useNavigate } from 'react-router-dom';
import ModuleAnalysis from './ModuleAnalysis';
import ModuleSwitch from './Graphmodules/ModuleSwitch';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    }
  },
});

async function updateTestHistory(token) {
  console.log('sending', token);
  try {
    const response = await fetch('http://localhost:8000/api/dbaccess/get-test-mark/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


function Dashboard() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false); //to open and close the modal
  const [takeTest,changeTakeTest] = useState([]);

  
  const [testTypeGraph,changeTestTypeGraph] = useState("entryTest");
  const [moduleTypeGraph,changeModuleTypeGraph] = useState("m1");

  const [totalMarks, changeTotalMarks] = useState(TestTotalMarks);

  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await updateTestHistory(sessionStorage.getItem('myToken'));
        console.log('expected data', data);
        changeTotalMarks(data);
      } catch (error) {
        // Handle error if needed
      }
    }
  
    fetchData();
  }, []);


  //### call backs for graphs
  const changeTestTypeGraphCallback = (newchoice) =>{
    console.log('change here')
    changeTestTypeGraph(newchoice);
  }

  const changeModuleTypeGraphCallback = (newchoice) =>{
    console.log('change here')
    changeModuleTypeGraph(newchoice);
  }

  //###graphs call back done here

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    //takeTest, redirect to test with params
    console.log(takeTest.join('/'))

    const moduleName = takeTest[0];
    const subjectName = takeTest[1];
    const testType = takeTest[2]; // Replace with your dynamic value
    console.log('Navigation done ',`/test/${moduleName}/${subjectName}/${testType}`)

    if(moduleName!=="" && subjectName!=="" && testType!==""){
      navigate(`/test/${moduleName}/${subjectName}/${testType}`);  
    }

    setOpen(false);
  };

  const getCombinedChoices = (module,subject,test) =>{
    let arr = [];
    arr.push(module);
    arr.push(subject);
    arr.push(test);
    changeTakeTest(arr);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='Dashboard-Container'>

        <div>
          <h1 id="headingFont" style={{ textAlign: 'center' }}>Dashboard</h1>
        </div>

        <div sx={{position:'relative'}}>
          <Divider variant='middle'></Divider>
        </div>

        {/* 1. graph representation */}
        <div style={{display:'flex',flexDirection:'column'}} className='Score-Graph-Representation'>

          <div style={{display:'flex',margin:'10px'}}>
            <TestSwitch changeTestTypeGraphCallback={changeTestTypeGraphCallback} />
            <ModuleSwitch changeModuleTypeGraphCallback={changeModuleTypeGraphCallback}/>
          </div>
          
          <GraphModule moduleTypeGraph={moduleTypeGraph} testTypeGraph={testTypeGraph} totalMarks={totalMarks} />
        </div>

        <div sx={{position:'relative', borderBottomWidth: 0}}>
          <Divider variant='middle'></Divider>
        </div>

        {/* Predefined score rep json from DATA, also the comments */}
        
        {/* 2. Module Analysis */}
        {/* <ModuleAnalysis testAnalysisModule={testAnalysisModule} totalMarks={totalMarks} /> */}
        
        <div sx={{position:'relative', borderBottomWidth: 0}}>
          <Divider variant='middle'></Divider>
        </div>
        
        {/* This should open a fullscreen modal */}
        <div className="Evaluation-Modal">
          <Button variant="outlined" sx={{margin:'50px'}}  onClick={handleClickOpen}>
            Take Test
          </Button>

          {/* This opens only on click, evaluation choices will */}
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            className='Dialog-Container'
          >
            
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="p">
                  Choose Test Modules
                </Typography>
                <Button color="inherit" variant="p" onClick={handleClose}>
                  Take Test
                </Button>
              </Toolbar>
            </AppBar>

            {/* You can add your custom content here */}
            <TestModal getCombinedChoices={getCombinedChoices} />

          </Dialog>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Dashboard