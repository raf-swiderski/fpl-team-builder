import * as React from 'react';
import { useGetPlayers } from '../components/useRequest';
import NavBar from '../components/index/NavBar/NavBar';
import TeamGrid from '../components/index/TeamGrid/TeamGrid';
import PlayerSelecter from '../components/index/PlayerSelecter/PlayerSelecter';
import { ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import theme from '../Theme';

import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Head from 'next/head';

const team = null

export default function Home() {

  const { data: allPlayers, error } = useGetPlayers(); // fetching all players from api 

  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>FPL Team Builder</title>
      </Head>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Grid container justifyContent='center'>
          <TeamGrid/>
          <PlayerSelecter allPlayers={allPlayers} />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

