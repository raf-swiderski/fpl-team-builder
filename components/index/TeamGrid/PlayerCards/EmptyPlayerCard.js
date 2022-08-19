import * as React from 'react';
import theme from '../../../../Theme';
import { Card, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import {selectPlayer} from './emptyPlayerCard.module.css'

import { useDispatch, useSelector } from "react-redux";
import { revertCardToPrevPlayer } from '../../../../redux/features/teamGridSlice'

export default function EmptyPlayerCard(props) {

  const dispatch = useDispatch()
  
  return (
    <ThemeProvider theme={theme}> 
      <Card style={{ border: "none", boxShadow: "none" }}
      sx={{
        width: 180, 
        height: 150,
        margin: 0
      }}>
        <CardContent>
          {props.hasBeenPreviouslyFilled && 
            <IconButton 
                  onClick={() => dispatch(revertCardToPrevPlayer(props.index))}
                      sx={{
                      position: 'absolute',
                      alignSelf: 'flex-end',
                      marginTop: 1.49,
                      marginLeft: 8.4 
                  }}>
                <RefreshIcon fontSize='small' sx={{bgcolor: 'background',  borderRadius: 1 }}
                />
            </IconButton> 
          }
          <Typography className={selectPlayer} >

              <mark>Select Player</mark>

          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>    
  )
};