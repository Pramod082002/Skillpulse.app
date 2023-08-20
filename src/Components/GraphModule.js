import React, { useEffect,useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, Typography } from '@mui/material';
import { TestTotalMarks } from '../Data/TestHistory';
import { TestModulesHistory } from '../Data/TestHistory';
import EmptyGraphBackground from './EmptyGraphBackground';

function GraphModule({testAnalysisModule}) {

  //entry test
  const [subjectsEntryTest,changeEntryTestSubjects] = useState([]);
  const [marksEntryTest,changeEntryTestMarks] = useState([]);

  //exit test
  const [subjectsExitTest,changeExitTestSubjects] = useState([]);
  const [marksExitTest,changeExitTestMarks] = useState([]);  

  // tests not taken will be represented as -1
  // have to connect that too
  // connect -1 in graph module to testHistory
  // hardcoded marks


  useEffect(() => {

    console.log(testAnalysisModule)
  
    // For entry test 
    var tempEntrySubjects = [], tempEntryMarks = [];
    Object.keys(TestTotalMarks?.entryTest?.m1 || {})
      .concat(Object.keys(TestTotalMarks?.entryTest?.m2 || {}))
      .forEach((key) => {
        if (TestTotalMarks.entryTest.m1[key]?.totalMarks > -1 || TestTotalMarks.entryTest.m2[key]?.totalMarks > -1) {
          tempEntrySubjects.push(key);
          tempEntryMarks.push(TestTotalMarks.entryTest.m1[key]?.totalMarks || TestTotalMarks.entryTest.m2[key]?.totalMarks);
        }
      });
  
    changeEntryTestMarks(tempEntryMarks);
    changeEntryTestSubjects(tempEntrySubjects);
  
    // For exit test
    var tempExitSubjects = [], tempExitMarks = [];
    Object.keys(TestTotalMarks?.exitTest?.m1 || {})
      .concat(Object.keys(TestTotalMarks?.exitTest?.m2 || {}))
      .forEach((key) => {
        if (TestTotalMarks.exitTest.m1[key]?.totalMarks > -1 || TestTotalMarks.exitTest.m2[key]?.totalMarks > -1) {
          tempExitSubjects.push(key);
          tempExitMarks.push(TestTotalMarks.exitTest.m1[key]?.totalMarks || TestTotalMarks.exitTest.m2[key]?.totalMarks);
        }
      });
  
    changeExitTestMarks(tempExitMarks);
    changeExitTestSubjects(tempExitSubjects);

    console.log(subjectsEntryTest)
    console.log(subjectsExitTest)

  }, []);
  

  return (
    <Card sx={{margin:'10px'}}>
    { 
      (testAnalysisModule==='entry test') ? (
        <CardContent>
          <div>
            { 
              (subjectsEntryTest.length>0 && marksEntryTest.length>0) ? (
                <BarChart
                  xAxis={[
                  {
                      id: 'Score-Graph-Representation',
                      data: subjectsEntryTest,
                      scaleType: 'band',
                  },
                  ]}
                  series={[
                  {
                      data: marksEntryTest,
                  },
                  ]}
                  width={400}
                  height={400}
                />
              ) : (<EmptyGraphBackground />)
            }
          </div>
        </CardContent>
      ) : (
        <CardContent>
          <div>
            { 
              (subjectsExitTest.length>0 && marksExitTest.length>0) ? (
                <BarChart
                  xAxis={[
                  {
                      id: 'Score-Graph-Representation',
                      data: subjectsExitTest,
                      scaleType: 'band',
                  },
                  ]}
                  series={[
                  {
                      data: marksExitTest,
                  },
                  ]}
                  width={400}
                  height={400}
                />
              ) : (<EmptyGraphBackground />)
            }
          </div>
        </CardContent>
      )
    }
    </Card>
  )
}

export default GraphModule