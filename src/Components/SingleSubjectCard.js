import * as React from "react";
import { useState,useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Collapse,
  IconButton,
  Typography,
  Rating
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SingleSubjectCard({singleSubject,subjectName}) {
  const [expanded, setExpanded] = useState(false);
  const [subtopicsName,changeSubtopicName] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(()=>{
    //subjects with marks > -1
    let tempSubtopicsName = [];
    Object.keys(singleSubject).forEach((keys)=>{
        //console.log(singleSubject[keys])
        if(singleSubject[keys] > -1 && keys!="totalMarks"){
            tempSubtopicsName.push(keys);
        }
    })

    console.log(tempSubtopicsName)
    changeSubtopicName(tempSubtopicsName);
  },[])

  return (
    <div>
    {
      (subtopicsName.length > 0) ? ( 
        <Card>
          <CardHeader
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {subjectName.toUpperCase()}
              </div>
            }
            action={
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            }
          />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {/* SUBTOPICS HERE */}
              <div
                style={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent:'center',
                  margin: '10px'
                }}
              >
                {/* Upper div to handle all the divs below */}


                {
                    subtopicsName.map((eachTopic,index)=>{
                        <div 
                            style={{
                                display: "flex",
                                justifyContent: "space-around"
                            }}
                        >
                            <Typography paragraph>{eachTopic.toUpperCase()}</Typography>
                            <Rating
                                name="custom-rating"
                                value={(subjectName[eachTopic]/100)*5}
                                precision={0.1} // Increase precision for smoother rating display
                                readOnly
                            />
                        </div>                    
                    })
                }
                
              </div>
            </CardContent>
          </Collapse>
        </Card>    
      ) : (

        <></>

      )
  
    }
    </div>

  );
}
