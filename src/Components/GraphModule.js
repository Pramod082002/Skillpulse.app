import React, { useEffect,useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, Typography } from '@mui/material';
import { TestTotalMarks, totalMarks } from '../Data/TestHistory';
import EmptyGraphBackground from './EmptyGraphBackground';


function GraphModule({testAnalysisModule,totalMarks}) {

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
    Object.keys(totalMarks?.entryTest?.m1 || {})
      .concat(Object.keys(totalMarks?.entryTest?.m2 || {}))
      .forEach((key) => {
        if (totalMarks.entryTest.m1[key]?.totalMarks > -1 || totalMarks.entryTest.m2[key]?.totalMarks > -1) {
          tempEntrySubjects.push(key.toUpperCase());
          tempEntryMarks.push(totalMarks.entryTest.m1[key]?.totalMarks || totalMarks.entryTest.m2[key]?.totalMarks);
        }
      });
  
    changeEntryTestMarks(tempEntryMarks);
    changeEntryTestSubjects(tempEntrySubjects);
  
    // For exit test
    var tempExitSubjects = [], tempExitMarks = [];
    Object.keys(totalMarks?.exitTest?.m1 || {})
      .concat(Object.keys(totalMarks?.exitTest?.m2 || {}))
      .forEach((key) => {
        if (totalMarks.exitTest.m1[key]?.totalMarks > -1 || totalMarks.exitTest.m2[key]?.totalMarks > -1) {
          tempExitSubjects.push(key.toUpperCase());
          tempExitMarks.push(totalMarks.exitTest.m1[key]?.totalMarks || totalMarks.exitTest.m2[key]?.totalMarks);
        }
      });
  
    changeExitTestMarks(tempExitMarks);
    changeExitTestSubjects(tempExitSubjects);

    console.log(subjectsEntryTest)
    console.log(subjectsExitTest)

  }, [totalMarks]);
  

  return (
    <Card sx={{margin:'10px'}}>
    { 
      (testAnalysisModule==='entryTest') ? (
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