import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@mui/material/styles';
import { playerPhoto, playerName, playerPrice, markPlayerName, markPlayerPrice } from './playerCard.module.css'
import theme from '../../../../Theme';
import EmptyPlayerCard from './EmptyPlayerCard'
import { useSelector, useDispatch } from "react-redux";
import { getTeamStore } from '../../../../redux/features/teamGridSlice'
import { removeOnePlayer } from '../../../../redux/features/teamGridSlice'

function PlayerCard(props) {
  const dispatch = useDispatch()
  const teamStore = useSelector(getTeamStore)
  const [player, setPlayer] = useState(null)
  const isMounted = useRef(false);
  const [hasBeenPreviouslyFilled, setHasBeenPreviouslyFilled] = useState(false)
  const [pricingProperty, setPricingProperty] = useState('now_cost')

  useEffect(() => {
    if (isMounted.current) { setPlayer(teamStore[props.index])}
    if (teamStore[props.index].prevFilled) { setHasBeenPreviouslyFilled(true)}
    teamStore.teamValue.showTrueValue ? setPricingProperty('true_value') : setPricingProperty('now_cost')
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
      <Card style={{ border: "none", boxShadow: "none" }} sx={{ width: 180, height: 150, margin: 0 }}>
        <CardContent >
          <CardMedia className={playerPhoto} component="img" alt='playerPhoto' src={picUrl} />
          <IconButton 
                    onClick={() => dispatch(removeOnePlayer({
                        index: props.index,
                        player: playerInfo
                      }
                    ))}
                    sx={{ position: 'absolute',
                    alignSelf: 'flex-end',
                    marginTop: -12.7,
                    marginLeft: 14.4
                    }}>
            <CloseIcon fontSize='small' sx={{bgcolor: 'background',  borderRadius: 1 }}/>
          </IconButton> 
          <Typography align="center" className={playerName}> 
            <mark className={markPlayerName}> {playerInfo.web_name}</mark>
          </Typography>
          <Typography align="center" className={playerPrice}>
            <mark className={markPlayerPrice}>??{insertDecimalPoint(playerInfo[pricingProperty])}m</mark> 
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>    
  )
}

function insertDecimalPoint(num) {
  const numString = String(num);
  const firstPart = numString.slice(0, -1);
  const lastPart = numString.slice(-1);

  if (numString.length < 2) { return `0.${lastPart}`; }
  return `${firstPart}.${lastPart}`;
}


export default PlayerCard;
