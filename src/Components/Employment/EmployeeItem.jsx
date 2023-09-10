import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from '@mui/material/Avatar';

const EmployeeItem = ({ name, avg, company, ctc, idx }) => {

  return (
    <Card sx={{ display: "flex", margin:'10px' }} >

      <Box width="100%"> {/* Set the width to 100% */}
        <CardContent sx={{ display: "flex", flexDirection:'row', justifyContent:'space-between', alignItems:'center' , width: '100%' }}> {/* Set the width to 100% */}
          
          <div style={{width:'100px', display:'flex', justifyContent:'center'}}>
            <Avatar  style={{ border: '2px solid #eeeeee' }} alt="candidate picture" src="/images/Deexith_Passport.jpg" />
          </div>
          
          <Typography sx={{width:'100px', textAlign:'center'}} component="div" variant="subtitle1">
            {name}
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{width:'100px', textAlign:'center'}}
          >
            {company}
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{width:'100px', textAlign:'center'}}
          >
            {ctc}
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{width:'100px', textAlign:'center'}}
          >
            {avg}
          </Typography>
        </CardContent>
      </Box>

    </Card>
  );
};

export default EmployeeItem;
