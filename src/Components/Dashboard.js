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
import ModuleSwitchSplit from './SplitWiseComponents/ModuleSwitchSplit';
import TestSwitchSplit from './SplitWiseComponents/TestSwitchSplit';
import Spinner from './Spinner';
import MainDrawer from './MainDrawer';


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

  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false); //to open and close the modal
  const [takeTest,changeTakeTest] = useState([]);

  

  // call backs for graphs
  const [testTypeGraph,changeTestTypeGraph] = useState("entryTest");
  const [moduleTypeGraph,changeModuleTypeGraph] = useState("m1");

  // call backs for moduleAnalysis
  const [testTypeSplitWise,changeTestTypeSplitWise] = useState("entryTest");
  const [moduleTypeSplitWise,changeModuleTypeSplitWise] = useState("m1");

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
      finally {
        setIsLoading(false); // Set isLoading to false regardless of success or failure
      }
    }
  
    fetchData();
  }, []);


  //### call backs for graphs
  const changeTestTypeGraphCallback = (newchoice) =>{
    changeTestTypeGraph(newchoice);
  }

  const changeModuleTypeGraphCallback = (newchoice) =>{
    changeModuleTypeGraph(newchoice);
  }
  //### call backs graph done here


  //### moduleAnalysis call backs 
  const changeTestTypeSplitWiseCallback = (newchoice) =>{
    changeTestTypeSplitWise(newchoice);
  }

  const changeModuleTypeSplitWiseCallback = (newchoice) =>{
    changeModuleTypeSplitWise(newchoice);
  }
  //### moduleAnalysis call backs 



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
    <div style={{marginTop:'50px'}}>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <ThemeProvider theme={theme}>
            <div className='Dashboard-Container'>

              <div>
                <h1 id="headingFont" style={{ textAlign: 'center', margin:'10px' }}>Dashboard</h1>
              </div>

              <div style={{ position: 'relative', marginBottom: '10px' }}>
                <Divider variant='middle'></Divider>
              </div>

              {/* 1. graph representation, writing the formcontrol outside */}
              <div style={{display:'flex',flexDirection:'column'}} className='Score-Graph-Representation'>

                <div style={{display:'flex', gap:'20px', margin:'10px'}}>
                  <TestSwitch changeTestTypeGraphCallback={changeTestTypeGraphCallback} />
                  <ModuleSwitch changeModuleTypeGraphCallback={changeModuleTypeGraphCallback}/>
                </div>
                
                <GraphModule moduleTypeGraph={moduleTypeGraph} testTypeGraph={testTypeGraph} totalMarks={totalMarks} />
              </div>

              <div style={{ position: 'relative', marginBottom: '50px', marginTop: '50px' }}>
                <Divider variant='middle'></Divider>
              </div>

              {/* Predefined score rep json from DATA, also the comments */}
              
              {/* 2. SplitWise Analysis */}
              <div style={{display:'flex',flexDirection:'column'}} className='Score-Graph-Representation'>
                <div style={{display:'flex', gap:'20px', margin:'10px'}}>
                  <TestSwitchSplit changeTestTypeSplitWiseCallback={changeTestTypeSplitWiseCallback}/>
                  <ModuleSwitchSplit changeModuleTypeSplitWiseCallback={changeModuleTypeSplitWiseCallback}/>
                </div>

                <ModuleAnalysis testTypeSplitWise={testTypeSplitWise} moduleTypeSplitWise={moduleTypeSplitWise} totalMarks={totalMarks} />
              </div>
              
              
              <div style={{ position: 'relative', marginBottom: '10px', marginTop: '10px' }}>
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
                      <Typography sx={{ ml: 2, flex: 1, fontSize:'14px' }} variant="p">
                        CHOOSE TEST MODULES
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
    </div>
  )
  
}

export default Dashboard