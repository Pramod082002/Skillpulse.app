import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Card,
  CardContent,
  Typography 
} from "@mui/material";
import { useEffect, useState } from "react";
import SingleSubjectCard from "./SingleSubjectCard";

const ModuleAnalysis = ({testAnalysisModule,totalMarks}) => {
  const [moduleSelection, setModuleSelection] = useState("");

  return (
    <div style={{padding: "20px", display:'flex', flexDirection:"column", justifyContent:'center', alignItems:'center' }}>
      <FormControl style={{ marginBottom: "20px", minWidth:"150px" }}>
        <InputLabel id="navbarFont">Module</InputLabel>
        <Select
          id="navbarFont"
          label="Module."
          value={moduleSelection}
          onChange={(e)=>setModuleSelection(e.target.value)}
        >
          <MenuItem id="navbarFont" value="m1">MODULE 1</MenuItem>
          <MenuItem id="navbarFont" value="m2">MODULE 2</MenuItem>
        </Select>
      </FormControl>

      <div style={{minWidth:'200px', display:'flex', flexDirection:'column' }}>
        {testAnalysisModule === 'entryTest' ? (
          moduleSelection === 'm1' ? (
            Object.keys(totalMarks.entryTest.m1).map((element) => (
              <SingleSubjectCard key={element} singleSubject={totalMarks.entryTest.m1[element]} subjectName={element} />
            ))
          ) : (
            Object.keys(totalMarks.entryTest.m2).map((element) => (
              <SingleSubjectCard key={element} singleSubject={totalMarks.entryTest.m2[element]} subjectName={element} />
            ))
          )
        ) : (
          moduleSelection === 'm1' ? (
            Object.keys(totalMarks.exitTest.m1).map((element) => (
              <SingleSubjectCard key={element} singleSubject={totalMarks.exitTest.m1[element]} subjectName={element} />
            ))
          ) : (
            Object.keys(totalMarks.exitTest.m2).map((element) => (
              <SingleSubjectCard key={element} singleSubject={totalMarks.exitTest.m2[element]} subjectName={element} />
            ))
          )
        )}
      </div>
      
    </div>
  );
};

export default ModuleAnalysis;
