import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, MenuItem, Menu, Divider  } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useGetTeams } from '../../useRequest'

export default function ClubSelecter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [premteams, setPremTeams] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    console.log(e.target.innerText)
  };
  const { data: teams, error } = useGetTeams() // fetching all players from api 

  useEffect(() => {
    setPremTeams(teams)
  }, [teams])

  if (!premteams) { return null }

  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ width: 115, height: 47 }}
      >
        Club
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >
              All Clubs
        </MenuItem>
        <Divider sx={{ my: 0.5, bgcolor: 'background' }} />
        { 
          premteams.map((team, i) => {
            return(
              <MenuItem onClick={handleClose} key={i}>
                {team.name}
              </MenuItem>
            )
          })
        }
      </Menu>
    </div>
  );
}
