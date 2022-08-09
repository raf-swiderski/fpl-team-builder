// components/useRequest.js
import useSWR from 'swr';

const allPlayersUrl = 'https://fpl-api-raf.herokuapp.com/allplayers'

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetPlayers = () => {
  const { data, error } = useSWR(allPlayersUrl, fetcher);
  return { data, error };
};