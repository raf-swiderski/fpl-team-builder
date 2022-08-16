import * as React from 'react';
import { List, Paper, Pagination } from '@mui/material';
import Player from './Player';

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default function ListOfPlayers(props) {


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
        style={{ maxWidth: 300 }}
        />
    </React.Fragment>
  );
}