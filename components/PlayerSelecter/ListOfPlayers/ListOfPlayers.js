import * as React from 'react';
import { List, Paper } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import Player from './Player';

import { useDispatch } from 'react-redux'
import { addOnePlayer } from '../../../redux/features/teamGridSlice'


export default function ListOfPlayers(props) {
  
  const dispatch = useDispatch()
  
  return (

    <Paper style={{
      maxHeight: 480, 
      minWidth: 287, 
      overflow: 'auto'
    
    }}>
      <List>
          {
              props.allPlayers.map((player, index) => (
                  <ListItemButton key={index} 
                  sx={{backgroundColor: "secondary.main"}}
                  onClick={() => dispatch(addOnePlayer(player))}
                  >
                    <Player player={player}/>
                  </ListItemButton>
              ))
          }
      </List>
  </Paper>

  );
}