import * as React from 'react';
import { List, Paper } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import Player from './Player';

export default function ListOfPlayers(props) {

  return (

    <Paper style={{
      maxHeight: 480, 
      minWidth: 287, 
      overflow: 'auto'
    
    }}>
      <List>
          {
              props.allPlayers.map((player, index) => (
                  <ListItemButton key={index} sx={{backgroundColor: "secondary.main"}}
                  >
                    <Player player={player}/>
                  </ListItemButton>
              ))
          }
      </List>
  </Paper>

  );
}