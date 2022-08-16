import * as React from 'react';
import { Button } from '@mui/material';
import theme from '../../../../Theme';
import { ThemeProvider } from '@mui/material/styles';

export default function GetTeamButton(props) {

  

  return (
    <ThemeProvider theme={theme}>
        <Button 
            color="secondary" 
            type='submit' 
            variant='contained'
            sx={{ 
                padding: "8px 6px",
                backgroundColor: 'grey'
            }}
        >
            Get Team
        </Button>
    </ThemeProvider>
  );
}

