import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';
import EmptyPlayerCard from './EmptyPlayerCard'

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useSelector } from "react-redux";
import { getTeamStore} from '../../redux/features/teamGridSlice'

function PlayerCard(props) {

  const [player, setPlayer] = useState(null)
  const isMounted = useRef(false);

  const teamStore = useSelector(getTeamStore)

  useEffect(() => {
    if (isMounted.current) {
      setPlayer(teamStore[props.index])
    }
  }, [teamStore])

  useEffect(() => {
    isMounted.current = true;
    setTimeout(() => {}, 100)
  }, [])

  if (!teamStore[props.index].filled) {
    return <EmptyPlayerCard />
  }

  const playerInfo = teamStore[props.index].player
  
  return (
    <ThemeProvider theme={theme}>

      <Card variant="outlined"       
      sx={{
        bgcolor: 'secondary.main',
        width: 180,
        minHeight: 110
      }}>
        <CardContent>
          <Typography color="text.secondary" >

              {playerInfo.team_name}

          </Typography>
          <IconButton 
                    // onClick={removePlayerCard}
                    sx={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    marginTop: -4.7,
                    marginLeft: 16.4 
                }}>
            <CloseIcon />
          </IconButton> 
          <Typography component="div">

            {playerInfo.first_name} {playerInfo.web_name}

          </Typography>
          <Typography color="text.secondary">

            £{playerInfo.now_cost}m
          </Typography>
          <Typography >

            PPG: {playerInfo.points_per_game}

          </Typography>

        </CardContent>
      </Card>
    </ThemeProvider>    
  )
}


export default PlayerCard;