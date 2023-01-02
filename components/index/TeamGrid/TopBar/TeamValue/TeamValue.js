import * as React from 'react';
import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { getTeamStore } from '../../../../../redux/features/teamGridSlice'
import { useSelector } from "react-redux";

export default function TeamValue() {
  const teamStore = useSelector(getTeamStore)
  const [teamValue, setTeamValue] = useState(0)
  const [budget, setBudget] = useState(0)
  const [budgetRemaining, setBudgetRemaining] = useState(teamStore.teamValue.budget)

  useEffect(() => {
    setBudget(teamStore.teamValue.budget)
    setBudgetRemaining(teamStore.teamValue.budget - teamStore.teamValue.value)
    setTeamValue(teamStore.teamValue.value)
  }, [teamStore]) // This hook is triggered after teamStore reducer function is called.

  return (
    <React.Fragment>
      <Chip 
        sx={{ width: 90 }}
        icon={<CurrencyPoundIcon />} 
        label={insertDecimalPoint(budgetRemaining)} 
      />
      <Chip 
        sx={{ width: 90 }}
        icon={<ShoppingCartIcon />} 
        label={insertDecimalPoint(teamValue)} 
      />
    </React.Fragment>
  );
}

function insertDecimalPoint(num) {
  const numString = String(num);
  const firstPart = numString.slice(0, -1);
  const lastPart = numString.slice(-1);

  if (numString === "0") { 
    return "0" 
  } else if (numString.length < 2) { 
    return `0.${lastPart}`; 
  } else {
    return `${firstPart}.${lastPart}`;
  }
}
