import * as React from 'react';
import theme from '../../Theme';
import { Card, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';

import { useDispatch } from "react-redux";
import { revertCardToPrevPlayer } from '../../redux/features/teamGridSlice'

export default function EmptyPlayerCard(props) {

  const dispatch = useDispatch()
  
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
                onClick={() => dispatch(revertCardToPrevPlayer(props.index))}
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