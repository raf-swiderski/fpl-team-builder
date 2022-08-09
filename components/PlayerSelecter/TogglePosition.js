import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TogglePosition(props) {
  const [toggle, setToggle] = React.useState();

  const handleToggle = (event, newToggle) => {
    setToggle(newToggle);
    props.position(newToggle)

  };


  return (
    <ToggleButtonGroup
      value={toggle}
      exclusive
      onChange={handleToggle}
      aria-label="sort-by-toggle"
      sx={{backgroundColor: "secondary.main"}}
    >
      <ToggleButton value="1" aria-label="left aligned">
        GKP
      </ToggleButton>
      <ToggleButton value="2" aria-label="centered">
        DEF
      </ToggleButton>
      <ToggleButton value="3" aria-label="right aligned">
        MID
      </ToggleButton>
      <ToggleButton value="4" aria-label="right aligned">
        FWD
      </ToggleButton>
    </ToggleButtonGroup>
  );
}