import * as React from 'react';
import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { getTeamStore } from '../../../../../redux/features/teamGridSlice'
import { useSelector } from "react-redux";

export default function TeamValue() {
  const teamStore = useSelector(getTeamStore)
  const [teamValue, setTeamValue] = useState("0.0")

  useEffect(() => {
    let v = formatTeamValue(teamStore.teamValue.value)
    setTeamValue(v)
  }, [teamStore])

  return (
      <Chip icon={<CurrencyPoundIcon />} label={teamValue} />
  );
}

function formatTeamValue(float) {
  let value = Math.round(float * 100) / 100

  if (Number.isInteger(value)) {
    return `${value}.0`
  }
  return String(value)
}
