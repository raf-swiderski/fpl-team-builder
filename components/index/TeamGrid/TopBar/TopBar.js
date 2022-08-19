import * as React from 'react';
import { Stack, Box } from '@mui/material'
import TeamValue from './TeamValue/TeamValue'


export default function TopBar() {
  return (
    <React.Fragment>
      <Box sx={{
        bgcolor: 'background',
        boxShadow: 3,
        borderRadius: 2,
        p: 0.8,
        height: 45,
        minWidth: 360,
        maxWidth: 1000
      }}>
        <Stack direction="row" spacing={1}>
          <TeamValue/>
        </Stack>
      </Box>  
    </React.Fragment>
  );
}

