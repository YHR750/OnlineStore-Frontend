import React from 'react';
import Box from '@mui/material/Box';
import Hero from '../assets/img/hero.jpg';

export default function hero() {
  return (
    <Box className="heroImage">
        <img src={Hero} alt=''/>
        <Box className="overlay">
    
        </Box>
    </Box>
  )
}

