import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ChangeSortBy(props) {
  const [sortBy, setSortBy] = React.useState("total_points");

  const handleChange = (event) => {
    setSortBy(event.target.value);
    props.sortBy(event.target.value)
  };

  return (
    <FormControl sx={{ minWidth: 287, backgroundColor: "secondary.main" }}>
      <InputLabel >Sort By</InputLabel>
      <Select
        value={sortBy}
        label="sort-by"
        onChange={handleChange}
      >
        <MenuItem value={"total_points"}>Points</MenuItem>
        <MenuItem value={"now_cost"}>Price</MenuItem>
        <MenuItem value={"points_per_game"}>Points per Game</MenuItem>
        <MenuItem value={"assists"}>Assists</MenuItem>
        <MenuItem value={"bonus"}>Total Bonus Pts</MenuItem>
        <MenuItem value={"bps"}>BPS</MenuItem>
        <MenuItem value={"clean_sheets"}>Clean Sheets</MenuItem>
        <MenuItem value={"dreamteam_count"}>Times in Dream Team</MenuItem>
        <MenuItem value={"event_points"}>GameWeek Points</MenuItem>
        <MenuItem value={"goals_conceded"}>Goals Conceded</MenuItem>
        <MenuItem value={"goals_scored"}>Goals Scored</MenuItem>
        <MenuItem value={"minutes"}>Minutes Played</MenuItem>
        <MenuItem value={"red_cards"}>Red Cards</MenuItem>
        <MenuItem value={"yellow_cards"}>Yellow Cards</MenuItem>
        <MenuItem value={"saves"}>Saves</MenuItem>
        <MenuItem value={"selected_by_percent"}>% Selected By</MenuItem>
        <MenuItem value={"transfers_in"}>Transfers In</MenuItem>
        <MenuItem value={"transfers_out"}>Transfers Out</MenuItem>
      </Select>
    </FormControl>
  );
  // selected by, form, can't be used because they are strings
}

