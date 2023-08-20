import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Card,
  CardContent,
  Typography 
} from "@mui/material";
import { useState } from "react";
import Ratingbar from "./RatingBar";
import { TestTotalMarks as totalMarks } from "../Data/TestHistory";

const ModuleAnalysis = () => {
  //const [moduleSelection, setModuleSelection] = useState("");
  //const data = {
    // ... your data object ...

    //haf format

    
    // const data = {
    //   m2: {
    //     cn: {
    //       topics: Object.keys(totalMarks.m2.cn).filter((val)=>{
    //         return totalMarks.m2.cn[val]>-1
    //       }),
    //       marks: Object.values(totalMarks.m2.cn).filter((val)=>{
    //         return totalMarks.m2.cn[val]>-1
    //       }),
    //     },
    //     dbms: {
    //       topics: Object.keys(totalMarks.m1.dbms).filter((val)=>{
    //         return totalMarks.m2.dbms[val]>-1
    //       }),
    //       marks: Object.values(totalMarks.m1.dbms).filter((val)=>{
    //         return totalMarks.m2.dbms[val]>-1
    //       })
    //     },
    //     os : {
    //       topics: Object.keys(totalMarks.m1.os).filter((val)=>{
    //         return totalMarks.m2.os[val]>-1
    //       }),
    //       marks: Object.values(totalMarks.m1.os).filter((val)=>{
    //         return totalMarks.m2.os[val]>-1
    //       })
    //     },
    //   },
    //   m1: {
    //     oops: {
    //       topics: ["RDBMS", "RE DIAGRAMS"],
    //       marks: [23, 32],
    //     },
    //     cpp: {
    //       topics: ["RDBMS", "RE DIAGRAMS"],
    //       marks: [84, 69.5],
    //     },
    //   },
    // };
    

  //};
    

  // const handleChange = (e) => {
  //   let moduleNumber = e.target.value.toLowerCase();
  //   setModuleSelection(moduleNumber);
  // };

  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Card sx={{ height: 300, width: 300, textAlign:'center', margin:'30px' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div className='Score-Text-Representation'>
            <Typography variant="h6">TAKE AT LEAST ONE TEST TO VIEW ANALYTICS</Typography>
          </div>
        </CardContent>
      </Card>
    </div>

    // <div style={{padding: "20px" }}>
    //   <FormControl style={{ marginBottom: "20px", minWidth:"100px" }}>
    //     <InputLabel id="demo-simple-select-label">Module</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       label="Subject"
    //       value={moduleSelection}
    //       onChange={handleChange}
    //     >
    //       <MenuItem value="m1">MODULE 1</MenuItem>
    //       <MenuItem value="m2">MODULE 2</MenuItem>
    //     </Select>
    //   </FormControl>

    //   {data[moduleSelection] &&
    //     Object.keys(data[moduleSelection]).map((sub, subIdx) => (

    //       <div key={subIdx} style={{ display:'flex',justifyContent:'center',alignItems:"center",marginBottom: "20px" }}>
    //         <h2>{sub}</h2>
    //         <ul style={{ listStyle: "none", paddingLeft: "0" }}>
    //           {data[moduleSelection][sub]["topics"] &&
    //             data[moduleSelection][sub]["topics"].map((val, idx) => (
    //               <div key={idx} >
    //                 <h4>{val}</h4>
    //                 <Ratingbar
    //                   total_marks={(data[moduleSelection][sub]["marks"][idx]/100)*5}
    //                 />
    //               </div>
    //             ))}
    //         </ul>
    //       </div>



    //     ))}
    // </div>
  );
};

export default ModuleAnalysis;
