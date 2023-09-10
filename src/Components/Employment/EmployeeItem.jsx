import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const EmployeeItem = ({ name, avg, company, ctc, idx }) => {
  console.log(name, avg, company, ctc);

  return (
    <Card sx={{ display: "flex", margin:'10px' }} >

      <Box width="100%"> {/* Set the width to 100% */}
        <CardContent sx={{ display: "flex", flexDirection:'row', justifyContent:'space-between', width: '100%' }}> {/* Set the width to 100% */}
          
          <AccountCircleIcon />

          <Typography component="div" variant="h5">
            {name}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Company - {company}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            CTC - {ctc} LPA
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Average - {avg}
          </Typography>
        </CardContent>
      </Box>

    </Card>
  );
};

export default EmployeeItem;
