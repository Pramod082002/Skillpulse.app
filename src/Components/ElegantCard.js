import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {subjectIconLinks} from '../Data/ModulesData'

// Styling the card component
const ElegantCard = styled(Card)(({ theme }) => ({
  borderRadius: 25,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems : 'center', 
  
  height: '150px',
  width: '150px',
  border: `1px solid black`,
  background: 'white',
  margin: '10px',
  // background: 'linear-gradient(to bottom, white, lightgray)',
  // boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, background 0.3s ease, border-color 0.3s ease', // Transition on hover
  '&:hover': {
    transform: 'scale(1.05)', // Increase scale on hover
    cursor: 'pointer',
    borderColor: 'white', // Change border color on hover
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add a subtle box-shadow on hover
  },
  '&:active': {
    transform: 'scale(0.95)', // Decrease scale on click
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', // Add a subtle box-shadow on click
  }

}));

export default function CustomCard({cardName}) {
  return (
    <ElegantCard variant="outlined">
      {
        (cardName.toLowerCase() in subjectIconLinks) ? 

        <div>
          <img style={{ width: '40px', height: '40px', margin:'20px' }} src={subjectIconLinks[cardName.toLowerCase()]} alt="Icon" />
        </div>

        :

        <></>
      }
      

      <Typography variant="h6" textAlign="center" component="div">
          {cardName===undefined || cardName==="" ? "NULL" : cardName}
      </Typography>

    </ElegantCard>
  );
}
