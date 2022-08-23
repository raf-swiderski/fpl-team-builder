// components/useRequest.js
import useSWR from 'swr';

const allPlayersUrl = 'https://fpl-api-raf.herokuapp.com/allplayers'

const premTeamsUrl = 'https://fpl-api-raf.herokuapp.com/premteams'

// const fetcher = (url) => fetch(url).then((res) => res.json());

const fetcher = async url => {
  const res = await fetch(url)

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    console.log(error.status)
    error.status = res.status
    throw error
  }

  return res.json()
}

export const useGetPlayers = () => {
  const { data, error } = useSWR(allPlayersUrl, fetcher);


  return { data, error };
};

export const useGetTeams = () => {
  const { data, error } = useSWR(premTeamsUrl, fetcher);
  return { data, error };
};