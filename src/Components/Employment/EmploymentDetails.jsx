import { useEffect, useState } from "react";

import EmployeeList from "./EmployeeList";

import TitleHead from "./TitleHead";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";

import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material";

const EmploymentDetails = ({ average }) => {
  // senoirs that are matched with current user.
  const [findMatch, setFindMatch] = useState([]);
  //header / Title of the page
  const [template, setTemplate] = useState("");
  const [arrangement, setArrangement] = useState("");

  const [isFetching, setIsFetching] = useState(false);

  let result = [];

  useEffect(() => {
    const findPeople = async () => {
      setIsFetching(true);
      result = [
        {
          name: "a1",
          avg: 89.7,
          company: "amazon",
          ctc: 88,
        },
        {
          name: "a2",
          avg: 89.7,
          company: "amazon",
          ctc: 81,
        },
        {
          name: "a3",
          avg: 89.7,
          company: "amazon",
          ctc: 18,
        },
      ];

      setIsFetching(false);
    };
    findPeople();
    
    //deciding the title of the page based on if match found or not
    let tilte = "";
    if (result.length === 0) {
      tilte = "NO MATCHED USERS FOR YOUR AVERAGE SCORE";
    } else {
      tilte = "MATCHED USERS";
    }
    setFindMatch(result);
    setTemplate(tilte);
  }, []);

  if (isFetching === true) {
    return <TitleHead heading="loading" />;
  }

  const higherToLower = (a, b) => {
    return b.ctc - a.ctc;
  };

  const lowerToHigher = (a, b) => {
    return a.ctc - b.ctc;
  };

  const sortHandler = (e) => {
    const type = e.target.value;

    let temp = [];
    temp = findMatch;
    setArrangement(type);
    if (type === "asc") {
      temp.sort(lowerToHigher);

      setFindMatch(temp);
      return;
    }
    temp.sort(higherToLower);

    setFindMatch(temp);
  };

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <TitleHead heading={template} />

        {findMatch.length !== 0 && (
          <FormControl style={{ minWidth: "200px" }}>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={arrangement}
              label="Sort"
              onChange={sortHandler}
            >
              <MenuItem value="asc">Lower to Higher</MenuItem>
              <MenuItem value="desc">Higher to Lower</MenuItem>
            </Select>
          </FormControl>
        )}
      </div>
      <Divider />

      <Card sx={{ display: "flex", margin:'10px' }} >
        <Box width="100%"> {/* Set the width to 100% */}
          <CardContent sx={{ display: "flex", flexDirection:'row', justifyContent:'space-between', alignItems:'center' , width: '100%' }}> {/* Set the width to 100% */}
            
            <Typography sx={{width:'100px', textAlign:'center'}} component="div" variant="subtitle1">
              Profile
            </Typography>

            <Typography sx={{width:'100px', textAlign:'center'}} component="div" variant="subtitle1">
              Name
            </Typography>

            <Typography
              variant="subtitle1"
              component="div"
              sx={{width:'100px', textAlign:'center'}}
            >
              Company
            </Typography>

            <Typography
              variant="subtitle1"
              component="div"
              sx={{width:'100px', textAlign:'center'}}
            >
              CTC (LPA)
            </Typography>

            <Typography
              variant="subtitle1"
              component="div"
              sx={{width:'100px', textAlign:'center'}}
            >
              EIS Score
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {findMatch.length !== 0 && <EmployeeList seniors={findMatch} />}
    </>
  );
};

export default EmploymentDetails;
