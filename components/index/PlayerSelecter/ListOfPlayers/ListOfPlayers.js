import * as React from 'react';
import { List, Paper, Pagination } from '@mui/material';
import Player from './Player';
import usePagination from './Pagination'

export default function ListOfPlayers(props) {

  React.useEffect(() => {
    console.log(props.allPlayers)
  }, [])

  const [page, setPage] = React.useState(1)
  const PER_PAGE = 15;

  const count = Math.ceil(props.allPlayers.length / PER_PAGE);
  const _DATA = usePagination(props.allPlayers, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <React.Fragment>
      <Paper style={{ maxHeight: 580, minWidth: 287, overflow: 'auto'}}>
        <List>
            {
                _DATA.currentData().map((player, i) => {
                  return (<Player player={player} key={i} index={i}/>)
                })
            }
        </List>
      </Paper>
      <Pagination         
        count={count}
        size="medium"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange} 
        siblingCount={0}
        style={{ maxWidth: 300, marginTop: 13, marginLeft: 29, marginRight: 25 }}
        />
    </React.Fragment>
  );
}