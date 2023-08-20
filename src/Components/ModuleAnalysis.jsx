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
import { TestModulesHistory } from "../Data/TestHistory";
import EmptyModuleAnalysis from '../Components/EmptyModuleAnalysis'
import { TestTotalMarks } from "../Data/TestHistory";
import { cnEntryTest } from "../Data/QNA Entry Tests/ALL_ENTRY_TEST";
import SingleSubjectCard from "./SingleSubjectCard";

const ModuleAnalysis = ({testAnalysisModule}) => {
  const [moduleSelection, setModuleSelection] = useState("");

  return (
    <div style={{padding: "20px", display:'flex', flexDirection:"column", justifyContent:'center', alignItems:'center' }}>
      <FormControl style={{ marginBottom: "20px", minWidth:"200px" }}>
        <InputLabel id="demo-simple-select-label">Module</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Subject"
          value={moduleSelection}
          onChange={(e)=>setModuleSelection(e.target.value)}
        >
          <MenuItem value="m1">MODULE 1</MenuItem>
          <MenuItem value="m2">MODULE 2</MenuItem>
        </Select>
      </FormControl>

      <div style={{minWidth:'200px', display:'flex', flexDirection:'column', gap: '20px' }}>
        {testAnalysisModule === 'entry test' ? (
          moduleSelection === 'm1' ? (
            Object.keys(TestTotalMarks.entryTest.m1).map((element) => (
              <SingleSubjectCard key={element} singleSubject={TestTotalMarks.entryTest.m1[element]} subjectName={element} />
            ))
          ) : (
            Object.keys(TestTotalMarks.entryTest.m2).map((element) => (
              <SingleSubjectCard key={element} singleSubject={TestTotalMarks.entryTest.m2[element]} subjectName={element} />
            ))
          )
        ) : (
          moduleSelection === 'm1' ? (
            Object.keys(TestTotalMarks.exitTest.m1).map((element) => (
              <SingleSubjectCard key={element} singleSubject={TestTotalMarks.exitTest.m1[element]} subjectName={element} />
            ))
          ) : (
            Object.keys(TestTotalMarks.exitTest.m2).map((element) => (
              <SingleSubjectCard key={element} singleSubject={TestTotalMarks.exitTest.m2[element]} subjectName={element} />
            ))
          )
        )}
      </div>
      
    </div>
  );
};

export default ModuleAnalysis;
