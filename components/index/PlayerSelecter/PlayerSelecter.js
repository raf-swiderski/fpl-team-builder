import { Box, Grid } from '@mui/material';
import * as React from 'react';
import ListOfPlayers from './ListOfPlayers/ListOfPlayers'
import ChangeSortBy from './ChangeSortBy';
import TogglePosition from './TogglePosition';
import ClubSelecter from './ClubSelecter';

function sortPlayers(allPlayers, sortBy) {  
  return allPlayers.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
}

function filterPlayerByPosition(allPlayers, position) {

  var newPlayers = []
  for (let i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].element_type === parseInt(position)) { 
      newPlayers.push(allPlayers[i]) 
    }
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

  const [allPlayers] = React.useState(props.allPlayers);
  const [sortBy, setSortBy] = React.useState('total_points');
  const [position, setPosition] = React.useState(null);
  const [newPlayers, setNewPlayers] = React.useState(null);

  const getSortBy = (sortBy) => {
    setNewPlayers(manipulateList(allPlayers, sortBy, position))
    setSortBy(sortBy)
  }

  const getPosition = (position) => {
    setNewPlayers(manipulateList(allPlayers, sortBy, position))
    setPosition(position)
  };

  // club printing out, manipulate list, set new club, edit manipulate list. 

  const getClub = (club) => {
    // setNewPlayers(manipulateList(allPlayers, sortBy, position, club))
    console.log(club)
  }

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
      <Grid container justifyContent='center' direction='row' alignItems='center'>
        <TogglePosition position={getPosition}/>
        <ClubSelecter club={getClub} />
      </Grid>
      <ListOfPlayers allPlayers={newPlayers ? newPlayers : allPlayers}/>
    </Box>  
  );
};

