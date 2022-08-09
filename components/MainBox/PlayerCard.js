import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';
import EmptyPlayerCard from './EmptyPlayerCard'

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function PlayerCard(props) {
  const player = props.player;
  const [ empty, setEmpty ] = React.useState(true)

  const removePlayerCard = (e) => {
    setEmpty(true)
    props.updateTeamBlueprint(props.index)
  }

  const resetPlayerCard = () => {
    setEmpty(false)
    props.updateTeamBlueprint(props.index)
  }

  if (empty === true) {
    return <EmptyPlayerCard resetPlayerCard={resetPlayerCard} />
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
          <Typography color="text.secondary" >

              {player.team_name}

          </Typography>
          <IconButton 
                    onClick={removePlayerCard}
                    sx={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    marginTop: -4.7,
                    marginLeft: 16.4 
                }}>
            <CloseIcon />
          </IconButton> 
          <Typography component="div">

            {player.first_name} {player.web_name}

          </Typography>
          <Typography color="text.secondary">

            £{player.now_cost}m
          </Typography>
          <Typography >

            PPG: {player.points_per_game}

          </Typography>

        </CardContent>
      </Card>
    </ThemeProvider>    
  )
}


export default PlayerCard;
