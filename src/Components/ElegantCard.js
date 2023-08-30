import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styling the card component
const ElegantCard = styled(Card)(({ theme }) => ({
  borderRadius: 25,
  display: 'flex',
  justifyContent: 'center',
  alignItems : 'center',
  height: '150px',
  width: '150px',
  border: `1px solid black`,
  background: 'white',
  margin: '10px',
  background: 'linear-gradient(to bottom, white, lightgray)',
  // boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, background 0.3s ease, border-color 0.3s ease', // Transition on hover
  '&:hover': {
    transform: 'scale(1.05)', // Increase scale on hover
    cursor: 'pointer',
    background: 'black', // Change background color on hover
    borderColor: 'white', // Change border color on hover
    color: 'white', // Change text color on hover
  },
}));

export default function CustomCard({cardName}) {
  return (
    <ElegantCard variant="outlined">
      <Typography variant="h5" textAlign="center" component="div">
          {cardName===undefined || cardName==="" ? "NULL" : cardName}
      </Typography>
    </ElegantCard>
  );
}
