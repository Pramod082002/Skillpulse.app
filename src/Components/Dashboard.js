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

function updateTestHistory(token){
  console.log('sending',token)
  fetch('http://localhost:8000/api/dbaccess/get-test-mark/', {
    method: 'GET',  // HTTP method
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : ('Token '+token)
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse response body as JSON
  })
  .then(data => {
    // Handle the parsed data
    //console.log('Getting Data:', data);
    //console.log('total marks',TestTotalMarks)
    console.log('data',data)

    TestTotalMarks = data
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
}

function Dashboard() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false); //to open and close the modal
  const [takeTest,changeTakeTest] = useState([]);

  
  const [testAnalysisModule,changeTestAnalysisModule] = useState("entryTest");

  //mounting call to mongo db
  useEffect(()=>{

    //updateTestHistory(sessionStorage.getItem('myToken'))

  },[])

  //call back to get test type
  const changeTestAnalysisModuleCallback = (newchoice) =>{
    console.log('change here')
    changeTestAnalysisModule(newchoice.test);
  }

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

        <div style={{ display: 'flex', alignItems: 'center',  justifyContent:'center'}}>
          <h1 className="font-Pacifico">Dashboard</h1>  
          <TestSwitch style={{alignSelf: 'flex-end'}} changeTestAnalysisModuleCallback={changeTestAnalysisModuleCallback}/>
        </div>  

        <div sx={{position:'relative'}}>
          <Divider variant='middle'>
            <Chip label="Graph" />
          </Divider>
        </div>

        <div className='Score-Graph-Representation'>
          <GraphModule testAnalysisModule={testAnalysisModule} />
        </div>

        <div sx={{position:'relative', borderBottomWidth: 0}}>
          <Divider variant='middle'>
            <Chip label="Analytics" />
          </Divider>
        </div>

        {/* Predefined score rep json from DATA, also the comments */}
        
        <ModuleAnalysis testAnalysisModule={testAnalysisModule} />
        
        <div sx={{position:'relative', borderBottomWidth: 0}}>
          <Divider variant='middle'>
            <Chip label="Submit" />
          </Divider>
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