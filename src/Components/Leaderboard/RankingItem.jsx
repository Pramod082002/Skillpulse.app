import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  CardHeader,
  Divider,
  Button,
  CardActions,
} from "@mui/material";

const RankingItem = ({
  ranking,
  name,
  eis_score,
  email,
  Modalopener,
  isUser,
}) => {
  const studentRank = ranking;
  const studentName = name;
  const studentScore = eis_score;
  // console.log(ranking, name, eis_score);

  const clickHandler = () => {
    Modalopener(email);
  };

  return (
    <Card sx={{ display: "flex", backgroundColor: isUser ? "#86f791" : "" }}>
      <CardHeader title={studentRank} />

      <CardMedia
        component="img"
        sx={{ width: 100, borderRadius: "50%", border: "2px solid black" }}
        image="/images/avatar.png"
        alt="Student Profile Picture"
      />

      <CardContent>
        <Typography variant="h5" component="div">
          {studentName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          EIS SCORE - {studentScore}
        </Typography>
      </CardContent>
      <CardActions>
        {!isUser && (
          <Button
            size="small"
            color="primary"
            onClick={clickHandler}
            sx={{ border: "2px solid black" }}
          >
            Compare
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default RankingItem;
