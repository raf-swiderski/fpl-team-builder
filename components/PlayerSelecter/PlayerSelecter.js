import { Box } from '@mui/material';
import * as React from 'react';
import ListOfPlayers from './ListOfPlayers/ListOfPlayers'
import ChangeSortBy from './ChangeSortBy';
import TogglePosition from './TogglePosition';

function sortPlayers(allPlayers, sortBy) {  
  return allPlayers.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
}

function filterPlayerByPosition(allPlayers, position) {
  var newPlayers = []
  for (let i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].element_type === parseInt(position)) { newPlayers.push(allPlayers[i]) }
  }
  if (newPlayers.length === 0) { return allPlayers }
  return newPlayers
}

function manipulateList(allPlayers, sortBy, position) {
  allPlayers = filterPlayerByPosition(allPlayers, position);
  allPlayers = sortPlayers(allPlayers, sortBy);
  return allPlayers;
};

export default function PlayerSelecter(props) { 

  if (props.allPlayers == null) return null

  const [allPlayers] = React.useState(sortPlayers(props.allPlayers, 'points'));
  const [sortBy, setSortBy] = React.useState(null);
  const [position, setPosition] = React.useState(null);
  const [newPlayers, setNewPlayers] = React.useState(null);

  const getSortBy = (sortBy) => {
    setSortBy(sortBy)
    setNewPlayers(manipulateList(allPlayers, sortBy, position))
  }

  const getPosition = (position) => {
    setPosition(position)
    setNewPlayers(manipulateList(allPlayers, sortBy, position))
  };

  return (
    <Box sx={{
      bgcolor: 'background',
      boxShadow: 3,
      borderRadius: 2,
      p: 2,
      marginTop: 3,
      minWidth: 360,
      maxWidth: 360
    }}>

      <ChangeSortBy sortBy={getSortBy}/>
      <br></br>
      <TogglePosition position={getPosition}/>

      <ListOfPlayers allPlayers={newPlayers ? newPlayers : allPlayers}/>
    </Box>  
  );
};