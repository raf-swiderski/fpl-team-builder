import PlayerCard from './PlayerCard';
import * as React from 'react';
import { Grid } from '@mui/material'

function TeamGrid(props) {

  return (
    <React.Fragment>
        <Grid container spacing={1} justifyContent='center' direction='row' alignItems='center' marginTop={3} marginBottom={5}>
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