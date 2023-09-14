import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, Fragment } from "react";

//name is user2's name
const Row = ({ row, name }) => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row[0][0]}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>You</TableCell>
                    <TableCell align="right">{name}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.map((entry, index) => (
                    <TableRow key={index}>
                      {/* subject Name */}
                      <TableCell component="th" scope="row">
                        {entry[1]}
                      </TableCell>
                      {/* user1 marks */}
                      <TableCell>{entry[2]}</TableCell>
                      {/* user2 marks */}
                      <TableCell align="right">{entry[3]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const ComparisonTable = ({ user1, user2 }) => {
  //sub is the current item of the array.
  const func = (moduleType, testType, title, arr, sub, index) => {
    const u1 = user1?.[moduleType]?.[testType]?.[sub]?.["totalMarks"];
    const u2 = user2?.[moduleType]?.[testType]?.[sub]?.["totalMarks"];

    arr[index] = [
      title,
      sub,
      u1 === undefined || u1 === -1 ? "N/A" : u1,
      u2 === undefined || u2 === -1 ? "N/A" : u2,
    ];
  };

  //module 2 stuff
  let module2_entry_test = [];
  let module2_exit_test = [];

  const module2_subjects = ["cn", "os", "dbms"];

  module2_subjects.forEach(
    func.bind(
      null,
      "m2",
      "entry_test",
      "MODULE 2 - ENTRY TEST",
      module2_entry_test
    )
  );

  module2_subjects.forEach(
    func.bind(
      null,
      "m2",
      "exit_test",
      "MODULE 2 - EXIT TEST",
      module2_exit_test
    )
  );
  // ------module 2 stuff ended-----

  // module1 stuff

  const module1_subjects = ["c/c++", "java", "oops", "dsa"];
  let module1_entry_test = [];
  let module1_exit_test = [];
  module1_subjects.forEach(
    func.bind(
      null,
      "m1",
      "entry_test",
      "MODULE 1 - ENTRY TEST",
      module1_entry_test
    )
  );

  module1_subjects.forEach(
    func.bind(
      null,
      "m1",
      "exit_test",
      "MODULE 1 - EXIT TEST",
      module1_exit_test
    )
  );

  //---module 1 stuff ended ----

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Comparison Table</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Row row={module1_entry_test} name={user2.name} />
            <Row row={module1_exit_test} name={user2.name} />
            <Row row={module2_entry_test} name={user2.name} />
            <Row row={module2_exit_test} name={user2.name} />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ComparisonTable;
