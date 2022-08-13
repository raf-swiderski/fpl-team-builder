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
              props.allPlayers.map((player, i) => (   
                    <Player player={player} key={i} index={i}/>
              ))
          }
      </List>
  </Paper>

  );
}