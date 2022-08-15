import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@mui/material/styles';
import { playerPhoto, playerName, playerPrice } from './playerCard.module.css'
import theme from '../../Theme';
import EmptyPlayerCard from './EmptyPlayerCard'
import { useSelector, useDispatch } from "react-redux";
import { getTeamStore } from '../../redux/features/teamGridSlice'
import { removeOnePlayer } from '../../redux/features/teamGridSlice'

function PlayerCard(props) {
  const dispatch = useDispatch()
  const teamStore = useSelector(getTeamStore)
  const [player, setPlayer] = useState(null)
  const isMounted = useRef(false);
  const [hasBeenPreviouslyFilled, setHasBeenPreviouslyFilled] = useState(false)

  useEffect(() => {
    if (isMounted.current) { setPlayer(teamStore[props.index])}
    if (teamStore[props.index].prevFilled) { setHasBeenPreviouslyFilled(true)}
  }, [teamStore])

  useEffect(() => {
    isMounted.current = true;
    setTimeout(() => {}, 100)
  }, [])

  if (!teamStore[props.index].filled) { return <EmptyPlayerCard index={props.index} hasBeenPreviouslyFilled={hasBeenPreviouslyFilled} /> }

  const playerInfo = teamStore[props.index].player
  const playerPhotoId = playerInfo.photo.slice(0, -4); 
  const picUrl = `https://resources.premierleague.com/premierleague/photos/players/110x140/p${playerPhotoId}.png`

  return (
    <ThemeProvider theme={theme}>
      <Card variant="outlined" sx={{ width: 180, minHeight: 110, margin: 0 }}>
        <CardContent >
          <CardMedia className={playerPhoto} component="img" alt='playerPhoto' src={picUrl} />
          <IconButton 
                    onClick={() => dispatch(removeOnePlayer(props.index))}
                    sx={{ position: 'absolute',
                    alignSelf: 'flex-end',
                    marginTop: -4.7,
                    marginLeft: 16.4 }}>
            <CloseIcon />
          </IconButton> 
          <Typography align="center" className={playerName}>  {playerInfo.web_name} </Typography>
          <Typography align="center" className={playerPrice}color="text.secondary">
            £{playerInfo.now_cost}m
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>    
  )
}


export default PlayerCard;
