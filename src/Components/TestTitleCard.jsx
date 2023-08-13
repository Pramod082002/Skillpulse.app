import React from 'react';
import { Card, CardContent, Divider, Typography } from '@mui/material';

const testTitleCardStyles = {
  textAlign: 'center',
  borderRadius: '6px',
  borderTop: '10px solid rgb(105, 58, 184)',
  padding: '2px', 
  marginBottom: '10px'
};

const TestTitleCard = ({ module_name, subject_name, type_of_test }) => {
  module_name = "MODULE 1";
  subject_name = "DBMS";
  type_of_test = "Q AND A";
  return (
    <Card style={testTitleCardStyles}>
      <CardContent>
        <Typography variant="h4" component="h1">
          {subject_name}
        </Typography>
        <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
        <Typography variant="subtitle1" component="h5">
          <i>
            {module_name} - {type_of_test}
          </i>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestTitleCard;