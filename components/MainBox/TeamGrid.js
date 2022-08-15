import * as React from 'react';
import { Grid, Box } from '@mui/material'
import PlayerCard from './PlayerCard';


import Image from 'next/image'
import { teamGrid } from './teamGrid.module.css'



export default function TeamGrid() {
  return (
    <React.Fragment>
    
      <Box sx={{ bgcolor: '#228B22', boxShadow: 1, borderRadius: 2, minWidth: 300, maxWidth: 1000,  marginTop: 3, marginLeft: 2, marginRight: 2,width: 'auto' }}>
        <div style={{width: '100%', height: '95%', position: 'relative'}}>
          <Image alt="pitch" src="/pitch.png" layout="fill" objectFit="contain" priority quality={100}/>

          <Grid className={teamGrid} container spacing={3} justifyContent='center' direction='row' alignItems='center' marginTop={3} >

            <Grid  item xs={12} container justifyContent='center' >
              <Grid item ><PlayerCard index={0}></PlayerCard></Grid>{/* Goalkeeper */}
              <Grid item ><PlayerCard index={1}></PlayerCard></Grid>{/* Goalkeeper */}
            </Grid>

            <Grid item xs={12} container justifyContent='center'>
              <Grid item><PlayerCard index={2} ></PlayerCard></Grid> {/* Defender */}
              <Grid item><PlayerCard index={3} ></PlayerCard></Grid> {/* Defender */}
              <Grid item><PlayerCard index={4} ></PlayerCard></Grid> {/* Defender */}
              <Grid item><PlayerCard index={5} ></PlayerCard></Grid> {/* Defender */}
              <Grid item><PlayerCard index={6} ></PlayerCard></Grid> {/* Defender */}
            </Grid>

            <Grid item xs={12} container justifyContent='center'>
              <Grid item><PlayerCard index={7} ></PlayerCard></Grid> {/* Midfielder */}
              <Grid item><PlayerCard index={8} ></PlayerCard></Grid> {/* Midfielder */}
              <Grid item><PlayerCard index={9} ></PlayerCard></Grid> {/* Midfielder */}
              <Grid item><PlayerCard index={10} ></PlayerCard></Grid> {/* Midfielder */}
              <Grid item><PlayerCard index={11} ></PlayerCard></Grid> {/* Midfielder */}
            </Grid>

            <Grid item xs={12} container justifyContent='center'>
              <Grid item><PlayerCard index={12} ></PlayerCard></Grid> {/* Forward */}
              <Grid item><PlayerCard index={13} ></PlayerCard></Grid> {/* Forward */}
              <Grid item><PlayerCard index={14} ></PlayerCard></Grid> {/* Forward */}
            </Grid>

          </Grid>
        </div>
      </Box>
    </React.Fragment>
  );
}