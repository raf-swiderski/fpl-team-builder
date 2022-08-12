import * as React from 'react';
import { List, Paper } from '@mui/material';
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
                    <Player player={player} index={index} />
              ))
          }
      </List>
  </Paper>

  );
}