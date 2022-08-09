import * as React from 'react';
import theme from '../../Theme';
import { Card, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';

export default function EmptyPlayerCard(props) {

  const handleClick = (e) => {
    props.resetPlayerCard(true)
  }

  return (
    <ThemeProvider theme={theme}> 
      <Card variant="outlined"       
      sx={{
        bgcolor: 'secondary.main',
        width: 180, 
        minHeight: 110
      }}>
        <CardContent>
          <IconButton 
                onClick={handleClick}
                    sx={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    marginTop: -2.49,
                    marginLeft: 16.4 
                }}>
              <RefreshIcon/>
           </IconButton> 
          <Typography color="text.secondary" >

              Select Player

          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>    
  )
};