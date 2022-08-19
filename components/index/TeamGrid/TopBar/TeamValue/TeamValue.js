import * as React from 'react';
import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { getTeamStore } from '../../../../../redux/features/teamGridSlice'
import { useSelector } from "react-redux";

export default function TeamValue() {
  const teamStore = useSelector(getTeamStore)
  const [teamValue, setTeamValue] = useState("0.0")
  const [initialBudget, setInitialBudget] = useState(100)
  const [budget, setBudget] = useState("100.0")

  useEffect(() => {
    let v = formatFloatToString(teamStore.teamValue.value)
    let b = formatFloatToString(initialBudget - teamStore.teamValue.value)
    setBudget(b)
    setTeamValue(v)
  }, [teamStore])

  return (
    <React.Fragment>
      <Chip 
        sx={{ width: 90 }}
        icon={<CurrencyPoundIcon />} 
        label={budget} 
      />
      <Chip 
        sx={{ width: 90 }}
        icon={<ShoppingCartIcon />} 
        label={teamValue} 
      />
    </React.Fragment>
  );
}

function formatFloatToString(float) {
  let value = roundToTwoDecimalPlaces(float)

  if (Number.isInteger(value)) {
    return `${value}.0`
  }
  return String(value)
}

function roundToTwoDecimalPlaces(float) {
  return Math.round(float * 100) / 100
}

