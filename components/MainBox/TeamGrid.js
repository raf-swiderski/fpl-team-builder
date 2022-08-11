import PlayerCard from './PlayerCard';
import * as React from 'react';
import { Grid } from '@mui/material'

import { addOnePlayer } from "../../redux/store";


function TeamGrid(props) {

  // const [teamBlueprint, setTeamBlueprint] = React.useState({ // which cards are filled:
  //   0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false
  // });

  // const updateTeamBlueprint = (index) => {
  //   teamBlueprint[index] = !teamBlueprint[index]
  //   setTeamBlueprint(teamBlueprint)
  // }



  return (
    <React.Fragment>
        <Grid container 
        spacing={1} 
        justifyContent='center' 
        direction='row'
        alignItems='center'
        marginTop={3}
        marginBottom={5}
        >

        <Grid item xs={12} container justifyContent='center' >
          <Grid item >
            <PlayerCard index={0}></PlayerCard></Grid>{/* Goalkeepers */}
          <Grid item >
            <PlayerCard index={1}></PlayerCard></Grid>{/* Goalkeepers */}
        </Grid>


        <Grid item xs={12} container justifyContent='center'>
          <Grid item/>
          <Grid item>
            <PlayerCard index={2} ></PlayerCard> {/* Defenders */}
          </Grid>
          <Grid item>
            <PlayerCard index={3} ></PlayerCard> {/* Defenders */}
          </Grid>
          <Grid item>
            <PlayerCard index={4} ></PlayerCard> {/* Defenders */}
          </Grid>
          <Grid item>
            <PlayerCard index={5} ></PlayerCard> {/* Defenders */}
          </Grid>
          <Grid item>
            <PlayerCard index={6} ></PlayerCard> {/* Defenders */}
          </Grid>
          <Grid item/>
        </Grid>

        <Grid item xs={12} container justifyContent='center'>

          <Grid item>
            <PlayerCard index={7} ></PlayerCard> {/* Midfielders */}
          </Grid>

          <Grid item>
            <PlayerCard index={8} ></PlayerCard> {/* Midfielders */}
          </Grid>

          <Grid item>
            <PlayerCard index={9} ></PlayerCard> {/* Midfielders */}
          </Grid>

          <Grid item>
            <PlayerCard index={10} ></PlayerCard> {/* Midfielders */}
          </Grid>

          <Grid item>
            <PlayerCard index={11} ></PlayerCard> {/* Midfielders */}
          </Grid>

        </Grid>

        <Grid item xs={12} container justifyContent='center'>
          <PlayerCard index={12} ></PlayerCard> {/* Forwards */}
          <PlayerCard index={13} ></PlayerCard> {/* Forwards */}
          <PlayerCard index={14} ></PlayerCard> {/* Forwards */}
        </Grid>

      </Grid>

    </React.Fragment>
  );
  
}


export default TeamGrid;