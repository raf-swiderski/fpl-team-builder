import * as React from 'react';
import { Grid, Box } from '@mui/material'


export default function TopBar() {
  return (
    <React.Fragment>
    
    <Box sx={{
      bgcolor: 'background',
      boxShadow: 3,
      borderRadius: 2,
      p: 2,
      height: 45,
      minWidth: 360,
      maxWidth: 1000
    }}>
      <Grid container justifyContent='center' direction='row' alignItems='center'>
        
      </Grid>
    </Box>  
    </React.Fragment>
  );
}