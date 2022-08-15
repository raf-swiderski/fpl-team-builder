import * as React from 'react';
import styles from '../styles/Home.module.css'
import { useGetPlayers } from '../components/useRequest';
import TeamGrid from '../components/MainBox/TeamGrid';
import NavBar from '../components/NavBar/NavBar';
import PlayerSelecter from '../components/PlayerSelecter/PlayerSelecter';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
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

