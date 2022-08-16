import * as React from 'react';
import { useGetPlayers } from '../components/useRequest';
import TeamGrid from '../components/index/MainBox/TeamGrid/TeamGrid';
import NavBar from '../components/index/NavBar/NavBar';
import PlayerSelecter from '../components/index/PlayerSelecter/PlayerSelecter';
import { ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import theme from '../Theme';

import { store } from '../redux/store'
import { Provider } from 'react-redux'

const team = null

export default function Home() {

  const { data: allPlayers, error } = useGetPlayers(); // fetching all players from api 

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Grid container justifyContent='center'>
          <TeamGrid team={team}/>
          <PlayerSelecter allPlayers={allPlayers} />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

